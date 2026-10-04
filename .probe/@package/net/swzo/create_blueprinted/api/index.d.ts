import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $SchematicRenderSettings, $SchematicRenderSettings$Builder } from "@package/net/swzo/create_blueprinted/render";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $SchematicLevel } from "@package/net/createmod/catnip/levelWrappers";
import { $Enum } from "@package/java/lang";

declare module "@package/net/swzo/create_blueprinted/api" {
    export class $RenderSchematicImageEvent<T> extends $Event implements $ICancellableEvent {
        getHandlerId(): $ResourceLocation;
        getSchematicName(): string;
        getImageContent(): T;
        getRenderSettings(): $SchematicRenderSettings;
        getAction(): $RenderSchematicImageEvent$Action;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        get handlerId(): $ResourceLocation;
        get schematicName(): string;
        get imageContent(): T;
        get renderSettings(): $SchematicRenderSettings;
        get action(): $RenderSchematicImageEvent$Action;
    }
    export class $RenderSchematicImageEvent$Pre extends $RenderSchematicImageEvent<$SchematicLevel> {
        modifyRenderSettings(): $SchematicRenderSettings$Builder;
        constructor(arg0: $ResourceLocation_, arg1: string, arg2: $SchematicRenderSettings$Builder, arg3: $RenderSchematicImageEvent$Action_, arg4: $SchematicLevel);
    }
    export class $RenderSchematicImageEvent$Action extends $Enum<$RenderSchematicImageEvent$Action> {
        static values(): $RenderSchematicImageEvent$Action[];
        static valueOf(arg0: string): $RenderSchematicImageEvent$Action;
        static EXPORT: $RenderSchematicImageEvent$Action;
        static SHARE: $RenderSchematicImageEvent$Action;
    }
    /**
     * Values that may be interpreted as {@link $RenderSchematicImageEvent$Action}.
     */
    export type $RenderSchematicImageEvent$Action_ = "export" | "share";
    export class $RenderSchematicImageEvent$Post extends $RenderSchematicImageEvent<number[]> {
        constructor(arg0: $ResourceLocation_, arg1: string, arg2: $SchematicRenderSettings$Builder, arg3: $RenderSchematicImageEvent$Action_, arg4: number[]);
    }
}
