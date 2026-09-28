import { $BlockBehaviour$OffsetFunction, $BlockBehaviour$OffsetFunction_ } from "@package/net/minecraft/world/level/block/state";
import { $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $ImmutableList$Builder } from "@package/com/google/common/collect";
import { $LootPool } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/org/betterx/betternether/mixin/common" {
    export class $LootTableBuilderAccessor {
    }
    export interface $LootTableBuilderAccessor {
        getPools(): $ImmutableList$Builder<$LootPool>;
        getFunctions(): $ImmutableList$Builder<$LootItemFunction>;
    }
    export class $BlockBehaviourPropertiesAccessor {
    }
    export interface $BlockBehaviourPropertiesAccessor {
        betternether$getOffsetFunction(): $BlockBehaviour$OffsetFunction;
        betternether$setOffsetFunction(arg0: $BlockBehaviour$OffsetFunction_): void;
    }
}
