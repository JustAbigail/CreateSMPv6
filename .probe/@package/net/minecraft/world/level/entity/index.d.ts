import { $Writer } from "@package/java/io";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $LongSet, $Long2ObjectFunction_ } from "@package/it/unimi/dsi/fastutil/longs";
import { $Logger } from "@package/org/slf4j";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity$RemovalReason_, $Entity } from "@package/net/minecraft/world/entity";
import { $UUID, $Set, $UUID_, $List_ } from "@package/java/util";
import { $AbortableIterationConsumer$Continuation, $AbortableIterationConsumer_ } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $FullChunkStatus_, $FullChunkStatus } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Stream, $LongStream } from "@package/java/util/stream";
import { $Enum, $Iterable, $AutoCloseable, $Class } from "@package/java/lang";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/entity" {
    export class $EntityTickList {
        remove(entity: $Entity): void;
        add(entity: $Entity): void;
        contains(entity: $Entity): boolean;
        forEach(entity: $Consumer_<$Entity>): void;
        constructor();
    }
    export class $Visibility extends $Enum<$Visibility> {
        static fromFullChunkStatus(fullChunkStatus: $FullChunkStatus_): $Visibility;
        isTicking(): boolean;
        static values(): $Visibility[];
        static valueOf(arg0: string): $Visibility;
        isAccessible(): boolean;
        static TICKING: $Visibility;
        static TRACKED: $Visibility;
        static HIDDEN: $Visibility;
        get ticking(): boolean;
        get accessible(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Visibility}.
     */
    export type $Visibility_ = "hidden" | "tracked" | "ticking";
    export class $LevelCallback<T> {
    }
    export interface $LevelCallback<T> {
        onCreated(entity: T): void;
        onTickingStart(entity: T): void;
        onTickingEnd(entity: T): void;
        onTrackingStart(entity: T): void;
        onTrackingEnd(entity: T): void;
        onSectionChange(entity: T): void;
        onDestroyed(entity: T): void;
    }
    export class $PersistentEntitySectionManager<T extends $EntityAccess> implements $AutoCloseable {
        removeSectionIfEmpty(sectionKey: number, arg1: $EntitySection<T>): void;
        static getEffectiveStatus<T extends $EntityAccess>(entity: T, visibility: $Visibility_): $Visibility;
        stopTracking(entity: T): void;
        startTracking(entity: T): void;
        updateChunkStatus(chunkPos: $ChunkPos, fullChunkStatus: $FullChunkStatus_): void;
        updateChunkStatus(pos: $ChunkPos, visibility: $Visibility_): void;
        saveAll(): void;
        autoSave(): void;
        addNewEntityWithoutEvent(entity: T): boolean;
        addNewEntity(entity: T): boolean;
        dumpSections(writer: $Writer): void;
        addLegacyChunkEntities(entities: $Stream<T>): void;
        addWorldGenChunkEntities(entities: $Stream<T>): void;
        areEntitiesLoaded(chunkPos: number): boolean;
        canPositionTick(pos: $BlockPos_): boolean;
        canPositionTick(chunkPos: $ChunkPos): boolean;
        tick(): void;
        count(): number;
        close(): void;
        isLoaded(uuid: $UUID_): boolean;
        stopTicking(entity: T): void;
        startTicking(entity: T): void;
        getEntityGetter(): $LevelEntityGetter<T>;
        gatherStats(): string;
        visibleEntityStorage: $EntityLookup<T>;
        callbacks: $LevelCallback<T>;
        static LOGGER: $Logger;
        sectionStorage: $EntitySectionStorage<T>;
        knownUuids: $Set<$UUID>;
        constructor(entityClass: $Class<T>, callbacks: $LevelCallback<T>, permanentStorage: $EntityPersistentStorage<T>);
        get entityGetter(): $LevelEntityGetter<T>;
    }
    export class $EntityPersistentStorage<T> {
    }
    export interface $EntityPersistentStorage<T> extends $AutoCloseable {
        loadEntities(pos: $ChunkPos): $CompletableFuture<$ChunkEntities<T>>;
        storeEntities(entities: $ChunkEntities<T>): void;
        flush(synchronize: boolean): void;
        close(): void;
    }
    export class $ChunkStatusUpdateListener {
    }
    export interface $ChunkStatusUpdateListener {
        onChunkStatusChange(chunkPos: $ChunkPos, fullChunkStatus: $FullChunkStatus_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkStatusUpdateListener}.
     */
    export type $ChunkStatusUpdateListener_ = ((arg0: $ChunkPos, arg1: $FullChunkStatus) => void);
    export class $EntitySection<T extends $EntityAccess> {
        updateChunkStatus(chunkStatus: $Visibility_): $Visibility;
        getEntities<U extends T>(test: $EntityTypeTest<T, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): $AbortableIterationConsumer$Continuation;
        getEntities(): $Stream<T>;
        getEntities(bounds: $AABB_, consumer: $AbortableIterationConsumer_<T>): $AbortableIterationConsumer$Continuation;
        remove(entity: T): boolean;
        size(): number;
        isEmpty(): boolean;
        add(entity: T): void;
        getStatus(): $Visibility;
        constructor(entityClazz: $Class<T>, chunkStatus: $Visibility_);
        get empty(): boolean;
        get status(): $Visibility;
    }
    export class $EntityInLevelCallback {
        static NULL: $EntityInLevelCallback;
    }
    export interface $EntityInLevelCallback {
        onRemove(reason: $Entity$RemovalReason_): void;
        onMove(): void;
    }
    export class $EntityTypeTest<B, T extends B> {
        static forExactClass<B, T extends B>(clazz: $Class<T>): $EntityTypeTest<B, T>;
        static forClass<B, T extends B>(clazz: $Class<T>): $EntityTypeTest<B, T>;
    }
    export interface $EntityTypeTest<B, T extends B> {
        getBaseClass(): $Class<B>;
        tryCast(entity: B): T;
        get baseClass(): $Class<B>;
    }
    export class $EntitySectionStorage<T extends $EntityAccess> {
        forEachAccessibleNonEmptySection(boundingBox: $AABB_, consumer: $AbortableIterationConsumer_<$EntitySection<T>>): void;
        getOrCreateSection(sectionPos: number): $EntitySection<T>;
        getAllChunksWithExistingSections(): $LongSet;
        getExistingSectionPositionsInChunk(pos: number): $LongStream;
        getExistingSectionsInChunk(pos: number): $Stream<$EntitySection<T>>;
        getSection(sectionPos: number): $EntitySection<T>;
        getEntities<U extends T>(test: $EntityTypeTest<T, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): void;
        getEntities(boundingBox: $AABB_, consumer: $AbortableIterationConsumer_<T>): void;
        remove(sectionId: number): void;
        count(): number;
        constructor(entityClass: $Class<T>, initialSectionVisibility: $Long2ObjectFunction_<$Visibility>);
        get allChunksWithExistingSections(): $LongSet;
    }
    export class $TransientEntitySectionManager<T extends $EntityAccess> {
        removeSectionIfEmpty(section: number, arg1: $EntitySection<T>): void;
        count(): number;
        stopTicking(pos: $ChunkPos): void;
        startTicking(pos: $ChunkPos): void;
        addEntity(entity: T): void;
        getEntityGetter(): $LevelEntityGetter<T>;
        gatherStats(): string;
        entityStorage: $EntityLookup<T>;
        callbacks: $LevelCallback<T>;
        static LOGGER: $Logger;
        sectionStorage: $EntitySectionStorage<T>;
        constructor(clazz: $Class<T>, callbacks: $LevelCallback<T>);
        get entityGetter(): $LevelEntityGetter<T>;
    }
    export class $EntityAccess {
    }
    export interface $EntityAccess {
        getId(): number;
        getSelfAndPassengers(): $Stream<$EntityAccess>;
        getPassengersAndSelf(): $Stream<$EntityAccess>;
        setLevelCallback(levelCallback: $EntityInLevelCallback): void;
        shouldBeSaved(): boolean;
        isAlwaysTicking(): boolean;
        getUUID(): $UUID;
        blockPosition(): $BlockPos;
        setRemoved(removalReason: $Entity$RemovalReason_): void;
        getBoundingBox(): $AABB;
        get id(): number;
        get selfAndPassengers(): $Stream<$EntityAccess>;
        get passengersAndSelf(): $Stream<$EntityAccess>;
        set levelCallback(value: $EntityInLevelCallback);
        get alwaysTicking(): boolean;
        get UUID(): $UUID;
        set removed(value: $Entity$RemovalReason_);
        get boundingBox(): $AABB;
    }
    export class $EntityLookup<T extends $EntityAccess> {
        getEntity(id: number): T;
        getEntity(uuid: $UUID_): T;
        getAllEntities(): $Iterable<T>;
        getEntities<U extends T>(test: $EntityTypeTest<T, U>, consumer: $AbortableIterationConsumer_<U>): void;
        remove(entity: T): void;
        add(entity: T): void;
        count(): number;
        constructor();
        get allEntities(): $Iterable<T>;
    }
    export class $LevelEntityGetter<T extends $EntityAccess> {
    }
    export interface $LevelEntityGetter<T extends $EntityAccess> {
        getAll(): $Iterable<T>;
        get<U extends T>(test: $EntityTypeTest<T, U>, consumer: $AbortableIterationConsumer_<U>): void;
        get<U extends T>(test: $EntityTypeTest<T, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): void;
        get(boundingBox: $AABB_, consumer: $Consumer_<T>): void;
        get(uuid: $UUID_): T;
        get(id: number): T;
        get all(): $Iterable<T>;
    }
    export class $ChunkEntities<T> {
        getEntities(): $Stream<T>;
        isEmpty(): boolean;
        getPos(): $ChunkPos;
        constructor(pos: $ChunkPos, entities: $List_<T>);
        get entities(): $Stream<T>;
        get empty(): boolean;
        get pos(): $ChunkPos;
    }
}
