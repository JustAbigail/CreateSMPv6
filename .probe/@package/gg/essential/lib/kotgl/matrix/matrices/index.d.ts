export * as mutables from "@package/gg/essential/lib/kotgl/matrix/matrices/mutables";

declare module "@package/gg/essential/lib/kotgl/matrix/matrices" {
    export class $Mat {
    }
    export interface $Mat {
        copyOf(): $Mat;
    }
    /**
     * Values that may be interpreted as {@link $Mat}.
     */
    export type $Mat_ = (() => $Mat);
    export class $Mat4 implements $Mat {
        getM03(): number;
        getM13(): number;
        getM23(): number;
        getM00(): number;
        getM10(): number;
        getM20(): number;
        getM30(): number;
        getM01(): number;
        getM11(): number;
        getM21(): number;
        getM31(): number;
        getM02(): number;
        getM12(): number;
        getM22(): number;
        getM32(): number;
        getM33(): number;
        copyOf(): $Mat4;
        constructor();
        get m03(): number;
        get m13(): number;
        get m23(): number;
        get m00(): number;
        get m10(): number;
        get m20(): number;
        get m30(): number;
        get m01(): number;
        get m11(): number;
        get m21(): number;
        get m31(): number;
        get m02(): number;
        get m12(): number;
        get m22(): number;
        get m32(): number;
        get m33(): number;
    }
    export class $Mat3 implements $Mat {
        getM00(): number;
        getM10(): number;
        getM20(): number;
        getM01(): number;
        getM11(): number;
        getM21(): number;
        getM02(): number;
        getM12(): number;
        getM22(): number;
        copyOf(): $Mat3;
        constructor();
        get m00(): number;
        get m10(): number;
        get m20(): number;
        get m01(): number;
        get m11(): number;
        get m21(): number;
        get m02(): number;
        get m12(): number;
        get m22(): number;
    }
}
