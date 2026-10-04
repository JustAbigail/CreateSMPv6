import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $Function_ } from "@package/java/util/function";
import { $BakedGlyph } from "@package/net/minecraft/client/gui/font/glyphs";
import { $FontOption$Filter } from "@package/net/minecraft/client/gui/font";
import { $Record, $AutoCloseable } from "@package/java/lang";

declare module "@package/com/mojang/blaze3d/font" {
    export class $SheetGlyphInfo {
    }
    export interface $SheetGlyphInfo {
        getBottom(): number;
        getTop(): number;
        getPixelWidth(): number;
        getPixelHeight(): number;
        getOversample(): number;
        getBearingLeft(): number;
        getBearingTop(): number;
        isColored(): boolean;
        getLeft(): number;
        getRight(): number;
        upload(xOffset: number, yOffset: number): void;
        get bottom(): number;
        get top(): number;
        get pixelWidth(): number;
        get pixelHeight(): number;
        get oversample(): number;
        get bearingLeft(): number;
        get bearingTop(): number;
        get colored(): boolean;
        get left(): number;
        get right(): number;
    }
    export class $GlyphProvider$Conditional extends $Record implements $AutoCloseable {
        filter(): $FontOption$Filter;
        provider(): $GlyphProvider;
        close(): void;
        constructor(arg0: $GlyphProvider_, arg1: $FontOption$Filter);
    }
    /**
     * Values that may be interpreted as {@link $GlyphProvider$Conditional}.
     */
    export type $GlyphProvider$Conditional_ = { provider?: $GlyphProvider_, filter?: $FontOption$Filter,  } | [provider?: $GlyphProvider_, filter?: $FontOption$Filter, ];
    export class $GlyphInfo {
    }
    export interface $GlyphInfo {
        getAdvance(): number;
        getAdvance(bold: boolean): number;
        bake(glyphProvider: $Function_<$SheetGlyphInfo, $BakedGlyph>): $BakedGlyph;
        getBoldOffset(): number;
        getShadowOffset(): number;
        get boldOffset(): number;
        get shadowOffset(): number;
    }
    export class $GlyphProvider {
        static BASELINE: number;
    }
    export interface $GlyphProvider extends $AutoCloseable {
        getSupportedGlyphs(): $IntSet;
        getGlyph(character: number): $GlyphInfo;
        close(): void;
        get supportedGlyphs(): $IntSet;
    }
    /**
     * Values that may be interpreted as {@link $GlyphProvider}.
     */
    export type $GlyphProvider_ = (() => $IntSet);
}
