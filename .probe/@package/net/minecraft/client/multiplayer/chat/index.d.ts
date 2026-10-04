import { $Instant } from "@package/java/time";
import { $BooleanSupplier, $BooleanSupplier_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $ChatType$Bound_, $MessageSignature_, $PlayerChatMessage_, $Component_ } from "@package/net/minecraft/network/chat";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $CallbackInfoReturnable, $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Enum } from "@package/java/lang";
import { $UUID_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as report from "@package/net/minecraft/client/multiplayer/chat/report";

declare module "@package/net/minecraft/client/multiplayer/chat" {
    export class $LoggedChatEvent$Type extends $Enum<$LoggedChatEvent$Type> implements $StringRepresentable {
        static values(): $LoggedChatEvent$Type[];
        static valueOf(arg0: string): $LoggedChatEvent$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static PLAYER: $LoggedChatEvent$Type;
        static SYSTEM: $LoggedChatEvent$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatEvent$Type}.
     */
    export type $LoggedChatEvent$Type_ = "player" | "system";
    export class $ChatListener {
        clearQueue(): void;
        acceptNextDelayedMessage(): void;
        handleChatMessageError(sender: $UUID_, boundChatType: $ChatType$Bound_): void;
        handlePlayerChatMessage(chatMessage: $PlayerChatMessage_, gameProfile: $GameProfile, boundChatType: $ChatType$Bound_): void;
        handleDisguisedChatMessage(message: $Component_, boundChatType: $ChatType$Bound_): void;
        removeFromDelayedMessageQueue(signature: $MessageSignature_): boolean;
        modify$bki000$chat_heads$chatheads$handleAddedDisguisedMessage(original: $BooleanSupplier_, undecoratedMessage: $Component_, bound: $ChatType$Bound_): $BooleanSupplier;
        handler$bjp000$chat_heads$chatheads$handleAddedPlayerMessage(bound: $ChatType$Bound_, playerChatMessage: $PlayerChatMessage_, message: $Component_, gameProfile: $GameProfile, bl: boolean, instant: $Instant, cir: $CallbackInfoReturnable<any>): void;
        handler$bjp000$chat_heads$chatheads$handleAddedSystemMessage(message: $Component_, bl: boolean, ci: $CallbackInfo): void;
        handleSystemMessage(message: $Component_, isOverlay: boolean): void;
        tick(): void;
        queueSize(): number;
        setMessageDelay(delaySeconds: number): void;
        constructor(minecraft: $Minecraft);
        set messageDelay(value: number);
    }
    export class $LoggedChatEvent {
        static CODEC: $Codec<$LoggedChatEvent>;
    }
    export interface $LoggedChatEvent {
        type(): $LoggedChatEvent$Type;
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatEvent}.
     */
    export type $LoggedChatEvent_ = (() => $LoggedChatEvent$Type_);
    export class $ChatLog {
        push(event: $LoggedChatEvent_): void;
        end(): number;
        lookup(id: number): $LoggedChatEvent;
        start(): number;
        static codec(size: number): $Codec<$ChatLog>;
        constructor(size: number);
    }
}
