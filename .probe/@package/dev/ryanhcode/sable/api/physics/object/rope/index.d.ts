import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $SubLevelPhysicsSystem } from "@package/dev/ryanhcode/sable/sublevel/system";
import { $ArbitraryPhysicsObject } from "@package/dev/ryanhcode/sable/api/physics/object";
import { $ObjectList } from "@package/it/unimi/dsi/fastutil/objects";
import { $BoundingBox3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $SubLevelHoldingChunkMap } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $Enum } from "@package/java/lang";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Collection_, $List_ } from "@package/java/util";
import { $Vector3dc, $Vector3d } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/physics/object/rope" {
    export class $RopeHandle {
    }
    export interface $RopeHandle {
        setFirstSegmentLength(arg0: number): void;
        setAttachment(arg0: $RopeHandle$AttachmentPoint_, arg1: $Vector3dc, arg2: $ServerSubLevel): void;
        removeFirstPoint(): void;
        addPoint(arg0: $Vector3dc): void;
        readPose(arg0: $List_<$Vector3d>): void;
        wakeUp(): void;
        remove(): void;
    }
    export class $RopePhysicsObject implements $ArbitraryPhysicsObject {
        setFirstSegmentLength(arg0: number): void;
        setAttachment(arg0: $RopeHandle$AttachmentPoint_, arg1: $Vector3dc, arg2: $ServerSubLevel): void;
        removeFirstPoint(): void;
        addPoint(arg0: $Vector3dc): void;
        onAddition(arg0: $SubLevelPhysicsSystem): void;
        onRemoved(): void;
        updatePose(): void;
        onUnloaded(arg0: $SubLevelHoldingChunkMap, arg1: $ChunkPos): void;
        getCollisionRadius(): number;
        getPoints(): $ObjectList<$Vector3d>;
        wakeUp(): void;
        isActive(): boolean;
        getBoundingBox(arg0: $BoundingBox3d): void;
        constructor(arg0: $Collection_<$Vector3d>, arg1: number);
    }
    export class $RopeHandle$AttachmentPoint extends $Enum<$RopeHandle$AttachmentPoint> {
        static values(): $RopeHandle$AttachmentPoint[];
        static valueOf(arg0: string): $RopeHandle$AttachmentPoint;
        static START: $RopeHandle$AttachmentPoint;
        static END: $RopeHandle$AttachmentPoint;
    }
    /**
     * Values that may be interpreted as {@link $RopeHandle$AttachmentPoint}.
     */
    export type $RopeHandle$AttachmentPoint_ = "start" | "end";
}
