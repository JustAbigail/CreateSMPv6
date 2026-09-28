import { $Destroyable } from "@package/io/homo/superresolution/core/impl";
import { $TextureFormat, $ITexture } from "@package/io/homo/superresolution/core/graphics/impl/texture";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";
import { $GpuObject } from "@package/io/homo/superresolution/core/graphics/impl";

declare module "@package/io/homo/superresolution/core/graphics/impl/framebuffer" {
    export class $ColorAttachment {
        texture(): $ITexture;
        index(): number;
        constructor(arg0: number, arg1: $ITexture);
    }
    export class $FrameBufferAttachmentType extends $Enum<$FrameBufferAttachmentType> {
        index(arg0: number): $FrameBufferAttachmentType;
        static values(): $FrameBufferAttachmentType[];
        static valueOf(arg0: string): $FrameBufferAttachmentType;
        getIndex(): number;
        static AnyDepth: $FrameBufferAttachmentType;
        static Color: $FrameBufferAttachmentType;
        static DepthStencil: $FrameBufferAttachmentType;
        static Depth: $FrameBufferAttachmentType;
    }
    /**
     * Values that may be interpreted as {@link $FrameBufferAttachmentType}.
     */
    export type $FrameBufferAttachmentType_ = "color" | "anydepth" | "depth" | "depthstencil";
    export class $DepthStencilAttachment {
        texture(): $ITexture;
        constructor(arg0: $ITexture);
    }
    export class $IFrameBuffer {
    }
    export interface $IFrameBuffer extends $Destroyable, $GpuObject {
        clearFrameBuffer(): void;
        getDepthStencilAttachment(): $DepthStencilAttachment;
        setClearColorRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
        getColorTextureFormat(): $TextureFormat;
        getDepthTextureFormat(): $TextureFormat;
        asMcRenderTarget(): $RenderTarget;
        getWidth(): number;
        getHeight(): number;
        getTextureId(arg0: $FrameBufferAttachmentType_): number;
        label(arg0: string): void;
        getTexture(arg0: $FrameBufferAttachmentType_): $ITexture;
        getColorAttachments(): $List<$ColorAttachment>;
    }
}
