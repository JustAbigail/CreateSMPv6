import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";

declare module "@package/net/minecraft/util/profiling/metrics/profiling" {
    export class $MetricsRecorder {
    }
    export interface $MetricsRecorder {
        end(): void;
        cancel(): void;
        getProfiler(): $ProfilerFiller;
        startTick(): void;
        endTick(): void;
        isRecording(): boolean;
    }
}
