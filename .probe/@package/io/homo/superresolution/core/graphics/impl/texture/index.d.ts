import { $Destroyable } from "@package/io/homo/superresolution/core/impl";
import { $Enum } from "@package/java/lang";
import { $GpuObject } from "@package/io/homo/superresolution/core/graphics/impl";
import { $List } from "@package/java/util";

declare module "@package/io/homo/superresolution/core/graphics/impl/texture" {
    export class $TextureWrapMode extends $Enum<$TextureWrapMode> {
        vk(): number;
        gl(): number;
        static values(): $TextureWrapMode[];
        static valueOf(arg0: string): $TextureWrapMode;
        static ClampToEdge: $TextureWrapMode;
        static ClampToBorder: $TextureWrapMode;
        static MirroredRepeat: $TextureWrapMode;
        static Repeat: $TextureWrapMode;
    }
    /**
     * Values that may be interpreted as {@link $TextureWrapMode}.
     */
    export type $TextureWrapMode_ = "repeat" | "mirroredrepeat" | "clamptoedge" | "clamptoborder";
    export class $TextureType extends $Enum<$TextureType> {
        static values(): $TextureType[];
        static valueOf(arg0: string): $TextureType;
        static Texture1D: $TextureType;
        static Texture2D: $TextureType;
    }
    /**
     * Values that may be interpreted as {@link $TextureType}.
     */
    export type $TextureType_ = "texture2d" | "texture1d";
    export class $TextureUsages {
        attachmentDepth(): $TextureUsages;
        transferSource(): $TextureUsages;
        transferDestination(): $TextureUsages;
        attachmentColor(): $TextureUsages;
        getUsages(): $List<$TextureUsage>;
        sampler(): $TextureUsages;
        isEmpty(): boolean;
        copy(): $TextureUsages;
        static create(): $TextureUsages;
        storage(): $TextureUsages;
    }
    export class $TextureDescription {
        withSize(arg0: number, arg1: number): $TextureDescription;
        getWrapMode(): $TextureWrapMode;
        getMipmapSettings(): $TextureMipmapSettings;
        getFilterMode(): $TextureFilterMode;
        getLabel(): string;
        getUsages(): $TextureUsages;
        getWidth(): number;
        getHeight(): number;
        getFormat(): $TextureFormat;
        getType(): $TextureType;
        static create(): $TextureDescription$Builder;
    }
    export class $ITexture {
    }
    export interface $ITexture extends $Destroyable, $GpuObject {
        getTextureFilterMode(): $TextureFilterMode;
        getTextureWrapMode(): $TextureWrapMode;
        getTextureDescription(): $TextureDescription;
        getTextureUsages(): $TextureUsages;
        getMipmapSettings(): $TextureMipmapSettings;
        getTextureFormat(): $TextureFormat;
        getTextureType(): $TextureType;
        getWidth(): number;
        getHeight(): number;
        string(): string;
    }
    export class $TextureFormat$DataType extends $Enum<$TextureFormat$DataType> {
        static values(): $TextureFormat$DataType[];
        static valueOf(arg0: string): $TextureFormat$DataType;
        static FLOAT: $TextureFormat$DataType;
        static SIGNED_INTEGER: $TextureFormat$DataType;
        static UNSIGNED_NORMALIZED: $TextureFormat$DataType;
        static SIGNED_NORMALIZED: $TextureFormat$DataType;
        static UNSIGNED_INTEGER: $TextureFormat$DataType;
    }
    /**
     * Values that may be interpreted as {@link $TextureFormat$DataType}.
     */
    export type $TextureFormat$DataType_ = "unsigned_integer" | "signed_integer" | "float" | "unsigned_normalized" | "signed_normalized";
    export class $TextureDescription$Builder {
        mipmapSettings(arg0: $TextureMipmapSettings): $TextureDescription$Builder;
        mipmapsAuto(): $TextureDescription$Builder;
        mipmapsManual(arg0: number): $TextureDescription$Builder;
        wrapMode(arg0: $TextureWrapMode_): $TextureDescription$Builder;
        mipmapsDisabled(): $TextureDescription$Builder;
        usages(arg0: $TextureUsages): $TextureDescription$Builder;
        label(arg0: string): $TextureDescription$Builder;
        size(arg0: number, arg1: number): $TextureDescription$Builder;
        type(arg0: $TextureType_): $TextureDescription$Builder;
        format(arg0: $TextureFormat_): $TextureDescription$Builder;
        build(): $TextureDescription;
        width(arg0: number): $TextureDescription$Builder;
        height(arg0: number): $TextureDescription$Builder;
        filterMode(arg0: $TextureFilterMode_): $TextureDescription$Builder;
        constructor();
    }
    export class $TextureUsage extends $Enum<$TextureUsage> {
        static values(): $TextureUsage[];
        static valueOf(arg0: string): $TextureUsage;
        static TransferSource: $TextureUsage;
        static AttachmentDepth: $TextureUsage;
        static Storage: $TextureUsage;
        static TransferDestination: $TextureUsage;
        static Sampler: $TextureUsage;
        static AttachmentColor: $TextureUsage;
    }
    /**
     * Values that may be interpreted as {@link $TextureUsage}.
     */
    export type $TextureUsage_ = "sampler" | "storage" | "attachmentcolor" | "attachmentdepth" | "transfersource" | "transferdestination";
    export class $TextureFormat extends $Enum<$TextureFormat> {
        static fromGl(arg0: number): $TextureFormat;
        vk(): number;
        getGlslFormatQualifier(): string;
        isDepth(): boolean;
        isStencil(): boolean;
        static fromVk(arg0: number): $TextureFormat;
        getBytesPerPixel(): number;
        getChannelCount(): number;
        hasRedChannel(): boolean;
        hasGreenChannel(): boolean;
        hasBlueChannel(): boolean;
        hasAlphaChannel(): boolean;
        isDepthStencil(): boolean;
        gl(): number;
        getDataType(): $TextureFormat$DataType;
        isNormalized(): boolean;
        isInteger(): boolean;
        isFloat(): boolean;
        static values(): $TextureFormat[];
        static valueOf(arg0: string): $TextureFormat;
        static RGBA8: $TextureFormat;
        static RGB16F: $TextureFormat;
        static DEPTH24_STENCIL8: $TextureFormat;
        static RG8: $TextureFormat;
        static R8: $TextureFormat;
        static DEPTH32F: $TextureFormat;
        /**
         * @deprecated
         */
        static DEPTH_COMPONENT: $TextureFormat;
        static RG16F: $TextureFormat;
        static R16F: $TextureFormat;
        static RGBA16_SNORM: $TextureFormat;
        static RGBA16F: $TextureFormat;
        static RGB8: $TextureFormat;
        static RGBA16: $TextureFormat;
        static R16_SNORM: $TextureFormat;
        static DEPTH24: $TextureFormat;
        static R32F: $TextureFormat;
        static RGBA32F: $TextureFormat;
        static RG32F: $TextureFormat;
        static DEPTH32: $TextureFormat;
        static DEPTH32F_STENCIL8: $TextureFormat;
        static R11G11B10F: $TextureFormat;
        static R32UI: $TextureFormat;
    }
    /**
     * Values that may be interpreted as {@link $TextureFormat}.
     */
    export type $TextureFormat_ = "rgba8" | "rgba16f" | "rgba32f" | "rgb8" | "rgb16f" | "rgba16" | "rg16f" | "rg32f" | "rg8" | "r16f" | "r8" | "r32f" | "r32ui" | "depth32f" | "depth32f_stencil8" | "depth24_stencil8" | "depth24" | "depth32" | "r16_snorm" | "r11g11b10f" | "rgba16_snorm" | "depth_component";
    export class $TextureFilterMode extends $Enum<$TextureFilterMode> {
        vk(): number;
        gl(): number;
        static values(): $TextureFilterMode[];
        static valueOf(arg0: string): $TextureFilterMode;
        static Nearest: $TextureFilterMode;
        static Linear: $TextureFilterMode;
    }
    /**
     * Values that may be interpreted as {@link $TextureFilterMode}.
     */
    export type $TextureFilterMode_ = "nearest" | "linear";
    export class $TextureMipmapSettings {
        static manual(arg0: number): $TextureMipmapSettings;
        bias(arg0: number): $TextureMipmapSettings;
        getBias(): number;
        resolveLevels(arg0: number, arg1: number): number;
        isAutoGenerate(): boolean;
        isEnabled(): boolean;
        static auto(): $TextureMipmapSettings;
        static disabled(): $TextureMipmapSettings;
        getLevels(): number;
    }
}
