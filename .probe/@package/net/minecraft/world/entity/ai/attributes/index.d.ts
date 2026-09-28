import { $TooltipFlag } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ListTag, $CompoundTag, $ListTag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MutableComponent, $TextColor, $Component } from "@package/net/minecraft/network/chat";
import { $Multimap } from "@package/com/google/common/collect";
import { $Map_, $Map, $Set, $Collection } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IntFunction, $Consumer_ } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $IAttributeExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/entity/ai/attributes" {
    export class $AttributeSupplier {
        getBaseValue(attribute: $Holder_<$Attribute>): number;
        getModifierValue(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): number;
        createInstance(onDirty: $Consumer_<$AttributeInstance>, attribute: $Holder_<$Attribute>): $AttributeInstance;
        hasAttribute(attribute: $Holder_<$Attribute>): boolean;
        getValue(attribute: $Holder_<$Attribute>): number;
        static builder(): $AttributeSupplier$Builder;
        hasModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): boolean;
        instances: $Map<$Holder<$Attribute>, $AttributeInstance>;
        constructor(instances: $Map_<$Holder_<$Attribute>, $AttributeInstance>);
    }
    export class $AttributeSupplier$Builder {
        hasAttribute(arg0: $Holder_<$Attribute>): boolean;
        add(attribute: $Holder_<$Attribute>, baseValue: number): $AttributeSupplier$Builder;
        add(attribute: $Holder_<$Attribute>): $AttributeSupplier$Builder;
        combine(arg0: $AttributeSupplier$Builder): void;
        build(): $AttributeSupplier;
        constructor();
        constructor(arg0: $AttributeSupplier);
    }
    export class $AttributeMap {
        getSyncableAttributes(): $Collection<$AttributeInstance>;
        getAttributesToSync(): $Set<$AttributeInstance>;
        removeAttributeModifiers(modifiers: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>): void;
        getAttributesToUpdate(): $Set<$AttributeInstance>;
        getBaseValue(attribute: $Holder_<$Attribute>): number;
        assignAllValues(map: $AttributeMap): void;
        getModifierValue(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): number;
        addTransientAttributeModifiers(modifiers: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>): void;
        assignBaseValues(map: $AttributeMap): void;
        hasAttribute(attribute: $Holder_<$Attribute>): boolean;
        load(nbt: $ListTag_): void;
        getValue(attribute: $Holder_<$Attribute>): number;
        getInstance(attribute: $Holder_<$Attribute>): $AttributeInstance;
        save(): $ListTag;
        hasModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): boolean;
        constructor(supplier: $AttributeSupplier);
    }
    export class $AttributeModifier$Operation extends $Enum<$AttributeModifier$Operation> implements $StringRepresentable {
        static values(): $AttributeModifier$Operation[];
        static valueOf(arg0: string): $AttributeModifier$Operation;
        id(): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$AttributeModifier$Operation>;
        static ADD_MULTIPLIED_BASE: $AttributeModifier$Operation;
        static ADD_MULTIPLIED_TOTAL: $AttributeModifier$Operation;
        static BY_ID: $IntFunction<$AttributeModifier$Operation>;
        static ADD_VALUE: $AttributeModifier$Operation;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $AttributeModifier$Operation>;
    }
    /**
     * Values that may be interpreted as {@link $AttributeModifier$Operation}.
     */
    export type $AttributeModifier$Operation_ = "add_value" | "add_multiplied_base" | "add_multiplied_total";
    export class $AttributeInstance {
        getModifier(id: $ResourceLocation_): $AttributeModifier;
        removeModifier(modifier: $AttributeModifier_): void;
        removeModifier(id: $ResourceLocation_): boolean;
        addTransientModifier(modifier: $AttributeModifier_): void;
        getBaseValue(): number;
        setBaseValue(baseValue: number): void;
        removeModifiers(): void;
        addOrUpdateTransientModifier(modifier: $AttributeModifier_): void;
        addOrReplacePermanentModifier(modifier: $AttributeModifier_): void;
        setDirty(): void;
        addPermanentModifier(modifier: $AttributeModifier_): void;
        getModifiers(operation: $AttributeModifier$Operation_): $Map<$ResourceLocation, $AttributeModifier>;
        getModifiers(): $Set<$AttributeModifier>;
        load(nbt: $CompoundTag_): void;
        getValue(): number;
        save(): $CompoundTag;
        getAttribute(): $Holder<$Attribute>;
        hasModifier(id: $ResourceLocation_): boolean;
        replaceFrom(instance: $AttributeInstance): void;
        static ID_FIELD: string;
        constructor(attribute: $Holder_<$Attribute>, onDirty: $Consumer_<$AttributeInstance>);
    }
    /**
     * Defines an entity attribute. These are properties of entities that can be dynamically modified.
     * @see net.minecraft.core.Registry#ATTRIBUTE
     */
    export class $Attribute implements $IAttributeExtension {
        /**
         * Checks if the attribute value should be kept in sync on the client.
         * @return Whether the attribute value should be kept in sync on the client.
         */
        isClientSyncable(): boolean;
        /**
         * Sanitizes the value of the attribute to fit within the expected parameter range of the attribute.
         * @return The sanitized attribute value.
         */
        sanitizeValue(value: number): number;
        getMergedStyle(arg0: boolean): $TextColor;
        /**
         * Sets whether the attribute value should be synced to the client.
         * @return The same attribute instance being modified.
         */
        setSyncable(watch: boolean): $Attribute;
        setSentiment(sentiment: $Attribute$Sentiment_): $Attribute;
        /**
         * Gets the default value for the attribute.
         * @return The default value for the attribute.
         */
        getDefaultValue(): number;
        /**
         * Gets the description Id of the attribute. This is most commonly used as a localization key.
         * @return The description Id of the attribute.
         */
        getDescriptionId(): string;
        getStyle(isPositive: boolean): $ChatFormatting;
        toValueComponent(arg0: $AttributeModifier$Operation_, arg1: number, arg2: $TooltipFlag): $MutableComponent;
        getDebugInfo(arg0: $AttributeModifier_, arg1: $TooltipFlag): $Component;
        toComponent(arg0: $AttributeModifier_, arg1: $TooltipFlag): $MutableComponent;
        getBaseId(): $ResourceLocation;
        toBaseComponent(arg0: number, arg1: number, arg2: boolean, arg3: $TooltipFlag): $MutableComponent;
        static MERGED_GRAY: $TextColor;
        static MERGED_RED: $TextColor;
        static CODEC: $Codec<$Holder<$Attribute>>;
        static MERGED_BLUE: $TextColor;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Attribute>>;
        constructor(descriptionId: string, defaultValue: number);
    }
    /**
     * Values that may be interpreted as {@link $Attribute}.
     */
    export type $Attribute_ = RegistryTypes.Attribute;
    export class $AttributeModifier extends $Record {
        amount(): number;
        static load(nbt: $CompoundTag_): $AttributeModifier;
        id(): $ResourceLocation;
        save(): $CompoundTag;
        is(id: $ResourceLocation_): boolean;
        operation(): $AttributeModifier$Operation;
        static CODEC: $Codec<$AttributeModifier>;
        static MAP_CODEC: $MapCodec<$AttributeModifier>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $AttributeModifier>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: $AttributeModifier$Operation_);
    }
    /**
     * Values that may be interpreted as {@link $AttributeModifier}.
     */
    export type $AttributeModifier_ = { id?: $ResourceLocation_, amount?: number, operation?: $AttributeModifier$Operation_,  } | [id?: $ResourceLocation_, amount?: number, operation?: $AttributeModifier$Operation_, ];
    export class $Attribute$Sentiment extends $Enum<$Attribute$Sentiment> {
        static values(): $Attribute$Sentiment[];
        static valueOf(arg0: string): $Attribute$Sentiment;
        getStyle(isPositive: boolean): $ChatFormatting;
        static POSITIVE: $Attribute$Sentiment;
        static NEGATIVE: $Attribute$Sentiment;
        static NEUTRAL: $Attribute$Sentiment;
    }
    /**
     * Values that may be interpreted as {@link $Attribute$Sentiment}.
     */
    export type $Attribute$Sentiment_ = "positive" | "neutral" | "negative";
    export interface $Attribute extends RegistryMarked<RegistryTypes.AttributeTag, RegistryTypes.Attribute> {}
}
