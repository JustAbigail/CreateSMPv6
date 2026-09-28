import { $SocketAddress } from "@package/java/net";

declare module "@package/gg/essential/mixins/ext/network" {
    export class $NetworkSystemExt {
    }
    export interface $NetworkSystemExt {
        essential$removeLanEndpoint(): void;
        essential$getIceEndpoint(): $SocketAddress;
    }
}
