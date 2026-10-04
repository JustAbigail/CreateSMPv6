import { $InputStream, $File_, $Closeable } from "@package/java/io";
import { $LocalDateTime } from "@package/java/time";
import { $Stream } from "@package/java/util/stream";
import { $FileTime } from "@package/java/nio/file/attribute";
import { $Charset } from "@package/java/nio/charset";
import { $Enumeration } from "@package/java/util";
import { $Object, $Cloneable } from "@package/java/lang";

declare module "@package/java/util/zip" {
    export class $ZipConstants {
    }
    export interface $ZipConstants {
    }
    export class $ZipFile implements $ZipConstants, $Closeable {
        getEntry(arg0: string): $ZipEntry;
        getName(): string;
        size(): number;
        stream(): $Stream<$ZipEntry>;
        close(): void;
        entries(): $Enumeration<$ZipEntry>;
        getInputStream(arg0: $ZipEntry): $InputStream;
        getComment(): string;
        static OPEN_DELETE: number;
        static OPEN_READ: number;
        constructor(arg0: string);
        constructor(arg0: $File_, arg1: $Charset);
        constructor(arg0: string, arg1: $Charset);
        constructor(arg0: $File_, arg1: number);
        constructor(arg0: $File_);
        constructor(arg0: $File_, arg1: number, arg2: $Charset);
        get name(): string;
        get comment(): string;
    }
    export class $ZipEntry implements $ZipConstants, $Cloneable {
        getLastModifiedTime(): $FileTime;
        setLastModifiedTime(arg0: $FileTime): $ZipEntry;
        setTime(arg0: number): void;
        setTimeLocal(arg0: $LocalDateTime): void;
        getTimeLocal(): $LocalDateTime;
        setLastAccessTime(arg0: $FileTime): $ZipEntry;
        getLastAccessTime(): $FileTime;
        setCreationTime(arg0: $FileTime): $ZipEntry;
        getCreationTime(): $FileTime;
        setSize(arg0: number): void;
        getCompressedSize(): number;
        setCompressedSize(arg0: number): void;
        setCrc(arg0: number): void;
        getCrc(): number;
        setMethod(arg0: number): void;
        setExtra(arg0: number[]): void;
        getExtra(): number[];
        setComment(arg0: string): void;
        getName(): string;
        clone(): $Object;
        getMethod(): number;
        getSize(): number;
        isDirectory(): boolean;
        getTime(): number;
        getComment(): string;
        static STORED: number;
        static DEFLATED: number;
        constructor(arg0: $ZipEntry);
        constructor(arg0: string);
        get name(): string;
        get directory(): boolean;
    }
}
