import { $Logger } from "@package/org/slf4j";
import { $InetSocketAddress } from "@package/java/net";
import { $Optional } from "@package/java/util";

declare module "@package/net/minecraft/client/multiplayer/resolver" {
    export class $ResolvedServerAddress {
        static from(inetSocketAddress: $InetSocketAddress): $ResolvedServerAddress;
    }
    export interface $ResolvedServerAddress {
        getHostIp(): string;
        asInetSocketAddress(): $InetSocketAddress;
        getHostName(): string;
        getPort(): number;
    }
    export class $AddressCheck {
        static createFromService(): $AddressCheck;
    }
    export interface $AddressCheck {
        isAllowed(serverAddress: $ServerAddress): boolean;
        isAllowed(resolvedServerAddress: $ResolvedServerAddress): boolean;
    }
    export class $ServerNameResolver {
        resolveAddress(serverAddress: $ServerAddress): ($ResolvedServerAddress) | undefined;
        static DEFAULT: $ServerNameResolver;
        constructor(resolver: $ServerAddressResolver_, redirectHandler: $ServerRedirectHandler_, addressCheck: $AddressCheck);
    }
    export class $ServerRedirectHandler {
        static createDnsSrvRedirectHandler(): $ServerRedirectHandler;
        static LOGGER: $Logger;
        static EMPTY: $ServerRedirectHandler;
    }
    export interface $ServerRedirectHandler {
        lookupRedirect(serverAddress: $ServerAddress): ($ServerAddress) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ServerRedirectHandler}.
     */
    export type $ServerRedirectHandler_ = ((arg0: $ServerAddress) => ($ServerAddress) | undefined);
    export class $ServerAddressResolver {
        static lambda$static$0(serverAddress: $ServerAddress): $Optional<any>;
        static SYSTEM: $ServerAddressResolver;
        static LOGGER: $Logger;
    }
    export interface $ServerAddressResolver {
        resolve(serverAddress: $ServerAddress): ($ResolvedServerAddress) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ServerAddressResolver}.
     */
    export type $ServerAddressResolver_ = ((arg0: $ServerAddress) => ($ResolvedServerAddress) | undefined);
    export class $ServerAddress {
        static isValidAddress(hostAndPort: string): boolean;
        static parseString(ip: string): $ServerAddress;
        static parsePort(port: string): number;
        getHost(): string;
        getPort(): number;
        constructor(host: string, port: number);
    }
}
