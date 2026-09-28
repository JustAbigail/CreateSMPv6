import { $BooleanSupplier_ } from "@package/java/util/function";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/net/irisshaders/iris/helpers" {
    export class $OptionalBoolean extends $Enum<$OptionalBoolean> {
        orElseGet(arg0: $BooleanSupplier_): boolean;
        static values(): $OptionalBoolean[];
        static valueOf(arg0: string): $OptionalBoolean;
        orElse(arg0: boolean): boolean;
        static TRUE: $OptionalBoolean;
        static FALSE: $OptionalBoolean;
        static DEFAULT: $OptionalBoolean;
    }
    /**
     * Values that may be interpreted as {@link $OptionalBoolean}.
     */
    export type $OptionalBoolean_ = "default" | "false" | "true";
    export class $Tri<X, Y, Z> extends $Record {
        first(): X;
        second(): Y;
        third(): Z;
        constructor(first: X, second: Y, third: Z);
    }
    /**
     * Values that may be interpreted as {@link $Tri}.
     */
    export type $Tri_<X, Y, Z> = { third?: any, first?: any, second?: any,  } | [third?: any, first?: any, second?: any, ];
    export class $VertexBufferHelper {
    }
    export interface $VertexBufferHelper {
        saveBinding(): void;
        restoreBinding(): void;
    }
    export class $StringPair extends $Record {
        value(): string;
        key(): string;
        constructor(key: string, value: string);
    }
    /**
     * Values that may be interpreted as {@link $StringPair}.
     */
    export type $StringPair_ = { key?: string, value?: string,  } | [key?: string, value?: string, ];
}
