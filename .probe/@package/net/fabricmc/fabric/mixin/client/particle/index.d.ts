import { $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";

declare module "@package/net/fabricmc/fabric/mixin/client/particle" {
    export class $ParticleManagerAccessor {
    }
    export interface $ParticleManagerAccessor {
        getParticleAtlasTexture(): $TextureAtlas;
        get particleAtlasTexture(): $TextureAtlas;
    }
    /**
     * Values that may be interpreted as {@link $ParticleManagerAccessor}.
     */
    export type $ParticleManagerAccessor_ = (() => $TextureAtlas);
}
