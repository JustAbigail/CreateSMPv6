
declare module "@package/org/apache/maven/artifact/handler" {
    export class $ArtifactHandler {
        static ROLE: string;
    }
    export interface $ArtifactHandler {
        isIncludesDependencies(): boolean;
        getPackaging(): string;
        isAddedToClasspath(): boolean;
        getDirectory(): string;
        getExtension(): string;
        getLanguage(): string;
        getClassifier(): string;
    }
}
