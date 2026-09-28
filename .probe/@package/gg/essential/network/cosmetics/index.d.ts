import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Model_, $EssentialAsset, $Model } from "@package/gg/essential/mod";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $CosmeticAssets, $CosmeticTier, $CosmeticTier_, $CosmeticSlot } from "@package/gg/essential/mod/cosmetics";
import { $Side } from "@package/gg/essential/model";
import { $List, $Map_, $Map, $Set, $Set_, $List_ } from "@package/java/util";
import { $SerializationConstructorMarker } from "@package/kotlinx/serialization/internal";
import { $Instant } from "@package/java/time";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $CosmeticProperty$Variants$Variant, $CosmeticProperty$InterruptsEmote$Data, $CosmeticSetting$Variant, $CosmeticSetting, $CosmeticProperty } from "@package/gg/essential/mod/cosmetics/settings";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Enum, $Object } from "@package/java/lang";
import { $CompositeEncoder } from "@package/kotlinx/serialization/encoding";
import { $Pair, $Lazy } from "@package/kotlin";

declare module "@package/gg/essential/network/cosmetics" {
    export class $Cosmetic {
        component3(): $List<$Cosmetic$Diagnostic>;
        getTags(): $Set<string>;
        getDefaultVariantName(): string;
        requiresUnlockAction(): boolean;
        getAvailableAfter(): $Instant;
        getAvailableUntil(): $Instant;
        getStoreInfo(): $CosmeticStoreInfo;
        getDiagnostics(): $List<$Cosmetic$Diagnostic>;
        getAllProperties(): $List<$CosmeticProperty>;
        getPrice(): number;
        getShowTimerAfter(): $Instant;
        getDefaultSortWeight(): number;
        getBaseAssets(): $CosmeticAssets;
        getAssetVariants(): $Map<string, $CosmeticAssets>;
        getDisabledProperties(): $List<$CosmeticProperty>;
        isLegacy(): boolean;
        isPurchasable(): boolean;
        isCosmeticFree(): boolean;
        getDefaultSide(): $Side;
        getMutuallyExclusiveWith(): $Set<$CosmeticSlot>;
        getDefaultVariant(): $CosmeticProperty$Variants$Variant;
        getDefaultVariantSetting(): $CosmeticSetting$Variant;
        static getPartnerCreator$annotations(): void;
        getPartnerCreator(): boolean;
        static getPartnerMod$annotations(): void;
        getPartnerMod(): string;
        static getPartnerEvent$annotations(): void;
        getPartnerEvent(): string;
        isPartnered(): boolean;
        static isPartnered$annotations(): void;
        static getPartnerName$annotations(): void;
        getPartnerName(): string;
        static getEmoteInterruptionTriggers$annotations(): void;
        getEmoteInterruptionTriggers(): $CosmeticProperty$InterruptsEmote$Data;
        getTier(): $CosmeticTier;
        getCategories(): $Map<string, number>;
        getDisplayName(arg0: string): string;
        getDisplayName(): string;
        getVariants(): $List<$CosmeticProperty$Variants$Variant>;
        getDisplayNames(): $Map<string, string>;
        getProperties(): $List<$CosmeticProperty>;
        properties<T extends $CosmeticProperty>(): $List<T>;
        getId(): string;
        copy(arg0: $CosmeticBase, arg1: $CosmeticStoreInfo, arg2: $List_<$Cosmetic$Diagnostic>): $Cosmetic;
        getSlot(): $CosmeticSlot;
        property<T extends $CosmeticProperty>(): T;
        getBase(): $CosmeticBase;
        getLocalPath(): string;
        assets(arg0: string): $CosmeticAssets;
        assets(arg0: $List_<$CosmeticSetting>): $CosmeticAssets;
        getFiles(): $Map<string, $EssentialAsset>;
        component1(): $CosmeticBase;
        component2(): $CosmeticStoreInfo;
        static copy$default(arg0: $Cosmetic, arg1: $CosmeticBase, arg2: $CosmeticStoreInfo, arg3: $List_<any>, arg4: number, arg5: $Object): $Cosmetic;
        constructor(arg0: $CosmeticBase, arg1: $CosmeticStoreInfo, arg2: $List_<$Cosmetic$Diagnostic>);
        constructor(arg0: $CosmeticBase, arg1: $CosmeticStoreInfo, arg2: $List_<any>, arg3: number, arg4: $DefaultConstructorMarker);
    }
    export class $CosmeticStoreInfo {
        component3(): $Instant;
        component4(): $Instant;
        component5(): $Instant;
        getTags(): $Set<string>;
        component6(): $Map<string, number>;
        component7(): number;
        getAvailableAfter(): $Instant;
        getAvailableUntil(): $Instant;
        getPrice(): number;
        getShowTimerAfter(): $Instant;
        getDefaultSortWeight(): number;
        getCategories(): $Map<string, number>;
        copy(arg0: number, arg1: $Set_<string>, arg2: $Instant, arg3: $Instant, arg4: $Instant, arg5: $Map_<string, number>, arg6: number): $CosmeticStoreInfo;
        component1(): number;
        component2(): $Set<string>;
        static copy$default(arg0: $CosmeticStoreInfo, arg1: number, arg2: $Set_<any>, arg3: $Instant, arg4: $Instant, arg5: $Instant, arg6: $Map_<any, any>, arg7: number, arg8: number, arg9: $Object): $CosmeticStoreInfo;
        constructor(arg0: number, arg1: $Set_<string>, arg2: $Instant, arg3: $Instant, arg4: $Instant, arg5: $Map_<string, number>, arg6: number);
    }
    export class $Cosmetic$Diagnostic {
        component3(): string;
        component4(): string;
        component5(): $Pair<number, number>;
        getStacktrace(): string;
        component6(): string;
        component7(): $Model;
        static write$Self$cosmetics(arg0: $Cosmetic$Diagnostic, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getLineColumn(): $Pair<number, number>;
        getSkin(): $Model;
        getVariant(): string;
        getMessage(): string;
        getType(): $Cosmetic$Diagnostic$Type;
        copy(arg0: $Cosmetic$Diagnostic$Type_, arg1: string, arg2: string, arg3: string, arg4: $Pair<number, number>, arg5: string, arg6: $Model_): $Cosmetic$Diagnostic;
        getFile(): string;
        component1(): $Cosmetic$Diagnostic$Type;
        component2(): string;
        static copy$default(arg0: $Cosmetic$Diagnostic, arg1: $Cosmetic$Diagnostic$Type_, arg2: string, arg3: string, arg4: string, arg5: $Pair<any, any>, arg6: string, arg7: $Model_, arg8: number, arg9: $Object): $Cosmetic$Diagnostic;
        static Companion: $Cosmetic$Diagnostic$Companion;
        constructor(arg0: number, arg1: $Cosmetic$Diagnostic$Type_, arg2: string, arg3: string, arg4: string, arg5: $Pair<any, any>, arg6: string, arg7: $Model_, arg8: $SerializationConstructorMarker);
        constructor(arg0: $Cosmetic$Diagnostic$Type_, arg1: string, arg2: string, arg3: string, arg4: $Pair<number, number>, arg5: string, arg6: $Model_);
        constructor(arg0: $Cosmetic$Diagnostic$Type_, arg1: string, arg2: string, arg3: string, arg4: $Pair<any, any>, arg5: string, arg6: $Model_, arg7: number, arg8: $DefaultConstructorMarker);
    }
    export class $Cosmetic$Diagnostic$Companion {
        static warning$default(arg0: $Cosmetic$Diagnostic$Companion, arg1: string, arg2: string, arg3: string, arg4: $Pair<any, any>, arg5: string, arg6: $Model_, arg7: number, arg8: $Object): $Cosmetic$Diagnostic;
        static fatal$default(arg0: $Cosmetic$Diagnostic$Companion, arg1: string, arg2: string, arg3: string, arg4: $Pair<any, any>, arg5: string, arg6: $Model_, arg7: number, arg8: $Object): $Cosmetic$Diagnostic;
        static error$default(arg0: $Cosmetic$Diagnostic$Companion, arg1: string, arg2: string, arg3: string, arg4: $Pair<any, any>, arg5: string, arg6: $Model_, arg7: number, arg8: $Object): $Cosmetic$Diagnostic;
        warning(arg0: string, arg1: string, arg2: string, arg3: $Pair<number, number>, arg4: string, arg5: $Model_): $Cosmetic$Diagnostic;
        error(arg0: string, arg1: string, arg2: string, arg3: $Pair<number, number>, arg4: string, arg5: $Model_): $Cosmetic$Diagnostic;
        fatal(arg0: string, arg1: string, arg2: string, arg3: $Pair<number, number>, arg4: string, arg5: $Model_): $Cosmetic$Diagnostic;
        serializer(): $KSerializer<$Cosmetic$Diagnostic>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $CosmeticBase {
        component3(): $CosmeticTier;
        component4(): $Map<string, string>;
        component5(): $Map<string, $EssentialAsset>;
        component6(): $List<$CosmeticProperty>;
        getAllProperties(): $List<$CosmeticProperty>;
        getTier(): $CosmeticTier;
        getDisplayNames(): $Map<string, string>;
        getId(): string;
        copy(arg0: string, arg1: $CosmeticSlot, arg2: $CosmeticTier_, arg3: $Map_<string, string>, arg4: $Map_<string, $EssentialAsset>, arg5: $List_<$CosmeticProperty>): $CosmeticBase;
        getSlot(): $CosmeticSlot;
        getFiles(): $Map<string, $EssentialAsset>;
        component1(): string;
        component2(): $CosmeticSlot;
        static copy$default(arg0: $CosmeticBase, arg1: string, arg2: $CosmeticSlot, arg3: $CosmeticTier_, arg4: $Map_<any, any>, arg5: $Map_<any, any>, arg6: $List_<any>, arg7: number, arg8: $Object): $CosmeticBase;
        constructor(arg0: string, arg1: $CosmeticSlot, arg2: $CosmeticTier_, arg3: $Map_<string, string>, arg4: $Map_<string, $EssentialAsset>, arg5: $List_<$CosmeticProperty>);
    }
    export class $Cosmetic$Diagnostic$Type extends $Enum<$Cosmetic$Diagnostic$Type> {
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        static values(): $Cosmetic$Diagnostic$Type[];
        static valueOf(arg0: string): $Cosmetic$Diagnostic$Type;
        static getEntries(): $EnumEntries<$Cosmetic$Diagnostic$Type>;
        static Companion: $Cosmetic$Diagnostic$Type$Companion;
        static Warning: $Cosmetic$Diagnostic$Type;
        static Error: $Cosmetic$Diagnostic$Type;
        static Fatal: $Cosmetic$Diagnostic$Type;
    }
    /**
     * Values that may be interpreted as {@link $Cosmetic$Diagnostic$Type}.
     */
    export type $Cosmetic$Diagnostic$Type_ = "fatal" | "error" | "warning";
}
