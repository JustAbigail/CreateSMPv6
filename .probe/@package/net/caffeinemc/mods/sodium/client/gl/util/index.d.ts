import { $Enum } from "@package/java/lang";

declare module "@package/net/caffeinemc/mods/sodium/client/gl/util" {
    export class $EnumBitField<T extends $Enum<T>> {
        getBitField(): number;
        static of<T extends $Enum<T>>(...arg0: T[]): $EnumBitField<T>;
        contains(arg0: T): boolean;
    }
}
