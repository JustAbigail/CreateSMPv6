import { $ChunkPos, $LevelHeightAccessor, $Level } from "@package/net/minecraft/world/level";
import { $Dynamic, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $StreamTagVisitor, $Tag_, $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $DimensionDataStorage } from "@package/net/minecraft/world/level/storage";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $Supplier_, $Function_, $BooleanSupplier_ } from "@package/java/util/function";
import { $ReportedException } from "@package/net/minecraft";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $Path_ } from "@package/java/nio/file";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Throwable, $Record, $AutoCloseable, $Runnable } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/chunk/storage" {
    export class $ChunkStorage implements $AutoCloseable {
        storageInfo(): $RegionStorageInfo;
        isOldChunkAround(pos: $ChunkPos, radius: number): boolean;
        upgradeChunkTag(levelKey: $ResourceKey_<$Level>, storage: $Supplier_<$DimensionDataStorage>, chunkData: $CompoundTag_, chunkGeneratorKey: ($ResourceKey_<$MapCodec<$ChunkGenerator>>) | undefined): $CompoundTag;
        flushWorker(): void;
        static injectDatafixingContext(chunkData: $CompoundTag_, levelKey: $ResourceKey_<$Level>, chunkGeneratorKey: ($ResourceKey_<$MapCodec<$ChunkGenerator>>) | undefined): void;
        handleLegacyStructureIndex(chunkPos: $ChunkPos): void;
        chunkScanner(): $ChunkScanAccess;
        static getVersion(chunkData: $CompoundTag_): number;
        write(chunkPos: $ChunkPos, data: $CompoundTag_): $CompletableFuture<void>;
        read(chunkPos: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        close(): void;
        fixerUpper: $DataFixer;
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        constructor(info: $RegionStorageInfo_, folder: $Path_, fixerUpper: $DataFixer, sync: boolean);
    }
    export class $RegionStorageInfo extends $Record {
        withTypeSuffix(suffix: string): $RegionStorageInfo;
        dimension(): $ResourceKey<$Level>;
        type(): string;
        level(): string;
        constructor(arg0: string, arg1: $ResourceKey_<$Level>, arg2: string);
    }
    /**
     * Values that may be interpreted as {@link $RegionStorageInfo}.
     */
    export type $RegionStorageInfo_ = { type?: string, level?: string, dimension?: $ResourceKey_<$Level>,  } | [type?: string, level?: string, dimension?: $ResourceKey_<$Level>, ];
    export class $SimpleRegionStorage implements $AutoCloseable {
        storageInfo(): $RegionStorageInfo;
        upgradeChunkTag(tag: $Dynamic<$Tag_>, version: number): $Dynamic<$Tag>;
        upgradeChunkTag(tag: $CompoundTag_, version: number): $CompoundTag;
        synchronize(flushStorage: boolean): $CompletableFuture<void>;
        write(chunkPos: $ChunkPos, data: $CompoundTag_ | null): $CompletableFuture<void>;
        read(chunkPos: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        close(): void;
        constructor(info: $RegionStorageInfo_, folder: $Path_, fixerUpper: $DataFixer, sync: boolean, dataFixType: $DataFixTypes_);
    }
    export class $ChunkIOErrorReporter {
        static createMisplacedChunkReport(pos: $ChunkPos, expectedPos: $ChunkPos): $ReportedException;
    }
    export interface $ChunkIOErrorReporter {
        reportChunkLoadFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        reportChunkSaveFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        reportMisplacedChunk(pos: $ChunkPos, expectedPos: $ChunkPos, regionStorageInfo: $RegionStorageInfo_): void;
    }
    export class $ChunkScanAccess {
    }
    export interface $ChunkScanAccess {
        scanChunk(chunkPos: $ChunkPos, visitor: $StreamTagVisitor): $CompletableFuture<void>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkScanAccess}.
     */
    export type $ChunkScanAccess_ = ((arg0: $ChunkPos, arg1: $StreamTagVisitor) => $CompletableFuture<void>);
    export class $SectionStorage<R> implements $AutoCloseable {
        onSectionLoad(sectionKey: number): void;
        outsideStoredRange(sectionKey: number): boolean;
        getOrLoad(sectionKey: number): (R) | undefined;
        hasWork(): boolean;
        getOrCreate(sectionKey: number): R;
        setDirty(sectionKey: number): void;
        remove(sectionKey: number): void;
        get(sectionKey: number): (R) | undefined;
        flush(chunkPos: $ChunkPos): void;
        close(): void;
        tick(aheadOfTime: $BooleanSupplier_): void;
        levelHeightAccessor: $LevelHeightAccessor;
        constructor(simpleRegionStorage: $SimpleRegionStorage, codec: $Function_<$Runnable, $Codec<R>>, factory: $Function_<$Runnable, R>, registryAccess: $RegistryAccess, errorReporter: $ChunkIOErrorReporter, levelHeightAccessor: $LevelHeightAccessor);
    }
}
