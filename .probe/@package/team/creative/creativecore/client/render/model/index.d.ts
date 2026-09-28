import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/team/creative/creativecore/client/render/model" {
    export class $CreativeQuadLighter {
    }
    export interface $CreativeQuadLighter {
        setCustomTint(arg0: number): void;
        setState(arg0: $BlockState_): void;
    }
}
