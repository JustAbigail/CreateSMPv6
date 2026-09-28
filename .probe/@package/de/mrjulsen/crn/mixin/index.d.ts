import { $BlockPos } from "@package/net/minecraft/core";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $ClientContraption } from "@package/com/simibubi/create/content/contraptions/render";
import { $ModularGuiLine } from "@package/com/simibubi/create/foundation/gui";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Map, $List } from "@package/java/util";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";

declare module "@package/de/mrjulsen/crn/mixin" {
    export class $ContraptionAccessor {
    }
    export interface $ContraptionAccessor {
        crn$clientContraption(): $AtomicReference<$ClientContraption>;
        crn$updateTags(): $Map<$BlockPos, $CompoundTag>;
    }
    export class $TrainStatusAccessor {
    }
    export interface $TrainStatusAccessor {
        crn$track(): boolean;
        crn$navigation(): boolean;
        crn$conductor(): boolean;
    }
    export class $ScheduleRuntimeAccessor {
    }
    export interface $ScheduleRuntimeAccessor {
        crn$getTrain(): $Train;
        crn$runEstimateStayDuration(arg0: number): number;
        crn$conditionProgress(): $List<number>;
        crn$conditionContext(): $List<$CompoundTag>;
        crn$predictionTicks(): $List<number>;
        crn$getTicksInPreviousTransit(): number;
        crn$getTransitTicks(): $List<number>;
    }
    export class $ModularGuiLineBuilderAccessor {
    }
    export interface $ModularGuiLineBuilderAccessor {
        crn$getFont(): $Font;
        crn$getX(): number;
        crn$getY(): number;
        crn$getTarget(): $ModularGuiLine;
    }
}
