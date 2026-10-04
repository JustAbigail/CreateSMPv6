import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Connection } from "@package/net/minecraft/network";
import { $ServerPlayerConnection } from "@package/net/minecraft/server/network";
import { $Set, $Set_ } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/mixin/networking/accessor" {
    export class $ServerCommonNetworkHandlerAccessor {
    }
    export interface $ServerCommonNetworkHandlerAccessor {
        getConnection(): $Connection;
        getServer(): $MinecraftServer;
        get connection(): $Connection;
        get server(): $MinecraftServer;
    }
    export class $EntityTrackerAccessor {
    }
    export interface $EntityTrackerAccessor {
        getPlayersTracking(): $Set<$ServerPlayerConnection>;
        get playersTracking(): $Set<$ServerPlayerConnection>;
    }
    /**
     * Values that may be interpreted as {@link $EntityTrackerAccessor}.
     */
    export type $EntityTrackerAccessor_ = (() => $Set_<$ServerPlayerConnection>);
    export class $ServerChunkLoadingManagerAccessor {
    }
    export interface $ServerChunkLoadingManagerAccessor {
        getEntityMap(): $Int2ObjectMap<$EntityTrackerAccessor>;
        get entityMap(): $Int2ObjectMap<$EntityTrackerAccessor>;
    }
    /**
     * Values that may be interpreted as {@link $ServerChunkLoadingManagerAccessor}.
     */
    export type $ServerChunkLoadingManagerAccessor_ = (() => $Int2ObjectMap<$EntityTrackerAccessor_>);
}
