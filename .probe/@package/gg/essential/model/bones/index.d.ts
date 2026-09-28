import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Quaternion } from "@package/gg/essential/model/util";
import { $Bones } from "@package/gg/essential/model";
import { $List_, $List } from "@package/java/util";

declare module "@package/gg/essential/model/bones" {
    export class $BakedAnimations$BakedBone {
        getBoneId(): number;
        getAnimOffsetX(): number;
        setAnimOffsetX(arg0: number): void;
        getAnimOffsetY(): number;
        setAnimOffsetY(arg0: number): void;
        getAnimOffsetZ(): number;
        setAnimOffsetZ(arg0: number): void;
        getAnimRotX(): number;
        setAnimRotX(arg0: number): void;
        getAnimRotY(): number;
        setAnimRotY(arg0: number): void;
        getAnimRotZ(): number;
        setAnimRotZ(arg0: number): void;
        getAnimScaleX(): number;
        setAnimScaleX(arg0: number): void;
        getAnimScaleY(): number;
        setAnimScaleY(arg0: number): void;
        getAnimScaleZ(): number;
        setAnimScaleZ(arg0: number): void;
        getGimbal(): boolean;
        setGimbal(arg0: boolean): void;
        getWorldGimbal(): boolean;
        setWorldGimbal(arg0: boolean): void;
        constructor(arg0: number);
    }
    export class $BakedAnimations {
        static access$getEMPTY$cp(): $BakedAnimations;
        getEntityRotation(): $Quaternion;
        getBakedBones(): $List<$BakedAnimations$BakedBone>;
        reset(arg0: $Bones): void;
        apply(arg0: $Bones): void;
        static Companion: $BakedAnimations$Companion;
        constructor(arg0: $List_<$BakedAnimations$BakedBone>, arg1: $Quaternion);
    }
    export class $BakedAnimations$Companion {
        getEMPTY(): $BakedAnimations;
        constructor(arg0: $DefaultConstructorMarker);
    }
}
