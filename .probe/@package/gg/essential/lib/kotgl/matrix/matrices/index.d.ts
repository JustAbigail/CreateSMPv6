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
    }
}
