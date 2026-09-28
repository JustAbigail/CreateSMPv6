import { $GlBuffer } from "@package/net/caffeinemc/mods/sodium/client/gl/buffer";

declare module "@package/net/caffeinemc/mods/sodium/client/gl/shader/uniform" {
    export class $GlUniformBlock {
        bindBuffer(arg0: $GlBuffer): void;
        constructor(arg0: number);
    }
    export class $GlUniform<T> {
        set(arg0: T): void;
    }
}
