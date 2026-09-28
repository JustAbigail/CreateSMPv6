import { $BoundingBoxAccessor } from "@package/com/yungnickyoung/minecraft/yungsapi/mixin/accessor";
import { $BoundingBoxAccessor as $BoundingBoxAccessor$3 } from "@package/com/yungnickyoung/minecraft/betterdungeons/mixin/accessor";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $MobCategory_, $MobCategory } from "@package/net/minecraft/world/entity";
import { $StructureSetAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $Map, $List, $Map_, $List_ } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $Consumer_, $Predicate_, $Predicate, $Consumer, $Function_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos$MutableBlockPos, $HolderSet_, $BlockPos_, $RegistryAccess, $Vec3i, $Holder_, $HolderSet, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $Enum, $Iterable_, $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Heightmap$Types_, $WorldgenRandom, $RandomState, $GenerationStep$Decoration, $GenerationStep$Decoration_ } from "@package/net/minecraft/world/level/levelgen";
import { $StructurePlacement } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $ServerLevelAccessor, $LevelReader, $ChunkPos, $BlockGetter, $WorldGenLevel, $LevelHeightAccessor, $Level, $StructureManager } from "@package/net/minecraft/world/level";
import { $BoundingBoxAccessor as $BoundingBoxAccessor$2 } from "@package/com/yungnickyoung/minecraft/bettermineshafts/mixin";
import { $NetherFortressStructure, $SwampHutStructure, $OceanRuinStructure, $OceanMonumentStructure, $NetherFossilStructure, $IglooStructure, $StrongholdStructure, $EndCityStructure, $BuriedTreasureStructure, $JungleTempleStructure, $MineshaftStructure, $ShipwreckStructure, $JigsawStructure, $DesertPyramidStructure, $WoodlandMansionStructure, $RuinedPortalStructure } from "@package/net/minecraft/world/level/levelgen/structure/structures";
import { $BiomeSource, $Biome, $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $BoundingBoxAccessor as $BoundingBoxAccessor$1 } from "@package/com/yungnickyoung/minecraft/betterdeserttemples/mixin/accessor";
import { $ChunkScanAccess_ } from "@package/net/minecraft/world/level/chunk/storage";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $StructurePieceType_, $StructurePieceType, $StructurePieceSerializationContext_, $PiecesContainer_, $StructurePiecesBuilder } from "@package/net/minecraft/world/level/levelgen/structure/pieces";
import { $RecordCodecBuilder, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Mirror, $Rotation_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $ModifiableStructureInfo } from "@package/net/neoforged/neoforge/common/world";
export * as templatesystem from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
export * as pools from "@package/net/minecraft/world/level/levelgen/structure/pools";
export * as structures from "@package/net/minecraft/world/level/levelgen/structure/structures";
export * as pieces from "@package/net/minecraft/world/level/levelgen/structure/pieces";
export * as placement from "@package/net/minecraft/world/level/levelgen/structure/placement";

declare module "@package/net/minecraft/world/level/levelgen/structure" {
    export class $StructureCheckResult extends $Enum<$StructureCheckResult> {
        static values(): $StructureCheckResult[];
        static valueOf(arg0: string): $StructureCheckResult;
        static CHUNK_LOAD_NEEDED: $StructureCheckResult;
        static START_NOT_PRESENT: $StructureCheckResult;
        static START_PRESENT: $StructureCheckResult;
    }
    /**
     * Values that may be interpreted as {@link $StructureCheckResult}.
     */
    export type $StructureCheckResult_ = "start_present" | "start_not_present" | "chunk_load_needed";
    export class $StructureType<S extends $Structure> {
        static STRONGHOLD: $StructureType<$StrongholdStructure>;
        static RUINED_PORTAL: $StructureType<$RuinedPortalStructure>;
        static MINESHAFT: $StructureType<$MineshaftStructure>;
        static NETHER_FOSSIL: $StructureType<$NetherFossilStructure>;
        static IGLOO: $StructureType<$IglooStructure>;
        static SHIPWRECK: $StructureType<$ShipwreckStructure>;
        static SWAMP_HUT: $StructureType<$SwampHutStructure>;
        static JIGSAW: $StructureType<$JigsawStructure>;
        static JUNGLE_TEMPLE: $StructureType<$JungleTempleStructure>;
        static FORTRESS: $StructureType<$NetherFortressStructure>;
        static OCEAN_MONUMENT: $StructureType<$OceanMonumentStructure>;
        static DESERT_PYRAMID: $StructureType<$DesertPyramidStructure>;
        static END_CITY: $StructureType<$EndCityStructure>;
        static WOODLAND_MANSION: $StructureType<$WoodlandMansionStructure>;
        static BURIED_TREASURE: $StructureType<$BuriedTreasureStructure>;
        static OCEAN_RUIN: $StructureType<$OceanRuinStructure>;
    }
    export interface $StructureType<S extends $Structure> {
        codec(): $MapCodec<S>;
    }
    /**
     * Values that may be interpreted as {@link $StructureType}.
     */
    export type $StructureType_<S> = RegistryTypes.WorldgenStructureType | (() => $MapCodec_<S>);
    export class $Structure {
        static simpleCodec<S extends $Structure>(factory: $Function_<$Structure$StructureSettings, S>): $MapCodec<S>;
        modifiableStructureInfo(): $ModifiableStructureInfo;
        static settingsCodec<S extends $Structure>(instance: $RecordCodecBuilder$Instance<S>): $RecordCodecBuilder<S, $Structure$StructureSettings>;
        spawnOverrides(): $Map<$MobCategory, $StructureSpawnOverride>;
        /**
         * @deprecated
         */
        getLowestYIn5by5BoxOffset7Blocks(context: $Structure$GenerationContext_, rotation: $Rotation_): $BlockPos;
        terrainAdaptation(): $TerrainAdjustment;
        adjustBoundingBox(boundingBox: $BoundingBox): $BoundingBox;
        findValidGenerationPoint(context: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        static onTopOfChunkCenter(context: $Structure$GenerationContext_, heightmapTypes: $Heightmap$Types_, generator: $Consumer_<$StructurePiecesBuilder>): ($Structure$GenerationStub) | undefined;
        afterPlace(level: $WorldGenLevel, structureManager: $StructureManager, chunkGenerator: $ChunkGenerator, random: $RandomSource, boundingBox: $BoundingBox, chunkPos: $ChunkPos, pieces: $PiecesContainer_): void;
        static getMeanFirstOccupiedHeight(context: $Structure$GenerationContext_, minX: number, minZ: number, maxX: number, maxZ: number): number;
        static getLowestY(context: $Structure$GenerationContext_, maxX: number, maxZ: number): number;
        static getLowestY(context: $Structure$GenerationContext_, minX: number, minZ: number, maxX: number, maxZ: number): number;
        findGenerationPoint(context: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        generate(registryAccess: $RegistryAccess, chunkGenerator: $ChunkGenerator, biomeSource: $BiomeSource, randomState: $RandomState, structureTemplateManager: $StructureTemplateManager, seed: number, arg6: $ChunkPos, chunkPos: number, references: $LevelHeightAccessor, heightAccessor: $Predicate_<$Holder<$Biome>>): $StructureStart;
        type(): $StructureType<never>;
        step(): $GenerationStep$Decoration;
        getModifiedStructureSettings(): $Structure$StructureSettings;
        biomes(): $HolderSet<$Biome>;
        static CODEC: $Codec<$Holder<$Structure>>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    /**
     * Values that may be interpreted as {@link $Structure}.
     */
    export type $Structure_ = RegistryTypes.WorldgenStructure;
    export interface $StructureSet extends RegistryMarked<RegistryTypes.WorldgenStructureSetTag, RegistryTypes.WorldgenStructureSet> {}
    export class $Structure$GenerationStub extends $Record {
        getPiecesBuilder(): $StructurePiecesBuilder;
        position(): $BlockPos;
        generator(): $Either<$Consumer<$StructurePiecesBuilder>, $StructurePiecesBuilder>;
        constructor(position: $BlockPos_, generator: $Consumer_<$StructurePiecesBuilder>);
        constructor(position: $BlockPos_, generator: $Either<$Consumer_<$StructurePiecesBuilder>, $StructurePiecesBuilder>);
    }
    /**
     * Values that may be interpreted as {@link $Structure$GenerationStub}.
     */
    export type $Structure$GenerationStub_ = { generator?: $Either<$Consumer_<$StructurePiecesBuilder>, $StructurePiecesBuilder>, position?: $BlockPos_,  } | [generator?: $Either<$Consumer_<$StructurePiecesBuilder>, $StructurePiecesBuilder>, position?: $BlockPos_, ];
    export interface $Structure extends RegistryMarked<RegistryTypes.WorldgenStructureTag, RegistryTypes.WorldgenStructure> {}
    export class $StructurePieceAccessor {
    }
    export interface $StructurePieceAccessor {
        addPiece(piece: $StructurePiece): void;
        findCollisionPiece(box: $BoundingBox): $StructurePiece;
    }
    export class $StructurePiece {
        addAdditionalSaveData(context: $StructurePieceSerializationContext_, tag: $CompoundTag_): void;
        static makeBoundingBox(x: number, y: number, z: number, direction: $Direction_, offsetX: number, offsetY: number, offsetZ: number): $BoundingBox;
        createTag(context: $StructurePieceSerializationContext_): $CompoundTag;
        isInterior(level: $LevelReader, x: number, y: number, z: number, box: $BoundingBox): boolean;
        canBeReplaced(level: $LevelReader, x: number, y: number, z: number, box: $BoundingBox): boolean;
        placeBlock(level: $WorldGenLevel, state: $BlockState_, x: number, y: number, z: number, box: $BoundingBox): void;
        getGenDepth(): number;
        static reorient(level: $BlockGetter, pos: $BlockPos_, state: $BlockState_): $BlockState;
        setOrientation(orientation: $Direction_ | null): void;
        getOrientation(): $Direction;
        addChildren(piece: $StructurePiece, pieces: $StructurePieceAccessor, random: $RandomSource): void;
        setGenDepth(genDepth: number): void;
        isCloseToChunk(chunkPos: $ChunkPos, distance: number): boolean;
        getLocatorPosition(): $BlockPos;
        getWorldPos(x: number, y: number, z: number): $BlockPos$MutableBlockPos;
        getWorldX(x: number, z: number): number;
        getWorldY(y: number): number;
        getWorldZ(x: number, z: number): number;
        generateAirBox(level: $WorldGenLevel, box: $BoundingBox, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): void;
        generateBox(level: $WorldGenLevel, box: $BoundingBox, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number, alwaysReplace: boolean, random: $RandomSource, blockSelector: $StructurePiece$BlockSelector): void;
        generateBox(level: $WorldGenLevel, boundingBox: $BoundingBox, box: $BoundingBox, boundaryBlockState: $BlockState_, insideBlockState: $BlockState_, existingOnly: boolean): void;
        generateBox(level: $WorldGenLevel, boundingBox: $BoundingBox, box: $BoundingBox, alwaysReplace: boolean, random: $RandomSource, blockSelector: $StructurePiece$BlockSelector): void;
        /**
         * Fill the given area with the selected blocks
         */
        generateBox(level: $WorldGenLevel, box: $BoundingBox, xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number, boundaryBlockState: $BlockState_, insideBlockState: $BlockState_, existingOnly: boolean): void;
        generateMaybeBox(level: $WorldGenLevel, box: $BoundingBox, random: $RandomSource, chance: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, edgeState: $BlockState_, state: $BlockState_, requireNonAir: boolean, requireSkylight: boolean): void;
        maybeGenerateBlock(level: $WorldGenLevel, box: $BoundingBox, random: $RandomSource, chance: number, x: number, y: number, z: number, state: $BlockState_): void;
        generateUpperHalfSphere(level: $WorldGenLevel, box: $BoundingBox, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number, state: $BlockState_, excludeAir: boolean): void;
        fillColumnDown(level: $WorldGenLevel, state: $BlockState_, x: number, y: number, z: number, box: $BoundingBox): void;
        isReplaceableByStructures(state: $BlockState_): boolean;
        createChest(level: $ServerLevelAccessor, box: $BoundingBox, random: $RandomSource, pos: $BlockPos_, lootTable: $ResourceKey_<$LootTable>, state: $BlockState_ | null): boolean;
        createChest(level: $WorldGenLevel, box: $BoundingBox, random: $RandomSource, x: number, y: number, z: number, lootTable: $ResourceKey_<$LootTable>): boolean;
        static getRandomHorizontalDirection(random: $RandomSource): $Direction;
        createDispenser(level: $WorldGenLevel, box: $BoundingBox, random: $RandomSource, x: number, y: number, z: number, facing: $Direction_, lootTable: $ResourceKey_<$LootTable>): boolean;
        static createBoundingBox(pieces: $Stream<$StructurePiece>): $BoundingBox;
        static findCollisionPiece(pieces: $List_<$StructurePiece>, boundingBox: $BoundingBox): $StructurePiece;
        move(x: number, y: number, z: number): void;
        getBlock(level: $BlockGetter, x: number, y: number, z: number, box: $BoundingBox): $BlockState;
        getType(): $StructurePieceType;
        getMirror(): $Mirror;
        postProcess(level: $WorldGenLevel, structureManager: $StructureManager, generator: $ChunkGenerator, random: $RandomSource, box: $BoundingBox, chunkPos: $ChunkPos, pos: $BlockPos_): void;
        getBoundingBox(): $BoundingBox;
        getRotation(): $Rotation;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(type: $StructurePieceType_, tag: $CompoundTag_);
        constructor(type: $StructurePieceType_, genDepth: number, boundingBox: $BoundingBox);
    }
    export class $StructureSet$StructureSelectionEntry extends $Record {
        weight(): number;
        structure(): $Holder<$Structure>;
        static CODEC: $Codec<$StructureSet$StructureSelectionEntry>;
        constructor(arg0: $Holder_<$Structure>, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $StructureSet$StructureSelectionEntry}.
     */
    export type $StructureSet$StructureSelectionEntry_ = { structure?: $Holder_<$Structure>, weight?: number,  } | [structure?: $Holder_<$Structure>, weight?: number, ];
    export class $Structure$StructureSettings extends $Record {
        spawnOverrides(): $Map<$MobCategory, $StructureSpawnOverride>;
        terrainAdaptation(): $TerrainAdjustment;
        step(): $GenerationStep$Decoration;
        biomes(): $HolderSet<$Biome>;
        static CODEC: $MapCodec<$Structure$StructureSettings>;
        static DEFAULT: $Structure$StructureSettings;
        constructor(biomes: $HolderSet_<$Biome>);
        constructor(biomes: $HolderSet_<$Biome>, spawnOverrides: $Map_<$MobCategory_, $StructureSpawnOverride_>, step: $GenerationStep$Decoration_, terrainAdaptation: $TerrainAdjustment_);
    }
    /**
     * Values that may be interpreted as {@link $Structure$StructureSettings}.
     */
    export type $Structure$StructureSettings_ = { spawnOverrides?: $Map_<$MobCategory_, $StructureSpawnOverride_>, terrainAdaptation?: $TerrainAdjustment_, biomes?: $HolderSet_<$Biome>, step?: $GenerationStep$Decoration_,  } | [spawnOverrides?: $Map_<$MobCategory_, $StructureSpawnOverride_>, terrainAdaptation?: $TerrainAdjustment_, biomes?: $HolderSet_<$Biome>, step?: $GenerationStep$Decoration_, ];
    export class $StructureSpawnOverride extends $Record {
        boundingBox(): $StructureSpawnOverride$BoundingBoxType;
        spawns(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        static CODEC: $Codec<$StructureSpawnOverride>;
        constructor(arg0: $StructureSpawnOverride$BoundingBoxType_, arg1: $WeightedRandomList<$MobSpawnSettings$SpawnerData>);
    }
    /**
     * Values that may be interpreted as {@link $StructureSpawnOverride}.
     */
    export type $StructureSpawnOverride_ = { boundingBox?: $StructureSpawnOverride$BoundingBoxType_, spawns?: $WeightedRandomList<$MobSpawnSettings$SpawnerData>,  } | [boundingBox?: $StructureSpawnOverride$BoundingBoxType_, spawns?: $WeightedRandomList<$MobSpawnSettings$SpawnerData>, ];
    export interface $StructureType<S> extends RegistryMarked<RegistryTypes.WorldgenStructureTypeTag, RegistryTypes.WorldgenStructureType> {}
    export class $StructurePiece$BlockSelector {
        getNext(): $BlockState;
        next(random: $RandomSource, x: number, y: number, z: number, wall: boolean): void;
        constructor();
    }
    export class $Structure$GenerationContext extends $Record {
        randomState(): $RandomState;
        chunkGenerator(): $ChunkGenerator;
        heightAccessor(): $LevelHeightAccessor;
        validBiome(): $Predicate<$Holder<$Biome>>;
        biomeSource(): $BiomeSource;
        structureTemplateManager(): $StructureTemplateManager;
        chunkPos(): $ChunkPos;
        seed(): number;
        random(): $WorldgenRandom;
        registryAccess(): $RegistryAccess;
        constructor(registryAccess: $RegistryAccess, chunkGenerator: $ChunkGenerator, biomeSource: $BiomeSource, randomState: $RandomState, structureTemplateManager: $StructureTemplateManager, seed: number, arg6: $ChunkPos, chunkPos: $LevelHeightAccessor, heightAccessor: $Predicate_<$Holder<$Biome>>);
        constructor(registryAccess: $RegistryAccess, chunkGenerator: $ChunkGenerator, biomeSource: $BiomeSource, randomState: $RandomState, structureTemplateManager: $StructureTemplateManager, random: $WorldgenRandom, seed: number, chunkPos: $ChunkPos, heightAccessor: $LevelHeightAccessor, validBiome: $Predicate_<$Holder<$Biome>>);
    }
    /**
     * Values that may be interpreted as {@link $Structure$GenerationContext}.
     */
    export type $Structure$GenerationContext_ = { random?: $WorldgenRandom, validBiome?: $Predicate_<$Holder<$Biome>>, seed?: number, registryAccess?: $RegistryAccess, heightAccessor?: $LevelHeightAccessor, chunkGenerator?: $ChunkGenerator, structureTemplateManager?: $StructureTemplateManager, biomeSource?: $BiomeSource, randomState?: $RandomState, chunkPos?: $ChunkPos,  } | [random?: $WorldgenRandom, validBiome?: $Predicate_<$Holder<$Biome>>, seed?: number, registryAccess?: $RegistryAccess, heightAccessor?: $LevelHeightAccessor, chunkGenerator?: $ChunkGenerator, structureTemplateManager?: $StructureTemplateManager, biomeSource?: $BiomeSource, randomState?: $RandomState, chunkPos?: $ChunkPos, ];
    export class $StructureStart {
        static loadStaticStart(context: $StructurePieceSerializationContext_, tag: $CompoundTag_, seed: number): $StructureStart;
        getMaxReferences(): number;
        getStructure(): $Structure;
        getPieces(): $List<$StructurePiece>;
        addReference(): void;
        createTag(context: $StructurePieceSerializationContext_, chunkPos: $ChunkPos): $CompoundTag;
        getChunkPos(): $ChunkPos;
        canBeReferenced(): boolean;
        getReferences(): number;
        placeInChunk(level: $WorldGenLevel, structureManager: $StructureManager, generator: $ChunkGenerator, random: $RandomSource, box: $BoundingBox, chunkPos: $ChunkPos): void;
        isValid(): boolean;
        getBoundingBox(): $BoundingBox;
        static INVALID_START: $StructureStart;
        static INVALID_START_ID: string;
        constructor(structure: $Structure_, chunkPos: $ChunkPos, references: number, pieceContainer: $PiecesContainer_);
    }
    export class $StructureSet extends $Record implements $StructureSetAccessor {
        placement(): $StructurePlacement;
        static entry(structure: $Holder_<$Structure>, weight: number): $StructureSet$StructureSelectionEntry;
        static entry(structure: $Holder_<$Structure>): $StructureSet$StructureSelectionEntry;
        structures(): $List<$StructureSet$StructureSelectionEntry>;
        setStructures(list: $List_<$StructureSet$StructureSelectionEntry_>): void;
        static CODEC: $Codec<$Holder<$StructureSet>>;
        static DIRECT_CODEC: $Codec<$StructureSet>;
        constructor(structure: $Holder_<$Structure>, placement: $StructurePlacement);
        constructor(arg0: $List_<$StructureSet$StructureSelectionEntry_>, arg1: $StructurePlacement);
    }
    /**
     * Values that may be interpreted as {@link $StructureSet}.
     */
    export type $StructureSet_ = RegistryTypes.WorldgenStructureSet | { structures?: $List_<$StructureSet$StructureSelectionEntry_>, placement?: $StructurePlacement,  } | [structures?: $List_<$StructureSet$StructureSelectionEntry_>, placement?: $StructurePlacement, ];
    export class $SinglePieceStructure$PieceConstructor {
    }
    export interface $SinglePieceStructure$PieceConstructor {
    }
    /**
     * Values that may be interpreted as {@link $SinglePieceStructure$PieceConstructor}.
     */
    export type $SinglePieceStructure$PieceConstructor_ = (() => void);
    export class $SinglePieceStructure extends $Structure {
        static CODEC: $Codec<$Holder<$Structure>>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(_constructor: $SinglePieceStructure$PieceConstructor_, width: number, depth: number, settings: $Structure$StructureSettings_);
    }
    export class $StructureCheck {
        checkStart(chunkPos: $ChunkPos, structure: $Structure_, placement: $StructurePlacement, skipKnownStructures: boolean): $StructureCheckResult;
        incrementReference(pos: $ChunkPos, structure: $Structure_): void;
        onStructureLoad(chunkPos: $ChunkPos, chunkStarts: $Map_<$Structure_, $StructureStart>): void;
        constructor(storageAccess: $ChunkScanAccess_, registryAccess: $RegistryAccess, structureTemplateManager: $StructureTemplateManager, dimension: $ResourceKey_<$Level>, chunkGenerator: $ChunkGenerator, randomState: $RandomState, heightAccessor: $LevelHeightAccessor, biomeSource: $BiomeSource, seed: number, arg9: $DataFixer);
    }
    /**
     * A simple three-dimensional mutable integer bounding box.
     * Note that this box is both mutable, and has an implementation of `hashCode()` and `equals()`.
     * This can be used as `HashMap` keys for example, if the user can ensure the instances themselves are not modified.
     */
    export class $BoundingBox implements $BoundingBoxAccessor$3, $BoundingBoxAccessor, $BoundingBoxAccessor$2, $BoundingBoxAccessor$1 {
        /**
         * @return The center of this bounding box. Note in even-sized dimensions the center position will be offset in the positive direction.
         */
        getCenter(): $BlockPos;
        intersectingChunks(): $Stream<$ChunkPos>;
        /**
         * @return The length of this bounding box along the x-axis.
         */
        minX(): number;
        /**
         * @return The length of this bounding box along the x-axis.
         */
        minY(): number;
        /**
         * @deprecated
         * Expands this box to be at least large enough to contain `pos`.
         */
        encapsulate(pos: $BlockPos_): $BoundingBox;
        /**
         * @deprecated
         * Expands this box to be at least large enough to contain `box`.
         */
        encapsulate(box: $BoundingBox): $BoundingBox;
        static infinite(): $BoundingBox;
        isInside(x: number, y: number, z: number): boolean;
        /**
         * @return `true` if the bounding box contains the `vector`.
         */
        isInside(vector: $Vec3i): boolean;
        forAllCorners(pos: $Consumer_<$BlockPos>): void;
        static encapsulatingPositions(boxes: $Iterable_<$BlockPos>): ($BoundingBox) | undefined;
        /**
         * @return The length of this bounding box along the x-axis.
         */
        getXSpan(): number;
        /**
         * @return The length of this bounding box along the x-axis.
         */
        getYSpan(): number;
        /**
         * @return The length of this bounding box along the x-axis.
         */
        getZSpan(): number;
        static fromCorners(first: $Vec3i, second: $Vec3i): $BoundingBox;
        /**
         * Expands this box by a fixed `value` in all directions.
         */
        inflatedBy(value: number): $BoundingBox;
        inflatedBy(x: number, y: number, z: number): $BoundingBox;
        /**
         * Create a bounding box with the specified dimensions and rotate it. Used to project a possible new component Bounding Box - to check if it would cut anything already spawned.
         */
        static orientBox(structureMinX: number, structureMinY: number, structureMinZ: number, xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number, facing: $Direction_): $BoundingBox;
        static encapsulatingBoxes(boxes: $Iterable_<$BoundingBox>): ($BoundingBox) | undefined;
        /**
         * @deprecated
         * Translates this box by the given vector, modifying the current box.
         */
        move(vector: $Vec3i): $BoundingBox;
        /**
         * @deprecated
         */
        move(x: number, y: number, z: number): $BoundingBox;
        /**
         * @return `true` if `box` intersects this box.
         */
        intersects(box: $BoundingBox): boolean;
        /**
         * @return `true` if this bounding box intersects the horizontal x/z region described by the min and max parameters.
         */
        intersects(minX: number, minZ: number, maxX: number, maxZ: number): boolean;
        moved(x: number, y: number, z: number): $BoundingBox;
        /**
         * Returns a vector describing the dimensions of this bounding box.
         * Note that unlike `getXSpan()`, `getYSpan()`, and `getZSpan()`, the length is interpreted here as the difference in coordinates. So a box over a 1x1x1 area, which still contains a single point, will report length zero.
         */
        getLength(): $Vec3i;
        /**
         * @return The length of this bounding box along the x-axis.
         */
        maxX(): number;
        /**
         * @return The length of this bounding box along the x-axis.
         */
        maxY(): number;
        /**
         * @return The length of this bounding box along the x-axis.
         */
        minZ(): number;
        /**
         * @return The length of this bounding box along the x-axis.
         */
        maxZ(): number;
        setMinY(arg0: number): void;
        setMinX(arg0: number): void;
        setMinZ(arg0: number): void;
        setMaxX(arg0: number): void;
        setMaxY(arg0: number): void;
        setMaxZ(arg0: number): void;
        static CODEC: $Codec<$BoundingBox>;
        constructor(pos: $BlockPos_);
        constructor(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number);
    }
    export class $TerrainAdjustment extends $Enum<$TerrainAdjustment> implements $StringRepresentable {
        static values(): $TerrainAdjustment[];
        static valueOf(arg0: string): $TerrainAdjustment;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ENCAPSULATE: $TerrainAdjustment;
        static CODEC: $Codec<$TerrainAdjustment>;
        static BURY: $TerrainAdjustment;
        static NONE: $TerrainAdjustment;
        static BEARD_BOX: $TerrainAdjustment;
        static BEARD_THIN: $TerrainAdjustment;
    }
    /**
     * Values that may be interpreted as {@link $TerrainAdjustment}.
     */
    export type $TerrainAdjustment_ = "none" | "bury" | "beard_thin" | "beard_box" | "encapsulate";
    export class $StructureSpawnOverride$BoundingBoxType extends $Enum<$StructureSpawnOverride$BoundingBoxType> implements $StringRepresentable {
        static values(): $StructureSpawnOverride$BoundingBoxType[];
        static valueOf(arg0: string): $StructureSpawnOverride$BoundingBoxType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$StructureSpawnOverride$BoundingBoxType>;
        static STRUCTURE: $StructureSpawnOverride$BoundingBoxType;
        static PIECE: $StructureSpawnOverride$BoundingBoxType;
    }
    /**
     * Values that may be interpreted as {@link $StructureSpawnOverride$BoundingBoxType}.
     */
    export type $StructureSpawnOverride$BoundingBoxType_ = "piece" | "full";
}
