import { $Month_, $LocalDateTime, $ZoneOffset, $DayOfWeek, $Month, $LocalTime, $DayOfWeek_, $Duration, $Instant } from "@package/java/time";
import { $Serializable } from "@package/java/io";
import { $List, $List_ } from "@package/java/util";
import { $Comparable } from "@package/java/lang";

declare module "@package/java/time/zone" {
    export class $ZoneOffsetTransition implements $Comparable<$ZoneOffsetTransition>, $Serializable {
        isGap(): boolean;
        getDateTimeAfter(): $LocalDateTime;
        getDuration(): $Duration;
        getInstant(): $Instant;
        isOverlap(): boolean;
        getOffsetAfter(): $ZoneOffset;
        getDateTimeBefore(): $LocalDateTime;
        getOffsetBefore(): $ZoneOffset;
        isValidOffset(arg0: $ZoneOffset): boolean;
        compareTo(arg0: $ZoneOffsetTransition): number;
        static of(arg0: $LocalDateTime, arg1: $ZoneOffset, arg2: $ZoneOffset): $ZoneOffsetTransition;
        toEpochSecond(): number;
    }
    export class $ZoneOffsetTransitionRule implements $Serializable {
        getStandardOffset(): $ZoneOffset;
        getDayOfWeek(): $DayOfWeek;
        getOffsetAfter(): $ZoneOffset;
        getOffsetBefore(): $ZoneOffset;
        createTransition(arg0: number): $ZoneOffsetTransition;
        getDayOfMonthIndicator(): number;
        getLocalTime(): $LocalTime;
        isMidnightEndOfDay(): boolean;
        getTimeDefinition(): $ZoneOffsetTransitionRule$TimeDefinition;
        static of(arg0: $Month_, arg1: number, arg2: $DayOfWeek_, arg3: $LocalTime, arg4: boolean, arg5: $ZoneOffsetTransitionRule$TimeDefinition, arg6: $ZoneOffset, arg7: $ZoneOffset, arg8: $ZoneOffset): $ZoneOffsetTransitionRule;
        getMonth(): $Month;
    }
    export class $ZoneRules implements $Serializable {
        getTransition(arg0: $LocalDateTime): $ZoneOffsetTransition;
        isDaylightSavings(arg0: $Instant): boolean;
        getStandardOffset(arg0: $Instant): $ZoneOffset;
        isFixedOffset(): boolean;
        getValidOffsets(arg0: $LocalDateTime): $List<$ZoneOffset>;
        getDaylightSavings(arg0: $Instant): $Duration;
        isValidOffset(arg0: $LocalDateTime, arg1: $ZoneOffset): boolean;
        nextTransition(arg0: $Instant): $ZoneOffsetTransition;
        previousTransition(arg0: $Instant): $ZoneOffsetTransition;
        getTransitions(): $List<$ZoneOffsetTransition>;
        getTransitionRules(): $List<$ZoneOffsetTransitionRule>;
        static of(arg0: $ZoneOffset, arg1: $ZoneOffset, arg2: $List_<$ZoneOffsetTransition>, arg3: $List_<$ZoneOffsetTransition>, arg4: $List_<$ZoneOffsetTransitionRule>): $ZoneRules;
        static of(arg0: $ZoneOffset): $ZoneRules;
        getOffset(arg0: $LocalDateTime): $ZoneOffset;
        getOffset(arg0: $Instant): $ZoneOffset;
    }
}
