import { $Record } from "@package/java/lang";
import { $Color } from "@package/net/createmod/catnip/theme";

declare module "@package/net/swzo/create_blueprinted/render" {
    export class $SchematicRenderSettings {
        imageWidth(): number;
        antialiasingFactor(): number;
        backgroundColor(): $Color;
        static builder(): $SchematicRenderSettings$Builder;
        orientation(): $SchematicRenderSettings$Orientation;
        static MIN_WIDTH: number;
        static DEFAULT_BG_COLOR: $Color;
        static MAX_ANTIALIASING: number;
        static MAX_WIDTH: number;
    }
    export class $SchematicRenderSettings$Orientation extends $Record {
        yaw(): number;
        roll(): number;
        pitch(): number;
        static ISOMETRIC_RIGHT: $SchematicRenderSettings$Orientation;
        static ISOMETRIC_LEFT: $SchematicRenderSettings$Orientation;
        constructor(arg0: number, arg1: number);
        constructor(yaw: number, pitch: number, roll: number);
    }
    /**
     * Values that may be interpreted as {@link $SchematicRenderSettings$Orientation}.
     */
    export type $SchematicRenderSettings$Orientation_ = { roll?: number, pitch?: number, yaw?: number,  } | [roll?: number, pitch?: number, yaw?: number, ];
    export class $SchematicRenderSettings$Builder {
        imageWidth(arg0: number): $SchematicRenderSettings$Builder;
        antialiasingFactor(arg0: number): $SchematicRenderSettings$Builder;
        backgroundColor(arg0: $Color): $SchematicRenderSettings$Builder;
        build(): $SchematicRenderSettings;
        orientation(arg0: $SchematicRenderSettings$Orientation_): $SchematicRenderSettings$Builder;
        constructor(arg0: $SchematicRenderSettings);
        constructor();
    }
}
