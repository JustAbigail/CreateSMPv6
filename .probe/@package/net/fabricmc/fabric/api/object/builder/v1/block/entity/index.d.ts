import { $Block_ } from "@package/net/minecraft/world/level/block";

declare module "@package/net/fabricmc/fabric/api/object/builder/v1/block/entity" {
    export class $FabricBlockEntityType {
    }
    export interface $FabricBlockEntityType {
        addSupportedBlock(arg0: $Block_): void;
    }
}
