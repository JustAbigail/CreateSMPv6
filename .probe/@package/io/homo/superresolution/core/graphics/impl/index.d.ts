export * as texture from "@package/io/homo/superresolution/core/graphics/impl/texture";
export * as framebuffer from "@package/io/homo/superresolution/core/graphics/impl/framebuffer";
export * as buffer from "@package/io/homo/superresolution/core/graphics/impl/buffer";
export * as command from "@package/io/homo/superresolution/core/graphics/impl/command";
export * as vertex from "@package/io/homo/superresolution/core/graphics/impl/vertex";
export * as pipeline from "@package/io/homo/superresolution/core/graphics/impl/pipeline";
export * as device from "@package/io/homo/superresolution/core/graphics/impl/device";

declare module "@package/io/homo/superresolution/core/graphics/impl" {
    export class $GpuObject {
    }
    export interface $GpuObject {
        handle(): number;
    }
    /**
     * Values that may be interpreted as {@link $GpuObject}.
     */
    export type $GpuObject_ = (() => number);
}
