import { $Mat4, $Mat3 } from "@package/gg/essential/lib/kotgl/matrix/matrices";

declare module "@package/gg/essential/lib/kotgl/matrix/matrices/mutables" {
    export class $MutableMat4 extends $Mat4 implements $MutableMat {
        setM03(arg0: number): void;
        setM13(arg0: number): void;
        setM23(arg0: number): void;
        setM00(arg0: number): void;
        setM01(arg0: number): void;
        setM02(arg0: number): void;
        setM10(arg0: number): void;
        setM11(arg0: number): void;
        setM12(arg0: number): void;
        setM20(arg0: number): void;
        setM21(arg0: number): void;
        setM22(arg0: number): void;
        setM30(arg0: number): void;
        setM31(arg0: number): void;
        setM32(arg0: number): void;
        setM33(arg0: number): void;
        copyOf(): $MutableMat4;
        constructor();
    }
    export class $MutableMat3 extends $Mat3 implements $MutableMat {
        setM00(arg0: number): void;
        setM01(arg0: number): void;
        setM02(arg0: number): void;
        setM10(arg0: number): void;
        setM11(arg0: number): void;
        setM12(arg0: number): void;
        setM20(arg0: number): void;
        setM21(arg0: number): void;
        setM22(arg0: number): void;
        copyOf(): $MutableMat3;
        constructor();
    }
}
