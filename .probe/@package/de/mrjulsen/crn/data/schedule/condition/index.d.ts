import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $ScheduleEntry } from "@package/com/simibubi/create/content/trains/schedule";
import { $Record } from "@package/java/lang";
import { $GlobalStation } from "@package/com/simibubi/create/content/trains/station";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";

declare module "@package/de/mrjulsen/crn/data/schedule/condition" {
    export class $IDelayedWaitCondition {
        static NBT_DELAY: string;
    }
    export interface $IDelayedWaitCondition {
        runDelayed(arg0: $IDelayedWaitCondition$DelayedWaitConditionContext_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IDelayedWaitCondition}.
     */
    export type $IDelayedWaitCondition_ = ((arg0: $IDelayedWaitCondition$DelayedWaitConditionContext) => boolean);
    export class $IDelayedWaitCondition$DelayedWaitConditionContext extends $Record {
        station(): $GlobalStation;
        scheduleEntry(): $ScheduleEntry;
        train(): $Train;
        level(): $Level;
        nbt(): $CompoundTag;
        constructor(level: $Level_, train: $Train, nbt: $CompoundTag_, station: $GlobalStation, scheduleEntry: $ScheduleEntry);
    }
    /**
     * Values that may be interpreted as {@link $IDelayedWaitCondition$DelayedWaitConditionContext}.
     */
    export type $IDelayedWaitCondition$DelayedWaitConditionContext_ = { nbt?: $CompoundTag_, level?: $Level_, scheduleEntry?: $ScheduleEntry, station?: $GlobalStation, train?: $Train,  } | [nbt?: $CompoundTag_, level?: $Level_, scheduleEntry?: $ScheduleEntry, station?: $GlobalStation, train?: $Train, ];
}
