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
    export type $ForgeFeature$Bound_ = { featureName?: string, featureBound?: string, modInfo?: $IModInfo,  } | [featureName?: string, featureBound?: string, modInfo?: $IModInfo, ];
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
        getModInfos(): $List<$IModInfo>;
        getSecureJar(): $SecureJar;
        setSecurityStatus(arg0: $SecureJar$Status_): void;
        getSubstitutionMap(): $Supplier<$Map<string, $Object>>;
        getModFileInfo(): $IModFileInfo;
        getScanResult(): $ModFileScanData;
        getDiscoveryAttributes(): $ModFileDiscoveryAttributes;
        get type(): $IModFile$Type;
        get fileName(): string;
        get filePath(): $Path;
        get modInfos(): $List<$IModInfo>;
        get secureJar(): $SecureJar;
        set securityStatus(value: $SecureJar$Status_);
        get substitutionMap(): $Supplier<$Map<string, $Object>>;
        get modFileInfo(): $IModFileInfo;
        get scanResult(): $ModFileScanData;
        get discoveryAttributes(): $ModFileDiscoveryAttributes;
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
    export type $ModFileDiscoveryAttributes_ = { locator?: $IModFileCandidateLocator, reader?: $IModFileReader, dependencyLocator?: $IDependencyLocator, parent?: $IModFile,  } | [locator?: $IModFileCandidateLocator, reader?: $IModFileReader, dependencyLocator?: $IDependencyLocator, parent?: $IModFile, ];
}
