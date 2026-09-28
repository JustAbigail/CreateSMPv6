import { $Enum } from "@package/java/lang";
export * as texture from "@package/net/irisshaders/iris/gl/texture";
export * as blending from "@package/net/irisshaders/iris/gl/blending";
export * as uniform from "@package/net/irisshaders/iris/gl/uniform";
export * as sampler from "@package/net/irisshaders/iris/gl/sampler";
export * as framebuffer from "@package/net/irisshaders/iris/gl/framebuffer";
export * as image from "@package/net/irisshaders/iris/gl/image";
export * as state from "@package/net/irisshaders/iris/gl/state";
export * as buffer from "@package/net/irisshaders/iris/gl/buffer";

declare module "@package/net/irisshaders/iris/gl" {
    export class $GlResource {
        destroy(): void;
    }
    export class $GlVersion extends $Enum<$GlVersion> {
        static values(): $GlVersion[];
        static valueOf(arg0: string): $GlVersion;
        static GL_31: $GlVersion;
        static GL_11: $GlVersion;
        static GL_33: $GlVersion;
        static GL_12: $GlVersion;
        static GL_30: $GlVersion;
        static GL_41: $GlVersion;
    }
    /**
     * Values that may be interpreted as {@link $GlVersion}.
     */
    export type $GlVersion_ = "gl_11" | "gl_12" | "gl_30" | "gl_31" | "gl_33" | "gl_41";
}
