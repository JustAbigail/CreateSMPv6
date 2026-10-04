import { $Supplier_ } from "@package/java/util/function";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";

declare module "@package/nl/enjarai/doabarrelroll/api/key" {
    export class $InputContext {
        static of(id: $ResourceLocation_, activeCondition: $Supplier_<boolean>): $InputContext;
    }
    export interface $InputContext {
        getKeyBinding(arg0: $InputConstants$Key): $KeyMapping;
        getKeyBindings(): $List<$KeyMapping>;
        updateKeysByCode(): void;
        addKeyBinding(arg0: $KeyMapping): void;
        getId(): $ResourceLocation;
        isActive(): boolean;
        get keyBindings(): $List<$KeyMapping>;
        get id(): $ResourceLocation;
        get active(): boolean;
    }
}
