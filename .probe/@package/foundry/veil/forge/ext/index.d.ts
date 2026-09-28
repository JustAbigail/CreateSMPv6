import { $RenderSection, $TaskQueueType, $TaskQueueType_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $SortedRenderLists } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
import { $ArrayDeque, $Map_, $Map } from "@package/java/util";

declare module "@package/foundry/veil/forge/ext" {
    export class $SodiumWorldRendererExtension {
    }
    export interface $SodiumWorldRendererExtension {
        veil$getSortedRenderLists(): $SortedRenderLists;
        veil$setSortedRenderLists(arg0: $SortedRenderLists): void;
        veil$getTaskLists(): $Map<$TaskQueueType, $ArrayDeque<$RenderSection>>;
        veil$setTaskLists(arg0: $Map_<$TaskQueueType_, $ArrayDeque<$RenderSection>>): void;
    }
    export class $RenderSectionExtension {
    }
    export interface $RenderSectionExtension {
        veil$hasNotRendered(): boolean;
        veil$markRendered(): void;
        veil$addIncomingDirections(arg0: number): void;
    }
}
