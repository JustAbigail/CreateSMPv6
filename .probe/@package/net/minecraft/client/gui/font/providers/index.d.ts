import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $InputStream } from "@package/java/io";
import { $Logger } from "@package/org/slf4j";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ByteList } from "@package/it/unimi/dsi/fastutil/bytes";
import { $FT_Vector } from "@package/org/lwjgl/util/freetype";
import { $BakedGlyph } from "@package/net/minecraft/client/gui/font/glyphs";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $IntBuffer } from "@package/java/nio";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Function_ } from "@package/java/util/function";
import { $GlyphProvider, $SheetGlyphInfo, $GlyphInfo } from "@package/com/mojang/blaze3d/font";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FontOption$Filter, $CodepointMap } from "@package/net/minecraft/client/gui/font";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";

declare module "@package/net/minecraft/client/gui/font/providers" {
    export class $GlyphProviderDefinition$Reference extends $Record {
        id(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $GlyphProviderDefinition$Reference}.
     */
    export type $GlyphProviderDefinition$Reference_ = { id?: $ResourceLocation_,  } | [id?: $ResourceLocation_, ];
    export class $UnihexProvider$IntContents extends $Record implements $UnihexProvider$LineData {
        calculateWidth(): number;
        mask(): number;
    }
    /**
     * Values that may be interpreted as {@link $UnihexProvider$IntContents}.
     */
    export type $UnihexProvider$IntContents_ = { contents?: number[], bitWidth?: number,  } | [contents?: number[], bitWidth?: number, ];
    export class $UnihexProvider$Glyph extends $Record implements $GlyphInfo {
        getAdvance(arg0: boolean): number;
        getBoldOffset(): number;
        getShadowOffset(): number;
    }
    /**
     * Values that may be interpreted as {@link $UnihexProvider$Glyph}.
     */
    export type $UnihexProvider$Glyph_ = { right?: number, contents?: $UnihexProvider$LineData, left?: number,  } | [right?: number, contents?: $UnihexProvider$LineData, left?: number, ];
    export class $GlyphProviderDefinition$Conditional extends $Record {
        definition(): $GlyphProviderDefinition;
        filter(): $FontOption$Filter;
        static CODEC: $Codec<$GlyphProviderDefinition$Conditional>;
        constructor(arg0: $GlyphProviderDefinition, arg1: $FontOption$Filter);
    }
    /**
     * Values that may be interpreted as {@link $GlyphProviderDefinition$Conditional}.
     */
    export type $GlyphProviderDefinition$Conditional_ = { definition?: $GlyphProviderDefinition, filter?: $FontOption$Filter,  } | [definition?: $GlyphProviderDefinition, filter?: $FontOption$Filter, ];
    export class $UnihexProvider$Dimensions extends $Record {
        static pack(left: number, right: number): number;
        pack(): number;
        left(): number;
        static left(packedDimensions: number): number;
        right(): number;
        static right(packedDimensions: number): number;
        static CODEC: $Codec<$UnihexProvider$Dimensions>;
        static MAP_CODEC: $MapCodec<$UnihexProvider$Dimensions>;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $UnihexProvider$Dimensions}.
     */
    export type $UnihexProvider$Dimensions_ = { left?: number, right?: number,  } | [left?: number, right?: number, ];
    export class $UnihexProvider$OverrideRange extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $UnihexProvider$OverrideRange}.
     */
    export type $UnihexProvider$OverrideRange_ = { from?: number, to?: number, dimensions?: $UnihexProvider$Dimensions_,  } | [from?: number, to?: number, dimensions?: $UnihexProvider$Dimensions_, ];
    export class $BitmapProvider$Definition extends $Record implements $GlyphProviderDefinition {
        codepointGrid(): number[][];
        ascent(): number;
        type(): $GlyphProviderType;
        file(): $ResourceLocation;
        height(): number;
        unpack(): $Either<$GlyphProviderDefinition$Loader, $GlyphProviderDefinition$Reference>;
        static CODEC: $MapCodec<$BitmapProvider$Definition>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number[][]);
    }
    /**
     * Values that may be interpreted as {@link $BitmapProvider$Definition}.
     */
    export type $BitmapProvider$Definition_ = { file?: $ResourceLocation_, height?: number, codepointGrid?: number[][], ascent?: number,  } | [file?: $ResourceLocation_, height?: number, codepointGrid?: number[][], ascent?: number, ];
    export class $ProviderReferenceDefinition extends $Record implements $GlyphProviderDefinition {
        type(): $GlyphProviderType;
        id(): $ResourceLocation;
        unpack(): $Either<$GlyphProviderDefinition$Loader, $GlyphProviderDefinition$Reference>;
        static CODEC: $MapCodec<$ProviderReferenceDefinition>;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ProviderReferenceDefinition}.
     */
    export type $ProviderReferenceDefinition_ = { id?: $ResourceLocation_,  } | [id?: $ResourceLocation_, ];
    export class $UnihexProvider$ByteContents extends $Record implements $UnihexProvider$LineData {
        calculateWidth(): number;
        mask(): number;
    }
    /**
     * Values that may be interpreted as {@link $UnihexProvider$ByteContents}.
     */
    export type $UnihexProvider$ByteContents_ = { contents?: number[],  } | [contents?: number[], ];
    export class $UnihexProvider implements $GlyphProvider {
        getSupportedGlyphs(): $IntSet;
        getGlyph(character: number): $GlyphInfo;
        static unpackBitsToBytes(buffer: $IntBuffer, lineData: $UnihexProvider$LineData, left: number, right: number): void;
        static unpackBitsToBytes(buffer: $IntBuffer, lineData: number, left: number, right: number): void;
        static readFromStream(stream: $InputStream, output: $UnihexProvider$ReaderOutput_): void;
        static decodeHex(lineNumber: number, byteList: $ByteList, index: number): number;
        close(): void;
        static LOGGER: $Logger;
        constructor(glyph: $CodepointMap<$UnihexProvider$Glyph_>);
    }
    export class $GlyphProviderDefinition$Loader {
    }
    export interface $GlyphProviderDefinition$Loader {
        load(resourceManager: $ResourceManager): $GlyphProvider;
    }
    /**
     * Values that may be interpreted as {@link $GlyphProviderDefinition$Loader}.
     */
    export type $GlyphProviderDefinition$Loader_ = ((arg0: $ResourceManager) => $GlyphProvider);
    export class $BitmapProvider implements $GlyphProvider {
        getSupportedGlyphs(): $IntSet;
        getGlyph(character: number): $GlyphInfo;
        close(): void;
        static LOGGER: $Logger;
        constructor(image: $NativeImage, glyphs: $CodepointMap<$BitmapProvider$Glyph_>);
    }
    export class $UnihexProvider$ShortContents extends $Record implements $UnihexProvider$LineData {
        calculateWidth(): number;
        mask(): number;
    }
    /**
     * Values that may be interpreted as {@link $UnihexProvider$ShortContents}.
     */
    export type $UnihexProvider$ShortContents_ = { contents?: number[],  } | [contents?: number[], ];
    export class $GlyphProviderType extends $Enum<$GlyphProviderType> implements $StringRepresentable, $IExtensibleEnum {
        static values(): $GlyphProviderType[];
        static valueOf(arg0: string): $GlyphProviderType;
        static getExtensionInfo(): $ExtensionInfo;
        mapCodec(): $MapCodec<$GlyphProviderDefinition>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SPACE: $GlyphProviderType;
        static UNIHEX: $GlyphProviderType;
        static CODEC: $Codec<$GlyphProviderType>;
        static BITMAP: $GlyphProviderType;
        static TTF: $GlyphProviderType;
        static REFERENCE: $GlyphProviderType;
    }
    /**
     * Values that may be interpreted as {@link $GlyphProviderType}.
     */
    export type $GlyphProviderType_ = "bitmap" | "ttf" | "space" | "unihex" | "reference";
    export class $TrueTypeGlyphProviderDefinition$Shift extends $Record {
        x(): number;
        y(): number;
        static CODEC: $Codec<$TrueTypeGlyphProviderDefinition$Shift>;
        static NONE: $TrueTypeGlyphProviderDefinition$Shift;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $TrueTypeGlyphProviderDefinition$Shift}.
     */
    export type $TrueTypeGlyphProviderDefinition$Shift_ = { x?: number, y?: number,  } | [x?: number, y?: number, ];
    export class $TrueTypeGlyphProviderDefinition extends $Record implements $GlyphProviderDefinition {
        oversample(): number;
        size(): number;
        type(): $GlyphProviderType;
        location(): $ResourceLocation;
        shift(): $TrueTypeGlyphProviderDefinition$Shift;
        skip(): string;
        unpack(): $Either<$GlyphProviderDefinition$Loader, $GlyphProviderDefinition$Reference>;
        static CODEC: $MapCodec<$TrueTypeGlyphProviderDefinition>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: $TrueTypeGlyphProviderDefinition$Shift_, arg4: string);
    }
    /**
     * Values that may be interpreted as {@link $TrueTypeGlyphProviderDefinition}.
     */
    export type $TrueTypeGlyphProviderDefinition_ = { size?: number, oversample?: number, location?: $ResourceLocation_, skip?: string, shift?: $TrueTypeGlyphProviderDefinition$Shift_,  } | [size?: number, oversample?: number, location?: $ResourceLocation_, skip?: string, shift?: $TrueTypeGlyphProviderDefinition$Shift_, ];
    export class $GlyphProviderDefinition {
        static MAP_CODEC: $MapCodec<$GlyphProviderDefinition>;
    }
    export interface $GlyphProviderDefinition {
        type(): $GlyphProviderType;
        unpack(): $Either<$GlyphProviderDefinition$Loader, $GlyphProviderDefinition$Reference>;
    }
    export class $FreeTypeUtil {
        static setVector(vector: $FT_Vector, x: number, y: number): $FT_Vector;
        static assertError(errorId: number, action: string): void;
        static x(vector: $FT_Vector): number;
        static destroy(): void;
        static checkError(errorId: number, action: string): boolean;
        static getLibrary(): number;
        static LIBRARY_LOCK: $Object;
        constructor();
    }
    export class $UnihexProvider$LineData {
    }
    export interface $UnihexProvider$LineData {
        calculateWidth(): number;
        bitWidth(): number;
        line(index: number): number;
        mask(): number;
    }
    export class $UnihexProvider$ReaderOutput {
    }
    export interface $UnihexProvider$ReaderOutput {
        accept(arg0: number, arg1: $UnihexProvider$LineData): void;
    }
    /**
     * Values that may be interpreted as {@link $UnihexProvider$ReaderOutput}.
     */
    export type $UnihexProvider$ReaderOutput_ = ((arg0: number, arg1: $UnihexProvider$LineData) => void);
    export class $UnihexProvider$Definition implements $GlyphProviderDefinition {
        type(): $GlyphProviderType;
        unpack(): $Either<$GlyphProviderDefinition$Loader, $GlyphProviderDefinition$Reference>;
        static CODEC: $MapCodec<$UnihexProvider$Definition>;
    }
    export class $BitmapProvider$Glyph extends $Record implements $GlyphInfo {
        getAdvance(): number;
        bake(glyphProvider: $Function_<$SheetGlyphInfo, $BakedGlyph>): $BakedGlyph;
        ascent(): number;
        offsetX(): number;
        offsetY(): number;
        image(): $NativeImage;
        scale(): number;
        advance(): number;
        width(): number;
        height(): number;
        getAdvance(arg0: boolean): number;
        getBoldOffset(): number;
        getShadowOffset(): number;
        constructor(scale: number, image: $NativeImage, offsetX: number, offsetY: number, width: number, height: number, advance: number, ascent: number);
    }
    /**
     * Values that may be interpreted as {@link $BitmapProvider$Glyph}.
     */
    export type $BitmapProvider$Glyph_ = { offsetX?: number, offsetY?: number, width?: number, height?: number, ascent?: number, image?: $NativeImage, scale?: number, advance?: number,  } | [offsetX?: number, offsetY?: number, width?: number, height?: number, ascent?: number, image?: $NativeImage, scale?: number, advance?: number, ];
}
