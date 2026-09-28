import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $Map_, $Map, $Map$Entry } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $CompositeEncoder } from "@package/kotlinx/serialization/encoding";
import { $Lazy } from "@package/kotlin";
import { $SerializationConstructorMarker } from "@package/kotlinx/serialization/internal";

declare module "@package/gg/essential/mod/cosmetics/featured" {
    export class $FeaturedPageCollection {
        component3(): $Map<number, $FeaturedPage>;
        static write$Self$cosmetics(arg0: $FeaturedPageCollection, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        static access$get$childSerializers$cp(): $Lazy<any>[];
        getAvailability(): $FeaturedPageCollection$Availability;
        getClosestLayoutOrNull(arg0: number): $Map$Entry<number, $FeaturedPage>;
        getPages(): $Map<number, $FeaturedPage>;
        getId(): string;
        copy(arg0: string, arg1: $FeaturedPageCollection$Availability, arg2: $Map_<number, $FeaturedPage>): $FeaturedPageCollection;
        component1(): string;
        component2(): $FeaturedPageCollection$Availability;
        static copy$default(arg0: $FeaturedPageCollection, arg1: string, arg2: $FeaturedPageCollection$Availability, arg3: $Map_<any, any>, arg4: number, arg5: $Object): $FeaturedPageCollection;
        static Companion: $FeaturedPageCollection$Companion;
        constructor(arg0: string, arg1: $FeaturedPageCollection$Availability, arg2: $Map_<number, $FeaturedPage>);
        constructor(arg0: string, arg1: $FeaturedPageCollection$Availability, arg2: $Map_<any, any>, arg3: number, arg4: $DefaultConstructorMarker);
        constructor(arg0: number, arg1: string, arg2: $FeaturedPageCollection$Availability, arg3: $Map_<any, any>, arg4: $SerializationConstructorMarker);
    }
}
