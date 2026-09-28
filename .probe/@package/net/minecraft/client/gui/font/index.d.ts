import { $GlyphInfo, $GlyphProvider$Conditional_ } from "@package/com/mojang/blaze3d/font";
import { $Codec } from "@package/com/mojang/serialization";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BakedGlyph } from "@package/net/minecraft/client/gui/font/glyphs";
import { $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Font$DisplayMode_ } from "@package/net/minecraft/client/gui";
import { $Set_, $List_, $Map_ } from "@package/java/util";
import { $AutoCloseable, $Enum, $Record } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as glyphs from "@package/net/minecraft/client/gui/font/glyphs";

declare module "@package/net/minecraft/client/gui/font" {
    export class $FontOption extends $Enum<$FontOption> implements $StringRepresentable {
        static values(): $FontOption[];
        static valueOf(arg0: string): $FontOption;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$FontOption>;
        static UNIFORM: $FontOption;
        static JAPANESE_VARIANTS: $FontOption;
    }
    /**
     * Values that may be interpreted as {@link $FontOption}.
     */
    export type $FontOption_ = "uniform" | "jp";
    export class $FontOption$Filter {
        apply(options: $Set_<$FontOption_>): boolean;
        merge(filter: $FontOption$Filter): $FontOption$Filter;
        static CODEC: $Codec<$FontOption$Filter>;
        static ALWAYS_PASS: $FontOption$Filter;
        constructor(values: $Map_<$FontOption_, boolean>);
    }
    export class $GlyphRenderTypes extends $Record {
        seeThrough(): $RenderType;
        static createForColorTexture(id: $ResourceLocation_): $GlyphRenderTypes;
        static createForIntensityTexture(id: $ResourceLocation_): $GlyphRenderTypes;
        normal(): $RenderType;
        select(displayMode: $Font$DisplayMode_): $RenderType;
        polygonOffset(): $RenderType;
        constructor(arg0: $RenderType, arg1: $RenderType, arg2: $RenderType);
    }
    /**
     * Values that may be interpreted as {@link $GlyphRenderTypes}.
     */
    export type $GlyphRenderTypes_ = { polygonOffset?: $RenderType, seeThrough?: $RenderType, normal?: $RenderType,  } | [polygonOffset?: $RenderType, seeThrough?: $RenderType, normal?: $RenderType, ];
    export class $FontSet implements $AutoCloseable {
        getRandomGlyph(glyph: $GlyphInfo): $BakedGlyph;
        whiteGlyph(): $BakedGlyph;
        getGlyphInfo(character: number, filterFishyGlyphs: boolean): $GlyphInfo;
        getGlyph(character: number): $BakedGlyph;
        reload(allProviders: $List_<$GlyphProvider$Conditional_>, options: $Set_<$FontOption_>): void;
        reload(options: $Set_<$FontOption_>): void;
        name(): $ResourceLocation;
        close(): void;
        constructor(textureManager: $TextureManager, name: $ResourceLocation_);
    }
}
