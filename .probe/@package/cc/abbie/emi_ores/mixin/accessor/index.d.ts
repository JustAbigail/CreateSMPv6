import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $IntProvider_, $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SimpleWeightedRandomList } from "@package/net/minecraft/util/random";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $List, $List_ } from "@package/java/util";
import { $VerticalAnchor } from "@package/net/minecraft/world/level/levelgen";
import { $HeightProvider } from "@package/net/minecraft/world/level/levelgen/heightproviders";

declare module "@package/cc/abbie/emi_ores/mixin/accessor" {
    export class $RandomBlockMatchTestAccessor {
    }
    export interface $RandomBlockMatchTestAccessor {
        getProbability(): number;
        getBlock(): $Block;
    }
    export class $RandomBlockStateMatchTestAccessor {
    }
    export interface $RandomBlockStateMatchTestAccessor {
        getProbability(): number;
        getBlockState(): $BlockState;
    }
    export class $TrapezoidHeightAccessor {
    }
    export interface $TrapezoidHeightAccessor {
        getMaxInclusive(): $VerticalAnchor;
        getMinInclusive(): $VerticalAnchor;
        getPlateau(): number;
    }
    export class $SimpleStateProviderAccessor {
    }
    export interface $SimpleStateProviderAccessor {
        getState(): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $SimpleStateProviderAccessor}.
     */
    export type $SimpleStateProviderAccessor_ = (() => $BlockState_);
    export class $UniformHeightAccessor {
    }
    export interface $UniformHeightAccessor {
        getMaxInclusive(): $VerticalAnchor;
        getMinInclusive(): $VerticalAnchor;
    }
    export class $NoiseProviderAccessor {
    }
    export interface $NoiseProviderAccessor {
        getStates(): $List<$BlockState>;
    }
    /**
     * Values that may be interpreted as {@link $NoiseProviderAccessor}.
     */
    export type $NoiseProviderAccessor_ = (() => $List_<$BlockState_>);
    export class $WeightedStateProviderAccessor {
    }
    export interface $WeightedStateProviderAccessor {
        getWeightedList(): $SimpleWeightedRandomList<$BlockState>;
    }
    /**
     * Values that may be interpreted as {@link $WeightedStateProviderAccessor}.
     */
    export type $WeightedStateProviderAccessor_ = (() => $SimpleWeightedRandomList<$BlockState_>);
    export class $HeightRangePlacementAccessor {
    }
    export interface $HeightRangePlacementAccessor {
        getHeight(): $HeightProvider;
    }
    /**
     * Values that may be interpreted as {@link $HeightRangePlacementAccessor}.
     */
    export type $HeightRangePlacementAccessor_ = (() => $HeightProvider);
    export class $BlockStateMatchTestAccessor {
    }
    export interface $BlockStateMatchTestAccessor {
        getBlockState(): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $BlockStateMatchTestAccessor}.
     */
    export type $BlockStateMatchTestAccessor_ = (() => $BlockState_);
    export class $RarityFilterAccessor {
    }
    export interface $RarityFilterAccessor {
        getChance(): number;
    }
    /**
     * Values that may be interpreted as {@link $RarityFilterAccessor}.
     */
    export type $RarityFilterAccessor_ = (() => number);
    export class $TagMatchTestAccessor {
    }
    export interface $TagMatchTestAccessor {
        getTag(): $TagKey<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $TagMatchTestAccessor}.
     */
    export type $TagMatchTestAccessor_ = (() => $TagKey_<$Block>);
    export class $CountPlacementAccessor {
    }
    export interface $CountPlacementAccessor {
        getCount(): $IntProvider;
    }
    /**
     * Values that may be interpreted as {@link $CountPlacementAccessor}.
     */
    export type $CountPlacementAccessor_ = (() => $IntProvider_);
    export class $BlockMatchTestAccessor {
    }
    export interface $BlockMatchTestAccessor {
        getBlock(): $Block;
    }
    /**
     * Values that may be interpreted as {@link $BlockMatchTestAccessor}.
     */
    export type $BlockMatchTestAccessor_ = (() => $Block_);
}
