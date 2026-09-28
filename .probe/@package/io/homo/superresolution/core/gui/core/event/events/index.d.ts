import { $Event } from "@package/net/neoforged/bus/api";
import { $Vector2f } from "@package/org/joml";

declare module "@package/io/homo/superresolution/core/gui/core/event/events" {
    export class $WidgetEvent$InputEvent<T> extends $Event {
        getOldValue(): T;
        getNewValue(): T;
        constructor(arg0: T, arg1: T);
    }
    export class $WidgetEvent$ClickEvent<T> extends $Event {
        getWidget(): T;
        constructor(arg0: T);
    }
    export class $WidgetEvent$ChangeEvent<T> extends $Event {
        getOldValue(): T;
        getNewValue(): T;
        constructor(arg0: T, arg1: T);
    }
    export class $MouseEvent$MouseReleaseEvent extends $Event {
        getMousePosition(): $Vector2f;
        getButton(): number;
        constructor(arg0: $Vector2f, arg1: number);
    }
    export class $MouseEvent$MouseMoveEvent extends $Event {
        getMousePosition(): $Vector2f;
        constructor(arg0: $Vector2f);
    }
    export class $MouseEvent$MousePressEvent extends $Event {
        getMousePosition(): $Vector2f;
        getButton(): number;
        constructor(arg0: $Vector2f, arg1: number);
    }
    export class $WidgetEvent$FocusEvent extends $Event {
        isFocusing(): boolean;
        constructor(arg0: $Vector2f, arg1: boolean);
    }
    export class $WidgetEvent$HoverEvent extends $Event {
        getMousePosition(): $Vector2f;
        isHovering(): boolean;
        constructor(arg0: $Vector2f, arg1: boolean);
    }
    export class $MouseEvent$MouseDragEvent extends $Event {
        getMousePosition(): $Vector2f;
        getDragDelta(): $Vector2f;
        getButton(): number;
        constructor(arg0: number, arg1: $Vector2f, arg2: $Vector2f);
    }
    export class $MouseEvent$MouseScrollEvent extends $Event {
        getMousePosition(): $Vector2f;
        getScrollY(): number;
        constructor(arg0: $Vector2f, arg1: number);
    }
}
