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
        mutableCopy(): $MutableOptionValues;
        getOptionSet(): $OptionSet;
        get optionsChanged(): number;
        get optionSet(): $OptionSet;
    }
    export class $ImmutableOptionValues implements $OptionValues {
        getOptionsChanged(): number;
        getStringValue(arg0: string): (string) | undefined;
        toImmutable(): $ImmutableOptionValues;
        getBooleanValue(arg0: string): $OptionalBoolean;
        mutableCopy(): $MutableOptionValues;
        getOptionSet(): $OptionSet;
        getBooleanValueOrDefault(arg0: string): boolean;
        getStringValueOrDefault(arg0: string): string;
        get optionsChanged(): number;
        get optionSet(): $OptionSet;
    }
    export class $MutableOptionValues implements $OptionValues {
        getOptionsChanged(): number;
        getStringValue(arg0: string): (string) | undefined;
        addAll(arg0: $Map_<string, string>): void;
        getOptions(): $OptionSet;
        toImmutable(): $ImmutableOptionValues;
        getBooleanValue(arg0: string): $OptionalBoolean;
        mutableCopy(): $MutableOptionValues;
        getBooleanValues(): $Map<string, boolean>;
        getStringValues(): $Map<string, string>;
        getOptionSet(): $OptionSet;
        getBooleanValueOrDefault(arg0: string): boolean;
        getStringValueOrDefault(arg0: string): string;
        constructor(arg0: $OptionSet, arg1: $Map_<string, string>);
        get optionsChanged(): number;
        get options(): $OptionSet;
        get booleanValues(): $Map<string, boolean>;
        get stringValues(): $Map<string, string>;
        get optionSet(): $OptionSet;
    }
}
