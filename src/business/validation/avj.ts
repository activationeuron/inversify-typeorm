import Ajv, { JSONSchemaType } from 'ajv';
import ajvError from 'ajv-errors';
const avj = new Ajv({ allErrors: true });
ajvError(avj, {});

export default avj;
