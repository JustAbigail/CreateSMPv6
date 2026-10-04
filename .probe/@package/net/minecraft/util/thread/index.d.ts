import { $Supplier_, $Function_, $BooleanSupplier_, $Consumer_ } from "@package/java/util/function";
import { $MetricSampler, $ProfilerMeasured } from "@package/net/minecraft/util/profiling/metrics";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor_, $Executor } from "@package/java/util/concurrent";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AutoCloseable, $Thread, $Runnable_, $Runnable, $Exception } from "@package/java/lang";
import { $Queue, $List } from "@package/java/util";

declare module "@package/net/minecraft/util/thread" {
    export class $ProcessorHandle<Msg> {
        static of<Msg>(name: string, task: $Consumer_<Msg>): $ProcessorHandle<Msg>;
    }
    export interface $ProcessorHandle<Msg> extends $AutoCloseable {
        name(): string;
        close(): void;
        ask<Source>(task: $Function_<$ProcessorHandle<Source>, Msg>): $CompletableFuture<Source>;
        askEither<Source>(task: $Function_<$ProcessorHandle<$Either<Source, $Exception>>, Msg>): $CompletableFuture<Source>;
        tell(task: Msg): void;
    }
    export class $ReentrantBlockableEventLoop<R extends $Runnable> extends $BlockableEventLoop<R> {
        runningTask(): boolean;
        pendingRunnables: $Queue<R>;
        constructor(name: string);
    }
    export class $BlockableEventLoop<R extends $Runnable> implements $ProfilerMeasured, $ProcessorHandle<R>, $Executor {
        pollTask(): boolean;
        submit<V>(supplier: $Supplier_<V>): $CompletableFuture<V>;
        submit(task: $Runnable_): $CompletableFuture<void>;
        name(): string;
        execute(task: $Runnable_): void;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        managedBlock(isDone: $BooleanSupplier_): void;
        executeBlocking(task: $Runnable_): void;
        executeIfPossible(task: $Runnable_): void;
        waitForTasks(): void;
        profiledMetrics(): $List<$MetricSampler>;
        handler$jco000$essential$runEssentialTasks(callbackInfo: $CallbackInfo): void;
        isSameThread(): boolean;
        getPendingTasksCount(): number;
        submitAsync(task: $Runnable_): $CompletableFuture<void>;
        scheduleExecutables(): boolean;
        doRunTask(task: R): void;
        dropAllTasks(): void;
        getRunningThread(): $Thread;
        wrapRunnable(runnable: $Runnable_): R;
        shouldRun(runnable: R): boolean;
        tell(task: R): void;
        runAllTasks(): void;
        close(): void;
        ask<Source>(arg0: $Function_<$ProcessorHandle<Source>, R>): $CompletableFuture<Source>;
        askEither<Source>(arg0: $Function_<$ProcessorHandle<$Either<Source, $Exception>>, R>): $CompletableFuture<Source>;
        pendingRunnables: $Queue<R>;
        constructor(name: string);
        get sameThread(): boolean;
        get pendingTasksCount(): number;
        get runningThread(): $Thread;
    }
    export class $ProcessorMailbox<T> implements $ProfilerMeasured, $ProcessorHandle<T>, $AutoCloseable, $Runnable {
        hasWork(): boolean;
        runAll(): void;
        name(): string;
        run(): void;
        size(): number;
        close(): void;
        static create(dispatcher: $Executor_, name: string): $ProcessorMailbox<$Runnable>;
        profiledMetrics(): $List<$MetricSampler>;
        tell(task: T): void;
        ask<Source>(arg0: $Function_<$ProcessorHandle<Source>, T>): $CompletableFuture<Source>;
        askEither<Source>(arg0: $Function_<$ProcessorHandle<$Either<Source, $Exception>>, T>): $CompletableFuture<Source>;
        constructor(queue: $StrictQueue<T, $Runnable_>, dispatcher: $Executor_, name: string);
    }
    export class $StrictQueue<T, F> {
    }
    export interface $StrictQueue<T, F> {
        push(value: T): boolean;
        pop(): F;
        size(): number;
        isEmpty(): boolean;
        get empty(): boolean;
    }
}
