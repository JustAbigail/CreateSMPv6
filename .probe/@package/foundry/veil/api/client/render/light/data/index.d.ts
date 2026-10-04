import { $Color, $Colorc } from "@package/foundry/veil/api/client/color";
import { $CullFrustum } from "@package/foundry/veil/api/client/render";
import { $Camera } from "@package/net/minecraft/client";
import { $LightTypeRegistry$LightType } from "@package/foundry/veil/api/client/registry";
import { $Vector3fc } from "@package/org/joml";

declare module "@package/foundry/veil/api/client/render/light/data" {
    export class $LightData {
        isVisible(arg0: $CullFrustum): boolean;
        setBrightness(arg0: number): $LightData;
        markDirty(): void;
        setColor(arg0: number, arg1: number, arg2: number): $LightData;
        setColor(arg0: $Vector3fc): $LightData;
        setColor(arg0: number): $LightData;
        setColor(arg0: $Colorc): $LightData;
        getType(): $LightTypeRegistry$LightType<never>;
        getRevision(): number;
        getColor(): $Color;
        setTo(arg0: $Camera): $LightData;
        getBrightness(): number;
        constructor();
        get type(): $LightTypeRegistry$LightType<never>;
        get revision(): number;
        set to(value: $Camera);
    }
}
