import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Record } from "@package/java/lang";
import { $GlResource } from "@package/net/irisshaders/iris/gl";

declare module "@package/net/irisshaders/iris/gl/framebuffer" {
    export class $ViewportData extends $Record {
        viewportX(): number;
        viewportY(): number;
        scale(): number;
        static defaultValue(): $ViewportData;
        constructor(scale: number, viewportX: number, viewportY: number);
    }
    /**
     * Values that may be interpreted as {@link $ViewportData}.
     */
    export type $ViewportData_ = { scale?: number, viewportX?: number, viewportY?: number,  } | [scale?: number, viewportX?: number, viewportY?: number, ];
    export class $GlFramebuffer extends $GlResource {
        addDepthAttachment(arg0: number): void;
        bindAsReadBuffer(): void;
        handler$coe000$super_resolution$addDepthAttachment(arg0: number, arg1: $CallbackInfo): void;
        addColorAttachment(arg0: number, arg1: number): void;
        noDrawBuffers(): void;
        bindAsDrawBuffer(): void;
        getId(): number;
        bind(): void;
        readBuffer(arg0: number): void;
        getStatus(): number;
        drawBuffers(arg0: number[]): void;
        getColorAttachment(arg0: number): number;
        hasDepthAttachment(): boolean;
        constructor();
    }
}
