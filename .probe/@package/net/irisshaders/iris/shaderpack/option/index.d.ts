import { $BiConsumer_ } from "@package/java/util/function";
import { $OptionValues } from "@package/net/irisshaders/iris/shaderpack/option/values";
import { $AbsolutePackPath, $IncludeGraph } from "@package/net/irisshaders/iris/shaderpack/include";
import { $ImmutableList, $ImmutableMap, $ImmutableSet } from "@package/com/google/common/collect";
import { $Record } from "@package/java/lang";
import { $List, $LinkedHashMap, $Map_, $Map, $List_ } from "@package/java/util";
export * as values from "@package/net/irisshaders/iris/shaderpack/option/values";
export * as menu from "@package/net/irisshaders/iris/shaderpack/option/menu";

declare module "@package/net/irisshaders/iris/shaderpack/option" {
    export class $ProfileSet {
        static fromTree(arg0: $Map_<string, $List_<string>>, arg1: $OptionSet): $ProfileSet;
        size(): number;
        forEach(arg0: $BiConsumer_<string, $Profile>): void;
        scan(arg0: $OptionSet, arg1: $OptionValues): $ProfileSet$ProfileResult;
        constructor(arg0: $LinkedHashMap<string, $Profile>);
    }
    export class $ProfileSet$ProfileResult {
        next: $Profile;
        current: ($Profile) | undefined;
        previous: $Profile;
    }
    export class $Profile {
        matches(arg0: $OptionSet, arg1: $OptionValues): boolean;
        name: string;
        disabledPrograms: $List<string>;
        precedence: number;
        optionValues: $Map<string, string>;
    }
    export class $MergedStringOption {
        getLocations(): $ImmutableSet<$OptionLocation>;
        getOption(): $StringOption;
        merge(arg0: $MergedStringOption): $MergedStringOption;
        constructor(arg0: $OptionLocation_, arg1: $StringOption);
    }
    export class $BooleanOption extends $BaseOption {
        getDefaultValue(): boolean;
        constructor(arg0: $OptionType, arg1: string, arg2: string, arg3: boolean);
    }
    export class $MergedBooleanOption {
        getLocations(): $ImmutableSet<$OptionLocation>;
        getOption(): $BooleanOption;
        merge(arg0: $MergedBooleanOption): $MergedBooleanOption;
        constructor(arg0: $OptionLocation_, arg1: $BooleanOption);
    }
    export class $StringOption extends $BaseOption {
        getDefaultValue(): string;
        static create(arg0: $OptionType, arg1: string, arg2: string, arg3: string): $StringOption;
        getAllowedValues(): $ImmutableList<string>;
    }
    export class $OptionLocation extends $Record {
        lineIndex(): number;
        filePath(): $AbsolutePackPath;
        constructor(filePath: $AbsolutePackPath, lineIndex: number);
    }
    /**
     * Values that may be interpreted as {@link $OptionLocation}.
     */
    export type $OptionLocation_ = { filePath?: $AbsolutePackPath, lineIndex?: number,  } | [filePath?: $AbsolutePackPath, lineIndex?: number, ];
    export class $ShaderPackOptions {
        getIncludes(): $IncludeGraph;
        getOptionSet(): $OptionSet;
        getOptionValues(): $OptionValues;
        constructor(arg0: $IncludeGraph, arg1: $Map_<string, string>);
    }
    export class $OptionSet$Builder {
        addStringOption(arg0: $OptionLocation_, arg1: $StringOption): void;
        addStringOption(arg0: $MergedStringOption): void;
        addBooleanOption(arg0: $MergedBooleanOption): void;
        addBooleanOption(arg0: $OptionLocation_, arg1: $BooleanOption): void;
        addAll(arg0: $OptionSet): void;
        build(): $OptionSet;
        constructor();
    }
    export class $OptionSet {
        isBooleanOption(arg0: string): boolean;
        static builder(): $OptionSet$Builder;
        getStringOptions(): $ImmutableMap<string, $MergedStringOption>;
        getBooleanOptions(): $ImmutableMap<string, $MergedBooleanOption>;
    }
}
