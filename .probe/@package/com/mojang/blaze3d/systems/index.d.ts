import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $RenderCall_ } from "@package/com/mojang/blaze3d/pipeline";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AutoStorageIndexBufferExtension } from "@package/foundry/veil/ext";
import { $GlStateManager$SourceFactor_, $GlStateManager$LogicOp_, $GlStateManager$DestFactor_ } from "@package/com/mojang/blaze3d/platform";
import { $ByteBuffer, $IntBuffer, $FloatBuffer } from "@package/java/nio";
import { $TimeSource$NanoTimeSource } from "@package/net/minecraft/util";
import { $RenderSystemAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $GlStateBackup } from "@package/net/neoforged/neoforge/client";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Tesselator, $VertexFormat$IndexType, $VertexSorting, $VertexFormat$Mode_, $VertexSorting_ } from "@package/com/mojang/blaze3d/vertex";
import { $GLFWErrorCallbackI_ } from "@package/org/lwjgl/glfw";
import { $Runnable_ } from "@package/java/lang";
import { $FogShape_, $FogShape } from "@package/com/mojang/blaze3d/shaders";
import { $StrutRenderSystemAccessor } from "@package/com/cake/struts/mixin";
import { $Matrix4fStack, $Matrix4f, $Vector3f } from "@package/org/joml";

declare module "@package/com/mojang/blaze3d/systems" {
    export class $RenderSystem$AutoStorageIndexBuffer$IndexGenerator {
    }
    export interface $RenderSystem$AutoStorageIndexBuffer$IndexGenerator {
    }
    /**
     * Values that may be interpreted as {@link $RenderSystem$AutoStorageIndexBuffer$IndexGenerator}.
     */
    export type $RenderSystem$AutoStorageIndexBuffer$IndexGenerator_ = (() => void);
    export class $RenderSystem$AutoStorageIndexBuffer implements $AutoStorageIndexBufferExtension {
        hasStorage(index: number): boolean;
        veil$ensureStorage(index: number): void;
        veil$getBuffer(): number;
        handler$bfa000$veil$nameBuffer(arg0: $CallbackInfo): void;
        type(): $VertexFormat$IndexType;
        bind(index: number): void;
    }
    export class $RenderSystem implements $RenderSystemAccessor, $StrutRenderSystemAccessor {
        static activeTexture(texture: number): void;
        static bindTexture(texture: number): void;
        static getShaderTexture(shaderTexture: number): number;
        static getShaderColor(): number[];
        static getShaderGlintAlpha(): number;
        static getShaderFogStart(): number;
        static getShaderFogEnd(): number;
        static getShaderFogColor(): number[];
        static getShaderFogShape(): $FogShape;
        static getTextureMatrix(): $Matrix4f;
        static getShaderGameTime(): number;
        static getShaderLineWidth(): number;
        static setupShaderLights(instance: $ShaderInstance): void;
        static maxSupportedTextureSize(): number;
        static glBindBuffer(shaderTexture: number, textureId: number): void;
        static glDeleteBuffers(texture: number): void;
        static glGenBuffers(bufferIdConsumer: $Consumer_<number>): void;
        static glBufferData(target: number, data: $ByteBuffer, usage: number): void;
        static glUniform1i(shaderTexture: number, textureId: number): void;
        static glDeleteVertexArrays(texture: number): void;
        static glGenVertexArrays(bufferIdConsumer: $Consumer_<number>): void;
        static lineWidth(shaderLineWidth: number): void;
        static getString(name: number, consumer: $Consumer_<string>): void;
        static clear(mask: number, checkError: boolean): void;
        static glBindVertexArray(texture: number): void;
        static viewport(sourceFactor: number, destFactor: number, sourceFactorAlpha: number, destFactorAlpha: number): void;
        static isOnRenderThread(): boolean;
        static recordRenderCall(renderCall: $RenderCall_): void;
        static isOnRenderThreadOrInit(): boolean;
        static enableScissor(sourceFactor: number, destFactor: number, sourceFactorAlpha: number, destFactorAlpha: number): void;
        static disableScissor(): void;
        static assertOnRenderThreadOrInit(): void;
        static setShaderColor(red: number, green: number, blue: number, alpha: number): void;
        static enableBlend(): void;
        static disableCull(): void;
        static isFrozenAtPollEvents(): boolean;
        static flipFrame(windowId: number): void;
        static replayQueue(): void;
        static blendEquation(texture: number): void;
        static polygonMode(shaderTexture: number, textureId: number): void;
        static texParameter(mode: number, count: number, type: number): void;
        static deleteTexture(texture: number): void;
        static bindTextureForSetup(texture: number): void;
        static stencilFunc(mode: number, count: number, type: number): void;
        static stencilMask(texture: number): void;
        static stencilOp(mode: number, count: number, type: number): void;
        static clearDepth(depth: number): void;
        static clearColor(red: number, green: number, blue: number, alpha: number): void;
        static clearStencil(texture: number): void;
        static setShaderFogStart(shaderLineWidth: number): void;
        static setShaderFogEnd(shaderLineWidth: number): void;
        static setShaderFogColor(red: number, green: number, blue: number): void;
        static setShaderFogColor(red: number, green: number, blue: number, alpha: number): void;
        static setShaderFogShape(shaderFogShape: $FogShape_): void;
        static setShaderLights(lightingVector0: $Vector3f, lightingVector1: $Vector3f): void;
        static drawElements(mode: number, count: number, type: number): void;
        static renderCrosshair(texture: number): void;
        static glUniform1(location: number, value: $IntBuffer): void;
        static glUniform1(location: number, value: $FloatBuffer): void;
        static glUniform2(location: number, value: $IntBuffer): void;
        static glUniform2(location: number, value: $FloatBuffer): void;
        static glUniform3(location: number, value: $FloatBuffer): void;
        static glUniform3(location: number, value: $IntBuffer): void;
        static glUniform4(location: number, value: $IntBuffer): void;
        static glUniform4(location: number, value: $FloatBuffer): void;
        static glUniformMatrix2(location: number, transpose: boolean, value: $FloatBuffer): void;
        static glUniformMatrix3(location: number, transpose: boolean, value: $FloatBuffer): void;
        static glUniformMatrix4(location: number, transpose: boolean, value: $FloatBuffer): void;
        static setupLevelDiffuseLighting(lightingVector0: $Vector3f, lightingVector1: $Vector3f): void;
        static setupGuiFlatDiffuseLighting(lightingVector0: $Vector3f, lightingVector1: $Vector3f): void;
        static setupGui3DDiffuseLighting(lightingVector0: $Vector3f, lightingVector1: $Vector3f): void;
        static renderThreadTesselator(): $Tesselator;
        /**
         * @deprecated
         */
        static runAsFancy(fancyRunnable: $Runnable_): void;
        static _setShaderTexture(shaderTexture: number, textureId: $ResourceLocation_): void;
        static _setShaderTexture(shaderTexture: number, textureId: number): void;
        static backupProjectionMatrix(): void;
        static restoreProjectionMatrix(): void;
        static getSequentialBuffer(formatMode: $VertexFormat$Mode_): $RenderSystem$AutoStorageIndexBuffer;
        static setShaderGameTime(tickTime: number, arg1: number): void;
        static getVertexSorting(): $VertexSorting;
        static backupGlState(arg0: $GlStateBackup): void;
        static restoreGlState(arg0: $GlStateBackup): void;
        static catnip$getShaderLightDirections$ponder_$md$4fdf06$2(): $Vector3f[];
        static getShaderLightDirections$struts_$md$4fdf06$3(): $Vector3f[];
        static disableDepthTest(): void;
        static depthMask(flag: boolean): void;
        static enableDepthTest(): void;
        static getModelViewMatrix(): $Matrix4f;
        static setProjectionMatrix(projectionMatrix: $Matrix4f, vertexSorting: $VertexSorting_): void;
        static setShader(shaderSupplier: $Supplier_<$ShaderInstance>): void;
        static setShaderTexture(shaderTexture: number, textureId: $ResourceLocation_): void;
        static setShaderTexture(shaderTexture: number, textureId: number): void;
        static defaultBlendFunc(): void;
        static disableBlend(): void;
        static blendFunc(sourceFactor: $GlStateManager$SourceFactor_, destFactor: $GlStateManager$DestFactor_): void;
        static blendFunc(shaderTexture: number, textureId: number): void;
        static getShader(): $ShaderInstance;
        static getProjectionMatrix(): $Matrix4f;
        static assertOnRenderThread(): void;
        static setTextureMatrix(textureMatrix: $Matrix4f): void;
        static disableColorLogicOp(): void;
        static enableColorLogicOp(): void;
        static logicOp(op: $GlStateManager$LogicOp_): void;
        static polygonOffset(factor: number, units: number): void;
        static disablePolygonOffset(): void;
        static enablePolygonOffset(): void;
        static resetTextureMatrix(): void;
        static blendFuncSeparate(sourceFactor: $GlStateManager$SourceFactor_, destFactor: $GlStateManager$DestFactor_, sourceFactorAlpha: $GlStateManager$SourceFactor_, destFactorAlpha: $GlStateManager$DestFactor_): void;
        static blendFuncSeparate(sourceFactor: number, destFactor: number, sourceFactorAlpha: number, destFactorAlpha: number): void;
        static initRenderThread(): void;
        static beginInitialization(): void;
        static finishInitialization(): void;
        static setShaderGlintAlpha(shaderLineWidth: number): void;
        static setShaderGlintAlpha(depth: number): void;
        static getBackendDescription(): string;
        static initBackendSystem(): $TimeSource$NanoTimeSource;
        static initRenderer(mask: number, checkError: boolean): void;
        static setupDefaultState(sourceFactor: number, destFactor: number, sourceFactorAlpha: number, destFactorAlpha: number): void;
        static setErrorCallback(callback: $GLFWErrorCallbackI_): void;
        static enableCull(): void;
        static limitDisplayFPS(texture: number): void;
        static getModelViewStack(): $Matrix4fStack;
        static applyModelViewMatrix(): void;
        static getApiDescription(): string;
        static getCapsString(): string;
        static pixelStore(shaderTexture: number, textureId: number): void;
        static readPixels(x: number, y: number, width: number, height: number, format: number, type: number, pixels: $ByteBuffer): void;
        static setupOverlayColor(shaderTexture: number, textureId: number): void;
        static teardownOverlayColor(): void;
        static depthFunc(texture: number): void;
        static colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;
        static shaderLightDirections: $Vector3f[];
        constructor();
    }
}
