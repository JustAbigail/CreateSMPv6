import { $FramebufferRenderTargetAccessor } from "@package/foundry/veil/mixin/framebuffer/accessor";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $Blaze3dRenderTargetExt } from "@package/net/irisshaders/iris/targets";
import { $RenderTargetExtension, $PerformanceRenderTargetExtension } from "@package/foundry/veil/ext";

declare module "@package/com/mojang/blaze3d/pipeline" {
    export class $RenderTarget implements $Blaze3dRenderTargetExt, $FramebufferRenderTargetAccessor, $PerformanceRenderTargetExtension, $RenderTargetExtension {
        clear(useDepth: boolean): void;
        resize(width: number, height: number, disableBlend: boolean): void;
        bindWrite(useDepth: boolean): void;
        unbindWrite(): void;
        blitToScreen(width: number, height: number, disableBlend: boolean): void;
        blitToScreen(width: number, height: number): void;
        destroyBuffers(): void;
        copyDepthFrom(otherTarget: $RenderTarget): void;
        setClearColor(red: number, green: number, blue: number, alpha: number): void;
        checkStatus(): void;
        createBuffers(width: number, height: number, disableBlend: boolean): void;
        handler$bha000$veil$copyDepthFrom(arg0: $RenderTarget, arg1: $CallbackInfo): void;
        setFilterMode(filterMode: number): void;
        handler$bhj000$veil$createBuffers(arg0: $CallbackInfo): void;
        getColorTextureId(): number;
        veil$clearColorBuffer(useDepth: boolean): void;
        handler$bhj000$veil$destroyBuffers(arg0: $CallbackInfo): void;
        handler$bhj000$veil$bindRead(arg0: $CallbackInfo): void;
        handler$bhj000$veil$bindWrite(arg0: boolean, arg1: $CallbackInfo): void;
        handler$chp000$sodium$blitToScreen(arg0: number, arg1: number, arg2: boolean, arg3: $CallbackInfo): void;
        handler$bha000$veil$clear(arg0: boolean, arg1: $CallbackInfo): void;
        handler$bhj000$veil$getColorTextureId(arg0: $CallbackInfoReturnable<any>): void;
        getDepthTextureId(): number;
        handler$bhj000$veil$getDepthTextureId(arg0: $CallbackInfoReturnable<any>): void;
        enableStencil(): void;
        isStencilEnabled(): boolean;
        iris$getDepthBufferVersion(): number;
        iris$getColorBufferVersion(): number;
        veil$setWrapper(arg0: $AdvancedFbo): void;
        veil$getTexture(arg0: number): number;
        bindRead(): void;
        unbindRead(): void;
        getClearChannels(): number[];
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(useDepth: boolean);
    }
}
