import { $List_, $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $Artifact } from "@package/org/apache/maven/artifact";

declare module "@package/org/apache/maven/artifact/versioning" {
    export class $ArtifactVersion {
    }
    export interface $ArtifactVersion extends $Comparable<$ArtifactVersion> {
        getMajorVersion(): number;
        getMinorVersion(): number;
        getIncrementalVersion(): number;
        getBuildNumber(): number;
        getQualifier(): string;
        parseVersion(arg0: string): void;
    }
    export class $VersionRange {
        containsVersion(arg0: $ArtifactVersion): boolean;
        static createFromVersionSpec(arg0: string): $VersionRange;
        getRecommendedVersion(): $ArtifactVersion;
        getRestrictions(): $List<$Restriction>;
        /**
         * @deprecated
         */
        cloneOf(): $VersionRange;
        static createFromVersion(arg0: string): $VersionRange;
        restrict(arg0: $VersionRange): $VersionRange;
        getSelectedVersion(arg0: $Artifact): $ArtifactVersion;
        isSelectedVersionKnown(arg0: $Artifact): boolean;
        matchVersion(arg0: $List_<$ArtifactVersion>): $ArtifactVersion;
        hasRestrictions(): boolean;
    }
    export class $Restriction {
        containsVersion(arg0: $ArtifactVersion): boolean;
        getLowerBound(): $ArtifactVersion;
        getUpperBound(): $ArtifactVersion;
        isLowerBoundInclusive(): boolean;
        isUpperBoundInclusive(): boolean;
        static EVERYTHING: $Restriction;
        constructor(arg0: $ArtifactVersion, arg1: boolean, arg2: $ArtifactVersion, arg3: boolean);
    }
}
