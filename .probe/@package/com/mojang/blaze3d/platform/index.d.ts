import { $InputStream, $File_ } from "@package/java/io";
import { $PipelineNativeImageAccessor } from "@package/foundry/veil/mixin/pipeline/accessor";
import { $Component } from "@package/net/minecraft/network/chat";
import { $FT_Face } from "@package/org/lwjgl/util/freetype";
import { $WindowAccessor } from "@package/io/homo/superresolution/common/mixin/core/accessor";
import { $IoSupplier, $IoSupplier_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map, $List_, $OptionalInt } from "@package/java/util";
import { $NativeImageAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures";
import { $ByteBuffer } from "@package/java/nio";
import { $LazyLoadedValue } from "@package/net/minecraft/util";
import { $BiConsumer_, $IntUnaryOperator_ } from "@package/java/util/function";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Path_ } from "@package/java/nio/file";
import { $PackResources } from "@package/net/minecraft/server/packs";
import { $LocalIntRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $GLFWVidMode$Buffer, $GLFWVidMode } from "@package/org/lwjgl/glfw";
import { $CharSequence, $Enum, $AutoCloseable } from "@package/java/lang";
import { $WindowKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AccessInputConstantsKey } from "@package/com/blamejared/controlling/mixin";
import { $NativeWindowHandle } from "@package/net/caffeinemc/mods/sodium/client/platform";

declare module "@package/com/mojang/blaze3d/platform" {
    export class $NativeImage$Format extends $Enum<$NativeImage$Format> {
        setUnpackPixelStoreState(): void;
        glFormat(): number;
        hasRed(): boolean;
        hasGreen(): boolean;
        hasBlue(): boolean;
        redOffset(): number;
        greenOffset(): number;
        blueOffset(): number;
        supportedByStb(): boolean;
        hasLuminance(): boolean;
        luminanceOffset(): number;
        hasLuminanceOrRed(): boolean;
        luminanceOrRedOffset(): number;
        hasLuminanceOrGreen(): boolean;
        luminanceOrGreenOffset(): number;
        hasLuminanceOrBlue(): boolean;
        luminanceOrBlueOffset(): number;
        hasLuminanceOrAlpha(): boolean;
        luminanceOrAlphaOffset(): number;
        setPackPixelStoreState(): void;
        alphaOffset(): number;
        hasAlpha(): boolean;
        static values(): $NativeImage$Format[];
        static valueOf(arg0: string): $NativeImage$Format;
        components(): number;
        static LUMINANCE_ALPHA: $NativeImage$Format;
        static RGBA: $NativeImage$Format;
        static LUMINANCE: $NativeImage$Format;
        static RGB: $NativeImage$Format;
    }
    /**
     * Values that may be interpreted as {@link $NativeImage$Format}.
     */
    export type $NativeImage$Format_ = "rgba" | "rgb" | "luminance_alpha" | "luminance";
    export class $MonitorCreator {
    }
    export interface $MonitorCreator {
        createMonitor(monitor: number): $Monitor;
    }
    /**
     * Values that may be interpreted as {@link $MonitorCreator}.
     */
    export type $MonitorCreator_ = ((arg0: number) => $Monitor);
    export class $NativeImage implements $AutoCloseable, $PipelineNativeImageAccessor, $NativeImageAccessor {
        getPixelRGBA(x: number, y: number): number;
        getPixelsRGBA(): number[];
        fillRect(x: number, y: number, width: number, height: number, value: number): void;
        copyRect(source: $NativeImage, xFrom: number, yFrom: number, xTo: number, yTo: number, width: number, height: number, mirrorX: boolean, mirrorY: boolean): void;
        copyRect(xFrom: number, yFrom: number, xToDelta: number, yToDelta: number, width: number, height: number, mirrorX: boolean, mirrorY: boolean): void;
        flipY(): void;
        mappedCopy(_function: $IntUnaryOperator_): $NativeImage;
        applyToAllPixels(_function: $IntUnaryOperator_): void;
        setPixelLuminance(x: number, y: number, luminance: number): void;
        getRedOrLuminance(x: number, y: number): number;
        getGreenOrLuminance(x: number, y: number): number;
        getBlueOrLuminance(x: number, y: number): number;
        getLuminanceOrAlpha(x: number, y: number): number;
        blendPixel(x: number, y: number, abgrColor: number): void;
        /**
         * @deprecated
         */
        makePixelArray(): number[];
        downloadTexture(level: number, opaque: boolean): void;
        downloadDepthBuffer(unused: number): void;
        drawPixels(): void;
        copyFromFont(face: $FT_Face, index: number): boolean;
        copyFrom(other: $NativeImage): void;
        asByteArray(): number[];
        getWidth(): number;
        getHeight(): number;
        format(): $NativeImage$Format;
        static read(format: $NativeImage$Format_ | null, textureStream: $InputStream): $NativeImage;
        static read(textureStream: $InputStream): $NativeImage;
        static read(format: $NativeImage$Format_ | null, textureData: $ByteBuffer): $NativeImage;
        static read(textureData: $ByteBuffer): $NativeImage;
        static read(bytes: number[]): $NativeImage;
        close(): void;
        writeToFile(path: $Path_): void;
        writeToFile(file: $File_): void;
        untrack(): void;
        resizeSubRectTo(x: number, y: number, width: number, height: number, image: $NativeImage): void;
        upload(level: number, xOffset: number, yOffset: number, mipmap: boolean): void;
        upload(level: number, xOffset: number, yOffset: number, unpackSkipPixels: number, unpackSkipRows: number, width: number, height: number, mipmap: boolean, autoClose: boolean): void;
        upload(level: number, xOffset: number, yOffset: number, unpackSkipPixels: number, unpackSkipRows: number, width: number, height: number, blur: boolean, clamp: boolean, mipmap: boolean, autoClose: boolean): void;
        setPixelRGBA(x: number, y: number, abgrColor: number): void;
        invokeCheckAllocated(): void;
        sodium$getPixels(): number;
        getPixels(): number;
        pixels: number;
        constructor(width: number, height: number, useCalloc: boolean);
        constructor(format: $NativeImage$Format_, width: number, height: number, useCalloc: boolean);
        get pixelsRGBA(): number[];
        get width(): number;
        get height(): number;
    }
    export class $VideoMode {
        getGreenBits(): number;
        getBlueBits(): number;
        getRefreshRate(): number;
        getRedBits(): number;
        getWidth(): number;
        getHeight(): number;
        write(): string;
        static read(videoMode: string | null): ($VideoMode) | undefined;
        constructor(width: number, height: number, redBits: number, greenBits: number, blueBits: number, refreshRate: number);
        constructor(glfwVideoMode: $GLFWVidMode);
        constructor(bufferVideoMode: $GLFWVidMode$Buffer);
        get greenBits(): number;
        get blueBits(): number;
        get refreshRate(): number;
        get redBits(): number;
        get width(): number;
        get height(): number;
    }
    export class $Monitor {
        refreshVideoModes(): void;
        getVideoModeIndex(videoMode: $VideoMode): number;
        getModeCount(): number;
        getMonitor(): number;
        getPreferredVidMode(videoMode: ($VideoMode) | undefined): $VideoMode;
        getCurrentMode(): $VideoMode;
        getY(): number;
        getMode(index: number): $VideoMode;
        getX(): number;
        constructor(monitor: number);
        get modeCount(): number;
        get monitor(): number;
        get currentMode(): $VideoMode;
        get y(): number;
        get x(): number;
    }
    export class $InputConstants$Key implements $AccessInputConstantsKey {
        static getNAME_MAP$controlling_$md$3675d4$0(): $Map<any, any>;
        getNumericKeyValue(): $OptionalInt;
        getDisplayName(): $Component;
        getName(): string;
        getValue(): number;
        getType(): $InputConstants$Type;
        displayName: $LazyLoadedValue<$Component>;
        static get NAME_MAP$controlling_$md$3675d4$0(): $Map<any, any>;
        get numericKeyValue(): $OptionalInt;
        get name(): string;
        get value(): number;
        get type(): $InputConstants$Type;
    }
    export class $Window implements $AutoCloseable, $NativeWindowHandle, $WindowAccessor, $WindowKJS {
        getPreferredFullscreenVideoMode(): ($VideoMode) | undefined;
        defaultErrorCallback(error: number, description: number): void;
        modify$bhn000$veil$captureMajorVersion(arg0: number, arg1: $LocalIntRef): number;
        modify$bhn000$veil$captureMinorVersion(arg0: number, arg1: $LocalIntRef): number;
        modify$bgl000$veil$modifyMajorVersion(arg0: number, arg1: $LocalIntRef): number;
        modify$bgl000$veil$modifyMinorVersion(arg0: number, arg1: $LocalIntRef): number;
        getRefreshRate(): number;
        static checkGlfwError(errorConsumer: $BiConsumer_<number, string>): void;
        setPreferredFullscreenVideoMode(preferredFullscreenVideoMode: ($VideoMode) | undefined): void;
        changeFullscreenVideoMode(): void;
        findBestMonitor(): $Monitor;
        wrapOperation$cgi000$sodium$setAdditionalWindowHints(arg0: number, arg1: number, arg2: $CharSequence, arg3: number, arg4: number, arg5: $Operation_<any>): number;
        /**
         * Gets a pointer to the native window object that is passed to GLFW.
         */
        getWin32Handle(): number;
        getY(): number;
        getWidth(): number;
        getHeight(): number;
        close(): void;
        static getPlatform(): string;
        getX(): number;
        isFullscreen(): boolean;
        setIcon(packResources: $PackResources, iconSet: $IconSet_): void;
        setFramerateLimit(limit: number): void;
        setErrorSection(errorSection: string): void;
        getGuiScale(): number;
        /**
         * Gets a pointer to the native window object that is passed to GLFW.
         */
        getWindow(): number;
        getGuiScaledWidth(): number;
        getGuiScaledHeight(): number;
        setWidth(limit: number): void;
        setHeight(limit: number): void;
        getScreenWidth(): number;
        getScreenHeight(): number;
        setWindowed(windowedWidth: number, windowedHeight: number): void;
        toggleFullScreen(): void;
        updateVsync(vsyncEnabled: boolean): void;
        updateRawMouseInput(vsyncEnabled: boolean): void;
        setDefaultErrorCallback(): void;
        setTitle(errorSection: string): void;
        shouldClose(): boolean;
        updateDisplay(): void;
        getFramerateLimit(): number;
        calculateScale(guiScale: number, forceUnicode: boolean): number;
        setGuiScale(scaleFactor: number): void;
        kjs$loadIcons(original: $List_<$IoSupplier_<$InputStream>>): $List<$IoSupplier<$InputStream>>;
        super_resolution$getFramebufferWidth(): number;
        super_resolution$getFramebufferHeight(): number;
        static BASE_HEIGHT: number;
        static BASE_WIDTH: number;
        constructor(eventHandler: $WindowEventHandler, screenManager: $ScreenManager, displayData: $DisplayData, preferredFullscreenVideoMode: string | null, title: string);
        get refreshRate(): number;
        get win32Handle(): number;
        get y(): number;
        static get platform(): string;
        get x(): number;
        get fullscreen(): boolean;
        set errorSection(value: string);
        get window(): number;
        get guiScaledWidth(): number;
        get guiScaledHeight(): number;
        get screenWidth(): number;
        get screenHeight(): number;
        set title(value: string);
    }
    export class $InputConstants$Type extends $Enum<$InputConstants$Type> {
        static values(): $InputConstants$Type[];
        static valueOf(arg0: string): $InputConstants$Type;
        getOrCreate(keyCode: number): $InputConstants$Key;
        static SCANCODE: $InputConstants$Type;
        static MOUSE: $InputConstants$Type;
        static KEYSYM: $InputConstants$Type;
    }
    /**
     * Values that may be interpreted as {@link $InputConstants$Type}.
     */
    export type $InputConstants$Type_ = "keysym" | "scancode" | "mouse";
    export class $ScreenManager {
        getMonitor(monitorID: number): $Monitor;
        findBestMonitor(window: $Window): $Monitor;
        shutdown(): void;
        static clamp(value: number, min: number, max: number): number;
        constructor(monitorCreator: $MonitorCreator_);
    }
    export class $WindowEventHandler {
    }
    export interface $WindowEventHandler {
        setWindowActive(windowActive: boolean): void;
        resizeDisplay(): void;
        cursorEntered(): void;
        set windowActive(value: boolean);
    }
    export class $IconSet extends $Enum<$IconSet> {
        getStandardIcons(resources: $PackResources): $List<$IoSupplier<$InputStream>>;
        getMacIcon(resources: $PackResources): $IoSupplier<$InputStream>;
        static values(): $IconSet[];
        static valueOf(arg0: string): $IconSet;
        static SNAPSHOT: $IconSet;
        static RELEASE: $IconSet;
    }
    /**
     * Values that may be interpreted as {@link $IconSet}.
     */
    export type $IconSet_ = "release" | "snapshot";
    export class $DisplayData {
        fullscreenHeight: $OptionalInt;
        fullscreenWidth: $OptionalInt;
        width: number;
        height: number;
        isFullscreen: boolean;
        constructor(width: number, height: number, fullscreenWidth: $OptionalInt, fullscreenHeight: $OptionalInt, isFullscreen: boolean);
    }
}
