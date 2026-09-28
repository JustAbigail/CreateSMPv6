import { $ArtifactRepository } from "@package/org/apache/maven/artifact/repository";
import { $Object } from "@package/java/lang";

declare module "@package/org/apache/maven/repository/legacy/metadata" {
    export class $ArtifactMetadata {
    }
    export interface $ArtifactMetadata {
        getBaseVersion(): string;
        getLocalFilename(arg0: $ArtifactRepository): string;
        storedInArtifactVersionDirectory(): boolean;
        storedInGroupDirectory(): boolean;
        getRemoteFilename(): string;
        storeInLocalRepository(arg0: $ArtifactRepository, arg1: $ArtifactRepository): void;
        extendedToString(): string;
        merge(arg0: $ArtifactMetadata): void;
        getKey(): $Object;
        getGroupId(): string;
        getArtifactId(): string;
    }
}
