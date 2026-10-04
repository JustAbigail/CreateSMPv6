import { $Enum, $Record } from "@package/java/lang";

declare module "@package/net/irisshaders/iris/gl/blending" {
    export class $AlphaTest extends $Record {
        toExpression(arg0: string, arg1: string, arg2: string): string;
        toExpression(arg0: string): string;
        "function"(): $AlphaTestFunction;
        reference(): number;
        static ALWAYS: $AlphaTest;
        constructor(arg0: $AlphaTestFunction_, reference: number);
    }
    /**
     * Values that may be interpreted as {@link $AlphaTest}.
     */
    export type $AlphaTest_ = { reference?: number, function?: $AlphaTestFunction_,  } | [reference?: number, function?: $AlphaTestFunction_, ];
    export class $BlendModeOverride {
        static restore(): void;
        apply(): void;
        static OFF: $BlendModeOverride;
        constructor(arg0: $BlendMode_);
    }
    export class $BufferBlendInformation extends $Record {
        blendMode(): $BlendMode;
        index(): number;
        constructor(index: number, blendMode: $BlendMode_);
    }
    /**
     * Values that may be interpreted as {@link $BufferBlendInformation}.
     */
    export type $BufferBlendInformation_ = { index?: number, blendMode?: $BlendMode_,  } | [index?: number, blendMode?: $BlendMode_, ];
    export class $AlphaTestFunction extends $Enum<$AlphaTestFunction> {
        getGlId(): number;
        static fromGlId(arg0: number): ($AlphaTestFunction) | undefined;
        static values(): $AlphaTestFunction[];
        static valueOf(arg0: string): $AlphaTestFunction;
        static fromString(arg0: string): ($AlphaTestFunction) | undefined;
        getExpression(): string;
        static NOTEQUAL: $AlphaTestFunction;
        static EQUAL: $AlphaTestFunction;
        static NEVER: $AlphaTestFunction;
        static GEQUAL: $AlphaTestFunction;
        static GREATER: $AlphaTestFunction;
        static LESS: $AlphaTestFunction;
        static LEQUAL: $AlphaTestFunction;
        static ALWAYS: $AlphaTestFunction;
        get glId(): number;
        get expression(): string;
    }
    /**
     * Values that may be interpreted as {@link $AlphaTestFunction}.
     */
    export type $AlphaTestFunction_ = "never" | "less" | "equal" | "lequal" | "greater" | "notequal" | "gequal" | "always";
    export class $BlendMode extends $Record {
        srcRgb(): number;
        dstRgb(): number;
        srcAlpha(): number;
        dstAlpha(): number;
        constructor(srcRgb: number, dstRgb: number, srcAlpha: number, dstAlpha: number);
    }
    /**
     * Values that may be interpreted as {@link $BlendMode}.
     */
    export type $BlendMode_ = { srcAlpha?: number, srcRgb?: number, dstAlpha?: number, dstRgb?: number,  } | [srcAlpha?: number, srcRgb?: number, dstAlpha?: number, dstRgb?: number, ];
}
