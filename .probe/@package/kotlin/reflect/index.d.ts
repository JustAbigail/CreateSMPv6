import { $Function1, $Function0 } from "@package/kotlin/jvm/functions";
import { $List, $Collection } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $Unit } from "@package/kotlin";

declare module "@package/kotlin/reflect" {
    export class $KProperty0<V> {
    }
    export interface $KProperty0<V> extends $KProperty<V>, $Function0<V> {
        get(): V;
        getDelegate(): $Object;
        getGetter(): $KProperty$Getter<V>;
    }
    export class $KMutableProperty0<V> {
    }
    export interface $KMutableProperty0<V> extends $KProperty0<V>, $KMutableProperty<V> {
        set(arg0: V): void;
        getSetter(): $KMutableProperty0$Setter<V>;
    }
    export class $KMutableProperty<V> {
    }
    export interface $KMutableProperty<V> extends $KProperty<V> {
        getSetter(): $KMutableProperty$Setter<V>;
    }
    export class $KClass<T> {
    }
    export interface $KClass<T> extends $KDeclarationContainer, $KAnnotatedElement, $KClassifier {
        isFun(): boolean;
        getNestedClasses(): $Collection<$KClass<never>>;
        getSupertypes(): $List<$KType>;
        getSealedSubclasses(): $List<$KClass<T>>;
        isCompanion(): boolean;
        isValue(): boolean;
        getObjectInstance(): T;
        getQualifiedName(): string;
        equals(arg0: $Object): boolean;
        hashCode(): number;
        isInstance(arg0: $Object): boolean;
        getTypeParameters(): $List<$KTypeParameter>;
        getSimpleName(): string;
        isFinal(): boolean;
        isOpen(): boolean;
        getConstructors(): $Collection<$KFunction<T>>;
        isSealed(): boolean;
        isAbstract(): boolean;
        isData(): boolean;
        isInner(): boolean;
        getMembers(): $Collection<$KCallable<never>>;
        getVisibility(): $KVisibility;
    }
    export class $KMutableProperty0$Setter<V> {
    }
    export interface $KMutableProperty0$Setter<V> extends $KMutableProperty$Setter<V>, $Function1<V, $Unit> {
    }
}
