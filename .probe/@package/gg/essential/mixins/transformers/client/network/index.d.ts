
declare module "@package/gg/essential/mixins/transformers/client/network" {
    export class $CPacketChatMessageAccessor {
    }
    export interface $CPacketChatMessageAccessor {
        setMessage(arg0: string): void;
    }
    /**
     * Values that may be interpreted as {@link $CPacketChatMessageAccessor}.
     */
    export type $CPacketChatMessageAccessor_ = ((arg0: string) => void);
    export class $SJoinGamePacketAccessor {
    }
    export interface $SJoinGamePacketAccessor {
        getMaxPlayers(): number;
    }
    /**
     * Values that may be interpreted as {@link $SJoinGamePacketAccessor}.
     */
    export type $SJoinGamePacketAccessor_ = (() => number);
}
