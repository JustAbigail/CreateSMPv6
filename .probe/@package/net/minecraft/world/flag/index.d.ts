import { $Registry } from "@package/net/minecraft/core";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Set, $Collection_ } from "@package/java/util";

declare module "@package/net/minecraft/world/flag" {
    export class $FeatureFlagUniverse {
        constructor(id: string);
    }
    export class $FeatureFlag {
        isModded(): boolean;
        extMaskIndex: number;
        universe: $FeatureFlagUniverse;
        modded: boolean;
        mask: number;
        constructor(arg0: $FeatureFlagUniverse, arg1: number, arg2: number, arg3: boolean);
        /**
         * @deprecated
         */
        constructor(universe: $FeatureFlagUniverse, maskBit: number);
    }
    export class $FeatureElement {
        static FILTERED_REGISTRIES: $Set<$ResourceKey<$Registry<$FeatureElement>>>;
    }
    export interface $FeatureElement {
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        requiredFeatures(): $FeatureFlagSet;
    }
    /**
     * Values that may be interpreted as {@link $FeatureElement}.
     */
    export type $FeatureElement_ = (() => $FeatureFlagSet);
    export class $FeatureFlagSet {
        subtract(other: $FeatureFlagSet): $FeatureFlagSet;
        intersects(set: $FeatureFlagSet): boolean;
        isEmpty(): boolean;
        join(other: $FeatureFlagSet): $FeatureFlagSet;
        static of(flag: $FeatureFlag, ...others: $FeatureFlag[]): $FeatureFlagSet;
        static of(): $FeatureFlagSet;
        static of(flag: $FeatureFlag): $FeatureFlagSet;
        contains(flag: $FeatureFlag): boolean;
        static create(universe: $FeatureFlagUniverse, flags: $Collection_<$FeatureFlag>): $FeatureFlagSet;
        isSubsetOf(set: $FeatureFlagSet): boolean;
        static MAX_CONTAINER_SIZE: number;
        get empty(): boolean;
    }
}
