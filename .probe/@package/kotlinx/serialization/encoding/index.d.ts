import { $SerializersModule } from "@package/kotlinx/serialization/modules";
import { $SerializationStrategy } from "@package/kotlinx/serialization";
import { $SerialDescriptor } from "@package/kotlinx/serialization/descriptors";
import { $Object } from "@package/java/lang";

declare module "@package/kotlinx/serialization/encoding" {
    export class $CompositeEncoder {
        static access$shouldEncodeElementDefault$jd(arg0: $CompositeEncoder, arg1: $SerialDescriptor, arg2: number): boolean;
    }
    export interface $CompositeEncoder {
        encodeByteElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeShortElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeCharElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        encodeLongElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeDoubleElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeInlineElement(arg0: $SerialDescriptor, arg1: number): $Encoder;
        getSerializersModule(): $SerializersModule;
        encodeStringElement(arg0: $SerialDescriptor, arg1: number, arg2: string): void;
        encodeSerializableElement<T>(arg0: $SerialDescriptor, arg1: number, arg2: $SerializationStrategy<T>, arg3: T): void;
        encodeIntElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        shouldEncodeElementDefault(arg0: $SerialDescriptor, arg1: number): boolean;
        encodeNullableSerializableElement<T>(arg0: $SerialDescriptor, arg1: number, arg2: $SerializationStrategy<T>, arg3: T): void;
        encodeFloatElement(arg0: $SerialDescriptor, arg1: number, arg2: number): void;
        encodeBooleanElement(arg0: $SerialDescriptor, arg1: number, arg2: boolean): void;
        endStructure(arg0: $SerialDescriptor): void;
    }
    export class $Encoder {
        static access$encodeNotNullMark$jd(arg0: $Encoder): void;
        static access$beginCollection$jd(arg0: $Encoder, arg1: $SerialDescriptor, arg2: number): $CompositeEncoder;
        static access$encodeSerializableValue$jd(arg0: $Encoder, arg1: $SerializationStrategy<any>, arg2: $Object): void;
        static access$encodeNullableSerializableValue$jd(arg0: $Encoder, arg1: $SerializationStrategy<any>, arg2: $Object): void;
    }
    export interface $Encoder {
        encodeString(arg0: string): void;
        encodeInline(arg0: $SerialDescriptor): $Encoder;
        encodeNull(): void;
        encodeByte(arg0: number): void;
        encodeShort(arg0: number): void;
        encodeInt(arg0: number): void;
        encodeLong(arg0: number): void;
        encodeFloat(arg0: number): void;
        encodeDouble(arg0: number): void;
        encodeChar(arg0: string): void;
        encodeEnum(arg0: $SerialDescriptor, arg1: number): void;
        encodeSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        encodeNotNullMark(): void;
        encodeNullableSerializableValue<T>(arg0: $SerializationStrategy<T>, arg1: T): void;
        getSerializersModule(): $SerializersModule;
        beginStructure(arg0: $SerialDescriptor): $CompositeEncoder;
        encodeBoolean(arg0: boolean): void;
        beginCollection(arg0: $SerialDescriptor, arg1: number): $CompositeEncoder;
    }
}
