/*
 * This is a generated file
 * Do not edit manually.
 */

import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { Device } from './Device';
import { Duration } from './Duration';
import { Extension } from './Extension';
import { Group } from './Group';
import { Identifier } from './Identifier';
import { Location } from './Location';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Patient } from './Patient';
import { Period } from './Period';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Quantity } from './Quantity';
import { Reference } from './Reference';
import { Resource } from './Resource';
import { ServiceRequest } from './ServiceRequest';
import { Substance } from './Substance';

/**
 * A sample to be used for analysis.
 */
export interface Specimen {

  /**
   * This is a Specimen resource
   */
  readonly resourceType: 'Specimen';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Id for specimen.
   */
  identifier?: Identifier[];

  /**
   * The identifier assigned by the lab when accessioning specimen(s). This
   * is not necessarily the same as the specimen identifier, depending on
   * local lab procedures.
   */
  accessionIdentifier?: Identifier;

  /**
   * The availability of the specimen.
   */
  status?: 'available' | 'unavailable' | 'unsatisfactory' | 'entered-in-error';

  /**
   * The kind of material that forms the specimen.
   */
  type?: CodeableConcept;

  /**
   * Where the specimen came from. This may be from patient(s), from a
   * location (e.g., the source of an environmental sample), or a sampling
   * of a substance or a device.
   */
  subject?: Reference<Patient | Group | Device | Substance | Location>;

  /**
   * Time when specimen was received for processing or testing.
   */
  receivedTime?: string;

  /**
   * Reference to the parent (source) specimen which is used when the
   * specimen was either derived from or a component of another specimen.
   */
  parent?: Reference<Specimen>[];

  /**
   * Details concerning a service request that required a specimen to be
   * collected.
   */
  request?: Reference<ServiceRequest>[];

  /**
   * Details concerning the specimen collection.
   */
  collection?: SpecimenCollection;

  /**
   * Details concerning processing and processing steps for the specimen.
   */
  processing?: SpecimenProcessing[];

  /**
   * The container holding the specimen.  The recursive nature of
   * containers; i.e. blood in tube in tray in rack is not addressed here.
   */
  container?: SpecimenContainer[];

  /**
   * A mode or state of being that describes the nature of the specimen.
   */
  condition?: CodeableConcept[];

  /**
   * To communicate any details or issues about the specimen or during the
   * specimen collection. (for example: broken vial, sent with patient,
   * frozen).
   */
  note?: Annotation[];
}

/**
 * Details concerning the specimen collection.
 */
export interface SpecimenCollection {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Person who collected the specimen.
   */
  collector?: Reference<Practitioner | PractitionerRole>;

  /**
   * Time when specimen was collected from subject - the physiologically
   * relevant time.
   */
  collectedDateTime?: string;

  /**
   * Time when specimen was collected from subject - the physiologically
   * relevant time.
   */
  collectedPeriod?: Period;

  /**
   * The span of time over which the collection of a specimen occurred.
   */
  duration?: Duration;

  /**
   * The quantity of specimen collected; for instance the volume of a blood
   * sample, or the physical measurement of an anatomic pathology sample.
   */
  quantity?: Quantity;

  /**
   * A coded value specifying the technique that is used to perform the
   * procedure.
   */
  method?: CodeableConcept;

  /**
   * Anatomical location from which the specimen was collected (if subject
   * is a patient). This is the target site.  This element is not used for
   * environmental specimens.
   */
  bodySite?: CodeableConcept;

  /**
   * Abstinence or reduction from some or all food, drink, or both, for a
   * period of time prior to sample collection.
   */
  fastingStatusCodeableConcept?: CodeableConcept;

  /**
   * Abstinence or reduction from some or all food, drink, or both, for a
   * period of time prior to sample collection.
   */
  fastingStatusDuration?: Duration;
}

/**
 * Time when specimen was collected from subject - the physiologically
 * relevant time.
 */
export type SpecimenCollectionCollected = Period | string;

/**
 * Abstinence or reduction from some or all food, drink, or both, for a
 * period of time prior to sample collection.
 */
export type SpecimenCollectionFastingStatus = CodeableConcept | Duration;

/**
 * The container holding the specimen.  The recursive nature of
 * containers; i.e. blood in tube in tray in rack is not addressed here.
 */
export interface SpecimenContainer {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Id for container. There may be multiple; a manufacturer's bar code,
   * lab assigned identifier, etc. The container ID may differ from the
   * specimen id in some circumstances.
   */
  identifier?: Identifier[];

  /**
   * Textual description of the container.
   */
  description?: string;

  /**
   * The type of container associated with the specimen (e.g. slide,
   * aliquot, etc.).
   */
  type?: CodeableConcept;

  /**
   * The capacity (volume or other measure) the container may contain.
   */
  capacity?: Quantity;

  /**
   * The quantity of specimen in the container; may be volume, dimensions,
   * or other appropriate measurements, depending on the specimen type.
   */
  specimenQuantity?: Quantity;

  /**
   * Introduced substance to preserve, maintain or enhance the specimen.
   * Examples: Formalin, Citrate, EDTA.
   */
  additiveCodeableConcept?: CodeableConcept;

  /**
   * Introduced substance to preserve, maintain or enhance the specimen.
   * Examples: Formalin, Citrate, EDTA.
   */
  additiveReference?: Reference<Substance>;
}

/**
 * Introduced substance to preserve, maintain or enhance the specimen.
 * Examples: Formalin, Citrate, EDTA.
 */
export type SpecimenContainerAdditive = CodeableConcept | Reference<Substance>;

/**
 * Details concerning processing and processing steps for the specimen.
 */
export interface SpecimenProcessing {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Textual description of procedure.
   */
  description?: string;

  /**
   * A coded value specifying the procedure used to process the specimen.
   */
  procedure?: CodeableConcept;

  /**
   * Material used in the processing step.
   */
  additive?: Reference<Substance>[];

  /**
   * A record of the time or period when the specimen processing occurred.
   * For example the time of sample fixation or the period of time the
   * sample was in formalin.
   */
  timeDateTime?: string;

  /**
   * A record of the time or period when the specimen processing occurred.
   * For example the time of sample fixation or the period of time the
   * sample was in formalin.
   */
  timePeriod?: Period;
}

/**
 * A record of the time or period when the specimen processing occurred.
 * For example the time of sample fixation or the period of time the
 * sample was in formalin.
 */
export type SpecimenProcessingTime = Period | string;
