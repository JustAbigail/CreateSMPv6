
declare module "@package/com/google/common/hash" {
    export class $HashCode {
        static fromLong(hash: number): $HashCode;
        writeBytesTo(dest: number[], offset: number, maxLength: number): number;
        asBytes(): number[];
        asInt(): number;
        static fromInt(hash: number): $HashCode;
        bits(): number;
        static fromString(string: string): $HashCode;
        asLong(): number;
        padToLong(): number;
        static fromBytes(bytes: number[]): $HashCode;
    }
}
