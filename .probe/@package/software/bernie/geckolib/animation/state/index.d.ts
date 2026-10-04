import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        getRotZ(): number;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        startRotAnim(): void;
        startPosAnim(): void;
        startScaleAnim(): void;
        isRotAnimInProgress(): boolean;
        stopRotAnim(arg0: number): void;
        getLastResetRotationTick(): number;
        isPosAnimInProgress(): boolean;
        stopPosAnim(arg0: number): void;
        getLastResetPositionTick(): number;
        getOffsetZ(): number;
        isScaleAnimInProgress(): boolean;
        stopScaleAnim(arg0: number): void;
        getLastResetScaleTick(): number;
        getScaleX(): number;
        getScaleY(): number;
        getScaleZ(): number;
        getBone(): $GeoBone;
        getOffsetX(): number;
        getOffsetY(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getRotY(): number;
        getRotX(): number;
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        constructor(arg0: $GeoBone);
        get rotZ(): number;
        get rotAnimInProgress(): boolean;
        get lastResetRotationTick(): number;
        get posAnimInProgress(): boolean;
        get lastResetPositionTick(): number;
        get offsetZ(): number;
        get scaleAnimInProgress(): boolean;
        get lastResetScaleTick(): number;
        get scaleX(): number;
        get scaleY(): number;
        get scaleZ(): number;
        get bone(): $GeoBone;
        get offsetX(): number;
        get offsetY(): number;
        get rotY(): number;
        get rotX(): number;
    }
}
