import { $BlockPos } from "@package/net/minecraft/core";
import { $AdvancementBehaviour } from "@package/com/simibubi/create/foundation/advancement";
import { $KineticEffectHandler } from "@package/com/simibubi/create/content/kinetics/base";
import { $VersionedInventoryTrackerBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/inventory";
import { $ValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/liukrast/deployer/lib/mixin/accessors" {
    export class $KineticBlockEntityAccessor {
    }
    export interface $KineticBlockEntityAccessor {
        getEffects(): $KineticEffectHandler;
        get effects(): $KineticEffectHandler;
    }
    /**
     * Values that may be interpreted as {@link $KineticBlockEntityAccessor}.
     */
    export type $KineticBlockEntityAccessor_ = (() => $KineticEffectHandler);
    export class $FactoryPanelBehaviourAccessor {
    }
    export interface $FactoryPanelBehaviourAccessor {
        deployer$tickRequests(): void;
        deployer$invokeNotifyRedstoneOutputs(): void;
    }
    export class $FilteringBehaviourAccessor {
    }
    export interface $FilteringBehaviourAccessor {
        setValueBoxTransform(arg0: $ValueBoxTransform): void;
        set valueBoxTransform(value: $ValueBoxTransform);
    }
    /**
     * Values that may be interpreted as {@link $FilteringBehaviourAccessor}.
     */
    export type $FilteringBehaviourAccessor_ = ((arg0: $ValueBoxTransform) => void);
    export class $PackagerBlockEntityAccessor {
    }
    export interface $PackagerBlockEntityAccessor {
        getAdvancement(): $AdvancementBehaviour;
        getInvVersionTracker(): $VersionedInventoryTrackerBehaviour;
        invokeGetLinkPos(): $BlockPos;
        invokeSupportsBlockEntity(arg0: $BlockEntity): boolean;
        get advancement(): $AdvancementBehaviour;
        get invVersionTracker(): $VersionedInventoryTrackerBehaviour;
    }
}
