import { $IrisSRCompatShaderPack } from "@package/io/homo/superresolution/shadercompat";
import { $Int2ObjectLinkedOpenHashMap, $Int2ObjectArrayMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $ShaderPackOptions } from "@package/net/irisshaders/iris/shaderpack/option";
import { $SRShaderCompatData } from "@package/io/homo/superresolution/common/minecraft/handler/shadercompat";
import { $StringPair_ } from "@package/net/irisshaders/iris/helpers";
import { $ShaderPackAccessor } from "@package/io/homo/superresolution/shadercompat/mixin/core";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $ProgramSet } from "@package/net/irisshaders/iris/shaderpack/programs";
import { $List, $EnumMap, $Map_, $Map, $Set } from "@package/java/util";
import { $PixelFormat, $TextureType, $InternalTextureFormat_, $TextureType_, $PixelType, $TextureDefinition, $PixelType_, $InternalTextureFormat, $PixelFormat_ } from "@package/net/irisshaders/iris/gl/texture";
import { $BuiltShaderStorageInfo } from "@package/net/irisshaders/iris/gl/buffer";
import { $Object2ObjectMap, $Object2IntFunction } from "@package/it/unimi/dsi/fastutil/objects";
import { $Path_ } from "@package/java/nio/file";
import { $FeatureFlags_ } from "@package/net/irisshaders/iris/features";
import { $CustomUniforms$Builder } from "@package/net/irisshaders/iris/uniforms/custom";
import { $BlockRenderType, $NamespacedId, $BlockEntry, $TagEntry } from "@package/net/irisshaders/iris/shaderpack/materialmap";
import { $Record } from "@package/java/lang";
import { $OptionMenuContainer } from "@package/net/irisshaders/iris/shaderpack/option/menu";
import { $CustomTextureData, $TextureStage } from "@package/net/irisshaders/iris/shaderpack/texture";
export * as option from "@package/net/irisshaders/iris/shaderpack/option";
export * as properties from "@package/net/irisshaders/iris/shaderpack/properties";
export * as loading from "@package/net/irisshaders/iris/shaderpack/loading";
export * as programs from "@package/net/irisshaders/iris/shaderpack/programs";
export * as materialmap from "@package/net/irisshaders/iris/shaderpack/materialmap";
export * as transform from "@package/net/irisshaders/iris/shaderpack/transform";
export * as parsing from "@package/net/irisshaders/iris/shaderpack/parsing";
export * as texture from "@package/net/irisshaders/iris/shaderpack/texture";
export * as include from "@package/net/irisshaders/iris/shaderpack/include";
export * as error from "@package/net/irisshaders/iris/shaderpack/error";

declare module "@package/net/irisshaders/iris/shaderpack" {
    export class $ImageInformation extends $Record {
        relativeWidth(): number;
        relativeHeight(): number;
        internalTextureFormat(): $InternalTextureFormat;
        name(): string;
        type(): $PixelType;
        target(): $TextureType;
        clear(): boolean;
        format(): $PixelFormat;
        depth(): number;
        isRelative(): boolean;
        width(): number;
        height(): number;
        samplerName(): string;
        constructor(name: string, samplerName: string, target: $TextureType_, format: $PixelFormat_, internalTextureFormat: $InternalTextureFormat_, type: $PixelType_, width: number, height: number, depth: number, clear: boolean, isRelative: boolean, relativeWidth: number, relativeHeight: number);
    }
    /**
     * Values that may be interpreted as {@link $ImageInformation}.
     */
    export type $ImageInformation_ = { isRelative?: boolean, width?: number, internalTextureFormat?: $InternalTextureFormat_, name?: string, format?: $PixelFormat_, relativeHeight?: number, relativeWidth?: number, clear?: boolean, target?: $TextureType_, height?: number, depth?: number, type?: $PixelType_, samplerName?: string,  } | [isRelative?: boolean, width?: number, internalTextureFormat?: $InternalTextureFormat_, name?: string, format?: $PixelFormat_, relativeHeight?: number, relativeWidth?: number, clear?: boolean, target?: $TextureType_, height?: number, depth?: number, type?: $PixelType_, samplerName?: string, ];
    export class $LanguageMap {
        getLanguages(): $Set<string>;
        getTranslations(arg0: string): $Map<string, string>;
        constructor(arg0: $Path_);
    }
    export class $IdMap {
        getEntityIdMap(): $Object2IntFunction<$NamespacedId>;
        getItemIdMap(): $Object2IntFunction<$NamespacedId>;
        getBlockRenderTypeMap(): $Map<$NamespacedId, $BlockRenderType>;
        getBlockProperties(): $Int2ObjectLinkedOpenHashMap<$List<$BlockEntry>>;
        getTagEntries(): $Int2ObjectLinkedOpenHashMap<$List<$TagEntry>>;
    }
    export class $ShaderPack implements $ShaderPackAccessor, $IrisSRCompatShaderPack {
        getProfileInfo(): string;
        getBufferObjects(): $Int2ObjectArrayMap<$BuiltShaderStorageInfo>;
        getIrisCustomImages(): $List<$ImageInformation>;
        getCustomTextureDataMap(): $EnumMap<$TextureStage, $Object2ObjectMap<string, $CustomTextureData>>;
        getIrisCustomTextureDataMap(): $Object2ObjectMap<string, $CustomTextureData>;
        getCustomNoiseTexture(): $CustomTextureData;
        getIdMap(): $IdMap;
        superresolution$getSuperResolutionComaptConfig(): $SRShaderCompatData;
        superresolution$isSupportsSuperResolution(): boolean;
        readTexture(arg0: $Path_, arg1: $TextureDefinition): $CustomTextureData;
        hasFeature(arg0: $FeatureFlags_): boolean;
        getProgramSet(arg0: $NamespacedId): $ProgramSet;
        getShaderPackOptions(): $ShaderPackOptions;
        getMenuContainer(): $OptionMenuContainer;
        getLanguageMap(): $LanguageMap;
        getDimensionMap(): $Map<$NamespacedId, string>;
        customUniforms: $CustomUniforms$Builder;
        constructor(arg0: $Path_, arg1: $ImmutableList<$StringPair_>, arg2: boolean);
        constructor(arg0: $Path_, arg1: $Map_<string, string>, arg2: $ImmutableList<$StringPair_>, arg3: boolean);
    }
}
