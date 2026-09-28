import { $ImmutableMap } from "@package/com/google/common/collect";

declare module "@package/de/mrjulsen/crn/util" {
    export class $PenaltyResult {
        getPenalties(): $ImmutableMap<$PenaltyResult$Type, number>;
        getPenaltyValue(): number;
        add(type: $PenaltyResult$Type): void;
        constructor();
        constructor(other: $PenaltyResult);
    }
}
