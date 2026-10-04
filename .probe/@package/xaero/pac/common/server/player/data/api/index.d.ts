import { $IClaimingModeAPI } from "@package/xaero/pac/common/claims/player/mode/api";
import { $ServerPlayer } from "@package/net/minecraft/server/level";

declare module "@package/xaero/pac/common/server/player/data/api" {
    export class $ServerPlayerDataAPI {
        isClaimsAdminMode(): boolean;
        isClaimsNonallyMode(): boolean;
        /**
         * @deprecated
         */
        isClaimsServerMode(): boolean;
        getClaimingMode(): $IClaimingModeAPI;
        getRawClaimingMode(): $IClaimingModeAPI;
        isPartiesAdminMode(): boolean;
        static from(arg0: $ServerPlayer): $ServerPlayerDataAPI;
        constructor();
        get claimsAdminMode(): boolean;
        get claimsNonallyMode(): boolean;
        get claimsServerMode(): boolean;
        get claimingMode(): $IClaimingModeAPI;
        get rawClaimingMode(): $IClaimingModeAPI;
        get partiesAdminMode(): boolean;
    }
}
