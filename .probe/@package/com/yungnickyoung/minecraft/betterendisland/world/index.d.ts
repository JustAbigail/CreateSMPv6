import { $EndCrystal } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Enum } from "@package/java/lang";
import { $List_ } from "@package/java/util";
import { $EndDragonFight } from "@package/net/minecraft/world/level/dimension/end";
import { $StringRepresentable$EnumCodec, $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/yungnickyoung/minecraft/betterendisland/world" {
    export class $DragonRespawnStage extends $Enum<$DragonRespawnStage> implements $StringRepresentable {
        static values(): $DragonRespawnStage[];
        static valueOf(arg0: string): $DragonRespawnStage;
        onStart(arg0: $ServerLevel, arg1: $IBetterDragonFight): void;
        tick(arg0: $ServerLevel, arg1: $EndDragonFight, arg2: $List_<$EndCrystal>, arg3: number): void;
        static byName(arg0: string | null): $DragonRespawnStage;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$EnumCodec<$DragonRespawnStage>;
        static SUMMONING_PILLARS: $DragonRespawnStage;
        static START: $DragonRespawnStage;
        static END: $DragonRespawnStage;
        static PREPARING_TO_SUMMON_PILLARS: $DragonRespawnStage;
        static SUMMONING_DRAGON: $DragonRespawnStage;
    }
    /**
     * Values that may be interpreted as {@link $DragonRespawnStage}.
     */
    export type $DragonRespawnStage_ = "start" | "preparing_to_summon_pillars" | "summoning_pillars" | "summoning_dragon" | "end";
    export class $IBetterDragonFight {
    }
    export interface $IBetterDragonFight {
        advanceRespawnStage(arg0: $DragonRespawnStage_): void;
        setDragonRespawnStage(arg0: $DragonRespawnStage_): void;
        setIsFirstExitPortalSpawn(arg0: boolean): void;
        hasDragonEverSpawned(): boolean;
        setHasDragonEverSpawned(arg0: boolean): void;
        setNumTimesDragonKilled(arg0: number): void;
        isFirstExitPortalSpawn(): boolean;
        getNumTimesDragonKilled(): number;
        getDragonRespawnStage(): $DragonRespawnStage;
        doInitialDragonSpawn(): void;
        tickBellSound(): void;
        reset(arg0: boolean): void;
    }
    export class $IEndSpike {
    }
    export interface $IEndSpike {
        setCrystalYOffsetFromPillarHeight(arg0: number): void;
        getCrystalYOffset(): number;
    }
}
