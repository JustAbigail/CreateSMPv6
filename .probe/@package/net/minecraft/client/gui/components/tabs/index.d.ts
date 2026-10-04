import { $Consumer_ } from "@package/java/util/function";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";

declare module "@package/net/minecraft/client/gui/components/tabs" {
    export class $Tab {
    }
    export interface $Tab {
        doLayout(rectangle: $ScreenRectangle_): void;
        getTabTitle(): $Component;
        visitChildren(consumer: $Consumer_<$AbstractWidget>): void;
        get tabTitle(): $Component;
    }
}
