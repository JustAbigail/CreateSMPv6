import { $Level } from "@package/net/minecraft/world/level";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/xaero/pac/common/entity" {
    export class $IItemEntity {
    }
    export interface $IItemEntity {
        setXaero_OPAC_throwerAccessor(arg0: $UUID_): void;
        getXaero_OPAC_throwerAccessor(): $UUID;
        getXaero_OPAC_thrower(): $UUID;
        getXaero_OPAC_target(): $UUID;
    }
    export class $EntityData {
        getShouldCheckItemUseTick(): boolean;
        setShouldCheckItemUseTick(arg0: boolean): void;
        getLastChunkEntryDimension(): $ResourceKey<$Level>;
        setLastChunkEntryDimension(arg0: $ResourceKey_<$Level>): void;
        getLootOwner(): $UUID;
        setLootOwner(arg0: $UUID_): void;
        getDeadPlayer(): $UUID;
        setDeadPlayer(arg0: $UUID_): void;
        static from(arg0: $Entity): $EntityData;
        static from(arg0: $IEntity): $EntityData;
        constructor();
    }
    export class $IEntity {
    }
    export interface $IEntity {
        getXaero_OPAC_data(): $EntityData;
        setXaero_OPAC_data(arg0: $EntityData): void;
    }
}
