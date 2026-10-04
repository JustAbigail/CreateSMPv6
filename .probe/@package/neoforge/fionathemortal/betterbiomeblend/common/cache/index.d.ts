import { $Long2ObjectLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $StampedLock } from "@package/java/util/concurrent/locks";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";

declare module "@package/neoforge/fionathemortal/betterbiomeblend/common/cache" {
    export class $Slice {
        markAsInvalid(): void;
        getRefCount(): number;
        invalidateData(): void;
        release(): void;
        isInvalid(): boolean;
        acquire(): void;
        refCount: $AtomicInteger;
        salt: number;
        size: number;
        key: number;
        constructor(size: number, salt: number);
        get invalid(): boolean;
    }
    export class $ColorCache extends $SliceCache<$ColorSlice> {
        newSlice(size: number, salt: number): $ColorSlice;
        sliceSize: number;
        lockList: $StampedLock[];
        sliceCount: number;
        static BUCKET_COUNT: number;
        hashList: $Long2ObjectLinkedOpenHashMap<$ColorSlice>[];
        constructor(count: number);
    }
    export class $SliceCache<T extends $Slice> {
        reallocSlices(sliceSize: number): void;
        releaseSlice(slice: T): void;
        getOrInitSlice(sliceSize: number, sliceX: number, sliceY: number, sliceZ: number, colorType: number, tryLock: boolean): T;
        newSlice(arg0: number, arg1: number): T;
        invalidateAll(blendRadius: number): void;
        sliceSize: number;
        lockList: $StampedLock[];
        sliceCount: number;
        static BUCKET_COUNT: number;
        hashList: $Long2ObjectLinkedOpenHashMap<T>[];
        constructor(count: number);
    }
    export class $ColorSlice extends $Slice {
        refCount: $AtomicInteger;
        salt: number;
        data: number[];
        size: number;
        key: number;
        constructor(size: number, salt: number);
    }
}
