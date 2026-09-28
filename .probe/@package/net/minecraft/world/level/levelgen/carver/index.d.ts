import { $ProbabilityFeatureConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $ChunkPos, $LevelHeightAccessor } from "@package/net/minecraft/world/level";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Fluid, $FluidState } from "@package/net/minecraft/world/level/material";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $CarvingMask, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Set } from "@package/java/util";
import { $HeightProvider } from "@package/net/minecraft/world/level/levelgen/heightproviders";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $RegistryAccess, $HolderSet, $BlockPos$MutableBlockPos, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { $FloatProvider } from "@package/net/minecraft/util/valueproviders";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $Record } from "@package/java/lang";
import { $SurfaceRules$RuleSource_, $Aquifer, $VerticalAnchor, $RandomState, $WorldGenerationContext, $NoiseChunk, $VerticalAnchor_, $NoiseBasedChunkGenerator } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/world/level/levelgen/carver" {
    export interface $WorldCarver<C> extends RegistryMarked<RegistryTypes.WorldgenCarverTag, RegistryTypes.WorldgenCarver> {}
    /**
     * Used to define certain positions to skip or ignore when carving.
     */
    export class $WorldCarver$CarveSkipChecker {
    }
    export interface $WorldCarver$CarveSkipChecker {
        shouldSkip(context: $CarvingContext, relativeX: number, arg2: number, relativeY: number, arg4: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WorldCarver$CarveSkipChecker}.
     */
    export type $WorldCarver$CarveSkipChecker_ = ((arg0: $CarvingContext, arg1: number, arg2: number, arg3: number, arg4: number) => boolean);
    export class $CarverDebugSettings {
        getBarrierState(): $BlockState;
        getAirState(): $BlockState;
        getWaterState(): $BlockState;
        getLavaState(): $BlockState;
        isDebugMode(): boolean;
        static of(debugMode: boolean, airState: $BlockState_, waterState: $BlockState_, lavaState: $BlockState_, barrierState: $BlockState_): $CarverDebugSettings;
        static of(airState: $BlockState_, waterState: $BlockState_, lavaState: $BlockState_, barrierState: $BlockState_): $CarverDebugSettings;
        static of(debugMode: boolean, airState: $BlockState_): $CarverDebugSettings;
        static CODEC: $Codec<$CarverDebugSettings>;
        static DEFAULT: $CarverDebugSettings;
    }
    export class $CarverConfiguration extends $ProbabilityFeatureConfiguration {
        lavaLevel: $VerticalAnchor;
        debugSettings: $CarverDebugSettings;
        static CODEC: $MapCodec<$CarverConfiguration>;
        probability: number;
        replaceable: $HolderSet<$Block>;
        y: $HeightProvider;
        yScale: $FloatProvider;
        constructor(probability: number, y: $HeightProvider, yScale: $FloatProvider, lavaLevel: $VerticalAnchor_, debugSettings: $CarverDebugSettings, replaceable: $HolderSet_<$Block>);
    }
    export interface $ConfiguredWorldCarver<WC> extends RegistryMarked<RegistryTypes.WorldgenConfiguredCarverTag, RegistryTypes.WorldgenConfiguredCarver> {}
    export class $CarvingContext extends $WorldGenerationContext {
        randomState(): $RandomState;
        /**
         * @deprecated
         */
        topMaterial(biomeMapper: $Function_<$BlockPos, $Holder<$Biome>>, access: $ChunkAccess, pos: $BlockPos_, hasFluid: boolean): ($BlockState) | undefined;
        /**
         * @deprecated
         */
        registryAccess(): $RegistryAccess;
        constructor(generator: $NoiseBasedChunkGenerator, registryAccess: $RegistryAccess, level: $LevelHeightAccessor, noiseChunk: $NoiseChunk, randomState: $RandomState, surfaceRule: $SurfaceRules$RuleSource_);
    }
    export class $CanyonCarverConfiguration extends $CarverConfiguration {
        verticalRotation: $FloatProvider;
        lavaLevel: $VerticalAnchor;
        debugSettings: $CarverDebugSettings;
        static CODEC: $Codec<$CanyonCarverConfiguration>;
        shape: $CanyonCarverConfiguration$CanyonShapeConfiguration;
        probability: number;
        replaceable: $HolderSet<$Block>;
        y: $HeightProvider;
        yScale: $FloatProvider;
        constructor(probability: number, y: $HeightProvider, yScale: $FloatProvider, lavaLevel: $VerticalAnchor_, debugSettings: $CarverDebugSettings, replaceable: $HolderSet_<$Block>, verticalRotation: $FloatProvider, shape: $CanyonCarverConfiguration$CanyonShapeConfiguration);
        constructor(config: $CarverConfiguration, verticalRotation: $FloatProvider, shape: $CanyonCarverConfiguration$CanyonShapeConfiguration);
    }
    export class $CaveCarverConfiguration extends $CarverConfiguration {
        lavaLevel: $VerticalAnchor;
        debugSettings: $CarverDebugSettings;
        static CODEC: $Codec<$CaveCarverConfiguration>;
        horizontalRadiusMultiplier: $FloatProvider;
        verticalRadiusMultiplier: $FloatProvider;
        probability: number;
        floorLevel: $FloatProvider;
        replaceable: $HolderSet<$Block>;
        y: $HeightProvider;
        yScale: $FloatProvider;
        constructor(config: $CarverConfiguration, horizontalRadiusMultiplier: $FloatProvider, verticalRadiusMultiplier: $FloatProvider, floorLevel: $FloatProvider);
        constructor(probability: number, y: $HeightProvider, yScale: $FloatProvider, lavaLevel: $VerticalAnchor_, replaceable: $HolderSet_<$Block>, horizontalRadiusMultiplier: $FloatProvider, verticalRadiusMultiplier: $FloatProvider, floorLevel: $FloatProvider);
        constructor(probability: number, y: $HeightProvider, yScale: $FloatProvider, lavaLevel: $VerticalAnchor_, debugSettings: $CarverDebugSettings, replaceable: $HolderSet_<$Block>, horizontalRadiusMultiplier: $FloatProvider, verticalRadiusMultiplier: $FloatProvider, floorLevel: $FloatProvider);
    }
    export class $WorldCarver<C extends $CarverConfiguration> {
        getRange(): number;
        static canReach(chunkPos: $ChunkPos, x: number, arg2: number, z: number, arg4: number, branchIndex: number): boolean;
        configuredCodec(): $MapCodec<$ConfiguredWorldCarver<C>>;
        /**
         * Carves blocks in an ellipsoid (more accurately a spheroid), defined by a center (x, y, z) position, with a horizontal and vertical radius (the semi-axes)
         */
        carveEllipsoid(context: $CarvingContext, config: C, chunk: $ChunkAccess, biomeAccessor: $Function_<$BlockPos, $Holder<$Biome>>, aquifer: $Aquifer, x: number, arg6: number, y: number, arg8: number, z: number, arg10: $CarvingMask, horizontalRadius: $WorldCarver$CarveSkipChecker_): boolean;
        /**
         * Carves a single block, replacing it with the appropriate state if possible, and handles replacing exposed dirt with grass.
         */
        carveBlock(context: $CarvingContext, config: C, chunk: $ChunkAccess, biomeGetter: $Function_<$BlockPos, $Holder<$Biome>>, carvingMask: $CarvingMask, pos: $BlockPos$MutableBlockPos, checkPos: $BlockPos$MutableBlockPos, aquifer: $Aquifer, reachedSurface: $MutableBoolean): boolean;
        canReplaceBlock(config: C, state: $BlockState_): boolean;
        /**
         * Carves the given chunk with caves that originate from the given `chunkPos`.
         * This method is invoked 289 times in order to generate each chunk (once for every position in an 8 chunk radius, or 17x17 chunk area, centered around the target chunk).
         * 
         * @see net.minecraft.world.level.chunk.ChunkGenerator#applyCarvers
         */
        carve(context: $CarvingContext, config: C, chunk: $ChunkAccess, biomeAccessor: $Function_<$BlockPos, $Holder<$Biome>>, random: $RandomSource, aquifer: $Aquifer, chunkPos: $ChunkPos, carvingMask: $CarvingMask): boolean;
        isStartChunk(config: C, random: $RandomSource): boolean;
        configured(config: C): $ConfiguredWorldCarver<C>;
        static CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static LAVA: $FluidState;
        static CANYON: $WorldCarver<$CanyonCarverConfiguration>;
        static CAVE_AIR: $BlockState;
        static AIR: $BlockState;
        liquids: $Set<$Fluid>;
        static NETHER_CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static WATER: $FluidState;
        constructor(codec: $Codec<C>);
    }
    /**
     * Values that may be interpreted as {@link $WorldCarver}.
     */
    export type $WorldCarver_<C> = RegistryTypes.WorldgenCarver;
    export class $CanyonCarverConfiguration$CanyonShapeConfiguration {
        static CODEC: $Codec<$CanyonCarverConfiguration$CanyonShapeConfiguration>;
        thickness: $FloatProvider;
        distanceFactor: $FloatProvider;
        horizontalRadiusFactor: $FloatProvider;
        widthSmoothness: number;
        verticalRadiusDefaultFactor: number;
        verticalRadiusCenterFactor: number;
        constructor(distanceFactor: $FloatProvider, thickness: $FloatProvider, widthSmoothness: number, horizontalRadiusFactor: $FloatProvider, verticalRadiusDefaultFactor: number, verticalRadiusCenterFactor: number);
    }
    export class $ConfiguredWorldCarver<WC extends $CarverConfiguration> extends $Record {
        carve(context: $CarvingContext, chunk: $ChunkAccess, biomeAccessor: $Function_<$BlockPos, $Holder<$Biome>>, random: $RandomSource, aquifer: $Aquifer, chunkPos: $ChunkPos, carvingMask: $CarvingMask): boolean;
        isStartChunk(random: $RandomSource): boolean;
        worldCarver(): $WorldCarver<WC>;
        config(): WC;
        static CODEC: $Codec<$Holder<$ConfiguredWorldCarver<never>>>;
        static DIRECT_CODEC: $Codec<$ConfiguredWorldCarver<never>>;
        static LIST_CODEC: $Codec<$HolderSet<$ConfiguredWorldCarver<never>>>;
        constructor(worldCarver: $WorldCarver_<WC>, config: WC);
    }
    /**
     * Values that may be interpreted as {@link $ConfiguredWorldCarver}.
     */
    export type $ConfiguredWorldCarver_<WC> = RegistryTypes.WorldgenConfiguredCarver | { worldCarver?: $WorldCarver_<$CarverConfiguration>, config?: $CarverConfiguration,  } | [worldCarver?: $WorldCarver_<$CarverConfiguration>, config?: $CarverConfiguration, ];
}
