import { $Enum, $Record } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/net/irisshaders/iris/shaderpack/materialmap" {
    export class $TagEntry extends $Record implements $Entry {
        propertyPredicates(): $Map<string, string>;
        id(): $NamespacedId;
        constructor(id: $NamespacedId, propertyPredicates: $Map_<string, string>);
    }
    /**
     * Values that may be interpreted as {@link $TagEntry}.
     */
    export type $TagEntry_ = { id?: $NamespacedId, propertyPredicates?: $Map_<string, string>,  } | [id?: $NamespacedId, propertyPredicates?: $Map_<string, string>, ];
    export class $BlockEntry extends $Record implements $Entry {
        propertyPredicates(): $Map<string, string>;
        id(): $NamespacedId;
        static parse(arg0: string): $Entry;
        constructor(id: $NamespacedId, propertyPredicates: $Map_<string, string>);
    }
    /**
     * Values that may be interpreted as {@link $BlockEntry}.
     */
    export type $BlockEntry_ = { id?: $NamespacedId, propertyPredicates?: $Map_<string, string>,  } | [id?: $NamespacedId, propertyPredicates?: $Map_<string, string>, ];
    export class $BlockRenderType extends $Enum<$BlockRenderType> {
        static values(): $BlockRenderType[];
        static valueOf(arg0: string): $BlockRenderType;
        static fromString(arg0: string): ($BlockRenderType) | undefined;
        static CUTOUT: $BlockRenderType;
        static TRANSLUCENT: $BlockRenderType;
        static CUTOUT_MIPPED: $BlockRenderType;
        static SOLID: $BlockRenderType;
    }
    /**
     * Values that may be interpreted as {@link $BlockRenderType}.
     */
    export type $BlockRenderType_ = "solid" | "cutout" | "cutout_mipped" | "translucent";
    export class $Entry {
    }
    export interface $Entry {
    }
    export class $NamespacedId {
        getNamespace(): string;
        getName(): string;
        constructor(arg0: string);
        constructor(arg0: string, arg1: string);
        get namespace(): string;
        get name(): string;
    }
}
