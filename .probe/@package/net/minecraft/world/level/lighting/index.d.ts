import { $ChunkPos, $LevelHeightAccessor, $BlockGetter, $LightLayer_ } from "@package/net/minecraft/world/level";
import { $Long2ObjectOpenHashMap, $LongSet, $Long2ByteMap, $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $BlockPos_, $Direction_, $SectionPos, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $DataLayer, $LightChunk, $LightChunkGetter, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum, $Object } from "@package/java/lang";
import { $LayerLightSectionStorageAccessor, $LightEngineAccessor } from "@package/dev/engine_room/flywheel/backend/mixin/light";

declare module "@package/net/minecraft/world/level/lighting" {
    export class $LayerLightEventListener {
    }
    export interface $LayerLightEventListener extends $LightEventListener {
        getDataLayerData(sectionPos: $SectionPos): $DataLayer;
        getLightValue(levelPos: $BlockPos_): number;
    }
    export class $DataLayerStorageMap<M extends $DataLayerStorageMap<M>> {
        copyDataLayer(index: number): $DataLayer;
        removeLayer(index: number): $DataLayer;
        disableCache(): void;
        hasLayer(sectionPos: number): boolean;
        setLayer(sectionPos: number, arg1: $DataLayer): void;
        clearCache(): void;
        getLayer(index: number): $DataLayer;
        copy(): M;
        map: $Long2ObjectOpenHashMap<$DataLayer>;
        constructor(map: $Long2ObjectOpenHashMap<$DataLayer>);
    }
    export class $LightEventListener {
    }
    export interface $LightEventListener {
        runLightUpdates(): number;
        hasLightWork(): boolean;
        propagateLightSources(chunkPos: $ChunkPos): void;
        updateSectionStatus(pos: $SectionPos, isQueueEmpty: boolean): void;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        checkBlock(pos: $BlockPos_): void;
        setLightEnabled(chunkPos: $ChunkPos, lightEnabled: boolean): void;
    }
    export class $LayerLightSectionStorage<M extends $DataLayerStorageMap<M>> implements $LayerLightSectionStorageAccessor {
        getDebugSectionType(sectionPos: number): $LayerLightSectionStorage$SectionType;
        markNewInconsistencies(lightEngine: $LightEngine<M, never>): void;
        swapSectionMap(): void;
        getStoredLevel(levelPos: number): number;
        setStoredLevel(levelPos: number, arg1: number): void;
        hasInconsistencies(): boolean;
        getDataLayerToWrite(sectionPos: number): $DataLayer;
        getDataLayer(sectionPos: number, arg1: boolean): $DataLayer;
        getDataLayer(map: M, sectionPos: number): $DataLayer;
        storingLightForSection(sectionPos: number): boolean;
        markSectionAndNeighborsAsAffected(sectionPos: number): void;
        createDataLayer(sectionPos: number): $DataLayer;
        onNodeRemoved(sectionPos: number): void;
        onNodeAdded(sectionPos: number): void;
        putSectionState(sectionPos: number, arg1: number): void;
        lightOnInSection(sectionPos: number): boolean;
        queueSectionData(sectionPos: number, arg1: $DataLayer | null): void;
        retainData(sectionColumnPos: number, arg1: boolean): void;
        getDataLayerData(sectionPos: number): $DataLayer;
        updateSectionStatus(sectionColumnPos: number, arg1: boolean): void;
        setLightEnabled(sectionColumnPos: number, arg1: boolean): void;
        getLightValue(levelPos: number): number;
        flywheel$callGetDataLayer(sectionPos: number, arg1: boolean): $DataLayer;
        changedSections: $LongSet;
        queuedSections: $Long2ObjectMap<$DataLayer>;
        visibleSectionData: M;
        chunkSource: $LightChunkGetter;
        updatingSectionData: M;
        sectionStates: $Long2ByteMap;
        sectionsAffectedByLightUpdates: $LongSet;
        constructor(layer: $LightLayer_, chunkSource: $LightChunkGetter, updatingSectionData: M);
    }
    export class $LevelLightEngine implements $LightEventListener {
        getDebugSectionType(lightLayer: $LightLayer_, sectionPos: $SectionPos): $LayerLightSectionStorage$SectionType;
        getDebugData(lightLayer: $LightLayer_, sectionPos: $SectionPos): string;
        runLightUpdates(): number;
        lightOnInSection(sectionPos: $SectionPos): boolean;
        getLightSectionCount(): number;
        getMinLightSection(): number;
        queueSectionData(lightLayer: $LightLayer_, sectionPos: $SectionPos, dataLayer: $DataLayer | null): void;
        getMaxLightSection(): number;
        hasLightWork(): boolean;
        retainData(pos: $ChunkPos, retain: boolean): void;
        propagateLightSources(chunkPos: $ChunkPos): void;
        updateSectionStatus(pos: $SectionPos, isEmpty: boolean): void;
        checkBlock(pos: $BlockPos_): void;
        setLightEnabled(pos: $ChunkPos, retain: boolean): void;
        getRawBrightness(blockPos: $BlockPos_, amount: number): number;
        getLayerListener(type: $LightLayer_): $LayerLightEventListener;
        updateSectionStatus(arg0: $BlockPos_, arg1: boolean): void;
        static LIGHT_SECTION_PADDING: number;
        skyEngine: $LightEngine<never, never>;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEngine: $LightEngine<never, never>;
        constructor(lightChunkGetter: $LightChunkGetter, blockLight: boolean, skyLight: boolean);
        get lightSectionCount(): number;
        get minLightSection(): number;
        get maxLightSection(): number;
    }
    export class $ChunkSkyLightSources {
        getHighestLowestSourceY(): number;
        getLowestSourceY(x: number, z: number): number;
        update(level: $BlockGetter, x: number, y: number, z: number): boolean;
        fillFrom(chunk: $ChunkAccess): void;
        static NEGATIVE_INFINITY: number;
        constructor(level: $LevelHeightAccessor);
        get highestLowestSourceY(): number;
    }
    export class $LayerLightSectionStorage$SectionType extends $Enum<$LayerLightSectionStorage$SectionType> {
        static values(): $LayerLightSectionStorage$SectionType[];
        static valueOf(arg0: string): $LayerLightSectionStorage$SectionType;
        display(): string;
        static LIGHT_ONLY: $LayerLightSectionStorage$SectionType;
        static LIGHT_AND_DATA: $LayerLightSectionStorage$SectionType;
        static EMPTY: $LayerLightSectionStorage$SectionType;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightSectionStorage$SectionType}.
     */
    export type $LayerLightSectionStorage$SectionType_ = "empty" | "light_only" | "light_and_data";
    export class $LightEngine<M extends $DataLayerStorageMap<M>, S extends $LayerLightSectionStorage<M>> implements $LayerLightEventListener, $LightEngineAccessor<any, any> {
        getDebugSectionType(sectionPos: number): $LayerLightSectionStorage$SectionType;
        static isEmptyShape(state: $BlockState_): boolean;
        shapeOccludes(packedPos1: number, arg1: $BlockState_, state1: number, packedPos2: $BlockState_, arg4: $Direction_): boolean;
        checkNode(packedPos: number): void;
        propagateIncrease(packedPos: number, arg1: number, queueEntry: number): void;
        propagateDecrease(packedPos1: number, arg1: number): void;
        enqueueDecrease(packedPos1: number, arg1: number): void;
        enqueueIncrease(packedPos1: number, arg1: number): void;
        getDebugData(sectionPos: number): string;
        getOpacity(state: $BlockState_, pos: $BlockPos_): number;
        runLightUpdates(): number;
        queueSectionData(sectionPos: number, arg1: $DataLayer | null): void;
        hasLightWork(): boolean;
        retainData(chunkPos: $ChunkPos, retainData: boolean): void;
        getDataLayerData(sectionPos: $SectionPos): $DataLayer;
        static getLightBlockInto(level: $BlockGetter, state1: $BlockState_, pos1: $BlockPos_, state2: $BlockState_, pos2: $BlockPos_, direction: $Direction_, defaultReturnValue: number): number;
        updateSectionStatus(pos: $SectionPos, isQueueEmpty: boolean): void;
        static hasDifferentLightProperties(level: $BlockGetter, pos: $BlockPos_, state1: $BlockState_, state2: $BlockState_): boolean;
        checkBlock(pos: $BlockPos_): void;
        getOcclusionShape(state: $BlockState_, pos: number, arg2: $Direction_): $VoxelShape;
        static getOcclusionShape(level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, direction: $Direction_): $VoxelShape;
        getState(pos: $BlockPos_): $BlockState;
        getChunk(x: number, z: number): $LightChunk;
        setLightEnabled(chunkPos: $ChunkPos, retainData: boolean): void;
        getLightValue(levelPos: $BlockPos_): number;
        updateSectionStatus(arg0: $BlockPos_, arg1: boolean): void;
        flywheel$storage(): $Object;
        static PULL_LIGHT_IN_ENTRY: number;
        static MIN_OPACITY: number;
        chunkSource: $LightChunkGetter;
        static PROPAGATION_DIRECTIONS: $Direction[];
        static MAX_LEVEL: number;
        storage: $Object;
        constructor(chunkSource: $LightChunkGetter, storage: $Object);
    }
}
