import { $Behavior } from "@package/net/minecraft/world/entity/ai/behavior";
import { $NonNullList } from "@package/net/minecraft/core";
import { $Sensor, $SensorType } from "@package/net/minecraft/world/entity/ai/sensing";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Map, $Set } from "@package/java/util";
import { $Activity } from "@package/net/minecraft/world/entity/schedule";
import { $Iterable, $Iterable_ } from "@package/java/lang";

declare module "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor" {
    export class $DispenserBlockEntityAccessor {
    }
    export interface $DispenserBlockEntityAccessor {
        getItems(): $NonNullList<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $DispenserBlockEntityAccessor}.
     */
    export type $DispenserBlockEntityAccessor_ = (() => $NonNullList<$ItemStack_>);
    export class $BrainAccessor<E extends $LivingEntity> {
    }
    export interface $BrainAccessor<E extends $LivingEntity> {
        getSensors(): $Map<$SensorType<$Sensor<E>>, $Sensor<E>>;
        getAvailableBehaviorsByPriority(): $Map<number, $Map<$Activity, $Set<$Behavior<E>>>>;
    }
    export class $AgeableListModelAccessor {
    }
    export interface $AgeableListModelAccessor {
        moonlight$invokeBodyParts(): $Iterable<$ModelPart>;
    }
    /**
     * Values that may be interpreted as {@link $AgeableListModelAccessor}.
     */
    export type $AgeableListModelAccessor_ = (() => $Iterable_<$ModelPart>);
}
