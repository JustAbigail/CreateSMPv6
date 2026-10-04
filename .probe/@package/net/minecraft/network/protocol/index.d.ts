import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $IPacketFlowExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $ChannelHandlerContext } from "@package/io/netty/channel";
import { $PacketListener } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Iterable_, $Enum, $Record, $Iterable } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $StreamCodec, $StreamDecoder_, $StreamMemberEncoder_ } from "@package/net/minecraft/network/codec";
export * as game from "@package/net/minecraft/network/protocol/game";
export * as common from "@package/net/minecraft/network/protocol/common";
export * as cookie from "@package/net/minecraft/network/protocol/cookie";
export * as ping from "@package/net/minecraft/network/protocol/ping";
export * as status from "@package/net/minecraft/network/protocol/status";
export * as login from "@package/net/minecraft/network/protocol/login";
export * as configuration from "@package/net/minecraft/network/protocol/configuration";

declare module "@package/net/minecraft/network/protocol" {
    export class $BundlerInfo {
        static createForPacket<T extends $PacketListener, P extends $BundlePacket<T>>(type: $PacketType_<P>, bundler: $Function_<$Iterable<$Packet<T>>, P>, packet: $BundleDelimiterPacket<T>): $BundlerInfo;
        static BUNDLE_SIZE_LIMIT: number;
    }
    export interface $BundlerInfo {
        unbundlePacket(arg0: $Packet<never>, arg1: $Consumer_<$Packet<never>>, arg2: $ChannelHandlerContext): void;
        /**
         * @deprecated
         */
        unbundlePacket(packet: $Packet<never>, consumer: $Consumer_<$Packet<never>>): void;
        startPacketBundling(packet: $Packet<never>): $BundlerInfo$Bundler;
    }
    export class $PacketType<T extends $Packet<never>> extends $Record {
        id(): $ResourceLocation;
        flow(): $PacketFlow;
        constructor(arg0: $PacketFlow_, arg1: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $PacketType}.
     */
    export type $PacketType_<T> = { id?: $ResourceLocation_, flow?: $PacketFlow_,  } | [id?: $ResourceLocation_, flow?: $PacketFlow_, ];
    export class $BundlerInfo$Bundler {
    }
    export interface $BundlerInfo$Bundler {
        addPacket(packet: $Packet<never>): $Packet<never>;
    }
    /**
     * Values that may be interpreted as {@link $BundlerInfo$Bundler}.
     */
    export type $BundlerInfo$Bundler_ = ((arg0: $Packet<never>) => $Packet<never>);
    export class $BundleDelimiterPacket<T extends $PacketListener> implements $Packet<T> {
        type(): $PacketType<$BundleDelimiterPacket<T>>;
        handle(arg0: T): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        constructor();
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $Packet<T extends $PacketListener> {
        static codec<B extends $ByteBuf, T extends $Packet<never>>(encoder: $StreamMemberEncoder_<B, T>, decoder: $StreamDecoder_<B, T>): $StreamCodec<B, T>;
    }
    export interface $Packet<T extends $PacketListener> {
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        type(): $PacketType<$Packet<T>>;
        /**
         * Passes this Packet on to the PacketListener for processing.
         */
        handle(handler: T): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $BundlePacket<T extends $PacketListener> implements $Packet<T> {
        subPackets(): $Iterable<$Packet<T>>;
        type(): $PacketType<$BundlePacket<T>>;
        isTerminal(): boolean;
        isSkippable(): boolean;
        constructor(packets: $Iterable_<$Packet<T>>);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * The direction of packets.
     */
    export class $PacketFlow extends $Enum<$PacketFlow> implements $IPacketFlowExtension {
        static values(): $PacketFlow[];
        static valueOf(arg0: string): $PacketFlow;
        id(): string;
        getOpposite(): $PacketFlow;
        isServerbound(): boolean;
        isClientbound(): boolean;
        getReceptionSide(): $LogicalSide;
        self(): $PacketFlow;
        static CLIENTBOUND: $PacketFlow;
        static SERVERBOUND: $PacketFlow;
        get opposite(): $PacketFlow;
        get serverbound(): boolean;
        get clientbound(): boolean;
        get receptionSide(): $LogicalSide;
    }
    /**
     * Values that may be interpreted as {@link $PacketFlow}.
     */
    export type $PacketFlow_ = "serverbound" | "clientbound";
}
