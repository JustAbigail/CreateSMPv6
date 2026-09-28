import { $FramebufferAttachmentDefinition$Format } from "@package/foundry/veil/api/client/render/framebuffer";

declare module "@package/foundry/veil/ext/iris" {
    export class $IrisRenderTargetExtension {
    }
    export interface $IrisRenderTargetExtension {
        veil$getMainTexture(): number;
        veil$getAltTexture(): number;
        veil$getWidth(): number;
        veil$getHeight(): number;
        veil$getFormat(): $FramebufferAttachmentDefinition$Format;
        veil$getName(): string;
    }
    export class $IrisRenderingPipelineExtension {
    }
    export interface $IrisRenderingPipelineExtension {
        veil$bindSimpleFramebuffer(): void;
    }
    /**
     * Values that may be interpreted as {@link $IrisRenderingPipelineExtension}.
     */
    export type $IrisRenderingPipelineExtension_ = (() => void);
}
