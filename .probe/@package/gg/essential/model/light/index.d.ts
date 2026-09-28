import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $Vec3 } from "@package/gg/essential/lib/kotgl/matrix/vectors";
import { $Object } from "@package/java/lang";

declare module "@package/gg/essential/model/light" {
    export class $Light {
        static "toString-impl"(arg0: number): string;
        static "hashCode-impl"(arg0: number): number;
        static "equals-impl"(arg0: number, arg1: $Object): boolean;
        static "box-impl"(arg0: number): $Light;
        static "equals-impl0"(arg0: number, arg1: number): boolean;
        "getValue-pVg5ArA"(): number;
        static "getBlockLight-Mh2AYeg"(arg0: number): number;
        static "getSkyLight-Mh2AYeg"(arg0: number): number;
        static access$getMIN_VALUE$cp(): number;
        static access$getMAX_VALUE$cp(): number;
        "unbox-impl"(): number;
        static "constructor-impl"(arg0: number, arg1: number): number;
        static "constructor-impl"(arg0: number): number;
        static Companion: $Light$Companion;
    }
    export class $Light$Companion {
        "getMIN_VALUE-cWgJFAk"(): number;
        "getMAX_VALUE-cWgJFAk"(): number;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $LightProvider {
    }
    export interface $LightProvider {
        "query-PvXcHUY"(arg0: $Vec3): number;
    }
    /**
     * Values that may be interpreted as {@link $LightProvider}.
     */
    export type $LightProvider_ = ((arg0: $Vec3) => number);
}
