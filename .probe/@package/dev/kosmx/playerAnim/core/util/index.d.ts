import { $Supplier } from "@package/java/util/function";
import { $Number } from "@package/java/lang";

declare module "@package/dev/kosmx/playerAnim/core/util" {
    export class $Vector3<N extends $Number> {
        getY(): N;
        getX(): N;
        getZ(): N;
        constructor(x: N, y: N, z: N);
        get y(): N;
        get x(): N;
        get z(): N;
    }
    export class $SetableSupplier<T> implements $Supplier<T> {
        get(): T;
        set(object: T): void;
        constructor();
    }
    export class $Vec3d extends $Vector3<number> {
        dotProduct(other: $Vec3d): number;
        squaredDistanceTo(vec3d: $Vec3d): number;
        crossProduct(other: $Vec3d): $Vec3d;
        subtract(rhs: $Vec3d): $Vec3d;
        scale(scalar: number): $Vec3d;
        add(other: $Vec3d): $Vec3d;
        distanceTo(vec3d: $Vec3d): number;
        constructor(x: number, y: number, z: number);
    }
    export class $Vec3f extends $Vector3<number> {
        dotProduct(other: $Vec3f): number;
        squaredDistanceTo(vec3d: $Vec3d): number;
        crossProduct(other: $Vec3f): $Vec3f;
        subtract(rhs: $Vec3f): $Vec3f;
        scale(scalar: number): $Vec3f;
        add(other: $Vec3f): $Vec3f;
        distanceTo(vec3d: $Vec3d): number;
        static ZERO: $Vec3f;
        constructor(x: number, y: number, z: number);
    }
    export class $Pair<L, R> {
        getLeft(): L;
        getRight(): R;
        constructor(left: L, right: R);
        get left(): L;
        get right(): R;
    }
}
