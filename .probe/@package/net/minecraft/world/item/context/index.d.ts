import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockPlaceContextExtension } from "@package/de/mrjulsen/paw/block/extended";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UseOnContextAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/item/context" {
    export class $BlockPlaceContext extends $UseOnContext implements $BlockPlaceContextExtension {
        handler$gbg000$moonlight$fixNotAccountingForNullPlayer1(arg0: $CallbackInfoReturnable<any>): void;
        handler$gbg000$moonlight$fixNotAccountingForNullPlayer2(arg0: $CallbackInfoReturnable<any>): void;
        handler$gbg000$moonlight$fixNotAccountingForNullPlayer3(arg0: $CallbackInfoReturnable<any>): void;
        paw$getPlacedOnPos(): $BlockPos;
        paw$getPlacedOnState(): $BlockState;
        getNearestLookingVerticalDirection(): $Direction;
        getNearestLookingDirection(): $Direction;
        getNearestLookingDirections(): $Direction[];
        replacingClickedOnBlock(): boolean;
        canPlace(): boolean;
        static at(context: $BlockPlaceContext, pos: $BlockPos_, direction: $Direction_): $BlockPlaceContext;
        replaceClicked: boolean;
        constructor(context: $UseOnContext);
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        constructor(player: $Player, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
    }
    export class $UseOnContext implements $UseOnContextAccessor {
        getHitResult(): $BlockHitResult;
        getClickedPos(): $BlockPos;
        getClickedFace(): $Direction;
        getPlayer(): $Player;
        getHand(): $InteractionHand;
        isInside(): boolean;
        getHorizontalDirection(): $Direction;
        getClickLocation(): $Vec3;
        getLevel(): $Level;
        getItemInHand(): $ItemStack;
        getRotation(): number;
        isSecondaryUseActive(): boolean;
        create$getHitResult(): $BlockHitResult;
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        constructor(player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult);
    }
}
