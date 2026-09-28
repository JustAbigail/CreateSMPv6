import { $EndCrystal, $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Constructor } from "@package/java/lang/reflect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/entity/boss/enderdragon/phases" {
    export class $DragonPhaseInstance {
    }
    export interface $DragonPhaseInstance {
        onCrystalDestroyed(crystal: $EndCrystal, pos: $BlockPos_, damageSource: $DamageSource_, player: $Player | null): void;
        isSitting(): boolean;
        /**
         * Called when this phase is set to active
         */
        doClientTick(): void;
        /**
         * Called when this phase is set to active
         */
        doServerTick(): void;
        /**
         * Returns the location the dragon is flying toward
         */
        getFlyTargetLocation(): $Vec3;
        /**
         * Returns the maximum amount dragon may rise or fall during this phase
         */
        getFlySpeed(): number;
        /**
         * Returns the maximum amount dragon may rise or fall during this phase
         */
        getTurnSpeed(): number;
        onHurt(damageSource: $DamageSource_, amount: number): number;
        /**
         * Called when this phase is set to active
         */
        begin(): void;
        /**
         * Called when this phase is set to active
         */
        end(): void;
        getPhase(): $EnderDragonPhase<$DragonPhaseInstance>;
    }
    export class $DragonLandingPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $AbstractDragonSittingPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(arg0: $EnderDragon);
    }
    export class $DragonHoverPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $DragonChargePlayerPhase extends $AbstractDragonPhaseInstance {
        setTarget(targetLocation: $Vec3_): void;
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $DragonStrafePlayerPhase extends $AbstractDragonPhaseInstance {
        setTarget(attackTarget: $LivingEntity): void;
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $DragonLandingApproachPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $DragonSittingFlamingPhase extends $AbstractDragonSittingPhase {
        /**
         * Called when this phase is set to active
         */
        resetFlameCount(): void;
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $DragonSittingScanningPhase extends $AbstractDragonSittingPhase {
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $DragonDeathPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $EnderDragonPhaseManager {
        getCurrentPhase(): $DragonPhaseInstance;
        getPhase<T extends $DragonPhaseInstance>(phase: $EnderDragonPhase<T>): T;
        setPhase(phase: $EnderDragonPhase<never>): void;
        constructor(dragon: $EnderDragon);
    }
    export class $DragonTakeoffPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $DragonHoldingPatternPhase extends $AbstractDragonPhaseInstance {
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $EnderDragonPhase<T extends $DragonPhaseInstance> {
        /**
         * Gets a phase by its ID. If the phase is out of bounds (negative or beyond the end of the phase array), returns `#HOLDING_PATTERN`.
         */
        static getById(id: number): $EnderDragonPhase<never>;
        createInstance(dragon: $EnderDragon): $DragonPhaseInstance;
        getConstructor(): $Constructor<$DragonPhaseInstance>;
        getId(): number;
        static getCount(): number;
        static HOVERING: $EnderDragonPhase<$DragonHoverPhase>;
        static STRAFE_PLAYER: $EnderDragonPhase<$DragonStrafePlayerPhase>;
        static SITTING_FLAMING: $EnderDragonPhase<$DragonSittingFlamingPhase>;
        static HOLDING_PATTERN: $EnderDragonPhase<$DragonHoldingPatternPhase>;
        static LANDING: $EnderDragonPhase<$DragonLandingPhase>;
        static CHARGING_PLAYER: $EnderDragonPhase<$DragonChargePlayerPhase>;
        static LANDING_APPROACH: $EnderDragonPhase<$DragonLandingApproachPhase>;
        static DYING: $EnderDragonPhase<$DragonDeathPhase>;
        static SITTING_SCANNING: $EnderDragonPhase<$DragonSittingScanningPhase>;
        static TAKEOFF: $EnderDragonPhase<$DragonTakeoffPhase>;
        static SITTING_ATTACKING: $EnderDragonPhase<$DragonSittingAttackingPhase>;
    }
    export class $DragonSittingAttackingPhase extends $AbstractDragonSittingPhase {
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
    export class $AbstractDragonPhaseInstance implements $DragonPhaseInstance {
        onCrystalDestroyed(crystal: $EndCrystal, pos: $BlockPos_, dmgSrc: $DamageSource_, plyr: $Player | null): void;
        isSitting(): boolean;
        /**
         * Called when this phase is set to active
         */
        doClientTick(): void;
        /**
         * Called when this phase is set to active
         */
        doServerTick(): void;
        /**
         * Returns the location the dragon is flying toward
         */
        getFlyTargetLocation(): $Vec3;
        /**
         * Returns the maximum amount dragon may rise or fall during this phase
         */
        getFlySpeed(): number;
        /**
         * Returns the maximum amount dragon may rise or fall during this phase
         */
        getTurnSpeed(): number;
        onHurt(damageSource: $DamageSource_, amount: number): number;
        /**
         * Called when this phase is set to active
         */
        begin(): void;
        /**
         * Called when this phase is set to active
         */
        end(): void;
        dragon: $EnderDragon;
        constructor(dragon: $EnderDragon);
    }
}
