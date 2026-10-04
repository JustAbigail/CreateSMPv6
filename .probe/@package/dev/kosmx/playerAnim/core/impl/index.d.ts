import { $TransformType_ } from "@package/dev/kosmx/playerAnim/api";
import { $FirstPersonConfiguration, $FirstPersonMode } from "@package/dev/kosmx/playerAnim/api/firstPerson";
import { $Vec3f, $Pair } from "@package/dev/kosmx/playerAnim/core/util";
import { $IAnimation } from "@package/dev/kosmx/playerAnim/api/layered";

declare module "@package/dev/kosmx/playerAnim/core/impl" {
    export class $AnimationProcessor {
        setTickDelta(tickDelta: number): void;
        getBend(modelName: string): $Pair<number, number>;
        isFirstPersonAnimationDisabled(): boolean;
        getFirstPersonConfiguration(): $FirstPersonConfiguration;
        get3DTransform(modelName: string, type: $TransformType_, value0: $Vec3f): $Vec3f;
        getFirstPersonMode(): $FirstPersonMode;
        tick(): void;
        isActive(): boolean;
        constructor(animation: $IAnimation);
        set tickDelta(value: number);
        get firstPersonAnimationDisabled(): boolean;
        get firstPersonConfiguration(): $FirstPersonConfiguration;
        get firstPersonMode(): $FirstPersonMode;
        get active(): boolean;
    }
}
