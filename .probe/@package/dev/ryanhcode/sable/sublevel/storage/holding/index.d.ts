import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Object2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SubLevelStorage } from "@package/dev/ryanhcode/sable/sublevel/storage/serialization";
import { $HoldingSubLevel } from "@package/dev/ryanhcode/sable/sublevel/storage";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Iterable, $AutoCloseable, $Record } from "@package/java/lang";
import { $UUID_, $List } from "@package/java/util";
import { $ServerSubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";

declare module "@package/dev/ryanhcode/sable/sublevel/storage/holding" {
    export class $SubLevelHoldingChunkMap implements $AutoCloseable {
        moveToUnloaded(arg0: $ServerSubLevel, arg1: $ChunkPos): void;
        loadHoldingSubLevel(arg0: $HoldingSubLevel): void;
        getHoldingSubLevel(arg0: $UUID_): $HoldingSubLevel;
        processChanges(): void;
        queueDeletion(arg0: $ServerSubLevel): void;
        snatchAndLoad(arg0: $GlobalSavedSubLevelPointer_, arg1: $UUID_): void;
        getStorage(): $SubLevelStorage;
        updateChunkStatus(arg0: $ChunkPos, arg1: boolean): void;
        saveAll(): void;
        close(): void;
        constructor(arg0: $ServerLevel, arg1: $ServerSubLevelContainer);
        get storage(): $SubLevelStorage;
    }
    export class $SavedSubLevelPointer extends $Record {
        storageIndex(): number;
        subLevelIndex(): number;
        packed(): number;
        static unpack(arg0: number): $SavedSubLevelPointer;
        constructor(storageIndex: number, subLevelIndex: number);
    }
    /**
     * Values that may be interpreted as {@link $SavedSubLevelPointer}.
     */
    export type $SavedSubLevelPointer_ = { storageIndex?: number, subLevelIndex?: number,  } | [storageIndex?: number, subLevelIndex?: number, ];
    export class $SubLevelHoldingChunk {
        markKeepLoaded(): void;
        acceptHoldingSubLevel(arg0: $HoldingSubLevel): void;
        getLoadedHoldingSubLevels(): $Iterable<$HoldingSubLevel>;
        shouldKeepLoaded(): boolean;
        collectReadySubLevels(arg0: $ServerLevel, arg1: $Object2ObjectMap<$UUID_, $HoldingSubLevel>): void;
        getSubLevelPointers(): $List<$SavedSubLevelPointer>;
        getChunkPos(): $ChunkPos;
        writeTo(arg0: $CompoundTag_): void;
        static from(arg0: $ChunkPos, arg1: $CompoundTag_): $SubLevelHoldingChunk;
        constructor(arg0: $ChunkPos);
        get loadedHoldingSubLevels(): $Iterable<$HoldingSubLevel>;
        get subLevelPointers(): $List<$SavedSubLevelPointer>;
        get chunkPos(): $ChunkPos;
    }
    export class $GlobalSavedSubLevelPointer extends $Record {
        storageIndex(): number;
        subLevelIndex(): number;
        local(): $SavedSubLevelPointer;
        chunkPos(): $ChunkPos;
        static CODEC: $Codec<$GlobalSavedSubLevelPointer>;
        constructor(chunkPos: $ChunkPos, storageIndex: number, subLevelIndex: number);
    }
    /**
     * Values that may be interpreted as {@link $GlobalSavedSubLevelPointer}.
     */
    export type $GlobalSavedSubLevelPointer_ = { storageIndex?: number, subLevelIndex?: number, chunkPos?: $ChunkPos,  } | [storageIndex?: number, subLevelIndex?: number, chunkPos?: $ChunkPos, ];
}
