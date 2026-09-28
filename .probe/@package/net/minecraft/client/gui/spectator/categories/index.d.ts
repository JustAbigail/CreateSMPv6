import { $SpectatorMenuItem } from "@package/net/minecraft/client/gui/spectator";
import { $List_ } from "@package/java/util";

declare module "@package/net/minecraft/client/gui/spectator/categories" {
    export class $SpectatorPage {
        getSelectedSlot(): number;
        getItem(index: number): $SpectatorMenuItem;
        static NO_SELECTION: number;
        constructor(items: $List_<$SpectatorMenuItem>, selection: number);
    }
}
