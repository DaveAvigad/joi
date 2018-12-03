import {SchemaLike} from "../../index";

export interface WhenOptions {
    /**
     * the required condition joi type.
     */
    is: SchemaLike;
    /**
     * the alternative schema type if the condition is true. Required if otherwise is missing.
     */
    then?: SchemaLike;
    /**
     * the alternative schema type if the condition is false. Required if then is missing
     */
    otherwise?: SchemaLike;
}

export interface WhenSchemaOptions {
    /**
     * the alternative schema type if the condition is true. Required if otherwise is missing.
     */
    then?: SchemaLike;
    /**
     * the alternative schema type if the condition is false. Required if then is missing
     */
    otherwise?: SchemaLike;
}
