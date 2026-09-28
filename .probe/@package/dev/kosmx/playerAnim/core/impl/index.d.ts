import { $TransformType_ } from "@package/dev/kosmx/playerAnim/api";
import { $FirstPersonConfiguration, $FirstPersonMode } from "@package/dev/kosmx/playerAnim/api/firstPerson";
import { $Vec3f, $Pair } from "@package/dev/kosmx/playerAnim/core/util";
import { $IAnimation } from "@package/dev/kosmx/playerAnim/api/layered";

declare module "@package/dev/kosmx/playerAnim/core/impl" {
    export class $AnimationProcessor {
        getBend(modelName: string): $Pair<number, number>;
        isFirstPersonAnimationDisabled(): boolean;
        getFirstPersonConfiguration(): $FirstPersonConfiguration;
        get3DTransform(modelName: string, type: $TransformType_, value0: $Vec3f): $Vec3f;
        getFirstPersonMode(): $FirstPersonMode;
        isActive(): boolean;
        tick(): void;
        setTickDelta(tickDelta: number): void;
        constructor(animation: $IAnimation);
    }
}
