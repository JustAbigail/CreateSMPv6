import { $Instant, $Duration, $Duration_ } from "@package/java/time";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Path_ } from "@package/java/nio/file";
import { $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $TickTimeStat, $TickTimeStat_, $FileIOStat$Summary, $GcHeapStat$Summary, $ThreadAllocationStat$Summary, $PacketIdentification_, $GcHeapStat$Summary_, $IoSummary$CountAndSize, $ChunkGenStat, $ThreadAllocationStat$Summary_, $CpuLoadStat, $ChunkIdentification_, $FileIOStat$Summary_, $ChunkGenStat_, $ChunkIdentification, $CpuLoadStat_, $TimedStatSummary, $PacketIdentification, $IoSummary } from "@package/net/minecraft/util/profiling/jfr/stats";

declare module "@package/net/minecraft/util/profiling/jfr/parse" {
    export class $JfrStatsParser {
        static parse(file: $Path_): $JfrStatsResult;
    }
    export class $JfrStatsResult extends $Record {
        tickTimes(): $List<$TickTimeStat>;
        recordingStarted(): $Instant;
        recordingDuration(): $Duration;
        cpuLoadStats(): $List<$CpuLoadStat>;
        threadAllocationSummary(): $ThreadAllocationStat$Summary;
        receivedPacketsSummary(): $IoSummary<$PacketIdentification>;
        sentPacketsSummary(): $IoSummary<$PacketIdentification>;
        chunkGenSummary(): $List<$Pair<$ChunkStatus, $TimedStatSummary<$ChunkGenStat>>>;
        recordingEnded(): $Instant;
        chunkGenStats(): $List<$ChunkGenStat>;
        readChunks(): $IoSummary<$ChunkIdentification>;
        writtenChunks(): $IoSummary<$ChunkIdentification>;
        fileWrites(): $FileIOStat$Summary;
        fileReads(): $FileIOStat$Summary;
        worldCreationDuration(): $Duration;
        asJson(): string;
        heapSummary(): $GcHeapStat$Summary;
        constructor(arg0: $Instant, arg1: $Instant, arg2: $Duration_, arg3: $Duration_ | null, arg4: $List_<$TickTimeStat_>, arg5: $List_<$CpuLoadStat_>, arg6: $GcHeapStat$Summary_, arg7: $ThreadAllocationStat$Summary_, arg8: $IoSummary<$PacketIdentification_>, arg9: $IoSummary<$PacketIdentification_>, arg10: $IoSummary<$ChunkIdentification_>, arg11: $IoSummary<$ChunkIdentification_>, arg12: $FileIOStat$Summary_, arg13: $FileIOStat$Summary_, arg14: $List_<$ChunkGenStat_>);
    }
    /**
     * Values that may be interpreted as {@link $JfrStatsResult}.
     */
    export type $JfrStatsResult_ = { writtenChunks?: $IoSummary<$ChunkIdentification_>, cpuLoadStats?: $List_<$CpuLoadStat_>, recordingEnded?: $Instant, chunkGenStats?: $List_<$ChunkGenStat_>, fileReads?: $FileIOStat$Summary_, recordingStarted?: $Instant, fileWrites?: $FileIOStat$Summary_, receivedPacketsSummary?: $IoSummary<$PacketIdentification_>, readChunks?: $IoSummary<$ChunkIdentification_>, heapSummary?: $GcHeapStat$Summary_, tickTimes?: $List_<$TickTimeStat_>, worldCreationDuration?: $Duration_, recordingDuration?: $Duration_, threadAllocationSummary?: $ThreadAllocationStat$Summary_, sentPacketsSummary?: $IoSummary<$PacketIdentification_>,  } | [writtenChunks?: $IoSummary<$ChunkIdentification_>, cpuLoadStats?: $List_<$CpuLoadStat_>, recordingEnded?: $Instant, chunkGenStats?: $List_<$ChunkGenStat_>, fileReads?: $FileIOStat$Summary_, recordingStarted?: $Instant, fileWrites?: $FileIOStat$Summary_, receivedPacketsSummary?: $IoSummary<$PacketIdentification_>, readChunks?: $IoSummary<$ChunkIdentification_>, heapSummary?: $GcHeapStat$Summary_, tickTimes?: $List_<$TickTimeStat_>, worldCreationDuration?: $Duration_, recordingDuration?: $Duration_, threadAllocationSummary?: $ThreadAllocationStat$Summary_, sentPacketsSummary?: $IoSummary<$PacketIdentification_>, ];
    export class $JfrStatsParser$MutableCountAndSize {
        toCountAndSize(): $IoSummary$CountAndSize;
        increment(increment: number): void;
        constructor();
    }
}
