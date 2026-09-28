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
        getOversample(): number;
        getBearingLeft(): number;
        getBearingTop(): number;
        getPixelWidth(): number;
        getPixelHeight(): number;
        isColored(): boolean;
        getLeft(): number;
        getRight(): number;
        upload(xOffset: number, yOffset: number): void;
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
    export type $GlyphProvider$Conditional_ = { filter?: $FontOption$Filter, provider?: $GlyphProvider_,  } | [filter?: $FontOption$Filter, provider?: $GlyphProvider_, ];
    export class $GlyphInfo {
    }
    export interface $GlyphInfo {
        getAdvance(): number;
        getAdvance(bold: boolean): number;
        bake(glyphProvider: $Function_<$SheetGlyphInfo, $BakedGlyph>): $BakedGlyph;
        getBoldOffset(): number;
        getShadowOffset(): number;
    }
    export class $GlyphProvider {
        static BASELINE: number;
    }
    export interface $GlyphProvider extends $AutoCloseable {
        getSupportedGlyphs(): $IntSet;
        getGlyph(character: number): $GlyphInfo;
        close(): void;
    }
    /**
     * Values that may be interpreted as {@link $GlyphProvider}.
     */
    export type $GlyphProvider_ = (() => $IntSet);
}
