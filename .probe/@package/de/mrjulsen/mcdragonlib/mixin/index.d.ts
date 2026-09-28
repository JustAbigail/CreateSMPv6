import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $FocusNavigationEvent$TabNavigation, $FocusNavigationEvent$ArrowNavigation, $ScreenDirection_ } from "@package/net/minecraft/client/gui/navigation";
import { $UnbakedModel } from "@package/net/minecraft/client/resources/model";
import { $BakedGlyph } from "@package/net/minecraft/client/gui/font/glyphs";
import { $StringSplitter, $StringSplitter$WidthProvider } from "@package/net/minecraft/client";
import { $FontSet } from "@package/net/minecraft/client/gui/font";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/de/mrjulsen/mcdragonlib/mixin" {
    export class $StringSplitterAccessor {
    }
    export interface $StringSplitterAccessor {
        dragonlib$getWidthProvider(): $StringSplitter$WidthProvider;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitterAccessor}.
     */
    export type $StringSplitterAccessor_ = (() => $StringSplitter$WidthProvider);
    export class $AbstractWidgetAccessor {
    }
    export interface $AbstractWidgetAccessor {
        dragonlib$setHeight(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $AbstractWidgetAccessor}.
     */
    export type $AbstractWidgetAccessor_ = ((arg0: number) => void);
    export class $BakedGlyphAccessor {
    }
    export interface $BakedGlyphAccessor {
        dragonlib$setU0(arg0: number): void;
        dragonlib$getU0(): number;
        dragonlib$setU1(arg0: number): void;
        dragonlib$getU1(): number;
        dragonlib$setV0(arg0: number): void;
        dragonlib$getV0(): number;
        dragonlib$setV1(arg0: number): void;
        dragonlib$getV1(): number;
    }
    export class $ScreenAccessor {
    }
    export interface $ScreenAccessor {
        dragonlib$createTabEvent(): $FocusNavigationEvent$TabNavigation;
        dragonlib$createArrowEvent(arg0: $ScreenDirection_): $FocusNavigationEvent$ArrowNavigation;
        dragonlib$clearFocus(): void;
    }
    export class $FontAccessor {
    }
    export interface $FontAccessor {
        dragonlib$invokeGetFontSet(arg0: $ResourceLocation_): $FontSet;
        dragonlib$getSplitter(): $StringSplitter;
        dragonlib$filterFishyGlyphs(): boolean;
        dragonlib$renderChar(arg0: $BakedGlyph, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: $Matrix4f, arg7: $VertexConsumer, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
    }
    export class $ModelBakeryAccessor {
    }
    export interface $ModelBakeryAccessor {
        dragonlib$getModel(arg0: $ResourceLocation_): $UnbakedModel;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakeryAccessor}.
     */
    export type $ModelBakeryAccessor_ = ((arg0: $ResourceLocation) => $UnbakedModel);
}
