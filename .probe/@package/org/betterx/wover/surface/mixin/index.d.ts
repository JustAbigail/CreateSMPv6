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
        getStoneDepthBelow(): number;
        getNoiseChunk(): $NoiseChunk;
        getLastUpdateY(): number;
        getLastUpdateXZ(): number;
        getStoneDepthAbove(): number;
        getRandomState(): $RandomState;
        getChunk(): $ChunkAccess;
        getBiome(): $Supplier<$Holder<$Biome>>;
        getBlockX(): number;
        getBlockY(): number;
        getBlockZ(): number;
        get surfaceDepth(): number;
        get stoneDepthBelow(): number;
        get noiseChunk(): $NoiseChunk;
        get lastUpdateY(): number;
        get lastUpdateXZ(): number;
        get stoneDepthAbove(): number;
        get randomState(): $RandomState;
        get chunk(): $ChunkAccess;
        get biome(): $Supplier<$Holder<$Biome>>;
        get blockX(): number;
        get blockY(): number;
        get blockZ(): number;
    }
}
