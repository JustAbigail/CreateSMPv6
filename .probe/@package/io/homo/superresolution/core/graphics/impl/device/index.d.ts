import { $ITextureView, $TextureViewDescription, $TextureDescription, $ITexture } from "@package/io/homo/superresolution/core/graphics/impl/texture";
import { $ShaderDescription, $IShaderProgram } from "@package/io/homo/superresolution/core/graphics/impl/shader";
import { $PipelineDescriptorSet, $ComputePipeline$Builder, $RenderPass$Builder, $GraphicsPipeline, $ComputePipeline, $GraphicsPipeline$Builder, $RenderPass } from "@package/io/homo/superresolution/core/graphics/impl/pipeline";
import { $BufferDescription, $IBuffer } from "@package/io/homo/superresolution/core/graphics/impl/buffer";
import { $VertexBufferDescription, $IVertexBuffer } from "@package/io/homo/superresolution/core/graphics/impl/vertex";
import { $ICommandBuffer, $ICommandPool, $ICommandDecoder, $CommandPoolFlags } from "@package/io/homo/superresolution/core/graphics/impl/command";
import { $SamplerDescription, $ISampler } from "@package/io/homo/superresolution/core/graphics/impl/sampler";
import { $FramebufferDescription, $IFrameBuffer } from "@package/io/homo/superresolution/core/graphics/impl/framebuffer";

declare module "@package/io/homo/superresolution/core/graphics/impl/device" {
    export class $IDevice {
    }
    export interface $IDevice {
        createTexture(arg0: $TextureDescription): $ITexture;
        createTextureView(arg0: $TextureViewDescription): $ITextureView;
        createBuffer(arg0: $BufferDescription): $IBuffer;
        createFramebuffer(arg0: $FramebufferDescription): $IFrameBuffer;
        createVertexBuffer(arg0: $VertexBufferDescription): $IVertexBuffer;
        createDescriptorSet(arg0: $IShaderProgram): $PipelineDescriptorSet;
        createGraphicsPipeline(arg0: $GraphicsPipeline$Builder): $GraphicsPipeline;
        createCommandPool(...arg0: $CommandPoolFlags[]): $ICommandPool;
        commandDecoder(): $ICommandDecoder;
        createSampler(arg0: $SamplerDescription): $ISampler;
        defaultCommandPool(): $ICommandPool;
        createCommandBuffer(): $ICommandBuffer;
        submitCommandBuffer(arg0: $ICommandBuffer): void;
        createShaderProgram(arg0: $ShaderDescription): $IShaderProgram;
        createComputePipeline(arg0: $ComputePipeline$Builder): $ComputePipeline;
        createRenderPass(arg0: $RenderPass$Builder): $RenderPass;
    }
}
