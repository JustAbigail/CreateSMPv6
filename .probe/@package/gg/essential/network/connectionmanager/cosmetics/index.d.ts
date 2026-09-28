import { $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership } from "@package/gg/essential/mod/cosmetics/database";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $FeaturedPageCollection } from "@package/gg/essential/mod/cosmetics/featured";
import { $Skin } from "@package/gg/essential/mod";
import { $TrackedList } from "@package/gg/essential/gui/elementa/state/v2/collections";
import { $EquippedCosmetic, $EquippedCosmeticId } from "@package/gg/essential/cosmetics";
import { $State } from "@package/gg/essential/gui/elementa/state/v2";
import { $CosmeticSlot, $CosmeticBundle, $CosmeticCategory } from "@package/gg/essential/mod/cosmetics";
import { $Object } from "@package/java/lang";
import { $UUID_, $Map_, $Map } from "@package/java/util";
import { $CosmeticBase, $Cosmetic, $CosmeticStoreInfo } from "@package/gg/essential/network/cosmetics";

declare module "@package/gg/essential/network/connectionmanager/cosmetics" {
    export class $EquippedOutfitsManager$Outfit$Companion {
        getEMPTY(): $EquippedOutfitsManager$Outfit;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $EquippedOutfitsManager$Outfit {
        getCosmetics(): $Map<$CosmeticSlot, $EquippedCosmeticId>;
        static access$getEMPTY$cp(): $EquippedOutfitsManager$Outfit;
        getSkin(): $Skin;
        copy(arg0: $Map_<$CosmeticSlot, $EquippedCosmeticId>, arg1: $Skin): $EquippedOutfitsManager$Outfit;
        component1(): $Map<$CosmeticSlot, $EquippedCosmeticId>;
        component2(): $Skin;
        static copy$default(arg0: $EquippedOutfitsManager$Outfit, arg1: $Map_<any, any>, arg2: $Skin, arg3: number, arg4: $Object): $EquippedOutfitsManager$Outfit;
        static Companion: $EquippedOutfitsManager$Outfit$Companion;
        constructor(arg0: $Map_<$CosmeticSlot, $EquippedCosmeticId>, arg1: $Skin);
    }
    export class $CosmeticsData {
        static access$cosmeticBase$jd(arg0: $CosmeticsData, arg1: string): $State<any>;
        static access$cosmeticStoreInfo$jd(arg0: $CosmeticsData, arg1: string): $State<any>;
    }
    export interface $CosmeticsData {
        getCosmetic(arg0: string): $Cosmetic;
        getCosmetics(): $State<$TrackedList<$Cosmetic>>;
        getFeaturedPageCollections(): $State<$TrackedList<$FeaturedPageCollection>>;
        getImplicitOwnerships(): $State<$TrackedList<$GitRepoCosmeticsDatabase$CosmeticImplicitOwnership>>;
        getCosmeticBundle(arg0: string): $CosmeticBundle;
        getFeaturedPageCollection(arg0: string): $FeaturedPageCollection;
        getImplicitOwnership(arg0: string): $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership;
        cosmeticBase(arg0: string): $State<$CosmeticBase>;
        cosmeticStoreInfo(arg0: string): $State<$CosmeticStoreInfo>;
        getBundles(): $State<$TrackedList<$CosmeticBundle>>;
        cosmetic(arg0: string): $State<$Cosmetic>;
        getCategories(): $State<$TrackedList<$CosmeticCategory>>;
        getCategory(arg0: string): $CosmeticCategory;
    }
    export class $EquippedOutfitsManager {
    }
    export interface $EquippedOutfitsManager {
        getEquippedCosmeticsState(arg0: $UUID_): $State<$EquippedOutfitsManager$Outfit>;
        getCapeHash(arg0: $UUID_): string;
        getVisibleCosmeticsState(arg0: $UUID_): $State<$Map<$CosmeticSlot, $EquippedCosmetic>>;
        getSkin(arg0: $UUID_): $Skin;
    }
}
