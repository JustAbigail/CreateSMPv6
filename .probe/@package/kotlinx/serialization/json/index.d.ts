import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $SerializersModule } from "@package/kotlinx/serialization/modules";
import { $StringFormat, $SerializationStrategy, $DeserializationStrategy } from "@package/kotlinx/serialization";
import { $DescriptorSchemaCache } from "@package/kotlinx/serialization/json/internal";

declare module "@package/kotlinx/serialization/json" {
    export class $Json implements $StringFormat {
        get_schemaCache$kotlinx_serialization_json(): $DescriptorSchemaCache;
        static get_schemaCache$kotlinx_serialization_json$annotations(): void;
        decodeFromString<T>(arg0: $DeserializationStrategy<T>, arg1: string): T;
        decodeFromString<T>(arg0: string): T;
        encodeToJsonElement<T>(arg0: $SerializationStrategy<T>, arg1: T): $JsonElement;
        decodeFromJsonElement<T>(arg0: $DeserializationStrategy<T>, arg1: $JsonElement): T;
        getSerializersModule(): $SerializersModule;
        parseToJsonElement(arg0: string): $JsonElement;
        encodeToString<T>(arg0: T): string;
        encodeToString<T>(arg0: $SerializationStrategy<T>, arg1: T): string;
        getConfiguration(): $JsonConfiguration;
        static Default: $Json$Default;
        constructor(arg0: $JsonConfiguration, arg1: $SerializersModule, arg2: $DefaultConstructorMarker);
    }
}
