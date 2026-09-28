import { $CompositeData } from "@package/javax/management/openmbean";
import { $Thread$State, $StackTraceElement } from "@package/java/lang";

declare module "@package/java/lang/management" {
    export class $MonitorInfo extends $LockInfo {
        getLockedStackDepth(): number;
        getLockedStackFrame(): $StackTraceElement;
        static from(arg0: $CompositeData): $MonitorInfo;
        constructor(arg0: string, arg1: number, arg2: number, arg3: $StackTraceElement);
    }
    export class $LockInfo {
        getIdentityHashCode(): number;
        static from(arg0: $CompositeData): $LockInfo;
        getClassName(): string;
        constructor(arg0: string, arg1: number);
    }
    export class $ThreadInfo {
        getThreadState(): $Thread$State;
        getLockName(): string;
        getLockOwnerName(): string;
        getLockOwnerId(): number;
        isSuspended(): boolean;
        isInNative(): boolean;
        getLockInfo(): $LockInfo;
        getLockedSynchronizers(): $LockInfo[];
        getBlockedTime(): number;
        getBlockedCount(): number;
        getWaitedTime(): number;
        getWaitedCount(): number;
        getLockedMonitors(): $MonitorInfo[];
        getStackTrace(): $StackTraceElement[];
        static from(arg0: $CompositeData): $ThreadInfo;
        getPriority(): number;
        isDaemon(): boolean;
        getThreadId(): number;
        getThreadName(): string;
    }
}
