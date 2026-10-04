import { $Pair } from "@package/de/mrjulsen/mcdragonlib/util";
import { $IDelayedWaitCondition, $IDelayedWaitCondition$DelayedWaitConditionContext_ } from "@package/de/mrjulsen/crn/data/schedule/condition";
import { $PenaltyResult } from "@package/de/mrjulsen/crn/util";

declare module "@package/de/mrjulsen/crn/data/schedule" {
    export class $INavigationExtension {
    }
    export interface $INavigationExtension {
        isDelayedWaitConditionPending(): boolean;
        getPenaltiesByDirection(): ($PenaltyResult) | undefined;
        addDelayedWaitCondition(arg0: $Pair<$IDelayedWaitCondition, $IDelayedWaitCondition$DelayedWaitConditionContext_>): void;
        get delayedWaitConditionPending(): boolean;
        get penaltiesByDirection(): ($PenaltyResult) | undefined;
    }
}
