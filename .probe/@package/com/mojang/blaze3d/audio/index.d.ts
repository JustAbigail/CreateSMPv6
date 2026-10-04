import { $ChannelAccessor as $ChannelAccessor$1 } from "@package/dev/ryanhcode/sable/mixin/sublevel_sounds";
import { $AudioStream } from "@package/net/minecraft/client/sounds";
import { $AudioFormat } from "@package/javax/sound/sampled";
import { $ChannelAccessor } from "@package/com/sonicether/soundphysics/mixin";
import { $Record } from "@package/java/lang";
import { $OptionalInt } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Blaze3DAudioChannelAccessor } from "@package/rbasamoyai/createbigcannons/mixin/client";

declare module "@package/com/mojang/blaze3d/audio" {
    /**
     * Represents an OpenAL audio channel.
     */
    export class $Channel implements $Blaze3DAudioChannelAccessor, $ChannelAccessor$1, $ChannelAccessor {
        /**
         * Sets linear attenuation for the audio channel.
         */
        setVolume(linearAttenuation: number): void;
        /**
         * Attaches a buffer stream to the audio channel.
         */
        attachBufferStream(stream: $AudioStream): void;
        /**
         * Attaches a static buffer to the audio channel.
         */
        attachStaticBuffer(buffer: $SoundBuffer): void;
        /**
         * Sets linear attenuation for the audio channel.
         */
        linearAttenuation(linearAttenuation: number): void;
        /**
         * Stops the audio channel and releases resources.
         */
        disableAttenuation(): void;
        /**
         * Sets whether the audio channel should loop.
         */
        setLooping(looping: boolean): void;
        /**
         * Sets the position of the audio channel.
         */
        setSelfPosition(source: $Vec3_): void;
        /**
         * Sets whether the audio channel should loop.
         */
        setRelative(looping: boolean): void;
        /**
         * Stops the audio channel and releases resources.
         */
        updateStream(): void;
        /**
         * @return `true` if the audio channel is currently playing, `false` otherwise
         */
        playing(): boolean;
        /**
         * Stops the audio channel and releases resources.
         */
        unpause(): void;
        /**
         * Stops the audio channel and releases resources.
         */
        stop(): void;
        /**
         * Stops the audio channel and releases resources.
         */
        destroy(): void;
        /**
         * @return `true` if the audio channel is currently playing, `false` otherwise
         */
        stopped(): boolean;
        /**
         * Stops the audio channel and releases resources.
         */
        pause(): void;
        /**
         * Sets linear attenuation for the audio channel.
         */
        setPitch(linearAttenuation: number): void;
        /**
         * Stops the audio channel and releases resources.
         */
        play(): void;
        /**
         * @return the state of the audio channel
         */
        getSource(): number;
        static BUFFER_DURATION_SECONDS: number;
        set volume(value: number);
        set looping(value: boolean);
        set selfPosition(value: $Vec3_);
        set relative(value: boolean);
        set pitch(value: number);
        get source(): number;
    }
    export class $ListenerTransform extends $Record {
        up(): $Vec3;
        position(): $Vec3;
        right(): $Vec3;
        forward(): $Vec3;
        static INITIAL: $ListenerTransform;
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $ListenerTransform}.
     */
    export type $ListenerTransform_ = { position?: $Vec3_, forward?: $Vec3_, up?: $Vec3_,  } | [position?: $Vec3_, forward?: $Vec3_, up?: $Vec3_, ];
    /**
     * The SoundBuffer class represents an audio buffer containing audio data in a particular format.
     * 
     * The audio data can be used to create an OpenAL buffer, which can be played in a 3D audio environment.
     */
    export class $SoundBuffer {
        /**
         * Returns an OptionalInt containing the OpenAL buffer handle for this SoundBuffer.
         * If the buffer has not been created yet, creates the buffer and returns the handle.
         * If the buffer cannot be created, returns an empty OptionalInt.
         * @return An OptionalInt containing the OpenAL buffer handle, or an empty OptionalInt if the buffer cannot be created.
         */
        releaseAlBuffer(): $OptionalInt;
        /**
         * Deletes the OpenAL buffer associated with this SoundBuffer, if it exists.
         */
        discardAlBuffer(): void;
        constructor(data: $ByteBuffer, format: $AudioFormat);
    }
}
