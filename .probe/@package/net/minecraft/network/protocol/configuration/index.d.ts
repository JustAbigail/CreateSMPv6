import { $KnownPack_, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $IServerConfigurationPacketListenerExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $ConnectionProtocol } from "@package/net/minecraft/network";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $List, $List_ } from "@package/java/util";
import { $ServerCommonPacketListener } from "@package/net/minecraft/network/protocol/common";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/protocol/configuration" {
    export class $ServerConfigurationPacketListener {
    }
    export interface $ServerConfigurationPacketListener extends $ServerCommonPacketListener, $IServerConfigurationPacketListenerExtension {
        handleSelectKnownPacks(packet: $ServerboundSelectKnownPacks_): void;
        handleConfigurationFinished(packet: $ServerboundFinishConfigurationPacket): void;
        protocol(): $ConnectionProtocol;
    }
    export class $ServerboundSelectKnownPacks extends $Record implements $Packet<$ServerConfigurationPacketListener> {
        knownPacks(): $List<$KnownPack>;
        type(): $PacketType<$ServerboundSelectKnownPacks>;
        handle(arg0: $ServerConfigurationPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundSelectKnownPacks>;
        constructor(knownPacks: $List_<$KnownPack_>);
    }
    /**
     * Values that may be interpreted as {@link $ServerboundSelectKnownPacks}.
     */
    export type $ServerboundSelectKnownPacks_ = { knownPacks?: $List_<$KnownPack_>,  } | [knownPacks?: $List_<$KnownPack_>, ];
    export class $ServerboundFinishConfigurationPacket implements $Packet<$ServerConfigurationPacketListener> {
        isTerminal(): boolean;
        type(): $PacketType<$ServerboundFinishConfigurationPacket>;
        handle(arg0: $ServerConfigurationPacketListener): void;
        isSkippable(): boolean;
        static INSTANCE: $ServerboundFinishConfigurationPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundFinishConfigurationPacket>;
    }
}
