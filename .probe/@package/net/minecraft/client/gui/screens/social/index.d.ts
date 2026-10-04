import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $Minecraft } from "@package/net/minecraft/client";
import { $UUID_, $Set, $UUID } from "@package/java/util";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";

declare module "@package/net/minecraft/client/gui/screens/social" {
    export class $PlayerSocialManager {
        getHiddenPlayers(): $Set<$UUID>;
        hidePlayer(id: $UUID_): void;
        showPlayer(id: $UUID_): void;
        getDiscoveredUUID(uuid: string): $UUID;
        removePlayer(id: $UUID_): void;
        addPlayer(playerInfo: $PlayerInfo): void;
        isHidden(id: $UUID_): boolean;
        stopOnlineMode(): void;
        isBlocked(id: $UUID_): boolean;
        shouldHideMessageFrom(id: $UUID_): boolean;
        startOnlineMode(): void;
        constructor(minecraft: $Minecraft, service: $UserApiService);
        get hiddenPlayers(): $Set<$UUID>;
    }
}
