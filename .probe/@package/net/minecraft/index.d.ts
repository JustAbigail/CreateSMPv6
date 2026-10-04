import { $LevelHeightAccessor } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Callable } from "@package/java/util/concurrent";
import { $TextColor } from "@package/net/minecraft/network/chat";
import { $KubeColor } from "@package/dev/latvian/mods/kubejs/color";
import { $SystemReportAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $DataVersion } from "@package/net/minecraft/world/level/storage";
import { $List, $Map, $Date, $List_, $Collection } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $PackType_ } from "@package/net/minecraft/server/packs";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $StackTraceElement, $Throwable, $Enum, $Record, $RuntimeException, $StringBuilder, $Object } from "@package/java/lang";
export * as network from "@package/net/minecraft/network";
export * as world from "@package/net/minecraft/world";
export * as server from "@package/net/minecraft/server";
export * as commands from "@package/net/minecraft/commands";
export * as client from "@package/net/minecraft/client";
export * as resources from "@package/net/minecraft/resources";
export * as core from "@package/net/minecraft/core";
export * as util from "@package/net/minecraft/util";
export * as data from "@package/net/minecraft/data";
export * as nbt from "@package/net/minecraft/nbt";
export * as advancements from "@package/net/minecraft/advancements";
export * as stats from "@package/net/minecraft/stats";
export * as sounds from "@package/net/minecraft/sounds";
export * as locale from "@package/net/minecraft/locale";
export * as tags from "@package/net/minecraft/tags";

declare module "@package/net/minecraft" {
    export class $ChatFormatting extends $Enum<$ChatFormatting> implements $StringRepresentable, $KubeColor {
        /**
         * Checks if this is a color code.
         */
        isColor(): boolean;
        /**
         * Returns the numerical color index that represents this formatting
         */
        kjs$getRGB(): number;
        /**
         * Checks if this is a color code.
         */
        isFormat(): boolean;
        static stripFormatting(string: string | null): string;
        /**
         * Get a TextFormatting from its color index
         */
        static getById(index: number): $ChatFormatting;
        static getByCode(formattingCode: string): $ChatFormatting;
        /**
         * Returns the numerical color index that represents this formatting
         */
        kjs$getARGB(): number;
        /**
         * Gets all the valid values.
         */
        static getNames(getColor: boolean, getFancyStyling: boolean): $Collection<any>;
        /**
         * Gets the friendly name of this value.
         */
        getName(): string;
        static values(): $ChatFormatting[];
        getChar(): string;
        /**
         * Gets a value by its friendly name null if the given name does not map to a defined value.
         */
        static valueOf(friendlyName: string): $ChatFormatting;
        /**
         * Returns the numerical color index that represents this formatting
         */
        getId(): number;
        /**
         * Gets a value by its friendly name null if the given name does not map to a defined value.
         */
        static getByName(friendlyName: string | null): $ChatFormatting;
        getColor(): number;
        /**
         * Gets the friendly name of this value.
         */
        getSerializedName(): string;
        /**
         * Gets the friendly name of this value.
         */
        getRemappedEnumConstantName(): string;
        /**
         * Returns the numerical color index that represents this formatting
         */
        getFireworkRGB(): number;
        /**
         * Gets the friendly name of this value.
         */
        toHexString(): string;
        /**
         * Gets the friendly name of this value.
         */
        serialize(): string;
        createTextColor(): $TextColor;
        specialEquals(o: $Object, shallow: boolean): boolean;
        static ITALIC: $ChatFormatting;
        static GOLD: $ChatFormatting;
        static GRAY: $ChatFormatting;
        static AQUA: $ChatFormatting;
        static WHITE: $ChatFormatting;
        static CODEC: $Codec<$ChatFormatting>;
        static BLUE: $ChatFormatting;
        static OBFUSCATED: $ChatFormatting;
        static DARK_AQUA: $ChatFormatting;
        static RESET: $ChatFormatting;
        static DARK_BLUE: $ChatFormatting;
        static GREEN: $ChatFormatting;
        static UNDERLINE: $ChatFormatting;
        static RED: $ChatFormatting;
        static PREFIX_CODE: string;
        static DARK_PURPLE: $ChatFormatting;
        static STRIKETHROUGH: $ChatFormatting;
        static DARK_RED: $ChatFormatting;
        static LIGHT_PURPLE: $ChatFormatting;
        static BLACK: $ChatFormatting;
        static BOLD: $ChatFormatting;
        static DARK_GREEN: $ChatFormatting;
        static YELLOW: $ChatFormatting;
        static DARK_GRAY: $ChatFormatting;
        get format(): boolean;
        get char(): string;
        get id(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
        get fireworkRGB(): number;
    }
    /**
     * Values that may be interpreted as {@link $ChatFormatting}.
     */
    export type $ChatFormatting_ = "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "obfuscated" | "bold" | "strikethrough" | "underline" | "italic" | "reset";
    export class $CrashReportDetail<V> {
    }
    export interface $CrashReportDetail<V> extends $Callable<V> {
    }
    /**
     * Values that may be interpreted as {@link $CrashReportDetail}.
     */
    export type $CrashReportDetail_<V> = (() => void);
    export class $CrashReportCategory {
        static populateBlockDetails(category: $CrashReportCategory, levelHeightAccessor: $LevelHeightAccessor, pos: $BlockPos_, state: $BlockState_ | null): void;
        getDetails(builder: $StringBuilder): void;
        getStacktrace(): $StackTraceElement[];
        /**
         * Do the deepest two elements of our saved stack trace match the given elements, in order from the deepest?
         */
        validateStackTrace(s1: $StackTraceElement, s2: $StackTraceElement): boolean;
        /**
         * Removes the given number entries from the bottom of the stack trace.
         */
        trimStacktrace(amount: number): void;
        /**
         * @deprecated
         */
        applyStackTrace(arg0: $Throwable): void;
        /**
         * Resets our stack trace according to the current trace, pruning the deepest 3 entries.  The parameter indicates how many additional deepest entries to prune.  Returns the number of entries in the resulting pruned stack trace.
         */
        fillInStackTrace(size: number): number;
        setStackTrace(arg0: $StackTraceElement[]): void;
        /**
         * Adds a Crashreport section with the given name with the given value (converted `.toString()`)
         */
        setDetail(sectionName: string, value: $Object): $CrashReportCategory;
        /**
         * Adds a section to this crash report category, resolved by calling the given callable.
         * 
         * If the given callable throws an exception, a detail containing that exception will be created instead.
         */
        setDetail(name: string, detail: $CrashReportDetail_<string>): $CrashReportCategory;
        static formatLocation(levelHeightAccess: $LevelHeightAccessor, x: number, arg2: number, y: number): string;
        static formatLocation(levelHeightAccess: $LevelHeightAccessor, x: number, y: number, z: number): string;
        static formatLocation(levelHeightAccess: $LevelHeightAccessor, pos: $BlockPos_): string;
        /**
         * Adds a Crashreport section with the given name with the given Throwable
         */
        setDetailError(sectionName: string, throwable: $Throwable): void;
        constructor(title: string);
        get stacktrace(): $StackTraceElement[];
        set stackTrace(value: $StackTraceElement[]);
    }
    export class $SystemReport implements $SystemReportAccessor {
        static sizeInMiB(bytes: number): number;
        appendToCrashReportString(reportAppender: $StringBuilder): void;
        static getOPERATING_SYSTEM$create_$md$3675d4$2(): string;
        static getJAVA_VERSION$create_$md$3675d4$3(): string;
        setDetail(identifier: string, value: string): void;
        setDetail(property: string, valueSupplier: $Supplier_<string>): void;
        toLineSeparatedString(): string;
        getEntries(): $Map<string, string>;
        static BYTES_PER_MEBIBYTE: number;
        constructor();
        static get OPERATING_SYSTEM$create_$md$3675d4$2(): string;
        static get JAVA_VERSION$create_$md$3675d4$3(): string;
        get entries(): $Map<string, string>;
    }
    export class $BlockUtil$FoundRectangle {
        axis1Size: number;
        minCorner: $BlockPos;
        axis2Size: number;
        constructor(minCorner: $BlockPos_, axis1Size: number, axis2Size: number);
    }
    export class $WorldVersion {
    }
    export interface $WorldVersion {
        getProtocolVersion(): number;
        getName(): string;
        getId(): string;
        isStable(): boolean;
        getDataVersion(): $DataVersion;
        getPackVersion(packType: $PackType_): number;
        getBuildTime(): $Date;
        get protocolVersion(): number;
        get name(): string;
        get id(): string;
        get stable(): boolean;
        get dataVersion(): $DataVersion;
        get buildTime(): $Date;
    }
    export class $CrashReport {
        /**
         * Gets the stack trace of the Throwable that caused this crash report, or if that fails, the cause `.toString()`.
         */
        getDetails(): string;
        /**
         * Gets the various sections of the crash report into the given StringBuilder
         */
        getDetails(builder: $StringBuilder): void;
        /**
         * Gets the stack trace of the Throwable that caused this crash report, or if that fails, the cause `.toString()`.
         */
        getExceptionMessage(): string;
        saveToFile(path: $Path_, type: $ReportType_): boolean;
        saveToFile(path: $Path_, type: $ReportType_, links: $List_<string>): boolean;
        /**
         * Returns the Throwable object that is the cause for the crash and Crash Report.
         */
        getException(): $Throwable;
        /**
         * Gets the stack trace of the Throwable that caused this crash report, or if that fails, the cause `.toString()`.
         */
        getTitle(): string;
        static preload(): void;
        /**
         * Creates a crash report for the exception
         */
        static forThrowable(cause: $Throwable, description: string): $CrashReport;
        /**
         * Creates a CrashReportCategory
         */
        addCategory(name: string): $CrashReportCategory;
        /**
         * Creates a CrashReportCategory for the given stack trace depth
         */
        addCategory(categoryName: string, stacktraceLength: number): $CrashReportCategory;
        getSystemReport(): $SystemReport;
        getFriendlyReport(type: $ReportType_): string;
        getFriendlyReport(type: $ReportType_, links: $List_<string>): string;
        getSaveFile(): $Path;
        constructor(title: string, exception: $Throwable);
        get exceptionMessage(): string;
        get exception(): $Throwable;
        get title(): string;
        get systemReport(): $SystemReport;
        get saveFile(): $Path;
    }
    export class $ReportedException extends $RuntimeException {
        /**
         * Gets the CrashReport wrapped by this exception.
         */
        getReport(): $CrashReport;
        constructor(report: $CrashReport);
        get report(): $CrashReport;
    }
    export class $ReportType extends $Record {
        appendHeader(builder: $StringBuilder, links: $List_<string>): void;
        getErrorComment(): string;
        header(): string;
        nuggets(): $List<string>;
        static CRASH: $ReportType;
        static PROFILE: $ReportType;
        static TEST: $ReportType;
        static CHUNK_IO_ERROR: $ReportType;
        static NETWORK_PROTOCOL_ERROR: $ReportType;
        constructor(header: string, nuggets: $List_<string>);
        get errorComment(): string;
    }
    /**
     * Values that may be interpreted as {@link $ReportType}.
     */
    export type $ReportType_ = { nuggets?: $List_<string>, header?: string,  } | [nuggets?: $List_<string>, header?: string, ];
}
