import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Entity } from "@package/net/minecraft/world/entity";

declare module "@package/tschipp/carryon/events" {
    export class $EntityPickupEvent extends $Event implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        player: $ServerPlayer;
        target: $Entity;
        constructor(arg0: $ServerPlayer, arg1: $Entity);
    }
}
