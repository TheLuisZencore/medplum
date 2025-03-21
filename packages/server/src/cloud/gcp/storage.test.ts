import { GCPBlobStorage } from './storage';
import { Binary } from '@medplum/fhirtypes';
import { PassThrough } from 'stream';

describe('Integration Tests for GCPBlobStorage', () => {
  const testStorageString = 'your-project-id:your-test-bucket';
  const storage = new GCPBlobStorage(testStorageString);
  const testBinary: Binary = {
    id: 'test123',
    meta: { versionId: 'v1' },
    resourceType: 'Binary', // Added resourceType
    contentType: 'text/plain', // Added contentType
  };

  it('should write and then read a binary file', async () => {
    const content = 'Hello, world!';
    const contentStream = new PassThrough();
    contentStream.end(content);

    await storage.writeBinary(testBinary, 'test.txt', 'text/plain', contentStream);

    const readStream = await storage.readBinary(testBinary);
    let data = '';
    for await (const chunk of readStream) {
      data += chunk;
    }
    expect(data).toEqual(content);
  });

  it('should generate a valid signed URL', async () => {
    const url = await storage.getPresignedUrl(testBinary);
    expect(url).toContain('https://');
  });
});