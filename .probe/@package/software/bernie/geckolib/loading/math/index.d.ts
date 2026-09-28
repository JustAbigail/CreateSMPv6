import { $DoubleSupplier } from "@package/java/util/function";

declare module "@package/software/bernie/geckolib/loading/math" {
    export class $MathValue {
    }
    export interface $MathValue extends $DoubleSupplier {
        get(): number;
        getAsDouble(): number;
        isMutable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MathValue}.
     */
    export type $MathValue_ = (() => number);
}
