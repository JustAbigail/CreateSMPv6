import { $Level_, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block_ } from "@package/net/minecraft/world/level/block";

declare module "@package/net/minecraft/world/level/redstone" {
    export class $NeighborUpdater {
        static executeUpdate(level: $Level_, state: $BlockState_, pos: $BlockPos_, neighborBlock: $Block_, neighborPos: $BlockPos_, movedByPiston: boolean): void;
        static executeShapeUpdate(level: $LevelAccessor, direction: $Direction_, state: $BlockState_, pos: $BlockPos_, neighborPos: $BlockPos_, flags: number, recursionLevel: number): void;
        static UPDATE_ORDER: $Direction[];
    }
    export interface $NeighborUpdater {
        updateNeighborsAtExceptFromFacing(pos: $BlockPos_, block: $Block_, facing: $Direction_ | null): void;
        neighborChanged(pos: $BlockPos_, neighborBlock: $Block_, neighborPos: $BlockPos_): void;
        neighborChanged(state: $BlockState_, pos: $BlockPos_, neighborBlock: $Block_, neighborPos: $BlockPos_, movedByPiston: boolean): void;
        shapeUpdate(direction: $Direction_, state: $BlockState_, pos: $BlockPos_, neighborPos: $BlockPos_, flags: number, recursionLevel: number): void;
    }
}
