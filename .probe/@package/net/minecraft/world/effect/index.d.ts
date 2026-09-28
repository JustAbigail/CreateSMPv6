import { $Int2DoubleFunction, $Int2DoubleFunction_, $Int2IntFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Codec } from "@package/com/mojang/serialization";
import { $Tag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Entity, $Entity$RemovalReason_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $MobEffectInstanceAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $AttributeModifier, $Attribute, $AttributeModifier$Operation_, $AttributeModifier$Operation, $AttributeMap } from "@package/net/minecraft/world/entity/ai/attributes";
import { $IClientMobEffectExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $Set_, $Map, $Set } from "@package/java/util";
import { $BiConsumer_, $Consumer_ } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $IMobEffectExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record, $Runnable_, $Comparable } from "@package/java/lang";
import { $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/effect" {
    export class $MobEffectCategory extends $Enum<$MobEffectCategory> {
        getTooltipFormatting(): $ChatFormatting;
        static values(): $MobEffectCategory[];
        static valueOf(arg0: string): $MobEffectCategory;
        static HARMFUL: $MobEffectCategory;
        static BENEFICIAL: $MobEffectCategory;
        static NEUTRAL: $MobEffectCategory;
    }
    /**
     * Values that may be interpreted as {@link $MobEffectCategory}.
     */
    export type $MobEffectCategory_ = "beneficial" | "harmful" | "neutral";
    export class $MobEffect implements $FeatureElement, $IMobEffectExtension {
        onMobRemoved(livingEntity: $LivingEntity, amplifier: number, reason: $Entity$RemovalReason_): void;
        onEffectAdded(livingEntity: $LivingEntity, amplifier: number): void;
        onEffectStarted(livingEntity: $LivingEntity, amplifier: number): void;
        addAttributeModifiers(attributeMap: $AttributeMap, amplifier: number): void;
        removeAttributeModifiers(attributeMap: $AttributeMap): void;
        onMobHurt(livingEntity: $LivingEntity, amplifier: number, damageSource: $DamageSource_, amount: number): void;
        addAttributeModifier(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_, arg2: $AttributeModifier$Operation_, arg3: $Int2DoubleFunction_): $MobEffect;
        addAttributeModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, arg3: $AttributeModifier$Operation_): $MobEffect;
        withSoundOnAdded(sound: $SoundEvent_): $MobEffect;
        setBlendDuration(blendDuration: number): $MobEffect;
        /**
         * Returns the color of the potion liquid.
         */
        getBlendDurationTicks(): number;
        applyEffectTick(livingEntity: $LivingEntity, amplifier: number): boolean;
        applyInstantenousEffect(source: $Entity | null, indirectSource: $Entity | null, livingEntity: $LivingEntity, amplifier: number, health: number): void;
        /**
         * Get if the potion is beneficial to the player. Beneficial potions are shown on the first row of the HUD
         */
        isInstantenous(): boolean;
        /**
         * Returns the name of the effect.
         */
        getOrCreateDescriptionId(): string;
        createModifiers(amplifier: number, output: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        /**
         * Get if the potion is beneficial to the player. Beneficial potions are shown on the first row of the HUD
         */
        isBeneficial(): boolean;
        createParticleOptions(effect: $MobEffectInstance): $ParticleOptions;
        /**
         * @deprecated
         */
        initializeClient(arg0: $Consumer_<$IClientMobEffectExtensions>): void;
        shouldApplyEffectTickThisTick(duration: number, amplifier: number): boolean;
        getDisplayName(): $Component;
        getCategory(): $MobEffectCategory;
        /**
         * Returns the color of the potion liquid.
         */
        getColor(): number;
        requiredFeatures(): $FeatureFlagSet;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $MobEffect;
        /**
         * Returns the name of the effect.
         */
        getDescriptionId(): string;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        fillEffectCures(arg0: $Set_<$EffectCure>, arg1: $MobEffectInstance): void;
        getSortOrder(arg0: $MobEffectInstance): number;
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
        constructor(category: $MobEffectCategory_, color: number);
        constructor(category: $MobEffectCategory_, color: number, particle: $ParticleOptions_);
    }
    /**
     * Values that may be interpreted as {@link $MobEffect}.
     */
    export type $MobEffect_ = RegistryTypes.MobEffect;
    export interface $MobEffect extends RegistryMarked<RegistryTypes.MobEffectTag, RegistryTypes.MobEffect> {}
    export class $MobEffect$AttributeTemplate extends $Record {
        curve(): $Int2DoubleFunction;
        amount(): number;
        id(): $ResourceLocation;
        create(level: number): $AttributeModifier;
        operation(): $AttributeModifier$Operation;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: $AttributeModifier$Operation_);
        constructor(id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_, curve: $Int2DoubleFunction_ | null);
    }
    /**
     * Values that may be interpreted as {@link $MobEffect$AttributeTemplate}.
     */
    export type $MobEffect$AttributeTemplate_ = { curve?: $Int2DoubleFunction_, amount?: number, operation?: $AttributeModifier$Operation_, id?: $ResourceLocation_,  } | [curve?: $Int2DoubleFunction_, amount?: number, operation?: $AttributeModifier$Operation_, id?: $ResourceLocation_, ];
    export class $MobEffectInstance implements $Comparable<$MobEffectInstance>, $MobEffectInstanceAccessor {
        /**
         * @note_to_llm Check MobEffectUtils binding for easier way to create MobEffectInstance.
         */
        onMobRemoved(livingEntity: $LivingEntity, reason: $Entity$RemovalReason_): void;
        getEffect(): $Holder<$MobEffect>;
        /**
         * Gets whether this potion effect originated from a beacon
         */
        isVisible(): boolean;
        getParticleOptions(): $ParticleOptions;
        /**
         * Gets whether this potion effect originated from a beacon
         */
        isAmbient(): boolean;
        onEffectAdded(livingEntity: $LivingEntity): void;
        onEffectStarted(livingEntity: $LivingEntity): void;
        copyBlendState(other: $MobEffectInstance): void;
        getAmplifier(): number;
        onMobHurt(livingEntity: $LivingEntity, damageSource: $DamageSource_, amount: number): void;
        getCures(): $Set<$EffectCure>;
        getDuration(): number;
        skipBlending(): void;
        /**
         * Gets whether this potion effect originated from a beacon
         */
        showIcon(): boolean;
        setDetailsFrom(other: $MobEffectInstance): void;
        getBlendFactor(entity: $LivingEntity, delta: number): number;
        /**
         * Gets whether this potion effect originated from a beacon
         */
        isInfiniteDuration(): boolean;
        endsWithin(duration: number): boolean;
        mapDuration(mapper: $Int2IntFunction_): number;
        compareTo(other: $MobEffectInstance): number;
        update(other: $MobEffectInstance): boolean;
        /**
         * Read a custom potion effect from a potion item's NBT data.
         */
        static load(nbt: $CompoundTag_): $MobEffectInstance;
        save(): $Tag;
        is(effect: $Holder_<$MobEffect>): boolean;
        tick(entity: $LivingEntity, onExpirationRunnable: $Runnable_): boolean;
        getDescriptionId(): string;
        create$getHiddenEffect(): $MobEffectInstance;
        static MAX_AMPLIFIER: number;
        static CODEC: $Codec<$MobEffectInstance>;
        static INFINITE_DURATION: number;
        static MIN_AMPLIFIER: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MobEffectInstance>;
        constructor(effect: $Holder_<$MobEffect>, duration: number);
        constructor(effect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean);
        constructor(effect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean, showIcon: boolean);
        constructor(effect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean, showIcon: boolean, hiddenEffect: $MobEffectInstance | null);
        constructor(effect: $Holder_<$MobEffect>, duration: number, amplifier: number);
        constructor(other: $MobEffectInstance);
        constructor(effect: $Holder_<$MobEffect>);
    }
}
