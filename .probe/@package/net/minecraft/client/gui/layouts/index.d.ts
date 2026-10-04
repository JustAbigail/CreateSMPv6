import { $Consumer_ } from "@package/java/util/function";
import { $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";

declare module "@package/net/minecraft/client/gui/layouts" {
    export class $LayoutElement {
    }
    export interface $LayoutElement {
        setPosition(x: number, y: number): void;
        getY(): number;
        setX(x: number): void;
        setY(x: number): void;
        getWidth(): number;
        getHeight(): number;
        getX(): number;
        getRectangle(): $ScreenRectangle;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
}
