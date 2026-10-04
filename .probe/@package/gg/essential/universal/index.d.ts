import { $Function0_ } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Runnable_, $Object } from "@package/java/lang";
import { $Matrix4f, $Matrix3f, $Quaternionf } from "@package/org/joml";

declare module "@package/gg/essential/universal" {
    export class $UMatrixStack$Entry {
        toMCStack(): $PoseStack;
        getModelAsArray(): number[];
        copy(model: $Matrix4f, normal: $Matrix3f): $UMatrixStack$Entry;
        deepCopy(): $UMatrixStack$Entry;
        getModel(): $Matrix4f;
        getNormal(): $Matrix3f;
        component1(): $Matrix4f;
        component2(): $Matrix3f;
        static copy$default(arg0: $UMatrixStack$Entry, arg1: $Matrix4f, arg2: $Matrix3f, arg3: number, arg4: $Object): $UMatrixStack$Entry;
        constructor(model: $Matrix4f, normal: $Matrix3f);
        get modelAsArray(): number[];
        get model(): $Matrix4f;
        get normal(): $Matrix3f;
    }
    export class $UMatrixStack {
        applyToGlobalState(): void;
        replaceGlobalState(): void;
        runReplacingGlobalState(block: $Runnable_): void;
        runReplacingGlobalState<R>(block: $Function0_<R>): R;
        static rotate$default(arg0: $UMatrixStack, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: $Object): void;
        runWithGlobalState<R>(block: $Function0_<R>): R;
        runWithGlobalState(block: $Runnable_): void;
        toMC(): $PoseStack;
        fork(): $UMatrixStack;
        push(): void;
        pop(): void;
        scale(x: number, y: number, z: number): void;
        scale(x: number, y: number, z: number): void;
        isEmpty(): boolean;
        peek(): $UMatrixStack$Entry;
        multiply(quaternion: $Quaternionf): void;
        rotate(angle: number, x: number, y: number, z: number): void;
        rotate(angle: number, x: number, y: number, z: number, degrees: boolean): void;
        translate(x: number, y: number, z: number): void;
        translate(x: number, y: number, z: number): void;
        static Companion: $UMatrixStack$Companion;
        static UNIT: $UMatrixStack;
        constructor(mc: $PoseStack);
        constructor();
        constructor(mc: $PoseStack$Pose);
        get empty(): boolean;
    }
    export class $UMatrixStack$Companion {
        constructor($constructor_marker: $DefaultConstructorMarker);
    }
}
