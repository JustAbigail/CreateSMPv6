import { $DirectoryEnsurer } from "@package/io/homo/superresolution/core/utils";
import { $Class } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $AbstractAlgorithm, $QualityPreset } from "@package/io/homo/superresolution/api";
import { $Requirement } from "@package/io/homo/superresolution/api/utils";

declare module "@package/io/homo/superresolution/api/registry" {
    export class $AlgorithmDescription$Builder<T extends $AbstractAlgorithm> {
        codeName(arg0: string): $AlgorithmDescription$Builder<T>;
        requirement(arg0: $Requirement): $AlgorithmDescription$Builder<T>;
        briefName(arg0: string): $AlgorithmDescription$Builder<T>;
        supportJitter(arg0: boolean): $AlgorithmDescription$Builder<T>;
        qualityPresets(arg0: $List_<$QualityPreset>): $AlgorithmDescription$Builder<T>;
        customUpscaleRatio(arg0: boolean): $AlgorithmDescription$Builder<T>;
        extraResources(arg0: $ExtraResources): $AlgorithmDescription$Builder<T>;
        displayName(arg0: string): $AlgorithmDescription$Builder<T>;
        build(): $AlgorithmDescription<T>;
    }
    export class $ExtraResources {
        resetCancelState(): void;
        checkAll(arg0: $DirectoryEnsurer): $List<$ExtraResource>;
        isCancelled(): boolean;
        cancelAll(): void;
        getAll(arg0: $List_<$ExtraResource>, arg1: $ExtraResource$ResourceSource$Type, arg2: $DirectoryEnsurer, arg3: $ExtraResources$ResourcesProgressListener, arg4: $ExtraResources$ResourcesFinishListener, arg5: $ExtraResources$ResourcesErrorListener, arg6: boolean): $List<$ExtraResource>;
        getAll(arg0: $ExtraResource$ResourceSource$Type, arg1: $DirectoryEnsurer, arg2: $ExtraResources$ResourcesProgressListener, arg3: $ExtraResources$ResourcesFinishListener, arg4: $ExtraResources$ResourcesErrorListener, arg5: boolean): $List<$ExtraResource>;
        static builder(): $ExtraResources$Builder;
        getResources(): $List<$ExtraResource>;
        constructor(arg0: $List_<$ExtraResource>);
        get cancelled(): boolean;
        get resources(): $List<$ExtraResource>;
    }
    export class $AlgorithmDescription<T extends $AbstractAlgorithm> {
        createNewInstance(): T;
        getRequirement(): $Requirement;
        getExtraResources(): $ExtraResources;
        isCustomUpscaleRatio(): boolean;
        getCodeName(): string;
        getBriefName(): string;
        isSupportJitter(): boolean;
        getQualityPresets(): $List<$QualityPreset>;
        getDisplayName(): string;
        static builder<T extends $AbstractAlgorithm>(arg0: $Class<T>): $AlgorithmDescription$Builder<T>;
        getId(): string;
        extraResources: $ExtraResources;
        displayName: string;
        qualityPresets: $List<$QualityPreset>;
        briefName: string;
        codeName: string;
        requirement: $Requirement;
        customUpscaleRatio: boolean;
        supportJitter: boolean;
        get id(): string;
    }
}
