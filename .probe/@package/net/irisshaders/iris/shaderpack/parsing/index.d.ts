import { $FloatConsumer_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $Consumer_, $IntConsumer_ } from "@package/java/util/function";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Runnable_ } from "@package/java/lang";
import { $Vector4f, $Vector2f, $Vector3i } from "@package/org/joml";

declare module "@package/net/irisshaders/iris/shaderpack/parsing" {
    export class $DirectiveHolder {
    }
    export interface $DirectiveHolder {
        acceptCommentStringDirective(arg0: string, arg1: $Consumer_<string>): void;
        acceptUniformDirective(arg0: string, arg1: $Runnable_): void;
        acceptCommentIntDirective(arg0: string, arg1: $IntConsumer_): void;
        acceptConstStringDirective(arg0: string, arg1: $Consumer_<string>): void;
        acceptCommentFloatDirective(arg0: string, arg1: $FloatConsumer_): void;
        acceptConstBooleanDirective(arg0: string, arg1: $BooleanConsumer_): void;
        acceptConstIntDirective(arg0: string, arg1: $IntConsumer_): void;
        acceptConstFloatDirective(arg0: string, arg1: $FloatConsumer_): void;
        acceptConstVec2Directive(arg0: string, arg1: $Consumer_<$Vector2f>): void;
        acceptConstIVec3Directive(arg0: string, arg1: $Consumer_<$Vector3i>): void;
        acceptConstVec4Directive(arg0: string, arg1: $Consumer_<$Vector4f>): void;
    }
}
