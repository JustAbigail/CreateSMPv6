import { $Object } from "@package/java/lang";
import { $Expression, $ConstantExpression } from "@package/kroppeb/stareval/expression";
import { $UniformType } from "@package/net/irisshaders/iris/gl/uniform";

declare module "@package/kroppeb/stareval/function" {
    export class $Type$Boolean extends $Type$Primitive {
        static Float: $Type$Float;
        static Boolean: $Type$Boolean;
        static BooleanParameter: $TypedFunction$Parameter;
        static Int: $Type$Int;
        static IntParameter: $TypedFunction$Parameter;
        static FloatParameter: $TypedFunction$Parameter;
        static AllPrimitives: $Type$Primitive[];
        constructor();
    }
    export class $Type$Int extends $Type$Primitive {
        static Float: $Type$Float;
        static Boolean: $Type$Boolean;
        static BooleanParameter: $TypedFunction$Parameter;
        static Int: $Type$Int;
        static IntParameter: $TypedFunction$Parameter;
        static FloatParameter: $TypedFunction$Parameter;
        static AllPrimitives: $Type$Primitive[];
        constructor();
    }
    export class $FunctionReturn {
        longReturn: number;
        floatReturn: number;
        shortReturn: number;
        intReturn: number;
        doubleReturn: number;
        objectReturn: $Object;
        booleanReturn: boolean;
        byteReturn: number;
        constructor();
    }
    export class $Type$Float extends $Type$Primitive {
        static Float: $Type$Float;
        static Boolean: $Type$Boolean;
        static BooleanParameter: $TypedFunction$Parameter;
        static Int: $Type$Int;
        static IntParameter: $TypedFunction$Parameter;
        static FloatParameter: $TypedFunction$Parameter;
        static AllPrimitives: $Type$Primitive[];
        constructor();
    }
    export class $Type$Primitive extends $Type {
        static Float: $Type$Float;
        static Boolean: $Type$Boolean;
        static BooleanParameter: $TypedFunction$Parameter;
        static Int: $Type$Int;
        static IntParameter: $TypedFunction$Parameter;
        static FloatParameter: $TypedFunction$Parameter;
        static AllPrimitives: $Type$Primitive[];
        constructor();
    }
    export class $FunctionContext {
    }
    export interface $FunctionContext {
        hasVariable(arg0: string): boolean;
        getVariable(arg0: string): $Expression;
    }
    export class $TypedFunction$Parameter {
        type(): $Type;
        constant(): boolean;
        constructor(arg0: $Type, arg1: boolean);
        constructor(arg0: $Type);
    }
    export class $Type {
        createArray(arg0: number): $Object;
        setValueFromReturn(arg0: $Object, arg1: number, arg2: $FunctionReturn): void;
        getValueFromArray(arg0: $Object, arg1: number, arg2: $FunctionReturn): void;
        static convert(arg0: $Type): $UniformType;
        createConstant(arg0: $FunctionReturn): $ConstantExpression;
        static Float: $Type$Float;
        static Boolean: $Type$Boolean;
        static BooleanParameter: $TypedFunction$Parameter;
        static Int: $Type$Int;
        static IntParameter: $TypedFunction$Parameter;
        static FloatParameter: $TypedFunction$Parameter;
        static AllPrimitives: $Type$Primitive[];
        constructor();
    }
}
