import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $SuggestionProvider_, $SuggestionProvider } from "@package/com/mojang/brigadier/suggestion";
import { $Command_, $SingleRedirectModifier_, $Command, $RedirectModifier, $RedirectModifier_ } from "@package/com/mojang/brigadier";
import { $Collection } from "@package/java/util";
import { $ArgumentCommandNode, $CommandNode } from "@package/com/mojang/brigadier/tree";
import { $ArgumentType_, $ArgumentType } from "@package/com/mojang/brigadier/arguments";

declare module "@package/com/mojang/brigadier/builder" {
    export class $LiteralArgumentBuilder<S> extends $ArgumentBuilder<S, $LiteralArgumentBuilder<S>> {
        static literal<S>(arg0: string): $LiteralArgumentBuilder<S>;
        getLiteral(): string;
    }
    export class $RequiredArgumentBuilder<S, T> extends $ArgumentBuilder<S, $RequiredArgumentBuilder<S, T>> {
        suggests(arg0: $SuggestionProvider_<S>): $RequiredArgumentBuilder<S, $RequiredArgumentBuilder<S, T>>;
        getSuggestionsProvider(): $SuggestionProvider<S>;
        getName(): string;
        getType(): $ArgumentType<$RequiredArgumentBuilder<S, T>>;
        static argument<S, T>(arg0: string, arg1: $ArgumentType_<T>): $RequiredArgumentBuilder<S, T>;
        build(): $ArgumentCommandNode<S, $RequiredArgumentBuilder<S, T>>;
        get suggestionsProvider(): $SuggestionProvider<S>;
        get name(): string;
        get type(): $ArgumentType<$RequiredArgumentBuilder<S, T>>;
    }
    export class $ArgumentBuilder<S, T extends $ArgumentBuilder<S, T>> {
        executes(arg0: $Command_<S>): T;
        getRequirement(): $Predicate<S>;
        getRedirectModifier(): $RedirectModifier<S>;
        isFork(): boolean;
        then(arg0: $ArgumentBuilder<S, never>): T;
        then(arg0: $CommandNode<S>): T;
        getCommand(): $Command<S>;
        getRedirect(): $CommandNode<S>;
        fork(arg0: $CommandNode<S>, arg1: $RedirectModifier_<S>): T;
        redirect(arg0: $CommandNode<S>): T;
        redirect(arg0: $CommandNode<S>, arg1: $SingleRedirectModifier_<S>): T;
        build(): $CommandNode<S>;
        requires(arg0: $Predicate_<S>): T;
        getArguments(): $Collection<$CommandNode<S>>;
        forward(arg0: $CommandNode<S>, arg1: $RedirectModifier_<S>, arg2: boolean): T;
        constructor();
        get requirement(): $Predicate<S>;
        get redirectModifier(): $RedirectModifier<S>;
        get command(): $Command<S>;
        get arguments(): $Collection<$CommandNode<S>>;
    }
}
