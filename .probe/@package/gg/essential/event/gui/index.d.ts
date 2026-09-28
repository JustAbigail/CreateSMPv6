import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $UMatrixStack } from "@package/gg/essential/universal";
import { $UDrawContext } from "@package/gg/essential/util";

declare module "@package/gg/essential/event/gui" {
    export class $GuiDrawScreenEvent {
        getScreen(): $Screen;
        isPre(): boolean;
        getDrawContext(): $UDrawContext;
        setMouseX(mouseX: number): void;
        setMouseY(mouseY: number): void;
        isPost(): boolean;
        getPartialTicks(): number;
        getMatrixStack(): $UMatrixStack;
        getMouseX(): number;
        getOriginalMouseX(): number;
        getMouseY(): number;
        getOriginalMouseY(): number;
        constructor(screen: $Screen, drawContext: $UDrawContext, mouseX: number, mouseY: number, partialTicks: number, post: boolean);
    }
}
