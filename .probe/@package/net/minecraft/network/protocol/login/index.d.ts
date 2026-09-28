import { $ClientboundPacketListener, $ConnectionProtocol, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $CustomQueryPayload } from "@package/net/minecraft/network/protocol/login/custom";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PublicKey } from "@package/java/security";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ClientCookiePacketListener } from "@package/net/minecraft/network/protocol/cookie";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as custom from "@package/net/minecraft/network/protocol/login/custom";

declare module "@package/net/minecraft/network/protocol/login" {
    export class $ClientboundGameProfilePacket extends $Record implements $Packet<$ClientLoginPacketListener> {
        /**
         * @deprecated
         */
        strictErrorHandling(): boolean;
        isTerminal(): boolean;
        type(): $PacketType<$ClientboundGameProfilePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        gameProfile(): $GameProfile;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundGameProfilePacket>;
        constructor(arg0: $GameProfile, arg1: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ClientboundGameProfilePacket}.
     */
    export type $ClientboundGameProfilePacket_ = { gameProfile?: $GameProfile, strictErrorHandling?: boolean,  } | [gameProfile?: $GameProfile, strictErrorHandling?: boolean, ];
    export class $ClientboundHelloPacket implements $Packet<$ClientLoginPacketListener> {
        getServerId(): string;
        getChallenge(): number[];
        shouldAuthenticate(): boolean;
        type(): $PacketType<$ClientboundHelloPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        getPublicKey(): $PublicKey;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundHelloPacket>;
        constructor(serverId: string, publicKey: number[], challenge: number[], shouldAuthenticate: boolean);
    }
    export class $ClientboundCustomQueryPacket extends $Record implements $Packet<$ClientLoginPacketListener> {
        transactionId(): number;
        payload(): $CustomQueryPayload;
        type(): $PacketType<$ClientboundCustomQueryPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundCustomQueryPacket>;
        constructor(arg0: number, arg1: $CustomQueryPayload);
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCustomQueryPacket}.
     */
    export type $ClientboundCustomQueryPacket_ = { transactionId?: number, payload?: $CustomQueryPayload,  } | [transactionId?: number, payload?: $CustomQueryPayload, ];
    export class $ClientboundLoginCompressionPacket implements $Packet<$ClientLoginPacketListener> {
        getCompressionThreshold(): number;
        type(): $PacketType<$ClientboundLoginCompressionPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLoginCompressionPacket>;
        constructor(compressionThreshold: number);
    }
    export class $ClientboundLoginDisconnectPacket implements $Packet<$ClientLoginPacketListener> {
        getReason(): $Component;
        type(): $PacketType<$ClientboundLoginDisconnectPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLoginDisconnectPacket>;
        constructor(reason: $Component_);
    }
    /**
     * PacketListener for the client side of the LOGIN protocol.
     */
    export class $ClientLoginPacketListener {
    }
    export interface $ClientLoginPacketListener extends $ClientCookiePacketListener, $ClientboundPacketListener {
        handleHello(packet: $ClientboundHelloPacket): void;
        handleGameProfile(packet: $ClientboundGameProfilePacket_): void;
        handleDisconnect(packet: $ClientboundLoginDisconnectPacket): void;
        handleCompression(packet: $ClientboundLoginCompressionPacket): void;
        handleCustomQuery(packet: $ClientboundCustomQueryPacket_): void;
        protocol(): $ConnectionProtocol;
    }
}
