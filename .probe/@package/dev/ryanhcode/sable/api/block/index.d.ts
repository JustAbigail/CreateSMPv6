import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RigidBodyHandle } from "@package/dev/ryanhcode/sable/api/physics/handle";
import { $Iterable, $Record } from "@package/java/lang";
import { $SubLevel, $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Vector3d } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/block" {
    export class $BlockEntitySubLevelReactionWheel {
    }
    export interface $BlockEntitySubLevelReactionWheel {
        sable$getAngularVelocity(arg0: $Vector3d): void;
        getBlockState(): $BlockState;
    }
    export class $BlockSubLevelLiftProvider$LiftProviderContext extends $Record {
        state(): $BlockState;
        pos(): $BlockPos;
        dir(): $Vec3;
        constructor(pos: $BlockPos_, state: $BlockState_, dir: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $BlockSubLevelLiftProvider$LiftProviderContext}.
     */
    export type $BlockSubLevelLiftProvider$LiftProviderContext_ = { state?: $BlockState_, dir?: $Vec3_, pos?: $BlockPos_,  } | [state?: $BlockState_, dir?: $Vec3_, pos?: $BlockPos_, ];
    export class $BlockEntitySubLevelActor {
    }
    export interface $BlockEntitySubLevelActor {
        sable$physicsTick(arg0: $ServerSubLevel, arg1: $RigidBodyHandle, arg2: number): void;
        sable$getConnectionDependencies(): $Iterable<$SubLevel>;
        sable$tick(arg0: $ServerSubLevel): void;
        sable$getLoadingDependencies(): $Iterable<$SubLevel>;
    }
}
