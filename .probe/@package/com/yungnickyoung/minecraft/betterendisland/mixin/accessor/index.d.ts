import { $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $ServerBossEvent } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";

declare module "@package/com/yungnickyoung/minecraft/betterendisland/mixin/accessor" {
    export class $EndDragonFightAccessor {
    }
    export interface $EndDragonFightAccessor {
        getPortalLocation(): $BlockPos;
        setPortalLocation(arg0: $BlockPos_): void;
        invokeCreateNewDragon(): $EnderDragon;
        getPreviouslyKilled(): boolean;
        getDragonEvent(): $ServerBossEvent;
        getGateways(): $ObjectArrayList<number>;
        setDragonKilled(arg0: boolean): void;
        get previouslyKilled(): boolean;
        get dragonEvent(): $ServerBossEvent;
        get gateways(): $ObjectArrayList<number>;
        set dragonKilled(value: boolean);
    }
}
