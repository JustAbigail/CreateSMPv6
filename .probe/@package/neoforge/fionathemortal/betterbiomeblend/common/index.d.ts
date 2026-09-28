import { $Long2ObjectOpenHashMap, $Long2ObjectLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ReentrantLock } from "@package/java/util/concurrent/locks";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $Stack } from "@package/java/util";
export * as cache from "@package/neoforge/fionathemortal/betterbiomeblend/common/cache";

declare module "@package/neoforge/fionathemortal/betterbiomeblend/common" {
    export class $BlendCache {
        releaseChunkWithoutLock(chunk: $BlendChunk): void;
        releaseChunk(chunk: $BlendChunk): void;
        addToInvalidationHash(chunk: $BlendChunk): void;
        removeFromInvalidationHash(chunk: $BlendChunk): void;
        invalidateAll(): void;
        invalidateChunk(chunkX: number, chunkZ: number): void;
        getOrInitChunk(chunkX: number, chunkY: number, chunkZ: number, colorType: number): $BlendChunk;
        freeList: $Stack<$BlendChunk>;
        invalidationHash: $Long2ObjectOpenHashMap<$BlendChunk>;
        lock: $ReentrantLock;
        invalidationCounter: number;
        hash: $Long2ObjectLinkedOpenHashMap<$BlendChunk>;
        constructor(count: number);
    }
    export class $BlendChunk {
        removeFromLinkedList(): void;
        markAsInvalid(): void;
        getReferenceCount(): number;
        release(): number;
        acquire(): void;
        refCount: $AtomicInteger;
        data: number[];
        invalidationKey: number;
        invalidationCounter: number;
        key: number;
        constructor();
    }
}
