import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $ImprovedNoise, $PerlinSimplexNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $BiomeAccessor, $BiomeSourceInvoker, $BiomeGenerationSettingsAccessor as $BiomeGenerationSettingsAccessor$1, $MobSpawnSettingsAccessor as $MobSpawnSettingsAccessor$1 } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $EntityType_, $MobCategory_, $EntityType, $MobCategory } from "@package/net/minecraft/world/entity";
import { $MNBSPLAccessor } from "@package/dev/worldgen/lithostitched/mixin/common/mnbs";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $Set_, $Map, $Set, $List, $Map_, $List_, $Optional } from "@package/java/util";
import { $BiomeGenerationSettingsAccessor as $BiomeGenerationSettingsAccessor$2 } from "@package/org/betterx/wover/biome/mixin";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $Supplier_, $Predicate_, $ToIntFunction, $Function_, $Supplier, $ToIntFunction_ } from "@package/java/util/function";
import { $SoundEvent, $Music } from "@package/net/minecraft/sounds";
import { $ExtendedBiome } from "@package/net/irisshaders/iris/mixinterface";
import { $BlockPos, $HolderSet_, $BlockPos_, $HolderGetter, $Holder_, $HolderSet, $Holder } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $ConfiguredWorldCarver } from "@package/net/minecraft/world/level/levelgen/carver";
import { $Weight, $WeightedRandomList, $WeightedEntry$IntrusiveBase } from "@package/net/minecraft/util/random";
import { $BiomeManagerAccessor as $BiomeManagerAccessor$1 } from "@package/net/createmod/ponder/mixin/accessor";
import { $Enum, $Iterable, $Record } from "@package/java/lang";
import { $BiomeManagerAccessor } from "@package/org/embeddedt/modernfix/common/mixin/perf/optimize_surface_rules";
import { $GenerationStep$Carving, $DensityFunction, $GenerationStep$Carving_, $GenerationStep$Decoration_, $DensityFunction_ } from "@package/net/minecraft/world/level/levelgen";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $LevelReader } from "@package/net/minecraft/world/level";
import { $MobSpawnSettingsBuilderNeoForgeAccessor, $BiomeSpecialEffectsBuilderNeoForgeAccessor } from "@package/fuzs/puzzleslib/neoforge/mixin/accessor";
import { $MNBSPLDuck } from "@package/dev/worldgen/lithostitched/duck/mnbs";
import { $BiomeSourceAccessor } from "@package/org/betterx/wover/common/mixin";
import { $MultiNoiseSamplerHooks } from "@package/net/fabricmc/fabric/impl/biome";
import { $PlacedFeature, $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $Stream } from "@package/java/util/stream";
import { $MultiNoiseBiomeSourceParameterListAccessor } from "@package/org/betterx/wover/generator/mixin/biomesource";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $BiomeGenerationSettingsAccessor, $MobSpawnSettingsAccessor } from "@package/org/betterx/bclib/mixin/common";
import { $ModifiableBiomeInfo } from "@package/net/neoforged/neoforge/common/world";

declare module "@package/net/minecraft/world/level/biome" {
    export class $AmbientParticleSettings {
        getOptions(): $ParticleOptions;
        canSpawn(random: $RandomSource): boolean;
        static CODEC: $Codec<$AmbientParticleSettings>;
        constructor(options: $ParticleOptions_, probability: number);
    }
    export class $AmbientMoodSettings {
        getTickDelay(): number;
        getSoundEvent(): $Holder<$SoundEvent>;
        getBlockSearchExtent(): number;
        getSoundPositionOffset(): number;
        static CODEC: $Codec<$AmbientMoodSettings>;
        static LEGACY_CAVE_SETTINGS: $AmbientMoodSettings;
        constructor(soundEvent: $Holder_<$SoundEvent>, tickDelay: number, blockSearchExtent: number, soundPositionOffset: number);
    }
    export interface $Biome extends RegistryMarked<RegistryTypes.WorldgenBiomeTag, RegistryTypes.WorldgenBiome> {}
    export class $BiomeSpecialEffects {
        getGrassColorOverride(): (number) | undefined;
        getFoliageColorOverride(): (number) | undefined;
        getGrassColorModifier(): $BiomeSpecialEffects$GrassColorModifier;
        getFogColor(): number;
        getWaterFogColor(): number;
        getAmbientParticleSettings(): ($AmbientParticleSettings) | undefined;
        getAmbientLoopSoundEvent(): ($Holder<$SoundEvent>) | undefined;
        getAmbientMoodSettings(): ($AmbientMoodSettings) | undefined;
        getAmbientAdditionsSettings(): ($AmbientAdditionsSettings) | undefined;
        getWaterColor(): number;
        getBackgroundMusic(): ($Music) | undefined;
        getSkyColor(): number;
        skyColor: number;
        static CODEC: $Codec<$BiomeSpecialEffects>;
        waterFogColor: number;
        ambientLoopSoundEvent: ($Holder<$SoundEvent>) | undefined;
        foliageColorOverride: (number) | undefined;
        grassColorOverride: (number) | undefined;
        ambientAdditionsSettings: ($AmbientAdditionsSettings) | undefined;
        ambientParticleSettings: ($AmbientParticleSettings) | undefined;
        waterColor: number;
        backgroundMusic: ($Music) | undefined;
        grassColorModifier: $BiomeSpecialEffects$GrassColorModifier;
        fogColor: number;
        ambientMoodSettings: ($AmbientMoodSettings) | undefined;
        constructor(fogColor: number, waterColor: number, waterFogColor: number, skyColor: number, foliageColorOverride: (number) | undefined, grassColorOverride: (number) | undefined, grassColorModifier: $BiomeSpecialEffects$GrassColorModifier_, ambientParticleSettings: ($AmbientParticleSettings) | undefined, ambientLoopSoundEvent: ($Holder_<$SoundEvent>) | undefined, ambientMoodSettings: ($AmbientMoodSettings) | undefined, ambientAdditionsSettings: ($AmbientAdditionsSettings) | undefined, backgroundMusic: ($Music) | undefined);
    }
    export class $Biome$Precipitation extends $Enum<$Biome$Precipitation> implements $StringRepresentable {
        static values(): $Biome$Precipitation[];
        static valueOf(arg0: string): $Biome$Precipitation;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static RAIN: $Biome$Precipitation;
        static CODEC: $Codec<$Biome$Precipitation>;
        static SNOW: $Biome$Precipitation;
        static NONE: $Biome$Precipitation;
    }
    /**
     * Values that may be interpreted as {@link $Biome$Precipitation}.
     */
    export type $Biome$Precipitation_ = "none" | "rain" | "snow";
    export class $Climate$Parameter extends $Record {
        static point(value: number): $Climate$Parameter;
        min(): number;
        max(): number;
        distance(pointValue: number): number;
        distance(parameter: $Climate$Parameter_): number;
        span(param: $Climate$Parameter_ | null): $Climate$Parameter;
        static span(min: number, max: number): $Climate$Parameter;
        static span(min: $Climate$Parameter_, max: $Climate$Parameter_): $Climate$Parameter;
        static CODEC: $Codec<$Climate$Parameter>;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Climate$Parameter}.
     */
    export type $Climate$Parameter_ = { max?: number, min?: number,  } | [max?: number, min?: number, ];
    export class $MobSpawnSettings implements $MobSpawnSettingsAccessor$1, $MobSpawnSettingsAccessor {
        getMobs(category: $MobCategory_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        getSpawnerTypes(): $Set<$MobCategory>;
        getMobSpawnCost(entityType: $EntityType_<never>): $MobSpawnSettings$MobSpawnCost;
        getCreatureProbability(): number;
        getEntityTypes(): $Set<$EntityType<never>>;
        getSpawners(): $Map<$MobCategory, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>;
        setSpawners(map: $Map_<$MobCategory_, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>): void;
        bcl_getSpawners(): $Map<$MobCategory, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>;
        bcl_setSpawners(arg0: $Map_<$MobCategory_, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>): void;
        static CODEC: $MapCodec<$MobSpawnSettings>;
        creatureGenerationProbability: number;
        mobSpawnCosts: $Map<$EntityType<never>, $MobSpawnSettings$MobSpawnCost>;
        spawners: $Map<$MobCategory, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>;
        static EMPTY: $MobSpawnSettings;
        static EMPTY_MOB_LIST: $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        constructor(creatureGenerationProbability: number, spawners: $Map_<$MobCategory_, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>, mobSpawnCosts: $Map_<$EntityType_<never>, $MobSpawnSettings$MobSpawnCost_>);
    }
    export class $Climate$ParameterList<T> {
        findValue(targetPoint: $Climate$TargetPoint_): T;
        findValueIndex(targetPoint: $Climate$TargetPoint_, distanceMetric: $Climate$DistanceMetric_<T>): T;
        findValueIndex(targetPoint: $Climate$TargetPoint_): T;
        findValueBruteForce(targetPoint: $Climate$TargetPoint_): T;
        values(): $List<$Pair<$Climate$ParameterPoint, T>>;
        static codec<T>(codec: $MapCodec_<T>): $Codec<$Climate$ParameterList<T>>;
        constructor(values: $List_<$Pair<$Climate$ParameterPoint_, T>>);
    }
    export class $BiomeResolver {
    }
    export interface $BiomeResolver {
        getNoiseBiome(x: number, y: number, z: number, sampler: $Climate$Sampler_): $Holder<$Biome>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeResolver}.
     */
    export type $BiomeResolver_ = ((arg0: number, arg1: number, arg2: number, arg3: $Climate$Sampler) => $Holder_<$Biome>);
    export class $BiomeManager$NoiseBiomeSource {
    }
    export interface $BiomeManager$NoiseBiomeSource {
        /**
         * Gets the biome at the given quart positions.
         * Note that the coordinates passed into this method are 1/4 the scale of block coordinates.
         */
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeManager$NoiseBiomeSource}.
     */
    export type $BiomeManager$NoiseBiomeSource_ = ((arg0: number, arg1: number, arg2: number) => $Holder_<$Biome>);
    export class $MultiNoiseBiomeSourceParameterList implements $MNBSPLAccessor, $MNBSPLDuck, $MultiNoiseBiomeSourceParameterListAccessor {
        lithostitched$getMigrationBiome(): $Optional<any>;
        static knownPresets(): $Map<$MultiNoiseBiomeSourceParameterList$Preset, $Climate$ParameterList<$ResourceKey<$Biome>>>;
        lithostitched$setParameters(parameters: $Climate$ParameterList<any>): void;
        lithostitched$setMigrationBiome(biome: $Optional<any>): void;
        parameters(): $Climate$ParameterList<$Holder<$Biome>>;
        wover_getParameters(): $Climate$ParameterList<$Holder<$Biome>>;
        wover_setParameters(arg0: $Climate$ParameterList<$Holder_<$Biome>>): void;
        setParameters(parameterList: $Climate$ParameterList<$Holder_<$Biome>>): void;
        static CODEC: $Codec<$Holder<$MultiNoiseBiomeSourceParameterList>>;
        static DIRECT_CODEC: $Codec<$MultiNoiseBiomeSourceParameterList>;
        constructor(preset: $MultiNoiseBiomeSourceParameterList$Preset_, biomes: $HolderGetter<$Biome_>);
    }
    /**
     * Values that may be interpreted as {@link $MultiNoiseBiomeSourceParameterList}.
     */
    export type $MultiNoiseBiomeSourceParameterList_ = RegistryTypes.WorldgenMultiNoiseBiomeSourceParameterList;
    export class $Biome$ClimateSettings extends $Record {
        temperature(): number;
        hasPrecipitation(): boolean;
        temperatureModifier(): $Biome$TemperatureModifier;
        downfall(): number;
        static CODEC: $MapCodec<$Biome$ClimateSettings>;
        constructor(hasPrecipitation: boolean, temperature: number, temperatureModifier: $Biome$TemperatureModifier_, downfall: number);
    }
    /**
     * Values that may be interpreted as {@link $Biome$ClimateSettings}.
     */
    export type $Biome$ClimateSettings_ = { downfall?: number, hasPrecipitation?: boolean, temperatureModifier?: $Biome$TemperatureModifier_, temperature?: number,  } | [downfall?: number, hasPrecipitation?: boolean, temperatureModifier?: $Biome$TemperatureModifier_, temperature?: number, ];
    export class $Biome$TemperatureModifier extends $Enum<$Biome$TemperatureModifier> implements $StringRepresentable {
        modifyTemperature(pos: $BlockPos_, temperature: number): number;
        getName(): string;
        static values(): $Biome$TemperatureModifier[];
        static valueOf(arg0: string): $Biome$TemperatureModifier;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$Biome$TemperatureModifier>;
        static NONE: $Biome$TemperatureModifier;
        static FROZEN: $Biome$TemperatureModifier;
    }
    /**
     * Values that may be interpreted as {@link $Biome$TemperatureModifier}.
     */
    export type $Biome$TemperatureModifier_ = "none" | "frozen";
    export class $BiomeSpecialEffects$Builder implements $BiomeSpecialEffectsBuilderNeoForgeAccessor {
        ambientLoopSound(ambientLoopSoundEvent: $Holder_<$SoundEvent>): $BiomeSpecialEffects$Builder;
        ambientMoodSound(ambientMoodSettings: $AmbientMoodSettings): $BiomeSpecialEffects$Builder;
        ambientParticle(ambientParticle: $AmbientParticleSettings): $BiomeSpecialEffects$Builder;
        ambientAdditionsSound(ambientAdditionsSettings: $AmbientAdditionsSettings): $BiomeSpecialEffects$Builder;
        fogColor(fogColor: number): $BiomeSpecialEffects$Builder;
        waterColor(fogColor: number): $BiomeSpecialEffects$Builder;
        waterFogColor(fogColor: number): $BiomeSpecialEffects$Builder;
        foliageColorOverride(fogColor: number): $BiomeSpecialEffects$Builder;
        grassColorOverride(fogColor: number): $BiomeSpecialEffects$Builder;
        grassColorModifier(grassColorModifier: $BiomeSpecialEffects$GrassColorModifier_): $BiomeSpecialEffects$Builder;
        backgroundMusic(backgroundMusic: $Music | null): $BiomeSpecialEffects$Builder;
        build(): $BiomeSpecialEffects;
        skyColor(fogColor: number): $BiomeSpecialEffects$Builder;
        puzzleslib$setFoliageColorOverride(arg0: (number) | undefined): void;
        puzzleslib$setAmbientParticle(arg0: ($AmbientParticleSettings) | undefined): void;
        puzzleslib$setAmbientLoopSoundEvent(arg0: ($Holder_<$SoundEvent>) | undefined): void;
        puzzleslib$setAmbientMoodSettings(arg0: ($AmbientMoodSettings) | undefined): void;
        puzzleslib$setAmbientAdditionsSettings(arg0: ($AmbientAdditionsSettings) | undefined): void;
        puzzleslib$setBackgroundMusic(arg0: ($Music) | undefined): void;
        puzzleslib$setGrassColorOverride(arg0: (number) | undefined): void;
        ambientLoopSoundEvent: ($Holder<$SoundEvent>) | undefined;
        ambientAdditionsSettings: ($AmbientAdditionsSettings) | undefined;
        ambientMoodSettings: ($AmbientMoodSettings) | undefined;
        constructor();
    }
    export class $Climate$TargetPoint extends $Record {
        toParameterArray(): number[];
        temperature(): number;
        humidity(): number;
        continentalness(): number;
        erosion(): number;
        weirdness(): number;
        depth(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    /**
     * Values that may be interpreted as {@link $Climate$TargetPoint}.
     */
    export type $Climate$TargetPoint_ = { erosion?: number, weirdness?: number, continentalness?: number, depth?: number, humidity?: number, temperature?: number,  } | [erosion?: number, weirdness?: number, continentalness?: number, depth?: number, humidity?: number, temperature?: number, ];
    export class $MultiNoiseBiomeSourceParameterList$Preset extends $Record {
        static generateOverworldBiomes<T>(valueGetter: $Function_<$ResourceKey<$Biome>, T>): $Climate$ParameterList<T>;
        usedBiomes(): $Stream<$ResourceKey<$Biome>>;
        id(): $ResourceLocation;
        provider(): $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider;
        static OVERWORLD: $MultiNoiseBiomeSourceParameterList$Preset;
        static CODEC: $Codec<$MultiNoiseBiomeSourceParameterList$Preset>;
        static NETHER: $MultiNoiseBiomeSourceParameterList$Preset;
        static BY_NAME: $Map<$ResourceLocation, $MultiNoiseBiomeSourceParameterList$Preset>;
        constructor(arg0: $ResourceLocation_, arg1: $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_);
    }
    /**
     * Values that may be interpreted as {@link $MultiNoiseBiomeSourceParameterList$Preset}.
     */
    export type $MultiNoiseBiomeSourceParameterList$Preset_ = { id?: $ResourceLocation_, provider?: $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_,  } | [id?: $ResourceLocation_, provider?: $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_, ];
    export class $Biome implements $ExtendedBiome, $BiomeAccessor {
        getBiomeCategory(): number;
        setBiomeCategory(arg0: number): void;
        getDownfall(): number;
        getGrassColor(posX: number, arg1: number): number;
        getFoliageColor(): number;
        modifiableBiomeInfo(): $ModifiableBiomeInfo;
        getMobSettings(): $MobSpawnSettings;
        hasPrecipitation(): boolean;
        coldEnoughToSnow(pos: $BlockPos_): boolean;
        getBaseTemperature(): number;
        wrapMethod$hhm000$sable$preventFreezing(arg0: $LevelReader, arg1: $BlockPos_, arg2: boolean, arg3: $Operation_<any>): boolean;
        warmEnoughToRain(pos: $BlockPos_): boolean;
        shouldMeltFrozenOceanIcebergSlightly(pos: $BlockPos_): boolean;
        getFogColor(): number;
        getWaterFogColor(): number;
        getAmbientLoop(): ($Holder<$SoundEvent>) | undefined;
        getAmbientMood(): ($AmbientMoodSettings) | undefined;
        getAmbientAdditions(): ($AmbientAdditionsSettings) | undefined;
        shouldFreeze(level: $LevelReader, pos: $BlockPos_): boolean;
        shouldFreeze(level: $LevelReader, water: $BlockPos_, mustBeAtEdge: boolean): boolean;
        shouldSnow(level: $LevelReader, pos: $BlockPos_): boolean;
        getWaterColor(): number;
        getGenerationSettings(): $BiomeGenerationSettings;
        getModifiedClimateSettings(): $Biome$ClimateSettings;
        getModifiedSpecialEffects(): $BiomeSpecialEffects;
        getBackgroundMusic(): ($Music) | undefined;
        getAmbientParticle(): ($AmbientParticleSettings) | undefined;
        getSkyColor(): number;
        getPrecipitationAt(pos: $BlockPos_): $Biome$Precipitation;
        getClimateSettings(): $Biome$ClimateSettings;
        setClimateSettings(climateSettings: $Biome$ClimateSettings_): void;
        getSpecialEffects(): $BiomeSpecialEffects;
        setSpecialEffects(biomeSpecialEffects: $BiomeSpecialEffects): void;
        setGenerationSettings(biomeGenerationSettings: $BiomeGenerationSettings): void;
        setMobSettings(mobSpawnSettings: $MobSpawnSettings): void;
        static CODEC: $Codec<$Holder<$Biome>>;
        static NETWORK_CODEC: $Codec<$Biome>;
        /**
         * @deprecated
         */
        static BIOME_INFO_NOISE: $PerlinSimplexNoise;
        mobSettings: $MobSpawnSettings;
        static FROZEN_TEMPERATURE_NOISE: $PerlinSimplexNoise;
        static DIRECT_CODEC: $Codec<$Biome>;
        static LIST_CODEC: $Codec<$HolderSet<$Biome>>;
        generationSettings: $BiomeGenerationSettings;
        constructor(climateSettings: $Biome$ClimateSettings_, specialEffects: $BiomeSpecialEffects, generationSettings: $BiomeGenerationSettings, mobSettings: $MobSpawnSettings);
    }
    /**
     * Values that may be interpreted as {@link $Biome}.
     */
    export type $Biome_ = RegistryTypes.WorldgenBiome;
    export interface $MultiNoiseBiomeSourceParameterList extends RegistryMarked<RegistryTypes.WorldgenMultiNoiseBiomeSourceParameterListTag, RegistryTypes.WorldgenMultiNoiseBiomeSourceParameterList> {}
    export class $BiomeSpecialEffects$GrassColorModifier extends $Enum<$BiomeSpecialEffects$GrassColorModifier> implements $StringRepresentable, $IExtensibleEnum {
        modifyColor(x: number, arg1: number, z: number): number;
        getName(): string;
        static values(): $BiomeSpecialEffects$GrassColorModifier[];
        static valueOf(arg0: string): $BiomeSpecialEffects$GrassColorModifier;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$BiomeSpecialEffects$GrassColorModifier>;
        static SWAMP: $BiomeSpecialEffects$GrassColorModifier;
        static NONE: $BiomeSpecialEffects$GrassColorModifier;
        static DARK_FOREST: $BiomeSpecialEffects$GrassColorModifier;
    }
    /**
     * Values that may be interpreted as {@link $BiomeSpecialEffects$GrassColorModifier}.
     */
    export type $BiomeSpecialEffects$GrassColorModifier_ = "none" | "dark_forest" | "swamp";
    export class $MobSpawnSettings$Builder implements $MobSpawnSettingsBuilderNeoForgeAccessor {
        creatureGenerationProbability(probability: number): $MobSpawnSettings$Builder;
        addSpawn(classification: $MobCategory_, spawner: $MobSpawnSettings$SpawnerData): $MobSpawnSettings$Builder;
        addMobCharge(entityType: $EntityType_<never>, charge: number, arg2: number): $MobSpawnSettings$Builder;
        build(): $MobSpawnSettings;
        puzzleslib$getMobSpawnCosts(): $Map<$EntityType<never>, $MobSpawnSettings$MobSpawnCost>;
        mobSpawnCosts: $Map<$EntityType<never>, $MobSpawnSettings$MobSpawnCost>;
        spawners: $Map<$MobCategory, $List<$MobSpawnSettings$SpawnerData>>;
        constructor();
    }
    export class $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider {
    }
    export interface $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider {
    }
    /**
     * Values that may be interpreted as {@link $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider}.
     */
    export type $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_ = (() => void);
    export class $Climate$DistanceMetric<T> {
    }
    export interface $Climate$DistanceMetric<T> {
    }
    /**
     * Values that may be interpreted as {@link $Climate$DistanceMetric}.
     */
    export type $Climate$DistanceMetric_<T> = (() => void);
    export class $BiomeManager implements $BiomeManagerAccessor, $BiomeManagerAccessor$1 {
        static obfuscateSeed(seed: number): number;
        withDifferentSource(newSource: $BiomeManager$NoiseBiomeSource_): $BiomeManager;
        getNoiseBiomeAtPosition(x: number, arg1: number, y: number): $Holder<$Biome>;
        getNoiseBiomeAtPosition(pos: $BlockPos_): $Holder<$Biome>;
        getBiome(pos: $BlockPos_): $Holder<$Biome>;
        getNoiseBiomeAtQuart(x: number, y: number, z: number): $Holder<$Biome>;
        mfix$getZoomSeed(): number;
        mfix$getBiomeSource(): $BiomeManager$NoiseBiomeSource;
        catnip$getBiomeZoomSeed(): number;
        biomeZoomSeed: number;
        static CHUNK_CENTER_QUART: number;
        constructor(noiseBiomeSource: $BiomeManager$NoiseBiomeSource_, biomeZoomSeed: number);
    }
    export class $Climate$Sampler extends $Record implements $MultiNoiseSamplerHooks {
        fabric_setSeed(arg0: number): void;
        fabric_getSeed(): number;
        sample(x: number, y: number, z: number): $Climate$TargetPoint;
        fabric_getEndBiomesSampler(): $ImprovedNoise;
        temperature(): $DensityFunction;
        humidity(): $DensityFunction;
        findSpawnPosition(): $BlockPos;
        continentalness(): $DensityFunction;
        erosion(): $DensityFunction;
        weirdness(): $DensityFunction;
        spawnTarget(): $List<$Climate$ParameterPoint>;
        depth(): $DensityFunction;
        constructor(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction_, arg3: $DensityFunction_, arg4: $DensityFunction_, arg5: $DensityFunction_, arg6: $List_<$Climate$ParameterPoint_>);
    }
    /**
     * Values that may be interpreted as {@link $Climate$Sampler}.
     */
    export type $Climate$Sampler_ = { spawnTarget?: $List_<$Climate$ParameterPoint_>, depth?: $DensityFunction_, temperature?: $DensityFunction_, erosion?: $DensityFunction_, weirdness?: $DensityFunction_, continentalness?: $DensityFunction_, humidity?: $DensityFunction_,  } | [spawnTarget?: $List_<$Climate$ParameterPoint_>, depth?: $DensityFunction_, temperature?: $DensityFunction_, erosion?: $DensityFunction_, weirdness?: $DensityFunction_, continentalness?: $DensityFunction_, humidity?: $DensityFunction_, ];
    export class $BiomeGenerationSettings implements $BiomeGenerationSettingsAccessor$1, $BiomeGenerationSettingsAccessor$2, $BiomeGenerationSettingsAccessor {
        hasFeature(feature: $PlacedFeature_): boolean;
        features(): $List<$HolderSet<$PlacedFeature>>;
        getFlowerFeatures(): $List<$ConfiguredFeature<never, never>>;
        getCarvers(step: $GenerationStep$Carving_): $Iterable<$Holder<$ConfiguredWorldCarver<never>>>;
        getCarvingStages(): $Set<$GenerationStep$Carving>;
        static createGenerationSettings$lithostitched_$md$e5fdf9$0(arg0: $Map_<any, any>, arg1: $List_<any>): $BiomeGenerationSettings;
        getCarvers(): $Map<$GenerationStep$Carving, $HolderSet<$ConfiguredWorldCarver<never>>>;
        wover_getFeatures(): $List<$HolderSet<$PlacedFeature>>;
        wover_setFeatures(arg0: $List_<$HolderSet_<$PlacedFeature>>): void;
        wover_setFeatureSet(arg0: $Supplier_<$Set<$PlacedFeature>>): void;
        wover_setFlowerFeatures(arg0: $Supplier_<$List<$ConfiguredFeature<never, never>>>): void;
        wover_getCarvers(): $Map<$GenerationStep$Carving, $HolderSet<$ConfiguredWorldCarver<never>>>;
        wover_setCarvers(arg0: $Map_<$GenerationStep$Carving_, $HolderSet_<$ConfiguredWorldCarver<never>>>): void;
        bclib_getFeatures(): $List<$HolderSet<$PlacedFeature>>;
        bclib_setFeatures(arg0: $List_<$HolderSet_<$PlacedFeature>>): void;
        bclib_setFeatureSet(arg0: $Supplier_<$Set<$PlacedFeature>>): void;
        bclib_setFlowerFeatures(arg0: $Supplier_<$List<$ConfiguredFeature<never, never>>>): void;
        bclib_getCarvers(): $Map<$GenerationStep$Carving, $HolderSet<$ConfiguredWorldCarver<never>>>;
        bclib_setCarvers(arg0: $Map_<$GenerationStep$Carving_, $HolderSet_<$ConfiguredWorldCarver<never>>>): void;
        static CODEC: $MapCodec<$BiomeGenerationSettings>;
        carvers: $Map<$GenerationStep$Carving, $HolderSet<$ConfiguredWorldCarver<never>>>;
        featureSet: $Supplier<$Set<$PlacedFeature>>;
        static EMPTY: $BiomeGenerationSettings;
        flowerFeatures: $Supplier<$List<$ConfiguredFeature<never, never>>>;
        constructor(carvers: $Map_<$GenerationStep$Carving_, $HolderSet_<$ConfiguredWorldCarver<never>>>, features: $List_<$HolderSet_<$PlacedFeature>>);
    }
    export class $AmbientAdditionsSettings {
        getSoundEvent(): $Holder<$SoundEvent>;
        getTickChance(): number;
        static CODEC: $Codec<$AmbientAdditionsSettings>;
        constructor(soundEvent: $Holder_<$SoundEvent>, tickChance: number);
    }
    export class $Climate$ParameterPoint extends $Record {
        temperature(): $Climate$Parameter;
        humidity(): $Climate$Parameter;
        fitness(point: $Climate$TargetPoint_): number;
        parameterSpace(): $List<$Climate$Parameter>;
        continentalness(): $Climate$Parameter;
        erosion(): $Climate$Parameter;
        weirdness(): $Climate$Parameter;
        offset(): number;
        depth(): $Climate$Parameter;
        static CODEC: $Codec<$Climate$ParameterPoint>;
        constructor(arg0: $Climate$Parameter_, arg1: $Climate$Parameter_, arg2: $Climate$Parameter_, arg3: $Climate$Parameter_, arg4: $Climate$Parameter_, arg5: $Climate$Parameter_, arg6: number);
    }
    /**
     * Values that may be interpreted as {@link $Climate$ParameterPoint}.
     */
    export type $Climate$ParameterPoint_ = { depth?: $Climate$Parameter_, temperature?: $Climate$Parameter_, erosion?: $Climate$Parameter_, weirdness?: $Climate$Parameter_, offset?: number, continentalness?: $Climate$Parameter_, humidity?: $Climate$Parameter_,  } | [depth?: $Climate$Parameter_, temperature?: $Climate$Parameter_, erosion?: $Climate$Parameter_, weirdness?: $Climate$Parameter_, offset?: number, continentalness?: $Climate$Parameter_, humidity?: $Climate$Parameter_, ];
    export class $FeatureSorter$StepFeatureData extends $Record {
        features(): $List<$PlacedFeature>;
        indexMapping(): $ToIntFunction<$PlacedFeature>;
        constructor(features: $List_<$PlacedFeature_>);
        constructor(arg0: $List_<$PlacedFeature_>, arg1: $ToIntFunction_<$PlacedFeature>);
    }
    /**
     * Values that may be interpreted as {@link $FeatureSorter$StepFeatureData}.
     */
    export type $FeatureSorter$StepFeatureData_ = { indexMapping?: $ToIntFunction_<$PlacedFeature>, features?: $List_<$PlacedFeature_>,  } | [indexMapping?: $ToIntFunction_<$PlacedFeature>, features?: $List_<$PlacedFeature_>, ];
    export class $BiomeGenerationSettings$PlainBuilder {
        addFeatureStepsUpTo(step: number): void;
        addCarver(carving: $GenerationStep$Carving_, carver: $Holder_<$ConfiguredWorldCarver<never>>): $BiomeGenerationSettings$PlainBuilder;
        addFeature(decoration: $GenerationStep$Decoration_, feature: $Holder_<$PlacedFeature>): $BiomeGenerationSettings$PlainBuilder;
        addFeature(step: number, feature: $Holder_<$PlacedFeature>): $BiomeGenerationSettings$PlainBuilder;
        build(): $BiomeGenerationSettings;
        features: $List<$List<$Holder<$PlacedFeature>>>;
        carvers: $Map<$GenerationStep$Carving, $List<$Holder<$ConfiguredWorldCarver<never>>>>;
        constructor();
    }
    export class $MobSpawnSettings$SpawnerData extends $WeightedEntry$IntrusiveBase {
        static CODEC: $Codec<$MobSpawnSettings$SpawnerData>;
        minCount: number;
        type: $EntityType<never>;
        maxCount: number;
        constructor(type: $EntityType_<never>, weight: number, minCount: number, maxCount: number);
        constructor(type: $EntityType_<never>, weight: $Weight, minCount: number, maxCount: number);
    }
    /**
     * @param energyBudget Determines the total amount of entities that can spawn in a location based on their current cost (e.g. a cost of 0.1 and a max total of 1 means at most ten entities can spawn in the given location).
     * @param charge Determines the cost per entity towards the maximum spawn cap.
     */
    export class $MobSpawnSettings$MobSpawnCost extends $Record {
        charge(): number;
        energyBudget(): number;
        static CODEC: $Codec<$MobSpawnSettings$MobSpawnCost>;
        constructor(energyBudget: number, charge: number);
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnSettings$MobSpawnCost}.
     */
    export type $MobSpawnSettings$MobSpawnCost_ = { charge?: number, energyBudget?: number,  } | [charge?: number, energyBudget?: number, ];
    export class $BiomeSource implements $BiomeResolver, $BiomeSourceInvoker, $BiomeSourceAccessor {
        findClosestBiome3d(pos: $BlockPos_, radius: number, horizontalStep: number, verticalStep: number, biomePredicate: $Predicate_<$Holder<$Biome>>, sampler: $Climate$Sampler_, level: $LevelReader): $Pair<$BlockPos, $Holder<$Biome>>;
        getBiomesWithin(x: number, y: number, z: number, radius: number, sampler: $Climate$Sampler_): $Set<$Holder<$Biome>>;
        collectPossibleBiomes(): $Stream<$Holder<$Biome>>;
        findBiomeHorizontal(x: number, y: number, z: number, radius: number, increment: number, biomePredicate: $Predicate_<$Holder<$Biome>>, random: $RandomSource, findClosest: boolean, sampler: $Climate$Sampler_): $Pair<$BlockPos, $Holder<$Biome>>;
        findBiomeHorizontal(x: number, y: number, z: number, radius: number, biomePredicate: $Predicate_<$Holder<$Biome>>, random: $RandomSource, sampler: $Climate$Sampler_): $Pair<$BlockPos, $Holder<$Biome>>;
        possibleBiomes(): $Set<$Holder<$Biome>>;
        addDebugInfo(info: $List_<string>, pos: $BlockPos_, sampler: $Climate$Sampler_): void;
        fabric_modifyBiomeSet(arg0: $Set_<any>): $Set<any>;
        codec(): $MapCodec<$BiomeSource>;
        getNoiseBiome(x: number, y: number, z: number, sampler: $Climate$Sampler_): $Holder<$Biome>;
        wover_setPossibleBiomes(arg0: $Supplier_<$Set<$Holder<$Biome>>>): void;
        getCodec(): $MapCodec<$BiomeSource>;
        static CODEC: $Codec<$BiomeSource>;
        constructor();
    }
}
