import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $KSerializer, $SerializationStrategy, $DeserializationStrategy } from "@package/kotlinx/serialization";
import { $List_ } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $KClass } from "@package/kotlin/reflect";

declare module "@package/kotlinx/serialization/modules" {
    export class $SerializersModule {
        getHasInterfaceContextualSerializers$kotlinx_serialization_core(): boolean;
        getPolymorphic<T>(arg0: $KClass<T>, arg1: T): $SerializationStrategy<T>;
        getPolymorphic<T>(arg0: $KClass<T>, arg1: string): $DeserializationStrategy<T>;
        getContextual(arg0: $KClass<any>): $KSerializer<any>;
        getContextual<T>(arg0: $KClass<T>, arg1: $List_<$KSerializer<never>>): $KSerializer<T>;
        dumpTo(arg0: $SerializersModuleCollector): void;
        static getContextual$default(arg0: $SerializersModule, arg1: $KClass<any>, arg2: $List_<any>, arg3: number, arg4: $Object): $KSerializer<any>;
        static getHasInterfaceContextualSerializers$kotlinx_serialization_core$annotations(): void;
        constructor(arg0: $DefaultConstructorMarker);
    }
}
