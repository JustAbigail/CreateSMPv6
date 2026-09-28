import { $TransformType_ } from "@package/dev/kosmx/playerAnim/api";
import { $FirstPersonConfiguration, $FirstPersonMode } from "@package/dev/kosmx/playerAnim/api/firstPerson";
import { $Vec3f } from "@package/dev/kosmx/playerAnim/core/util";

declare module "@package/dev/kosmx/playerAnim/api/layered" {
    export class $AnimationStack implements $IAnimation {
        removeLayer(layer: $IAnimation): boolean;
        removeLayer(layerLevel: number): boolean;
        addAnimLayer(priority: number, layer: $IAnimation): void;
        getFirstPersonConfiguration(tickDelta: number): $FirstPersonConfiguration;
        get3DTransform(modelName: string, type: $TransformType_, tickDelta: number, value0: $Vec3f): $Vec3f;
        setupAnim(tickDelta: number): void;
        getFirstPersonMode(tickDelta: number): $FirstPersonMode;
        isActive(): boolean;
        tick(): void;
        constructor();
    }
    export class $IAnimation {
    }
    export interface $IAnimation {
        getFirstPersonConfiguration(tickDelta: number): $FirstPersonConfiguration;
        get3DTransform(arg0: string, arg1: $TransformType_, arg2: number, arg3: $Vec3f): $Vec3f;
        setupAnim(arg0: number): void;
        getFirstPersonMode(tickDelta: number): $FirstPersonMode;
        isActive(): boolean;
        tick(): void;
    }
}
