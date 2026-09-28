import { $Function2_, $Function3_, $Function2, $Function0_, $Function3 } from "@package/kotlin/jvm/functions";
import { $SuperConstraint } from "@package/gg/essential/elementa/constraints";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $ConcurrentLinkedQueue } from "@package/java/util/concurrent";
import { $UMatrixStack } from "@package/gg/essential/universal";
import { $ElementaVersion, $UIComponent, $ElementaVersion_ } from "@package/gg/essential/elementa";
import { $Runnable_ } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $Unit } from "@package/kotlin";

declare module "@package/gg/essential/elementa/components" {
    export class $Window extends $UIComponent {
        static access$getRenderOperations$cp(): $ConcurrentLinkedQueue<any>;
        static getAnimationFPS$annotations(): void;
        setAllUpdateFuncs$Elementa(arg0: $List_<$Function2_<number, number, $Unit>>): void;
        getAnimationFPS(): number;
        static getAnimationFPSOr1000$Elementa$annotations(): void;
        getAnimationTimeMs(): number;
        getAnimationTimeNs(): number;
        getCachedConstraints$Elementa(): $List<$SuperConstraint<never>>;
        getClickInterceptor$Elementa(): $Function3<number, number, number, boolean>;
        setClickInterceptor$Elementa(arg0: $Function3_<number, number, number, boolean>): void;
        getHasErrored(): boolean;
        setPrevDraggedMouseX$Elementa(arg0: number): void;
        setPrevDraggedMouseY$Elementa(arg0: number): void;
        drawEmbedded$Elementa(arg0: $UMatrixStack): void;
        invalidateCachedConstraints(): void;
        getPrevDraggedMouseX$Elementa(): number;
        getPrevDraggedMouseY$Elementa(): number;
        getVersion$Elementa(): $ElementaVersion;
        isAreaVisible(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        drawFloatingComponents(arg0: $UMatrixStack): void;
        drawFloatingComponents(): void;
        getHoveredFloatingComponent(): $UIComponent;
        unfocus(): void;
        getFocusedComponent(): $UIComponent;
        setHoveredFloatingComponent(arg0: $UIComponent): void;
        addFloatingComponent(arg0: $UIComponent): void;
        removeFloatingComponent(arg0: $UIComponent): void;
        getAllUpdateFuncs$Elementa(): $List<$Function2<number, number, $Unit>>;
        getNextUpdateFuncIndex$Elementa(): number;
        setNextUpdateFuncIndex$Elementa(arg0: number): void;
        getAnimationFPSOr1000$Elementa(): number;
        focus(arg0: $UIComponent): void;
        static Companion: $Window$Companion;
        parent: $UIComponent;
        constructor();
        constructor(arg0: $ElementaVersion_);
        constructor(arg0: number);
        constructor(arg0: number, arg1: number, arg2: $DefaultConstructorMarker);
        constructor(arg0: $ElementaVersion_, arg1: number);
        constructor(arg0: $ElementaVersion_, arg1: number, arg2: number, arg3: $DefaultConstructorMarker);
    }
    export class $Window$Companion {
        enqueueRenderOperation(arg0: $Function0_<$Unit>): void;
        enqueueRenderOperation(arg0: $Runnable_): void;
        ofOrNull(arg0: $UIComponent): $Window;
        of(arg0: $UIComponent): $Window;
        constructor(arg0: $DefaultConstructorMarker);
    }
}
