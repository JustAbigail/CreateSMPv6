import { $Destroyable } from "@package/io/homo/superresolution/core/impl";
import { $ColorBlendState, $DepthStencilState, $DynamicStateFlags, $RasterizationState } from "@package/io/homo/superresolution/core/graphics/impl/pipeline/state";
import { $IShaderProgram } from "@package/io/homo/superresolution/core/graphics/impl/shader";
import { $ICommandBuffer } from "@package/io/homo/superresolution/core/graphics/impl/command";
import { $VertexFormat, $IVertexBuffer, $PrimitiveType } from "@package/io/homo/superresolution/core/graphics/impl/vertex";
import { $List } from "@package/java/util";
import { $ColorAttachment, $DepthStencilAttachment, $IFrameBuffer } from "@package/io/homo/superresolution/core/graphics/impl/framebuffer";

declare module "@package/io/homo/superresolution/core/graphics/impl/pipeline" {
    export class $ComputePipeline implements $IPipeline {
        descriptorSet(): $PipelineDescriptorSet;
        shader(): $IShaderProgram;
        static builder(): $ComputePipeline$Builder;
        constructor(arg0: $IShaderProgram, arg1: $PipelineDescriptorSet);
    }
    export class $RenderPass implements $Destroyable {
        clearState(): $PassClearState;
        colorAttachments(): $List<$ColorAttachment>;
        depthStencilAttachment(): $DepthStencilAttachment;
        static builder(): $RenderPass$Builder;
        /**
         * @deprecated
         */
        execute(arg0: $ICommandBuffer, arg1: $IVertexBuffer): void;
        /**
         * @deprecated
         */
        execute(arg0: $ICommandBuffer): void;
        destroy(): void;
        frameBuffer(): $IFrameBuffer;
    }
    export class $GraphicsPipeline implements $IPipeline {
        vertexFormat(): $VertexFormat;
        setScissor(arg0: number, arg1: number, arg2: number, arg3: number): $GraphicsPipeline;
        setBlendConstants(arg0: number, arg1: number, arg2: number, arg3: number): $GraphicsPipeline;
        applyDynamicStates(arg0: $ICommandBuffer): void;
        descriptorSet(): $PipelineDescriptorSet;
        renderPass(): $RenderPass;
        rasterization(): $RasterizationState;
        depthStencil(): $DepthStencilState;
        dynamicStates(): $DynamicStateFlags;
        colorBlend(): $ColorBlendState;
        shader(): $IShaderProgram;
        setLineWidth(arg0: number): $GraphicsPipeline;
        static builder(): $GraphicsPipeline$Builder;
        primitiveType(): $PrimitiveType;
        setViewport(arg0: number, arg1: number, arg2: number, arg3: number): $GraphicsPipeline;
        constructor(arg0: $IShaderProgram, arg1: $RenderPass, arg2: $RasterizationState, arg3: $DepthStencilState, arg4: $ColorBlendState, arg5: $DynamicStateFlags, arg6: $PrimitiveType, arg7: $VertexFormat, arg8: $PipelineDescriptorSet);
    }
}
