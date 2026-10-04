import { $Explosion } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Style, $Component } from "@package/net/minecraft/network/chat";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $Fireball, $FireworkRocketEntity, $AbstractArrow, $WitherSkull } from "@package/net/minecraft/world/entity/projectile";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IScalingFunction, $IDeathMessageProvider } from "@package/net/neoforged/neoforge/common/damagesource";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $RegistryAccess, $Registry, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/damagesource" {
    export interface $DamageType extends RegistryMarked<RegistryTypes.DamageTypeTag, RegistryTypes.DamageType> {}
    export class $DamageSources {
        genericKill(): $DamageSource;
        inWall(): $DamageSource;
        outOfBorder(): $DamageSource;
        fellOutOfWorld(): $DamageSource;
        flyIntoWall(): $DamageSource;
        drown(): $DamageSource;
        cramming(): $DamageSource;
        noAggroMobAttack(mob: $LivingEntity): $DamageSource;
        sonicBoom(entity: $Entity): $DamageSource;
        anvil(entity: $Entity): $DamageSource;
        cactus(): $DamageSource;
        campfire(): $DamageSource;
        fireball(fireball: $Fireball, thrower: $Entity | null): $DamageSource;
        trident(causingEntity: $Entity, directEntity: $Entity | null): $DamageSource;
        badRespawnPointExplosion(position: $Vec3_): $DamageSource;
        fallingBlock(entity: $Entity): $DamageSource;
        arrow(arrow: $AbstractArrow, shooter: $Entity | null): $DamageSource;
        wither(): $DamageSource;
        fall(): $DamageSource;
        spit(projectile: $Entity, thrower: $LivingEntity | null): $DamageSource;
        indirectMagic(causingEntity: $Entity, directEntity: $Entity | null): $DamageSource;
        mobAttack(mob: $LivingEntity): $DamageSource;
        inFire(): $DamageSource;
        hotFloor(): $DamageSource;
        sweetBerryBush(): $DamageSource;
        stalagmite(): $DamageSource;
        fallingStalactite(entity: $Entity): $DamageSource;
        dryOut(): $DamageSource;
        sting(mob: $LivingEntity): $DamageSource;
        thorns(entity: $Entity): $DamageSource;
        windCharge(projectile: $Entity, thrower: $LivingEntity | null): $DamageSource;
        mobProjectile(projectile: $Entity, thrower: $LivingEntity | null): $DamageSource;
        starve(): $DamageSource;
        witherSkull(witherSkull: $WitherSkull, shooter: $Entity): $DamageSource;
        dragonBreath(): $DamageSource;
        magic(): $DamageSource;
        thrown(causingEntity: $Entity, directEntity: $Entity | null): $DamageSource;
        source(damageTypeKey: $ResourceKey_<$DamageType>, entity: $Entity | null): $DamageSource;
        source(damageTypeKey: $ResourceKey_<$DamageType>): $DamageSource;
        source(damageTypeKey: $ResourceKey_<$DamageType>, causingEntity: $Entity | null, directEntity: $Entity | null): $DamageSource;
        generic(): $DamageSource;
        freeze(): $DamageSource;
        playerAttack(player: $Player): $DamageSource;
        onFire(): $DamageSource;
        lava(): $DamageSource;
        lightningBolt(): $DamageSource;
        explosion(causingEntity: $Entity | null, directEntity: $Entity | null): $DamageSource;
        explosion(explosion: $Explosion | null): $DamageSource;
        fireworks(firework: $FireworkRocketEntity, shooter: $Entity | null): $DamageSource;
        damageTypes: $Registry<$DamageType>;
        constructor(registry: $RegistryAccess);
    }
    export class $CombatEntry extends $Record {
        fallDistance(): number;
        damage(): number;
        fallLocation(): $FallLocation;
        source(): $DamageSource;
        constructor(arg0: $DamageSource_, arg1: number, arg2: $FallLocation_ | null, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $CombatEntry}.
     */
    export type $CombatEntry_ = { damage?: number, source?: $DamageSource_, fallDistance?: number, fallLocation?: $FallLocation_,  } | [damage?: number, source?: $DamageSource_, fallDistance?: number, fallLocation?: $FallLocation_, ];
    export class $DamageEffects extends $Enum<$DamageEffects> implements $StringRepresentable, $IExtensibleEnum {
        static values(): $DamageEffects[];
        static valueOf(arg0: string): $DamageEffects;
        static getExtensionInfo(): $ExtensionInfo;
        sound(): $SoundEvent;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static FREEZING: $DamageEffects;
        static CODEC: $Codec<$DamageEffects>;
        static DROWNING: $DamageEffects;
        static POKING: $DamageEffects;
        static BURNING: $DamageEffects;
        static HURT: $DamageEffects;
        static THORNS: $DamageEffects;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DamageEffects}.
     */
    export type $DamageEffects_ = "hurt" | "thorns" | "drowning" | "burning" | "poking" | "freezing";
    export class $DamageType extends $Record {
        deathMessageType(): $DeathMessageType;
        msgId(): string;
        exhaustion(): number;
        effects(): $DamageEffects;
        scaling(): $DamageScaling;
        static CODEC: $Codec<$Holder<$DamageType>>;
        static DIRECT_CODEC: $Codec<$DamageType>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$DamageType>>;
        constructor(msgId: string, exhaustion: number);
        constructor(arg0: string, arg1: $DamageScaling_, arg2: number, arg3: $DamageEffects_, arg4: $DeathMessageType_);
        constructor(msgId: string, scaling: $DamageScaling_, exhaustion: number);
        constructor(msgId: string, scaling: $DamageScaling_, exhaustion: number, effects: $DamageEffects_);
        constructor(msgId: string, exhaustion: number, effects: $DamageEffects_);
    }
    /**
     * Values that may be interpreted as {@link $DamageType}.
     */
    export type $DamageType_ = RegistryTypes.DamageType | { deathMessageType?: $DeathMessageType_, exhaustion?: number, effects?: $DamageEffects_, scaling?: $DamageScaling_, msgId?: string,  } | [deathMessageType?: $DeathMessageType_, exhaustion?: number, effects?: $DamageEffects_, scaling?: $DamageScaling_, msgId?: string, ];
    export class $DamageSource {
        /**
         * Retrieves the immediate causer of the damage, e.g. the arrow entity, not its shooter
         */
        getImmediate(): $Entity;
        /**
         * Gets the location from which the damage originates.
         */
        getSourcePosition(): $Vec3;
        getWeaponItem(): $ItemStack;
        /**
         * Retrieves the immediate causer of the damage, e.g. the arrow entity, not its shooter
         */
        getActual(): $Entity;
        typeHolder(): $Holder<$DamageType>;
        /**
         * Gets the death message that is displayed when the player dies
         */
        getLocalizedDeathMessage(livingEntity: $LivingEntity): $Component;
        /**
         * Return the name of damage type.
         */
        getType(): string;
        /**
         * Gets the location from which the damage originates.
         */
        sourcePositionRaw(): $Vec3;
        getPlayer(): $Player;
        /**
         * @deprecated
         * Return whether this damage source will have its damage amount scaled based on the current difficulty.
         */
        scalesWithDifficulty(): boolean;
        type(): $DamageType;
        /**
         * Return whether this damage source will have its damage amount scaled based on the current difficulty.
         */
        isDirect(): boolean;
        is(damageTypeKey: $TagKey_<$DamageType>): boolean;
        is(damageTypeKey: $ResourceKey_<$DamageType>): boolean;
        /**
         * How much satiate (food) is consumed by this `DamageSource`.
         */
        getFoodExhaustion(): number;
        /**
         * Return whether this damage source will have its damage amount scaled based on the current difficulty.
         */
        isCreativePlayer(): boolean;
        constructor(type: $Holder_<$DamageType>, directEntity: $Entity | null, causingEntity: $Entity | null, damageSourcePosition: $Vec3_ | null);
        constructor(type: $Holder_<$DamageType>, directEntity: $Entity | null, causingEntity: $Entity | null);
        constructor(type: $Holder_<$DamageType>, damageSourcePosition: $Vec3_);
        constructor(type: $Holder_<$DamageType>, entity: $Entity | null);
        constructor(type: $Holder_<$DamageType>);
        get immediate(): $Entity;
        get sourcePosition(): $Vec3;
        get weaponItem(): $ItemStack;
        get actual(): $Entity;
        get player(): $Player;
        get direct(): boolean;
        get foodExhaustion(): number;
        get creativePlayer(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DamageSource}.
     */
    export type $DamageSource_ = RegistryTypes.DamageType | $LivingEntity;
    export class $FallLocation extends $Record {
        static blockToFallLocation(state: $BlockState_): $FallLocation;
        static getCurrentFallLocation(entity: $LivingEntity): $FallLocation;
        languageKey(): string;
        id(): string;
        static GENERIC: $FallLocation;
        static LADDER: $FallLocation;
        static VINES: $FallLocation;
        static WEEPING_VINES: $FallLocation;
        static OTHER_CLIMBABLE: $FallLocation;
        static TWISTING_VINES: $FallLocation;
        static SCAFFOLDING: $FallLocation;
        static WATER: $FallLocation;
        constructor(arg0: string);
    }
    /**
     * Values that may be interpreted as {@link $FallLocation}.
     */
    export type $FallLocation_ = { id?: string,  } | [id?: string, ];
    export class $DamageScaling extends $Enum<$DamageScaling> implements $StringRepresentable, $IExtensibleEnum {
        static values(): $DamageScaling[];
        static valueOf(arg0: string): $DamageScaling;
        static getExtensionInfo(): $ExtensionInfo;
        getScalingFunction(): $IScalingFunction;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$DamageScaling>;
        static WHEN_CAUSED_BY_LIVING_NON_PLAYER: $DamageScaling;
        static NEVER: $DamageScaling;
        static ALWAYS: $DamageScaling;
        static get extensionInfo(): $ExtensionInfo;
        get scalingFunction(): $IScalingFunction;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DamageScaling}.
     */
    export type $DamageScaling_ = "never" | "when_caused_by_living_non_player" | "always";
    export class $CombatTracker {
        getDeathMessage(): $Component;
        /**
         * Resets this trackers list of combat entries
         */
        recheckStatus(): void;
        recordDamage(source: $DamageSource_, damage: number): void;
        getMostSignificantFall(): $CombatEntry;
        getCombatDuration(): number;
        getFallMessage(combatEntry: $CombatEntry_, entity: $Entity | null): $Component;
        static INTENTIONAL_GAME_DESIGN_STYLE: $Style;
        entries: $List<$CombatEntry>;
        inCombat: boolean;
        lastDamageTime: number;
        static RESET_COMBAT_STATUS_TIME: number;
        static RESET_DAMAGE_STATUS_TIME: number;
        constructor(mob: $LivingEntity);
        get deathMessage(): $Component;
        get mostSignificantFall(): $CombatEntry;
        get combatDuration(): number;
    }
    export class $DeathMessageType extends $Enum<$DeathMessageType> implements $StringRepresentable, $IExtensibleEnum {
        getMessageFunction(): $IDeathMessageProvider;
        static values(): $DeathMessageType[];
        static valueOf(arg0: string): $DeathMessageType;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static INTENTIONAL_GAME_DESIGN: $DeathMessageType;
        static FALL_VARIANTS: $DeathMessageType;
        static CODEC: $Codec<$DeathMessageType>;
        static DEFAULT: $DeathMessageType;
        get messageFunction(): $IDeathMessageProvider;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DeathMessageType}.
     */
    export type $DeathMessageType_ = "default" | "fall_variants" | "intentional_game_design";
}
