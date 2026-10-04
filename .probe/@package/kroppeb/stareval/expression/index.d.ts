import { $Type, $FunctionReturn, $FunctionContext } from "@package/kroppeb/stareval/function";
import { $Collection_ } from "@package/java/util";

declare module "@package/kroppeb/stareval/expression" {
    export class $VariableExpression {
    }
    export interface $VariableExpression extends $Expression {
        listVariables(arg0: $Collection_<$VariableExpression_>): void;
    }
    /**
     * Values that may be interpreted as {@link $VariableExpression}.
     */
    export type $VariableExpression_ = (() => void);
    export class $Expression {
    }
    export interface $Expression {
        evaluateTo(arg0: $FunctionContext, arg1: $FunctionReturn): void;
        partialEval(arg0: $FunctionContext, arg1: $FunctionReturn): $Expression;
        listVariables(arg0: $Collection_<$VariableExpression_>): void;
    }
    export class $ConstantExpression implements $Expression {
        listVariables(arg0: $Collection_<$VariableExpression_>): void;
        getType(): $Type;
        partialEval(arg0: $FunctionContext, arg1: $FunctionReturn): $Expression;
        get type(): $Type;
    }
}
