import { $Channel } from "@package/io/netty/channel";

declare module "@package/gg/essential/mixins/transformers/network" {
    export class $NetworkManagerAccessor {
    }
    export interface $NetworkManagerAccessor {
        getChannel(): $Channel;
    }
    /**
     * Values that may be interpreted as {@link $NetworkManagerAccessor}.
     */
    export type $NetworkManagerAccessor_ = (() => $Channel);
}
