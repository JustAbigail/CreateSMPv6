import { $EndDragonFightAccessor } from "@package/com/yungnickyoung/minecraft/betterendisland/mixin/accessor";
import { $EnderDragon, $EndCrystal } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel, $ServerBossEvent } from "@package/net/minecraft/server/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $DragonRespawnStage, $DragonRespawnStage_, $IBetterDragonFight } from "@package/com/yungnickyoung/minecraft/betterendisland/world";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Enum, $Record } from "@package/java/lang";
import { $UUID, $List, $UUID_, $List_ } from "@package/java/util";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/level/dimension/end" {
    export class $DragonRespawnAnimation extends $Enum<$DragonRespawnAnimation> {
        static values(): $DragonRespawnAnimation[];
        static valueOf(arg0: string): $DragonRespawnAnimation;
        tick(level: $ServerLevel, manager: $EndDragonFight, crystals: $List_<$EndCrystal>, ticks: number, pos: $BlockPos_): void;
        static SUMMONING_PILLARS: $DragonRespawnAnimation;
        static START: $DragonRespawnAnimation;
        static END: $DragonRespawnAnimation;
        static PREPARING_TO_SUMMON_PILLARS: $DragonRespawnAnimation;
        static SUMMONING_DRAGON: $DragonRespawnAnimation;
    }
    /**
     * Values that may be interpreted as {@link $DragonRespawnAnimation}.
     */
    export type $DragonRespawnAnimation_ = "start" | "preparing_to_summon_pillars" | "summoning_pillars" | "summoning_dragon" | "end";
    export class $EndDragonFight implements $IBetterDragonFight, $EndDragonFightAccessor {
        handler$bno000$betterendisland$EndDragonFight(arg0: $ServerLevel, arg1: number, arg2: $EndDragonFight$Data_, arg3: $BlockPos_, arg4: $CallbackInfo): void;
        /**
         * @deprecated
         */
        skipArenaLoadedCheck(): void;
        handler$bno000$betterendisland$tickFight(arg0: $CallbackInfo): void;
        setRespawnStage(state: $DragonRespawnAnimation_): void;
        handler$bno000$betterendisland$setDragonKilled(arg0: $EnderDragon, arg1: $CallbackInfo): void;
        /**
         * @deprecated
         */
        removeAllGateways(): void;
        handler$bno000$betterendisland$onCrystalDestroyed(arg0: $EndCrystal, arg1: $DamageSource_, arg2: $CallbackInfo): void;
        resetSpikeCrystals(): void;
        handler$bno000$betterendisland$tryRespawn(arg0: $CallbackInfo): void;
        handler$bno000$betterendisland$resetSpikeCrystals(arg0: $CallbackInfo): void;
        advanceRespawnStage(arg0: $DragonRespawnStage_): void;
        setDragonRespawnStage(arg0: $DragonRespawnStage_): void;
        onCrystalDestroyed(crystal: $EndCrystal, dmgSrc: $DamageSource_): void;
        getDragonUUID(): $UUID;
        updateDragon(dragon: $EnderDragon): void;
        setDragonKilled(dragon: $EnderDragon): void;
        hasPreviouslyKilledDragon(): boolean;
        getCrystalsAlive(): number;
        tryRespawn(): void;
        setIsFirstExitPortalSpawn(active: boolean): void;
        hasDragonEverSpawned(): boolean;
        setHasDragonEverSpawned(active: boolean): void;
        setNumTimesDragonKilled(arg0: number): void;
        isFirstExitPortalSpawn(): boolean;
        getNumTimesDragonKilled(): number;
        getDragonRespawnStage(): $DragonRespawnStage;
        doInitialDragonSpawn(): void;
        tickBellSound(): void;
        saveData(): $EndDragonFight$Data;
        addPlayer(arg0: $ServerPlayer): void;
        removePlayer(arg0: $ServerPlayer): void;
        reset(active: boolean): void;
        tick(): void;
        getPortalLocation(): $BlockPos;
        setPortalLocation(pos: $BlockPos_): void;
        invokeCreateNewDragon(): $EnderDragon;
        getPreviouslyKilled(): boolean;
        getDragonEvent(): $ServerBossEvent;
        getGateways(): $ObjectArrayList<number>;
        static TIME_BETWEEN_PLAYER_SCANS: number;
        static ARENA_TICKET_LEVEL: number;
        static DRAGON_SPAWN_Y: number;
        constructor(level: $ServerLevel, seed: number, arg2: $EndDragonFight$Data_, data: $BlockPos_);
        constructor(level: $ServerLevel, seed: number, arg2: $EndDragonFight$Data_);
    }
    export class $EndDragonFight$Data extends $Record {
        needsStateScanning(): boolean;
        dragonKilled(): boolean;
        previouslyKilled(): boolean;
        isRespawning(): boolean;
        dragonUUID(): ($UUID) | undefined;
        exitPortalLocation(): ($BlockPos) | undefined;
        gateways(): ($List<number>) | undefined;
        static CODEC: $Codec<$EndDragonFight$Data>;
        static DEFAULT: $EndDragonFight$Data;
        constructor(needsStateScanning: boolean, dragonKilled: boolean, previouslyKilled: boolean, isRespawning: boolean, dragonUUID: ($UUID_) | undefined, exitPortalLocation: ($BlockPos_) | undefined, gateways: ($List_<number>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $EndDragonFight$Data}.
     */
    export type $EndDragonFight$Data_ = { dragonKilled?: boolean, dragonUUID?: ($UUID_) | undefined, gateways?: ($List_<number>) | undefined, exitPortalLocation?: ($BlockPos_) | undefined, previouslyKilled?: boolean, isRespawning?: boolean, needsStateScanning?: boolean,  } | [dragonKilled?: boolean, dragonUUID?: ($UUID_) | undefined, gateways?: ($List_<number>) | undefined, exitPortalLocation?: ($BlockPos_) | undefined, previouslyKilled?: boolean, isRespawning?: boolean, needsStateScanning?: boolean, ];
}
