import { $IKeyEntry } from "@package/com/blamejared/controlling/api/entries";
import { $Event } from "@package/net/neoforged/bus/api";
import { $List } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/com/blamejared/controlling/api/events" {
    export class $KeyEntryMouseReleasedEvent extends $Event implements $IKeyEntryMouseReleasedEvent {
        getButtonId(): number;
        setHandled(arg0: boolean): void;
        isHandled(): boolean;
        getEntry(): $IKeyEntry;
        getMouseX(): number;
        getMouseY(): number;
        constructor(arg0: $IKeyEntry, arg1: number, arg2: number, arg3: number);
    }
    export class $KeyEntryRenderEvent extends $Event implements $IKeyEntryRenderEvent {
        isHovered(): boolean;
        getPartialTicks(): number;
        getGuiGraphics(): $GuiGraphics;
        getY(): number;
        getSlotIndex(): number;
        getEntry(): $IKeyEntry;
        getX(): number;
        getMouseX(): number;
        getMouseY(): number;
        getRowWidth(): number;
        getRowLeft(): number;
        constructor(arg0: $IKeyEntry, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number);
    }
    export class $IKeyEntryRenderEvent {
    }
    export interface $IKeyEntryRenderEvent {
        isHovered(): boolean;
        getPartialTicks(): number;
        getGuiGraphics(): $GuiGraphics;
        getY(): number;
        getSlotIndex(): number;
        getEntry(): $IKeyEntry;
        getX(): number;
        getMouseX(): number;
        getMouseY(): number;
        getRowWidth(): number;
        getRowLeft(): number;
    }
    export class $IKeyEntryMouseReleasedEvent {
    }
    export interface $IKeyEntryMouseReleasedEvent {
        getButtonId(): number;
        setHandled(arg0: boolean): void;
        isHandled(): boolean;
        getEntry(): $IKeyEntry;
        getMouseX(): number;
        getMouseY(): number;
    }
    export class $KeyEntryMouseClickedEvent extends $Event implements $IKeyEntryMouseClickedEvent {
        getButtonId(): number;
        setHandled(arg0: boolean): void;
        isHandled(): boolean;
        getEntry(): $IKeyEntry;
        getMouseX(): number;
        getMouseY(): number;
        constructor(arg0: $IKeyEntry, arg1: number, arg2: number, arg3: number);
    }
    export class $IKeyEntryListenersEvent {
    }
    export interface $IKeyEntryListenersEvent {
        getEntry(): $IKeyEntry;
        getListeners(): $List<$GuiEventListener>;
    }
    export class $KeyEntryListenersEvent extends $Event implements $IKeyEntryListenersEvent {
        getEntry(): $IKeyEntry;
        getListeners(): $List<$GuiEventListener>;
        constructor(arg0: $IKeyEntry);
    }
    export class $IKeyEntryMouseClickedEvent {
    }
    export interface $IKeyEntryMouseClickedEvent {
        getButtonId(): number;
        setHandled(arg0: boolean): void;
        isHandled(): boolean;
        getEntry(): $IKeyEntry;
        getMouseX(): number;
        getMouseY(): number;
    }
}
