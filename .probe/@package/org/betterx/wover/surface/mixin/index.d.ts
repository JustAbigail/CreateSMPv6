import { $Supplier } from "@package/java/util/function";
import { $Holder } from "@package/net/minecraft/core";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $SurfaceRulesContext } from "@package/org/betterx/wover/surface/api/conditions";
import { $RandomState, $NoiseChunk } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/org/betterx/wover/surface/mixin" {
    export class $SurfaceRulesContextAccessor {
    }
    export interface $SurfaceRulesContextAccessor extends $SurfaceRulesContext {
        getSurfaceDepth(): number;
        getNoiseChunk(): $NoiseChunk;
        getStoneDepthBelow(): number;
        getLastUpdateY(): number;
        getLastUpdateXZ(): number;
        getStoneDepthAbove(): number;
        getRandomState(): $RandomState;
        getBlockX(): number;
        getBlockY(): number;
        getBlockZ(): number;
        getBiome(): $Supplier<$Holder<$Biome>>;
        getChunk(): $ChunkAccess;
    }
}
