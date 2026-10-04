import { $JsonElement } from "@package/com/google/gson";
import { $MapCodec_, $DataResult, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Tag } from "@package/net/minecraft/nbt";
import { $EntityType_, $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $Message, $Message_, $ParseResults } from "@package/com/mojang/brigadier";
import { $UUID_, $UUID, $List, $Date, $List_, $BitSet } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $SignatureUpdater$Output_, $FormattedCharSequence, $StringRepresentable, $SignatureUpdater_, $SignatureValidator_, $Unit } from "@package/net/minecraft/util";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_, $UnaryOperator_, $BooleanSupplier_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $RegistryAccess, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $WithCodec } from "@package/dev/latvian/mods/kubejs/util";
import { $URI } from "@package/java/net";
import { RegistryMarked, RegistryTypes, SpecialTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Enum, $Iterable, $Record, $Object } from "@package/java/lang";
import { $Ownable } from "@package/dzwdz/chat_heads/mixininterface";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeColor, $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $ProfilePublicKey, $ProfilePublicKey$Data_, $ProfilePublicKey$Data, $ProfilePublicKey_ } from "@package/net/minecraft/world/entity/player";
import { $DataSource } from "@package/net/minecraft/network/chat/contents";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Instant, $Duration_, $Duration } from "@package/java/time";
import { $ResourceKey_, $ResourceKey, $RegistryOps, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ComponentKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as numbers from "@package/net/minecraft/network/chat/numbers";
export * as contents from "@package/net/minecraft/network/chat/contents";

declare module "@package/net/minecraft/network/chat" {
    export class $SignableCommand<S> extends $Record {
        static hasSignableArguments<S>(parseResults: $ParseResults<S>): boolean;
        static of<S>(results: $ParseResults<S>): $SignableCommand<S>;
        "arguments"(): $List<$SignableCommand$Argument<S>>;
        getArgument(argument: string): $SignableCommand$Argument<S>;
        constructor(arg0: $List_<$SignableCommand$Argument_<S>>);
    }
    /**
     * Values that may be interpreted as {@link $SignableCommand}.
     */
    export type $SignableCommand_<S> = { arguments?: $List_<$SignableCommand$Argument_<any>>,  } | [arguments?: $List_<$SignableCommand$Argument_<any>>, ];
    export class $ChatTypeDecoration extends $Record {
        static withSender(translationKey: string): $ChatTypeDecoration;
        static incomingDirectMessage(translationKey: string): $ChatTypeDecoration;
        static outgoingDirectMessage(translationKey: string): $ChatTypeDecoration;
        static teamMessage(translationKey: string): $ChatTypeDecoration;
        parameters(): $List<$ChatTypeDecoration$Parameter>;
        style(): $Style;
        translationKey(): string;
        decorate(content: $Component_, boundChatType: $ChatType$Bound_): $Component;
        static CODEC: $Codec<$ChatTypeDecoration>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChatTypeDecoration>;
        constructor(arg0: string, arg1: $List_<$ChatTypeDecoration$Parameter_>, arg2: $Style);
    }
    /**
     * Values that may be interpreted as {@link $ChatTypeDecoration}.
     */
    export type $ChatTypeDecoration_ = { parameters?: $List_<$ChatTypeDecoration$Parameter_>, style?: $Style, translationKey?: string,  } | [parameters?: $List_<$ChatTypeDecoration$Parameter_>, style?: $Style, translationKey?: string, ];
    export class $MessageSignatureCache {
        pack(signature: $MessageSignature_): number;
        push(signedMessageBody: $SignedMessageBody_, signature: $MessageSignature_ | null): void;
        push(chatMessages: $List_<$MessageSignature_>): void;
        unpack(index: number): $MessageSignature;
        static createDefault(): $MessageSignatureCache;
        static NOT_FOUND: number;
        constructor(size: number);
    }
    export class $SignedMessageLink extends $Record {
        updateSignature(output: $SignatureUpdater$Output_): void;
        isDescendantOf(other: $SignedMessageLink_): boolean;
        sessionId(): $UUID;
        sender(): $UUID;
        static unsigned(sender: $UUID_): $SignedMessageLink;
        index(): number;
        static root(sender: $UUID_, sessionId: $UUID_): $SignedMessageLink;
        advance(): $SignedMessageLink;
        static CODEC: $Codec<$SignedMessageLink>;
        constructor(arg0: number, arg1: $UUID_, arg2: $UUID_);
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageLink}.
     */
    export type $SignedMessageLink_ = { sessionId?: $UUID_, index?: number, sender?: $UUID_,  } | [sessionId?: $UUID_, index?: number, sender?: $UUID_, ];
    export class $ClickEvent implements $WithCodec {
        /**
         * Gets the value to perform the action on when this event is raised.  For example, if the action is "open URL", this would be the URL to open.
         */
        getValue(): string;
        getCodec(): $Codec<any>;
        /**
         * Gets the action to perform when this event is raised.
         */
        getAction(): $ClickEvent$Action;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        static CODEC: $Codec<$ClickEvent>;
        constructor(action: $ClickEvent$Action_, value: string);
        get value(): string;
        get codec(): $Codec<any>;
        get action(): $ClickEvent$Action;
    }
    /**
     * Values that may be interpreted as {@link $ClickEvent}.
     */
    export type $ClickEvent_ = { action: $ClickEvent$Action_, value: string,  };
    export class $SignedMessageBody extends $Record {
        updateSignature(output: $SignatureUpdater$Output_): void;
        pack(signatureCache: $MessageSignatureCache): $SignedMessageBody$Packed;
        timeStamp(): $Instant;
        lastSeen(): $LastSeenMessages;
        content(): string;
        static unsigned(content: string): $SignedMessageBody;
        salt(): number;
        static MAP_CODEC: $MapCodec<$SignedMessageBody>;
        constructor(arg0: string, arg1: $Instant, arg2: number, arg3: $LastSeenMessages_);
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageBody}.
     */
    export type $SignedMessageBody_ = { salt?: number, timeStamp?: $Instant, content?: string, lastSeen?: $LastSeenMessages_,  } | [salt?: number, timeStamp?: $Instant, content?: string, lastSeen?: $LastSeenMessages_, ];
    export class $FormattedText {
        static of(text: string): $FormattedText;
        static of(text: string, style: $Style): $FormattedText;
        static composite(...elements: $FormattedText[]): $FormattedText;
        static composite(elements: $List_<$FormattedText>): $FormattedText;
        static EMPTY: $FormattedText;
        static STOP_ITERATION: ($Unit) | undefined;
    }
    export interface $FormattedText {
        visit<T>(acceptor: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        visit<T>(acceptor: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        getString(): string;
        get string(): string;
    }
    export class $ComponentContents {
    }
    export interface $ComponentContents {
        visit<T>(styledContentConsumer: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        visit<T>(contentConsumer: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        type(): $ComponentContents$Type<never>;
        resolve(nbtPathPattern: $CommandSourceStack | null, entity: $Entity | null, recursionDepth: number): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $ComponentContents}.
     */
    export type $ComponentContents_ = (() => $ComponentContents$Type_<never>);
    export class $RemoteChatSession extends $Record {
        profilePublicKey(): $ProfilePublicKey;
        createMessageDecoder(sender: $UUID_): $SignedMessageChain$Decoder;
        asData(): $RemoteChatSession$Data;
        createMessageValidator(duration: $Duration_): $SignedMessageValidator;
        sessionId(): $UUID;
        hasExpired(): boolean;
        constructor(arg0: $UUID_, arg1: $ProfilePublicKey_);
    }
    /**
     * Values that may be interpreted as {@link $RemoteChatSession}.
     */
    export type $RemoteChatSession_ = { sessionId?: $UUID_, profilePublicKey?: $ProfilePublicKey_,  } | [sessionId?: $UUID_, profilePublicKey?: $ProfilePublicKey_, ];
    export class $ChatType extends $Record {
        narration(): $ChatTypeDecoration;
        chat(): $ChatTypeDecoration;
        static bootstrap(context: $BootstrapContext<$ChatType_>): void;
        static bind(chatTypeKey: $ResourceKey_<$ChatType>, registryAccess: $RegistryAccess, name: $Component_): $ChatType$Bound;
        static bind(chatTypeKey: $ResourceKey_<$ChatType>, entity: $Entity): $ChatType$Bound;
        static bind(chatTypeKey: $ResourceKey_<$ChatType>, source: $CommandSourceStack): $ChatType$Bound;
        static SAY_COMMAND: $ResourceKey<$ChatType>;
        static MSG_COMMAND_OUTGOING: $ResourceKey<$ChatType>;
        static MSG_COMMAND_INCOMING: $ResourceKey<$ChatType>;
        static CHAT: $ResourceKey<$ChatType>;
        static TEAM_MSG_COMMAND_OUTGOING: $ResourceKey<$ChatType>;
        static TEAM_MSG_COMMAND_INCOMING: $ResourceKey<$ChatType>;
        static DIRECT_CODEC: $Codec<$ChatType>;
        static EMOTE_COMMAND: $ResourceKey<$ChatType>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChatType>;
        static DEFAULT_CHAT_DECORATION: $ChatTypeDecoration;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$ChatType>>;
        constructor(arg0: $ChatTypeDecoration_, arg1: $ChatTypeDecoration_);
    }
    /**
     * Values that may be interpreted as {@link $ChatType}.
     */
    export type $ChatType_ = RegistryTypes.ChatType | { narration?: $ChatTypeDecoration_, chat?: $ChatTypeDecoration_,  } | [narration?: $ChatTypeDecoration_, chat?: $ChatTypeDecoration_, ];
    export class $MessageSignature$Packed extends $Record {
        fullSignature(): $MessageSignature;
        id(): number;
        static write(buffer: $FriendlyByteBuf, packed: $MessageSignature$Packed_): void;
        static read(buffer: $FriendlyByteBuf): $MessageSignature$Packed;
        unpack(signatureCache: $MessageSignatureCache): ($MessageSignature) | undefined;
        static FULL_SIGNATURE: number;
        constructor(fullSignature: $MessageSignature_);
        constructor(arg0: number, arg1: $MessageSignature_ | null);
        constructor(id: number);
    }
    /**
     * Values that may be interpreted as {@link $MessageSignature$Packed}.
     */
    export type $MessageSignature$Packed_ = { id?: number, fullSignature?: $MessageSignature_,  } | [id?: number, fullSignature?: $MessageSignature_, ];
    export class $TextColor implements $KubeColor {
        kjs$getRGB(): number;
        static parseColor(color: string): $DataResult<$TextColor>;
        kjs$getARGB(): number;
        getValue(): number;
        serialize(): string;
        formatValue(): string;
        static fromLegacyFormat(formatting: $ChatFormatting_): $TextColor;
        static fromRgb(color: number): $TextColor;
        getFireworkRGB(): number;
        toHexString(): string;
        createTextColor(): $TextColor;
        specialEquals(o: $Object, shallow: boolean): boolean;
        serialize(): string;
        static CODEC: $Codec<$TextColor>;
        get value(): number;
        get fireworkRGB(): number;
    }
    /**
     * Values that may be interpreted as {@link $TextColor}.
     */
    export type $TextColor_ = "" | "light_blue_dye" | "blue_dye" | "purple_dye" | "dark_red" | "lightgraydye" | "dark_aqua" | "none" | "green_dye" | "blackdye" | "dark_blue" | "red" | "pink_dye" | "aqua" | "white" | "white_dye" | "dark_gray" | "light_purple" | "brown_dye" | "black" | "darkpurple" | "none" | "light_blue_dye" | "aqua" | "lightbluedye" | "limedye" | "purple_dye" | "green_dye" | "magenta_dye" | "-" | "lime_dye" | "yellowdye" | "graydye" | "purpledye" | "dark_purple" | "orange_dye" | "darkgray" | "browndye" | "yellow" | "lime_dye" | "bluedye" | "white_dye" | "pinkdye" | "blue_dye" | "cyandye" | "gold" | "gray" | "magenta_dye" | "blue" | "light_gray_dye" | "yellow" | "darkblue" | "transparent" | "orange_dye" | "red_dye" | "dark_purple" | "gold" | "gray" | "light_purple" | "darkred" | "greendye" | "dark_red" | "reddye" | "gray_dye" | "orangedye" | "yellow_dye" | "black_dye" | "magentadye" | "white" | "green" | "light_gray_dye" | "black_dye" | "darkgreen" | "red_dye" | "dark_green" | "black" | "lightpurple" | "pink_dye" | "dark_blue" | "green" | "darkaqua" | "gray_dye" | "cyan_dye" | "red" | "brown_dye" | "cyan_dye" | "blue" | "whitedye" | "dark_aqua" | "yellow_dye" | "dark_green" | "dark_gray" | `#${string}` | number;
    export class $HoverEvent {
        getValue<T>(actionType: $HoverEvent$Action<T>): T;
        /**
         * Gets the action to perform when this event is raised.
         */
        getAction(): $HoverEvent$Action<never>;
        static CODEC: $Codec<$HoverEvent>;
        constructor<T>(action: $HoverEvent$Action<T>, value: T);
        get action(): $HoverEvent$Action<never>;
    }
    export class $LastSeenMessages$Update extends $Record {
        acknowledged(): $BitSet;
        offset(): number;
        write(buffer: $FriendlyByteBuf): void;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: number, arg1: $BitSet);
    }
    /**
     * Values that may be interpreted as {@link $LastSeenMessages$Update}.
     */
    export type $LastSeenMessages$Update_ = { offset?: number, acknowledged?: $BitSet,  } | [offset?: number, acknowledged?: $BitSet, ];
    export class $ChatTypeDecoration$Parameter extends $Enum<$ChatTypeDecoration$Parameter> implements $StringRepresentable {
        static values(): $ChatTypeDecoration$Parameter[];
        static valueOf(arg0: string): $ChatTypeDecoration$Parameter;
        select(content: $Component_, boundChatType: $ChatType$Bound_): $Component;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static TARGET: $ChatTypeDecoration$Parameter;
        static CODEC: $Codec<$ChatTypeDecoration$Parameter>;
        static SENDER: $ChatTypeDecoration$Parameter;
        static CONTENT: $ChatTypeDecoration$Parameter;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ChatTypeDecoration$Parameter>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ChatTypeDecoration$Parameter}.
     */
    export type $ChatTypeDecoration$Parameter_ = "sender" | "target" | "content";
    export class $OutgoingChatMessage {
        static create(message: $PlayerChatMessage_): $OutgoingChatMessage;
    }
    export interface $OutgoingChatMessage {
        content(): $Component;
        sendToPlayer(player: $ServerPlayer, filtered: boolean, boundType: $ChatType$Bound_): void;
    }
    export class $HoverEvent$LegacyConverter<T> {
    }
    export interface $HoverEvent$LegacyConverter<T> {
        parse(name: $Component_, ops: $RegistryOps<never> | null): $DataResult<T>;
    }
    /**
     * Values that may be interpreted as {@link $HoverEvent$LegacyConverter}.
     */
    export type $HoverEvent$LegacyConverter_<T> = ((arg0: $Component, arg1: $RegistryOps<never>) => $DataResult<T>);
    export class $FilterMask {
        setFiltered(size: number): void;
        isFullyFiltered(): boolean;
        applyWithFormatting(text: string): $Component;
        isEmpty(): boolean;
        apply(text: string): string;
        static write(buffer: $FriendlyByteBuf, mask: $FilterMask): void;
        static read(buffer: $FriendlyByteBuf): $FilterMask;
        static PARTIALLY_FILTERED_CODEC: $MapCodec<$FilterMask>;
        static PASS_THROUGH: $FilterMask;
        static CODEC: $Codec<$FilterMask>;
        static FULLY_FILTERED: $FilterMask;
        static FILTERED_STYLE: $Style;
        static PASS_THROUGH_CODEC: $MapCodec<$FilterMask>;
        static FULLY_FILTERED_CODEC: $MapCodec<$FilterMask>;
        constructor(size: number);
        set filtered(value: number);
        get fullyFiltered(): boolean;
        get empty(): boolean;
    }
    export class $ChatDecorator {
        static PLAIN: $ChatDecorator;
    }
    export interface $ChatDecorator {
        decorate(player: $ServerPlayer | null, message: $Component_): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ChatDecorator}.
     */
    export type $ChatDecorator_ = ((arg0: $ServerPlayer, arg1: $Component) => $Component_);
    export class $FormattedText$ContentConsumer<T> {
    }
    export interface $FormattedText$ContentConsumer<T> {
        accept(content: string): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $FormattedText$ContentConsumer}.
     */
    export type $FormattedText$ContentConsumer_<T> = ((arg0: string) => (T) | undefined);
    export class $ClickEvent$Action extends $Enum<$ClickEvent$Action> implements $StringRepresentable {
        /**
         * Indicates whether this event can be run from chat text.
         */
        isAllowedFromServer(): boolean;
        static filterForSerialization(action: $ClickEvent$Action_): $DataResult<$ClickEvent$Action>;
        static values(): $ClickEvent$Action[];
        static valueOf(arg0: string): $ClickEvent$Action;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $MapCodec<$ClickEvent$Action>;
        static UNSAFE_CODEC: $MapCodec<$ClickEvent$Action>;
        static RUN_COMMAND: $ClickEvent$Action;
        static CHANGE_PAGE: $ClickEvent$Action;
        static COPY_TO_CLIPBOARD: $ClickEvent$Action;
        static SUGGEST_COMMAND: $ClickEvent$Action;
        static OPEN_FILE: $ClickEvent$Action;
        static OPEN_URL: $ClickEvent$Action;
        get allowedFromServer(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ClickEvent$Action}.
     */
    export type $ClickEvent$Action_ = "open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard";
    export class $SignedMessageBody$Packed extends $Record {
        timeStamp(): $Instant;
        lastSeen(): $LastSeenMessages$Packed;
        content(): string;
        salt(): number;
        write(buffer: $FriendlyByteBuf): void;
        unpack(signatureCache: $MessageSignatureCache): ($SignedMessageBody) | undefined;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: string, arg1: $Instant, arg2: number, arg3: $LastSeenMessages$Packed_);
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageBody$Packed}.
     */
    export type $SignedMessageBody$Packed_ = { salt?: number, timeStamp?: $Instant, content?: string, lastSeen?: $LastSeenMessages$Packed_,  } | [salt?: number, timeStamp?: $Instant, content?: string, lastSeen?: $LastSeenMessages$Packed_, ];
    export class $HoverEvent$ItemStackInfo {
        getItemStack(): $ItemStack;
        static CODEC: $Codec<$HoverEvent$ItemStackInfo>;
        static FULL_CODEC: $Codec<$HoverEvent$ItemStackInfo>;
        constructor(item: $Holder_<$Item>, count: number, components: $DataComponentPatch_);
        constructor(stack: $ItemStack_);
        get itemStack(): $ItemStack;
    }
    export class $FormattedText$StyledContentConsumer<T> {
    }
    export interface $FormattedText$StyledContentConsumer<T> {
        accept(style: $Style, content: string): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $FormattedText$StyledContentConsumer}.
     */
    export type $FormattedText$StyledContentConsumer_<T> = ((arg0: $Style, arg1: string) => (T) | undefined);
    export class $LastSeenMessages extends $Record {
        updateSignature(updaterOutput: $SignatureUpdater$Output_): void;
        pack(signatureCache: $MessageSignatureCache): $LastSeenMessages$Packed;
        entries(): $List<$MessageSignature>;
        static CODEC: $Codec<$LastSeenMessages>;
        static LAST_SEEN_MESSAGES_MAX_LENGTH: number;
        static EMPTY: $LastSeenMessages;
        constructor(arg0: $List_<$MessageSignature_>);
    }
    /**
     * Values that may be interpreted as {@link $LastSeenMessages}.
     */
    export type $LastSeenMessages_ = { entries?: $List_<$MessageSignature_>,  } | [entries?: $List_<$MessageSignature_>, ];
    export class $HoverEvent$Action<T> implements $StringRepresentable {
        /**
         * Indicates whether this event can be run from chat text.
         */
        isAllowedFromServer(): boolean;
        cast(parameter: $Object): T;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        codec: $MapCodec<$HoverEvent$TypedHoverEvent<T>>;
        static CODEC: $Codec<$HoverEvent$Action<never>>;
        static SHOW_ITEM: $HoverEvent$Action<$HoverEvent$ItemStackInfo>;
        static SHOW_ENTITY: $HoverEvent$Action<$HoverEvent$EntityTooltipInfo>;
        static UNSAFE_CODEC: $Codec<$HoverEvent$Action<never>>;
        static SHOW_TEXT: $HoverEvent$Action<$Component>;
        legacyCodec: $MapCodec<$HoverEvent$TypedHoverEvent<T>>;
        constructor(name: string, allowFromServer: boolean, codec: $Codec<T>, legacyConverter: $HoverEvent$LegacyConverter_<T>);
        get allowedFromServer(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    export class $ComponentContents$Type<T extends $ComponentContents> extends $Record implements $StringRepresentable {
        id(): string;
        codec(): $MapCodec<T>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        constructor(arg0: $MapCodec_<T>, arg1: string);
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ComponentContents$Type}.
     */
    export type $ComponentContents$Type_<T> = { id?: string, codec?: $MapCodec_<$ComponentContents_>,  } | [id?: string, codec?: $MapCodec_<$ComponentContents_>, ];
    export class $SignedMessageValidator {
        static LOGGER: $Logger;
        static ACCEPT_UNSIGNED: $SignedMessageValidator;
        static REJECT_ALL: $SignedMessageValidator;
    }
    export interface $SignedMessageValidator {
        updateAndValidate(message: $PlayerChatMessage_): $PlayerChatMessage;
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageValidator}.
     */
    export type $SignedMessageValidator_ = ((arg0: $PlayerChatMessage) => $PlayerChatMessage_);
    export interface $ChatType extends RegistryMarked<RegistryTypes.ChatTypeTag, RegistryTypes.ChatType> {}
    export class $Component {
        static selector(pattern: string, separator: ($Component_) | undefined): $MutableComponent;
        /**
         * Creates a copy of this component and also copies the style and siblings. Note that the siblings are copied shallowly, meaning the siblings themselves are not copied.
         */
        static empty(): $MutableComponent;
        static literal(name: string): $MutableComponent;
        static score(name: string, objective: string): $MutableComponent;
        static nullToEmpty(text: string | null): $Component;
        static translatable(name: string): $MutableComponent;
        static translatable(key: string, ...args: $Object[]): $MutableComponent;
        static translatableWithFallback(name: string, objective: string | null): $MutableComponent;
        static translatableWithFallback(key: string, fallback: string | null, ...args: $Object[]): $MutableComponent;
        static translatableEscape(key: string, ...args: $Object[]): $MutableComponent;
        static keybind(name: string): $MutableComponent;
        static nbt(nbtPathPattern: string, interpreting: boolean, separator: ($Component_) | undefined, dataSource: $DataSource): $MutableComponent;
        static translationArg(date: $Date): $Component;
        static translationArg(uri: $URI): $Component;
        static translationArg(chunkPos: $ChunkPos): $Component;
        static translationArg(location: $ResourceLocation_): $Component;
        static translationArg(uuid: $UUID_): $Component;
        static translationArg(message: $Message_): $Component;
    }
    export interface $Component extends $Message, $FormattedText {
        visit<T>(acceptor: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        visit<T>(acceptor: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes, limited to `maxLength` characters.
         */
        getString(maxLength: number): string;
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        getString(): string;
        getContents(): $ComponentContents;
        contains(other: $Component_): boolean;
        /**
         * Creates a copy of this component and also copies the style and siblings. Note that the siblings are copied shallowly, meaning the siblings themselves are not copied.
         */
        copy(): $MutableComponent;
        getVisualOrderText(): $FormattedCharSequence;
        /**
         * Gets the style of this component.
         */
        getStyle(): $Style;
        /**
         * Gets the sibling components of this one.
         */
        getSiblings(): $List<$Component>;
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        tryCollapseToString(): string;
        /**
         * Creates a copy of this component and also copies the style and siblings. Note that the siblings are copied shallowly, meaning the siblings themselves are not copied.
         */
        plainCopy(): $MutableComponent;
        /**
         * Gets the sibling components of this one.
         */
        toFlatList(): $List<$Component>;
        toFlatList(style: $Style): $List<$Component>;
        get contents(): $ComponentContents;
        get visualOrderText(): $FormattedCharSequence;
        get style(): $Style;
        get siblings(): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $Component}.
     */
    export type $Component_ = string | { text?: string, translate?: SpecialTypes.TranslationKey, with?: any[], color?: $KubeColor_, bold?: boolean, italic?: boolean, underlined?: boolean, strikethrough?: boolean, obfuscated?: boolean, insertion?: string, font?: string, click?: $ClickEvent_, hover?: $Component_, extra?: $Component_[],  } | $Component_[];
    export class $RemoteChatSession$Data extends $Record {
        profilePublicKey(): $ProfilePublicKey$Data;
        sessionId(): $UUID;
        validate(profile: $GameProfile, signatureValidator: $SignatureValidator_): $RemoteChatSession;
        static write(buffer: $FriendlyByteBuf, data: $RemoteChatSession$Data_): void;
        static read(buffer: $FriendlyByteBuf): $RemoteChatSession$Data;
        constructor(arg0: $UUID_, arg1: $ProfilePublicKey$Data_);
    }
    /**
     * Values that may be interpreted as {@link $RemoteChatSession$Data}.
     */
    export type $RemoteChatSession$Data_ = { sessionId?: $UUID_, profilePublicKey?: $ProfilePublicKey$Data_,  } | [sessionId?: $UUID_, profilePublicKey?: $ProfilePublicKey$Data_, ];
    /**
     * A Style for `Component`.
     * Stores color, text formatting (bold, etc.) as well as possible HoverEvent/ClickEvent.
     */
    export class $Style {
        /**
         * Whether text of this ChatStyle should be in bold.
         */
        isEmpty(): boolean;
        /**
         * Whether text of this ChatStyle should be in bold.
         */
        isObfuscated(): boolean;
        getColor(): $TextColor;
        withColor(formatting: $ChatFormatting_ | null): $Style;
        withColor(color: $TextColor_ | null): $Style;
        withColor(rgb: number): $Style;
        /**
         * The font to use for this Style
         */
        getFont(): $ResourceLocation;
        /**
         * The effective chat hover event.
         */
        getHoverEvent(): $HoverEvent;
        withClickEvent(clickEvent: $ClickEvent_ | null): $Style;
        /**
         * Merges the style with another one. If either style is empty the other will be returned. If a value already exists on the current style it will not be overridden.
         */
        applyTo(style: $Style): $Style;
        /**
         * Whether text of this ChatStyle should be in bold.
         */
        isBold(): boolean;
        /**
         * Whether text of this ChatStyle should be in bold.
         */
        isItalic(): boolean;
        /**
         * Whether text of this ChatStyle should be in bold.
         */
        isStrikethrough(): boolean;
        /**
         * Whether text of this ChatStyle should be in bold.
         */
        isUnderlined(): boolean;
        /**
         * The effective chat click event.
         */
        getClickEvent(): $ClickEvent;
        /**
         * Get the text to be inserted into Chat when the component is shift-clicked
         */
        getInsertion(): string;
        withBold(bold: boolean | null): $Style;
        withItalic(bold: boolean | null): $Style;
        withUnderlined(bold: boolean | null): $Style;
        withStrikethrough(bold: boolean | null): $Style;
        withObfuscated(bold: boolean | null): $Style;
        withHoverEvent(hoverEvent: $HoverEvent | null): $Style;
        withInsertion(insertion: string | null): $Style;
        withFont(fontId: $ResourceLocation_ | null): $Style;
        applyFormat(formatting: $ChatFormatting_): $Style;
        applyLegacyFormat(formatting: $ChatFormatting_): $Style;
        applyFormats(...formats: $ChatFormatting_[]): $Style;
        hoverEvent: $HoverEvent;
        clickEvent: $ClickEvent;
        static DEFAULT_FONT: $ResourceLocation;
        color: $TextColor;
        underlined: boolean;
        insertion: string;
        bold: boolean;
        strikethrough: boolean;
        static EMPTY: $Style;
        italic: boolean;
        obfuscated: boolean;
        font: $ResourceLocation;
        get empty(): boolean;
    }
    export class $LastSeenMessages$Packed extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        entries(): $List<$MessageSignature$Packed>;
        unpack(signatureCache: $MessageSignatureCache): ($LastSeenMessages) | undefined;
        static EMPTY: $LastSeenMessages$Packed;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $List_<$MessageSignature$Packed_>);
    }
    /**
     * Values that may be interpreted as {@link $LastSeenMessages$Packed}.
     */
    export type $LastSeenMessages$Packed_ = { entries?: $List_<$MessageSignature$Packed_>,  } | [entries?: $List_<$MessageSignature$Packed_>, ];
    export class $MessageSignature extends $Record {
        pack(signatureCache: $MessageSignatureCache): $MessageSignature$Packed;
        asByteBuffer(): $ByteBuffer;
        verify(validator: $SignatureValidator_, updater: $SignatureUpdater_): boolean;
        bytes(): number[];
        static write(buffer: $FriendlyByteBuf, signature: $MessageSignature_): void;
        static read(buffer: $FriendlyByteBuf): $MessageSignature;
        static BYTES: number;
        static CODEC: $Codec<$MessageSignature>;
        constructor(bytes: number[]);
    }
    /**
     * Values that may be interpreted as {@link $MessageSignature}.
     */
    export type $MessageSignature_ = { bytes?: number[],  } | [bytes?: number[], ];
    export class $SignedMessageChain$Decoder {
        static unsigned(id: $UUID_, shouldEnforceSecureProfile: $BooleanSupplier_): $SignedMessageChain$Decoder;
    }
    export interface $SignedMessageChain$Decoder {
        setChainBroken(): void;
        unpack(signature: $MessageSignature_ | null, body: $SignedMessageBody_): $PlayerChatMessage;
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageChain$Decoder}.
     */
    export type $SignedMessageChain$Decoder_ = ((arg0: $MessageSignature, arg1: $SignedMessageBody) => $PlayerChatMessage_);
    export class $HoverEvent$EntityTooltipInfo {
        static legacyCreate(name: $Component_, ops: $RegistryOps<never> | null): $DataResult<$HoverEvent$EntityTooltipInfo>;
        getTooltipLines(): $List<$Component>;
        static CODEC: $Codec<$HoverEvent$EntityTooltipInfo>;
        name: ($Component) | undefined;
        id: $UUID;
        type: $EntityType<never>;
        constructor(type: $EntityType_<never>, id: $UUID_, name: $Component_ | null);
        constructor(type: $EntityType_<never>, id: $UUID_, name: ($Component_) | undefined);
        get tooltipLines(): $List<$Component>;
    }
    export class $PlayerChatMessage extends $Record implements $Ownable {
        removeSignature(): $PlayerChatMessage;
        hasExpiredClient(timestamp: $Instant): boolean;
        chatheads$getOwner(): $PlayerInfo;
        chatheads$setOwner(playerInfo: $PlayerInfo): void;
        hasExpiredServer(timestamp: $Instant): boolean;
        static updateSignature(output: $SignatureUpdater$Output_, link: $SignedMessageLink_, body: $SignedMessageBody_): void;
        signedBody(): $SignedMessageBody;
        unsignedContent(): $Component;
        filterMask(): $FilterMask;
        removeUnsignedContent(): $PlayerChatMessage;
        isFullyFiltered(): boolean;
        timeStamp(): $Instant;
        withUnsignedContent(message: $Component_): $PlayerChatMessage;
        decoratedContent(): $Component;
        hasSignatureFrom(uuid: $UUID_): boolean;
        signedContent(): string;
        sender(): $UUID;
        verify(validator: $SignatureValidator_): boolean;
        link(): $SignedMessageLink;
        static unsigned(sender: $UUID_, content: string): $PlayerChatMessage;
        isSystem(): boolean;
        salt(): number;
        signature(): $MessageSignature;
        filter(shouldFilter: boolean): $PlayerChatMessage;
        filter(mask: $FilterMask): $PlayerChatMessage;
        static system(content: string): $PlayerChatMessage;
        hasSignature(): boolean;
        static MESSAGE_EXPIRES_AFTER_SERVER: $Duration;
        static MAP_CODEC: $MapCodec<$PlayerChatMessage>;
        static MESSAGE_EXPIRES_AFTER_CLIENT: $Duration;
        constructor(arg0: $SignedMessageLink_, arg1: $MessageSignature_ | null, arg2: $SignedMessageBody_, arg3: $Component_ | null, arg4: $FilterMask);
        get fullyFiltered(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PlayerChatMessage}.
     */
    export type $PlayerChatMessage_ = { signedBody?: $SignedMessageBody_, unsignedContent?: $Component_, filterMask?: $FilterMask, signature?: $MessageSignature_, link?: $SignedMessageLink_,  } | [signedBody?: $SignedMessageBody_, unsignedContent?: $Component_, filterMask?: $FilterMask, signature?: $MessageSignature_, link?: $SignedMessageLink_, ];
    /**
     * A Component which can have its Style and siblings modified.
     */
    export class $MutableComponent implements $Component, $ComponentKJS {
        getContents(): $ComponentContents;
        /**
         * Add the given component to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        append(sibling: $Component_): $MutableComponent;
        static create(contents: $ComponentContents_): $MutableComponent;
        withColor(color: number): $MutableComponent;
        getVisualOrderText(): $FormattedCharSequence;
        withStyle(format: $ChatFormatting_): $MutableComponent;
        withStyle(...formats: $ChatFormatting_[]): $MutableComponent;
        /**
         * Sets the style for this component and returns the component itself.
         */
        withStyle(style: $Style): $MutableComponent;
        withStyle(modifyFunc: $UnaryOperator_<$Style>): $MutableComponent;
        /**
         * Gets the style of this component.
         */
        getStyle(): $Style;
        /**
         * Gets the sibling components of this one.
         */
        getSiblings(): $List<$Component>;
        /**
         * Sets the style for this component and returns the component itself.
         */
        setStyle(style: $Style): $MutableComponent;
        visit<T>(arg0: $FormattedText$StyledContentConsumer_<T>, arg1: $Style): (T) | undefined;
        visit<T>(arg0: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        getString(arg0: number): string;
        getString(): string;
        contains(arg0: $Component_): boolean;
        copy(): $MutableComponent;
        tryCollapseToString(): string;
        plainCopy(): $MutableComponent;
        /**
         * Gets the sibling components of this one.
         */
        toFlatList(): $List<$Component>;
        toFlatList(arg0: $Style): $List<$Component>;
        forEach(action: $Consumer_<$Component>): void;
        getCodec(): $Codec<never>;
        self(): $MutableComponent;
        asIterable(): $Iterable<$Component>;
        color(c: $KubeColor_): $MutableComponent;
        bold(value: boolean): $MutableComponent;
        bold(): $MutableComponent;
        italic(): $MutableComponent;
        italic(value: boolean): $MutableComponent;
        underlined(): $MutableComponent;
        underlined(value: boolean): $MutableComponent;
        strikethrough(): $MutableComponent;
        strikethrough(value: boolean): $MutableComponent;
        obfuscated(): $MutableComponent;
        obfuscated(value: boolean): $MutableComponent;
        click(s: $ClickEvent_): $MutableComponent;
        hasStyle(): boolean;
        hasSiblings(): boolean;
        black(): $MutableComponent;
        darkBlue(): $MutableComponent;
        darkGreen(): $MutableComponent;
        darkAqua(): $MutableComponent;
        darkRed(): $MutableComponent;
        darkPurple(): $MutableComponent;
        gold(): $MutableComponent;
        gray(): $MutableComponent;
        darkGray(): $MutableComponent;
        blue(): $MutableComponent;
        green(): $MutableComponent;
        aqua(): $MutableComponent;
        red(): $MutableComponent;
        lightPurple(): $MutableComponent;
        yellow(): $MutableComponent;
        white(): $MutableComponent;
        noColor(): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        insertion(string: string): $MutableComponent;
        font(s: $ResourceLocation_): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        clickRunCommand(string: string): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        clickSuggestCommand(string: string): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        clickCopy(string: string): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        clickChangePage(string: string): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        clickOpenUrl(string: string): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        clickOpenFile(string: string): $MutableComponent;
        /**
         * Add the given component to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        hover(sibling: $Component_): $MutableComponent;
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        rawComponent(): $MutableComponent;
        /**
         * @deprecated
         */
        rawCopy(): $MutableComponent;
        /**
         * @deprecated
         */
        component(): $Component;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        constructor(contents: $ComponentContents_, siblings: $List_<$Component_>, style: $Style);
        get contents(): $ComponentContents;
        get visualOrderText(): $FormattedCharSequence;
        get siblings(): $List<$Component>;
        get codec(): $Codec<never>;
    }
    /**
     * Values that may be interpreted as {@link $MutableComponent}.
     */
    export type $MutableComponent_ = string | { text?: string, translate?: SpecialTypes.TranslationKey, with?: any[], color?: $KubeColor_, bold?: boolean, italic?: boolean, underlined?: boolean, strikethrough?: boolean, obfuscated?: boolean, insertion?: string, font?: string, click?: $ClickEvent_, hover?: $MutableComponent_, extra?: $MutableComponent_[],  } | $MutableComponent_[];
    export class $HoverEvent$TypedHoverEvent<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $HoverEvent$TypedHoverEvent}.
     */
    export type $HoverEvent$TypedHoverEvent_<T> = { action?: $HoverEvent$Action<any>, value?: any,  } | [action?: $HoverEvent$Action<any>, value?: any, ];
    export class $ChatType$Bound extends $Record {
        chatType(): $Holder<$ChatType>;
        withTargetName(targetName: $Component_): $ChatType$Bound;
        decorateNarration(content: $Component_): $Component;
        name(): $Component;
        targetName(): ($Component) | undefined;
        decorate(content: $Component_): $Component;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChatType$Bound>;
        constructor(chatType: $Holder_<$ChatType>, name: $Component_);
        constructor(arg0: $Holder_<$ChatType>, arg1: $Component_, arg2: ($Component_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ChatType$Bound}.
     */
    export type $ChatType$Bound_ = { chatType?: $Holder_<$ChatType>, targetName?: ($Component_) | undefined, name?: $Component_,  } | [chatType?: $Holder_<$ChatType>, targetName?: ($Component_) | undefined, name?: $Component_, ];
}
