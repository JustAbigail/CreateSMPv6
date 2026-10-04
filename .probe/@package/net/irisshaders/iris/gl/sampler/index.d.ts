import { $IntSupplier_ } from "@package/java/util/function";
import { $TextureType_ } from "@package/net/irisshaders/iris/gl/texture";
import { $ValueUpdateNotifier_ } from "@package/net/irisshaders/iris/gl/state";
import { $GlResource } from "@package/net/irisshaders/iris/gl";

declare module "@package/net/irisshaders/iris/gl/sampler" {
    export class $GlSampler extends $GlResource {
        getId(): number;
        static MIPPED_NEAREST_HW: $GlSampler;
        static NEAREST: $GlSampler;
        static NEAREST_HW: $GlSampler;
        static MIPPED_LINEAR_HW: $GlSampler;
        static LINEAR_HW: $GlSampler;
        static LINEAR: $GlSampler;
        static MIPPED_LINEAR: $GlSampler;
        static MIPPED_NEAREST: $GlSampler;
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean);
        get id(): number;
    }
    export class $SamplerHolder {
    }
    export interface $SamplerHolder {
        hasSampler(arg0: string): boolean;
        addDefaultSampler(arg0: $TextureType_, arg1: $IntSupplier_, arg2: $ValueUpdateNotifier_, arg3: $GlSampler, ...arg4: string[]): boolean;
        addDefaultSampler(arg0: $IntSupplier_, ...arg1: string[]): boolean;
        addDynamicSampler(arg0: $TextureType_, arg1: $IntSupplier_, arg2: $GlSampler, ...arg3: string[]): boolean;
        addDynamicSampler(arg0: $IntSupplier_, arg1: $ValueUpdateNotifier_, ...arg2: string[]): boolean;
        addDynamicSampler(arg0: $TextureType_, arg1: $IntSupplier_, arg2: $ValueUpdateNotifier_, arg3: $GlSampler, ...arg4: string[]): boolean;
        addDynamicSampler(arg0: $IntSupplier_, ...arg1: string[]): boolean;
        addExternalSampler(arg0: number, ...arg1: string[]): void;
    }
}
