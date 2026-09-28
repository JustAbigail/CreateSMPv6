import { $IntSupplier } from "@package/java/util/function";
import { $Enum } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";
import { $GlVersion } from "@package/net/irisshaders/iris/gl";

declare module "@package/net/irisshaders/iris/gl/texture" {
    export class $TextureType extends $Enum<$TextureType> {
        getGlType(): number;
        static values(): $TextureType[];
        static valueOf(arg0: string): $TextureType;
        apply(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $ByteBuffer): void;
        static fromString(arg0: string): ($TextureType) | undefined;
        static TEXTURE_RECTANGLE: $TextureType;
        static TEXTURE_2D: $TextureType;
        static TEXTURE_1D: $TextureType;
        static TEXTURE_3D: $TextureType;
    }
    /**
     * Values that may be interpreted as {@link $TextureType}.
     */
    export type $TextureType_ = "texture_1d" | "texture_2d" | "texture_3d" | "texture_rectangle";
    export class $PixelType extends $Enum<$PixelType> {
        getByteSize(): number;
        getGlFormat(): number;
        getMinimumGlVersion(): $GlVersion;
        static values(): $PixelType[];
        static valueOf(arg0: string): $PixelType;
        static fromString(arg0: string): ($PixelType) | undefined;
        static HALF_FLOAT: $PixelType;
        static UNSIGNED_SHORT_4_4_4_4: $PixelType;
        static UNSIGNED_INT_8_8_8_8: $PixelType;
        static FLOAT: $PixelType;
        static UNSIGNED_INT_10_10_10_2: $PixelType;
        static UNSIGNED_SHORT_5_6_5_REV: $PixelType;
        static UNSIGNED_INT: $PixelType;
        static UNSIGNED_SHORT_5_6_5: $PixelType;
        static INT: $PixelType;
        static SHORT: $PixelType;
        static UNSIGNED_INT_5_9_9_9_REV: $PixelType;
        static UNSIGNED_BYTE: $PixelType;
        static UNSIGNED_BYTE_3_3_2: $PixelType;
        static UNSIGNED_SHORT: $PixelType;
        static UNSIGNED_SHORT_1_5_5_5_REV: $PixelType;
        static UNSIGNED_INT_10F_11F_11F_REV: $PixelType;
        static BYTE: $PixelType;
        static UNSIGNED_BYTE_2_3_3_REV: $PixelType;
        static UNSIGNED_SHORT_5_5_5_1: $PixelType;
        static UNSIGNED_INT_2_10_10_10_REV: $PixelType;
        static UNSIGNED_SHORT_4_4_4_4_REV: $PixelType;
        static UNSIGNED_INT_8_8_8_8_REV: $PixelType;
    }
    /**
     * Values that may be interpreted as {@link $PixelType}.
     */
    export type $PixelType_ = "byte" | "short" | "int" | "half_float" | "float" | "unsigned_byte" | "unsigned_byte_3_3_2" | "unsigned_byte_2_3_3_rev" | "unsigned_short" | "unsigned_short_5_6_5" | "unsigned_short_5_6_5_rev" | "unsigned_short_4_4_4_4" | "unsigned_short_4_4_4_4_rev" | "unsigned_short_5_5_5_1" | "unsigned_short_1_5_5_5_rev" | "unsigned_int" | "unsigned_int_8_8_8_8" | "unsigned_int_8_8_8_8_rev" | "unsigned_int_10_10_10_2" | "unsigned_int_2_10_10_10_rev" | "unsigned_int_10f_11f_11f_rev" | "unsigned_int_5_9_9_9_rev";
    export class $TextureScaleOverride {
        getY(arg0: number): number;
        getX(arg0: number): number;
        sizeX: number;
        isXRelative: boolean;
        relativeY: number;
        relativeX: number;
        sizeY: number;
        isYRelative: boolean;
        constructor(arg0: string, arg1: string);
    }
    export class $DepthBufferFormat extends $Enum<$DepthBufferFormat> {
        static fromGlEnumOrDefault(arg0: number): $DepthBufferFormat;
        getGlFormat(): number;
        getGlType(): number;
        static fromGlEnum(arg0: number): $DepthBufferFormat;
        getGlInternalFormat(): number;
        isCombinedStencil(): boolean;
        static values(): $DepthBufferFormat[];
        static valueOf(arg0: string): $DepthBufferFormat;
        static DEPTH24: $DepthBufferFormat;
        static DEPTH24_STENCIL8: $DepthBufferFormat;
        static DEPTH32: $DepthBufferFormat;
        static DEPTH32F: $DepthBufferFormat;
        static DEPTH32F_STENCIL8: $DepthBufferFormat;
        static DEPTH16: $DepthBufferFormat;
        static DEPTH_STENCIL: $DepthBufferFormat;
        static DEPTH: $DepthBufferFormat;
    }
    /**
     * Values that may be interpreted as {@link $DepthBufferFormat}.
     */
    export type $DepthBufferFormat_ = "depth" | "depth16" | "depth24" | "depth32" | "depth32f" | "depth_stencil" | "depth24_stencil8" | "depth32f_stencil8";
    export class $TextureDefinition {
        getName(): string;
        constructor();
    }
    export class $PixelFormat extends $Enum<$PixelFormat> {
        getGlFormat(): number;
        getMinimumGlVersion(): $GlVersion;
        getComponentCount(): number;
        isInteger(): boolean;
        static values(): $PixelFormat[];
        static valueOf(arg0: string): $PixelFormat;
        static fromString(arg0: string): ($PixelFormat) | undefined;
        static RED: $PixelFormat;
        static RGBA: $PixelFormat;
        static BGRA_INTEGER: $PixelFormat;
        static RG: $PixelFormat;
        static RG_INTEGER: $PixelFormat;
        static RGBA_INTEGER: $PixelFormat;
        static RGB_INTEGER: $PixelFormat;
        static RED_INTEGER: $PixelFormat;
        static BGRA: $PixelFormat;
        static RGB: $PixelFormat;
        static BGR: $PixelFormat;
        static BGR_INTEGER: $PixelFormat;
    }
    /**
     * Values that may be interpreted as {@link $PixelFormat}.
     */
    export type $PixelFormat_ = "red" | "rg" | "rgb" | "bgr" | "rgba" | "bgra" | "red_integer" | "rg_integer" | "rgb_integer" | "bgr_integer" | "rgba_integer" | "bgra_integer";
    export class $InternalTextureFormat extends $Enum<$InternalTextureFormat> {
        getGlFormat(): number;
        getPixelFormat(): $PixelFormat;
        getMinimumGlVersion(): $GlVersion;
        static values(): $InternalTextureFormat[];
        static valueOf(arg0: string): $InternalTextureFormat;
        static fromString(arg0: string): ($InternalTextureFormat) | undefined;
        static RGB16F: $InternalTextureFormat;
        static R11F_G11F_B10F: $InternalTextureFormat;
        static RGB16I: $InternalTextureFormat;
        static RG32UI: $InternalTextureFormat;
        static RGB16UI: $InternalTextureFormat;
        static RGBA16_SNORM: $InternalTextureFormat;
        static R16F: $InternalTextureFormat;
        static RGB32I: $InternalTextureFormat;
        static RGB8UI: $InternalTextureFormat;
        static RGB8: $InternalTextureFormat;
        static RGB32F: $InternalTextureFormat;
        static RGBA: $InternalTextureFormat;
        static R32F: $InternalTextureFormat;
        static RGB565: $InternalTextureFormat;
        static R16I: $InternalTextureFormat;
        static R8UI: $InternalTextureFormat;
        static R32I: $InternalTextureFormat;
        static R32UI: $InternalTextureFormat;
        static RGBA8: $InternalTextureFormat;
        static RG8I: $InternalTextureFormat;
        static RGBA32UI: $InternalTextureFormat;
        static RG8: $InternalTextureFormat;
        static RGBA4: $InternalTextureFormat;
        static RGB5_A1: $InternalTextureFormat;
        static R8: $InternalTextureFormat;
        static RGB9_E5: $InternalTextureFormat;
        static RGBA16F: $InternalTextureFormat;
        static RGBA16: $InternalTextureFormat;
        static R16_SNORM: $InternalTextureFormat;
        static RGBA8I: $InternalTextureFormat;
        static RGBA32I: $InternalTextureFormat;
        static RGBA8_SNORM: $InternalTextureFormat;
        static RGBA32F: $InternalTextureFormat;
        static RGB16: $InternalTextureFormat;
        static RGBA16I: $InternalTextureFormat;
        static RG16: $InternalTextureFormat;
        static RGBA8UI: $InternalTextureFormat;
        static RGB10_A2: $InternalTextureFormat;
        static RGB32UI: $InternalTextureFormat;
        static RG16UI: $InternalTextureFormat;
        static RGB8_SNORM: $InternalTextureFormat;
        static RG16F: $InternalTextureFormat;
        static RG16I: $InternalTextureFormat;
        static R16UI: $InternalTextureFormat;
        static RG32I: $InternalTextureFormat;
        static RG8UI: $InternalTextureFormat;
        static RG32F: $InternalTextureFormat;
        static RG16_SNORM: $InternalTextureFormat;
        static RGB10_A2UI: $InternalTextureFormat;
        static RGB8I: $InternalTextureFormat;
        static RGBA2: $InternalTextureFormat;
        static RGB16_SNORM: $InternalTextureFormat;
        static R8I: $InternalTextureFormat;
        static RGBA16UI: $InternalTextureFormat;
        static R16: $InternalTextureFormat;
        static R8_SNORM: $InternalTextureFormat;
        static RG8_SNORM: $InternalTextureFormat;
        static R3_G3_B2: $InternalTextureFormat;
    }
    /**
     * Values that may be interpreted as {@link $InternalTextureFormat}.
     */
    export type $InternalTextureFormat_ = "rgba" | "r8" | "rg8" | "rgb8" | "rgba8" | "r8_snorm" | "rg8_snorm" | "rgb8_snorm" | "rgba8_snorm" | "r16" | "rg16" | "rgb16" | "rgba16" | "r16_snorm" | "rg16_snorm" | "rgb16_snorm" | "rgba16_snorm" | "r16f" | "rg16f" | "rgb16f" | "rgba16f" | "r32f" | "rg32f" | "rgb32f" | "rgba32f" | "r8i" | "rg8i" | "rgb8i" | "rgba8i" | "r8ui" | "rg8ui" | "rgb8ui" | "rgba8ui" | "r16i" | "rg16i" | "rgb16i" | "rgba16i" | "r16ui" | "rg16ui" | "rgb16ui" | "rgba16ui" | "r32i" | "rg32i" | "rgb32i" | "rgba32i" | "r32ui" | "rg32ui" | "rgb32ui" | "rgba32ui" | "rgba2" | "rgba4" | "r3_g3_b2" | "rgb5_a1" | "rgb565" | "rgb10_a2" | "rgb10_a2ui" | "r11f_g11f_b10f" | "rgb9_e5";
    export class $TextureAccess {
    }
    export interface $TextureAccess {
        getTextureId(): $IntSupplier;
        getType(): $TextureType;
    }
}
