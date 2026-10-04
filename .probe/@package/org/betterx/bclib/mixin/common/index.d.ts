import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $HolderSet_, $Holder, $HolderSet } from "@package/net/minecraft/core";
import { $MobSpawnSettings$SpawnerData, $Biome } from "@package/net/minecraft/world/level/biome";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $MobCategory_, $MobCategory } from "@package/net/minecraft/world/entity";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $ConfiguredWorldCarver } from "@package/net/minecraft/world/level/levelgen/carver";
import { $List, $List_, $Map_, $Map, $Set } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $GenerationStep$Carving_, $GenerationStep$Carving, $RandomState, $NoiseChunk } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/org/betterx/bclib/mixin/common" {
    export class $MobSpawnSettingsAccessor {
    }
    export interface $MobSpawnSettingsAccessor {
        bcl_getSpawners(): $Map<$MobCategory, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>;
        bcl_setSpawners(arg0: $Map_<$MobCategory_, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>): void;
    }
    export class $IdMapperAccessor {
    }
    export interface $IdMapperAccessor {
        bclib_getIdToT(): $List<$Object>;
    }
    /**
     * Values that may be interpreted as {@link $IdMapperAccessor}.
     */
    export type $IdMapperAccessor_ = (() => $List_<$Object>);
    export class $SurfaceRulesContextAccessor {
    }
    export interface $SurfaceRulesContextAccessor {
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
    export class $BiomeGenerationSettingsAccessor {
    }
    export interface $BiomeGenerationSettingsAccessor {
        bclib_getFeatures(): $List<$HolderSet<$PlacedFeature>>;
        bclib_setFeatures(arg0: $List_<$HolderSet_<$PlacedFeature>>): void;
        bclib_setFeatureSet(arg0: $Supplier_<$Set<$PlacedFeature>>): void;
        bclib_setFlowerFeatures(arg0: $Supplier_<$List<$ConfiguredFeature<never, never>>>): void;
        bclib_getCarvers(): $Map<$GenerationStep$Carving, $HolderSet<$ConfiguredWorldCarver<never>>>;
        bclib_setCarvers(arg0: $Map_<$GenerationStep$Carving_, $HolderSet_<$ConfiguredWorldCarver<never>>>): void;
    }
}
