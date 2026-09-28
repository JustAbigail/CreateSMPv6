import { $Supplier_ } from "@package/java/util/function";
import { $IModInfo } from "@package/net/neoforged/neoforgespi/language";
import { $IEventBus, $EventPriority_, $Event } from "@package/net/neoforged/bus/api";
import { $Path_, $Path } from "@package/java/nio/file";
import { $List, $List_ } from "@package/java/util";
import { $Object, $Throwable, $Enum, $Record, $Class } from "@package/java/lang";
import { $IModFile } from "@package/net/neoforged/neoforgespi/locating";
import { $IConfigSpec, $ModConfig$Type_ } from "@package/net/neoforged/fml/config";
export * as config from "@package/net/neoforged/fml/config";
export * as common from "@package/net/neoforged/fml/common";
export * as event from "@package/net/neoforged/fml/event";

declare module "@package/net/neoforged/fml" {
    export class $IExtensionPoint {
    }
    export interface $IExtensionPoint {
    }
    export class $ModContainer {
        getNamespace(): string;
        registerConfig(arg0: $ModConfig$Type_, arg1: $IConfigSpec): void;
        registerConfig(arg0: $ModConfig$Type_, arg1: $IConfigSpec, arg2: string): void;
        getModId(): string;
        getCustomExtension<T extends $IExtensionPoint>(arg0: $Class<T>): (T) | undefined;
        registerExtensionPoint<T extends $IExtensionPoint>(arg0: $Class<T>, arg1: $Supplier_<T>): void;
        registerExtensionPoint<T extends $IExtensionPoint>(arg0: $Class<T>, arg1: T): void;
        acceptEvent<T extends $Event>(arg0: $EventPriority_, arg1: T): void;
        acceptEvent<T extends $Event>(arg0: T): void;
        getModInfo(): $IModInfo;
        getEventBus(): $IEventBus;
        constructor(arg0: $IModInfo);
    }
    export class $ModLoadingIssue extends $Record {
        severity(): $ModLoadingIssue$Severity;
        static warning(arg0: string, ...arg1: $Object[]): $ModLoadingIssue;
        cause(): $Throwable;
        static error(arg0: string, ...arg1: $Object[]): $ModLoadingIssue;
        affectedPath(): $Path;
        translationKey(): string;
        withCause(arg0: $Throwable): $ModLoadingIssue;
        withAffectedModFile(arg0: $IModFile): $ModLoadingIssue;
        withAffectedMod(arg0: $IModInfo): $ModLoadingIssue;
        withAffectedPath(arg0: $Path_): $ModLoadingIssue;
        withSeverity(arg0: $ModLoadingIssue$Severity): $ModLoadingIssue;
        translationArgs(): $List<$Object>;
        affectedModFile(): $IModFile;
        affectedMod(): $IModInfo;
        constructor(arg0: $ModLoadingIssue$Severity, arg1: string, arg2: $List_<$Object>);
        constructor(severity: $ModLoadingIssue$Severity, translationKey: string, translationArgs: $List_<$Object>, cause: $Throwable, affectedPath: $Path_, affectedModFile: $IModFile, affectedMod: $IModInfo);
    }
    /**
     * Values that may be interpreted as {@link $ModLoadingIssue}.
     */
    export type $ModLoadingIssue_ = { severity?: $ModLoadingIssue$Severity, translationArgs?: $List_<$Object>, translationKey?: string, cause?: $Throwable, affectedMod?: $IModInfo, affectedPath?: $Path_, affectedModFile?: $IModFile,  } | [severity?: $ModLoadingIssue$Severity, translationArgs?: $List_<$Object>, translationKey?: string, cause?: $Throwable, affectedMod?: $IModInfo, affectedPath?: $Path_, affectedModFile?: $IModFile, ];
    export class $LogicalSide extends $Enum<$LogicalSide> {
        static values(): $LogicalSide[];
        static valueOf(arg0: string): $LogicalSide;
        isClient(): boolean;
        isServer(): boolean;
        static SERVER: $LogicalSide;
        static CLIENT: $LogicalSide;
    }
    /**
     * Values that may be interpreted as {@link $LogicalSide}.
     */
    export type $LogicalSide_ = "client" | "server";
}
