import { $Int2IntFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Serializable } from "@package/java/io";
import { $Logger } from "@package/org/slf4j";
import { $Keyable, $MapCodec_, $Decoder, $Decoder$Simple, $Codec$ResultFunction, $DataResult, $MapEncoder, $DynamicOps, $Codec, $Decoder$Boxed, $Lifecycle, $Dynamic, $MapCodec, $Encoder, $Decoder$Terminal } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $TimeUnit_, $Executor_, $CompletableFuture, $TimeUnit } from "@package/java/util/concurrent";
import { $PublicKey } from "@package/java/security";
import { $Iterator, $List, $List_, $OptionalLong, $Comparator, $Deque, $AbstractSet, $AbstractList, $RandomAccess } from "@package/java/util";
import { $Consumer, $Supplier_, $Function_, $IntConsumer_, $Consumer_, $UnaryOperator_, $Function, $ToIntFunction_ } from "@package/java/util/function";
import { $ServicesKeyType_, $ServicesKeySet_ } from "@package/com/mojang/authlib/yggdrasil";
import { $Path_ } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RemappedEnumConstant } from "@package/dev/latvian/mods/rhino/util";
import { $Enum, $Record, $AutoCloseable, $Cloneable, $Class, $Comparable_, $Runnable_, $Comparable, $Object } from "@package/java/lang";
import { $PositionalRandomFactory } from "@package/net/minecraft/world/level/levelgen";
export * as thread from "@package/net/minecraft/util/thread";
export * as valueproviders from "@package/net/minecraft/util/valueproviders";
export * as profiling from "@package/net/minecraft/util/profiling";
export * as random from "@package/net/minecraft/util/random";
export * as debugchart from "@package/net/minecraft/util/debugchart";
export * as datafix from "@package/net/minecraft/util/datafix";

declare module "@package/net/minecraft/util" {
    export class $SignatureValidator {
        static from(publicKey: $PublicKey, algorithm: string): $SignatureValidator;
        static from(serviceKeySet: $ServicesKeySet_, serviceKeyType: $ServicesKeyType_): $SignatureValidator;
        static NO_VALIDATION: $SignatureValidator;
        static LOGGER: $Logger;
    }
    export interface $SignatureValidator {
        validate(digest: number[], signature: number[]): boolean;
        validate(updater: $SignatureUpdater_, signature: number[]): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SignatureValidator}.
     */
    export type $SignatureValidator_ = ((arg0: $SignatureUpdater, arg1: number[]) => boolean);
    /**
     * @deprecated
     */
    export class $StringRepresentable$EnumCodec<E extends $Enum<E>> extends $StringRepresentable$StringRepresentableCodec<E> {
        byName(name: string | null): E;
        byName(name: string | null, defaultValue: E): E;
        withLifecycle(arg0: $Lifecycle): $Encoder<E>;
        fieldOf(arg0: string): $MapEncoder<E>;
        constructor(values: E[], resolver: $Function_<string, E>);
    }
    /**
     * A basic interface for random number generation. This mirrors the same methods in `Random`, however it does not make any guarantee that these are thread-safe, unlike `Random`.
     * The notable difference is that `#setSeed(long)` is not `synchronized` and should not be accessed from multiple threads.
     * The documentation for each individual method can be assumed to be otherwise the same as the identically named method in `Random`.
     * @see java.util.Random
     * @see net.minecraft.world.level.levelgen.SimpleRandomSource
     */
    export class $RandomSource {
        static create(): $RandomSource;
        static create(seed: number): $RandomSource;
        /**
         * @deprecated
         */
        static createThreadSafe(): $RandomSource;
        static createNewThreadLocalInstance(): $RandomSource;
        /**
         * @deprecated
         */
        static GAUSSIAN_SPREAD_FACTOR: number;
    }
    export interface $RandomSource {
        setSeed(seed: number): void;
        nextFloat(): number;
        nextGaussian(): number;
        fork(): $RandomSource;
        nextDouble(): number;
        nextInt(bound: number): number;
        nextInt(origin: number, bound: number): number;
        nextInt(): number;
        nextLong(): number;
        nextBoolean(): boolean;
        forkPositional(): $PositionalRandomFactory;
        consumeCount(count: number): void;
        nextIntBetweenInclusive(origin: number, bound: number): number;
        triangle(min: number, arg1: number): number;
        set seed(value: number);
    }
    export class $ArrayListDeque<T> extends $AbstractList<T> implements $ListAndDeque<T> {
        pollFirst(): T;
        pollLast(): T;
        offerLast(element: T): boolean;
        peekFirst(): T;
        removeFirstOccurrence(element: $Object): boolean;
        offerFirst(element: T): boolean;
        peekLast(): T;
        removeLastOccurrence(element: $Object): boolean;
        descendingIterator(): $Iterator<T>;
        capacity(): number;
        push(element: T): void;
        pop(): T;
        offer(element: T): boolean;
        remove(): T;
        peek(): T;
        element(): T;
        poll(): T;
        reversed(): $ListAndDeque<T>;
        constructor();
        constructor(size: number);
    }
    export class $BitStorage {
    }
    export interface $BitStorage {
        getAll(consumer: $IntConsumer_): void;
        getBits(): number;
        /**
         * Gets the entry at the given index
         */
        get(index: number): number;
        /**
         * Sets the entry at the given location to the given value
         */
        set(index: number, value: number): void;
        copy(): $BitStorage;
        getSize(): number;
        getAndSet(index: number, value: number): number;
        unpack(array: number[]): void;
        /**
         * Gets the long array that is used to store the data in this BitArray. This is useful for sending packet data.
         */
        getRaw(): number[];
        get bits(): number;
        get size(): number;
        get raw(): number[];
    }
    /**
     * @deprecated
     */
    export class $LazyLoadedValue<T> {
        get(): T;
        constructor(supplier: $Supplier_<T>);
    }
    export class $TimeSource {
    }
    export interface $TimeSource {
        get(unit: $TimeUnit_): number;
    }
    /**
     * Values that may be interpreted as {@link $TimeSource}.
     */
    export type $TimeSource_ = ((arg0: $TimeUnit) => number);
    export class $AbortableIterationConsumer<T> {
        static forConsumer<T>(consumer: $Consumer_<T>): $AbortableIterationConsumer<T>;
    }
    export interface $AbortableIterationConsumer<T> {
        accept(value: T): $AbortableIterationConsumer$Continuation;
    }
    /**
     * Values that may be interpreted as {@link $AbortableIterationConsumer}.
     */
    export type $AbortableIterationConsumer_<T> = ((arg0: T) => $AbortableIterationConsumer$Continuation_);
    export class $DirectoryLock implements $AutoCloseable {
        isValid(): boolean;
        close(): void;
        static create(path: $Path_): $DirectoryLock;
        static isLocked(path: $Path_): boolean;
        static LOCK_FILE: string;
        get valid(): boolean;
    }
    export class $Brightness extends $Record {
        sky(): number;
        pack(): number;
        block(): number;
        static unpack(packedBrightness: number): $Brightness;
        static FULL_BRIGHT: $Brightness;
        static CODEC: $Codec<$Brightness>;
        static LIGHT_VALUE_CODEC: $Codec<number>;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Brightness}.
     */
    export type $Brightness_ = { block?: number, sky?: number,  } | [block?: number, sky?: number, ];
    export class $ModCheck$Confidence extends $Enum<$ModCheck$Confidence> {
        static values(): $ModCheck$Confidence[];
        static valueOf(arg0: string): $ModCheck$Confidence;
        shouldReportAsModified: boolean;
        static VERY_LIKELY: $ModCheck$Confidence;
        description: string;
        static PROBABLY_NOT: $ModCheck$Confidence;
        static DEFINITELY: $ModCheck$Confidence;
    }
    /**
     * Values that may be interpreted as {@link $ModCheck$Confidence}.
     */
    export type $ModCheck$Confidence_ = "probably_not" | "very_likely" | "definitely";
    export class $AbortableIterationConsumer$Continuation extends $Enum<$AbortableIterationConsumer$Continuation> {
        shouldAbort(): boolean;
        static values(): $AbortableIterationConsumer$Continuation[];
        static valueOf(arg0: string): $AbortableIterationConsumer$Continuation;
        static CONTINUE: $AbortableIterationConsumer$Continuation;
        static ABORT: $AbortableIterationConsumer$Continuation;
    }
    /**
     * Values that may be interpreted as {@link $AbortableIterationConsumer$Continuation}.
     */
    export type $AbortableIterationConsumer$Continuation_ = "continue" | "abort";
    export class $ProgressListener {
    }
    export interface $ProgressListener {
        /**
         * Updates the progress bar on the loading screen to the specified amount.
         */
        progressStagePercentage(progress: number): void;
        progressStart(stage: $Component_): void;
        progressStartNoAbort(stage: $Component_): void;
        progressStage(stage: $Component_): void;
        stop(): void;
    }
    export class $OptionEnum {
    }
    export interface $OptionEnum {
        getCaption(): $Component;
        getKey(): string;
        getId(): number;
        get caption(): $Component;
        get key(): string;
        get id(): number;
    }
    export class $KeyDispatchDataCodec<A> extends $Record {
        static of<A>(codec: $MapCodec_<A>): $KeyDispatchDataCodec<A>;
        codec(): $MapCodec<A>;
        constructor(arg0: $MapCodec_<A>);
    }
    /**
     * Values that may be interpreted as {@link $KeyDispatchDataCodec}.
     */
    export type $KeyDispatchDataCodec_<A> = { codec?: $MapCodec_<any>,  } | [codec?: $MapCodec_<any>, ];
    export class $StringRepresentable {
        static keys(serializables: $StringRepresentable_[]): $Keyable;
        static fromEnum<E extends $Enum<E>>(elementsSupplier: $Supplier_<E[]>): $StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends $Enum<E>>(enumValues: $Supplier_<E[]>, keyFunction: $Function_<string, string>): $StringRepresentable$EnumCodec<E>;
        static createNameLookup<T extends $StringRepresentable>(values: T[], keyFunction: $Function_<string, string>): $Function<string, T>;
        static fromValues<T extends $StringRepresentable>(valuesSupplier: $Supplier_<T[]>): $Codec<T>;
        static PRE_BUILT_MAP_THRESHOLD: number;
    }
    export interface $StringRepresentable extends $RemappedEnumConstant {
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StringRepresentable}.
     */
    export type $StringRepresentable_ = (() => string);
    export class $SignatureUpdater {
    }
    export interface $SignatureUpdater {
        update(output: $SignatureUpdater$Output_): void;
    }
    /**
     * Values that may be interpreted as {@link $SignatureUpdater}.
     */
    export type $SignatureUpdater_ = ((arg0: $SignatureUpdater$Output) => void);
    export class $ClassTreeIdRegistry {
        getLastIdFor(clazz: $Class<never>): number;
        getCount(clazz: $Class<never>): number;
        define(clazz: $Class<never>): number;
        static NO_ID_VALUE: number;
        constructor();
    }
    export class $StaticCache2D<T> {
        get(x: number, z: number): T;
        contains(x: number, z: number): boolean;
        forEach(action: $Consumer_<T>): void;
        static create<T>(centerX: number, centerZ: number, size: number, initializer: $StaticCache2D$Initializer_<T>): $StaticCache2D<T>;
    }
    export class $Tuple<A, B> {
        setB(a: B): void;
        setA(a: A): void;
        getA(): A;
        getB(): B;
        constructor(a: A, b: B);
    }
    export class $TaskChainer {
        static immediate(executor: $Executor_): $TaskChainer;
        static LOGGER: $Logger;
    }
    export interface $TaskChainer {
        append<T>(future: $CompletableFuture<T>, consumer: $Consumer_<T>): void;
        append(task: $Runnable_): void;
    }
    /**
     * Values that may be interpreted as {@link $TaskChainer}.
     */
    export type $TaskChainer_ = ((arg0: $CompletableFuture<any>, arg1: $Consumer<any>) => void);
    export class $ColorRGBA extends $Record {
        rgba(): number;
        static CODEC: $Codec<$ColorRGBA>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $ColorRGBA}.
     */
    export type $ColorRGBA_ = { rgba?: number,  } | [rgba?: number, ];
    export class $HttpUtil$DownloadProgressListener {
    }
    export interface $HttpUtil$DownloadProgressListener {
        requestStart(): void;
        downloadStart(totalSize: $OptionalLong): void;
        downloadedBytes(progress: number): void;
        requestFinished(success: boolean): void;
    }
    export class $StaticCache2D$Initializer<T> {
    }
    export interface $StaticCache2D$Initializer<T> {
        get(x: number, z: number): T;
    }
    /**
     * Values that may be interpreted as {@link $StaticCache2D$Initializer}.
     */
    export type $StaticCache2D$Initializer_<T> = ((arg0: number, arg1: number) => T);
    export class $ModCheck extends $Record {
        confidence(): $ModCheck$Confidence;
        merge(other: $ModCheck_): $ModCheck;
        description(): string;
        fullDescription(): string;
        shouldReportAsModified(): boolean;
        static identify(vanillaBrandName: string, brandNameGetter: $Supplier_<string>, side: string, signingClass: $Class<never>): $ModCheck;
        constructor(arg0: $ModCheck$Confidence_, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $ModCheck}.
     */
    export type $ModCheck_ = { confidence?: $ModCheck$Confidence_, description?: string,  } | [confidence?: $ModCheck$Confidence_, description?: string, ];
    export class $SignatureUpdater$Output {
    }
    export interface $SignatureUpdater$Output {
        update(bodyDigest: number[]): void;
    }
    /**
     * Values that may be interpreted as {@link $SignatureUpdater$Output}.
     */
    export type $SignatureUpdater$Output_ = ((arg0: number[]) => void);
    export class $ProblemReporter {
    }
    export interface $ProblemReporter {
        forChild(name: string): $ProblemReporter;
        report(message: string): void;
    }
    export class $ListAndDeque<T> {
    }
    export interface $ListAndDeque<T> extends $Serializable, $Cloneable, $Deque<T>, $List<T>, $RandomAccess {
        push(element: T): void;
        pop(): T;
        offer(element: T): boolean;
        remove(): T;
        peek(): T;
        reversed(): $ListAndDeque<T>;
        getFirst(): T;
        getLast(): T;
        element(): T;
        addFirst(element: T): void;
        addLast(element: T): void;
        removeFirst(): T;
        removeLast(): T;
        poll(): T;
        get first(): T;
        get last(): T;
    }
    export class $FormattedCharSequence {
        static codepoint(codePoint: number, style: $Style): $FormattedCharSequence;
        static fromList(parts: $List_<$FormattedCharSequence_>): $FormattedCharSequence;
        static composite(sequence: $FormattedCharSequence_): $FormattedCharSequence;
        static composite(...parts: $FormattedCharSequence_[]): $FormattedCharSequence;
        static composite(parts: $List_<$FormattedCharSequence_>): $FormattedCharSequence;
        static composite(first: $FormattedCharSequence_, second: $FormattedCharSequence_): $FormattedCharSequence;
        static composite(): $FormattedCharSequence;
        static forward(text: string, style: $Style, codePointMapper: $Int2IntFunction_): $FormattedCharSequence;
        static forward(text: string, style: $Style): $FormattedCharSequence;
        static backward(text: string, style: $Style): $FormattedCharSequence;
        static backward(text: string, style: $Style, codePointMapper: $Int2IntFunction_): $FormattedCharSequence;
        static fromPair(first: $FormattedCharSequence_, second: $FormattedCharSequence_): $FormattedCharSequence;
        static decorateOutput(sink: $FormattedCharSink_, codePointMapper: $Int2IntFunction_): $FormattedCharSink;
        static EMPTY: $FormattedCharSequence;
    }
    export interface $FormattedCharSequence {
        accept(sink: $FormattedCharSink_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FormattedCharSequence}.
     */
    export type $FormattedCharSequence_ = ((arg0: $FormattedCharSink) => boolean);
    export class $ExtraCodecs$TagOrElementLocation extends $Record {
        tag(): boolean;
        id(): $ResourceLocation;
        decoratedId(): string;
        constructor(arg0: $ResourceLocation_, arg1: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ExtraCodecs$TagOrElementLocation}.
     */
    export type $ExtraCodecs$TagOrElementLocation_ = { id?: $ResourceLocation_, tag?: boolean,  } | [id?: $ResourceLocation_, tag?: boolean, ];
    export class $InclusiveRange<T extends $Comparable<T>> extends $Record {
        isValueInRange(value: T): boolean;
        contains(value: $InclusiveRange_<T>): boolean;
        static create<T extends $Comparable<T>>(min: T, max: T): $DataResult<$InclusiveRange<T>>;
        static codec<T extends $Comparable<T>>(codec: $Codec<T>): $Codec<$InclusiveRange<T>>;
        static codec<T extends $Comparable<T>>(codec: $Codec<T>, min: T, max: T): $Codec<$InclusiveRange<T>>;
        minInclusive(): T;
        maxInclusive(): T;
        static INT: $Codec<$InclusiveRange<number>>;
        constructor(minInclusive: T, maxInclusive: T);
        constructor(value: T);
    }
    /**
     * Values that may be interpreted as {@link $InclusiveRange}.
     */
    export type $InclusiveRange_<T> = { minInclusive?: $Comparable_<T>, maxInclusive?: $Comparable_<T>,  } | [minInclusive?: $Comparable_<T>, maxInclusive?: $Comparable_<T>, ];
    export class $FormattedCharSink {
    }
    export interface $FormattedCharSink {
        /**
         * Accepts a single code point from a `FormattedCharSequence`.
         * @return `true` to accept more characters, `false` to stop traversing the sequence.
         */
        accept(positionInCurrentSequence: number, style: $Style, codePoint: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FormattedCharSink}.
     */
    export type $FormattedCharSink_ = ((arg0: number, arg1: $Style, arg2: number) => boolean);
    export class $Unit extends $Enum<$Unit> {
        static values(): $Unit[];
        static valueOf(arg0: string): $Unit;
        static CODEC: $Codec<$Unit>;
        static INSTANCE: $Unit;
    }
    /**
     * Values that may be interpreted as {@link $Unit}.
     */
    export type $Unit_ = "instance" | any;
    export class $SortedArraySet<T> extends $AbstractSet<T> {
        get(element: T): T;
        /**
         * Gets the smallest element in the set
         */
        last(): T;
        /**
         * Gets the smallest element in the set
         */
        first(): T;
        static create<T>(comparator: $Comparator<T>, initialCapacity: number): $SortedArraySet<T>;
        static create<T extends $Comparable<T>>(): $SortedArraySet<T>;
        static create<T>(comparator: $Comparator<T>): $SortedArraySet<T>;
        static create<T extends $Comparable<T>>(initialCapacity: number): $SortedArraySet<T>;
        removeInternal(size: number): void;
        addOrGet(element: T): T;
        contents: T[];
    }
    export class $StringRepresentable$StringRepresentableCodec<S extends $StringRepresentable> implements $Codec<S> {
        decode<T>(ops: $DynamicOps<T>, value: T): $DataResult<$Pair<S, T>>;
        encode<T>(input: S, ops: $DynamicOps<T>, prefix: T): $DataResult<T>;
        orElseGet(arg0: $Supplier_<S>): $Codec<S>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<S>): $Codec<S>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<S>): $Codec<S>;
        dispatch<E>(arg0: $Function_<E, S>, arg1: $Function_<S, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: string, arg1: $Function_<E, S>, arg2: $Function_<S, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<S, $DataResult<S>>): $Codec<S>;
        orElse(arg0: $UnaryOperator_<string>, arg1: S): $Codec<S>;
        orElse(arg0: $Consumer_<string>, arg1: S): $Codec<S>;
        orElse(arg0: S): $Codec<S>;
        stable(): $Codec<S>;
        comapFlatMap<S>(arg0: $Function_<S, $DataResult<S>>, arg1: $Function_<S, S>): $Codec<S>;
        optionalFieldOf(arg0: string, arg1: S): $MapCodec<S>;
        optionalFieldOf(arg0: string): $MapCodec<(S) | undefined>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: S, arg3: $Lifecycle): $MapCodec<S>;
        optionalFieldOf(arg0: string, arg1: S, arg2: $Lifecycle): $MapCodec<S>;
        listOf(arg0: number, arg1: number): $Codec<$List<S>>;
        listOf(): $Codec<$List<S>>;
        xmap<S>(arg0: $Function_<S, S>, arg1: $Function_<S, S>): $Codec<S>;
        deprecated(arg0: number): $Codec<S>;
        flatXmap<S>(arg0: $Function_<S, $DataResult<S>>, arg1: $Function_<S, $DataResult<S>>): $Codec<S>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<(S) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: S, arg2: $Lifecycle): $MapCodec<S>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: S, arg3: $Lifecycle): $MapCodec<S>;
        lenientOptionalFieldOf(arg0: string, arg1: S): $MapCodec<S>;
        mapResult(arg0: $Codec$ResultFunction<S>): $Codec<S>;
        promotePartial(arg0: $Consumer_<string>): $Codec<S>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<S>>, arg2: $Function_<S, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, S>, arg2: $Function_<S, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, S>, arg1: $Function_<S, $MapCodec<E>>): $MapCodec<E>;
        sizeLimitedListOf(arg0: number): $Codec<$List<S>>;
        flatComapMap<S>(arg0: $Function_<S, S>, arg1: $Function_<S, $DataResult<S>>): $Codec<S>;
        dispatchStable<E>(arg0: $Function_<E, S>, arg1: $Function_<S, $MapCodec<E>>): $Codec<E>;
        encodeStart<T>(ops: $DynamicOps<T>, value: S): $DataResult<T>;
        comap<B>(arg0: $Function_<B, S>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<S>>): $Encoder<B>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<S, T>>;
        map<B>(arg0: $Function_<S, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<S, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<S>;
        parse<T>(ops: $DynamicOps<T>, value: T): $DataResult<S>;
        boxed(): $Decoder$Boxed<S>;
        terminal(): $Decoder$Terminal<S>;
        simple(): $Decoder$Simple<S>;
        withLifecycle(arg0: $Lifecycle): $Encoder<S>;
        fieldOf(arg0: string): $MapEncoder<S>;
        constructor(values: S[], nameLookup: $Function_<string, S>, indexLookup: $ToIntFunction_<S>);
    }
}
