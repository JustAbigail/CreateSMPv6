import { $Event } from "@package/net/neoforged/bus/api";
import { $Vector2f } from "@package/org/joml";

declare module "@package/io/homo/superresolution/core/gui/core/event/events" {
    export class $WidgetEvent$InputEvent<T> extends $Event {
        getOldValue(): T;
        getNewValue(): T;
        constructor(arg0: T, arg1: T);
        get oldValue(): T;
        get newValue(): T;
    }
    export class $WidgetEvent$ClickEvent<T> extends $Event {
        getWidget(): T;
        constructor(arg0: T);
        get widget(): T;
    }
    export class $WidgetEvent$ChangeEvent<T> extends $Event {
        getOldValue(): T;
        getNewValue(): T;
        constructor(arg0: T, arg1: T);
        get oldValue(): T;
        get newValue(): T;
    }
    export class $MouseEvent$MouseReleaseEvent extends $Event {
        getMousePosition(): $Vector2f;
        getButton(): number;
        constructor(arg0: $Vector2f, arg1: number);
        get mousePosition(): $Vector2f;
        get button(): number;
    }
    export class $MouseEvent$MouseMoveEvent extends $Event {
        getMousePosition(): $Vector2f;
        constructor(arg0: $Vector2f);
        get mousePosition(): $Vector2f;
    }
    export class $MouseEvent$MousePressEvent extends $Event {
        getMousePosition(): $Vector2f;
        getButton(): number;
        constructor(arg0: $Vector2f, arg1: number);
        get mousePosition(): $Vector2f;
        get button(): number;
    }
    export class $WidgetEvent$FocusEvent extends $Event {
        isFocusing(): boolean;
        constructor(arg0: $Vector2f, arg1: boolean);
        get focusing(): boolean;
    }
    export class $WidgetEvent$HoverEvent extends $Event {
        isHovering(): boolean;
        getMousePosition(): $Vector2f;
        constructor(arg0: $Vector2f, arg1: boolean);
        get hovering(): boolean;
        get mousePosition(): $Vector2f;
    }
    export class $MouseEvent$MouseDragEvent extends $Event {
        getMousePosition(): $Vector2f;
        getButton(): number;
        getDragDelta(): $Vector2f;
        constructor(arg0: number, arg1: $Vector2f, arg2: $Vector2f);
        get mousePosition(): $Vector2f;
        get button(): number;
        get dragDelta(): $Vector2f;
    }
    export class $MouseEvent$MouseScrollEvent extends $Event {
        getMousePosition(): $Vector2f;
        getScrollY(): number;
        constructor(arg0: $Vector2f, arg1: number);
        get mousePosition(): $Vector2f;
        get scrollY(): number;
    }
}
