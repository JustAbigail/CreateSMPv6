import { $SoundSource } from "@package/net/minecraft/sounds";
import { $SoundEngine, $WeighedSoundEvents, $SoundBufferLibrary, $Weighted, $SoundManager } from "@package/net/minecraft/client/sounds";
import { $SampledFloat, $SampledFloat_ } from "@package/net/minecraft/util/valueproviders";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceLocation_, $ResourceLocation, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $FabricSoundInstance } from "@package/net/fabricmc/fabric/api/client/sound/v1";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/client/resources/sounds" {
    export class $TickableSoundInstance {
    }
    export interface $TickableSoundInstance extends $SoundInstance {
        tick(): void;
        isStopped(): boolean;
        get stopped(): boolean;
    }
    export class $SoundInstance {
        static createUnseededRandom(): $RandomSource;
    }
    export interface $SoundInstance extends $FabricSoundInstance {
        getVolume(): number;
        getPitch(): number;
        getStream(arg0: $SoundBufferLibrary, arg1: $Sound, arg2: boolean): $CompletableFuture<any>;
        getDelay(): number;
        getY(): number;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        isLooping(): boolean;
        getAttenuation(): $SoundInstance$Attenuation;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        canStartSilent(): boolean;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        canPlaySound(): boolean;
        getSource(): $SoundSource;
        getLocation(): $ResourceLocation;
        resolve(manager: $SoundManager): $WeighedSoundEvents;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        isRelative(): boolean;
        getX(): number;
        getZ(): number;
        getSound(): $Sound;
        get volume(): number;
        get pitch(): number;
        get delay(): number;
        get y(): number;
        get looping(): boolean;
        get attenuation(): $SoundInstance$Attenuation;
        get source(): $SoundSource;
        get location(): $ResourceLocation;
        get relative(): boolean;
        get x(): number;
        get z(): number;
        get sound(): $Sound;
    }
    export class $Sound implements $Weighted<$Sound> {
        getVolume(): $SampledFloat;
        getPitch(): $SampledFloat;
        /**
         * Preloads the sound if required by the sound engine.
         * This method is called to preload the sound associated with the element into the sound engine, ensuring it is ready for playback.
         */
        preloadIfRequired(engine: $SoundEngine): void;
        shouldStream(): boolean;
        shouldPreload(): boolean;
        /**
         * @return The weight of the element
         */
        getAttenuationDistance(): number;
        getLocation(): $ResourceLocation;
        getType(): $Sound$Type;
        getPath(): $ResourceLocation;
        /**
         * @return The weight of the element
         */
        getWeight(): number;
        getSound(arg0: $RandomSource): $Sound;
        static SOUND_LISTER: $FileToIdConverter;
        constructor(location: $ResourceLocation_, volume: $SampledFloat_, pitch: $SampledFloat_, weight: number, type: $Sound$Type_, stream: boolean, preload: boolean, attenuationDistance: number);
        get volume(): $SampledFloat;
        get pitch(): $SampledFloat;
        get attenuationDistance(): number;
        get location(): $ResourceLocation;
        get type(): $Sound$Type;
        get path(): $ResourceLocation;
        get weight(): number;
    }
    export class $SoundInstance$Attenuation extends $Enum<$SoundInstance$Attenuation> {
        static values(): $SoundInstance$Attenuation[];
        static valueOf(arg0: string): $SoundInstance$Attenuation;
        static NONE: $SoundInstance$Attenuation;
        static LINEAR: $SoundInstance$Attenuation;
    }
    /**
     * Values that may be interpreted as {@link $SoundInstance$Attenuation}.
     */
    export type $SoundInstance$Attenuation_ = "none" | "linear";
    export class $Sound$Type extends $Enum<$Sound$Type> {
        static values(): $Sound$Type[];
        static valueOf(name: string): $Sound$Type;
        static getByName(name: string): $Sound$Type;
        static SOUND_EVENT: $Sound$Type;
        static FILE: $Sound$Type;
    }
    /**
     * Values that may be interpreted as {@link $Sound$Type}.
     */
    export type $Sound$Type_ = "file" | "sound_event";
}
