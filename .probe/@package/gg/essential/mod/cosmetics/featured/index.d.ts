import { $Instant } from "@package/java/time";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $List, $List_, $Map_, $Map, $Map$Entry } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $CompositeEncoder } from "@package/kotlinx/serialization/encoding";
import { $Lazy } from "@package/kotlin";
import { $SerializationConstructorMarker } from "@package/kotlinx/serialization/internal";

declare module "@package/gg/essential/mod/cosmetics/featured" {
    export class $FeaturedPage {
        copy(arg0: $List_<$FeaturedPageComponent>): $FeaturedPage;
        getRows(): $List<$FeaturedPageComponent>;
        component1(): $List<$FeaturedPageComponent>;
        static copy$default(arg0: $FeaturedPage, arg1: $List_<any>, arg2: number, arg3: $Object): $FeaturedPage;
        static Companion: $FeaturedPage$Companion;
        constructor(arg0: $List_<$FeaturedPageComponent>);
        get rows(): $List<$FeaturedPageComponent>;
    }
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
        get availability(): $FeaturedPageCollection$Availability;
        get pages(): $Map<number, $FeaturedPage>;
        get id(): string;
    }
    export class $FeaturedPageCollection$Availability {
        component3(): $Instant;
        static write$Self$cosmetics(arg0: $FeaturedPageCollection$Availability, arg1: $CompositeEncoder, arg2: $SerialDescriptor): void;
        getShowTimerAfter(): $Instant;
        getAfter(): $Instant;
        getUntil(): $Instant;
        static getShowTimerAfter$annotations(): void;
        copy(arg0: $Instant, arg1: $Instant, arg2: $Instant): $FeaturedPageCollection$Availability;
        component1(): $Instant;
        component2(): $Instant;
        static copy$default(arg0: $FeaturedPageCollection$Availability, arg1: $Instant, arg2: $Instant, arg3: $Instant, arg4: number, arg5: $Object): $FeaturedPageCollection$Availability;
        static Companion: $FeaturedPageCollection$Availability$Companion;
        constructor(arg0: number, arg1: $Instant, arg2: $Instant, arg3: $Instant, arg4: $SerializationConstructorMarker);
        constructor(arg0: $Instant, arg1: $Instant, arg2: $Instant);
        constructor(arg0: $Instant, arg1: $Instant, arg2: $Instant, arg3: number, arg4: $DefaultConstructorMarker);
        get showTimerAfter(): $Instant;
        get after(): $Instant;
        get until(): $Instant;
        static get showTimerAfter$annotations(): void;
    }
    export class $FeaturedPageCollection$Companion {
        serializer(): $KSerializer<$FeaturedPageCollection>;
        constructor(arg0: $DefaultConstructorMarker);
    }
}
