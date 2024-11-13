interface SchemaObject {
	type: "object";
	title: string;
	description: string;
	properties: Record<string, JsonSchemaRecommended>;
	required: string[] | readonly string[];
	additionalProperties: boolean | JsonSchemaRecommended;
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
	minLength: number;
	maxLength: number;
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

export type JsonSchemaRecommended =
	| SchemaObject
	| SchemaArray
	| SchemaString
	| SchemaInteger
	| SchemaEnum
	| SchemaBoolean
	| SchemaNumber;
