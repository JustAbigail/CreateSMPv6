import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_ } from "@package/java/util/function";
import { $CancellationToken } from "@package/net/caffeinemc/mods/sodium/client/util/task";
import { $BuilderTaskOutput, $ChunkBuildContext } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile";
import { $JobEffort_, $JobEffort } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation";
import { $ChunkVertexType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex/format";
import { $Throwable } from "@package/java/lang";
import { $ChunkBuilderTask } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/executor" {
    export class $ChunkJob {
    }
    export interface $ChunkJob extends $CancellationToken {
        getEstimatedDuration(): number;
        getEstimatedUploadDuration(): number;
        getEstimatedSize(): number;
        isBlocking(): boolean;
        execute(arg0: $ChunkBuildContext): void;
        isStarted(): boolean;
        get estimatedDuration(): number;
        get estimatedUploadDuration(): number;
        get estimatedSize(): number;
        get blocking(): boolean;
        get started(): boolean;
    }
    export class $ChunkJobTyped<TASK extends $ChunkBuilderTask<OUTPUT>, OUTPUT extends $BuilderTaskOutput> implements $ChunkJob {
        setCancelled(): void;
        getEstimatedDuration(): number;
        getEstimatedUploadDuration(): number;
        getEstimatedSize(): number;
        isBlocking(): boolean;
        isCancelled(): boolean;
        execute(arg0: $ChunkBuildContext): void;
        isStarted(): boolean;
        get estimatedDuration(): number;
        get estimatedUploadDuration(): number;
        get estimatedSize(): number;
        get blocking(): boolean;
        get started(): boolean;
    }
    export class $ChunkBuilder {
        scheduleTask<TASK extends $ChunkBuilderTask<OUTPUT>, OUTPUT extends $BuilderTaskOutput>(arg0: TASK, arg1: boolean, arg2: $Consumer_<$ChunkJobResult<OUTPUT>>, arg3: boolean): $ChunkJobTyped<TASK, OUTPUT>;
        isBuildQueueEmpty(): boolean;
        tryStealTask(arg0: $ChunkJob): void;
        getTotalRemainingDuration(arg0: number): number;
        getScheduledJobCount(): number;
        getBusyThreadCount(): number;
        getBusyFraction(arg0: number): number;
        getTotalThreadCount(): number;
        shutdown(): void;
        constructor(arg0: $ClientLevel, arg1: $ChunkVertexType);
        get buildQueueEmpty(): boolean;
        get scheduledJobCount(): number;
        get busyThreadCount(): number;
        get totalThreadCount(): number;
    }
    export class $ChunkJobResult<OUTPUT> {
        static successfully<OUTPUT>(arg0: OUTPUT): $ChunkJobResult<OUTPUT>;
        static successfully<OUTPUT>(arg0: OUTPUT, arg1: $JobEffort_): $ChunkJobResult<OUTPUT>;
        getJobEffort(): $JobEffort;
        static exceptionally<OUTPUT>(arg0: $Throwable): $ChunkJobResult<OUTPUT>;
        unwrap(): OUTPUT;
        get jobEffort(): $JobEffort;
    }
}
