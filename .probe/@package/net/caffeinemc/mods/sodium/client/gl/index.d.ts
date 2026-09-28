export * as buffer from "@package/net/caffeinemc/mods/sodium/client/gl/buffer";
export * as util from "@package/net/caffeinemc/mods/sodium/client/gl/util";
export * as shader from "@package/net/caffeinemc/mods/sodium/client/gl/shader";
export * as tessellation from "@package/net/caffeinemc/mods/sodium/client/gl/tessellation";
export * as array from "@package/net/caffeinemc/mods/sodium/client/gl/array";
export * as sync from "@package/net/caffeinemc/mods/sodium/client/gl/sync";
export * as device from "@package/net/caffeinemc/mods/sodium/client/gl/device";

declare module "@package/net/caffeinemc/mods/sodium/client/gl" {
    export class $GlObject {
        invalidateHandle(): void;
        handle(): number;
    }
}
