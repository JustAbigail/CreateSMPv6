
declare module "@package/dev/lopyluna/dndesires/mixins" {
    export class $FurnaceBEAccessor {
    }
    export interface $FurnaceBEAccessor {
        getCookingProgress$D2D(): number;
        getCookingTotalTime$D2D(): number;
        get cookingProgress$D2D(): number;
        get cookingTotalTime$D2D(): number;
    }
    export class $PotatoProjectileEntityAccessor {
    }
    export interface $PotatoProjectileEntityAccessor {
        recoveryChance(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $PotatoProjectileEntityAccessor}.
     */
    export type $PotatoProjectileEntityAccessor_ = ((arg0: number) => void);
    export class $ServerGamePacketListenerImplAccessor {
    }
    export interface $ServerGamePacketListenerImplAccessor {
        aboveGroundTickCount(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerGamePacketListenerImplAccessor}.
     */
    export type $ServerGamePacketListenerImplAccessor_ = ((arg0: number) => void);
}
