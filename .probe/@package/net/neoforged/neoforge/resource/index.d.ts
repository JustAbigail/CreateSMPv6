import { $JsonElement } from "@package/com/google/gson";
import { $ContextAwareReloadListenerAccessor as $ContextAwareReloadListenerAccessor$1 } from "@package/net/mehvahdjukaar/moonlight/core/mixins/platform";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ICondition$IContext_, $ConditionalOps, $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $ContextAwareReloadListenerAccessor } from "@package/rbasamoyai/createbigcannons/mixin";
import { $ContextAwareReloadListenerAccessor as $ContextAwareReloadListenerAccessor$2 } from "@package/com/almostreliable/unified/mixin/neoforge";

declare module "@package/net/neoforged/neoforge/resource" {
    /**
     * Reload listeners that descend from this class will have the reload context automatically populated when it is available.
     * 
     * The context is guaranteed to be available for the duration of `PreparableReloadListener#reload`.
     * 
     * For children of `SimplePreparableReloadListener`, it will be available during both `SimplePreparableReloadListener#prepare` prepare()} and apply().
     */
    export class $ContextAwareReloadListener implements $PreparableReloadListener, $ContextAwareReloadListenerAccessor, $ContextAwareReloadListenerAccessor$2, $ContextAwareReloadListenerAccessor$1 {
        injectContext(context: $ICondition$IContext_, registryLookup: $HolderLookup$Provider): void;
        getName(): string;
        callMakeConditionalOps(): $ConditionalOps<$JsonElement>;
        au$makeConditionalOps(): $ConditionalOps<$JsonElement>;
        invokeGetContext(): $ICondition$IContext;
        constructor();
        get name(): string;
    }
}
