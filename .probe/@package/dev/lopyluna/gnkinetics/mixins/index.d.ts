import { $KineticEffectHandler } from "@package/com/simibubi/create/content/kinetics/base";

declare module "@package/dev/lopyluna/gnkinetics/mixins" {
    export class $KineticBlockEntityAccessor {
    }
    export interface $KineticBlockEntityAccessor {
        effects(): $KineticEffectHandler;
    }
    /**
     * Values that may be interpreted as {@link $KineticBlockEntityAccessor}.
     */
    export type $KineticBlockEntityAccessor_ = (() => $KineticEffectHandler);
    export class $KineticEffectHandlerAccessor {
    }
    export interface $KineticEffectHandlerAccessor {
        overStressedEffect(): number;
    }
    /**
     * Values that may be interpreted as {@link $KineticEffectHandlerAccessor}.
     */
    export type $KineticEffectHandlerAccessor_ = (() => number);
    export class $ServerGamePacketListenerImplAccessor {
    }
    export interface $ServerGamePacketListenerImplAccessor {
        aboveGroundTickCount(arg0: number): void;
        aboveGroundVehicleTickCount(arg0: number): void;
    }
}
