import { $IDevice } from "@package/io/homo/superresolution/core/graphics/impl/device";
import { $ITexture } from "@package/io/homo/superresolution/core/graphics/impl/texture";
import { $GraphicsPipeline, $ComputePipeline, $RenderPass } from "@package/io/homo/superresolution/core/graphics/impl/pipeline";
import { $IBufferData, $IBuffer } from "@package/io/homo/superresolution/core/graphics/impl/buffer";
import { $IVertexBuffer } from "@package/io/homo/superresolution/core/graphics/impl/vertex";
import { $Enum } from "@package/java/lang";
import { $EnumSet } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/io/homo/superresolution/core/graphics/impl/command" {
    export class $CommandBufferBehavior extends $Enum<$CommandBufferBehavior> {
        static values(): $CommandBufferBehavior[];
        static valueOf(arg0: string): $CommandBufferBehavior;
        static OneTimeSubmit: $CommandBufferBehavior;
        static ReusableSequential: $CommandBufferBehavior;
    }
    /**
     * Values that may be interpreted as {@link $CommandBufferBehavior}.
     */
    export type $CommandBufferBehavior_ = "reusablesequential" | "onetimesubmit";
    export class $CommandBufferState extends $Enum<$CommandBufferState> {
        static values(): $CommandBufferState[];
        static valueOf(arg0: string): $CommandBufferState;
        static Destroyed: $CommandBufferState;
        static Recording: $CommandBufferState;
        static Executable: $CommandBufferState;
        static Pending: $CommandBufferState;
    }
    /**
     * Values that may be interpreted as {@link $CommandBufferState}.
     */
    export type $CommandBufferState_ = "recording" | "executable" | "pending" | "destroyed";
    export class $MemoryBarrierType extends $Enum<$MemoryBarrierType> {
        static values(): $MemoryBarrierType[];
        static valueOf(arg0: string): $MemoryBarrierType;
        static ALL: $MemoryBarrierType;
        static TEXTURE_FETCH: $MemoryBarrierType;
        static UNIFORM_BUFFER: $MemoryBarrierType;
        static STORAGE_IMAGE_WRITE: $MemoryBarrierType;
        static SHADER_STORAGE: $MemoryBarrierType;
        static BUFFER_UPDATE: $MemoryBarrierType;
    }
    /**
     * Values that may be interpreted as {@link $MemoryBarrierType}.
     */
    export type $MemoryBarrierType_ = "storage_image_write" | "texture_fetch" | "uniform_buffer" | "shader_storage" | "buffer_update" | "all";
    export class $ICommandBuffer {
    }
    export interface $ICommandBuffer {
        getDevice(): $IDevice;
        memoryBarrier(...arg0: $MemoryBarrierType_[]): void;
        setScissor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setBlendConstants(arg0: number, arg1: number, arg2: number, arg3: number): void;
        isInFlight(): boolean;
        ownerPool(): $ICommandPool;
        isFenceSignaled(): boolean;
        writeToTexture(arg0: $ITexture, arg1: $ByteBuffer, arg2: number, arg3: number, arg4: number, arg5: number): void;
        writeToTexture(arg0: $ITexture, arg1: $ByteBuffer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        clearTextureRGBA(arg0: $ITexture, arg1: number[]): void;
        clearTextureDepth(arg0: $ITexture, arg1: number): void;
        clearTextureStencil(arg0: $ITexture, arg1: number): void;
        copyTexture(arg0: $ITexture, arg1: $ITexture, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        writeToBuffer(arg0: $IBuffer, arg1: number, arg2: $ByteBuffer): void;
        writeToBuffer(arg0: $IVertexBuffer, arg1: number, arg2: $ByteBuffer): void;
        writeToBuffer(arg0: $IBuffer, arg1: number, arg2: number, arg3: $IBufferData): void;
        writeToBuffer(arg0: $IBuffer, arg1: number, arg2: $IBufferData): void;
        writeToBuffer(arg0: $IBuffer, arg1: number, arg2: number, arg3: $ByteBuffer): void;
        bindPipeline(arg0: $ComputePipeline): void;
        bindPipeline(arg0: $GraphicsPipeline): void;
        waitForFence(): void;
        beginRenderPass(arg0: $RenderPass): void;
        endRenderPass(): void;
        submit(arg0: $IDevice): void;
        behavior(): $CommandBufferBehavior;
        setLineWidth(arg0: number): void;
        reset(): void;
        dispatch(arg0: number, arg1: number, arg2: number): void;
        begin(): void;
        end(): void;
        state(): $CommandBufferState;
        destroy(): void;
        decoder(): $ICommandDecoder;
        draw(arg0: $IVertexBuffer, arg1: number, arg2: number): void;
        setViewport(arg0: number, arg1: number, arg2: number, arg3: number): void;
    }
    export class $ICommandDecoder {
    }
    export interface $ICommandDecoder {
        getDevice(): $IDevice;
        memoryBarrier(arg0: $ICommandBuffer, ...arg1: $MemoryBarrierType_[]): void;
        setScissor(arg0: $ICommandBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
        setBlendConstants(arg0: $ICommandBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
        writeToTexture(arg0: $ICommandBuffer, arg1: $ITexture, arg2: $ByteBuffer, arg3: number, arg4: number, arg5: number, arg6: number): void;
        writeToTexture(arg0: $ICommandBuffer, arg1: $ITexture, arg2: $ByteBuffer, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        declareExternalResource(arg0: $ITexture, arg1: $ResourceAccessType): void;
        restoreExternalResource(arg0: $ICommandBuffer, arg1: $ITexture, arg2: $ResourceAccessType): void;
        clearTextureRGBA(arg0: $ICommandBuffer, arg1: $ITexture, arg2: number[]): void;
        clearTextureDepth(arg0: $ICommandBuffer, arg1: $ITexture, arg2: number): void;
        clearTextureStencil(arg0: $ICommandBuffer, arg1: $ITexture, arg2: number): void;
        copyTexture(arg0: $ICommandBuffer, arg1: $ITexture, arg2: $ITexture, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        copyBuffer(arg0: $ICommandBuffer, arg1: $IBuffer, arg2: $IBuffer, arg3: number, arg4: number, arg5: number): void;
        writeToBuffer(arg0: $ICommandBuffer, arg1: $IBuffer, arg2: number, arg3: number, arg4: $ByteBuffer): void;
        writeToBuffer(arg0: $ICommandBuffer, arg1: $IBuffer, arg2: number, arg3: $ByteBuffer): void;
        writeToBuffer(arg0: $ICommandBuffer, arg1: $IVertexBuffer, arg2: number, arg3: $ByteBuffer): void;
        writeToBuffer(arg0: $ICommandBuffer, arg1: $IBuffer, arg2: number, arg3: number, arg4: $IBufferData): void;
        writeToBuffer(arg0: $ICommandBuffer, arg1: $IBuffer, arg2: number, arg3: $IBufferData): void;
        bindPipeline(arg0: $ICommandBuffer, arg1: $GraphicsPipeline): void;
        bindPipeline(arg0: $ICommandBuffer, arg1: $ComputePipeline): void;
        beginRenderPass(arg0: $ICommandBuffer, arg1: $RenderPass): void;
        endRenderPass(arg0: $ICommandBuffer): void;
        getStateTracker(): $ResourceStateTracker;
        setLineWidth(arg0: $ICommandBuffer, arg1: number): void;
        dispatch(arg0: $ICommandBuffer, arg1: number, arg2: number, arg3: number): void;
        draw(arg0: $ICommandBuffer, arg1: $IVertexBuffer, arg2: number, arg3: number): void;
        setViewport(arg0: $ICommandBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    export class $ICommandPool {
    }
    export interface $ICommandPool {
        createCommandBuffer(): $ICommandBuffer;
        createCommandBuffer(arg0: $CommandBufferBehavior_): $ICommandBuffer;
        reset(): void;
        flags(): $EnumSet<$CommandPoolFlags>;
        destroy(): void;
    }
}
