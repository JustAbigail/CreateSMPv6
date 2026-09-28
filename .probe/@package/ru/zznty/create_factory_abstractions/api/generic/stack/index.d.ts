import { $GenericKey } from "@package/ru/zznty/create_factory_abstractions/api/generic/key";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Record } from "@package/java/lang";
import { $FactoryPanelBehaviour } from "@package/com/simibubi/create/content/logistics/factoryBoard";

declare module "@package/ru/zznty/create_factory_abstractions/api/generic/stack" {
    export class $GenericStack extends $Record {
        withAmount(amount: number): $GenericStack;
        canStack(otherKey: $GenericKey): boolean;
        canStack(ingredient: $GenericStack_): boolean;
        amount(): number;
        static wrap(stack: $ItemStack_): $GenericStack;
        isEmpty(): boolean;
        static of(behaviour: $FactoryPanelBehaviour): $GenericStack;
        key(): $GenericKey;
        static EMPTY: $GenericStack;
        constructor(key: $GenericKey, amount: number);
    }
    /**
     * Values that may be interpreted as {@link $GenericStack}.
     */
    export type $GenericStack_ = { key?: $GenericKey, amount?: number,  } | [key?: $GenericKey, amount?: number, ];
}
