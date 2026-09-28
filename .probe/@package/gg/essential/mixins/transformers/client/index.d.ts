import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
export * as network from "@package/gg/essential/mixins/transformers/client/network";
export * as resources from "@package/gg/essential/mixins/transformers/client/resources";
export * as options from "@package/gg/essential/mixins/transformers/client/options";
export * as model from "@package/gg/essential/mixins/transformers/client/model";
export * as gui from "@package/gg/essential/mixins/transformers/client/gui";

declare module "@package/gg/essential/mixins/transformers/client" {
    export class $MouseHelperAccessor {
    }
    export interface $MouseHelperAccessor {
        setMouseX(arg0: number): void;
        setMouseY(arg0: number): void;
    }
    export class $ClientWorldAccessor {
    }
    export interface $ClientWorldAccessor {
        getConnection(): $ClientPacketListener;
    }
    /**
     * Values that may be interpreted as {@link $ClientWorldAccessor}.
     */
    export type $ClientWorldAccessor_ = (() => $ClientPacketListener);
}
