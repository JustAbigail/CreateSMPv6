import { $PanelConnection, $PanelConnection_ } from "@package/net/liukrast/deployer/lib/logistics/board/connection";
import { $AbstractInventorySummary, $AbstractPackagerBlockEntity, $StockInventoryType_, $GenericPackagingRequest, $IdentifiedContainer_ } from "@package/net/liukrast/deployer/lib/logistics/packager";
import { $BlockPos } from "@package/net/minecraft/core";
import { $GenericRequestPromise } from "@package/net/liukrast/deployer/lib/logistics/packagerLink";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $GenericOrderContained_ } from "@package/net/liukrast/deployer/lib/logistics/stockTicker";
import { $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $List, $List_, $Map, $Set } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $FactoryPanelConnection } from "@package/com/simibubi/create/content/logistics/factoryBoard";
import { $Pair } from "@package/net/createmod/catnip/data";

declare module "@package/net/liukrast/deployer/lib/mixinExtensions" {
    export class $RPQExtension {
    }
    export interface $RPQExtension {
        deployer$genericEnteredSystem<K, V, H>(arg0: $StockInventoryType_<K, V, H>, arg1: V, arg2: number): void;
        deployer$forceClear<K, V, H>(arg0: $StockInventoryType_<K, V, H>, arg1: V): void;
        deployer$getTotalPromisedAndRemoveExpired<K, V, H>(arg0: $StockInventoryType_<K, V, H>, arg1: V, arg2: number): number;
        deployer$add<K, V, H>(arg0: $StockInventoryType_<K, V, H>, arg1: $GenericRequestPromise<V>): void;
        deployer$flatten<K, V, H>(arg0: $StockInventoryType_<K, V, H>, arg1: boolean): $List<$GenericRequestPromise<V>>;
    }
    export class $PLBEExtension {
    }
    export interface $PLBEExtension {
        deployer$fetchSummaryFromPackager<K, V, H>(arg0: $StockInventoryType_<K, V, H>, arg1: $IdentifiedContainer_<H> | null): $AbstractInventorySummary<K, V>;
        deployer$getPackager<K, V, H>(arg0: $StockInventoryType_<K, V, H>): $AbstractPackagerBlockEntity<K, V, H>;
        deployer$processRequest<K, V, H>(arg0: $StockInventoryType_<K, V, H>, arg1: V, arg2: number, arg3: string, arg4: number, arg5: $MutableBoolean, arg6: number, arg7: $GenericOrderContained_<V> | null, arg8: $IdentifiedContainer_<H> | null): $Pair<$AbstractPackagerBlockEntity<K, V, H>, $GenericPackagingRequest<V>>;
    }
    export class $ACPExtension {
    }
    export interface $ACPExtension {
        deployer$getCape(): number;
    }
    /**
     * Values that may be interpreted as {@link $ACPExtension}.
     */
    export type $ACPExtension_ = (() => number);
    export class $FPBEExtension {
    }
    export interface $FPBEExtension {
        deployer$getExtraDrops(): $List<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $FPBEExtension}.
     */
    export type $FPBEExtension_ = (() => $List_<$ItemStack_>);
    export class $FPBExtension {
    }
    export interface $FPBExtension {
        deployer$getExtra(): $Map<$BlockPos, $FactoryPanelConnection>;
        deployer$getConnectionValue<T>(arg0: $PanelConnection_<T>): (T) | undefined;
        deployer$getInputConnections(): $Set<$PanelConnection<never>>;
        deployer$getOutputConnections(): $Set<$PanelConnection<never>>;
    }
    export class $VITBExtension {
    }
    export interface $VITBExtension {
        deployer$stillWaiting(arg0: $Object): boolean;
        deployer$awaitNewVersion(arg0: $Object): void;
    }
    export class $FPCExtension {
    }
    export interface $FPCExtension {
        deployer$setLinkMode(arg0: $PanelConnection_<never>): void;
        deployer$getLinkMode(): $PanelConnection<never>;
    }
    export class $PRExtension {
    }
    export interface $PRExtension {
        deployer$flag(): void;
        deployer$isFlagged(): boolean;
    }
    export class $LLBExtension {
    }
    export interface $LLBExtension {
        deployer$deductFromAccurateSummary<K, V, H>(arg0: $StockInventoryType_<K, V, H>, arg1: H): void;
        deployer$getSummary<K, V, H>(arg0: $StockInventoryType_<K, V, H>, arg1: $IdentifiedContainer_<H>): $AbstractInventorySummary<K, V>;
        deployer$processRequests<K, V, H>(arg0: $StockInventoryType_<K, V, H>, arg1: V, arg2: number, arg3: string, arg4: number, arg5: $MutableBoolean, arg6: number, arg7: $GenericOrderContained_<V> | null, arg8: $IdentifiedContainer_<H> | null): $Pair<$AbstractPackagerBlockEntity<K, V, H>, $GenericPackagingRequest<V>>;
    }
}
