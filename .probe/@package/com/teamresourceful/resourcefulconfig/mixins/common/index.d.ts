
declare module "@package/com/teamresourceful/resourcefulconfig/mixins/common" {
    export class $PlayerListAccessor {
    }
    export interface $PlayerListAccessor {
        setMaxPlayers(arg0: number): void;
        set maxPlayers(value: number);
    }
    /**
     * Values that may be interpreted as {@link $PlayerListAccessor}.
     */
    export type $PlayerListAccessor_ = ((arg0: number) => void);
}
