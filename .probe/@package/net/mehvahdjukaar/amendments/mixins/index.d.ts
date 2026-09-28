import { $SoundEvent } from "@package/net/minecraft/sounds";

declare module "@package/net/mehvahdjukaar/amendments/mixins" {
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        invokeGetSwimSplashSound(): $SoundEvent;
        invokeGetSwimHighSpeedSplashSound(): $SoundEvent;
    }
}
