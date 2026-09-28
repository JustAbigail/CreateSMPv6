import { $CompletableFuture } from "@package/java/util/concurrent";
import { $SoundBuffer, $ListenerTransform } from "@package/com/mojang/blaze3d/audio";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Quaternion } from "@package/gg/essential/model/util";
import { $Minecraft, $Camera, $Options } from "@package/net/minecraft/client";
import { $ResourceManager, $SimplePreparableReloadListener, $ResourceProvider_, $ResourceProvider } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $Map$Entry, $Collection_, $Collection } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SoundSource_, $Music } from "@package/net/minecraft/sounds";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Sound, $TickableSoundInstance, $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Vec3 } from "@package/gg/essential/lib/kotgl/matrix/vectors";
import { $Object } from "@package/java/lang";
import { $Closeable } from "@package/java/io";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $SoundSystemExt } from "@package/gg/essential/mixins/impl/client/audio";
import { $Component } from "@package/net/minecraft/network/chat";
import { $AudioFormat } from "@package/javax/sound/sampled";
import { $SoundBufferLibraryAccessor } from "@package/team/creative/ambientsounds/mixin";
import { $MusicManagerAccessor } from "@package/dev/eriksonn/aeronautics/mixin/custom_situational_music";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundExtension } from "@package/dev/simulated_team/simulated/mixin_interface/sounds";

declare module "@package/net/minecraft/client/sounds" {
    /**
     * The SoundEventListener interface defines a listener for sound events.
     * Classes implementing this interface can be registered as listeners to receive notifications when a sound is played.
     */
    export class $SoundEventListener {
    }
    export interface $SoundEventListener {
        onPlaySound(sound: $SoundInstance, accessor: $WeighedSoundEvents, range: number): void;
    }
    /**
     * Values that may be interpreted as {@link $SoundEventListener}.
     */
    export type $SoundEventListener_ = ((arg0: $SoundInstance, arg1: $WeighedSoundEvents, arg2: number) => void);
    /**
     * The Weighted interface represents an element with a weight in a weighted collection.
     * It is used to provide weighted selection and retrieval of elements.
     * 
     * @param  The type of the element
     */
    export class $Weighted<T> {
    }
    export interface $Weighted<T> {
        /**
         * Preloads the sound if required by the sound engine.
         * This method is called to preload the sound associated with the element into the sound engine, ensuring it is ready for playback.
         */
        preloadIfRequired(engine: $SoundEngine): void;
        /**
         * @return The weight of the element
         */
        getWeight(): number;
        /**
         * Retrieves the sound associated with the element.
         * The sound is obtained using the provided random source.
         * 
         * @return The sound associated with the element
         */
        getSound(randomSource: $RandomSource): T;
    }
    /**
     * The SoundManager class is responsible for managing sound events and playing sounds.
     * It handles sound event registrations, caching of sound resources, and sound playback.
     */
    export class $SoundManager extends $SimplePreparableReloadListener<$SoundManager$Preparations> implements $SoundExtension, $IdentifiableResourceReloadListener, $SoundSystemExt {
        /**
         * @return The collection of available sound event locations
         */
        getAvailableSounds(): $Collection<$ResourceLocation>;
        /**
         * Updates the volume of the specified sound source category.
         */
        updateSourceVolume(category: $SoundSource_, volume: number): void;
        /**
         * Retrieves a list of available sound devices.
         */
        getAvailableSoundDevices(): $List<string>;
        handler$gej000$sounds$$sounds_clear_found(arg0: $ResourceManager, arg1: $ProfilerFiller, arg2: $CallbackInfoReturnable<any>): void;
        handler$gej000$sounds$$sounds_capture_soundsjson(arg0: $ResourceManager, arg1: $ProfilerFiller, arg2: $CallbackInfoReturnable<any>, arg3: string, arg4: $Map$Entry<any, any>): void;
        getListenerTransform(): $ListenerTransform;
        /**
         * Validates a sound resource
         * 
         * @return `true` if the sound resource is valid, `false` otherwise
         */
        static validateSoundResource(sound: $Sound, location: $ResourceLocation_, resourceProvider: $ResourceProvider_): boolean;
        /**
         * Queues a ticking sound to be played.
         */
        queueTickingSound(tickableSound: $TickableSoundInstance): void;
        getDebugString(): string;
        /**
         * Checks if the specified sound is active (playing or scheduled to be played).
         * @return `true` if the sound is active, `false` otherwise
         */
        simulated$isSoundPlaying(sound: $SoundInstance): boolean;
        essential$getListenerPosition(): $Vec3;
        essential$getListenerRotation(): $Quaternion;
        /**
         * @return The sound event associated with the specific ResourceLocation, or `null` if not found
         */
        getSoundEvent(location: $ResourceLocation_): $WeighedSoundEvents;
        reload(): void;
        /**
         * Applies the prepared sound event registrations and caches to the sound manager.
         */
        apply(object: $SoundManager$Preparations, resourceManager: $ResourceManager, profiler: $ProfilerFiller): void;
        stop(): void;
        /**
         * Stops all sounds associated with the specified ID and category.
         */
        stop(id: $ResourceLocation_ | null, category: $SoundSource_ | null): void;
        /**
         * Play a sound
         */
        stop(sound: $SoundInstance): void;
        resume(): void;
        destroy(): void;
        /**
         * Performs any reloading that can be done off-thread, such as file IO
         */
        prepare(resourceManager: $ResourceManager, profiler: $ProfilerFiller): $SoundManager$Preparations;
        /**
         * Checks if the specified sound is active (playing or scheduled to be played).
         * @return `true` if the sound is active, `false` otherwise
         */
        isActive(sound: $SoundInstance): boolean;
        /**
         * Updates the sound manager's tick state.
         */
        tick(isGamePaused: boolean): void;
        removeListener(listener: $SoundEventListener_): void;
        addListener(listener: $SoundEventListener_): void;
        emergencyShutdown(): void;
        /**
         * Updates the sound source position based on the active render info.
         */
        updateSource(activeRenderInfo: $Camera): void;
        pause(): void;
        /**
         * Play a sound
         */
        play(sound: $SoundInstance): void;
        /**
         * Plays a sound with a delay in ticks.
         */
        playDelayed(sound: $SoundInstance, delay: number): void;
        getFabricId(): $ResourceLocation;
        /**
         * @return The collection of available sound event locations
         */
        getFabricDependencies(): $Collection<any>;
        static EMPTY_SOUND: $Sound;
        static INTENTIONALLY_EMPTY_SOUND_EVENT: $WeighedSoundEvents;
        static EMPTY_SOUND_LOCATION: $ResourceLocation;
        static LOGGER: $Logger;
        static INTENTIONALLY_EMPTY_SOUND_LOCATION: $ResourceLocation;
        static INTENTIONALLY_EMPTY_SOUND: $Sound;
        constructor(options: $Options);
    }
    /**
     * The Preparations class represents the prepared sound event registrations and caches for applying to the sound manager.
     */
    export class $SoundManager$Preparations {
    }
    export class $AudioStream {
    }
    export interface $AudioStream extends $Closeable {
        /**
         * @return the AudioFormat of the stream
         */
        getFormat(): $AudioFormat;
        /**
         * Reads audio data from the stream and returns a byte buffer containing at most the specified number of bytes.
         * The method reads audio frames from the stream and adds them to the output buffer until the buffer contains at least the specified number of bytes or the end fo the stream is reached.
         * @return a byte buffer containing at most the specified number of bytes to read
         * @throws IOException if an I/O error occurs while reading the audio data
         */
        read(size: number): $ByteBuffer;
    }
    /**
     * The MusicManager class manages the playing of music in Minecraft.
     */
    export class $MusicManager implements $MusicManagerAccessor {
        handler$zhm000$betternether$bn_startPlaying(arg0: $Music, arg1: $CallbackInfo): void;
        handler$zhm000$betternether$bn_onTick(arg0: $CallbackInfo): void;
        handler$ddn000$betterend$be_onTick(arg0: $CallbackInfo): void;
        /**
         * Starts playing the specified Music selector.
         */
        startPlaying(selector: $Music): void;
        handler$ddn000$betterend$be_startPlaying(arg0: $Music, arg1: $CallbackInfo): void;
        /**
         * Starts playing the specified Music selector.
         */
        stopPlaying(selector: $Music): void;
        /**
         * Stops playing the current Music selector.
         */
        stopPlaying(): void;
        /**
         * Stops playing the current Music selector.
         */
        tick(): void;
        /**
         * @return `true` if the Music selector is currently playing, `false` otherwise
         */
        isPlayingMusic(selector: $Music): boolean;
        getNextSongDelay(): number;
        setNextSongDelay(arg0: number): void;
        getCurrentMusic(): $SoundInstance;
        constructor(minecraft: $Minecraft);
    }
    /**
     * The `SoundEngine` class handles the management and playback of sounds in the game.
     */
    export class $SoundEngine implements $SoundExtension, $SoundSystemExt {
        getAvailableSoundDevices(): $List<string>;
        wrapMethod$fho000$asyncparticles$wrapStop(soundName: $ResourceLocation_, category: $SoundSource_, original: $Operation_<any>): void;
        /**
         * Requests a specific Sound instance to be preloaded.
         */
        requestPreload(sound: $Sound): void;
        wrapMethod$fho000$asyncparticles$wrapReload(original: $Operation_<any>): void;
        wrapMethod$fho000$asyncparticles$wrapUpdateCategoryVolume(category: $SoundSource_, volume: number, original: $Operation_<any>): void;
        wrapMethod$fho000$asyncparticles$wrapAddEventListener(listener: $SoundEventListener_, original: $Operation_<any>): void;
        handler$fho000$asyncparticles$injectTick(ci: $CallbackInfo): void;
        redirect$fho000$asyncparticles$redirectIsActive(instance: $Map_<any, any>, o: $Object): $Object;
        wrapMethod$fho000$asyncparticles$wrapPlay(soundInstance: $SoundInstance, original: $Operation_<any>): void;
        wrapMethod$fho000$asyncparticles$wrapQueueTickingSound(tickableSound: $TickableSoundInstance, original: $Operation_<any>): void;
        wrapMethod$fho000$asyncparticles$wrapRequestPreload(sound: $Sound, original: $Operation_<any>): void;
        wrapMethod$fho000$asyncparticles$wrapPlayDelayed(sound: $SoundInstance, delay: number, original: $Operation_<any>): void;
        getListenerTransform(): $ListenerTransform;
        /**
         * Queues a new TickingCodeInstance
         */
        queueTickingSound(tickableSound: $TickableSoundInstance): void;
        /**
         * Updates the volume for a specific sound category.
         * 
         * If the sound engine has not been loaded, the method returns without performing any action.
         * 
         * If the category is the "MASTER" category, the overall listener gain (volume) is set to the specified value.
         * 
         * For other categories, the volume is updated for each sound instance associated with the category.
         * 
         * If the calculated volume for an instance is less than or equal to 0.0, the instance is stopped.
         * Otherwise, the volume of the instance is set to the calculated value.
         */
        updateCategoryVolume(category: $SoundSource_, volume: number): void;
        getDebugString(): string;
        /**
         * @return `true` if the SoundInstance is active, `false` otherwise
         */
        simulated$isSoundPlaying(sound: $SoundInstance): boolean;
        essential$getListenerPosition(): $Vec3;
        essential$getListenerRotation(): $Quaternion;
        removeEventListener(listener: $SoundEventListener_): void;
        addEventListener(listener: $SoundEventListener_): void;
        /**
         * Cleans up the Sound System
         */
        stopAll(): void;
        /**
         * Cleans up the Sound System
         */
        reload(): void;
        /**
         * Plays a given sound instance.
         * 
         * If the sound engine is not loaded or the sound instance cannot be played, the method returns early.
         * 
         * The method fulfills the following parts:
         * 
         * - Performs a series of checks to determine if it can play a sound
         * - Handles the playing of instances of `SoundInstance`
         * - Logs potential errors that may have occured
         * - Handles mapping instances of `SoundInstance` to specific audio channels
         * - Handles deletion times for active instances of `SoundInstance`
         * - Calculates and handles various sound properties such as volume, pitch, attenuation, looping, position and relative,
         * 
         * @implNote This method assumes proper synchronization or that thread confinement mechanisms are in place.
         */
        stop(sound: $SoundInstance): void;
        stop(soundName: $ResourceLocation_ | null, category: $SoundSource_ | null): void;
        /**
         * Cleans up the Sound System
         */
        resume(): void;
        /**
         * Cleans up the Sound System
         */
        destroy(): void;
        /**
         * @return `true` if the SoundInstance is active, `false` otherwise
         */
        isActive(sound: $SoundInstance): boolean;
        /**
         * Ticks all active instances of  `TickableSoundInstance`
         */
        tick(isGamePaused: boolean): void;
        /**
         * Cleans up the Sound System
         */
        emergencyShutdown(): void;
        updateSource(renderInfo: $Camera): void;
        /**
         * Cleans up the Sound System
         */
        pause(): void;
        /**
         * Plays a given sound instance.
         * 
         * If the sound engine is not loaded or the sound instance cannot be played, the method returns early.
         * 
         * The method fulfills the following parts:
         * 
         * - Performs a series of checks to determine if it can play a sound
         * - Handles the playing of instances of `SoundInstance`
         * - Logs potential errors that may have occured
         * - Handles mapping instances of `SoundInstance` to specific audio channels
         * - Handles deletion times for active instances of `SoundInstance`
         * - Calculates and handles various sound properties such as volume, pitch, attenuation, looping, position and relative,
         * 
         * @implNote This method assumes proper synchronization or that thread confinement mechanisms are in place.
         */
        play(sound: $SoundInstance): void;
        /**
         * Adds a sound to play in n ticks
         */
        playDelayed(sound: $SoundInstance, delay: number): void;
        static MISSING_SOUND: string;
        soundManager: $SoundManager;
        static OPEN_AL_SOFT_PREFIX: string;
        static OPEN_AL_SOFT_PREFIX_LENGTH: number;
        constructor(soundManager: $SoundManager, options: $Options, resourceManager: $ResourceProvider_);
    }
    /**
     * The SoundBufferLibrary class provides a cache containing instances of SoundBuffer and AudioStream for use in Minecraft sound handling.
     */
    export class $SoundBufferLibrary implements $SoundBufferLibraryAccessor {
        /**
         * @return Returns a CompletableFuture containing the complete SoundBuffer. The SoundBuffer is loaded asynchronously and cached.
         */
        getCompleteBuffer(soundID: $ResourceLocation_): $CompletableFuture<$SoundBuffer>;
        /**
         * @return Returns a CompletableFuture containing the AudioStream. The AudioStream is loaded asynchronously.
         */
        getStream(resourceLocation: $ResourceLocation_, isWrapper: boolean): $CompletableFuture<$AudioStream>;
        /**
         * Clears the cache of all SoundBuffer instances.
         */
        clear(): void;
        /**
         * Preloads the SoundBuffer objects for the specified collection of sounds.
         * 
         * @return a CompletableFuture representing the completion of the preload operation
         */
        preload(sounds: $Collection_<$Sound>): $CompletableFuture<never>;
        getResourceManager(): $ResourceProvider;
        constructor(resourceManager: $ResourceProvider_);
    }
    /**
     * The WeighedSoundEvents class represents a collection of weighted sound events.
     * It implements the Weighted interface to provide weighted selection of sounds.
     */
    export class $WeighedSoundEvents implements $Weighted<$Sound> {
        /**
         * Preloads the sound events into the sound engine if required.
         * This method is called to preload the sounds associated with the sound events into the sound engine, ensuring they are ready for playback.
         */
        preloadIfRequired(engine: $SoundEngine): void;
        /**
         * Adds a sound event to the collection.
         */
        addSound(accessor: $Weighted<$Sound>): void;
        /**
         * @return The subtitle component, or `null` if no subtitle is provided
         */
        getSubtitle(): $Component;
        /**
         * Retrieves the total weight of the sound events.
         * The weight is calculated as the sum of the weights of all the individual sound events.
         * 
         * @return The total weight of the sound events
         */
        getWeight(): number;
        /**
         * Retrieves a randomly selected sound from the sound events based on their weights.
         * The selection is performed using the provided random source.
         * 
         * @return A randomly selected sound from the sound events
         * The random source used for sound selection
         */
        getSound(randomSource: $RandomSource): $Sound;
        constructor(location: $ResourceLocation_, subtitleKey: string | null);
    }
}
