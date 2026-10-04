import { $Destroyable } from "@package/io/homo/superresolution/core/impl";
import { $ColorBlendState, $DepthStencilState, $DynamicStateFlags, $RasterizationState } from "@package/io/homo/superresolution/core/graphics/impl/pipeline/state";
import { $IShaderProgram } from "@package/io/homo/superresolution/core/graphics/impl/shader";
import { $ICommandBuffer } from "@package/io/homo/superresolution/core/graphics/impl/command";
import { $VertexFormat, $IVertexBuffer, $PrimitiveType } from "@package/io/homo/superresolution/core/graphics/impl/vertex";
import { $List } from "@package/java/util";
import { $ColorAttachment, $DepthStencilAttachment, $IFrameBuffer } from "@package/io/homo/superresolution/core/graphics/impl/framebuffer";

declare module "@package/io/homo/superresolution/core/graphics/impl/pipeline" {
    export class $ComputePipeline implements $IPipeline {
        shader(): $IShaderProgram;
        descriptorSet(): $PipelineDescriptorSet;
        static builder(): $ComputePipeline$Builder;
        constructor(arg0: $IShaderProgram, arg1: $PipelineDescriptorSet);
    }
    export class $RenderPass implements $Destroyable {
        colorAttachments(): $List<$ColorAttachment>;
        depthStencilAttachment(): $DepthStencilAttachment;
        static builder(): $RenderPass$Builder;
        /**
         * @deprecated
         */
        execute(arg0: $ICommandBuffer): void;
        /**
         * @deprecated
         */
        execute(arg0: $ICommandBuffer, arg1: $IVertexBuffer): void;
        destroy(): void;
        frameBuffer(): $IFrameBuffer;
        clearState(): $PassClearState;
    }
    export class $GraphicsPipeline implements $IPipeline {
        setViewport(arg0: number, arg1: number, arg2: number, arg3: number): $GraphicsPipeline;
        setScissor(arg0: number, arg1: number, arg2: number, arg3: number): $GraphicsPipeline;
        setBlendConstants(arg0: number, arg1: number, arg2: number, arg3: number): $GraphicsPipeline;
        applyDynamicStates(arg0: $ICommandBuffer): void;
        shader(): $IShaderProgram;
        setLineWidth(arg0: number): $GraphicsPipeline;
        descriptorSet(): $PipelineDescriptorSet;
        rasterization(): $RasterizationState;
        depthStencil(): $DepthStencilState;
        dynamicStates(): $DynamicStateFlags;
        colorBlend(): $ColorBlendState;
        renderPass(): $RenderPass;
        static builder(): $GraphicsPipeline$Builder;
        primitiveType(): $PrimitiveType;
        vertexFormat(): $VertexFormat;
        constructor(arg0: $IShaderProgram, arg1: $RenderPass, arg2: $RasterizationState, arg3: $DepthStencilState, arg4: $ColorBlendState, arg5: $DynamicStateFlags, arg6: $PrimitiveType, arg7: $VertexFormat, arg8: $PipelineDescriptorSet);
        set lineWidth(value: number);
    }
}
