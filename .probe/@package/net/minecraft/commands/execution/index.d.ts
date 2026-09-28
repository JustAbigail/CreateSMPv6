import { $CommandResultCallback_, $ExecutionCommandSource, $CommandResultCallback } from "@package/net/minecraft/commands";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $AutoCloseable, $Record } from "@package/java/lang";
import { $InstantiatedFunction } from "@package/net/minecraft/commands/functions";
import { $ContextChain } from "@package/com/mojang/brigadier/context";

declare module "@package/net/minecraft/commands/execution" {
    export class $ExecutionContext<T> implements $AutoCloseable {
        frameControlForDepth(depth: number): $Frame$FrameControl;
        discardAtDepthOrHigher(depth: number): void;
        static queueInitialFunctionCall<T extends $ExecutionCommandSource<T>>(executionContext: $ExecutionContext<T>, _function: $InstantiatedFunction<T>, source: T, returnValueConsumer: $CommandResultCallback_): void;
        tracer(): $TraceCallbacks;
        tracer(tracer: $TraceCallbacks | null): void;
        queueNext(entry: $CommandQueueEntry_<T>): void;
        runCommandQueue(): void;
        static queueInitialCommandExecution<T extends $ExecutionCommandSource<T>>(executionContext: $ExecutionContext<T>, commandInput: string, command: $ContextChain<T>, source: T, returnValueConsumer: $CommandResultCallback_): void;
        forkLimit(): number;
        incrementCost(): void;
        close(): void;
        profiler(): $ProfilerFiller;
        constructor(commandLimit: number, forkLimit: number, profiler: $ProfilerFiller);
    }
    export class $Frame$FrameControl {
    }
    export interface $Frame$FrameControl {
        discard(): void;
    }
    /**
     * Values that may be interpreted as {@link $Frame$FrameControl}.
     */
    export type $Frame$FrameControl_ = (() => void);
    export class $TraceCallbacks {
    }
    export interface $TraceCallbacks extends $AutoCloseable {
        onCommand(depth: number, command: string): void;
        onReturn(depth: number, command: string, returnValue: number): void;
        onCall(depth: number, _function: $ResourceLocation_, commands: number): void;
        close(): void;
        onError(errorMessage: string): void;
    }
    export class $UnboundEntryAction<T> {
    }
    export interface $UnboundEntryAction<T> {
        execute(source: T, executionContext: $ExecutionContext<T>, frame: $Frame_): void;
        bind(source: T): $EntryAction<T>;
    }
    /**
     * Values that may be interpreted as {@link $UnboundEntryAction}.
     */
    export type $UnboundEntryAction_<T> = ((arg0: T, arg1: $ExecutionContext<T>, arg2: $Frame) => void);
    export class $EntryAction<T> {
    }
    export interface $EntryAction<T> {
        execute(context: $ExecutionContext<T>, frame: $Frame_): void;
    }
    /**
     * Values that may be interpreted as {@link $EntryAction}.
     */
    export type $EntryAction_<T> = ((arg0: $ExecutionContext<T>, arg1: $Frame) => void);
    export class $Frame extends $Record {
        frameControl(): $Frame$FrameControl;
        returnSuccess(result: number): void;
        returnFailure(): void;
        returnValueConsumer(): $CommandResultCallback;
        depth(): number;
        discard(): void;
        constructor(arg0: number, arg1: $CommandResultCallback_, arg2: $Frame$FrameControl_);
    }
    /**
     * Values that may be interpreted as {@link $Frame}.
     */
    export type $Frame_ = { returnValueConsumer?: $CommandResultCallback_, depth?: number, frameControl?: $Frame$FrameControl_,  } | [returnValueConsumer?: $CommandResultCallback_, depth?: number, frameControl?: $Frame$FrameControl_, ];
    export class $CommandQueueEntry<T> extends $Record {
        execute(context: $ExecutionContext<T>): void;
        action(): $EntryAction<T>;
        frame(): $Frame;
        constructor(arg0: $Frame_, arg1: $EntryAction_<T>);
    }
    /**
     * Values that may be interpreted as {@link $CommandQueueEntry}.
     */
    export type $CommandQueueEntry_<T> = { frame?: $Frame_, action?: $EntryAction_<any>,  } | [frame?: $Frame_, action?: $EntryAction_<any>, ];
}
