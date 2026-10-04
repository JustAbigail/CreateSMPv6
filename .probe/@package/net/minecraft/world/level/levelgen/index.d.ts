import { $NoiseChunkAccessor } from "@package/com/yungnickyoung/minecraft/yungsapi/mixin/accessor";
import { $SurfaceSystemAccessor, $ContextAccessor } from "@package/dev/worldgen/lithostitched/duck";
import { $MapCodec_, $DataResult, $DynamicOps, $Codec, $MapCodec, $Lifecycle } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $InjectableSurfaceRules, $SurfaceRuleProvider } from "@package/org/betterx/wover/common/surface/api";
import { $NormalNoise$NoiseParameters_, $NormalNoise, $NormalNoise$NoiseParameters } from "@package/net/minecraft/world/level/levelgen/synth";
import { $NoiseGeneratorSettingsAccessor, $RandomStateAccessor, $NoiseBasedChunkGeneratorAccessor as $NoiseBasedChunkGeneratorAccessor$1 } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SurfaceRulesContext } from "@package/org/betterx/wover/surface/api/conditions";
import { $Set_, $OptionalLong, $Map, $Set, $OptionalInt, $List, $Map_, $List_ } from "@package/java/util";
import { $AquiferOverrideMaskSupplier, $AquiferOverrideMask } from "@package/com/yungnickyoung/minecraft/yungsapi/world/structure/terrainadaptation/aquiferoverride";
import { $StringRepresentable, $RandomSource, $KeyDispatchDataCodec } from "@package/net/minecraft/util";
import { $Supplier_, $Predicate_, $Function, $Predicate, $Function_, $Supplier } from "@package/java/util/function";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $BlockPos, $BlockPos$MutableBlockPos, $BlockPos_, $RegistryAccess, $Registry, $HolderGetter, $Holder_, $RegistryAccess$Frozen, $Holder, $HolderGetter$Provider_ } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $CarvingContext } from "@package/net/minecraft/world/level/levelgen/carver";
import { $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $Enum, $StringBuilder, $Record } from "@package/java/lang";
import { $RebuildableFeaturesPerStep } from "@package/org/betterx/wover/common/generator/api/chunkgenerator";
import { $SurfaceRulesContextAccessor as $SurfaceRulesContextAccessor$1 } from "@package/org/betterx/wover/surface/mixin";
import { $ChunkPos, $NoiseColumn, $LevelHeightAccessor, $Level, $StructureManager } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Blender$BlendingOutput, $Blender } from "@package/net/minecraft/world/level/levelgen/blending";
import { $BiomeResolver_, $BiomeSource, $Biome, $FeatureSorter$StepFeatureData, $BiomeManager, $BiomeResolver, $Climate$ParameterPoint_, $Climate$ParameterPoint, $Biome_, $Climate$Sampler } from "@package/net/minecraft/world/level/biome";
import { $BlockStateProvider } from "@package/net/minecraft/world/level/levelgen/feature/stateproviders";
import { $ImmutableSet } from "@package/com/google/common/collect";
import { $ProtoChunk, $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $NoiseSettingsAccessor } from "@package/dev/worldgen/tectonic/mixin";
import { $PrimaryLevelData$SpecialWorldProperty_, $PrimaryLevelData$SpecialWorldProperty } from "@package/net/minecraft/world/level/storage";
import { $NoiseGeneratorSettingsProvider } from "@package/org/betterx/wover/common/generator/api/biomesource";
import { $ExtendedSurfaceContext } from "@package/org/embeddedt/modernfix/world/gen";
import { $BETargetChecker } from "@package/org/betterx/betterend/interfaces";
import { $Stream } from "@package/java/util/stream";
import { $NoiseInterpolatorAccessor, $NoiseChunkAccessor as $NoiseChunkAccessor$1, $NoiseBasedChunkGeneratorAccessor } from "@package/org/betterx/betterend/mixin/common";
import { $ResourceKey_, $ResourceKey, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $SurfaceRulesContextAccessor } from "@package/org/betterx/bclib/mixin/common";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $LevelStem_, $DimensionType, $DimensionType_, $LevelStem } from "@package/net/minecraft/world/level/dimension";
export * as structure from "@package/net/minecraft/world/level/levelgen/structure";
export * as feature from "@package/net/minecraft/world/level/levelgen/feature";
export * as placement from "@package/net/minecraft/world/level/levelgen/placement";
export * as heightproviders from "@package/net/minecraft/world/level/levelgen/heightproviders";
export * as blockpredicates from "@package/net/minecraft/world/level/levelgen/blockpredicates";
export * as blending from "@package/net/minecraft/world/level/levelgen/blending";
export * as synth from "@package/net/minecraft/world/level/levelgen/synth";
export * as carver from "@package/net/minecraft/world/level/levelgen/carver";
export * as flat from "@package/net/minecraft/world/level/levelgen/flat";
export * as presets from "@package/net/minecraft/world/level/levelgen/presets";

declare module "@package/net/minecraft/world/level/levelgen" {
    export class $Heightmap {
        static primeHeightmaps(chunk: $ChunkAccess, types: $Set_<$Heightmap$Types_>): void;
        getFirstAvailable(x: number, z: number): number;
        getHighestTaken(x: number, z: number): number;
        setRawData(chunk: $ChunkAccess, type: $Heightmap$Types_, data: number[]): void;
        getRawData(): number[];
        update(x: number, y: number, z: number, state: $BlockState_): boolean;
        static MATERIAL_MOTION_BLOCKING: $Predicate<$BlockState>;
        static NOT_AIR: $Predicate<$BlockState>;
        constructor(chunk: $ChunkAccess, type: $Heightmap$Types_);
    }
    export class $BelowZeroRetrogen {
        static replaceOldBedrock(chunk: $ProtoChunk): void;
        hasBedrockHoles(): boolean;
        applyBedrockMask(chunk: $ProtoChunk): void;
        hasBedrockHole(x: number, z: number): boolean;
        targetStatus(): $ChunkStatus;
        static getBiomeResolver(resolver: $BiomeResolver_, access: $ChunkAccess): $BiomeResolver;
        static read(tag: $CompoundTag_): $BelowZeroRetrogen;
        static CODEC: $Codec<$BelowZeroRetrogen>;
        static UPGRADE_HEIGHT_ACCESSOR: $LevelHeightAccessor;
    }
    export class $PositionalRandomFactory {
    }
    export interface $PositionalRandomFactory {
        at(pos: $BlockPos_): $RandomSource;
        at(x: number, y: number, z: number): $RandomSource;
        fromSeed(seed: number): $RandomSource;
        parityConfigString(builder: $StringBuilder): void;
        fromHashOf(name: $ResourceLocation_): $RandomSource;
        fromHashOf(name: string): $RandomSource;
    }
    export class $NoiseRouter extends $Record {
        temperature(): $DensityFunction;
        mapAll(visitor: $DensityFunction$Visitor_): $NoiseRouter;
        initialDensityWithoutJaggedness(): $DensityFunction;
        erosion(): $DensityFunction;
        barrierNoise(): $DensityFunction;
        fluidLevelFloodednessNoise(): $DensityFunction;
        fluidLevelSpreadNoise(): $DensityFunction;
        lavaNoise(): $DensityFunction;
        veinToggle(): $DensityFunction;
        veinRidged(): $DensityFunction;
        veinGap(): $DensityFunction;
        ridges(): $DensityFunction;
        vegetation(): $DensityFunction;
        continents(): $DensityFunction;
        finalDensity(): $DensityFunction;
        depth(): $DensityFunction;
        static CODEC: $Codec<$NoiseRouter>;
        constructor(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction_, arg3: $DensityFunction_, arg4: $DensityFunction_, arg5: $DensityFunction_, arg6: $DensityFunction_, arg7: $DensityFunction_, arg8: $DensityFunction_, arg9: $DensityFunction_, arg10: $DensityFunction_, arg11: $DensityFunction_, arg12: $DensityFunction_, arg13: $DensityFunction_, arg14: $DensityFunction_);
    }
    /**
     * Values that may be interpreted as {@link $NoiseRouter}.
     */
    export type $NoiseRouter_ = { fluidLevelSpreadNoise?: $DensityFunction_, erosion?: $DensityFunction_, ridges?: $DensityFunction_, depth?: $DensityFunction_, vegetation?: $DensityFunction_, barrierNoise?: $DensityFunction_, temperature?: $DensityFunction_, finalDensity?: $DensityFunction_, veinRidged?: $DensityFunction_, veinGap?: $DensityFunction_, continents?: $DensityFunction_, initialDensityWithoutJaggedness?: $DensityFunction_, veinToggle?: $DensityFunction_, lavaNoise?: $DensityFunction_, fluidLevelFloodednessNoise?: $DensityFunction_,  } | [fluidLevelSpreadNoise?: $DensityFunction_, erosion?: $DensityFunction_, ridges?: $DensityFunction_, depth?: $DensityFunction_, vegetation?: $DensityFunction_, barrierNoise?: $DensityFunction_, temperature?: $DensityFunction_, finalDensity?: $DensityFunction_, veinRidged?: $DensityFunction_, veinGap?: $DensityFunction_, continents?: $DensityFunction_, initialDensityWithoutJaggedness?: $DensityFunction_, veinToggle?: $DensityFunction_, lavaNoise?: $DensityFunction_, fluidLevelFloodednessNoise?: $DensityFunction_, ];
    export class $RandomState implements $RandomStateAccessor {
        aquiferRandom(): $PositionalRandomFactory;
        oreRandom(): $PositionalRandomFactory;
        sampler(): $Climate$Sampler;
        router(): $NoiseRouter;
        surfaceSystem(): $SurfaceSystem;
        getOrCreateNoise(resourceKey: $ResourceKey_<$NormalNoise$NoiseParameters>): $NormalNoise;
        getOrCreateRandomFactory(location: $ResourceLocation_): $PositionalRandomFactory;
        static create(registries: $HolderGetter$Provider_, settingsKey: $ResourceKey_<$NoiseGeneratorSettings>, levelSeed: number): $RandomState;
        static create(settings: $NoiseGeneratorSettings_, noiseParametersGetter: $HolderGetter<$NormalNoise$NoiseParameters_>, levelSeed: number): $RandomState;
        getRandom(): $PositionalRandomFactory;
        random: $PositionalRandomFactory;
    }
    export class $WorldgenRandom$Algorithm extends $Enum<$WorldgenRandom$Algorithm> {
        static values(): $WorldgenRandom$Algorithm[];
        static valueOf(arg0: string): $WorldgenRandom$Algorithm;
        newInstance(seed: number): $RandomSource;
        static LEGACY: $WorldgenRandom$Algorithm;
        static XOROSHIRO: $WorldgenRandom$Algorithm;
    }
    /**
     * Values that may be interpreted as {@link $WorldgenRandom$Algorithm}.
     */
    export type $WorldgenRandom$Algorithm_ = "legacy" | "xoroshiro";
    export class $XoroshiroRandomSource implements $RandomSource {
        setSeed(seed: number): void;
        nextFloat(): number;
        nextGaussian(): number;
        fork(): $RandomSource;
        nextDouble(): number;
        nextInt(bound: number): number;
        nextInt(): number;
        nextLong(): number;
        nextBoolean(): boolean;
        forkPositional(): $PositionalRandomFactory;
        consumeCount(count: number): void;
        nextInt(arg0: number, arg1: number): number;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        triangle(arg0: number, arg1: number): number;
        static CODEC: $Codec<$XoroshiroRandomSource>;
        constructor(seed: number);
        constructor(seed: $RandomSupport$Seed128bit_);
        constructor(seedLo: number, arg1: number);
        set seed(value: number);
    }
    /**
     * Represents a resolvable height value, or y coordinate, based on the world minimum and maximum height.
     * Can take one of the following three forms:
     * 
     * - An absolute y value (`Absolute`).
     * - A height above the lowest valid y value in the level (`AboveBottom`).
     * - A height below the highest valid y value in the level (`BelowTop`).
     */
    export class $VerticalAnchor {
        static aboveBottom(value: number): $VerticalAnchor;
        static belowTop(value: number): $VerticalAnchor;
        static absolute(value: number): $VerticalAnchor;
        static bottom(): $VerticalAnchor;
        static top(): $VerticalAnchor;
        static CODEC: $Codec<$VerticalAnchor>;
        static TOP: $VerticalAnchor;
        static BOTTOM: $VerticalAnchor;
    }
    export interface $VerticalAnchor {
        resolveY(context: $WorldGenerationContext): number;
    }
    /**
     * Values that may be interpreted as {@link $VerticalAnchor}.
     */
    export type $VerticalAnchor_ = ((arg0: $WorldGenerationContext) => number);
    export class $SurfaceRules$SurfaceRule {
    }
    export interface $SurfaceRules$SurfaceRule {
        tryApply(x: number, y: number, z: number): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$SurfaceRule}.
     */
    export type $SurfaceRules$SurfaceRule_ = ((arg0: number, arg1: number, arg2: number) => $BlockState_);
    export class $DensityFunction$NoiseHolder extends $Record {
        noiseData(): $Holder<$NormalNoise$NoiseParameters>;
        maxValue(): number;
        getValue(x: number, arg1: number, y: number): number;
        noise(): $NormalNoise;
        static CODEC: $Codec<$DensityFunction$NoiseHolder>;
        constructor(noiseData: $Holder_<$NormalNoise$NoiseParameters>);
        constructor(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: $NormalNoise | null);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunction$NoiseHolder}.
     */
    export type $DensityFunction$NoiseHolder_ = { noise?: $NormalNoise, noiseData?: $Holder_<$NormalNoise$NoiseParameters>,  } | [noise?: $NormalNoise, noiseData?: $Holder_<$NormalNoise$NoiseParameters>, ];
    export class $NoiseChunk implements $DensityFunction$ContextProvider, $DensityFunction$FunctionContext, $AquiferOverrideMaskSupplier, $NoiseChunkAccessor, $NoiseChunkAccessor$1, $BETargetChecker {
        preliminarySurfaceLevel(x: number, z: number): number;
        getOrCreateAquiferOverrideMask(arg0: $Supplier_<any>): $AquiferOverrideMask;
        getOrComputeBlendingOutput(chunkX: number, chunkZ: number): $Blender$BlendingOutput;
        getBlender(): $Blender;
        cachedClimateSampler(noiseRouter: $NoiseRouter_, points: $List_<$Climate$ParameterPoint_>): $Climate$Sampler;
        static forChunk(chunk: $ChunkAccess, state: $RandomState, beardifierOrMarker: $DensityFunctions$BeardifierOrMarker, noiseGeneratorSettings: $NoiseGeneratorSettings_, fluidPicke: $Aquifer$FluidPicker_, blender: $Blender): $NoiseChunk;
        fillAllDirectly(values: number[], _function: $DensityFunction_): void;
        be_setTarget(arg0: boolean): void;
        initializeForFirstCellX(): void;
        advanceCellX(increment: number): void;
        selectCellYZ(y: number, z: number): void;
        updateForY(cellEndBlockX: number, x: number): void;
        updateForX(cellEndBlockX: number, x: number): void;
        updateForZ(cellEndBlockX: number, x: number): void;
        getInterpolatedState(): $BlockState;
        stopInterpolation(): void;
        aquifer(): $Aquifer;
        cellWidth(): number;
        cellHeight(): number;
        swapSlices(): void;
        be_isTarget(): boolean;
        forIndex(arrayIndex: number): $NoiseChunk;
        wrap(densityFunction: $DensityFunction_): $DensityFunction;
        blockX(): number;
        blockY(): number;
        blockZ(): number;
        bnv_getCellCountXZ(): number;
        bnv_getFirstCellZ(): number;
        getNoiseSettings(): $NoiseSettings;
        bnv_getNoiseSettings(): $NoiseSettings;
        bnv_getCellCountY(): number;
        bnv_getCellNoiseMinY(): number;
        cellStartBlockY: number;
        cellCountY: number;
        interpolating: boolean;
        arrayInterpolationCounter: number;
        firstNoiseZ: number;
        fillingCell: boolean;
        cellNoiseMinY: number;
        noiseSizeXZ: number;
        inCellZ: number;
        inCellY: number;
        inCellX: number;
        cellCaches: $List<$NoiseChunk$CacheAllInCell>;
        cellCountXZ: number;
        firstNoiseX: number;
        interpolators: $List<$NoiseChunk$NoiseInterpolator>;
        arrayIndex: number;
        interpolationCounter: number;
        constructor(cellCountXZ: number, random: $RandomState, firstNoiseX: number, firstNoiseZ: number, noiseSettings: $NoiseSettings_, beardifier: $DensityFunctions$BeardifierOrMarker, noiseGeneratorSettings: $NoiseGeneratorSettings_, fluidPicker: $Aquifer$FluidPicker_, blendifier: $Blender);
        get blender(): $Blender;
        get interpolatedState(): $BlockState;
        get noiseSettings(): $NoiseSettings;
    }
    export class $GenerationStep$Decoration extends $Enum<$GenerationStep$Decoration> implements $StringRepresentable {
        getName(): string;
        static values(): $GenerationStep$Decoration[];
        static valueOf(arg0: string): $GenerationStep$Decoration;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static RAW_GENERATION: $GenerationStep$Decoration;
        static UNDERGROUND_STRUCTURES: $GenerationStep$Decoration;
        static LOCAL_MODIFICATIONS: $GenerationStep$Decoration;
        static TOP_LAYER_MODIFICATION: $GenerationStep$Decoration;
        static CODEC: $Codec<$GenerationStep$Decoration>;
        static UNDERGROUND_DECORATION: $GenerationStep$Decoration;
        static LAKES: $GenerationStep$Decoration;
        static SURFACE_STRUCTURES: $GenerationStep$Decoration;
        static STRONGHOLDS: $GenerationStep$Decoration;
        static FLUID_SPRINGS: $GenerationStep$Decoration;
        static VEGETAL_DECORATION: $GenerationStep$Decoration;
        static UNDERGROUND_ORES: $GenerationStep$Decoration;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GenerationStep$Decoration}.
     */
    export type $GenerationStep$Decoration_ = "raw_generation" | "lakes" | "local_modifications" | "underground_structures" | "surface_structures" | "strongholds" | "underground_ores" | "underground_decoration" | "fluid_springs" | "vegetal_decoration" | "top_layer_modification";
    export class $DensityFunctions$Marker$Type extends $Enum<$DensityFunctions$Marker$Type> implements $StringRepresentable {
        static values(): $DensityFunctions$Marker$Type[];
        static valueOf(arg0: string): $DensityFunctions$Marker$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CacheAllInCell: $DensityFunctions$Marker$Type;
        codec: $KeyDispatchDataCodec<$DensityFunctions$MarkerOrMarked>;
        static CacheOnce: $DensityFunctions$Marker$Type;
        static FlatCache: $DensityFunctions$Marker$Type;
        static Interpolated: $DensityFunctions$Marker$Type;
        static Cache2D: $DensityFunctions$Marker$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Marker$Type}.
     */
    export type $DensityFunctions$Marker$Type_ = "interpolated" | "flat_cache" | "cache_2d" | "cache_once" | "cache_all_in_cell";
    export class $Aquifer$FluidPicker {
    }
    export interface $Aquifer$FluidPicker {
        computeFluid(x: number, y: number, z: number): $Aquifer$FluidStatus;
    }
    /**
     * Values that may be interpreted as {@link $Aquifer$FluidPicker}.
     */
    export type $Aquifer$FluidPicker_ = ((arg0: number, arg1: number, arg2: number) => $Aquifer$FluidStatus);
    export class $LegacyRandomSource implements $BitRandomSource {
        handler$fgb000$asyncparticles$safeify(seed: number, ci: $CallbackInfo): void;
        handler$fgb000$asyncparticles$safeify(size: number, cir: $CallbackInfoReturnable<any>): void;
        setSeed(seed: number): void;
        nextGaussian(): number;
        fork(): $RandomSource;
        next(size: number): number;
        forkPositional(): $PositionalRandomFactory;
        nextFloat(): number;
        nextDouble(): number;
        nextInt(): number;
        nextInt(size: number): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextInt(arg0: number, arg1: number): number;
        consumeCount(arg0: number): void;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        triangle(arg0: number, arg1: number): number;
        constructor(seed: number);
        set seed(value: number);
    }
    export class $WorldDimensions$Complete extends $Record {
        specialWorldProperty(): $PrimaryLevelData$SpecialWorldProperty;
        dimensionsRegistryAccess(): $RegistryAccess$Frozen;
        dimensions(): $Registry<$LevelStem>;
        lifecycle(): $Lifecycle;
        constructor(dimensions: $Registry<$LevelStem_>, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_);
    }
    /**
     * Values that may be interpreted as {@link $WorldDimensions$Complete}.
     */
    export type $WorldDimensions$Complete_ = { specialWorldProperty?: $PrimaryLevelData$SpecialWorldProperty_, dimensions?: $Registry<$LevelStem_>,  } | [specialWorldProperty?: $PrimaryLevelData$SpecialWorldProperty_, dimensions?: $Registry<$LevelStem_>, ];
    export class $WorldgenRandom extends $LegacyRandomSource {
        /**
         * Creates a new `RandomSource`, seeded for determining whether a chunk is a slime chunk or not.
         */
        static seedSlimeChunk(chunkX: number, chunkZ: number, levelSeed: number, arg3: number): $RandomSource;
        /**
         * Seeds the current random for placing the starts of structure features.
         * The region coordinates are the region which the target chunk lies in. For example, witch hut regions are 32x32 chunks, so all chunks within that region would be seeded identically.
         * The size of the regions themselves are determined by the `spacing` of the structure settings.
         */
        setLargeFeatureWithSalt(levelSeed: number, arg1: number, regionX: number, regionZ: number): void;
        /**
         * Seeds the current random for placing features.
         * Each feature is seeded differently in order to seem more random. However, it does not do a good job of this, and issues can arise from the salt being small with features that have the same decoration step and are close together in the feature lists.
         */
        setLargeFeatureSeed(decorationSeed: number, arg1: number, index: number): void;
        /**
         * Seeds the current random for chunk decoration, including spawning mobs and for use in feature placement.
         * The coordinates correspond to the minimum block position within a given chunk.
         */
        setDecorationSeed(levelSeed: number, arg1: number, minChunkBlockX: number): number;
        /**
         * Seeds the current random for placing features.
         * Each feature is seeded differently in order to seem more random. However, it does not do a good job of this, and issues can arise from the salt being small with features that have the same decoration step and are close together in the feature lists.
         */
        setFeatureSeed(decorationSeed: number, arg1: number, index: number): void;
        getCount(): number;
        constructor(randomSource: $RandomSource);
        get count(): number;
    }
    export class $DensityFunction$FunctionContext {
    }
    export interface $DensityFunction$FunctionContext {
        getBlender(): $Blender;
        blockX(): number;
        blockY(): number;
        blockZ(): number;
        get blender(): $Blender;
    }
    export class $RandomSupport$Seed128bit extends $Record {
        seedLo(): number;
        seedHi(): number;
        xor(seed: $RandomSupport$Seed128bit_): $RandomSupport$Seed128bit;
        xor(seedLo: number, arg1: number): $RandomSupport$Seed128bit;
        mixed(): $RandomSupport$Seed128bit;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $RandomSupport$Seed128bit}.
     */
    export type $RandomSupport$Seed128bit_ = { seedHi?: number, seedLo?: number,  } | [seedHi?: number, seedLo?: number, ];
    export interface $SurfaceRules$RuleSource extends RegistryMarked<RegistryTypes.LithostitchedSurfaceRuleTag, RegistryTypes.LithostitchedSurfaceRule> {}
    export interface $NoiseGeneratorSettings extends RegistryMarked<RegistryTypes.WorldgenNoiseSettingsTag, RegistryTypes.WorldgenNoiseSettings> {}
    export class $GeodeBlockSettings {
        static CODEC: $Codec<$GeodeBlockSettings>;
        outerLayerProvider: $BlockStateProvider;
        innerLayerProvider: $BlockStateProvider;
        alternateInnerLayerProvider: $BlockStateProvider;
        innerPlacements: $List<$BlockState>;
        cannotReplace: $TagKey<$Block>;
        middleLayerProvider: $BlockStateProvider;
        invalidBlocks: $TagKey<$Block>;
        fillingProvider: $BlockStateProvider;
        constructor(fillingProvider: $BlockStateProvider, innerLayerProvider: $BlockStateProvider, alternateInnerLayerProvider: $BlockStateProvider, middleLayerProvider: $BlockStateProvider, outerLayerProvider: $BlockStateProvider, innerPlacements: $List_<$BlockState_>, cannotReplace: $TagKey_<$Block>, invalidBlocks: $TagKey_<$Block>);
    }
    export class $DensityFunction$SimpleFunction {
    }
    export interface $DensityFunction$SimpleFunction extends $DensityFunction {
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
    }
    export interface $DensityFunction extends RegistryMarked<RegistryTypes.WorldgenDensityFunctionTag, RegistryTypes.WorldgenDensityFunction> {}
    export class $SurfaceRules$RuleSource {
        static bootstrap(registry: $Registry<$MapCodec_<$SurfaceRules$RuleSource_>>): $MapCodec<$SurfaceRules$RuleSource>;
        static CODEC: $Codec<$SurfaceRules$RuleSource>;
    }
    export interface $SurfaceRules$RuleSource extends $Function<$SurfaceRules$Context, $SurfaceRules$SurfaceRule> {
        codec(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$RuleSource}.
     */
    export type $SurfaceRules$RuleSource_ = RegistryTypes.LithostitchedSurfaceRule;
    /**
     * Aquifers are responsible for non-sea level fluids found in terrain generation, but also managing that different aquifers don't intersect with each other in ways that would create undesirable fluid placement.
     * The aquifer interface itself is a modifier on a per-block basis. It computes a block state to be placed for each position in the world.
     * 
     * Aquifers work by first partitioning a single chunk into a low resolution grid. They then generate, via various noise layers, an `AquiferStatus` at each grid point.
     * At each point, the grid cell containing that point is calculated, and then of the eight grid corners, the three closest aquifers are found, by square euclidean distance.
     * Borders between aquifers are created by comparing nearby aquifers to see if the given point is near-equidistant from them, indicating a border if so, or fluid/air depending on the aquifer height if not.
     */
    export class $Aquifer {
        /**
         * Creates a disabled, or no-op aquifer. This will fill any open areas below sea level with the default fluid.
         */
        static createDisabled(defaultFluid: $Aquifer$FluidPicker_): $Aquifer;
        /**
         * Creates a standard noise based aquifer. This aquifer will place liquid (both water and lava), air, and stone as described above.
         */
        static create(chunk: $NoiseChunk, chunkPos: $ChunkPos, noiseRouter: $NoiseRouter_, positionalRandomFactory: $PositionalRandomFactory, minY: number, height: number, globalFluidPicker: $Aquifer$FluidPicker_): $Aquifer;
    }
    export interface $Aquifer {
        /**
         * Returns `true` if there should be a fluid update scheduled - due to a fluid block being placed in a possibly unsteady position - at the last position passed into `#computeState`.
         * This **must** be invoked only after `#computeState`, and will be using the same parameters as that method.
         */
        shouldScheduleFluidUpdate(): boolean;
        computeSubstance(context: $DensityFunction$FunctionContext, substance: number): $BlockState;
    }
    export class $DensityFunction$Visitor {
    }
    export interface $DensityFunction$Visitor {
        visitNoise(noiseHolder: $DensityFunction$NoiseHolder_): $DensityFunction$NoiseHolder;
        apply(densityFunction: $DensityFunction_): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunction$Visitor}.
     */
    export type $DensityFunction$Visitor_ = ((arg0: $DensityFunction) => $DensityFunction_);
    export class $Heightmap$Types extends $Enum<$Heightmap$Types> implements $StringRepresentable {
        getSerializationKey(): string;
        keepAfterWorldgen(): boolean;
        sendToClient(): boolean;
        static values(): $Heightmap$Types[];
        static valueOf(arg0: string): $Heightmap$Types;
        isOpaque(): $Predicate<$BlockState>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static OCEAN_FLOOR: $Heightmap$Types;
        static MOTION_BLOCKING_NO_LEAVES: $Heightmap$Types;
        static CODEC: $Codec<$Heightmap$Types>;
        static MOTION_BLOCKING: $Heightmap$Types;
        static WORLD_SURFACE: $Heightmap$Types;
        static OCEAN_FLOOR_WG: $Heightmap$Types;
        static WORLD_SURFACE_WG: $Heightmap$Types;
        get serializationKey(): string;
        get opaque(): $Predicate<$BlockState>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Heightmap$Types}.
     */
    export type $Heightmap$Types_ = "world_surface_wg" | "world_surface" | "ocean_floor_wg" | "ocean_floor" | "motion_blocking" | "motion_blocking_no_leaves";
    export class $BitRandomSource {
        static FLOAT_MULTIPLIER: number;
        static DOUBLE_MULTIPLIER: number;
    }
    export interface $BitRandomSource extends $RandomSource {
        nextFloat(): number;
        next(size: number): number;
        nextDouble(): number;
        nextInt(): number;
        nextInt(size: number): number;
        nextLong(): number;
        nextBoolean(): boolean;
    }
    export class $DensityFunction {
        static CODEC: $Codec<$Holder<$DensityFunction>>;
        static DIRECT_CODEC: $Codec<$DensityFunction>;
        static HOLDER_HELPER_CODEC: $Codec<$DensityFunction>;
    }
    export interface $DensityFunction {
        mapAll(visitor: $DensityFunction$Visitor_): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        maxValue(): number;
        abs(): $DensityFunction;
        clamp(minValue: number, arg1: number): $DensityFunction;
        compute(context: $DensityFunction$FunctionContext): number;
        minValue(): number;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunction}.
     */
    export type $DensityFunction_ = RegistryTypes.WorldgenDensityFunction;
    export class $DensityFunctions$MarkerOrMarked {
    }
    export interface $DensityFunctions$MarkerOrMarked extends $DensityFunction {
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        wrapped(): $DensityFunction;
        type(): $DensityFunctions$Marker$Type;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
    }
    export class $NoiseBasedChunkGenerator extends $ChunkGenerator implements $NoiseBasedChunkGeneratorAccessor$1, $NoiseBasedChunkGeneratorAccessor, $InjectableSurfaceRules<any>, $RebuildableFeaturesPerStep<any>, $NoiseGeneratorSettingsProvider {
        generatorSettings(): $Holder<$NoiseGeneratorSettings>;
        iterateNoiseColumn(level: $LevelHeightAccessor, random: $RandomState, x: number, z: number, column: $MutableObject<$NoiseColumn> | null, stoppingState: $Predicate_<$BlockState> | null): $OptionalInt;
        buildSurface(chunk: $ChunkAccess, context: $WorldGenerationContext, random: $RandomState, structureManager: $StructureManager, biomeManager: $BiomeManager, biomes: $Registry<$Biome_>, blender: $Blender): void;
        wover_injectSurfaceRules(arg0: $Registry<any>, arg1: $ResourceKey_<any>): void;
        wover_rebuildFeaturesPerStep(): void;
        wover_getNoiseGeneratorSettings(): $NoiseGeneratorSettings;
        wover_getNoiseGeneratorSettingHolders(): $Holder<any>;
        stable(settings: $ResourceKey_<$NoiseGeneratorSettings>): boolean;
        setSettings(holder: $Holder_<$NoiseGeneratorSettings>): void;
        be_getSettings(): $Holder<$NoiseGeneratorSettings>;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        settings: $Holder<$NoiseGeneratorSettings>;
        static CODEC: $MapCodec<$NoiseBasedChunkGenerator>;
        biomeSource: $BiomeSource;
        constructor(biomeSource: $BiomeSource, settings: $Holder_<$NoiseGeneratorSettings>);
    }
    export class $SurfaceRules$Context implements $ExtendedSurfaceContext, $ContextAccessor, $SurfaceRulesContext, $SurfaceRulesContextAccessor$1, $SurfaceRulesContextAccessor {
        updateXZ(blockX: number, blockZ: number): void;
        updateY(stoneDepthAbove: number, stoneDepthBelow: number, waterHeight: number, blockX: number, blockY: number, blockZ: number): void;
        getMinSurfaceLevel(): number;
        getSurfaceSecondary(): number;
        mfix$applyPossibleBiomes(): void;
        handler$cda000$lithostitched$instantiateConditions(system: $SurfaceSystem, randomState: $RandomState, chunk: $ChunkAccess, noiseChunk: $NoiseChunk, biomeGetter: $Function_<any, any>, biomeRegistry: $Registry<any>, context: $WorldGenerationContext, ci: $CallbackInfo): void;
        getStoneDepthBelow(): number;
        getSystem(): $SurfaceSystem;
        getY(): number;
        mfix$getPossibleBiomes(): $Set<any>;
        getX(): number;
        getZ(): number;
        getChunk(): $ChunkAccess;
        getBiome(): $Holder<any>;
        getSurfaceDepth(): number;
        getNoiseChunk(): $NoiseChunk;
        getLastUpdateY(): number;
        getLastUpdateXZ(): number;
        getStoneDepthAbove(): number;
        getRandomState(): $RandomState;
        getBlockX(): number;
        getBlockY(): number;
        getBlockZ(): number;
        waterHeight: number;
        stoneDepthBelow: number;
        steep: $SurfaceRules$Condition;
        lastUpdateXZ: number;
        chunk: $ChunkAccess;
        randomState: $RandomState;
        blockX: number;
        blockY: number;
        blockZ: number;
        abovePreliminarySurface: $SurfaceRules$Condition;
        lastUpdateY: number;
        hole: $SurfaceRules$Condition;
        system: $SurfaceSystem;
        pos: $BlockPos$MutableBlockPos;
        biome: $Supplier<$Holder<$Biome>>;
        mfix$possibleBiomes: $Set<any>;
        temperature: $SurfaceRules$Condition;
        context: $WorldGenerationContext;
        surfaceDepth: number;
        stoneDepthAbove: number;
        constructor(system: $SurfaceSystem, randomState: $RandomState, chunk: $ChunkAccess, noiseChunk: $NoiseChunk, biomeGetter: $Function_<$BlockPos, $Holder<$Biome>>, arg5: $Registry<$Biome_>, context: $WorldGenerationContext);
        get minSurfaceLevel(): number;
        get surfaceSecondary(): number;
        get y(): number;
        get x(): number;
        get z(): number;
        get noiseChunk(): $NoiseChunk;
    }
    export class $NoiseChunk$CacheAllInCell implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction {
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
    }
    export class $NoiseSettings extends $Record implements $NoiseSettingsAccessor {
        noiseSizeHorizontal(): number;
        noiseSizeVertical(): number;
        clampToHeightAccessor(heightAccessor: $LevelHeightAccessor): $NoiseSettings;
        getCellHeight(): number;
        getCellWidth(): number;
        minY(): number;
        static create(minY: number, height: number, noiseSizeHorizontal: number, noiseSizeVertical: number): $NoiseSettings;
        height(): number;
        setMinY(arg0: number): void;
        setHeight(arg0: number): void;
        static CODEC: $Codec<$NoiseSettings>;
        static END_NOISE_SETTINGS: $NoiseSettings;
        static CAVES_NOISE_SETTINGS: $NoiseSettings;
        static OVERWORLD_NOISE_SETTINGS: $NoiseSettings;
        static FLOATING_ISLANDS_NOISE_SETTINGS: $NoiseSettings;
        static NETHER_NOISE_SETTINGS: $NoiseSettings;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get cellHeight(): number;
        get cellWidth(): number;
    }
    /**
     * Values that may be interpreted as {@link $NoiseSettings}.
     */
    export type $NoiseSettings_ = { minY?: number, height?: number, noiseSizeVertical?: number, noiseSizeHorizontal?: number,  } | [minY?: number, height?: number, noiseSizeVertical?: number, noiseSizeHorizontal?: number, ];
    export class $SurfaceRules$Condition {
    }
    export interface $SurfaceRules$Condition {
        test(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Condition}.
     */
    export type $SurfaceRules$Condition_ = (() => boolean);
    export class $WorldGenerationContext {
        getGenDepth(): number;
        getMinGenY(): number;
        constructor(generator: $ChunkGenerator, level: $LevelHeightAccessor);
        get genDepth(): number;
        get minGenY(): number;
    }
    export class $NoiseChunk$NoiseInterpolator implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction, $NoiseInterpolatorAccessor {
        selectCellYZ(y: number, z: number): void;
        updateForY(x: number): void;
        updateForX(x: number): void;
        updateForZ(x: number): void;
        wrapped(): $DensityFunction;
        type(): $DensityFunctions$Marker$Type;
        compute(context: $DensityFunction$FunctionContext): number;
        fillArray(array: number[], contextProvider: $DensityFunction$ContextProvider): void;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        square(): $DensityFunction;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        be_getSlice0(): number[][];
        be_getSlice1(): number[][];
        this$0: $NoiseChunk;
        slice0: number[][];
        slice1: number[][];
        constructor(noiseFilter: $NoiseChunk, arg1: $DensityFunction_);
    }
    export class $NoiseChunk$NoiseChunkDensityFunction {
    }
    export interface $NoiseChunk$NoiseChunkDensityFunction extends $DensityFunction {
    }
    export class $GenerationStep$Carving extends $Enum<$GenerationStep$Carving> implements $StringRepresentable {
        getName(): string;
        static values(): $GenerationStep$Carving[];
        static valueOf(arg0: string): $GenerationStep$Carving;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$GenerationStep$Carving>;
        static LIQUID: $GenerationStep$Carving;
        static AIR: $GenerationStep$Carving;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GenerationStep$Carving}.
     */
    export type $GenerationStep$Carving_ = "air" | "liquid";
    export class $WorldDimensions extends $Record {
        static keysInOrder(stemKeys: $Stream<$ResourceKey_<$LevelStem>>): $Stream<$ResourceKey<$LevelStem>>;
        replaceOverworldGenerator(registryAccess: $RegistryAccess, chunkGenerator: $ChunkGenerator): $WorldDimensions;
        static withOverworld(dimensionTypeRegistry: $Registry<$DimensionType_>, stemMap: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>, chunkGenerator: $ChunkGenerator): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        static withOverworld(stemMap: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>, dimensionType: $Holder_<$DimensionType>, chunkGenerator: $ChunkGenerator): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        static checkStability(key: $ResourceKey_<$LevelStem>, stem: $LevelStem_): $Lifecycle;
        bake(stemRegistry: $Registry<$LevelStem_>): $WorldDimensions$Complete;
        levels(): $ImmutableSet<$ResourceKey<$Level>>;
        get(stemKey: $ResourceKey_<$LevelStem>): ($LevelStem) | undefined;
        dimensions(): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        isDebug(): boolean;
        overworld(): $ChunkGenerator;
        static CODEC: $MapCodec<$WorldDimensions>;
        constructor(stemRegistry: $Registry<$LevelStem_>);
        constructor(dimensions: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>);
        get debug(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WorldDimensions}.
     */
    export type $WorldDimensions_ = { dimensions?: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>,  } | [dimensions?: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>, ];
    export class $SurfaceSystem implements $SurfaceSystemAccessor {
        getSurfaceDepth(x: number, z: number): number;
        getSurfaceSecondary(x: number, z: number): number;
        getBandOffsetNoise(): $NormalNoise;
        /**
         * @deprecated
         */
        topMaterial(rule: $SurfaceRules$RuleSource_, context: $CarvingContext, biomeGetter: $Function_<$BlockPos, $Holder<$Biome>>, chunk: $ChunkAccess, noiseChunk: $NoiseChunk, pos: $BlockPos_, hasFluid: boolean): ($BlockState) | undefined;
        buildSurface(randomState: $RandomState, biomeManager: $BiomeManager, biomes: $Registry<$Biome_>, useLegacyRandomSource: boolean, context: $WorldGenerationContext, chunk: $ChunkAccess, noiseChunk: $NoiseChunk, ruleSource: $SurfaceRules$RuleSource_): void;
        getNoiseRandom(): $PositionalRandomFactory;
        getBand(x: number, y: number, z: number): $BlockState;
        constructor(randomState: $RandomState, defaultBlock: $BlockState_, seaLevel: number, noiseRandom: $PositionalRandomFactory);
        get bandOffsetNoise(): $NormalNoise;
        get noiseRandom(): $PositionalRandomFactory;
    }
    export class $DensityFunction$ContextProvider {
    }
    export interface $DensityFunction$ContextProvider {
        fillAllDirectly(values: number[], _function: $DensityFunction_): void;
        forIndex(arrayIndex: number): $DensityFunction$FunctionContext;
    }
    export class $WorldGenSettings extends $Record {
        static encode<T>(ops: $DynamicOps<T>, options: $WorldOptions, access: $RegistryAccess): $DataResult<T>;
        static encode<T>(ops: $DynamicOps<T>, options: $WorldOptions, dimensions: $WorldDimensions_): $DataResult<T>;
        dimensions(): $WorldDimensions;
        options(): $WorldOptions;
        static CODEC: $Codec<$WorldGenSettings>;
        constructor(arg0: $WorldOptions, arg1: $WorldDimensions_);
    }
    /**
     * Values that may be interpreted as {@link $WorldGenSettings}.
     */
    export type $WorldGenSettings_ = { options?: $WorldOptions, dimensions?: $WorldDimensions_,  } | [options?: $WorldOptions, dimensions?: $WorldDimensions_, ];
    export class $NoiseGeneratorSettings extends $Record implements $NoiseGeneratorSettingsAccessor, $BETargetChecker, $SurfaceRuleProvider {
        defaultBlock(): $BlockState;
        seaLevel(): number;
        surfaceRule(): $SurfaceRules$RuleSource;
        static nether(context: $BootstrapContext<never>): $NoiseGeneratorSettings;
        defaultFluid(): $BlockState;
        spawnTarget(): $List<$Climate$ParameterPoint>;
        noiseRouter(): $NoiseRouter;
        aquifersEnabled(): boolean;
        oreVeinsEnabled(): boolean;
        isAquifersEnabled(): boolean;
        getRandomSource(): $WorldgenRandom$Algorithm;
        static caves(context: $BootstrapContext<never>): $NoiseGeneratorSettings;
        static floatingIslands(context: $BootstrapContext<never>): $NoiseGeneratorSettings;
        be_setTarget(arg0: boolean): void;
        wover_getOriginalSurfaceRules(): $SurfaceRules$RuleSource;
        noiseSettings(): $NoiseSettings;
        useLegacyRandomSource(): boolean;
        /**
         * @deprecated
         */
        disableMobGeneration(): boolean;
        be_isTarget(): boolean;
        wover_overwriteSurfaceRules(arg0: $SurfaceRules$RuleSource_): void;
        static end(context: $BootstrapContext<never>): $NoiseGeneratorSettings;
        static dummy(): $NoiseGeneratorSettings;
        static bootstrap(context: $BootstrapContext<$NoiseGeneratorSettings_>): void;
        static overworld(context: $BootstrapContext<never>, large: boolean, amplified: boolean): $NoiseGeneratorSettings;
        setNoiseRouter(noiseRouter: $NoiseRouter_): void;
        static AMPLIFIED: $ResourceKey<$NoiseGeneratorSettings>;
        static CODEC: $Codec<$Holder<$NoiseGeneratorSettings>>;
        static OVERWORLD: $ResourceKey<$NoiseGeneratorSettings>;
        static NETHER: $ResourceKey<$NoiseGeneratorSettings>;
        static CAVES: $ResourceKey<$NoiseGeneratorSettings>;
        static DIRECT_CODEC: $Codec<$NoiseGeneratorSettings>;
        static END: $ResourceKey<$NoiseGeneratorSettings>;
        static FLOATING_ISLANDS: $ResourceKey<$NoiseGeneratorSettings>;
        static LARGE_BIOMES: $ResourceKey<$NoiseGeneratorSettings>;
        constructor(arg0: $NoiseSettings_, arg1: $BlockState_, arg2: $BlockState_, arg3: $NoiseRouter_, arg4: $SurfaceRules$RuleSource_, arg5: $List_<$Climate$ParameterPoint_>, arg6: number, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean);
        get randomSource(): $WorldgenRandom$Algorithm;
    }
    /**
     * Values that may be interpreted as {@link $NoiseGeneratorSettings}.
     */
    export type $NoiseGeneratorSettings_ = RegistryTypes.WorldgenNoiseSettings | { noiseRouter?: $NoiseRouter_, spawnTarget?: $List_<$Climate$ParameterPoint_>, defaultFluid?: $BlockState_, noiseSettings?: $NoiseSettings_, defaultBlock?: $BlockState_, oreVeinsEnabled?: boolean, surfaceRule?: $SurfaceRules$RuleSource_, disableMobGeneration?: boolean, useLegacyRandomSource?: boolean, aquifersEnabled?: boolean, seaLevel?: number,  } | [noiseRouter?: $NoiseRouter_, spawnTarget?: $List_<$Climate$ParameterPoint_>, defaultFluid?: $BlockState_, noiseSettings?: $NoiseSettings_, defaultBlock?: $BlockState_, oreVeinsEnabled?: boolean, surfaceRule?: $SurfaceRules$RuleSource_, disableMobGeneration?: boolean, useLegacyRandomSource?: boolean, aquifersEnabled?: boolean, seaLevel?: number, ];
    export class $Aquifer$FluidStatus {
        at(y: number): $BlockState;
        fluidLevel: number;
        fluidType: $BlockState;
        constructor(fluidLevel: number, fluidType: $BlockState_);
    }
    export class $DensityFunctions$BeardifierOrMarker {
        static CODEC: $KeyDispatchDataCodec<$DensityFunction>;
    }
    export interface $DensityFunctions$BeardifierOrMarker extends $DensityFunction$SimpleFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
    }
    export class $WorldOptions {
        static parseSeed(seed: string): $OptionalLong;
        generateBonusChest(): boolean;
        withSeed(seed: $OptionalLong): $WorldOptions;
        static randomSeed(): number;
        withStructures(generateBonusChest: boolean): $WorldOptions;
        withBonusChest(generateBonusChest: boolean): $WorldOptions;
        isOldCustomizedWorld(): boolean;
        generateStructures(): boolean;
        static defaultWithRandomSeed(): $WorldOptions;
        seed(): number;
        static CODEC: $MapCodec<$WorldOptions>;
        static DEMO_OPTIONS: $WorldOptions;
        constructor(seed: number, arg1: boolean, generateStructures: boolean);
        get oldCustomizedWorld(): boolean;
    }
    export class $GeodeLayerSettings {
        filling: number;
        static CODEC: $Codec<$GeodeLayerSettings>;
        outerLayer: number;
        innerLayer: number;
        middleLayer: number;
        constructor(filling: number, arg1: number, innerLayer: number, arg3: number);
    }
    export class $GeodeCrackSettings {
        static CODEC: $Codec<$GeodeCrackSettings>;
        generateCrackChance: number;
        crackPointOffset: number;
        baseCrackSize: number;
        constructor(generateCrackChance: number, arg1: number, baseCrackSize: number);
    }
}
