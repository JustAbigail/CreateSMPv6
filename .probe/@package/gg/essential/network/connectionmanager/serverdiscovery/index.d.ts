import { $Consumer } from "@package/java/util/function";

declare module "@package/gg/essential/network/connectionmanager/serverdiscovery" {
    export class $NewServerDiscoveryManager$ImpressionTracker {
        getFeaturedConsumer(): $NewServerDiscoveryManager$ImpressionConsumer;
        getRecommendedConsumer(): $NewServerDiscoveryManager$ImpressionConsumer;
        submit(): void;
        constructor();
    }
    export class $NewServerDiscoveryManager$ImpressionConsumer {
    }
    export interface $NewServerDiscoveryManager$ImpressionConsumer extends $Consumer<string> {
    }
    /**
     * Values that may be interpreted as {@link $NewServerDiscoveryManager$ImpressionConsumer}.
     */
    export type $NewServerDiscoveryManager$ImpressionConsumer_ = (() => void);
}
