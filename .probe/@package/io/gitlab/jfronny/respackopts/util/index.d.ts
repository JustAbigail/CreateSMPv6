import { $PackResources } from "@package/net/minecraft/server/packs";
import { $Object } from "@package/java/lang";

declare module "@package/io/gitlab/jfronny/respackopts/util" {
    export class $IPackResources {
        static respackopts$getTag(resourcePack: $PackResources): string;
        static respackopts$getIdentityTag(resourcePack: $Object): string;
    }
    export interface $IPackResources {
        respackopts$getTag(): string;
    }
}
