import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $List_, $List } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $CompositeEncoder } from "@package/kotlinx/serialization/encoding";
import { $Lazy } from "@package/kotlin";
import { $SerializationConstructorMarker } from "@package/kotlinx/serialization/internal";

declare module "@package/gg/essential/mod/cosmetics/database" {
    export class $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership {
        component3(): $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion;
        getCosmetics(): $List<string>;
        static write$Self$cosmetics(arg0: $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getCriterion(): $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion;
        getId(): string;
        copy(arg0: string, arg1: $List_<string>, arg2: $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion): $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership;
        component1(): string;
        component2(): $List<string>;
        static copy$default(arg0: $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership, arg1: string, arg2: $List_<any>, arg3: $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion, arg4: number, arg5: $Object): $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership;
        static Companion: $GitRepoCosmeticsDatabase$CosmeticImplicitOwnership$Companion;
        constructor(arg0: number, arg1: string, arg2: $List_<any>, arg3: $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion, arg4: $SerializationConstructorMarker);
        constructor(arg0: string, arg1: $List_<string>, arg2: $GitRepoCosmeticsDatabase$ImplicitOwnershipCriterion);
    }
}
