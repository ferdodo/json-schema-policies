interface SchemaObject {
	type: "object";
	title: string;
	description: string;
	properties: Record<string, JsonSchemaRecommended>;
	required: string[] | readonly string[];
	additionalProperties: false;
}

interface SchemaString {
	type: "string";
	title: string;
	description: string;
	minLength: number;
	maxLength: number;
	pattern: string;
}

interface SchemaInteger {
	type: "integer";
	title: string;
	description: string;
	minimum: number;
	maximum: number;
}

interface SchemaNumber {
	type: "number";
	title: string;
	description: string;
	minimum: number;
	maximum: number;
}

interface SchemaArray {
	type: "array";
	title: string;
	description: string;
	items: JsonSchemaRecommended;
	minItems: number;
	maxItems: number;
	uniqueItems: boolean;
}

interface SchemaEnum {
	type: "string";
	title: string;
	description: string;
	enum: string[];
}

interface SchemaBoolean {
	type: "boolean";
	title: string;
	description: string;
}

interface SchemaRecord {
	type: "object";
	title: string;
	description: string;
	propertyNames: SchemaInteger | SchemaString;
	additionalProperties: JsonSchemaRecommended;
}

export type JsonSchemaRecommended =
	| SchemaObject
	| SchemaArray
	| SchemaString
	| SchemaInteger
	| SchemaEnum
	| SchemaBoolean
	| SchemaNumber
	| SchemaRecord;
