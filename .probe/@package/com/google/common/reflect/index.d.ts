import { $Serializable } from "@package/java/io";
import { $Annotation } from "@package/java/lang/annotation";
import { $TypeVariable, $Constructor, $AccessFlag, $Method, $Member, $AnnotatedElement, $AnnotatedType, $Type } from "@package/java/lang/reflect";
import { $ForwardingSet, $ImmutableList } from "@package/com/google/common/collect";
import { $Set } from "@package/java/util";
import { $Object, $Throwable, $Class } from "@package/java/lang";

declare module "@package/com/google/common/reflect" {
    export class $Invokable<T, R> implements $AnnotatedElement, $Member {
        isPackagePrivate(): boolean;
        isOverridable(): boolean;
        returning<R1 extends R>(returnType: $TypeToken<R1>): $Invokable<T, R1>;
        returning<R1 extends R>(returnType: $Class<R1>): $Invokable<T, R1>;
        invoke(receiver: T, ...args: $Object[]): R;
        getName(): string;
        getModifiers(): number;
        static from(method: $Method): $Invokable<never, $Object>;
        static from<T>(arg0: $Constructor<T>): $Invokable<T, T>;
        getTypeParameters(): $TypeVariable<never>[];
        getReturnType(): $TypeToken<R>;
        isSynthetic(): boolean;
        isFinal(): boolean;
        isStatic(): boolean;
        isAnnotationPresent(annotationClass: $Class<$Annotation>): boolean;
        getDeclaringClass(): $Class<T>;
        getAnnotation<A extends $Annotation>(annotationClass: $Class<A>): A;
        getAnnotations(): $Annotation[];
        getDeclaredAnnotations(): $Annotation[];
        isPublic(): boolean;
        setAccessible(flag: boolean): void;
        isProtected(): boolean;
        trySetAccessible(): boolean;
        isAccessible(): boolean;
        isVarArgs(): boolean;
        getExceptionTypes(): $ImmutableList<$TypeToken<$Throwable>>;
        getAnnotatedReturnType(): $AnnotatedType;
        getParameters(): $ImmutableList<$Parameter>;
        isAbstract(): boolean;
        isPrivate(): boolean;
        isNative(): boolean;
        isSynchronized(): boolean;
        getOwnerType(): $TypeToken<T>;
        getAnnotationsByType<T extends $Annotation>(arg0: $Class<T>): T[];
        getDeclaredAnnotation<T extends $Annotation>(arg0: $Class<T>): T;
        getDeclaredAnnotationsByType<T extends $Annotation>(arg0: $Class<T>): T[];
        accessFlags(): $Set<$AccessFlag>;
    }
    export class $TypeToken<T> extends $TypeCapture<T> implements $Serializable {
        isSupertypeOf(type: $TypeToken<never>): boolean;
        isSupertypeOf(type: $Type): boolean;
        resolveType(type: $Type): $TypeToken<never>;
        getSubtype(subclass: $Class<never>): $TypeToken<T>;
        isSubtypeOf(type: $TypeToken<never>): boolean;
        isSubtypeOf(supertype: $Type): boolean;
        where<X>(typeParam: $TypeParameter<X>, typeArg: $TypeToken<X>): $TypeToken<T>;
        where<X>(typeParam: $TypeParameter<X>, typeArg: $Class<X>): $TypeToken<T>;
        method(method: $Method): $Invokable<T, $Object>;
        isArray(): boolean;
        isPrimitive(): boolean;
        wrap(): $TypeToken<T>;
        static of(type: $Type): $TypeToken<never>;
        static of<T>(type: $Class<T>): $TypeToken<T>;
        getComponentType(): $TypeToken<never>;
        "constructor"(arg0: $Constructor<never>): $Invokable<T, T>;
        getType(): $Type;
        unwrap(): $TypeToken<T>;
        getRawType(): $Class<T>;
        getSupertype(superclass: $Class<T>): $TypeToken<T>;
        getTypes(): $TypeToken$TypeSet;
    }
    export class $TypeParameter<T> extends $TypeCapture<T> {
    }
    export class $TypeToken$TypeSet extends $ForwardingSet<$TypeToken<T>> implements $Serializable {
        rawTypes(): $Set<$Class<$TypeToken<T>>>;
        interfaces(): $TypeToken$TypeSet;
        classes(): $TypeToken$TypeSet;
    }
    export class $Parameter implements $AnnotatedElement {
        getDeclaringInvokable(): $Invokable<never, never>;
        isAnnotationPresent(annotationType: $Class<$Annotation>): boolean;
        getAnnotation<A extends $Annotation>(annotationType: $Class<A>): A;
        getAnnotationsByType<A extends $Annotation>(annotationType: $Class<A>): A[];
        getAnnotations(): $Annotation[];
        getDeclaredAnnotation<A extends $Annotation>(annotationType: $Class<A>): A;
        getDeclaredAnnotationsByType<A extends $Annotation>(annotationType: $Class<A>): A[];
        getDeclaredAnnotations(): $Annotation[];
        getType(): $TypeToken<never>;
        getAnnotatedType(): $AnnotatedType;
    }
    export class $TypeCapture<T> {
    }
}
