import { $Matrix3dAccessor } from "@package/dev/ryanhcode/sable/neoforge/mixin/compatibility/create/contraptions";
import { $AccessorMatrix3d } from "@package/neoforge/fun/qu_an/minecraft/asyncparticles/client/mixin/compat/neoforge/create";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/foundation/collision" {
    export class $Matrix3d implements $AccessorMatrix3d, $Matrix3dAccessor {
        transformTransposed(arg0: $Vec3_): $Vec3;
        transformTransposed(arg0: number, arg1: number, arg2: number): $Vec3;
        asIdentity(): $Matrix3d;
        asXRotation(arg0: number): $Matrix3d;
        asYRotation(arg0: number): $Matrix3d;
        asZRotation(arg0: number): $Matrix3d;
        scale(arg0: number): $Matrix3d;
        transform(arg0: $Vec3_): $Vec3;
        transform(arg0: number, arg1: number, arg2: number): $Vec3;
        multiply(arg0: $Matrix3d): $Matrix3d;
        getM00(): number;
        getM10(): number;
        getM20(): number;
        getM01(): number;
        getM11(): number;
        getM21(): number;
        getM02(): number;
        getM12(): number;
        getM22(): number;
        setM00(arg0: number): void;
        setM01(arg0: number): void;
        setM02(arg0: number): void;
        setM10(arg0: number): void;
        setM11(arg0: number): void;
        setM12(arg0: number): void;
        setM20(arg0: number): void;
        setM21(arg0: number): void;
        setM22(arg0: number): void;
        m10(): number;
        m10(arg0: number): void;
        m11(): number;
        m11(arg0: number): void;
        m12(): number;
        m12(arg0: number): void;
        m00(): number;
        m00(arg0: number): void;
        m20(arg0: number): void;
        m20(): number;
        m01(): number;
        m01(arg0: number): void;
        m21(arg0: number): void;
        m21(): number;
        m02(): number;
        m02(arg0: number): void;
        m22(arg0: number): void;
        m22(): number;
        constructor();
    }
    export class $CollisionList {
        centerY: number[];
        centerZ: number[];
        size: number;
        centerX: number[];
        extentsZ: number[];
        extentsY: number[];
        extentsX: number[];
        static DEFAULT_CAPACITY: number;
        constructor();
    }
}
