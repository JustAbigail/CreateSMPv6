import { $Duration, $Instant } from "@package/java/time";
import { $ValueDescriptor, $EventType } from "@package/jdk/jfr";
import { $List } from "@package/java/util";

declare module "@package/jdk/jfr/consumer" {
    export class $RecordedClassLoader extends $RecordedObject {
        getName(): string;
        getId(): number;
        getType(): $RecordedClass;
    }
    export class $RecordedMethod extends $RecordedObject {
        getName(): string;
        getModifiers(): number;
        isHidden(): boolean;
        getDescriptor(): string;
        getType(): $RecordedClass;
    }
    export class $RecordedFrame extends $RecordedObject {
        isJavaFrame(): boolean;
        getBytecodeIndex(): number;
        getMethod(): $RecordedMethod;
        getType(): string;
        getLineNumber(): number;
    }
    export class $RecordedClass extends $RecordedObject {
        getName(): string;
        getModifiers(): number;
        getClassLoader(): $RecordedClassLoader;
        getId(): number;
    }
    export class $RecordedStackTrace extends $RecordedObject {
        isTruncated(): boolean;
        getFrames(): $List<$RecordedFrame>;
    }
    export class $RecordedObject {
        getThread(arg0: string): $RecordedThread;
        hasField(arg0: string): boolean;
        getInstant(arg0: string): $Instant;
        getDuration(arg0: string): $Duration;
        getString(arg0: string): string;
        getClass(arg0: string): $RecordedClass;
        getBoolean(arg0: string): boolean;
        getByte(arg0: string): number;
        getShort(arg0: string): number;
        getChar(arg0: string): string;
        getInt(arg0: string): number;
        getLong(arg0: string): number;
        getFloat(arg0: string): number;
        getDouble(arg0: string): number;
        getValue<T>(arg0: string): T;
        getFields(): $List<$ValueDescriptor>;
    }
    export class $RecordedThreadGroup extends $RecordedObject {
        getName(): string;
        getParent(): $RecordedThreadGroup;
    }
    export class $RecordedThread extends $RecordedObject {
        getJavaName(): string;
        getOSName(): string;
        getOSThreadId(): number;
        getJavaThreadId(): number;
        isVirtual(): boolean;
        getThreadGroup(): $RecordedThreadGroup;
        getId(): number;
    }
    export class $RecordedEvent extends $RecordedObject {
        getThread(): $RecordedThread;
        getEventType(): $EventType;
        getEndTime(): $Instant;
        getDuration(): $Duration;
        getStackTrace(): $RecordedStackTrace;
        getStartTime(): $Instant;
    }
}
