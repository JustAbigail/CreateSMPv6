import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/claims/player/api" {
    export class $IPlayerDimensionClaimsAPI {
    }
    export interface $IPlayerDimensionClaimsAPI {
        getStream(): $Stream<$IPlayerClaimPosListAPI>;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerDimensionClaimsAPI}.
     */
    export type $IPlayerDimensionClaimsAPI_ = (() => $Stream<$IPlayerClaimPosListAPI>);
    export class $IPlayerChunkClaimAPI {
    }
    export interface $IPlayerChunkClaimAPI {
        getPlayerId(): $UUID;
        isSameClaimType(arg0: $IPlayerChunkClaimAPI | null): boolean;
        isForceloadable(): boolean;
        getSubConfigIndex(): number;
    }
    export class $IPlayerClaimInfoAPI {
    }
    export interface $IPlayerClaimInfoAPI {
        getPlayerId(): $UUID;
        getClaimsName(arg0: number): string;
        getClaimsName(): string;
        getPlayerUsername(): string;
        getClaimsColor(arg0: number): number;
        getClaimsColor(): number;
        getForceloadCount(): number;
        getClaimCount(): number;
        isPartyOwned(): boolean;
        getDimension(arg0: $ResourceLocation_): $IPlayerDimensionClaimsAPI;
    }
}
