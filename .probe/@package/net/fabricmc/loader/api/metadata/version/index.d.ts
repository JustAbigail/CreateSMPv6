import { $Predicate } from "@package/java/util/function";
import { $Version } from "@package/net/fabricmc/loader/api";
import { $Collection, $Collection_, $List } from "@package/java/util";

declare module "@package/net/fabricmc/loader/api/metadata/version" {
    export class $VersionInterval {
        static and(a: $VersionInterval, b: $VersionInterval): $VersionInterval;
        static and(a: $Collection_<$VersionInterval>, b: $Collection_<$VersionInterval>): $List<$VersionInterval>;
        static or(a: $Collection_<$VersionInterval>, b: $VersionInterval): $List<$VersionInterval>;
        static not(interval: $VersionInterval): $List<$VersionInterval>;
        static not(intervals: $Collection_<$VersionInterval>): $List<$VersionInterval>;
        static INFINITE: $VersionInterval;
    }
    export interface $VersionInterval {
        and(o: $VersionInterval): $VersionInterval;
        or(o: $Collection_<$VersionInterval>): $List<$VersionInterval>;
        not(): $List<$VersionInterval>;
        getMax(): $Version;
        getMin(): $Version;
        isSemantic(): boolean;
        isMinInclusive(): boolean;
        isMaxInclusive(): boolean;
        get max(): $Version;
        get min(): $Version;
        get semantic(): boolean;
        get minInclusive(): boolean;
        get maxInclusive(): boolean;
    }
    export class $VersionPredicate {
        static parse(predicates: $Collection_<string>): $Collection<$VersionPredicate>;
        static parse(predicate: string): $VersionPredicate;
    }
    export interface $VersionPredicate extends $Predicate<$Version> {
        getTerms(): $Collection<$VersionPredicate$PredicateTerm>;
        getInterval(): $VersionInterval;
        get terms(): $Collection<$VersionPredicate$PredicateTerm>;
        get interval(): $VersionInterval;
    }
}
