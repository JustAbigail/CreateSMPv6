import { $Level_, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $IExtendedPistonTile } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBlockHolder } from "@package/net/mehvahdjukaar/moonlight/api/block";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List } from "@package/java/util";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/block/piston" {
    export class $PistonStructureResolver {
        getPushDirection(): $Direction;
        /**
         * @return all block positions to be destroyed by the piston
         */
        getToPush(): $List<$BlockPos>;
        /**
         * @return all block positions to be destroyed by the piston
         */
        getToDestroy(): $List<$BlockPos>;
        resolve(): boolean;
        static MAX_PUSH_DEPTH: number;
        constructor(level: $Level_, pistonPos: $BlockPos_, pistonDirection: $Direction_, extending: boolean);
    }
    export class $PistonMovingBlockEntity extends $BlockEntity implements $IExtendedPistonTile, $IBlockHolder {
        getDirection(): $Direction;
        /**
         * @return whether this piston is extending
         */
        isSourcePiston(): boolean;
        getXOff(progress: number): number;
        getYOff(progress: number): number;
        getZOff(progress: number): number;
        getMovementDirection(): $Direction;
        getHeldBlock(): $BlockState;
        tickMovedBlock(arg0: $Level_, arg1: $BlockPos_): void;
        handler$gcd000$moonlight$onFinishedShortPulse(arg0: $CallbackInfo): void;
        /**
         * @return whether this piston is extending
         */
        isExtending(): boolean;
        getProgress(progress: number): number;
        getLastTicked(): number;
        /**
         * Removes the piston's BlockEntity and stops any movement
         */
        finalTick(): void;
        getMovedState(): $BlockState;
        setHeldBlock(arg0: $BlockState_): boolean;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $PistonMovingBlockEntity): void;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        worldPosition: $BlockPos;
        static TICK_MOVEMENT: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_, movedState: $BlockState_, direction: $Direction_, extending: boolean, isSourcePiston: boolean);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
}
