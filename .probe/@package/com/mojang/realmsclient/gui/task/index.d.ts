import { $Duration_ } from "@package/java/time";
import { $Consumer_ } from "@package/java/util/function";
import { $Callable_, $TimeUnit_, $Executor_ } from "@package/java/util/concurrent";
import { $TimeSource_ } from "@package/net/minecraft/util";

declare module "@package/com/mojang/realmsclient/gui/task" {
    export class $DataFetcher$Subscription {
        forceUpdate(): void;
        tick(): void;
        reset(): void;
        subscribe<T>(task: $DataFetcher$Task<T>, output: $Consumer_<T>): void;
        constructor(arg0: $DataFetcher);
    }
    export class $RepeatedDelayStrategy {
        static exponentialBackoff(maxFailureDelay: number): $RepeatedDelayStrategy;
        static CONSTANT: $RepeatedDelayStrategy;
    }
    export interface $RepeatedDelayStrategy {
        delayCyclesAfterSuccess(): number;
        delayCyclesAfterFailure(): number;
    }
    export class $DataFetcher {
        createTask<T>(id: string, updater: $Callable_<T>, period: $Duration_, repeatStrategy: $RepeatedDelayStrategy): $DataFetcher$Task<T>;
        createSubscription(): $DataFetcher$Subscription;
        constructor(executor: $Executor_, resolution: $TimeUnit_, timeSource: $TimeSource_);
    }
    export class $DataFetcher$Task<T> {
        reset(): void;
    }
}
