import { $Collection } from "@package/java/util";
import { $PrettyPrinter } from "@package/org/spongepowered/asm/util";

declare module "@package/org/spongepowered/asm/util/perf" {
    export class $Profiler {
        reset(): void;
        get(arg0: string): $Profiler$Section;
        begin(arg0: number, ...arg1: string[]): $Profiler$Section;
        begin(arg0: number, arg1: string): $Profiler$Section;
        begin(...arg0: string[]): $Profiler$Section;
        begin(arg0: string): $Profiler$Section;
        mark(arg0: string): void;
        printer(arg0: boolean, arg1: boolean): $PrettyPrinter;
        static getProfiler(arg0: string): $Profiler;
        static setActive(arg0: boolean): void;
        static getProfilers(): $Collection<$Profiler>;
        getSections(): $Collection<$Profiler$Section>;
        static printAuditSummary(): void;
        printSummary(): void;
        static ROOT: number;
        static FINE: number;
        constructor(arg0: string);
    }
    export class $Profiler$Section {
        getTotalSeconds(): number;
        getInfo(): string;
        isRoot(): boolean;
        getSeconds(): number;
        getName(): string;
        end(): $Profiler$Section;
        next(arg0: string): $Profiler$Section;
        getCount(): number;
        getTime(): number;
        getAverageTime(): number;
        setInfo(arg0: string): void;
        getBaseName(): string;
        getTimes(): number[];
        getTotalAverageTime(): number;
        getTotalCount(): number;
        getTotalTime(): number;
        isFine(): boolean;
    }
}
