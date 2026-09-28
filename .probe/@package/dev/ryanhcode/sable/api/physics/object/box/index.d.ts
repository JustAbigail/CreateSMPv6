import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $MassData } from "@package/dev/ryanhcode/sable/api/physics/mass";
import { $SubLevelPhysicsSystem } from "@package/dev/ryanhcode/sable/sublevel/system";
import { $ArbitraryPhysicsObject } from "@package/dev/ryanhcode/sable/api/physics/object";
import { $BoundingBox3d, $Pose3dc, $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $SubLevelHoldingChunkMap } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $PhysicsPipelineBody } from "@package/dev/ryanhcode/sable/api/physics";
import { $Vector3dc } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/physics/object/box" {
    export class $BoxHandle {
    }
    export interface $BoxHandle {
        getRuntimeId(): number;
        readPose(arg0: $Pose3d): void;
        wakeUp(): void;
        remove(): void;
    }
    export class $BoxPhysicsObject implements $ArbitraryPhysicsObject, $PhysicsPipelineBody {
        getHalfExtents(): $Vector3dc;
        getPose(): $Pose3dc;
        getRuntimeId(): number;
        getMass(): number;
        onAddition(arg0: $SubLevelPhysicsSystem): void;
        onRemoved(): void;
        updatePose(): void;
        onUnloaded(arg0: $SubLevelHoldingChunkMap, arg1: $ChunkPos): void;
        wakeUp(): void;
        isActive(): boolean;
        isRemoved(): boolean;
        getBoundingBox(arg0: $BoundingBox3d): void;
        getMassTracker(): $MassData;
        constructor(arg0: $Pose3dc, arg1: $Vector3dc, arg2: number);
    }
}
