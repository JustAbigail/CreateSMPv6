import { $Function2_, $Function2 } from "@package/kotlin/jvm/functions";
import { $UMatrixStack } from "@package/gg/essential/universal";
import { $UIComponent } from "@package/gg/essential/elementa";
import { $List_, $List } from "@package/java/util";
import { $Unit } from "@package/kotlin";

declare module "@package/gg/essential/elementa/effects" {
    export class $Effect {
        "setFlags-GhGBI1o$Elementa"(arg0: number): void;
        setUpdateFuncs$Elementa(arg0: $List_<$Function2_<number, number, $Unit>>): void;
        afterDraw(arg0: $UMatrixStack): void;
        afterDraw(): void;
        afterDrawCompat(arg0: $UMatrixStack): void;
        animationFrame(): void;
        beforeChildrenDraw(arg0: $UMatrixStack): void;
        beforeChildrenDraw(): void;
        beforeChildrenDrawCompat(arg0: $UMatrixStack): void;
        beforeDraw(arg0: $UMatrixStack): void;
        beforeDraw(): void;
        beforeDrawCompat(arg0: $UMatrixStack): void;
        "getFlags-gM4u_j4$Elementa"(): number;
        bindComponent(arg0: $UIComponent): void;
        getUpdateFuncParent$Elementa(): $UIComponent;
        getUpdateFuncs$Elementa(): $List<$Function2<number, number, $Unit>>;
        setUpdateFuncParent$Elementa(arg0: $UIComponent): void;
        setup(): void;
        constructor();
    }
}
