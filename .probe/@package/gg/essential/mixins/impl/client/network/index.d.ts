import { $EquippedOutfitsManager } from "@package/gg/essential/network/connectionmanager/cosmetics";

declare module "@package/gg/essential/mixins/impl/client/network" {
    export class $NetworkPlayerInfoExt {
    }
    export interface $NetworkPlayerInfoExt {
        getEssential$equippedOutfitsManager(): $EquippedOutfitsManager;
        setEssential$equippedOutfitsManager(arg0: $EquippedOutfitsManager): void;
    }
}
