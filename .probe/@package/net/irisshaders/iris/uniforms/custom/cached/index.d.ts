import { $Type, $FunctionReturn, $FunctionContext } from "@package/kroppeb/stareval/function";
import { $Collection_ } from "@package/java/util";
import { $Expression, $VariableExpression, $VariableExpression_ } from "@package/kroppeb/stareval/expression";
import { $UniformUpdateFrequency, $UniformUpdateFrequency_ } from "@package/net/irisshaders/iris/gl/uniform";

declare module "@package/net/irisshaders/iris/uniforms/custom/cached" {
    export class $CachedUniform implements $VariableExpression {
        evaluateTo(arg0: $FunctionContext, arg1: $FunctionReturn): void;
        markUnchanged(): void;
        getUpdateFrequency(): $UniformUpdateFrequency;
        static forExpression(arg0: string, arg1: $Type, arg2: $Expression, arg3: $FunctionContext): $CachedUniform;
        pushIfChanged(arg0: number): void;
        push(arg0: number): void;
        writeTo(arg0: $FunctionReturn): void;
        getName(): string;
        update(): void;
        getType(): $Type;
        listVariables(arg0: $Collection_<$VariableExpression_>): void;
        partialEval(arg0: $FunctionContext, arg1: $FunctionReturn): $Expression;
        constructor(arg0: string, arg1: $UniformUpdateFrequency_);
        get updateFrequency(): $UniformUpdateFrequency;
        get name(): string;
        get type(): $Type;
    }
}
