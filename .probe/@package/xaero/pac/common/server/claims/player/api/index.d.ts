import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IPlayerPartySystemAPI as $IPlayerPartySystemAPI$1 } from "@package/xaero/pac/common/server/parties/system/api";
import { $Map$Entry, $UUID } from "@package/java/util";
import { $IPlayerPartySystemAPI } from "@package/xaero/pac/common/server/parties/system/api/v2";
import { $IPlayerClaimInfoAPI, $IPlayerDimensionClaimsAPI } from "@package/xaero/pac/common/claims/player/api";

declare module "@package/xaero/pac/common/server/claims/player/api" {
    export class $IServerPlayerClaimInfoAPI {
    }
    export interface $IServerPlayerClaimInfoAPI extends $IPlayerClaimInfoAPI {
        getClaimsColor(): number;
        getClaimsColor(arg0: string): number;
        getClaimsColor(arg0: number): number;
        getClaimCount(): number;
        getForceloadCount(): number;
        getClaimsName(arg0: string): string;
        getClaimsName(arg0: number): string;
        getClaimsName(): string;
        getPlayerUsername(): string;
        resyncPartyName(arg0: $IPlayerPartySystemAPI<never>): void;
        /**
         * @deprecated
         */
        resyncPartyName(arg0: $IPlayerPartySystemAPI$1<never>): void;
        getPlayerId(): $UUID;
        getStream(): $Stream<$Map$Entry<$ResourceLocation, $IPlayerDimensionClaimsAPI>>;
        getDimension(arg0: $ResourceLocation_): $IPlayerDimensionClaimsAPI;
        get claimCount(): number;
        get forceloadCount(): number;
        get playerUsername(): string;
        get playerId(): $UUID;
        get stream(): $Stream<$Map$Entry<$ResourceLocation, $IPlayerDimensionClaimsAPI>>;
    }
}
