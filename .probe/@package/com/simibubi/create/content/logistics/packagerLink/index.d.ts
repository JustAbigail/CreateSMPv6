import { $Level } from "@package/net/minecraft/world/level";
import { $AbstractPackagerBlockEntity, $IdentifiedContainer_, $AbstractInventorySummary, $StockInventoryType_ } from "@package/net/liukrast/deployer/lib/logistics/packager";
import { $Codec } from "@package/com/mojang/serialization";
import { $GenericRequestPromise } from "@package/net/liukrast/deployer/lib/logistics/packagerLink";
import { $LinkWithBulbBlockEntity } from "@package/com/simibubi/create/content/redstone/displayLink";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Comparator, $UUID, $List, $UUID_, $Collection } from "@package/java/util";
import { $PackageOrderWithCrafts_ } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $IdentifiedInventory_, $InventorySummary, $PackagerBlockEntity, $PackagingRequest } from "@package/com/simibubi/create/content/logistics/packager";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $GenericOrderContained_ } from "@package/net/liukrast/deployer/lib/logistics/stockTicker";
import { $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $Runnable_, $Enum, $Object } from "@package/java/lang";
import { $PLBEExtension, $LLBExtension, $RPQExtension } from "@package/net/liukrast/deployer/lib/mixinExtensions";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $Pair } from "@package/net/createmod/catnip/data";

declare module "@package/com/simibubi/create/content/logistics/packagerLink" {
    export class $RequestPromise {
        static ageComparator(): $Comparator<$RequestPromise>;
        tick(): void;
        static CODEC: $Codec<$RequestPromise>;
        ticksExisted: number;
        promisedStack: $BigItemStack;
        constructor(arg0: $BigItemStack);
        constructor(arg0: number, arg1: $BigItemStack);
    }
    export class $LogisticallyLinkedBehaviour$RequestType extends $Enum<$LogisticallyLinkedBehaviour$RequestType> {
        static values(): $LogisticallyLinkedBehaviour$RequestType[];
        static valueOf(arg0: string): $LogisticallyLinkedBehaviour$RequestType;
        static PLAYER: $LogisticallyLinkedBehaviour$RequestType;
        static REDSTONE: $LogisticallyLinkedBehaviour$RequestType;
        static RESTOCK: $LogisticallyLinkedBehaviour$RequestType;
    }
    /**
     * Values that may be interpreted as {@link $LogisticallyLinkedBehaviour$RequestType}.
     */
    export type $LogisticallyLinkedBehaviour$RequestType_ = "restock" | "redstone" | "player";
    export class $LogisticallyLinkedBehaviour extends $BlockEntityBehaviour implements $LLBExtension {
        mayInteractMessage(arg0: $Player): boolean;
        getSummary(arg0: $IdentifiedInventory_): $InventorySummary;
        deductFromAccurateSummary(arg0: $ItemStackHandler): void;
        processRequest(arg0: $ItemStack_, arg1: number, arg2: string, arg3: number, arg4: $MutableBoolean, arg5: number, arg6: $PackageOrderWithCrafts_, arg7: $IdentifiedInventory_): $Pair<$PackagerBlockEntity, $PackagingRequest>;
        redstonePowerChanged(arg0: number): void;
        deployer$deductFromAccurateSummary(arg0: $StockInventoryType_<any, any, any>, arg1: $Object): void;
        handler$fap000$createmetalogistics$processRequest(arg0: $ItemStack_, arg1: number, arg2: string, arg3: number, arg4: $MutableBoolean, arg5: number, arg6: $PackageOrderWithCrafts_ | null, arg7: $IdentifiedInventory_ | null, arg8: $CallbackInfoReturnable<any>): void;
        deployer$getSummary(arg0: $StockInventoryType_<any, any, any>, arg1: $IdentifiedContainer_<any>): $AbstractInventorySummary<any, any>;
        deployer$processRequests(arg0: $StockInventoryType_<any, any, any>, arg1: $Object, arg2: number, arg3: string, arg4: number, arg5: $MutableBoolean, arg6: number, arg7: $GenericOrderContained_<any>, arg8: $IdentifiedContainer_<any>): $Pair<any, any>;
        static isValidLink(arg0: $LogisticallyLinkedBehaviour): boolean;
        handler$fap000$createmetalogistics$getSummary(arg0: $IdentifiedInventory_, arg1: $CallbackInfoReturnable<any>): void;
        static keepAlive(arg0: $LogisticallyLinkedBehaviour): void;
        mayAdministrate(arg0: $Player): boolean;
        static getAllPresent(arg0: $UUID_, arg1: boolean, arg2: boolean): $Collection<$LogisticallyLinkedBehaviour>;
        static getAllPresent(arg0: $UUID_, arg1: boolean): $Collection<$LogisticallyLinkedBehaviour>;
        static remove(arg0: $LogisticallyLinkedBehaviour): void;
        mayInteract(arg0: $Player): boolean;
        static LINK_ID_GENERATOR: $AtomicInteger;
        linkId: number;
        blockEntity: $SmartBlockEntity;
        freqId: $UUID;
        redstonePower: number;
        static TYPE: $BehaviourType<$LogisticallyLinkedBehaviour>;
        constructor(arg0: $SmartBlockEntity, arg1: boolean);
    }
    export class $RequestPromiseQueue implements $RPQExtension {
        setOnChanged(arg0: $Runnable_): void;
        itemEnteredSystem(arg0: $ItemStack_, arg1: number): void;
        forceClear(arg0: $ItemStack_): void;
        getTotalPromisedAndRemoveExpired(arg0: $ItemStack_, arg1: number): number;
        deployer$genericEnteredSystem(arg0: $StockInventoryType_<any, any, any>, arg1: $Object, arg2: number): void;
        deployer$forceClear(arg0: $StockInventoryType_<any, any, any>, arg1: $Object): void;
        deployer$getTotalPromisedAndRemoveExpired(arg0: $StockInventoryType_<any, any, any>, arg1: $Object, arg2: number): number;
        deployer$add(arg0: $StockInventoryType_<any, any, any>, arg1: $GenericRequestPromise<any>): void;
        deployer$flatten(arg0: $StockInventoryType_<any, any, any>, arg1: boolean): $List<any>;
        flatten(arg0: boolean): $List<$RequestPromise>;
        isEmpty(): boolean;
        add(arg0: $RequestPromise): void;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $Runnable_): $RequestPromiseQueue;
        tick(): void;
        constructor(arg0: $Runnable_);
    }
    export class $PackagerLinkBlockEntity extends $LinkWithBulbBlockEntity implements $PLBEExtension {
        fetchSummaryFromPackager(arg0: $IdentifiedInventory_): $InventorySummary;
        getPackager(): $PackagerBlockEntity;
        playEffect(): void;
        processRequest(arg0: $ItemStack_, arg1: number, arg2: string, arg3: number, arg4: $MutableBoolean, arg5: number, arg6: $PackageOrderWithCrafts_, arg7: $IdentifiedInventory_): $Pair<$PackagerBlockEntity, $PackagingRequest>;
        deployer$fetchSummaryFromPackager(arg0: $StockInventoryType_<any, any, any>, arg1: $IdentifiedContainer_<any>): $AbstractInventorySummary<any, any>;
        deployer$getPackager(arg0: $StockInventoryType_<any, any, any>): $AbstractPackagerBlockEntity<any, any, any>;
        deployer$processRequest(arg0: $StockInventoryType_<any, any, any>, arg1: $Object, arg2: number, arg3: string, arg4: number, arg5: $MutableBoolean, arg6: number, arg7: $GenericOrderContained_<any>, arg8: $IdentifiedContainer_<any>): $Pair<any, any>;
        worldPosition: $BlockPos;
        level: $Level;
        placedBy: $UUID;
        static ATTACHMENTS_NBT_KEY: string;
        behaviour: $LogisticallyLinkedBehaviour;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
