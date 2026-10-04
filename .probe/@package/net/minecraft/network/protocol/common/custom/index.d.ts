import { $Path } from "@package/net/minecraft/world/level/pathfinder";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ConnectionProtocol_, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PacketFlow_ } from "@package/net/minecraft/network/protocol";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $UUID, $List, $Set, $UUID_, $Set_, $List_ } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $StreamCodec, $StreamDecoder_, $StreamMemberEncoder_ } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/protocol/common/custom" {
    export class $CustomPacketPayload$TypeAndCodec<B extends $FriendlyByteBuf, T extends $CustomPacketPayload> extends $Record {
        type(): $CustomPacketPayload$Type<T>;
        codec(): $StreamCodec<B, T>;
        constructor(type: $CustomPacketPayload$Type_<T>, codec: $StreamCodec<B, T>);
    }
    /**
     * Values that may be interpreted as {@link $CustomPacketPayload$TypeAndCodec}.
     */
    export type $CustomPacketPayload$TypeAndCodec_<B, T> = { type?: $CustomPacketPayload$Type_<$CustomPacketPayload_>, codec?: $StreamCodec<$FriendlyByteBuf, $CustomPacketPayload_>,  } | [type?: $CustomPacketPayload$Type_<$CustomPacketPayload_>, codec?: $StreamCodec<$FriendlyByteBuf, $CustomPacketPayload_>, ];
    export class $BrainDebugPayload$BrainDump extends $Record {
        pois(): $Set<$BlockPos>;
        wantsGolem(): boolean;
        angerLevel(): number;
        potentialPois(): $Set<$BlockPos>;
        hasPotentialPoi(pos: $BlockPos_): boolean;
        maxHealth(): number;
        behaviors(): $List<string>;
        hasPoi(pos: $BlockPos_): boolean;
        gossips(): $List<string>;
        name(): string;
        id(): number;
        write(buffer: $FriendlyByteBuf): void;
        pos(): $Vec3;
        path(): $Path;
        xp(): number;
        uuid(): $UUID;
        inventory(): string;
        activities(): $List<string>;
        health(): number;
        profession(): string;
        memories(): $List<string>;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $UUID_, arg1: number, arg2: string, arg3: string, arg4: number, arg5: number, arg6: number, arg7: $Vec3_, arg8: string, arg9: $Path | null, arg10: boolean, arg11: number, arg12: $List_<string>, arg13: $List_<string>, arg14: $List_<string>, arg15: $List_<string>, arg16: $Set_<$BlockPos_>, arg17: $Set_<$BlockPos_>);
    }
    /**
     * Values that may be interpreted as {@link $BrainDebugPayload$BrainDump}.
     */
    export type $BrainDebugPayload$BrainDump_ = { profession?: string, pois?: $Set_<$BlockPos_>, gossips?: $List_<string>, pos?: $Vec3_, angerLevel?: number, behaviors?: $List_<string>, health?: number, xp?: number, potentialPois?: $Set_<$BlockPos_>, id?: number, memories?: $List_<string>, path?: $Path, inventory?: string, uuid?: $UUID_, maxHealth?: number, name?: string, activities?: $List_<string>, wantsGolem?: boolean,  } | [profession?: string, pois?: $Set_<$BlockPos_>, gossips?: $List_<string>, pos?: $Vec3_, angerLevel?: number, behaviors?: $List_<string>, health?: number, xp?: number, potentialPois?: $Set_<$BlockPos_>, id?: number, memories?: $List_<string>, path?: $Path, inventory?: string, uuid?: $UUID_, maxHealth?: number, name?: string, activities?: $List_<string>, wantsGolem?: boolean, ];
    export class $BeeDebugPayload$BeeInfo extends $Record {
        flowerPos(): $BlockPos;
        travelTicks(): number;
        generateName(): string;
        blacklistedHives(): $List<$BlockPos>;
        goals(): $Set<string>;
        hivePos(): $BlockPos;
        hasHive(pos: $BlockPos_): boolean;
        id(): number;
        write(buffer: $FriendlyByteBuf): void;
        pos(): $Vec3;
        path(): $Path;
        uuid(): $UUID;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $UUID_, arg1: number, arg2: $Vec3_, arg3: $Path | null, arg4: $BlockPos_ | null, arg5: $BlockPos_ | null, arg6: number, arg7: $Set_<string>, arg8: $List_<$BlockPos_>);
    }
    /**
     * Values that may be interpreted as {@link $BeeDebugPayload$BeeInfo}.
     */
    export type $BeeDebugPayload$BeeInfo_ = { flowerPos?: $BlockPos_, travelTicks?: number, goals?: $Set_<string>, uuid?: $UUID_, path?: $Path, id?: number, blacklistedHives?: $List_<$BlockPos_>, hivePos?: $BlockPos_, pos?: $Vec3_,  } | [flowerPos?: $BlockPos_, travelTicks?: number, goals?: $Set_<string>, uuid?: $UUID_, path?: $Path, id?: number, blacklistedHives?: $List_<$BlockPos_>, hivePos?: $BlockPos_, pos?: $Vec3_, ];
    export class $CustomPacketPayload$Type<T extends $CustomPacketPayload> extends $Record {
        id(): $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $CustomPacketPayload$Type}.
     */
    export type $CustomPacketPayload$Type_<T> = { id?: $ResourceLocation_,  } | [id?: $ResourceLocation_, ];
    export class $HiveDebugPayload$HiveInfo extends $Record {
        occupantCount(): number;
        honeyLevel(): number;
        hiveType(): string;
        sedated(): boolean;
        write(buffer: $FriendlyByteBuf): void;
        pos(): $BlockPos;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $BlockPos_, arg1: string, arg2: number, arg3: number, arg4: boolean);
    }
    /**
     * Values that may be interpreted as {@link $HiveDebugPayload$HiveInfo}.
     */
    export type $HiveDebugPayload$HiveInfo_ = { pos?: $BlockPos_, sedated?: boolean, honeyLevel?: number, hiveType?: string, occupantCount?: number,  } | [pos?: $BlockPos_, sedated?: boolean, honeyLevel?: number, hiveType?: string, occupantCount?: number, ];
    export class $GoalDebugPayload$DebugGoal extends $Record {
        name(): string;
        priority(): number;
        write(buffer: $FriendlyByteBuf): void;
        isRunning(): boolean;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: number, arg1: boolean, arg2: string);
        get running(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GoalDebugPayload$DebugGoal}.
     */
    export type $GoalDebugPayload$DebugGoal_ = { name?: string, isRunning?: boolean, priority?: number,  } | [name?: string, isRunning?: boolean, priority?: number, ];
    export class $BreezeDebugPayload$BreezeInfo extends $Record {
        generateName(): string;
        attackTarget(): number;
        id(): number;
        write(buffer: $FriendlyByteBuf): void;
        uuid(): $UUID;
        jumpTarget(): $BlockPos;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $UUID_, arg1: number, arg2: number, arg3: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $BreezeDebugPayload$BreezeInfo}.
     */
    export type $BreezeDebugPayload$BreezeInfo_ = { jumpTarget?: $BlockPos_, uuid?: $UUID_, id?: number, attackTarget?: number,  } | [jumpTarget?: $BlockPos_, uuid?: $UUID_, id?: number, attackTarget?: number, ];
    export class $CustomPacketPayload$FallbackProvider<B extends $FriendlyByteBuf> {
    }
    export interface $CustomPacketPayload$FallbackProvider<B extends $FriendlyByteBuf> {
        create(id: $ResourceLocation_): $StreamCodec<B, $CustomPacketPayload>;
    }
    /**
     * Values that may be interpreted as {@link $CustomPacketPayload$FallbackProvider}.
     */
    export type $CustomPacketPayload$FallbackProvider_<B> = ((arg0: $ResourceLocation) => $StreamCodec<B, $CustomPacketPayload>);
    export class $StructuresDebugPayload$PieceInfo extends $Record {
        isStart(): boolean;
        boundingBox(): $BoundingBox;
        write(buffer: $FriendlyByteBuf): void;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $BoundingBox, arg1: boolean);
        get start(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $StructuresDebugPayload$PieceInfo}.
     */
    export type $StructuresDebugPayload$PieceInfo_ = { boundingBox?: $BoundingBox, isStart?: boolean,  } | [boundingBox?: $BoundingBox, isStart?: boolean, ];
    export class $CustomPacketPayload {
        static codec<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider_<B>, arg1: $List_<$CustomPacketPayload$TypeAndCodec_<B, never>>, arg2: $ConnectionProtocol_, arg3: $PacketFlow_): $StreamCodec<B, $CustomPacketPayload>;
        static codec<B extends $ByteBuf, T extends $CustomPacketPayload>(encoder: $StreamMemberEncoder_<B, T>, decoder: $StreamDecoder_<B, T>): $StreamCodec<B, T>;
        static createType<T extends $CustomPacketPayload>(id: string): $CustomPacketPayload$Type<T>;
    }
    export interface $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
    }
    /**
     * Values that may be interpreted as {@link $CustomPacketPayload}.
     */
    export type $CustomPacketPayload_ = (() => $CustomPacketPayload$Type_<$CustomPacketPayload>);
}
