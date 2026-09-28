import { $Enum } from "@package/java/lang";

declare module "@package/net/irisshaders/iris/shaderpack/texture" {
    export class $CustomTextureData {
    }
    export class $TextureStage extends $Enum<$TextureStage> {
        static values(): $TextureStage[];
        static valueOf(arg0: string): $TextureStage;
        static parse(arg0: string): ($TextureStage) | undefined;
        static SHADOWCOMP: $TextureStage;
        static PREPARE: $TextureStage;
        static COMPOSITE_AND_FINAL: $TextureStage;
        static GBUFFERS_AND_SHADOW: $TextureStage;
        static BEGIN: $TextureStage;
        static DEFERRED: $TextureStage;
        static SETUP: $TextureStage;
    }
    /**
     * Values that may be interpreted as {@link $TextureStage}.
     */
    export type $TextureStage_ = "setup" | "begin" | "shadowcomp" | "prepare" | "gbuffers_and_shadow" | "deferred" | "composite_and_final";
}
