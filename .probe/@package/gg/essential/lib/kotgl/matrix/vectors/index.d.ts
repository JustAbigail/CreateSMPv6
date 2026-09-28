export * as mutables from "@package/gg/essential/lib/kotgl/matrix/vectors/mutables";

declare module "@package/gg/essential/lib/kotgl/matrix/vectors" {
    export class $Vec4 implements $Vec {
        component3(): number;
        component4(): number;
        copyOf(): $Vec4;
        component1(): number;
        component2(): number;
        constructor();
    }
    export class $Vec3 extends $Vec4 {
        copyOf(): $Vec3;
        constructor();
    }
    export class $Vec {
    }
    export interface $Vec {
        getY(): number;
        copyOf(): $Vec;
        getW(): number;
        getX(): number;
        getZ(): number;
    }
}
