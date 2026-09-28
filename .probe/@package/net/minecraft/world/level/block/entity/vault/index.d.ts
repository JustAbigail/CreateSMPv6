import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $PlayerDetector$EntitySelector, $PlayerDetector_, $PlayerDetector } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $VaultSharedDataAccessor, $VaultServerDataAccessor } from "@package/com/koltino/trialanderror/mixin";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $Set, $UUID_, $Set_, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/block/entity/vault" {
    export class $VaultServerData implements $VaultServerDataAccessor {
        stateUpdatingResumesAt(): number;
        pauseStateUpdatingUntil(time: number): void;
        getItemsToEject(): $List<$ItemStack>;
        markEjectionFinished(): void;
        ejectionProgress(): number;
        popNextItemToEject(): $ItemStack;
        getNextItemToEject(): $ItemStack;
        setLastInsertFailTimestamp(time: number): void;
        getLastInsertFailTimestamp(): number;
        hasRewardedPlayer(player: $Player): boolean;
        addToRewardedPlayers(player: $Player): void;
        setItemsToEject(itemsToEject: $List_<$ItemStack_>): void;
        set(other: $VaultServerData): void;
        getRewardedPlayers(): $Set<$UUID>;
        static CODEC: $Codec<$VaultServerData>;
        isDirty: boolean;
        static TAG_NAME: string;
        constructor(rewardedPlayers: $Set_<$UUID_>, stateUpdatingResumesAt: number, arg2: $List_<$ItemStack_>, itemsToEject: number);
        constructor();
    }
    export class $VaultSharedData implements $VaultSharedDataAccessor {
        connectedParticlesRange(): number;
        getDisplayItem(): $ItemStack;
        setDisplayItem(displayItem: $ItemStack_): void;
        updateConnectedPlayersWithinRange(level: $ServerLevel, pos: $BlockPos_, serverData: $VaultServerData, config: $VaultConfig_, deactivationRange: number): void;
        hasConnectedPlayers(): boolean;
        hasDisplayItem(): boolean;
        set(other: $VaultSharedData): void;
        getConnectedPlayers(): $Set<$UUID>;
        setIsDirty(arg0: boolean): void;
        static CODEC: $Codec<$VaultSharedData>;
        isDirty: boolean;
        static TAG_NAME: string;
        constructor(displayItem: $ItemStack_, connectedPlayers: $Set_<$UUID_>, connectedParticlesRange: number);
        constructor();
    }
    export class $VaultBlockEntity extends $BlockEntity {
        setConfig(config: $VaultConfig_): void;
        getSharedData(): $VaultSharedData;
        getClientData(): $VaultClientData;
        static access$000(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        getConfig(): $VaultConfig;
        getServerData(): $VaultServerData;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, state: $BlockState_);
    }
    export class $VaultState extends $Enum<$VaultState> implements $StringRepresentable {
        onTransition(level: $ServerLevel, pos: $BlockPos_, state: $VaultState_, config: $VaultConfig_, sharedData: $VaultSharedData, isOminous: boolean): void;
        lightLevel(): number;
        tickAndGetNext(level: $ServerLevel, pos: $BlockPos_, config: $VaultConfig_, serverData: $VaultServerData, sharedData: $VaultSharedData): $VaultState;
        onEnter(level: $ServerLevel, pos: $BlockPos_, config: $VaultConfig_, sharedData: $VaultSharedData, isOminous: boolean): void;
        static values(): $VaultState[];
        static valueOf(arg0: string): $VaultState;
        onExit(level: $ServerLevel, pos: $BlockPos_, config: $VaultConfig_, sharedData: $VaultSharedData): void;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ACTIVE: $VaultState;
        static INACTIVE: $VaultState;
        static EJECTING: $VaultState;
        static UNLOCKING: $VaultState;
    }
    /**
     * Values that may be interpreted as {@link $VaultState}.
     */
    export type $VaultState_ = "inactive" | "active" | "unlocking" | "ejecting";
    export class $VaultClientData {
        updateDisplayItemSpin(): void;
        previousSpin(): number;
        currentSpin(): number;
        static ROTATION_SPEED: number;
        constructor();
    }
    export class $VaultConfig extends $Record {
        lootTable(): $ResourceKey<$LootTable>;
        playerDetector(): $PlayerDetector;
        entitySelector(): $PlayerDetector$EntitySelector;
        activationRange(): number;
        deactivationRange(): number;
        keyItem(): $ItemStack;
        overrideLootTableToDisplay(): ($ResourceKey<$LootTable>) | undefined;
        static CODEC: $Codec<$VaultConfig>;
        static DEFAULT: $VaultConfig;
        static TAG_NAME: string;
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: number, arg2: number, arg3: $ItemStack_, arg4: ($ResourceKey_<$LootTable>) | undefined, arg5: $PlayerDetector_, arg6: $PlayerDetector$EntitySelector);
        constructor(lootTable: $ResourceKey_<$LootTable>, activationRange: number, arg2: number, deactivationRange: $ItemStack_, arg4: ($ResourceKey_<$LootTable>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $VaultConfig}.
     */
    export type $VaultConfig_ = { lootTable?: $ResourceKey_<$LootTable>, playerDetector?: $PlayerDetector_, keyItem?: $ItemStack_, activationRange?: number, overrideLootTableToDisplay?: ($ResourceKey_<$LootTable>) | undefined, deactivationRange?: number, entitySelector?: $PlayerDetector$EntitySelector,  } | [lootTable?: $ResourceKey_<$LootTable>, playerDetector?: $PlayerDetector_, keyItem?: $ItemStack_, activationRange?: number, overrideLootTableToDisplay?: ($ResourceKey_<$LootTable>) | undefined, deactivationRange?: number, entitySelector?: $PlayerDetector$EntitySelector, ];
}
