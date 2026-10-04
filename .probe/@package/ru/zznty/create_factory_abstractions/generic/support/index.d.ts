import { $GenericKey } from "@package/ru/zznty/create_factory_abstractions/api/generic/key";
import { $GenericStack_, $GenericStack } from "@package/ru/zznty/create_factory_abstractions/api/generic/stack";
import { $Comparator, $Map, $Collection, $List } from "@package/java/util";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";
import { $InventorySummary } from "@package/com/simibubi/create/content/logistics/packager";

declare module "@package/ru/zznty/create_factory_abstractions/generic/support" {
    export class $BigGenericStack {
        static of(stack: $GenericStack_): $BigGenericStack;
        static of(stack: $BigItemStack): $BigGenericStack;
        static COMPARATOR: $Comparator<$BigGenericStack>;
    }
    export interface $BigGenericStack {
        setAmount(arg0: number): void;
        asStack(): $BigItemStack;
        get(): $GenericStack;
        set(arg0: $GenericStack_): void;
        set amount(value: number);
    }
    export class $GenericInventorySummary {
        static of(summary: $InventorySummary): $GenericInventorySummary;
        static empty(): $GenericInventorySummary;
    }
    export interface $GenericInventorySummary {
        asSummary(): $InventorySummary;
        getCountOf(arg0: $GenericKey): number;
        getMap(): $Map<$GenericKey, $Collection<$BigGenericStack>>;
        get(): $List<$GenericStack>;
        isEmpty(): boolean;
        add(arg0: $GenericStack_): void;
        add(arg0: $GenericInventorySummary): void;
        erase(arg0: $GenericKey): boolean;
        get map(): $Map<$GenericKey, $Collection<$BigGenericStack>>;
    }
}
