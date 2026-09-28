import { $CachedUniform } from "@package/net/irisshaders/iris/uniforms/custom/cached";
import { $Consumer_ } from "@package/java/util/function";
import { $Type, $FunctionContext } from "@package/kroppeb/stareval/function";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $Collection } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $Expression } from "@package/kroppeb/stareval/expression";
import { $UniformHolder, $LocationalUniformHolder } from "@package/net/irisshaders/iris/gl/uniform";
export * as cached from "@package/net/irisshaders/iris/uniforms/custom/cached";

declare module "@package/net/irisshaders/iris/uniforms/custom" {
    export class $CustomUniforms$Builder {
        addVariable(arg0: string, arg1: string, arg2: string, arg3: boolean): void;
        build(...arg0: $Consumer_<$UniformHolder>[]): $CustomUniforms;
        build(arg0: $CustomUniformFixedInputUniformsHolder): $CustomUniforms;
        constructor();
    }
    export class $CustomUniforms implements $FunctionContext {
        optimise(): void;
        assignTo(arg0: $LocationalUniformHolder): void;
        mapholderToPass(arg0: $LocationalUniformHolder, arg1: $Object): void;
        hasVariable(arg0: string): boolean;
        push(arg0: $Object): void;
        update(): void;
        getVariable(arg0: string): $Expression;
    }
    export class $CustomUniformFixedInputUniformsHolder {
        updateAll(): void;
        getAll(): $Collection<$CachedUniform>;
        containsKey(arg0: string): boolean;
        getType(arg0: string): $Type;
        getUniform(arg0: string): $CachedUniform;
        constructor(arg0: $ImmutableMap<string, $CachedUniform>);
    }
}
