import { $EntityModel } from "@package/net/minecraft/client/model";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $List } from "@package/java/util";

declare module "@package/dev/kikugie/elytratrims/mixin/client" {
    export class $LivingEntityRendererAccessor {
    }
    export interface $LivingEntityRendererAccessor {
        invokeSetupRotations(arg0: $LivingEntity, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getLayers<T extends $LivingEntity, M extends $EntityModel<T>>(): $List<$RenderLayer<T, M>>;
        get layers(): $List<$RenderLayer<T, M>>;
    }
}
