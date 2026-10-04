import { $DataResult, $MapEncoder, $DynamicOps, $Codec, $MapDecoder } from "@package/com/mojang/serialization";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $EquipmentSlot_, $Entity, $EquipmentSlotGroup, $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $AttributeModifier_, $AttributeModifier, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID, $List, $UUID_, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $DecimalFormat } from "@package/java/text";
import { $Predicate, $Consumer, $BiConsumer_, $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $Holder_, $HolderSet, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Enum, $Record } from "@package/java/lang";
import { $PropertyMap } from "@package/com/mojang/authlib/properties";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack_, $ItemStack, $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/component" {
    export class $Fireworks extends $Record implements $TooltipProvider {
        flightDuration(): number;
        addToTooltip(context: $Item$TooltipContext, tooltipAdder: $Consumer_<$Component>, tooltipFlag: $TooltipFlag): void;
        explosions(): $List<$FireworkExplosion>;
        static CODEC: $Codec<$Fireworks>;
        static MAX_EXPLOSIONS: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Fireworks>;
        constructor(flightDuration: number, explosions: $List_<$FireworkExplosion_>);
    }
    /**
     * Values that may be interpreted as {@link $Fireworks}.
     */
    export type $Fireworks_ = { explosions?: $List_<$FireworkExplosion_>, flightDuration?: number,  } | [explosions?: $List_<$FireworkExplosion_>, flightDuration?: number, ];
    export class $FireworkExplosion$Shape extends $Enum<$FireworkExplosion$Shape> implements $StringRepresentable, $IExtensibleEnum {
        getName(): $MutableComponent;
        static values(): $FireworkExplosion$Shape[];
        static valueOf(arg0: string): $FireworkExplosion$Shape;
        getId(): number;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        static byId(id: number): $FireworkExplosion$Shape;
        getRemappedEnumConstantName(): string;
        static SMALL_BALL: $FireworkExplosion$Shape;
        static LARGE_BALL: $FireworkExplosion$Shape;
        static CODEC: $Codec<$FireworkExplosion$Shape>;
        static STAR: $FireworkExplosion$Shape;
        static CREEPER: $FireworkExplosion$Shape;
        static BURST: $FireworkExplosion$Shape;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FireworkExplosion$Shape>;
        get id(): number;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FireworkExplosion$Shape}.
     */
    export type $FireworkExplosion$Shape_ = "small_ball" | "large_ball" | "star" | "creeper" | "burst";
    export class $ItemAttributeModifiers$Entry extends $Record {
        attribute(): $Holder<$Attribute>;
        slot(): $EquipmentSlotGroup;
        matches(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): boolean;
        modifier(): $AttributeModifier;
        static CODEC: $Codec<$ItemAttributeModifiers$Entry>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttributeModifiers$Entry>;
        constructor(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_, arg2: $EquipmentSlotGroup_);
    }
    /**
     * Values that may be interpreted as {@link $ItemAttributeModifiers$Entry}.
     */
    export type $ItemAttributeModifiers$Entry_ = { modifier?: $AttributeModifier_, slot?: $EquipmentSlotGroup_, attribute?: $Holder_<$Attribute>,  } | [modifier?: $AttributeModifier_, slot?: $EquipmentSlotGroup_, attribute?: $Holder_<$Attribute>, ];
    export class $Tool extends $Record {
        defaultMiningSpeed(): number;
        getMiningSpeed(state: $BlockState_): number;
        damagePerBlock(): number;
        isCorrectForDrops(state: $BlockState_): boolean;
        rules(): $List<$Tool$Rule>;
        static CODEC: $Codec<$Tool>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Tool>;
        constructor(arg0: $List_<$Tool$Rule_>, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $Tool}.
     */
    export type $Tool_ = { rules?: $List_<$Tool$Rule_>, defaultMiningSpeed?: number, damagePerBlock?: number,  } | [rules?: $List_<$Tool$Rule_>, defaultMiningSpeed?: number, damagePerBlock?: number, ];
    export class $ResolvableProfile extends $Record {
        name(): (string) | undefined;
        id(): ($UUID) | undefined;
        resolve(): $CompletableFuture<$ResolvableProfile>;
        properties(): $PropertyMap;
        isResolved(): boolean;
        gameProfile(): $GameProfile;
        static CODEC: $Codec<$ResolvableProfile>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ResolvableProfile>;
        constructor(profile: $GameProfile);
        constructor(arg0: (string) | undefined, arg1: ($UUID_) | undefined, arg2: $PropertyMap, arg3: $GameProfile);
        constructor(name: (string) | undefined, id: ($UUID_) | undefined, properties: $PropertyMap);
        get resolved(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ResolvableProfile}.
     */
    export type $ResolvableProfile_ = { gameProfile?: $GameProfile, properties?: $PropertyMap, id?: ($UUID_) | undefined, name?: (string) | undefined,  } | [gameProfile?: $GameProfile, properties?: $PropertyMap, id?: ($UUID_) | undefined, name?: (string) | undefined, ];
    export class $Tool$Rule extends $Record {
        correctForDrops(): (boolean) | undefined;
        static overrideSpeed(blocks: $List_<$Block_>, speed: number): $Tool$Rule;
        static overrideSpeed(blocks: $TagKey_<$Block>, speed: number): $Tool$Rule;
        static minesAndDrops(blocks: $TagKey_<$Block>, speed: number): $Tool$Rule;
        static minesAndDrops(blocks: $List_<$Block_>, speed: number): $Tool$Rule;
        static deniesDrops(blocks: $TagKey_<$Block>): $Tool$Rule;
        blocks(): $HolderSet<$Block>;
        speed(): (number) | undefined;
        static CODEC: $Codec<$Tool$Rule>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Tool$Rule>;
        constructor(arg0: $HolderSet_<$Block>, arg1: (number) | undefined, arg2: (boolean) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $Tool$Rule}.
     */
    export type $Tool$Rule_ = { correctForDrops?: (boolean) | undefined, blocks?: $HolderSet_<$Block>, speed?: (number) | undefined,  } | [correctForDrops?: (boolean) | undefined, blocks?: $HolderSet_<$Block>, speed?: (number) | undefined, ];
    export class $ItemAttributeModifiers extends $Record {
        withModifierAdded(attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_, slot: $EquipmentSlotGroup_): $ItemAttributeModifiers;
        showInTooltip(): boolean;
        withTooltip(showInTooltip: boolean): $ItemAttributeModifiers;
        modifiers(): $List<$ItemAttributeModifiers$Entry>;
        static builder(): $ItemAttributeModifiers$Builder;
        compute(baseValue: number, arg1: $EquipmentSlot_): number;
        forEach(slotGroup: $EquipmentSlotGroup_, action: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        forEach(equipmentSlot: $EquipmentSlot_, action: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        static CODEC: $Codec<$ItemAttributeModifiers>;
        static ATTRIBUTE_MODIFIER_FORMAT: $DecimalFormat;
        static EMPTY: $ItemAttributeModifiers;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttributeModifiers>;
        constructor(arg0: $List_<$ItemAttributeModifiers$Entry_>, arg1: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ItemAttributeModifiers}.
     */
    export type $ItemAttributeModifiers_ = { showInTooltip?: boolean, modifiers?: $List_<$ItemAttributeModifiers$Entry_>,  } | [showInTooltip?: boolean, modifiers?: $List_<$ItemAttributeModifiers$Entry_>, ];
    export class $ItemAttributeModifiers$Builder {
        add(attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_, slot: $EquipmentSlotGroup_): $ItemAttributeModifiers$Builder;
        build(): $ItemAttributeModifiers;
        constructor();
    }
    export class $FireworkExplosion extends $Record implements $TooltipProvider {
        fadeColors(): $IntList;
        hasTrail(): boolean;
        hasTwinkle(): boolean;
        addShapeNameTooltip(tooltipAdder: $Consumer_<$Component>): void;
        addAdditionalTooltip(tooltipAdder: $Consumer_<$Component>): void;
        withFadeColors(fadeColors: $IntList): $FireworkExplosion;
        addToTooltip(context: $Item$TooltipContext, tooltipAdder: $Consumer_<$Component>, tooltipFlag: $TooltipFlag): void;
        shape(): $FireworkExplosion$Shape;
        colors(): $IntList;
        static CODEC: $Codec<$FireworkExplosion>;
        static DEFAULT: $FireworkExplosion;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FireworkExplosion>;
        static COLOR_LIST_CODEC: $Codec<$IntList>;
        constructor(shape: $FireworkExplosion$Shape_, colors: $IntList, fadeColors: $IntList, hasTrail: boolean, hasTwinkle: boolean);
    }
    /**
     * Values that may be interpreted as {@link $FireworkExplosion}.
     */
    export type $FireworkExplosion_ = { shape?: $FireworkExplosion$Shape_, hasTwinkle?: boolean, colors?: $IntList, hasTrail?: boolean, fadeColors?: $IntList,  } | [shape?: $FireworkExplosion$Shape_, hasTwinkle?: boolean, colors?: $IntList, hasTrail?: boolean, fadeColors?: $IntList, ];
    export class $ItemLore extends $Record implements $TooltipProvider {
        addToTooltip(context: $Item$TooltipContext, tooltipAdder: $Consumer_<$Component>, tooltipFlag: $TooltipFlag): void;
        withLineAdded(lines: $Component_): $ItemLore;
        styledLines(): $List<$Component>;
        lines(): $List<$Component>;
        static CODEC: $Codec<$ItemLore>;
        static MAX_LINES: number;
        static EMPTY: $ItemLore;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemLore>;
        constructor(lines: $List_<$Component_>, styledLines: $List_<$Component_>);
        constructor(lines: $List_<$Component_>);
    }
    /**
     * Values that may be interpreted as {@link $ItemLore}.
     */
    export type $ItemLore_ = { lines?: $List_<$Component_>, styledLines?: $List_<$Component_>,  } | [lines?: $List_<$Component_>, styledLines?: $List_<$Component_>, ];
    export class $CustomData {
        matchedBy(tag: $CompoundTag_): boolean;
        static itemMatcher(componentType: $DataComponentType_<$CustomData>, tag: $CompoundTag_): $Predicate<$ItemStack>;
        loadInto(entity: $Entity): void;
        loadInto(blockEntity: $BlockEntity, levelRegistry: $HolderLookup$Provider): boolean;
        copyTag(): $CompoundTag;
        size(): number;
        update(updater: $Consumer_<$CompoundTag>): $CustomData;
        static update(componentType: $DataComponentType_<$CustomData>, stack: $ItemStack_, updater: $Consumer_<$CompoundTag>): void;
        update<T>(ops: $DynamicOps<$Tag_>, encoder: $MapEncoder<T>, value: T): $DataResult<$CustomData>;
        isEmpty(): boolean;
        static of(tag: $CompoundTag_): $CustomData;
        contains(key: string): boolean;
        /**
         * @deprecated
         */
        getUnsafe(): $CompoundTag;
        static set(componentType: $DataComponentType_<$CustomData>, stack: $ItemStack_, tag: $CompoundTag_): void;
        read<T>(decoder: $MapDecoder<T>): $DataResult<T>;
        read<T>(ops: $DynamicOps<$Tag_>, decoder: $MapDecoder<T>): $DataResult<T>;
        static CODEC: $Codec<$CustomData>;
        static CODEC_WITH_ID: $Codec<$CustomData>;
        static EMPTY: $CustomData;
        /**
         * @deprecated
         */
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CustomData>;
        get empty(): boolean;
        get unsafe(): $CompoundTag;
    }
    export class $TooltipProvider {
    }
    export interface $TooltipProvider {
        addToTooltip(context: $Item$TooltipContext, tooltipAdder: $Consumer_<$Component>, tooltipFlag: $TooltipFlag): void;
    }
    /**
     * Values that may be interpreted as {@link $TooltipProvider}.
     */
    export type $TooltipProvider_ = ((arg0: $Item$TooltipContext, arg1: $Consumer<$Component>, arg2: $TooltipFlag) => void);
}
