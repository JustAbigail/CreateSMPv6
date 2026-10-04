import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Tag, $CompoundTag } from "@package/net/minecraft/nbt";
import { $HumanoidArm, $Pose, $PortalProcessor, $Entity, $EntityDimensions, $Entity$RemovalReason, $WalkAnimationState } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $UUID, $Stack } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $Object2DoubleMap, $ObjectLinkedOpenCustomHashSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerPlayerGameMode, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $AbstractContainerMenu, $InventoryMenu, $PlayerEnderChestContainer } from "@package/net/minecraft/world/inventory";
import { $Enum, $Object } from "@package/java/lang";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $LevelAccessor, $Level } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $LaunchedPlungerEntity } from "@package/dev/simulated_team/simulated/content/entities/launched_plunger";
import { $ItemStack, $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $ServerGamePacketListenerImpl } from "@package/net/minecraft/server/network";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $FoodData } from "@package/net/minecraft/world/food";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/neoforged/neoforge/common/util" {
    /**
     * Proxy object for a value that is calculated on first access, and can be refreshed as well.
     */
    export class $Lazy<T> implements $Supplier<T> {
        /**
         * Invalidates the cache, causing the supplier to be called again on the next access.
         */
        invalidate(): void;
        get(): T;
        /**
         * Constructs a lazy-initialized object.
         */
        static of<T>(supplier: $Supplier_<T>): $Lazy<T>;
    }
    /**
     * Represents a captured snapshot of a block, including the level, position, state, BE data, and setBlock flags.
     * 
     * Used to record the prior state and unwind changes if the change was denied, such as during `BreakEvent`.
     */
    export class $BlockSnapshot {
        /**
         * Loads the stored `BlockEntity` data if one exists at the given position.
         */
        restoreBlockEntity(level: $LevelAccessor, pos: $BlockPos_): boolean;
        /**
         * Restores this block snapshot to the target level and position with the specified flags.
         */
        restoreToLocation(level: $LevelAccessor, pos: $BlockPos_, flags: number): boolean;
        /**
         * Recreates a block entity from the stored data (pos/state/NBT) of this block snapshot.
         */
        recreateBlockEntity(provider: $HolderLookup$Provider): $BlockEntity;
        /**
         * @return the recorded dimension key
         */
        getDimension(): $ResourceKey<$Level>;
        getFlags(): number;
        /**
         * @return the recorded block entity NBT data, if one was present
         */
        getTag(): $CompoundTag;
        /**
         * @return the stored level, attempting to resolve it from the current server if it has gone out of scope
         */
        getLevel(): $LevelAccessor;
        /**
         * Calls `#restoreToLocation` with the stored level, position, but custom block flags.
         */
        restore(flags: number): boolean;
        /**
         * Calls `#restoreToLocation` with the stored level, position, and block flags.
         */
        restore(): boolean;
        /**
         * @return the snapshot's recorded block state
         */
        getState(): $BlockState;
        /**
         * Creates a new snapshot of the data at the given position.
         */
        static create(dim: $ResourceKey_<$Level>, level: $LevelAccessor, pos: $BlockPos_, flag: number): $BlockSnapshot;
        /**
         * Creates a new snapshot with the default block flags (and Block#UPDATE_CLIENTS.
         */
        static create(dim: $ResourceKey_<$Level>, level: $LevelAccessor, pos: $BlockPos_): $BlockSnapshot;
        /**
         * @return the snapshot's recorded block state
         */
        getCurrentState(): $BlockState;
        /**
         * @return the recorded position
         */
        getPos(): $BlockPos;
        get dimension(): $ResourceKey<$Level>;
        get flags(): number;
        get tag(): $CompoundTag;
        get level(): $LevelAccessor;
        get state(): $BlockState;
        get currentState(): $BlockState;
        get pos(): $BlockPos;
    }
    /**
     * A basic fake server player implementation that can be used to simulate player actions.
     */
    export class $FakePlayer extends $ServerPlayer {
        serializeNBT(arg0: $HolderLookup$Provider): $Player;
        lerpYRot: number;
        static USE_ITEM_INTERVAL: number;
        lerpYHeadRot: number;
        useItem: $ItemStack;
        jumpTriggerTime: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        simulated$currentTypeWriter: $BlockPos;
        removalReason: $Entity$RemovalReason;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        boardingCooldown: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        noCulling: boolean;
        gameMode: $ServerPlayerGameMode;
        isRolling: boolean;
        appliedScale: number;
        object: $Object;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        static UUID_TAG: string;
        roll: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        hurtDir: number;
        static DEFAULT_BABY_SCALE: number;
        static DEFAULT_BB_HEIGHT: number;
        seenCredits: boolean;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        noActionTime: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        yCloak: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        animStepO: number;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        enchantmentSeed: number;
        static FLAG_FALL_FLYING: number;
        xOld: number;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        attackStrengthTicker: number;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        sounds$currentSwordSwooshSound: $SoundInstance;
        invulnerableTime: number;
        wasUnderwater: boolean;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventory: $Inventory;
        random: $RandomSource;
        lerpSteps: number;
        yOld: number;
        static HAND_SLOTS: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        levelCallback: $EntityInLevelCallback;
        lerpXRot: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        animStep: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        deathScore: number;
        oBob: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        lastHurtByPlayerTime: number;
        autoSpinAttackItemStack: $ItemStack;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        connection: $ServerGamePacketListenerImpl;
        static FLAG_ONFIRE: number;
        zza: number;
        rotOffs: number;
        static INTERACTION_DISTANCE_VERIFICATION_BUFFER: number;
        static WAKE_UP_DURATION: number;
        xRotO: number;
        simulated$launchedPlunger: $LaunchedPlungerEntity;
        zo: number;
        wonGame: boolean;
        lastHurt: number;
        walkAnimation: $WalkAnimationState;
        static STANDING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MODE_CUSTOMISATION: $EntityDataAccessor<number>;
        yya: number;
        server: $MinecraftServer;
        oAttackAnim: number;
        yHeadRotO: number;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static SWIMMING_BB_HEIGHT: number;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        eyeHeight: number;
        prevRoll: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        xxa: number;
        zCloak: number;
        lerpHeadSteps: number;
        static $assertionsDisabled: boolean;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        xCloakO: number;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        rotA: number;
        dimensions: $EntityDimensions;
        static ENDER_SLOT_OFFSET: number;
        firstTick: boolean;
        static HELD_ITEM_SLOT: number;
        uuid: $UUID;
        lastHurtByPlayer: $Player;
        static SWING_DURATION: number;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        enderChestInventory: $PlayerEnderChestContainer;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        oRun: number;
        bob: number;
        experienceProgress: number;
        totalExperience: number;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        foodData: $FoodData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MAIN_HAND: $EntityDataAccessor<number>;
        static EQUIPMENT_SLOT_OFFSET: number;
        defaultFlySpeed: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        inventoryMenu: $InventoryMenu;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        static DATA_SHOULDER_LEFT: $EntityDataAccessor<$CompoundTag>;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        fishing: $FishingHook;
        static SWIMMING_BB_WIDTH: number;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        static TOTAL_AIR_SUPPLY: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static DATA_SHOULDER_RIGHT: $EntityDataAccessor<$CompoundTag>;
        currentExplosionCause: $Entity;
        constructor(level: $ServerLevel, name: $GameProfile);
    }
    export class $TriState extends $Enum<$TriState> {
        isFalse(): boolean;
        static values(): $TriState[];
        static valueOf(arg0: string): $TriState;
        isDefault(): boolean;
        isTrue(): boolean;
        static TRUE: $TriState;
        static FALSE: $TriState;
        static DEFAULT: $TriState;
        get false(): boolean;
        get default(): boolean;
        get true(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TriState}.
     */
    export type $TriState_ = "true" | "default" | "false";
    /**
     * Special linked hash set that allow changing the order of its entries and is strict to throw if attempting to add an entry that already exists.
     * Requires a strategy for the hashing behavior. Use `BasicStrategy#BASIC` or `IdentityStrategy#IDENTITY` if no special hashing needed.
     */
    export class $InsertableLinkedOpenCustomHashSet<T> extends $ObjectLinkedOpenCustomHashSet<T> {
        addAfter(arg0: T, arg1: T): boolean;
        addBefore(arg0: T, arg1: T): boolean;
        /**
         * Constructs a new `InsertableLinkedOpenCustomHashSet` with a `BasicStrategy`.
         */
        constructor();
        /**
         * Constructs a new `InsertableLinkedOpenCustomHashSet` with the given `Strategy`.
         */
        constructor(strategy: $Hash$Strategy<T>);
    }
    /**
     * Extended `TooltipContext` used when generating attribute tooltips.
     */
    export class $AttributeTooltipContext {
        static of(player: $Player, itemCtx: $Item$TooltipContext, flag: $TooltipFlag): $AttributeTooltipContext;
    }
    export interface $AttributeTooltipContext extends $Item$TooltipContext {
        /**
         * @return the current tooltip flag
         */
        flag(): $TooltipFlag;
        /**
         * @return the player for whom tooltips are being generated for, if known
         */
        player(): $Player;
    }
    /**
     * A predicate that takes three arguments and returns a boolean.
     */
    export class $TriPredicate<T, U, V> {
    }
    export interface $TriPredicate<T, U, V> {
        negate(): $TriPredicate<T, U, V>;
        and(other: $TriPredicate_<T, U, V>): $TriPredicate<T, U, V>;
        or(other: $TriPredicate_<T, U, V>): $TriPredicate<T, U, V>;
        test(arg0: T, arg1: U, arg2: V): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TriPredicate}.
     */
    export type $TriPredicate_<T, U, V> = ((arg0: T, arg1: U, arg2: V) => boolean);
    /**
     * An interface designed to unify various things in the Minecraft
     * code base that can be serialized to and from a NBT tag.
     */
    export class $INBTSerializable<T extends $Tag> {
    }
    export interface $INBTSerializable<T extends $Tag> {
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: T): void;
        serializeNBT(arg0: $HolderLookup$Provider): T;
    }
}
