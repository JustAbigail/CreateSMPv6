import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Object, $Enum } from "@package/java/lang";
import { $UUID_, $List } from "@package/java/util";
import { $CompositeEncoder } from "@package/kotlinx/serialization/encoding";
import { $Lazy } from "@package/kotlin";
import { $SerializationConstructorMarker } from "@package/kotlinx/serialization/internal";
export * as cosmetics from "@package/gg/essential/mod/cosmetics";

declare module "@package/gg/essential/mod" {
    export class $Skin$Companion {
        fromInfra(arg0: string): $Skin;
        fromUrl(arg0: string, arg1: $Model_): $Skin;
        hashFromUrl(arg0: string): string;
        getMAKENA_WIDE(): $Skin;
        getNOOR_WIDE(): $Skin;
        getSTEVE_WIDE(): $Skin;
        getSUNNY_WIDE(): $Skin;
        getZURI_WIDE(): $Skin;
        getDEFAULT_SKINS(): $List<$Skin>;
        defaultPre1_19_3For(arg0: $UUID_): $Skin;
        static getSKIN_URL$annotations(): void;
        getALEX_SLIM(): $Skin;
        getARI_SLIM(): $Skin;
        getEFE_SLIM(): $Skin;
        getKAI_SLIM(): $Skin;
        getMAKENA_SLIM(): $Skin;
        getNOOR_SLIM(): $Skin;
        getSTEVE_SLIM(): $Skin;
        getSUNNY_SLIM(): $Skin;
        getZURI_SLIM(): $Skin;
        getALEX_WIDE(): $Skin;
        getARI_WIDE(): $Skin;
        getEFE_WIDE(): $Skin;
        getKAI_WIDE(): $Skin;
        defaultFor(arg0: $UUID_): $Skin;
        serializer(): $KSerializer<$Skin>;
        constructor(arg0: $DefaultConstructorMarker);
        get MAKENA_WIDE(): $Skin;
        get NOOR_WIDE(): $Skin;
        get STEVE_WIDE(): $Skin;
        get SUNNY_WIDE(): $Skin;
        get ZURI_WIDE(): $Skin;
        get DEFAULT_SKINS(): $List<$Skin>;
        static get SKIN_URL$annotations(): void;
        get ALEX_SLIM(): $Skin;
        get ARI_SLIM(): $Skin;
        get EFE_SLIM(): $Skin;
        get KAI_SLIM(): $Skin;
        get MAKENA_SLIM(): $Skin;
        get NOOR_SLIM(): $Skin;
        get STEVE_SLIM(): $Skin;
        get SUNNY_SLIM(): $Skin;
        get ZURI_SLIM(): $Skin;
        get ALEX_WIDE(): $Skin;
        get ARI_WIDE(): $Skin;
        get EFE_WIDE(): $Skin;
        get KAI_WIDE(): $Skin;
    }
    export class $Model extends $Enum<$Model> {
        static byTypeOrDefault(arg0: string): $Model;
        static byVariant(arg0: string): $Model;
        static byVariantOrDefault(arg0: string): $Model;
        static access$get$cachedSerializer$delegate$cp(): $Lazy<any>;
        static values(): $Model[];
        static valueOf(arg0: string): $Model;
        getType(): string;
        static getEntries(): $EnumEntries<$Model>;
        getVariant(): string;
        static byType(arg0: string): $Model;
        static Companion: $Model$Companion;
        static ALEX: $Model;
        static STEVE: $Model;
        get type(): string;
        static get entries(): $EnumEntries<$Model>;
        get variant(): string;
    }
    /**
     * Values that may be interpreted as {@link $Model}.
     */
    export type $Model_ = "steve" | "alex";
    export class $EssentialAsset {
        static write$Self$cosmetics(arg0: $EssentialAsset, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$getEMPTY$cp(): $EssentialAsset;
        copy(arg0: string, arg1: string): $EssentialAsset;
        getUrl(): string;
        getChecksum(): string;
        component1(): string;
        component2(): string;
        static copy$default(arg0: $EssentialAsset, arg1: string, arg2: string, arg3: number, arg4: $Object): $EssentialAsset;
        static Companion: $EssentialAsset$Companion;
        constructor(arg0: number, arg1: string, arg2: string, arg3: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: string);
        get url(): string;
        get checksum(): string;
    }
    export class $Skin {
        static write$Self$cosmetics(arg0: $Skin, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        static fromUrl(arg0: string, arg1: $Model_): $Skin;
        static hashFromUrl(arg0: string): string;
        static access$getALEX_SLIM$cp(): $Skin;
        static access$getARI_SLIM$cp(): $Skin;
        static access$getEFE_SLIM$cp(): $Skin;
        static access$getKAI_SLIM$cp(): $Skin;
        static access$getMAKENA_SLIM$cp(): $Skin;
        static access$getNOOR_SLIM$cp(): $Skin;
        static access$getSTEVE_SLIM$cp(): $Skin;
        static access$getSUNNY_SLIM$cp(): $Skin;
        static access$getZURI_SLIM$cp(): $Skin;
        static access$getEFE_WIDE$cp(): $Skin;
        static access$getKAI_WIDE$cp(): $Skin;
        static access$getMAKENA_WIDE$cp(): $Skin;
        static access$getNOOR_WIDE$cp(): $Skin;
        static access$getSTEVE_WIDE$cp(): $Skin;
        static access$getSUNNY_WIDE$cp(): $Skin;
        static access$getZURI_WIDE$cp(): $Skin;
        static access$getDEFAULT_SKINS$cp(): $List<any>;
        static access$getALEX_WIDE$cp(): $Skin;
        static access$getARI_WIDE$cp(): $Skin;
        copy(arg0: string, arg1: $Model_): $Skin;
        getUrl(): string;
        getModel(): $Model;
        component1(): string;
        component2(): $Model;
        static copy$default(arg0: $Skin, arg1: string, arg2: $Model_, arg3: number, arg4: $Object): $Skin;
        getHash(): string;
        static Companion: $Skin$Companion;
        static SKIN_URL: string;
        constructor(arg0: string, arg1: $Model_);
        constructor(arg0: number, arg1: string, arg2: $Model_, arg3: string, arg4: $SerializationConstructorMarker);
        get url(): string;
        get model(): $Model;
        get hash(): string;
    }
    export class $Model$Companion {
        byTypeOrDefault(arg0: string): $Model;
        byVariant(arg0: string): $Model;
        byVariantOrDefault(arg0: string): $Model;
        serializer(): $KSerializer<$Model>;
        byType(arg0: string): $Model;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $EssentialAsset$Companion {
        getEMPTY(): $EssentialAsset;
        of(arg0: number[]): $EssentialAsset;
        of(arg0: string): $EssentialAsset;
        serializer(): $KSerializer<$EssentialAsset>;
        constructor(arg0: $DefaultConstructorMarker);
        get EMPTY(): $EssentialAsset;
    }
}
