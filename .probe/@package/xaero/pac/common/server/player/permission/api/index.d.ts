import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Class } from "@package/java/lang";
import { $OptionalInt } from "@package/java/util";

declare module "@package/xaero/pac/common/server/player/permission/api" {
    export class $IPermissionNodeAPI<T> {
    }
    export interface $IPermissionNodeAPI<T> {
        getNodeString(): string;
        getDefaultNodeString(): string;
        getName(): $Component;
        getType(): $Class<T>;
        getComment(): $Component;
    }
    export class $IPlayerPermissionSystemAPI {
    }
    export interface $IPlayerPermissionSystemAPI {
        getIntPermission(arg0: $ServerPlayer, arg1: $IPermissionNodeAPI<number>): $OptionalInt;
        getPermissionTyped<T>(arg0: $ServerPlayer, arg1: $IPermissionNodeAPI<T>): (T) | undefined;
        getPermission(arg0: $ServerPlayer, arg1: $IPermissionNodeAPI<boolean>): boolean;
    }
    export class $IPlayerPermissionSystemRegisterAPI {
    }
    export interface $IPlayerPermissionSystemRegisterAPI {
        register(arg0: string, arg1: $IPlayerPermissionSystemAPI): void;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerPermissionSystemRegisterAPI}.
     */
    export type $IPlayerPermissionSystemRegisterAPI_ = ((arg0: string, arg1: $IPlayerPermissionSystemAPI) => void);
}
