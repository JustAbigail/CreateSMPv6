import { $Function2_, $Function1_, $Function1 } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $BiConsumer_, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $KMappedMarker } from "@package/kotlin/jvm/internal/markers";
import { $Mat4 } from "@package/gg/essential/lib/kotgl/matrix/matrices";
import { $Continuation } from "@package/kotlin/coroutines";
import { $UVertexConsumer, $Quaternion } from "@package/gg/essential/model/util";
import { $Vec3 } from "@package/gg/essential/lib/kotgl/matrix/vectors";
import { $Iterable_, $Object } from "@package/java/lang";
import { $Map_, $Map, $Map$Entry, $Set, $Collection } from "@package/java/util";
import { $EnumPart, $ParticleEffect$RenderPass, $EnumPart_ } from "@package/gg/essential/model";
import { $Unit } from "@package/kotlin";

declare module "@package/gg/essential/model/backend" {
    export class $RenderBackend {
    }
    export interface $RenderBackend {
        createTexture(arg0: string, arg1: number, arg2: number): $RenderBackend$Texture;
        blitTexture(arg0: $RenderBackend$Texture, arg1: $Iterable_<$RenderBackend$BlitOp>): void;
        readTexture(arg0: string, arg1: number[], arg2: $Continuation<$RenderBackend$Texture>): $Object;
        deleteTexture(arg0: $RenderBackend$Texture): void;
    }
    export class $PlayerPose implements $Map<$EnumPart, $PlayerPose$Part>, $KMappedMarker {
        component3(): $PlayerPose$Part;
        component4(): $PlayerPose$Part;
        component5(): $PlayerPose$Part;
        component6(): $PlayerPose$Part;
        component7(): $PlayerPose$Part;
        getCape(): $PlayerPose$Part;
        component8(): $PlayerPose$Part;
        component9(): $PlayerPose$Part;
        component10(): $PlayerPose$Part;
        component11(): $PlayerPose$Part;
        component12(): boolean;
        getLeftShoulderEntity(): $PlayerPose$Part;
        getRightShoulderEntity(): $PlayerPose$Part;
        getRightArm(): $PlayerPose$Part;
        getLeftArm(): $PlayerPose$Part;
        getLeftLeg(): $PlayerPose$Part;
        getRightLeg(): $PlayerPose$Part;
        getRightWing(): $PlayerPose$Part;
        getLeftWing(): $PlayerPose$Part;
        mapParts(arg0: $Function2_<$EnumPart, $PlayerPose$Part, $PlayerPose$Part>): $PlayerPose;
        getValues(): $Collection<$PlayerPose$Part>;
        getHead(): $PlayerPose$Part;
        getBody(): $PlayerPose$Part;
        getChild(): boolean;
        getKeys(): $Set<$EnumPart>;
        remove(arg0: $Object, arg1: $Object): boolean;
        size(): number;
        get(arg0: $EnumPart_): $PlayerPose$Part;
        put(arg0: $EnumPart_, arg1: $PlayerPose$Part): $PlayerPose$Part;
        values(): $Collection<$PlayerPose$Part>;
        clear(): void;
        isEmpty(): boolean;
        replace(arg0: $EnumPart_, arg1: $PlayerPose$Part): $PlayerPose$Part;
        replace(arg0: $EnumPart_, arg1: $PlayerPose$Part, arg2: $PlayerPose$Part): boolean;
        replaceAll(arg0: $BiFunction_<$EnumPart, $PlayerPose$Part, $PlayerPose$Part>): void;
        merge(arg0: $EnumPart_, arg1: $PlayerPose$Part, arg2: $BiFunction_<$PlayerPose$Part, $PlayerPose$Part, $PlayerPose$Part>): $PlayerPose$Part;
        entrySet(): $Set<$Map$Entry<$EnumPart, $PlayerPose$Part>>;
        putAll(arg0: $Map_<$EnumPart_, $PlayerPose$Part>): void;
        putIfAbsent(arg0: $EnumPart_, arg1: $PlayerPose$Part): $PlayerPose$Part;
        compute(arg0: $EnumPart_, arg1: $BiFunction_<$EnumPart, $PlayerPose$Part, $PlayerPose$Part>): $PlayerPose$Part;
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: $EnumPart_): boolean;
        computeIfAbsent(arg0: $EnumPart_, arg1: $Function_<$EnumPart, $PlayerPose$Part>): $PlayerPose$Part;
        keySet(): $Set<$EnumPart>;
        containsValue(arg0: $Object): boolean;
        containsValue(arg0: $PlayerPose$Part): boolean;
        computeIfPresent(arg0: $EnumPart_, arg1: $BiFunction_<$EnumPart, $PlayerPose$Part, $PlayerPose$Part>): $PlayerPose$Part;
        copy(arg0: $PlayerPose$Part, arg1: $PlayerPose$Part, arg2: $PlayerPose$Part, arg3: $PlayerPose$Part, arg4: $PlayerPose$Part, arg5: $PlayerPose$Part, arg6: $PlayerPose$Part, arg7: $PlayerPose$Part, arg8: $PlayerPose$Part, arg9: $PlayerPose$Part, arg10: $PlayerPose$Part, arg11: boolean): $PlayerPose;
        getSize(): number;
        getEntries(): $Set<$Map$Entry<$EnumPart, $PlayerPose$Part>>;
        component1(): $PlayerPose$Part;
        component2(): $PlayerPose$Part;
        static copy$default(arg0: $PlayerPose, arg1: $PlayerPose$Part, arg2: $PlayerPose$Part, arg3: $PlayerPose$Part, arg4: $PlayerPose$Part, arg5: $PlayerPose$Part, arg6: $PlayerPose$Part, arg7: $PlayerPose$Part, arg8: $PlayerPose$Part, arg9: $PlayerPose$Part, arg10: $PlayerPose$Part, arg11: $PlayerPose$Part, arg12: boolean, arg13: number, arg14: $Object): $PlayerPose;
        withoutAttachments(): $PlayerPose;
        forEach(arg0: $BiConsumer_<$EnumPart, $PlayerPose$Part>): void;
        getOrDefault(arg0: $Object, arg1: $PlayerPose$Part): $PlayerPose$Part;
        remove(arg0: $Object): $PlayerPose$Part;
        static Companion: $PlayerPose$Companion;
        constructor(arg0: $PlayerPose$Part, arg1: $PlayerPose$Part, arg2: $PlayerPose$Part, arg3: $PlayerPose$Part, arg4: $PlayerPose$Part, arg5: $PlayerPose$Part, arg6: $PlayerPose$Part, arg7: $PlayerPose$Part, arg8: $PlayerPose$Part, arg9: $PlayerPose$Part, arg10: $PlayerPose$Part, arg11: boolean);
    }
    export class $RenderBackend$VertexConsumerProvider {
    }
    export interface $RenderBackend$VertexConsumerProvider {
        provide(arg0: $RenderBackend$Texture, arg1: boolean, arg2: $Function1_<$UVertexConsumer, $Unit>): void;
    }
    /**
     * Values that may be interpreted as {@link $RenderBackend$VertexConsumerProvider}.
     */
    export type $RenderBackend$VertexConsumerProvider_ = ((arg0: $RenderBackend$Texture, arg1: boolean, arg2: $Function1<$UVertexConsumer, $Unit>) => void);
    export class $PlayerPose$Part {
        component3(): number;
        component4(): number;
        component5(): number;
        component6(): number;
        component7(): $Mat4;
        static access$getZERO$cp(): $PlayerPose$Part;
        getRotateAngleZ(): number;
        getRotateAngleY(): number;
        getRotateAngleX(): number;
        static access$getMISSING$cp(): $PlayerPose$Part;
        getPivotX(): number;
        getPivotY(): number;
        getPivotZ(): number;
        getPivot(): $Vec3;
        offset(arg0: $Vec3): $PlayerPose$Part;
        copy(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $Mat4): $PlayerPose$Part;
        getExtra(): $Mat4;
        component1(): number;
        component2(): number;
        static copy$default(arg0: $PlayerPose$Part, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $Mat4, arg8: number, arg9: $Object): $PlayerPose$Part;
        getRotation(): $Quaternion;
        static Companion: $PlayerPose$Part$Companion;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $Mat4);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $Mat4, arg7: number, arg8: $DefaultConstructorMarker);
    }
    export class $RenderBackend$CommandQueue {
    }
    export interface $RenderBackend$CommandQueue {
        submit(arg0: $RenderBackend$Texture, arg1: boolean, arg2: boolean, arg3: $Function1_<$UVertexConsumer, $Unit>): void;
        submit(arg0: $ParticleEffect$RenderPass, arg1: $Function1_<$UVertexConsumer, $Unit>): void;
    }
    export class $RenderBackend$Texture {
    }
    export interface $RenderBackend$Texture {
        getWidth(): number;
        getHeight(): number;
    }
    export class $PlayerPose$Part$Companion {
        getMISSING(): $PlayerPose$Part;
        getZERO(): $PlayerPose$Part;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $PlayerPose$Companion {
        neutral(): $PlayerPose;
        fromMap(arg0: $Map_<$EnumPart_, $PlayerPose$Part>, arg1: boolean): $PlayerPose;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $RenderBackend$BlitOp {
        component3(): number;
        component4(): number;
        component5(): number;
        component6(): number;
        component7(): number;
        getSrc(): $RenderBackend$Texture;
        getSrcX(): number;
        getSrcY(): number;
        getDestX(): number;
        getDestY(): number;
        getWidth(): number;
        getHeight(): number;
        copy(arg0: $RenderBackend$Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $RenderBackend$BlitOp;
        component1(): $RenderBackend$Texture;
        component2(): number;
        static copy$default(arg0: $RenderBackend$BlitOp, arg1: $RenderBackend$Texture, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $Object): $RenderBackend$BlitOp;
        constructor(arg0: $RenderBackend$Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
    }
}
