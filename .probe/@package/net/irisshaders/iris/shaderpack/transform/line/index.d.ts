import { $ImmutableList } from "@package/com/google/common/collect";

declare module "@package/net/irisshaders/iris/shaderpack/transform/line" {
    export class $LineTransform {
        static apply(arg0: $ImmutableList<string>, arg1: $LineTransform_): $ImmutableList<string>;
    }
    export interface $LineTransform {
        transform(arg0: number, arg1: string): string;
    }
    /**
     * Values that may be interpreted as {@link $LineTransform}.
     */
    export type $LineTransform_ = ((arg0: number, arg1: string) => string);
}
