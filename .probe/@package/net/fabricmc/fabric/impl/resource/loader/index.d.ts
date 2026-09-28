import { $KnownPack_, $KnownPack, $PackSource } from "@package/net/minecraft/server/packs/repository";
import { $Predicate_ } from "@package/java/util/function";
import { $List_, $Set_, $Set, $List } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/impl/resource/loader" {
    export class $FabricResource {
    }
    export interface $FabricResource {
        getFabricPackSource(): $PackSource;
    }
    export class $FabricResourcePackProfile {
    }
    export interface $FabricResourcePackProfile {
        fabric_parentsEnabled(arg0: $Set_<string>): boolean;
        fabric_isHidden(): boolean;
        fabric_setParentsPredicate(arg0: $Predicate_<$Set<string>>): void;
    }
    export class $FabricOriginalKnownPacksGetter {
    }
    export interface $FabricOriginalKnownPacksGetter {
        fabric_getOriginalKnownPacks(): $List<$KnownPack>;
    }
    /**
     * Values that may be interpreted as {@link $FabricOriginalKnownPacksGetter}.
     */
    export type $FabricOriginalKnownPacksGetter_ = (() => $List_<$KnownPack_>);
}
