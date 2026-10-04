import { $MeshDefinition } from "@package/net/minecraft/client/model/geom/builders";

declare module "@package/org/betterx/betternether/mixin/client" {
    export class $TexturedModelDataMixin {
    }
    export interface $TexturedModelDataMixin {
        getMesh(): $MeshDefinition;
        get mesh(): $MeshDefinition;
    }
    /**
     * Values that may be interpreted as {@link $TexturedModelDataMixin}.
     */
    export type $TexturedModelDataMixin_ = (() => $MeshDefinition);
}
