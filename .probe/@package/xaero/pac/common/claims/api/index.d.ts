import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IClaimsManagerTrackerAPI } from "@package/xaero/pac/common/claims/tracker/api";
import { $UUID_ } from "@package/java/util";
import { $IPlayerChunkClaimAPI, $IPlayerClaimInfoAPI } from "@package/xaero/pac/common/claims/player/api";

declare module "@package/xaero/pac/common/claims/api" {
    export class $IClaimsManagerAPI {
    }
    export interface $IClaimsManagerAPI {
        hasPlayerInfo(arg0: $UUID_): boolean;
        getTracker(): $IClaimsManagerTrackerAPI;
        getDimension(arg0: $ResourceLocation_): $IDimensionClaimsManagerAPI;
        getDefaultName(arg0: $IPlayerChunkClaimAPI | null): $Component;
        getPlayerInfo(arg0: $UUID_): $IPlayerClaimInfoAPI;
        getFullName(arg0: $IPlayerChunkClaimAPI | null): $Component;
        get(arg0: $ResourceLocation_, arg1: $BlockPos_): $IPlayerChunkClaimAPI;
        get(arg0: $ResourceLocation_, arg1: number, arg2: number): $IPlayerChunkClaimAPI;
        get(arg0: $ResourceLocation_, arg1: $ChunkPos): $IPlayerChunkClaimAPI;
        get tracker(): $IClaimsManagerTrackerAPI;
    }
    export class $IDimensionClaimsManagerAPI {
    }
    export interface $IDimensionClaimsManagerAPI {
        getDimension(): $ResourceLocation;
        getCount(): number;
        getRegion(arg0: number, arg1: number): $IRegionClaimsAPI;
        get dimension(): $ResourceLocation;
        get count(): number;
    }
}
