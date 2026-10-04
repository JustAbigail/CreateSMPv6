import { $MolangQueryEntity } from "@package/gg/essential/model/molang";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $BiConsumer_, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $MutableMat4, $MutableMat3 } from "@package/gg/essential/lib/kotgl/matrix/matrices/mutables";
import { $KMappedMarker } from "@package/kotlin/jvm/internal/markers";
import { $Mat4, $Mat3 } from "@package/gg/essential/lib/kotgl/matrix/matrices";
import { $PlayerPose } from "@package/gg/essential/model/backend";
import { $WearablesManager } from "@package/gg/essential/cosmetics";
import { $Vec3 } from "@package/gg/essential/lib/kotgl/matrix/vectors";
import { $Comparable, $Object } from "@package/java/lang";
import { $Map_, $Map, $Map$Entry, $Set, $List_, $Collection } from "@package/java/util";
import { $ModelInstance } from "@package/gg/essential/model";

declare module "@package/gg/essential/model/util" {
    export class $UMatrixStack$Entry {
        copy(arg0: $MutableMat4, arg1: $MutableMat3): $UMatrixStack$Entry;
        deepCopy(): $UMatrixStack$Entry;
        getModel(): $MutableMat4;
        getNormal(): $MutableMat3;
        component1(): $MutableMat4;
        component2(): $MutableMat3;
        static copy$default(arg0: $UMatrixStack$Entry, arg1: $MutableMat4, arg2: $MutableMat3, arg3: number, arg4: $Object): $UMatrixStack$Entry;
        constructor(arg0: $MutableMat4, arg1: $MutableMat3);
        get model(): $MutableMat4;
        get normal(): $MutableMat3;
    }
    export class $Color {
        static "toString-impl"(arg0: number): string;
        static "hashCode-impl"(arg0: number): number;
        static "equals-impl"(arg0: number, arg1: $Object): boolean;
        static "box-impl"(arg0: number): $Color;
        static "equals-impl0"(arg0: number, arg1: number): boolean;
        static "constructor-impl$default"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $DefaultConstructorMarker): number;
        static "getR-w2LRezQ"(arg0: number): number;
        static "getG-w2LRezQ"(arg0: number): number;
        static "getB-w2LRezQ"(arg0: number): number;
        static "getA-w2LRezQ"(arg0: number): number;
        static "getArgb-pVg5ArA"(arg0: number): number;
        static "copy-ehsoyi0$default"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $Object): number;
        static access$getWHITE$cp(): number;
        static access$getBLACK$cp(): number;
        "getRgba-pVg5ArA"(): number;
        static "copy-ehsoyi0"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        "unbox-impl"(): number;
        static "constructor-impl"(arg0: number): number;
        static "constructor-impl"(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static Companion: $Color$Companion;
        get rgba-pVg5ArA(): number;
    }
    export class $TreeMap<K extends $Comparable<K>, V> implements $Map<K, V>, $KMappedMarker {
        lowestEntry(): $Map$Entry<K, V>;
        getValues(): $Collection<V>;
        lastKey(): K;
        lowerEntry(arg0: K): $Map$Entry<K, V>;
        floorEntry(arg0: K): $Map$Entry<K, V>;
        ceilingEntry(arg0: K): $Map$Entry<K, V>;
        higherEntry(arg0: K): $Map$Entry<K, V>;
        remove(arg0: $Object, arg1: $Object): boolean;
        remove(arg0: $Object): V;
        size(): number;
        get(arg0: K): V;
        get(arg0: $Object): V;
        put(arg0: K, arg1: V): V;
        values(): $Collection<V>;
        clear(): void;
        isEmpty(): boolean;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replace(arg0: K, arg1: V): V;
        replaceAll(arg0: $BiFunction_<K, V, V>): void;
        merge(arg0: K, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        entrySet(): $Set<$Map$Entry<K, V>>;
        putAll(arg0: $Map_<K, V>): void;
        putIfAbsent(arg0: K, arg1: V): V;
        compute(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: K): boolean;
        computeIfAbsent(arg0: K, arg1: $Function_<K, V>): V;
        keySet(): $Set<K>;
        containsValue(arg0: $Object): boolean;
        computeIfPresent(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        getSize(): number;
        getEntries(): $Set<$Map$Entry<K, V>>;
        getKeys(): $Set<K>;
        forEach(arg0: $BiConsumer_<K, V>): void;
        getOrDefault(arg0: $Object, arg1: V): V;
        static Companion: $TreeMap$Companion;
        constructor(arg0: $Map_<K, V>);
        get empty(): boolean;
        get entries(): $Set<$Map$Entry<K, V>>;
        get keys(): $Set<K>;
    }
    export class $Quaternion {
        component3(): number;
        component4(): number;
        static access$getIdentity$cp(): $Quaternion;
        static access$getX180$cp(): $Quaternion;
        static access$getY180$cp(): $Quaternion;
        static access$getZ180$cp(): $Quaternion;
        projectAroundAxis(arg0: $Vec3): $Quaternion;
        invert(): $Quaternion;
        getY(): number;
        times(arg0: $Quaternion): $Quaternion;
        times(arg0: $Vec3): $Vec3;
        normalize(): $Quaternion;
        copy(arg0: number, arg1: number, arg2: number, arg3: number): $Quaternion;
        getW(): number;
        getX(): number;
        getZ(): number;
        opposite(): $Quaternion;
        component1(): number;
        component2(): number;
        static copy$default(arg0: $Quaternion, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $Object): $Quaternion;
        conjugate(): $Quaternion;
        static Companion: $Quaternion$Companion;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get y(): number;
        get w(): number;
        get x(): number;
        get z(): number;
    }
    export class $UMatrixStack {
        fork(): $UMatrixStack;
        push(): void;
        pop(): void;
        scale(arg0: number, arg1: number, arg2: number): void;
        scale(arg0: number): void;
        peek(): $UMatrixStack$Entry;
        multiply(arg0: $UMatrixStack): void;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        rotate(arg0: $Quaternion): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        translate(arg0: $Vec3): void;
        constructor(arg0: $List_<$UMatrixStack$Entry>);
        constructor(arg0: $Mat4, arg1: $Mat3);
        constructor(arg0: $Mat4, arg1: $Mat3, arg2: number, arg3: $DefaultConstructorMarker);
    }
    export class $UVertexConsumer {
    }
    export interface $UVertexConsumer {
        "light-vX8ayIk"(arg0: number): $UVertexConsumer;
        "color-EIFkdBU"(arg0: number): $UVertexConsumer;
        tex(arg0: number, arg1: number): $UVertexConsumer;
        endVertex(): $UVertexConsumer;
        norm(arg0: $UMatrixStack, arg1: number, arg2: number, arg3: number): $UVertexConsumer;
        pos(arg0: $UMatrixStack, arg1: number, arg2: number, arg3: number): $UVertexConsumer;
    }
    export class $Quaternion$Companion {
        fromAxisAngle(arg0: $Vec3, arg1: number): $Quaternion;
        getIdentity(): $Quaternion;
        fromLookAt(arg0: $Vec3, arg1: $Vec3): $Quaternion;
        getX180(): $Quaternion;
        getY180(): $Quaternion;
        getZ180(): $Quaternion;
        fromRotationMatrix(arg0: $Mat3): $Quaternion;
        constructor(arg0: $DefaultConstructorMarker);
        get identity(): $Quaternion;
        get x180(): $Quaternion;
        get y180(): $Quaternion;
        get z180(): $Quaternion;
    }
    export class $PlayerPoseManager$Companion {
        static access$wrapAngle(arg0: $PlayerPoseManager$Companion, arg1: number): number;
        constructor(arg0: $DefaultConstructorMarker);
    }
    export class $PlayerPoseManager {
        computePose(arg0: $WearablesManager, arg1: $PlayerPose): $PlayerPose;
        update(arg0: $ModelInstance): void;
        update(arg0: $WearablesManager): void;
        static Companion: $PlayerPoseManager$Companion;
        static transitionTime: number;
        constructor(arg0: $MolangQueryEntity);
    }
}
