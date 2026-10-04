import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/claims/player/api" {
    export class $IPlayerDimensionClaimsAPI {
    }
    export interface $IPlayerDimensionClaimsAPI {
        getStream(): $Stream<$IPlayerClaimPosListAPI>;
        get stream(): $Stream<$IPlayerClaimPosListAPI>;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerDimensionClaimsAPI}.
     */
    export type $IPlayerDimensionClaimsAPI_ = (() => $Stream<$IPlayerClaimPosListAPI>);
    export class $IPlayerChunkClaimAPI {
    }
    export interface $IPlayerChunkClaimAPI {
        getSubConfigIndex(): number;
        isForceloadable(): boolean;
        isSameClaimType(arg0: $IPlayerChunkClaimAPI | null): boolean;
        getPlayerId(): $UUID;
        get subConfigIndex(): number;
        get forceloadable(): boolean;
        get playerId(): $UUID;
    }
    export class $IPlayerClaimInfoAPI {
    }
    export interface $IPlayerClaimInfoAPI {
        getClaimsColor(): number;
        getClaimsColor(arg0: number): number;
        isPartyOwned(): boolean;
        getClaimCount(): number;
        getForceloadCount(): number;
        getClaimsName(arg0: number): string;
        getClaimsName(): string;
        getPlayerUsername(): string;
        getPlayerId(): $UUID;
        getDimension(arg0: $ResourceLocation_): $IPlayerDimensionClaimsAPI;
        get partyOwned(): boolean;
        get claimCount(): number;
        get forceloadCount(): number;
        get playerUsername(): string;
        get playerId(): $UUID;
    }
}
