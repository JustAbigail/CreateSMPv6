import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Sensitivity } from "@package/nl/enjarai/doabarrelroll/config";
import { $Vector2d } from "@package/org/joml";
export * as key from "@package/nl/enjarai/doabarrelroll/api/key";

declare module "@package/nl/enjarai/doabarrelroll/api" {
    export class $RollEntity {
    }
    export interface $RollEntity {
        doABarrelRoll$changeElytraLook(arg0: number, arg1: number, arg2: number, arg3: $Sensitivity, arg4: number): void;
        doABarrelRoll$changeElytraLook(arg0: number, arg1: number, arg2: number): void;
        doABarrelRoll$isRolling(): boolean;
        doABarrelRoll$setRolling(arg0: boolean): void;
        doABarrelRoll$getRoll(): number;
        doABarrelRoll$getRoll(arg0: number): number;
        doABarrelRoll$setRoll(arg0: number): void;
    }
    export class $RollMouse {
    }
    export interface $RollMouse {
        doABarrelRoll$updateMouse(arg0: $LocalPlayer, arg1: number, arg2: number, arg3: number): boolean;
        doABarrelRoll$getMouseTurnVec(): $Vector2d;
    }
    export class $RollCamera {
    }
    export interface $RollCamera {
        doABarrelRoll$getRoll(): number;
    }
    /**
     * Values that may be interpreted as {@link $RollCamera}.
     */
    export type $RollCamera_ = (() => number);
}
