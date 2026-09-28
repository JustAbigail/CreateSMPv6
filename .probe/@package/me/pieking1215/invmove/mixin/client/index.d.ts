import { $EditBox } from "@package/net/minecraft/client/gui/components";

declare module "@package/me/pieking1215/invmove/mixin/client" {
    export class $RecipeBookComponentAccessor {
    }
    export interface $RecipeBookComponentAccessor {
        getSearchBox(): $EditBox;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookComponentAccessor}.
     */
    export type $RecipeBookComponentAccessor_ = (() => $EditBox);
}
