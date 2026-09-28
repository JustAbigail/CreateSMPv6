import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Predicate, $Predicate_, $Function_, $BiConsumer, $BiConsumer_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $UUID_, $List, $List_ } from "@package/java/util";
import { $AABB_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $MinMaxBounds$Doubles_ } from "@package/net/minecraft/advancements/critereon";

declare module "@package/net/minecraft/commands/arguments/selector" {
    export class $EntitySelector {
        usesSelector(): boolean;
        isWorldLimited(): boolean;
        static joinNames(names: $List_<$Entity>): $Component;
        includesEntities(): boolean;
        findSingleEntity(source: $CommandSourceStack): $Entity;
        findEntities(source: $CommandSourceStack): $List<$Entity>;
        findPlayers(source: $CommandSourceStack): $List<$ServerPlayer>;
        findSinglePlayer(source: $CommandSourceStack): $ServerPlayer;
        getMaxResults(): number;
        isSelfSelector(): boolean;
        static ORDER_ARBITRARY: $BiConsumer<$Vec3, $List<$Entity>>;
        contextFreePredicates: $List<$Predicate<$Entity>>;
        static INFINITE: number;
        constructor(maxResults: number, includesEntities: boolean, worldLimited: boolean, contextFreePredicates: $List_<$Predicate_<$Entity>>, range: $MinMaxBounds$Doubles_, position: $Function_<$Vec3, $Vec3>, aabb: $AABB_ | null, order: $BiConsumer_<$Vec3, $List<$Entity>>, currentEntity: boolean, playerName: string | null, entityUUID: $UUID_ | null, type: $EntityType_<never> | null, usesSelector: boolean);
    }
}
