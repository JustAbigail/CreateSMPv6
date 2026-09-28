import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $List } from "@package/java/util";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/gg/essential/mixins/transformers/client/gui" {
    export class $GuiScreenAccessor {
    }
    export interface $GuiScreenAccessor {
        getDrawables(): $List<$Renderable>;
        getSelectables(): $List<$NarratableEntry>;
        essential$addDrawableChild<T extends $GuiEventListener>(arg0: T): T;
        essential$getChildren(): $List<$GuiEventListener>;
    }
}
