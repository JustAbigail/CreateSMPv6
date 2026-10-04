import { $ChunkTaskPriorityQueueSorter$Message, $ThreadedLevelLightEngine, $ServerLevel, $GenerationChunkHolder } from "@package/net/minecraft/server/level";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ProcessorHandle } from "@package/net/minecraft/util/thread";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Runnable_, $Enum, $Record, $Runnable } from "@package/java/lang";
import { $List, $EnumSet } from "@package/java/util";
import { $Heightmap$Types, $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $StaticCache2D } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/chunk/status" {
    export interface $ChunkStatus extends RegistryMarked<RegistryTypes.ChunkStatusTag, RegistryTypes.ChunkStatus> {}
    export class $ChunkStatusTask {
    }
    export interface $ChunkStatusTask {
        doWork(worldGenContext: $WorldGenContext_, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkStatusTask}.
     */
    export type $ChunkStatusTask_ = ((arg0: $WorldGenContext, arg1: $ChunkStep, arg2: $StaticCache2D<$GenerationChunkHolder>, arg3: $ChunkAccess) => $CompletableFuture<$ChunkAccess>);
    export class $WorldGenContext extends $Record {
        mainThreadMailBox(): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable>>;
        structureManager(): $StructureTemplateManager;
        level(): $ServerLevel;
        generator(): $ChunkGenerator;
        lightEngine(): $ThreadedLevelLightEngine;
        constructor(arg0: $ServerLevel, arg1: $ChunkGenerator, arg2: $StructureTemplateManager, arg3: $ThreadedLevelLightEngine, arg4: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>);
    }
    /**
     * Values that may be interpreted as {@link $WorldGenContext}.
     */
    export type $WorldGenContext_ = { level?: $ServerLevel, generator?: $ChunkGenerator, lightEngine?: $ThreadedLevelLightEngine, mainThreadMailBox?: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>, structureManager?: $StructureTemplateManager,  } | [level?: $ServerLevel, generator?: $ChunkGenerator, lightEngine?: $ThreadedLevelLightEngine, mainThreadMailBox?: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>, structureManager?: $StructureTemplateManager, ];
    export class $ChunkType extends $Enum<$ChunkType> {
        static values(): $ChunkType[];
        static valueOf(arg0: string): $ChunkType;
        static LEVELCHUNK: $ChunkType;
        static PROTOCHUNK: $ChunkType;
    }
    /**
     * Values that may be interpreted as {@link $ChunkType}.
     */
    export type $ChunkType_ = "protochunk" | "levelchunk";
    export class $ChunkDependencies {
        getRadiusOf(status: $ChunkStatus_): number;
        getRadius(): number;
        size(): number;
        get(radius: number): $ChunkStatus;
        asList(): $ImmutableList<$ChunkStatus>;
        constructor(dependencyByRadius: $ImmutableList<$ChunkStatus_>);
        get radius(): number;
    }
    export class $ChunkStep extends $Record {
        directDependencies(): $ChunkDependencies;
        accumulatedDependencies(): $ChunkDependencies;
        getAccumulatedRadiusOf(status: $ChunkStatus_): number;
        blockStateWriteRadius(): number;
        targetStatus(): $ChunkStatus;
        apply(worldGenContext: $WorldGenContext_, cache: $StaticCache2D<$GenerationChunkHolder>, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        task(): $ChunkStatusTask;
        constructor(arg0: $ChunkStatus_, arg1: $ChunkDependencies, arg2: $ChunkDependencies, arg3: number, arg4: $ChunkStatusTask_);
    }
    /**
     * Values that may be interpreted as {@link $ChunkStep}.
     */
    export type $ChunkStep_ = { targetStatus?: $ChunkStatus_, task?: $ChunkStatusTask_, blockStateWriteRadius?: number, accumulatedDependencies?: $ChunkDependencies, directDependencies?: $ChunkDependencies,  } | [targetStatus?: $ChunkStatus_, task?: $ChunkStatusTask_, blockStateWriteRadius?: number, accumulatedDependencies?: $ChunkDependencies, directDependencies?: $ChunkDependencies, ];
    export class $ChunkStatus {
        heightmapsAfter(): $EnumSet<$Heightmap$Types>;
        static getStatusList(): $List<$ChunkStatus>;
        getChunkType(): $ChunkType;
        isOrBefore(chunkStatus: $ChunkStatus_): boolean;
        getChunkSaveHeightmaps(): $EnumSet<$Heightmap$Types>;
        isAfter(chunkStatus: $ChunkStatus_): boolean;
        isBefore(chunkStatus: $ChunkStatus_): boolean;
        getName(): string;
        static max(first: $ChunkStatus_, second: $ChunkStatus_): $ChunkStatus;
        getParent(): $ChunkStatus;
        getIndex(): number;
        static byName(name: string): $ChunkStatus;
        isOrAfter(chunkStatus: $ChunkStatus_): boolean;
        static LIGHT: $ChunkStatus;
        static NOISE: $ChunkStatus;
        static MAX_STRUCTURE_DISTANCE: number;
        static SPAWN: $ChunkStatus;
        static FULL: $ChunkStatus;
        static FEATURES: $ChunkStatus;
        static STRUCTURE_STARTS: $ChunkStatus;
        static STRUCTURE_REFERENCES: $ChunkStatus;
        static FINAL_HEIGHTMAPS: $EnumSet<$Heightmap$Types>;
        static SURFACE: $ChunkStatus;
        static INITIALIZE_LIGHT: $ChunkStatus;
        static BIOMES: $ChunkStatus;
        static CARVERS: $ChunkStatus;
        static EMPTY: $ChunkStatus;
        constructor(parent: $ChunkStatus_ | null, heightmapsAfter: $EnumSet<$Heightmap$Types_>, chunkType: $ChunkType_);
        static get statusList(): $List<$ChunkStatus>;
        get chunkType(): $ChunkType;
        get chunkSaveHeightmaps(): $EnumSet<$Heightmap$Types>;
        get name(): string;
        get parent(): $ChunkStatus;
        get index(): number;
    }
    /**
     * Values that may be interpreted as {@link $ChunkStatus}.
     */
    export type $ChunkStatus_ = RegistryTypes.ChunkStatus;
}
