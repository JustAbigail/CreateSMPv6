import { $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $Map_, $Set_, $Set } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/mixin/content/registry" {
    export class $VillagerEntityAccessor {
        static fabric_setItemFoodValues(arg0: $Map_<$Item_, number>): void;
        static fabric_setGatherableItems(arg0: $Set_<$Item_>): void;
        static fabric_getGatherableItems(): $Set<$Item>;
    }
    export interface $VillagerEntityAccessor {
    }
}
