import { $NumberProvider } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $List_, $List } from "@package/java/util";
import { $LootPool } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/fzzyhmstrs/emi_loot/mixins" {
    export class $LootPoolEntryAccessor {
    }
    export interface $LootPoolEntryAccessor {
        getConditions(): $List<$LootItemCondition>;
    }
    /**
     * Values that may be interpreted as {@link $LootPoolEntryAccessor}.
     */
    export type $LootPoolEntryAccessor_ = (() => $List_<$LootItemCondition>);
    export class $LootPoolAccessor {
    }
    export interface $LootPoolAccessor {
        getConditions(): $List<$LootItemCondition>;
        getRolls(): $NumberProvider;
        getEntries(): $List<$LootPoolEntryContainer>;
        getFunctions(): $List<$LootItemFunction>;
    }
    export class $LootTableAccessor {
    }
    export interface $LootTableAccessor {
        getPools(): $List<$LootPool>;
    }
    /**
     * Values that may be interpreted as {@link $LootTableAccessor}.
     */
    export type $LootTableAccessor_ = (() => $List_<$LootPool>);
}
