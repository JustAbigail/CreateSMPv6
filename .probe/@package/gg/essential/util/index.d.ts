import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $UMatrixStack } from "@package/gg/essential/universal";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Object } from "@package/java/lang";
export * as image from "@package/gg/essential/util/image";

declare module "@package/gg/essential/util" {
    export class $UIdentifier$Companion {
        ofLegacy(arg0: string): $UIdentifier;
        of(arg0: string): $UIdentifier;
        serializer(): $KSerializer<$UIdentifier>;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $UDrawContext {
        getMc(): $GuiGraphics;
        getMatrixStack(): $UMatrixStack;
        constructor(mc: $GuiGraphics, matrixStack: $UMatrixStack);
    }
    export class $UIdentifier {
        toLegacyString(): string;
        static ofLegacy(arg0: string): $UIdentifier;
        getNamespace(): string;
        static of(arg0: string): $UIdentifier;
        copy(arg0: string, arg1: string): $UIdentifier;
        getPath(): string;
        component1(): string;
        component2(): string;
        static copy$default(arg0: $UIdentifier, arg1: string, arg2: string, arg3: number, arg4: $Object): $UIdentifier;
        static Companion: $UIdentifier$Companion;
        constructor(arg0: string, arg1: string);
    }
}
