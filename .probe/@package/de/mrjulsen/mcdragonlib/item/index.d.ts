import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $EquipmentSlot } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/de/mrjulsen/mcdragonlib/item" {
    export class $IItemExtension {
    }
    export interface $IItemExtension {
        dragonlib$tickArmor(stack: $ItemStack_, player: $Player): void;
        dragonlib$getCustomEquipmentSlot(stack: $ItemStack_): $EquipmentSlot;
    }
}
