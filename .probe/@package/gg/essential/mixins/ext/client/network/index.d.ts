import { $IngameEquippedOutfitsUpdateEncoder, $IngameEquippedOutfitsManager } from "@package/gg/essential/cosmetics";
import { $Map, $UUID } from "@package/java/util";

declare module "@package/gg/essential/mixins/ext/client/network" {
    export class $NetHandlerPlayClientExt {
    }
    export interface $NetHandlerPlayClientExt {
        getEssential$maxPlayers(): number;
        getEssential$ingameEquippedOutfitsManager(): $IngameEquippedOutfitsManager;
        getEssential$ingameEquippedOutfitsUpdateEncoder(): $IngameEquippedOutfitsUpdateEncoder;
        essential$getNameIdCache(): $Map<string, $UUID>;
    }
}
