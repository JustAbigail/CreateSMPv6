import { $Record } from "@package/java/lang";
import { $Color } from "@package/net/createmod/catnip/theme";

declare module "@package/net/swzo/create_blueprinted/render" {
    export class $SchematicRenderSettings {
        antialiasingFactor(): number;
        backgroundColor(): $Color;
        static builder(): $SchematicRenderSettings$Builder;
        imageWidth(): number;
        orientation(): $SchematicRenderSettings$Orientation;
        static MIN_WIDTH: number;
        static DEFAULT_BG_COLOR: $Color;
        static MAX_ANTIALIASING: number;
        static MAX_WIDTH: number;
    }
    export class $SchematicRenderSettings$Orientation extends $Record {
        yaw(): number;
        pitch(): number;
        roll(): number;
        static ISOMETRIC_RIGHT: $SchematicRenderSettings$Orientation;
        static ISOMETRIC_LEFT: $SchematicRenderSettings$Orientation;
        constructor(yaw: number, pitch: number, roll: number);
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $SchematicRenderSettings$Orientation}.
     */
    export type $SchematicRenderSettings$Orientation_ = { yaw?: number, pitch?: number, roll?: number,  } | [yaw?: number, pitch?: number, roll?: number, ];
    export class $SchematicRenderSettings$Builder {
        antialiasingFactor(arg0: number): $SchematicRenderSettings$Builder;
        backgroundColor(arg0: $Color): $SchematicRenderSettings$Builder;
        build(): $SchematicRenderSettings;
        imageWidth(arg0: number): $SchematicRenderSettings$Builder;
        orientation(arg0: $SchematicRenderSettings$Orientation_): $SchematicRenderSettings$Builder;
        constructor(arg0: $SchematicRenderSettings);
        constructor();
    }
}
