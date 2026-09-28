import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Annotation } from "@package/java/lang/annotation";
import { $List } from "@package/java/util";

declare module "@package/kotlinx/serialization/descriptors" {
    export class $SerialDescriptor {
        static access$isNullable$jd(arg0: $SerialDescriptor): boolean;
        static access$isInline$jd(arg0: $SerialDescriptor): boolean;
        static access$getAnnotations$jd(arg0: $SerialDescriptor): $List<any>;
    }
    export interface $SerialDescriptor {
        isInline(): boolean;
        getSerialName(): string;
        getElementsCount(): number;
        isElementOptional(arg0: number): boolean;
        getElementAnnotations(arg0: number): $List<$Annotation>;
        getElementIndex(arg0: string): number;
        isNullable(): boolean;
        getAnnotations(): $List<$Annotation>;
        getElementName(arg0: number): string;
        getKind(): $SerialKind;
        getElementDescriptor(arg0: number): $SerialDescriptor;
    }
    export class $SerialKind {
        constructor(arg0: $DefaultConstructorMarker);
    }
}
