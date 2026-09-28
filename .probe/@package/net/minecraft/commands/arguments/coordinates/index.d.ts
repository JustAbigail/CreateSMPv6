import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ColumnPos, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $Direction$Axis } from "@package/net/minecraft/core";
import { $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $EnumSet, $Collection } from "@package/java/util";
import { $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";

declare module "@package/net/minecraft/commands/arguments/coordinates" {
    export class $RotationArgument implements $ArgumentType<$Coordinates> {
        getExamples(): $Collection<string>;
        parse(reader: $StringReader): $Coordinates;
        static getRotation(context: $CommandContext<$CommandSourceStack>, name: string): $Coordinates;
        static rotation(): $RotationArgument;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $Coordinates;
        static ERROR_NOT_COMPLETE: $SimpleCommandExceptionType;
        constructor();
    }
    export class $BlockPosArgument implements $ArgumentType<$Coordinates> {
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getLoadedBlockPos(context: $CommandContext<$CommandSourceStack>, level: $ServerLevel, name: string): $BlockPos;
        static getLoadedBlockPos(context: $CommandContext<$CommandSourceStack>, name: string): $BlockPos;
        static getSpawnablePos(context: $CommandContext<$CommandSourceStack>, name: string): $BlockPos;
        static getBlockPos(context: $CommandContext<$CommandSourceStack>, name: string): $BlockPos;
        static blockPos(): $BlockPosArgument;
        parse<S>(arg0: $StringReader, arg1: S): $Coordinates;
        parse(arg0: $StringReader): $Coordinates;
        static ERROR_OUT_OF_WORLD: $SimpleCommandExceptionType;
        static ERROR_OUT_OF_BOUNDS: $SimpleCommandExceptionType;
        static ERROR_NOT_LOADED: $SimpleCommandExceptionType;
        constructor();
    }
    export class $SwizzleArgument implements $ArgumentType<$EnumSet<$Direction$Axis>> {
        getExamples(): $Collection<string>;
        static swizzle(): $SwizzleArgument;
        static getSwizzle(context: $CommandContext<$CommandSourceStack>, name: string): $EnumSet<$Direction$Axis>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $EnumSet<$Direction$Axis>;
        parse(arg0: $StringReader): $EnumSet<$Direction$Axis>;
        constructor();
    }
    export class $LocalCoordinates implements $Coordinates {
        isXRelative(): boolean;
        isYRelative(): boolean;
        isZRelative(): boolean;
        getPosition(source: $CommandSourceStack): $Vec3;
        static parse(reader: $StringReader): $LocalCoordinates;
        getRotation(source: $CommandSourceStack): $Vec2;
        getBlockPos(arg0: $CommandSourceStack): $BlockPos;
        static PREFIX_LOCAL_COORDINATE: string;
        constructor(left: number, arg1: number, up: number);
    }
    export class $WorldCoordinate {
        get(coord: number): number;
        static parseInt(reader: $StringReader): $WorldCoordinate;
        isRelative(): boolean;
        static isRelative(reader: $StringReader): boolean;
        static parseDouble(reader: $StringReader, centerCorrect: boolean): $WorldCoordinate;
        static ERROR_EXPECTED_INT: $SimpleCommandExceptionType;
        static ERROR_EXPECTED_DOUBLE: $SimpleCommandExceptionType;
        constructor(relative: boolean, value: number);
    }
    export class $Vec3Argument implements $ArgumentType<$Coordinates> {
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getVec3(context: $CommandContext<$CommandSourceStack>, name: string): $Vec3;
        static getCoordinates(context: $CommandContext<$CommandSourceStack>, name: string): $Coordinates;
        parse(reader: $StringReader): $Coordinates;
        static vec3(): $Vec3Argument;
        static vec3(centerCorrect: boolean): $Vec3Argument;
        parse<S>(arg0: $StringReader, arg1: S): $Coordinates;
        static ERROR_MIXED_TYPE: $SimpleCommandExceptionType;
        static ERROR_NOT_COMPLETE: $SimpleCommandExceptionType;
        constructor(centerCorrect: boolean);
    }
    export class $ColumnPosArgument implements $ArgumentType<$Coordinates> {
        getExamples(): $Collection<string>;
        static columnPos(): $ColumnPosArgument;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getColumnPos(context: $CommandContext<$CommandSourceStack>, name: string): $ColumnPos;
        parse<S>(arg0: $StringReader, arg1: S): $Coordinates;
        parse(arg0: $StringReader): $Coordinates;
        static ERROR_NOT_COMPLETE: $SimpleCommandExceptionType;
        constructor();
    }
    export class $WorldCoordinates implements $Coordinates {
        isXRelative(): boolean;
        isYRelative(): boolean;
        isZRelative(): boolean;
        getPosition(source: $CommandSourceStack): $Vec3;
        static absolute(x: number, arg1: number, y: number): $WorldCoordinates;
        static absolute(vector: $Vec2): $WorldCoordinates;
        /**
         * A location with a delta of 0 for all values (equivalent to `~ ~ ~` or `~0 ~0 ~0`)
         */
        static current(): $WorldCoordinates;
        static parseInt(reader: $StringReader): $WorldCoordinates;
        static parseDouble(reader: $StringReader, centerCorrect: boolean): $WorldCoordinates;
        getRotation(source: $CommandSourceStack): $Vec2;
        getBlockPos(arg0: $CommandSourceStack): $BlockPos;
        constructor(x: $WorldCoordinate, y: $WorldCoordinate, z: $WorldCoordinate);
    }
    export class $Coordinates {
    }
    export interface $Coordinates {
        isXRelative(): boolean;
        isYRelative(): boolean;
        isZRelative(): boolean;
        getPosition(source: $CommandSourceStack): $Vec3;
        getRotation(source: $CommandSourceStack): $Vec2;
        getBlockPos(source: $CommandSourceStack): $BlockPos;
    }
    export class $Vec2Argument implements $ArgumentType<$Coordinates> {
        getExamples(): $Collection<string>;
        static vec2(centerCorrect: boolean): $Vec2Argument;
        static vec2(): $Vec2Argument;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getVec2(context: $CommandContext<$CommandSourceStack>, name: string): $Vec2;
        parse<S>(arg0: $StringReader, arg1: S): $Coordinates;
        parse(arg0: $StringReader): $Coordinates;
        static ERROR_NOT_COMPLETE: $SimpleCommandExceptionType;
        constructor(centerCorrect: boolean);
    }
}
