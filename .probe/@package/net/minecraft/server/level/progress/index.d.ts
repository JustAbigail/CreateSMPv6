import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ChunkStatus_, $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";

declare module "@package/net/minecraft/server/level/progress" {
    export class $ChunkProgressListener {
        static calculateDiameter(radius: number): number;
    }
    export interface $ChunkProgressListener {
        updateSpawnPos(center: $ChunkPos): void;
        onStatusChange(chunkPos: $ChunkPos, chunkStatus: $ChunkStatus_ | null): void;
        start(): void;
        stop(): void;
    }
    export class $ChunkProgressListenerFactory {
    }
    export interface $ChunkProgressListenerFactory {
        create(radius: number): $ChunkProgressListener;
    }
    /**
     * Values that may be interpreted as {@link $ChunkProgressListenerFactory}.
     */
    export type $ChunkProgressListenerFactory_ = ((arg0: number) => $ChunkProgressListener);
    export class $StoringChunkProgressListener implements $ChunkProgressListener {
        getDiameter(): number;
        getFullDiameter(): number;
        updateSpawnPos(center: $ChunkPos): void;
        onStatusChange(chunkPos: $ChunkPos, chunkStatus: $ChunkStatus_ | null): void;
        static createCompleted(): $StoringChunkProgressListener;
        getProgress(): number;
        start(): void;
        stop(): void;
        static create(radius: number): $StoringChunkProgressListener;
        getStatus(x: number, z: number): $ChunkStatus;
        static createFromGameruleRadius(radius: number): $StoringChunkProgressListener;
        get diameter(): number;
        get fullDiameter(): number;
        get progress(): number;
    }
}
