import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $HangingSignTileExtension } from "@package/net/mehvahdjukaar/amendments/common/tile";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as tile from "@package/net/mehvahdjukaar/amendments/common/tile";
export * as entity from "@package/net/mehvahdjukaar/amendments/common/entity";

declare module "@package/net/mehvahdjukaar/amendments/common" {
    export class $IBellConnection {
    }
    export interface $IBellConnection {
        amendments$getConnection(): $IBellConnection$Type;
        amendments$setConnected(arg0: $IBellConnection$Type_): void;
    }
    export class $ISwingingTile {
    }
    export interface $ISwingingTile {
        amendments$getAnimation(): $SwingAnimation;
    }
    /**
     * Values that may be interpreted as {@link $ISwingingTile}.
     */
    export type $ISwingingTile_ = (() => $SwingAnimation);
    export class $SwingAnimation {
        setAngle(arg0: number): void;
        hitByEntity(arg0: $Entity, arg1: $BlockState_, arg2: $BlockPos_): boolean;
        getAngle(arg0: number): number;
        reset(): void;
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        static EMPTY: $SwingAnimation;
    }
    export class $IBetterJukebox {
    }
    export interface $IBetterJukebox {
        amendments$tickAnimation(): void;
        amendments$getRotation(arg0: number): number;
    }
    export class $ExtendedHangingSign {
    }
    export interface $ExtendedHangingSign extends $ISwingingTile {
        amendments$getAnimation(): $SwingAnimation;
        amendments$getExtension(): $HangingSignTileExtension;
    }
    /**
     * Values that may be interpreted as {@link $ExtendedHangingSign}.
     */
    export type $ExtendedHangingSign_ = (() => $HangingSignTileExtension);
    export class $IBellConnection$Type extends $Enum<$IBellConnection$Type> implements $StringRepresentable {
        isChain(): boolean;
        isRope(): boolean;
        static values(): $IBellConnection$Type[];
        static valueOf(arg0: string): $IBellConnection$Type;
        isEmpty(): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CHAIN: $IBellConnection$Type;
        static ROPE: $IBellConnection$Type;
        static NONE: $IBellConnection$Type;
    }
    /**
     * Values that may be interpreted as {@link $IBellConnection$Type}.
     */
    export type $IBellConnection$Type_ = "none" | "chain" | "rope";
}
