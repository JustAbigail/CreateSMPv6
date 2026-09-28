import { $OptionSet } from "@package/net/irisshaders/iris/shaderpack/option";
import { $OptionalBoolean } from "@package/net/irisshaders/iris/helpers";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/net/irisshaders/iris/shaderpack/option/values" {
    export class $OptionValues {
    }
    export interface $OptionValues {
        getBooleanValueOrDefault(arg0: string): boolean;
        getStringValueOrDefault(arg0: string): string;
        getOptionsChanged(): number;
        getStringValue(arg0: string): (string) | undefined;
        toImmutable(): $ImmutableOptionValues;
        getBooleanValue(arg0: string): $OptionalBoolean;
        getOptionSet(): $OptionSet;
        mutableCopy(): $MutableOptionValues;
    }
    export class $ImmutableOptionValues implements $OptionValues {
        getOptionsChanged(): number;
        getStringValue(arg0: string): (string) | undefined;
        toImmutable(): $ImmutableOptionValues;
        getBooleanValue(arg0: string): $OptionalBoolean;
        getOptionSet(): $OptionSet;
        mutableCopy(): $MutableOptionValues;
        getBooleanValueOrDefault(arg0: string): boolean;
        getStringValueOrDefault(arg0: string): string;
    }
    export class $MutableOptionValues implements $OptionValues {
        getOptionsChanged(): number;
        getStringValue(arg0: string): (string) | undefined;
        addAll(arg0: $Map_<string, string>): void;
        getOptions(): $OptionSet;
        toImmutable(): $ImmutableOptionValues;
        getBooleanValue(arg0: string): $OptionalBoolean;
        getOptionSet(): $OptionSet;
        mutableCopy(): $MutableOptionValues;
        getBooleanValues(): $Map<string, boolean>;
        getStringValues(): $Map<string, string>;
        getBooleanValueOrDefault(arg0: string): boolean;
        getStringValueOrDefault(arg0: string): string;
        constructor(arg0: $OptionSet, arg1: $Map_<string, string>);
    }
}
