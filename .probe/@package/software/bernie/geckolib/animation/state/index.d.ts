import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        startRotAnim(): void;
        startPosAnim(): void;
        startScaleAnim(): void;
        isRotAnimInProgress(): boolean;
        stopRotAnim(arg0: number): void;
        getLastResetRotationTick(): number;
        isPosAnimInProgress(): boolean;
        stopPosAnim(arg0: number): void;
        getLastResetPositionTick(): number;
        isScaleAnimInProgress(): boolean;
        stopScaleAnim(arg0: number): void;
        getLastResetScaleTick(): number;
        getRotZ(): number;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        getBone(): $GeoBone;
        getOffsetX(): number;
        getOffsetY(): number;
        getScaleX(): number;
        getScaleY(): number;
        getScaleZ(): number;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        getOffsetZ(): number;
        getRotY(): number;
        getRotX(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        constructor(arg0: $GeoBone);
    }
}
