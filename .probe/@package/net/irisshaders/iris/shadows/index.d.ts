import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $GlSampler } from "@package/net/irisshaders/iris/gl/sampler";
import { $PackShadowDirectives } from "@package/net/irisshaders/iris/shaderpack/properties";
import { $ImmutableSet } from "@package/com/google/common/collect";
import { $GlFramebuffer } from "@package/net/irisshaders/iris/gl/framebuffer";
import { $RenderTarget, $DepthTexture } from "@package/net/irisshaders/iris/targets";
import { $InternalTextureFormat } from "@package/net/irisshaders/iris/gl/texture";
import { $WorldRenderingPipeline } from "@package/net/irisshaders/iris/pipeline";

declare module "@package/net/irisshaders/iris/shadows" {
    export class $CullingDataCache {
    }
    export interface $CullingDataCache {
        saveState(): void;
        restoreState(): void;
    }
    export class $ShadowRenderTargets {
        getDepthTextureNoTranslucents(): $DepthTexture;
        getColorTextureFormat(arg0: number): $InternalTextureFormat;
        getDepthTexture(): $DepthTexture;
        getSamplerFor(arg0: number): $GlSampler;
        createIfEmpty(arg0: number): void;
        isHardwareFiltered(arg0: number): boolean;
        getResolution(): number;
        createFramebufferWritingToMain(arg0: number[]): $GlFramebuffer;
        onFullClear(): void;
        createFramebufferWritingToAlt(arg0: number[]): $GlFramebuffer;
        createShadowFramebuffer(arg0: $ImmutableSet<number>, arg1: number[]): $GlFramebuffer;
        isFullClearRequired(): boolean;
        getDepthSourceFb(): $GlFramebuffer;
        copyPreTranslucentDepth(): void;
        createDHFramebuffer(arg0: $ImmutableSet<number>, arg1: number[]): $GlFramebuffer;
        getNumColorTextures(): number;
        isFlipped(arg0: number): boolean;
        createColorFramebuffer(arg0: $ImmutableSet<number>, arg1: number[]): $GlFramebuffer;
        getBuffersToBeCleared(): $IntList;
        createColorFramebufferWithDepth(arg0: $ImmutableSet<number>, arg1: number[]): $GlFramebuffer;
        get(arg0: number): $RenderTarget;
        snapshot(): $ImmutableSet<number>;
        destroy(): void;
        flip(arg0: number): void;
        getOrCreate(arg0: number): $RenderTarget;
        getRenderTargetCount(): number;
        getColorTextureId(arg0: number): number;
        constructor(arg0: $WorldRenderingPipeline, arg1: number, arg2: $PackShadowDirectives);
        get depthTextureNoTranslucents(): $DepthTexture;
        get depthTexture(): $DepthTexture;
        get resolution(): number;
        get fullClearRequired(): boolean;
        get depthSourceFb(): $GlFramebuffer;
        get numColorTextures(): number;
        get buffersToBeCleared(): $IntList;
        get renderTargetCount(): number;
    }
}
