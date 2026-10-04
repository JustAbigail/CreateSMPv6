import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Skin, $Model_, $EssentialAsset, $Model } from "@package/gg/essential/mod";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $ConcurrentHashMap } from "@package/java/util/concurrent";
import { $Side } from "@package/gg/essential/model";
import { $List, $Map_, $Map, $Set, $Set_, $List_ } from "@package/java/util";
import { $SerializationConstructorMarker } from "@package/kotlinx/serialization/internal";
import { $Instant } from "@package/java/time";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $CosmeticSetting } from "@package/gg/essential/mod/cosmetics/settings";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Enum, $Object } from "@package/java/lang";
import { $CompositeEncoder } from "@package/kotlinx/serialization/encoding";
import { $Lazy } from "@package/kotlin";
export * as featured from "@package/gg/essential/mod/cosmetics/featured";
export * as settings from "@package/gg/essential/mod/cosmetics/settings";
export * as database from "@package/gg/essential/mod/cosmetics/database";

declare module "@package/gg/essential/mod/cosmetics" {
    export class $CosmeticTier extends $Enum<$CosmeticTier> {
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        static values(): $CosmeticTier[];
        static valueOf(arg0: string): $CosmeticTier;
        static getEntries(): $EnumEntries<$CosmeticTier>;
        static Companion: $CosmeticTier$Companion;
        static RARE: $CosmeticTier;
        static EPIC: $CosmeticTier;
        static UNCOMMON: $CosmeticTier;
        static COMMON: $CosmeticTier;
        static LEGENDARY: $CosmeticTier;
        static get entries(): $EnumEntries<$CosmeticTier>;
    }
    /**
     * Values that may be interpreted as {@link $CosmeticTier}.
     */
    export type $CosmeticTier_ = "common" | "uncommon" | "rare" | "epic" | "legendary";
    export class $CosmeticAssets$Companion {
        serializer(): $KSerializer<$CosmeticAssets>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CosmeticTier$Companion {
        serializer(): $KSerializer<$CosmeticTier>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CosmeticBundle$Skin {
        component3(): string;
        toMod(): $Skin;
        static write$Self$cosmetics(arg0: $CosmeticBundle$Skin, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getName(): string;
        copy(arg0: string, arg1: $Model_, arg2: string): $CosmeticBundle$Skin;
        getModel(): $Model;
        component1(): string;
        component2(): $Model;
        static copy$default(arg0: $CosmeticBundle$Skin, arg1: string, arg2: $Model_, arg3: string, arg4: number, arg5: $Object): $CosmeticBundle$Skin;
        getHash(): string;
        static Companion: $CosmeticBundle$Skin$Companion;
        constructor(arg0: number, arg1: string, arg2: $Model_, arg3: string, arg4: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: $Model_, arg2: string);
        constructor(arg0: $Skin, arg1: string, arg2: number, arg3: $DefaultConstructorMarker);
        constructor(arg0: string, arg1: $Model_, arg2: string, arg3: number, arg4: $DefaultConstructorMarker);
        constructor(arg0: $Skin, arg1: string);
        get name(): string;
        get model(): $Model;
        get hash(): string;
    }
    export class $CosmeticAssets$SkinMask {
        static write$Self$cosmetics(arg0: $CosmeticAssets$SkinMask, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        getSteve(): $EssentialAsset;
        getAlex(): $EssentialAsset;
        copy(arg0: $EssentialAsset, arg1: $EssentialAsset): $CosmeticAssets$SkinMask;
        component1(): $EssentialAsset;
        component2(): $EssentialAsset;
        static copy$default(arg0: $CosmeticAssets$SkinMask, arg1: $EssentialAsset, arg2: $EssentialAsset, arg3: number, arg4: $Object): $CosmeticAssets$SkinMask;
        static Companion: $CosmeticAssets$SkinMask$Companion;
        constructor(arg0: number, arg1: $EssentialAsset, arg2: $EssentialAsset, arg3: $SerializationConstructorMarker);
        constructor(arg0: $EssentialAsset, arg1: $EssentialAsset);
        get steve(): $EssentialAsset;
        get alex(): $EssentialAsset;
    }
    export class $CosmeticAssets$Geometry {
        static write$Self$cosmetics(arg0: $CosmeticAssets$Geometry, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        getSteve(): $EssentialAsset;
        getAlex(): $EssentialAsset;
        copy(arg0: $EssentialAsset, arg1: $EssentialAsset): $CosmeticAssets$Geometry;
        component1(): $EssentialAsset;
        component2(): $EssentialAsset;
        static copy$default(arg0: $CosmeticAssets$Geometry, arg1: $EssentialAsset, arg2: $EssentialAsset, arg3: number, arg4: $Object): $CosmeticAssets$Geometry;
        static Companion: $CosmeticAssets$Geometry$Companion;
        constructor(arg0: number, arg1: $EssentialAsset, arg2: $EssentialAsset, arg3: $SerializationConstructorMarker);
        constructor(arg0: $EssentialAsset, arg1: $EssentialAsset);
        get steve(): $EssentialAsset;
        get alex(): $EssentialAsset;
    }
    export class $CosmeticBundle$Companion {
        serializer(): $KSerializer<$CosmeticBundle>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CosmeticCategory$Companion {
        serializer(): $KSerializer<$CosmeticCategory>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CosmeticSlot {
        static access$getEntries$cp(): $ConcurrentHashMap<any, any>;
        static access$getValues$cp(): $List<any>;
        static values(): $List<$CosmeticSlot>;
        getId(): string;
        copy(arg0: string): $CosmeticSlot;
        component1(): string;
        static copy$default(arg0: $CosmeticSlot, arg1: string, arg2: number, arg3: $Object): $CosmeticSlot;
        static HEAD: $CosmeticSlot;
        static WINGS: $CosmeticSlot;
        static SKIRT: $CosmeticSlot;
        static EFFECT: $CosmeticSlot;
        static EMOTE: $CosmeticSlot;
        static ARMS: $CosmeticSlot;
        static FULL_BODY: $CosmeticSlot;
        static CAPE: $CosmeticSlot;
        static Companion: $CosmeticSlot$Companion;
        static TOP: $CosmeticSlot;
        static ACCESSORY: $CosmeticSlot;
        static TAIL: $CosmeticSlot;
        static SHOULDERS: $CosmeticSlot;
        static BACK: $CosmeticSlot;
        static HAT: $CosmeticSlot;
        static PANTS: $CosmeticSlot;
        static SHOES: $CosmeticSlot;
        static ICON: $CosmeticSlot;
        static EARS: $CosmeticSlot;
        static FACE: $CosmeticSlot;
        static PET: $CosmeticSlot;
        static SUITS: $CosmeticSlot;
        constructor(arg0: string, arg1: $DefaultConstructorMarker);
        get id(): string;
    }
    export class $CosmeticCategory {
        component3(): $Map<string, string>;
        component4(): $Map<string, string>;
        component5(): $Set<$CosmeticSlot>;
        component6(): $Set<string>;
        component7(): number;
        getCompactNames(): $Map<string, string>;
        getDescriptions(): $Map<string, string>;
        getAvailableAfter(): $Instant;
        getAvailableUntil(): $Instant;
        isEmoteCategory(): boolean;
        component8(): $Instant;
        component9(): $Instant;
        static write$Self$cosmetics(arg0: $CosmeticCategory, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getOrder(): number;
        getDisplayNames(): $Map<string, string>;
        isHidden(): boolean;
        getId(): string;
        copy(arg0: string, arg1: $Map_<string, string>, arg2: $Map_<string, string>, arg3: $Map_<string, string>, arg4: $Set_<$CosmeticSlot>, arg5: $Set_<string>, arg6: number, arg7: $Instant, arg8: $Instant): $CosmeticCategory;
        getSlots(): $Set<$CosmeticSlot>;
        getTags(): $Set<string>;
        component1(): string;
        component2(): $Map<string, string>;
        static copy$default(arg0: $CosmeticCategory, arg1: string, arg2: $Map_<any, any>, arg3: $Map_<any, any>, arg4: $Map_<any, any>, arg5: $Set_<any>, arg6: $Set_<any>, arg7: number, arg8: $Instant, arg9: $Instant, arg10: number, arg11: $Object): $CosmeticCategory;
        static Companion: $CosmeticCategory$Companion;
        static EMOTE_CATEGORY_TAG: string;
        static HIDDEN_CATEGORY_TAG: string;
        constructor(arg0: number, arg1: string, arg2: $Map_<any, any>, arg3: $Map_<any, any>, arg4: $Map_<any, any>, arg5: $Set_<any>, arg6: $Set_<any>, arg7: number, arg8: $Instant, arg9: $Instant, arg10: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: $Map_<string, string>, arg2: $Map_<string, string>, arg3: $Map_<string, string>, arg4: $Set_<$CosmeticSlot>, arg5: $Set_<string>, arg6: number, arg7: $Instant, arg8: $Instant);
        constructor(arg0: string, arg1: $Map_<any, any>, arg2: $Map_<any, any>, arg3: $Map_<any, any>, arg4: $Set_<any>, arg5: $Set_<any>, arg6: number, arg7: $Instant, arg8: $Instant, arg9: number, arg10: $DefaultConstructorMarker);
        get compactNames(): $Map<string, string>;
        get descriptions(): $Map<string, string>;
        get availableAfter(): $Instant;
        get availableUntil(): $Instant;
        get emoteCategory(): boolean;
        get order(): number;
        get displayNames(): $Map<string, string>;
        get hidden(): boolean;
        get id(): string;
        get slots(): $Set<$CosmeticSlot>;
        get tags(): $Set<string>;
    }
    export class $CosmeticAssets {
        static write$Self$cosmetics(arg0: $CosmeticAssets, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getAllFiles(): $Map<string, $EssentialAsset>;
        getAnimations(): $EssentialAsset;
        getEmissiveTexture(): $EssentialAsset;
        getGeometry(): $CosmeticAssets$Geometry;
        getParticles(): $Map<string, $EssentialAsset>;
        getDefaultSkinMask(): $CosmeticAssets$SkinMask;
        getSidedSkinMasks(): $Map<$Side, $CosmeticAssets$SkinMask>;
        getSoundDefinitions(): $EssentialAsset;
        getOtherFiles(): $Map<string, $EssentialAsset>;
        getSettings(): $EssentialAsset;
        getThumbnail(): $EssentialAsset;
        copy(arg0: $Map_<string, $EssentialAsset>): $CosmeticAssets;
        getTexture(): $EssentialAsset;
        component1(): $Map<string, $EssentialAsset>;
        static copy$default(arg0: $CosmeticAssets, arg1: $Map_<any, any>, arg2: number, arg3: $Object): $CosmeticAssets;
        static Companion: $CosmeticAssets$Companion;
        constructor(arg0: number, arg1: $Map_<any, any>, arg2: $EssentialAsset, arg3: $EssentialAsset, arg4: $EssentialAsset, arg5: $CosmeticAssets$Geometry, arg6: $EssentialAsset, arg7: $CosmeticAssets$SkinMask, arg8: $Map_<any, any>, arg9: $EssentialAsset, arg10: $Map_<any, any>, arg11: $EssentialAsset, arg12: $SerializationConstructorMarker);
        constructor(arg0: $Map_<string, $EssentialAsset>);
        get allFiles(): $Map<string, $EssentialAsset>;
        get animations(): $EssentialAsset;
        get emissiveTexture(): $EssentialAsset;
        get geometry(): $CosmeticAssets$Geometry;
        get particles(): $Map<string, $EssentialAsset>;
        get defaultSkinMask(): $CosmeticAssets$SkinMask;
        get sidedSkinMasks(): $Map<$Side, $CosmeticAssets$SkinMask>;
        get soundDefinitions(): $EssentialAsset;
        get otherFiles(): $Map<string, $EssentialAsset>;
        get settings(): $EssentialAsset;
        get thumbnail(): $EssentialAsset;
        get texture(): $EssentialAsset;
    }
    export class $CosmeticSlot$Companion {
        static access$make(arg0: $CosmeticSlot$Companion, arg1: string): $CosmeticSlot;
        values(): $List<$CosmeticSlot>;
        of(arg0: string): $CosmeticSlot;
        serializer(): $KSerializer<$CosmeticSlot>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CosmeticBundle {
        component3(): $CosmeticTier;
        component4(): number;
        component5(): boolean;
        component6(): $CosmeticBundle$Skin;
        component7(): $Map<$CosmeticSlot, string>;
        getDiscountPercent(): number;
        getCosmetics(): $Map<$CosmeticSlot, string>;
        component8(): $Map<string, $List<$CosmeticSetting>>;
        static write$Self$cosmetics(arg0: $CosmeticBundle, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getRotateOnPreview(): boolean;
        setSkin(arg0: $CosmeticBundle$Skin): void;
        getSettings(): $Map<string, $List<$CosmeticSetting>>;
        getSkin(): $CosmeticBundle$Skin;
        getTier(): $CosmeticTier;
        getName(): string;
        getId(): string;
        copy(arg0: string, arg1: string, arg2: $CosmeticTier_, arg3: number, arg4: boolean, arg5: $CosmeticBundle$Skin, arg6: $Map_<$CosmeticSlot, string>, arg7: $Map_<string, $List_<$CosmeticSetting>>): $CosmeticBundle;
        component1(): string;
        component2(): string;
        static copy$default(arg0: $CosmeticBundle, arg1: string, arg2: string, arg3: $CosmeticTier_, arg4: number, arg5: boolean, arg6: $CosmeticBundle$Skin, arg7: $Map_<any, any>, arg8: $Map_<any, any>, arg9: number, arg10: $Object): $CosmeticBundle;
        static Companion: $CosmeticBundle$Companion;
        constructor(arg0: number, arg1: string, arg2: string, arg3: $CosmeticTier_, arg4: number, arg5: boolean, arg6: $CosmeticBundle$Skin, arg7: $Map_<any, any>, arg8: $Map_<any, any>, arg9: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: string, arg2: $CosmeticTier_, arg3: number, arg4: boolean, arg5: $CosmeticBundle$Skin, arg6: $Map_<$CosmeticSlot, string>, arg7: $Map_<string, $List_<$CosmeticSetting>>);
        constructor(arg0: string, arg1: string, arg2: $CosmeticTier_, arg3: number, arg4: boolean, arg5: $CosmeticBundle$Skin, arg6: $Map_<any, any>, arg7: $Map_<any, any>, arg8: number, arg9: $DefaultConstructorMarker);
        get discountPercent(): number;
        get cosmetics(): $Map<$CosmeticSlot, string>;
        get rotateOnPreview(): boolean;
        get settings(): $Map<string, $List<$CosmeticSetting>>;
        get tier(): $CosmeticTier;
        get name(): string;
        get id(): string;
    }
}
