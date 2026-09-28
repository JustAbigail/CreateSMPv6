import { $ChunkRenderTypeSet } from "@package/net/neoforged/neoforge/client";
import { $BitSet } from "@package/java/util";
import { $SodiumAuxiliaryLightManager } from "@package/net/caffeinemc/mods/sodium/client/world";

declare module "@package/net/caffeinemc/mods/sodium/mixin/platform/neoforge" {
    export class $AuxiliaryLightManagerMixin {
    }
    export interface $AuxiliaryLightManagerMixin extends $SodiumAuxiliaryLightManager {
    }
    export class $ChunkRenderTypeSetAccessor {
        static create(arg0: $BitSet): $ChunkRenderTypeSet;
    }
    export interface $ChunkRenderTypeSetAccessor {
        getBits(): $BitSet;
    }
    /**
     * Values that may be interpreted as {@link $ChunkRenderTypeSetAccessor}.
     */
    export type $ChunkRenderTypeSetAccessor_ = (() => $BitSet);
}
