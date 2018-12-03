import AnySchema from "../any";

export default interface BinarySchema extends AnySchema {
    /**
     * Sets the string encoding format if a string input is converted to a buffer.
     */
    encoding(encoding: string): this;

    /**
     * Specifies the minimum length of the buffer.
     */
    min(limit: number): this;

    /**
     * Specifies the maximum length of the buffer.
     */
    max(limit: number): this;

    /**
     * Specifies the exact length of the buffer:
     */
    length(limit: number): this;
}
