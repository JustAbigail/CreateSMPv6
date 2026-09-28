import { $Instant, $Duration, $Duration_ } from "@package/java/time";
import { $Reader, $InputStream, $Closeable } from "@package/java/io";
import { $Annotation } from "@package/java/lang/annotation";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Event as $Event$1 } from "@package/jdk/internal/event";
import { $Enum, $Object, $Class } from "@package/java/lang";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
export * as consumer from "@package/jdk/jfr/consumer";

declare module "@package/jdk/jfr" {
    export class $Event extends $Event$1 {
    }
    export class $RecordingState extends $Enum<$RecordingState> {
        static values(): $RecordingState[];
        static valueOf(arg0: string): $RecordingState;
        static NEW: $RecordingState;
        static DELAYED: $RecordingState;
        static CLOSED: $RecordingState;
        static RUNNING: $RecordingState;
        static STOPPED: $RecordingState;
    }
    /**
     * Values that may be interpreted as {@link $RecordingState}.
     */
    export type $RecordingState_ = "new" | "delayed" | "running" | "stopped" | "closed";
    export class $Configuration {
        getSettings(): $Map<string, string>;
        getLabel(): string;
        getDescription(): string;
        static getConfigurations(): $List<$Configuration>;
        getContents(): string;
        getProvider(): string;
        getName(): string;
        static create(arg0: $Path_): $Configuration;
        static create(arg0: $Reader): $Configuration;
        static getConfiguration(arg0: string): $Configuration;
    }
    export class $AnnotationElement {
        getTypeId(): number;
        getValues(): $List<$Object>;
        getAnnotationElements(): $List<$AnnotationElement>;
        getValueDescriptors(): $List<$ValueDescriptor>;
        hasValue(arg0: string): boolean;
        getValue(arg0: string): $Object;
        getTypeName(): string;
        getAnnotation<A>(arg0: $Class<$Annotation>): A;
        constructor(arg0: $Class<$Annotation>, arg1: $Map_<string, $Object>);
        constructor(arg0: $Class<$Annotation>);
        constructor(arg0: $Class<$Annotation>, arg1: $Object);
    }
    export class $ValueDescriptor {
        getTypeId(): number;
        getContentType(): string;
        getLabel(): string;
        getDescription(): string;
        getAnnotationElements(): $List<$AnnotationElement>;
        getName(): string;
        isArray(): boolean;
        getTypeName(): string;
        getFields(): $List<$ValueDescriptor>;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        constructor(arg0: $Class<never>, arg1: string);
        constructor(arg0: $Class<never>, arg1: string, arg2: $List_<$AnnotationElement>);
    }
    export class $EventType {
        static getEventType(arg0: $Class<$Event>): $EventType;
        getCategoryNames(): $List<string>;
        getSettingDescriptors(): $List<$SettingDescriptor>;
        getLabel(): string;
        getDescription(): string;
        getAnnotationElements(): $List<$AnnotationElement>;
        getName(): string;
        isEnabled(): boolean;
        getFields(): $List<$ValueDescriptor>;
        getField(arg0: string): $ValueDescriptor;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getId(): number;
    }
    export class $Recording implements $Closeable {
        getStopTime(): $Instant;
        setToDisk(arg0: boolean): void;
        setSettings(arg0: $Map_<string, string>): void;
        setMaxAge(arg0: $Duration_): void;
        setMaxSize(arg0: number): void;
        setDuration(arg0: $Duration_): void;
        setDumpOnExit(arg0: boolean): void;
        scheduleStart(arg0: $Duration_): void;
        isToDisk(): boolean;
        getSettings(): $Map<string, string>;
        getStream(arg0: $Instant, arg1: $Instant): $InputStream;
        getDumpOnExit(): boolean;
        getMaxSize(): number;
        getMaxAge(): $Duration;
        getDuration(): $Duration;
        getDestination(): $Path;
        getName(): string;
        start(): void;
        stop(): boolean;
        setName(arg0: string): void;
        getId(): number;
        getState(): $RecordingState;
        close(): void;
        copy(arg0: boolean): $Recording;
        dump(arg0: $Path_): void;
        getSize(): number;
        enable(arg0: $Class<$Event>): $EventSettings;
        enable(arg0: string): $EventSettings;
        disable(arg0: $Class<$Event>): $EventSettings;
        disable(arg0: string): $EventSettings;
        getStartTime(): $Instant;
        setDestination(arg0: $Path_): void;
        constructor(arg0: $Configuration);
        constructor();
        constructor(arg0: $Map_<string, string>);
    }
    export class $SettingDescriptor {
        getTypeId(): number;
        getContentType(): string;
        getLabel(): string;
        getDescription(): string;
        getAnnotationElements(): $List<$AnnotationElement>;
        getName(): string;
        getTypeName(): string;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getDefaultValue(): string;
    }
    export class $EventSettings {
        withStackTrace(): $EventSettings;
        withoutStackTrace(): $EventSettings;
        withoutThreshold(): $EventSettings;
        withPeriod(arg0: $Duration_): $EventSettings;
        withThreshold(arg0: $Duration_): $EventSettings;
        "with"(arg0: string, arg1: string): $EventSettings;
    }
}
