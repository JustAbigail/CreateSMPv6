import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ReverseRenderableBakedGlyph } from "@package/com/kipti/bnb/mixin_accessor";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $GlyphRenderTypes_ } from "@package/net/minecraft/client/gui/font";
import { $Font$DisplayMode_ } from "@package/net/minecraft/client/gui";
import { $BakedGlyphAccessor } from "@package/de/mrjulsen/mcdragonlib/mixin";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/minecraft/client/gui/font/glyphs" {
    export class $BakedGlyph$Effect {
        a: number;
        r: number;
        b: number;
        depth: number;
        y0: number;
        g: number;
        x0: number;
        y1: number;
        x1: number;
        constructor(x0: number, y0: number, x1: number, y1: number, depth: number, r: number, g: number, b: number, a: number);
    }
    export class $BakedGlyph implements $ReverseRenderableBakedGlyph, $BakedGlyphAccessor {
        renderEffect(effect: $BakedGlyph$Effect, matrix: $Matrix4f, buffer: $VertexConsumer, packedLight: number): void;
        bits_n_bobs$renderReverse(italic: boolean, x: number, y: number, matrix: $Matrix4f, buffer: $VertexConsumer, red: number, green: number, blue: number, alpha: number, packedLight: number): void;
        renderType(displayMode: $Font$DisplayMode_): $RenderType;
        render(italic: boolean, x: number, y: number, matrix: $Matrix4f, buffer: $VertexConsumer, red: number, green: number, blue: number, alpha: number, packedLight: number): void;
        dragonlib$setU0(arg0: number): void;
        dragonlib$getU0(): number;
        dragonlib$setU1(arg0: number): void;
        dragonlib$getU1(): number;
        dragonlib$setV0(arg0: number): void;
        dragonlib$getV0(): number;
        dragonlib$setV1(arg0: number): void;
        dragonlib$getV1(): number;
        constructor(renderTypes: $GlyphRenderTypes_, u0: number, u1: number, v0: number, v1: number, left: number, right: number, up: number, down: number);
    }
}
