import { $OptionValues } from "@package/net/irisshaders/iris/shaderpack/option/values";
import { $ShaderPackOptions, $ProfileSet } from "@package/net/irisshaders/iris/shaderpack/option";
import { $ShaderProperties } from "@package/net/irisshaders/iris/shaderpack/properties";
import { $List_, $Map, $List } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/net/irisshaders/iris/shaderpack/option/menu" {
    export class $OptionMenuOptionElement extends $OptionMenuElement {
        getAppliedOptionValues(): $OptionValues;
        getPendingOptionValues(): $OptionValues;
        container: $OptionMenuContainer;
        slider: boolean;
        optionId: string;
        static EMPTY: $OptionMenuElement;
        constructor(arg0: string, arg1: $OptionMenuContainer, arg2: $ShaderProperties, arg3: $OptionValues);
    }
    export class $OptionMenuElement {
        static create(arg0: string, arg1: $OptionMenuContainer, arg2: $ShaderProperties, arg3: $ShaderPackOptions): $OptionMenuElement;
        static EMPTY: $OptionMenuElement;
        constructor();
    }
    export class $OptionMenuContainer {
        getProfiles(): $ProfileSet;
        notifyOptionAdded(arg0: string, arg1: $OptionMenuOptionElement): void;
        euphoriaPatcher$getProfiles2(): $Object;
        euphoriaPatcher$setProfiles2(arg0: $Object): void;
        queueForUnusedOptionDump(arg0: number, arg1: $List_<$OptionMenuElement>): void;
        mainScreen: $OptionMenuElementScreen;
        subScreens: $Map<string, $OptionMenuElementScreen>;
        constructor(arg0: $ShaderProperties, arg1: $ShaderPackOptions, arg2: $ProfileSet);
    }
    export class $OptionMenuElementScreen {
        getColumnCount(): number;
        elements: $List<$OptionMenuElement>;
        constructor(arg0: $OptionMenuContainer, arg1: $ShaderProperties, arg2: $ShaderPackOptions, arg3: $List_<string>, arg4: (number) | undefined);
    }
}
