
declare module "@package/com/google/common/hash" {
    export class $HashCode {
        writeBytesTo(dest: number[], offset: number, maxLength: number): number;
        static fromLong(hash: number): $HashCode;
        asBytes(): number[];
        static fromInt(hash: number): $HashCode;
        asInt(): number;
        bits(): number;
        static fromString(string: string): $HashCode;
        padToLong(): number;
        static fromBytes(bytes: number[]): $HashCode;
        asLong(): number;
    }
}
