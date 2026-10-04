import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/gg/essential/mixins/transformers/compatibility/fancymenu" {
    export class $KonkreteDrawScreenEventAcc {
    }
    export interface $KonkreteDrawScreenEventAcc extends $KonkreteGuiScreenEventAcc {
        invokeGetMouseY(): number;
        invokeGetDrawContext(): $GuiGraphics;
        invokeGetRenderPartialTicks(): number;
        invokeGetMouseX(): number;
    }
    export class $KonkreteGuiScreenEventAcc {
    }
    export interface $KonkreteGuiScreenEventAcc {
        invokeGetGui(): $Screen;
    }
    /**
     * Values that may be interpreted as {@link $KonkreteGuiScreenEventAcc}.
     */
    export type $KonkreteGuiScreenEventAcc_ = (() => $Screen);
}
