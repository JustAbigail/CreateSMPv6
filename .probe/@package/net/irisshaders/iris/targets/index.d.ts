import { $IrisRenderTargetExtension } from "@package/foundry/veil/ext/iris";
import { $PackDirectives, $PackRenderTargetDirectives$RenderTargetSettings } from "@package/net/irisshaders/iris/shaderpack/properties";
import { $ImmutableSet } from "@package/com/google/common/collect";
import { $GlFramebuffer } from "@package/net/irisshaders/iris/gl/framebuffer";
import { $RenderTargetsAccessor } from "@package/io/homo/superresolution/shadercompat/mixin/core";
import { $FramebufferAttachmentDefinition$Format } from "@package/foundry/veil/api/client/render/framebuffer";
import { $Map_ } from "@package/java/util";
import { $PixelType_, $DepthBufferFormat_, $InternalTextureFormat, $PixelFormat_, $InternalTextureFormat_ } from "@package/net/irisshaders/iris/gl/texture";
import { $GlResource } from "@package/net/irisshaders/iris/gl";

declare module "@package/net/irisshaders/iris/targets" {
    export class $RenderTarget implements $IrisRenderTargetExtension {
        getAltTexture(): number;
        getMainTexture(): number;
        getInternalFormat(): $InternalTextureFormat;
        veil$getMainTexture(): number;
        veil$getAltTexture(): number;
        veil$getWidth(): number;
        veil$getHeight(): number;
        veil$getFormat(): $FramebufferAttachmentDefinition$Format;
        getWidth(): number;
        getHeight(): number;
        static builder(): $RenderTarget$Builder;
        destroy(): void;
        veil$getName(): string;
        constructor(arg0: $RenderTarget$Builder);
    }
    export class $DepthTexture extends $GlResource {
        getTextureId(): number;
        constructor(arg0: string, arg1: number, arg2: number, arg3: $DepthBufferFormat_);
    }
    export class $RenderTargets implements $RenderTargetsAccessor {
        createFramebufferWritingToMain(arg0: number[]): $GlFramebuffer;
        onFullClear(): void;
        createFramebufferWritingToAlt(arg0: number[]): $GlFramebuffer;
        createGbufferFramebuffer(arg0: $ImmutableSet<number>, arg1: number[]): $GlFramebuffer;
        isFullClearRequired(): boolean;
        resizeIfNeeded(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $DepthBufferFormat_, arg5: $PackDirectives): boolean;
        copyPreHandDepth(): void;
        copyPreTranslucentDepth(): void;
        createDHFramebuffer(arg0: $ImmutableSet<number>, arg1: number[]): $GlFramebuffer;
        destroyFramebuffer(arg0: $GlFramebuffer): void;
        createIfUnsure(arg0: number): void;
        getDepthTexture(): number;
        getDepthTextureNoHand(): $DepthTexture;
        getDepthTextureNoTranslucents(): $DepthTexture;
        createColorFramebuffer(arg0: $ImmutableSet<number>, arg1: number[]): $GlFramebuffer;
        createColorFramebufferWithDepth(arg0: $ImmutableSet<number>, arg1: number[]): $GlFramebuffer;
        getCurrentWidth(): number;
        getCurrentHeight(): number;
        createClearFramebuffer(arg0: boolean, arg1: number[]): $GlFramebuffer;
        getOrCreate(arg0: number): $RenderTarget;
        get(arg0: number): $RenderTarget;
        destroy(): void;
        getRenderTargetCount(): number;
        isDestroyed(): boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $DepthBufferFormat_, arg5: $Map_<number, $PackRenderTargetDirectives$RenderTargetSettings>, arg6: $PackDirectives);
    }
    export class $RenderTarget$Builder {
        setInternalFormat(arg0: $InternalTextureFormat_): $RenderTarget$Builder;
        setPixelFormat(arg0: $PixelFormat_): $RenderTarget$Builder;
        setPixelType(arg0: $PixelType_): $RenderTarget$Builder;
        setDimensions(arg0: number, arg1: number): $RenderTarget$Builder;
        setName(arg0: string): $RenderTarget$Builder;
        build(): $RenderTarget;
    }
    export class $Blaze3dRenderTargetExt {
    }
    export interface $Blaze3dRenderTargetExt {
        iris$getDepthBufferVersion(): number;
        iris$getColorBufferVersion(): number;
    }
}
