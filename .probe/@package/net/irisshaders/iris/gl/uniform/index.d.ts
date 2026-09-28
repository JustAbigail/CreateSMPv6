import { $Supplier_, $BooleanSupplier_, $DoubleSupplier_, $IntSupplier_ } from "@package/java/util/function";
import { $Enum } from "@package/java/lang";
import { $OptionalInt } from "@package/java/util";
import { $ValueUpdateNotifier } from "@package/net/irisshaders/iris/gl/state";
import { $Vector2i, $Matrix4fc, $Vector4f, $Vector3d, $Vector2f, $Vector3f, $Vector3i } from "@package/org/joml";

declare module "@package/net/irisshaders/iris/gl/uniform" {
    export class $UniformUpdateFrequency extends $Enum<$UniformUpdateFrequency> {
        static values(): $UniformUpdateFrequency[];
        static valueOf(arg0: string): $UniformUpdateFrequency;
        static ONCE: $UniformUpdateFrequency;
        static PER_TICK: $UniformUpdateFrequency;
        static PER_FRAME: $UniformUpdateFrequency;
        static CUSTOM: $UniformUpdateFrequency;
    }
    /**
     * Values that may be interpreted as {@link $UniformUpdateFrequency}.
     */
    export type $UniformUpdateFrequency_ = "once" | "per_tick" | "per_frame" | "custom";
    export class $UniformHolder {
    }
    export interface $UniformHolder {
        uniform2f(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<$Vector2f>): $UniformHolder;
        uniform2i(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<$Vector2i>): $UniformHolder;
        uniform3f(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<$Vector3f>): $UniformHolder;
        uniform3i(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<$Vector3i>): $UniformHolder;
        uniform4f(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<$Vector4f>): $UniformHolder;
        externallyManagedUniform(arg0: string, arg1: $UniformType_): $UniformHolder;
        uniform4fArray(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<number[]>): $UniformHolder;
        uniformMatrix(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<$Matrix4fc>): $UniformHolder;
        uniformMatrixFromArray(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<number[]>): $UniformHolder;
        uniform3d(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<$Vector3d>): $UniformHolder;
        uniformTruncated3f(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<$Vector4f>): $UniformHolder;
        uniform1b(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $BooleanSupplier_): $UniformHolder;
        uniform1i(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $IntSupplier_): $UniformHolder;
        uniform1f(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $FloatSupplier_): $UniformHolder;
        uniform1f(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $IntSupplier_): $UniformHolder;
        uniform1f(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $DoubleSupplier_): $UniformHolder;
    }
    export class $FloatSupplier {
    }
    export interface $FloatSupplier {
        getAsFloat(): number;
    }
    /**
     * Values that may be interpreted as {@link $FloatSupplier}.
     */
    export type $FloatSupplier_ = (() => number);
    export class $LocationalUniformHolder {
    }
    export interface $LocationalUniformHolder extends $UniformHolder {
        uniform2f(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<$Vector2f>): $LocationalUniformHolder;
        uniform2i(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<$Vector2i>): $LocationalUniformHolder;
        addUniform(arg0: $UniformUpdateFrequency_, arg1: $Uniform): $LocationalUniformHolder;
        uniform4fArray(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<number[]>): $LocationalUniformHolder;
        uniformMatrixFromArray(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<number[]>): $LocationalUniformHolder;
        uniformTruncated3f(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<$Vector4f>): $LocationalUniformHolder;
        uniform1b(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $BooleanSupplier_): $LocationalUniformHolder;
        uniform1f(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $DoubleSupplier_): $LocationalUniformHolder;
        uniform1f(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $IntSupplier_): $LocationalUniformHolder;
        uniform1f(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $FloatSupplier_): $LocationalUniformHolder;
        location(arg0: string, arg1: $UniformType_): $OptionalInt;
        uniform3f(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<$Vector3f>): $UniformHolder;
        uniform3i(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<$Vector3i>): $UniformHolder;
        uniform4f(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<$Vector4f>): $UniformHolder;
        uniformMatrix(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<$Matrix4fc>): $UniformHolder;
        uniform3d(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $Supplier_<$Vector3d>): $UniformHolder;
        uniform1i(arg0: $UniformUpdateFrequency_, arg1: string, arg2: $IntSupplier_): $UniformHolder;
    }
    export class $UniformType extends $Enum<$UniformType> {
        static values(): $UniformType[];
        static valueOf(arg0: string): $UniformType;
        static MAT3: $UniformType;
        static FLOAT: $UniformType;
        static VEC4I: $UniformType;
        static VEC2: $UniformType;
        static VEC3I: $UniformType;
        static MAT4: $UniformType;
        static VEC2I: $UniformType;
        static VEC3: $UniformType;
        static VEC4: $UniformType;
        static INT: $UniformType;
    }
    /**
     * Values that may be interpreted as {@link $UniformType}.
     */
    export type $UniformType_ = "int" | "float" | "mat3" | "mat4" | "vec2" | "vec2i" | "vec3" | "vec3i" | "vec4" | "vec4i";
    export class $Uniform {
        getNotifier(): $ValueUpdateNotifier;
        update(): void;
        getLocation(): number;
    }
}
