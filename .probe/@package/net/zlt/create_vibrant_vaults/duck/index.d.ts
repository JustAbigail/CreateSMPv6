import { $ModBlocks$VibrantVaultColor, $ModBlocks$VibrantVaultColor_ } from "@package/net/zlt/create_vibrant_vaults/block";

declare module "@package/net/zlt/create_vibrant_vaults/duck" {
    export class $FactoryPanelBlockEntityMixinDuck {
    }
    export interface $FactoryPanelBlockEntityMixinDuck {
        createVibrantVaults$getRestockerColor(): $ModBlocks$VibrantVaultColor;
    }
    /**
     * Values that may be interpreted as {@link $FactoryPanelBlockEntityMixinDuck}.
     */
    export type $FactoryPanelBlockEntityMixinDuck_ = (() => $ModBlocks$VibrantVaultColor_);
}
