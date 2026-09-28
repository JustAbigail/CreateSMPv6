import { $Holder } from "@package/net/minecraft/core";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $LithostitchedTemplates } from "@package/dev/worldgen/lithostitched/worldgen/structure";
import { $NormalNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $SurfaceSystem, $PositionalRandomFactory } from "@package/net/minecraft/world/level/levelgen";
export * as mnbs from "@package/dev/worldgen/lithostitched/duck/mnbs";

declare module "@package/dev/worldgen/lithostitched/duck" {
    export class $StructurePoolAccess {
    }
    export interface $StructurePoolAccess {
        getLithostitchedTemplates(): $LithostitchedTemplates;
        compileRawTemplates(): void;
    }
    export class $ContextAccessor {
    }
    export interface $ContextAccessor {
        getStoneDepthBelow(): number;
        getSystem(): $SurfaceSystem;
        getY(): number;
        getX(): number;
        getZ(): number;
        getBiome(): $Holder<$Biome>;
        getChunk(): $ChunkAccess;
    }
    export class $SurfaceSystemAccessor {
    }
    export interface $SurfaceSystemAccessor {
        getBandOffsetNoise(): $NormalNoise;
        getNoiseRandom(): $PositionalRandomFactory;
    }
}
