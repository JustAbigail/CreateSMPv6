import { $Direction$Axis_, $Direction_, $Direction, $FrontAndTop, $FrontAndTop_ } from "@package/net/minecraft/core";
import { $ITransformationExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Codec } from "@package/com/mojang/serialization";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Matrix4f, $Vector4f, $Matrix3f, $Quaternionf, $Vector3f } from "@package/org/joml";

declare module "@package/com/mojang/math" {
    export class $OctahedralGroup extends $Enum<$OctahedralGroup> implements $StringRepresentable {
        transformation(): $Matrix3f;
        inverse(): $OctahedralGroup;
        inverts(axis: $Direction$Axis_): boolean;
        static values(): $OctahedralGroup[];
        static valueOf(arg0: string): $OctahedralGroup;
        rotate(frontAndTop: $FrontAndTop_): $FrontAndTop;
        rotate(direction: $Direction_): $Direction;
        compose(other: $OctahedralGroup_): $OctahedralGroup;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ROT_60_REF_PNP: $OctahedralGroup;
        static ROT_180_EDGE_YZ_POS: $OctahedralGroup;
        static ROT_180_FACE_XZ: $OctahedralGroup;
        static ROT_180_FACE_XY: $OctahedralGroup;
        static ROT_90_X_POS: $OctahedralGroup;
        static ROT_60_REF_NPN: $OctahedralGroup;
        static SWAP_NEG_XZ: $OctahedralGroup;
        static ROT_60_REF_NNN: $OctahedralGroup;
        static ROT_60_REF_NPP: $OctahedralGroup;
        static ROT_60_REF_PPN: $OctahedralGroup;
        static SWAP_NEG_XY: $OctahedralGroup;
        static ROT_90_REF_Z_NEG: $OctahedralGroup;
        static ROT_90_X_NEG: $OctahedralGroup;
        static ROT_180_EDGE_YZ_NEG: $OctahedralGroup;
        static ROT_60_REF_NNP: $OctahedralGroup;
        static ROT_60_REF_PNN: $OctahedralGroup;
        static ROT_60_REF_PPP: $OctahedralGroup;
        static ROT_180_EDGE_XZ_NEG: $OctahedralGroup;
        static ROT_120_NNN: $OctahedralGroup;
        static ROT_120_NPP: $OctahedralGroup;
        static ROT_120_PPN: $OctahedralGroup;
        static ROT_120_NPN: $OctahedralGroup;
        static ROT_90_REF_X_POS: $OctahedralGroup;
        static ROT_120_PNP: $OctahedralGroup;
        static SWAP_YZ: $OctahedralGroup;
        static ROT_90_REF_Y_NEG: $OctahedralGroup;
        static ROT_120_NNP: $OctahedralGroup;
        static ROT_120_PNN: $OctahedralGroup;
        static ROT_120_PPP: $OctahedralGroup;
        static ROT_90_Y_POS: $OctahedralGroup;
        static ROT_180_EDGE_XZ_POS: $OctahedralGroup;
        static ROT_90_Y_NEG: $OctahedralGroup;
        static ROT_180_EDGE_XY_NEG: $OctahedralGroup;
        static INVERT_X: $OctahedralGroup;
        static ROT_90_REF_Y_POS: $OctahedralGroup;
        static ROT_90_Z_NEG: $OctahedralGroup;
        static ROT_180_FACE_YZ: $OctahedralGroup;
        static ROT_90_REF_X_NEG: $OctahedralGroup;
        static ROT_180_EDGE_XY_POS: $OctahedralGroup;
        static ROT_90_Z_POS: $OctahedralGroup;
        static INVERSION: $OctahedralGroup;
        static SWAP_NEG_YZ: $OctahedralGroup;
        static IDENTITY: $OctahedralGroup;
        static ROT_90_REF_Z_POS: $OctahedralGroup;
        static SWAP_XY: $OctahedralGroup;
        static SWAP_XZ: $OctahedralGroup;
        static INVERT_Z: $OctahedralGroup;
        static INVERT_Y: $OctahedralGroup;
    }
    /**
     * Values that may be interpreted as {@link $OctahedralGroup}.
     */
    export type $OctahedralGroup_ = "identity" | "rot_180_face_xy" | "rot_180_face_xz" | "rot_180_face_yz" | "rot_120_nnn" | "rot_120_nnp" | "rot_120_npn" | "rot_120_npp" | "rot_120_pnn" | "rot_120_pnp" | "rot_120_ppn" | "rot_120_ppp" | "rot_180_edge_xy_neg" | "rot_180_edge_xy_pos" | "rot_180_edge_xz_neg" | "rot_180_edge_xz_pos" | "rot_180_edge_yz_neg" | "rot_180_edge_yz_pos" | "rot_90_x_neg" | "rot_90_x_pos" | "rot_90_y_neg" | "rot_90_y_pos" | "rot_90_z_neg" | "rot_90_z_pos" | "inversion" | "invert_x" | "invert_y" | "invert_z" | "rot_60_ref_nnn" | "rot_60_ref_nnp" | "rot_60_ref_npn" | "rot_60_ref_npp" | "rot_60_ref_pnn" | "rot_60_ref_pnp" | "rot_60_ref_ppn" | "rot_60_ref_ppp" | "swap_xy" | "swap_yz" | "swap_xz" | "swap_neg_xy" | "swap_neg_yz" | "swap_neg_xz" | "rot_90_ref_x_neg" | "rot_90_ref_x_pos" | "rot_90_ref_y_neg" | "rot_90_ref_y_pos" | "rot_90_ref_z_neg" | "rot_90_ref_z_pos";
    export class $Transformation implements $ITransformationExtension {
        getNormalMatrix(): $Matrix3f;
        getMatrix(): $Matrix4f;
        inverse(): $Transformation;
        getLeftRotation(): $Quaternionf;
        getRightRotation(): $Quaternionf;
        static identity(): $Transformation;
        compose(other: $Transformation): $Transformation;
        slerp(transformation: $Transformation, delta: number): $Transformation;
        getScale(): $Vector3f;
        getTranslation(): $Vector3f;
        applyOrigin(arg0: $Vector3f): $Transformation;
        rotateTransform(arg0: $Direction_): $Direction;
        blockCenterToCorner(): $Transformation;
        blockCornerToCenter(): $Transformation;
        isIdentity(): boolean;
        transformNormal(arg0: $Vector3f): void;
        transformPosition(arg0: $Vector4f): void;
        static CODEC: $Codec<$Transformation>;
        static EXTENDED_CODEC: $Codec<$Transformation>;
        constructor(matrix: $Matrix4f | null);
        constructor(translation: $Vector3f | null, leftRotation: $Quaternionf | null, scale: $Vector3f | null, rightRotation: $Quaternionf | null);
    }
    export class $Axis {
        static of(axis: $Vector3f): $Axis;
        static ZN: $Axis;
        static YN: $Axis;
        static XN: $Axis;
        static ZP: $Axis;
        static YP: $Axis;
        static XP: $Axis;
    }
    export interface $Axis {
        rotationDegrees(radians: number): $Quaternionf;
        rotation(radians: number): $Quaternionf;
    }
    /**
     * Values that may be interpreted as {@link $Axis}.
     */
    export type $Axis_ = ((arg0: number) => $Quaternionf);
}
