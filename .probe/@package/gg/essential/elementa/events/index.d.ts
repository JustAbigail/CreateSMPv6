import { $UIComponent } from "@package/gg/essential/elementa";
import { $Object } from "@package/java/lang";

declare module "@package/gg/essential/elementa/events" {
    export class $UIClickEvent extends $UIEvent {
        static copy$default(arg0: $UIClickEvent, arg1: number, arg2: number, arg3: number, arg4: $UIComponent, arg5: $UIComponent, arg6: number, arg7: number, arg8: $Object): $UIClickEvent;
        component6(): number;
        getAbsoluteX(): number;
        getRelativeX(): number;
        getRelativeY(): number;
        getAbsoluteY(): number;
        getClickCount(): number;
        getMouseButton(): number;
        component3(): number;
        component4(): $UIComponent;
        component5(): $UIComponent;
        component2(): number;
        copy(arg0: number, arg1: number, arg2: number, arg3: $UIComponent, arg4: $UIComponent, arg5: number): $UIClickEvent;
        getTarget(): $UIComponent;
        getCurrentTarget(): $UIComponent;
        component1(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $UIComponent, arg4: $UIComponent, arg5: number);
    }
    export class $UIEvent {
        getPropagationStoppedImmediately(): boolean;
        getPropagationStopped(): boolean;
        setPropagationStopped(arg0: boolean): void;
        setPropagationStoppedImmediately(arg0: boolean): void;
        stopImmediatePropagation(): void;
        stopPropagation(): void;
        constructor();
    }
    export class $UIScrollEvent extends $UIEvent {
        getScrollX(): number;
        getScrollY(): number;
        static copy$default(arg0: $UIScrollEvent, arg1: number, arg2: $UIComponent, arg3: $UIComponent, arg4: number, arg5: $Object): $UIScrollEvent;
        static copy$default(arg0: $UIScrollEvent, arg1: number, arg2: $UIComponent, arg3: $UIComponent, arg4: number, arg5: number, arg6: $Object): $UIScrollEvent;
        getDelta(): number;
        component3(): $UIComponent;
        component4(): number;
        component2(): $UIComponent;
        copy(arg0: number, arg1: $UIComponent, arg2: $UIComponent): $UIScrollEvent;
        copy(arg0: number, arg1: $UIComponent, arg2: $UIComponent, arg3: number): $UIScrollEvent;
        getTarget(): $UIComponent;
        getCurrentTarget(): $UIComponent;
        component1(): number;
        constructor(arg0: number, arg1: $UIComponent, arg2: $UIComponent, arg3: number);
        constructor(arg0: number, arg1: number, arg2: $UIComponent, arg3: $UIComponent);
        constructor(arg0: number, arg1: $UIComponent, arg2: $UIComponent);
    }
}
