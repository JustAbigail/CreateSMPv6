import { $Rectangle2D, $Point2D, $AffineTransform } from "@package/java/awt/geom";
import { $Shape, $Font, $Rectangle } from "@package/java/awt";
import { $Object, $Cloneable } from "@package/java/lang";

declare module "@package/java/awt/font" {
    export class $GlyphMetrics {
        getAdvance(): number;
        getBounds2D(): $Rectangle2D;
        isStandard(): boolean;
        getAdvanceX(): number;
        getAdvanceY(): number;
        getLSB(): number;
        getRSB(): number;
        isLigature(): boolean;
        isCombining(): boolean;
        isComponent(): boolean;
        isWhitespace(): boolean;
        getType(): number;
        static COMBINING: number;
        static WHITESPACE: number;
        static LIGATURE: number;
        static COMPONENT: number;
        static STANDARD: number;
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: $Rectangle2D, arg4: number);
        constructor(arg0: number, arg1: $Rectangle2D, arg2: number);
    }
    export class $FontRenderContext {
        isAntiAliased(): boolean;
        usesFractionalMetrics(): boolean;
        getTransformType(): number;
        getAntiAliasingHint(): $Object;
        getFractionalMetricsHint(): $Object;
        getTransform(): $AffineTransform;
        equals(arg0: $FontRenderContext): boolean;
        isTransformed(): boolean;
        constructor(arg0: $AffineTransform, arg1: boolean, arg2: boolean);
        constructor(arg0: $AffineTransform, arg1: $Object, arg2: $Object);
    }
    export class $GlyphVector implements $Cloneable {
        getOutline(arg0: number, arg1: number): $Shape;
        getOutline(): $Shape;
        getFontRenderContext(): $FontRenderContext;
        getGlyphCharIndex(arg0: number): number;
        getVisualBounds(): $Rectangle2D;
        getGlyphOutline(arg0: number, arg1: number, arg2: number): $Shape;
        getGlyphOutline(arg0: number): $Shape;
        getGlyphVisualBounds(arg0: number): $Shape;
        getNumGlyphs(): number;
        performDefaultLayout(): void;
        getGlyphCode(arg0: number): number;
        getGlyphCodes(arg0: number, arg1: number, arg2: number[]): number[];
        getGlyphCharIndices(arg0: number, arg1: number, arg2: number[]): number[];
        getLogicalBounds(): $Rectangle2D;
        getPixelBounds(arg0: $FontRenderContext, arg1: number, arg2: number): $Rectangle;
        getGlyphPosition(arg0: number): $Point2D;
        setGlyphPosition(arg0: number, arg1: $Point2D): void;
        getGlyphTransform(arg0: number): $AffineTransform;
        setGlyphTransform(arg0: number, arg1: $AffineTransform): void;
        getLayoutFlags(): number;
        getGlyphPositions(arg0: number, arg1: number, arg2: number[]): number[];
        getGlyphLogicalBounds(arg0: number): $Shape;
        getGlyphPixelBounds(arg0: number, arg1: $FontRenderContext, arg2: number, arg3: number): $Rectangle;
        getGlyphMetrics(arg0: number): $GlyphMetrics;
        getGlyphJustificationInfo(arg0: number): $GlyphJustificationInfo;
        equals(arg0: $GlyphVector): boolean;
        getFont(): $Font;
        static FLAG_HAS_TRANSFORMS: number;
        static FLAG_HAS_POSITION_ADJUSTMENTS: number;
        static FLAG_MASK: number;
        static FLAG_COMPLEX_GLYPHS: number;
        static FLAG_RUN_RTL: number;
    }
    export class $GlyphJustificationInfo {
        growRightLimit: number;
        static PRIORITY_WHITESPACE: number;
        shrinkLeftLimit: number;
        weight: number;
        shrinkRightLimit: number;
        shrinkAbsorb: boolean;
        growPriority: number;
        static PRIORITY_KASHIDA: number;
        growAbsorb: boolean;
        static PRIORITY_NONE: number;
        growLeftLimit: number;
        static PRIORITY_INTERCHAR: number;
        shrinkPriority: number;
        constructor(arg0: number, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: number, arg8: number);
    }
}
