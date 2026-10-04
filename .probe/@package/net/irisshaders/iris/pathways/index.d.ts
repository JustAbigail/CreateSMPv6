import { $IntSupplier_ } from "@package/java/util/function";
import { $InternalTextureFormat_ } from "@package/net/irisshaders/iris/gl/texture";

declare module "@package/net/irisshaders/iris/pathways" {
    export class $CenterDepthSampler {
        setUsage(arg0: boolean): void;
        sampleCenterDepth(): void;
        setupColorTexture(arg0: number, arg1: $InternalTextureFormat_): void;
        getCenterDepthTexture(): number;
        destroy(): void;
        constructor(arg0: $IntSupplier_, arg1: number);
        set usage(value: boolean);
        get centerDepthTexture(): number;
    }
}
