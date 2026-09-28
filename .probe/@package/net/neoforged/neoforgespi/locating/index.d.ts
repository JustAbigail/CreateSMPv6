import { $Supplier } from "@package/java/util/function";
import { $ModFileScanData, $IModFileInfo, $IModInfo } from "@package/net/neoforged/neoforgespi/language";
import { $Path } from "@package/java/nio/file";
import { $List, $Map } from "@package/java/util";
import { $SecureJar, $SecureJar$Status_ } from "@package/cpw/mods/jarhandling";
import { $Object, $Enum, $Record } from "@package/java/lang";

declare module "@package/net/neoforged/neoforgespi/locating" {
    export class $IModFile$Type extends $Enum<$IModFile$Type> {
        static values(): $IModFile$Type[];
        static valueOf(arg0: string): $IModFile$Type;
        static MOD: $IModFile$Type;
        static GAMELIBRARY: $IModFile$Type;
        static LIBRARY: $IModFile$Type;
    }
    /**
     * Values that may be interpreted as {@link $IModFile$Type}.
     */
    export type $IModFile$Type_ = "mod" | "library" | "gamelibrary";
    export class $ForgeFeature$Bound extends $Record {
        bound<T>(): T;
        featureName(): string;
        modInfo(): $IModInfo;
        featureBound(): string;
        constructor(featureName: string, featureBound: string, modInfo: $IModInfo);
    }
    /**
     * Values that may be interpreted as {@link $ForgeFeature$Bound}.
     */
    export type $ForgeFeature$Bound_ = { featureBound?: string, featureName?: string, modInfo?: $IModInfo,  } | [featureBound?: string, featureName?: string, modInfo?: $IModInfo, ];
    export class $ModFileInfoParser {
    }
    export interface $ModFileInfoParser {
        build(arg0: $IModFile): $IModFileInfo;
    }
    /**
     * Values that may be interpreted as {@link $ModFileInfoParser}.
     */
    export type $ModFileInfoParser_ = ((arg0: $IModFile) => $IModFileInfo);
    export class $IModFile {
        static create(arg0: $SecureJar, arg1: $ModFileInfoParser_): $IModFile;
        static create(arg0: $SecureJar, arg1: $ModFileInfoParser_, arg2: $IModFile$Type_, arg3: $ModFileDiscoveryAttributes_): $IModFile;
        static create(arg0: $SecureJar, arg1: $ModFileInfoParser_, arg2: $ModFileDiscoveryAttributes_): $IModFile;
    }
    export interface $IModFile {
        findResource(...arg0: string[]): $Path;
        getType(): $IModFile$Type;
        getFileName(): string;
        getFilePath(): $Path;
        getSecureJar(): $SecureJar;
        setSecurityStatus(arg0: $SecureJar$Status_): void;
        getSubstitutionMap(): $Supplier<$Map<string, $Object>>;
        getScanResult(): $ModFileScanData;
        getModInfos(): $List<$IModInfo>;
        getModFileInfo(): $IModFileInfo;
        getDiscoveryAttributes(): $ModFileDiscoveryAttributes;
    }
    export class $ModFileDiscoveryAttributes extends $Record {
        locator(): $IModFileCandidateLocator;
        parent(): $IModFile;
        merge(arg0: $ModFileDiscoveryAttributes_): $ModFileDiscoveryAttributes;
        reader(): $IModFileReader;
        withLocator(arg0: $IModFileCandidateLocator): $ModFileDiscoveryAttributes;
        withDependencyLocator(arg0: $IDependencyLocator): $ModFileDiscoveryAttributes;
        withReader(arg0: $IModFileReader): $ModFileDiscoveryAttributes;
        withParent(arg0: $IModFile): $ModFileDiscoveryAttributes;
        dependencyLocator(): $IDependencyLocator;
        static DEFAULT: $ModFileDiscoveryAttributes;
        constructor(parent: $IModFile, reader: $IModFileReader, locator: $IModFileCandidateLocator, dependencyLocator: $IDependencyLocator);
    }
    /**
     * Values that may be interpreted as {@link $ModFileDiscoveryAttributes}.
     */
    export type $ModFileDiscoveryAttributes_ = { locator?: $IModFileCandidateLocator, parent?: $IModFile, dependencyLocator?: $IDependencyLocator, reader?: $IModFileReader,  } | [locator?: $IModFileCandidateLocator, parent?: $IModFile, dependencyLocator?: $IDependencyLocator, reader?: $IModFileReader, ];
}
