import { $DeferMode } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $Enum } from "@package/java/lang";
export * as trigger from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger";
export * as data from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting" {
    export class $SortBehavior$SortMode extends $Enum<$SortBehavior$SortMode> {
        static values(): $SortBehavior$SortMode[];
        static valueOf(arg0: string): $SortBehavior$SortMode;
        static NONE: $SortBehavior$SortMode;
        static STATIC: $SortBehavior$SortMode;
        static DYNAMIC: $SortBehavior$SortMode;
    }
    /**
     * Values that may be interpreted as {@link $SortBehavior$SortMode}.
     */
    export type $SortBehavior$SortMode_ = "none" | "static" | "dynamic";
    export class $SortBehavior extends $Enum<$SortBehavior> {
        getSortMode(): $SortBehavior$SortMode;
        getPriorityMode(): $SortBehavior$PriorityMode;
        getDeferMode(): $DeferMode;
        static values(): $SortBehavior[];
        static valueOf(arg0: string): $SortBehavior;
        getShortName(): string;
        static DYNAMIC_DEFER_NEARBY_ONE_FRAME: $SortBehavior;
        static DYNAMIC_DEFER_ALL_ONE_FRAME: $SortBehavior;
        static DYNAMIC_DEFER_ALWAYS: $SortBehavior;
        static DYNAMIC_DEFER_NEARBY_ZERO_FRAMES: $SortBehavior;
        static OFF: $SortBehavior;
        static STATIC: $SortBehavior;
        static DYNAMIC_DEFER_ALL_ZERO_FRAMES: $SortBehavior;
        get sortMode(): $SortBehavior$SortMode;
        get priorityMode(): $SortBehavior$PriorityMode;
        get deferMode(): $DeferMode;
        get shortName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SortBehavior}.
     */
    export type $SortBehavior_ = "off" | "static" | "dynamic_defer_always" | "dynamic_defer_nearby_one_frame" | "dynamic_defer_nearby_zero_frames" | "dynamic_defer_all_one_frame" | "dynamic_defer_all_zero_frames";
    export class $SortBehavior$PriorityMode extends $Enum<$SortBehavior$PriorityMode> {
        static values(): $SortBehavior$PriorityMode[];
        static valueOf(arg0: string): $SortBehavior$PriorityMode;
        static ALL: $SortBehavior$PriorityMode;
        static NEARBY: $SortBehavior$PriorityMode;
        static NONE: $SortBehavior$PriorityMode;
    }
    /**
     * Values that may be interpreted as {@link $SortBehavior$PriorityMode}.
     */
    export type $SortBehavior$PriorityMode_ = "none" | "nearby" | "all";
}
