import { $Attributes } from "@package/java/util/jar";
import { $Path_, $Path } from "@package/java/nio/file";
import { $CodeSigner } from "@package/java/security";
import { $Enum } from "@package/java/lang";

declare module "@package/cpw/mods/jarhandling" {
    export class $SecureJar {
        static from(arg0: $JarContents, arg1: $JarMetadata): $SecureJar;
        static from(arg0: $JarContents): $SecureJar;
        static from(...arg0: $Path_[]): $SecureJar;
    }
    export interface $SecureJar {
        name(): string;
        close(): void;
        getPath(arg0: string, ...arg1: string[]): $Path;
        moduleDataProvider(): $SecureJar$ModuleDataProvider;
        getPrimaryPath(): $Path;
        getFileStatus(arg0: string): $SecureJar$Status;
        hasSecurityData(): boolean;
        getManifestSigners(): $CodeSigner[];
        verifyPath(arg0: $Path_): $SecureJar$Status;
        getTrustedManifestEntries(arg0: string): $Attributes;
        getRootPath(): $Path;
        get primaryPath(): $Path;
        get manifestSigners(): $CodeSigner[];
        get rootPath(): $Path;
    }
    export class $SecureJar$Status extends $Enum<$SecureJar$Status> {
        static values(): $SecureJar$Status[];
        static valueOf(arg0: string): $SecureJar$Status;
        static UNVERIFIED: $SecureJar$Status;
        static NONE: $SecureJar$Status;
        static INVALID: $SecureJar$Status;
        static VERIFIED: $SecureJar$Status;
    }
    /**
     * Values that may be interpreted as {@link $SecureJar$Status}.
     */
    export type $SecureJar$Status_ = "none" | "invalid" | "unverified" | "verified";
}
