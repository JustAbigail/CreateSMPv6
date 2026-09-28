import { $PlayerPose } from "@package/gg/essential/model/backend";

declare module "@package/gg/essential/mixins/impl/client/model" {
    export class $ModelBipedExt {
    }
    export interface $ModelBipedExt {
        getResetPose(): $PlayerPose;
        setResetPose(arg0: $PlayerPose): void;
    }
}
