import { $Serializable } from "@package/java/io";
import { $TimeUnit_ } from "@package/java/util/concurrent";
import { $Thread } from "@package/java/lang";
import { $Date } from "@package/java/util";

declare module "@package/java/util/concurrent/locks" {
    export class $ReadWriteLock {
    }
    export interface $ReadWriteLock {
        readLock(): $Lock;
        writeLock(): $Lock;
    }
    export class $ReentrantLock implements $Lock, $Serializable {
        lock(): void;
        unlock(): void;
        newCondition(): $Condition;
        lockInterruptibly(): void;
        tryLock(): boolean;
        tryLock(arg0: number, arg1: $TimeUnit_): boolean;
        getHoldCount(): number;
        isLocked(): boolean;
        hasQueuedThreads(): boolean;
        getQueueLength(): number;
        hasWaiters(arg0: $Condition): boolean;
        getWaitQueueLength(arg0: $Condition): number;
        isHeldByCurrentThread(): boolean;
        isFair(): boolean;
        hasQueuedThread(arg0: $Thread): boolean;
        constructor();
        constructor(arg0: boolean);
    }
    export class $StampedLock implements $Serializable {
        writeLockInterruptibly(): number;
        readLockInterruptibly(): number;
        tryConvertToReadLock(arg0: number): number;
        tryConvertToOptimisticRead(arg0: number): number;
        tryUnlockWrite(): boolean;
        tryUnlockRead(): boolean;
        isReadLocked(): boolean;
        static isWriteLockStamp(arg0: number): boolean;
        static isReadLockStamp(arg0: number): boolean;
        static isLockStamp(arg0: number): boolean;
        static isOptimisticReadStamp(arg0: number): boolean;
        asReadLock(): $Lock;
        asWriteLock(): $Lock;
        asReadWriteLock(): $ReadWriteLock;
        getReadLockCount(): number;
        isWriteLocked(): boolean;
        tryWriteLock(arg0: number, arg1: $TimeUnit_): number;
        tryWriteLock(): number;
        tryReadLock(): number;
        tryReadLock(arg0: number, arg1: $TimeUnit_): number;
        readLock(): number;
        writeLock(): number;
        validate(arg0: number): boolean;
        unlock(arg0: number): void;
        unlockWrite(arg0: number): void;
        unlockRead(arg0: number): void;
        tryOptimisticRead(): number;
        tryConvertToWriteLock(arg0: number): number;
        constructor();
    }
    export class $Condition {
    }
    export interface $Condition {
        await(arg0: number, arg1: $TimeUnit_): boolean;
        await(): void;
        signal(): void;
        signalAll(): void;
        awaitUninterruptibly(): void;
        awaitNanos(arg0: number): number;
        awaitUntil(arg0: $Date): boolean;
    }
    export class $Lock {
    }
    export interface $Lock {
        lock(): void;
        unlock(): void;
        newCondition(): $Condition;
        lockInterruptibly(): void;
        tryLock(): boolean;
        tryLock(arg0: number, arg1: $TimeUnit_): boolean;
    }
}
