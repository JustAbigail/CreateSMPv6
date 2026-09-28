
declare module "@package/software/bernie/geckolib/animation/keyframe/event/data" {
    export class $ParticleKeyframeData extends $KeyFrameData {
        getEffect(): string;
        getLocator(): string;
        script(): string;
        constructor(arg0: number, arg1: string, arg2: string, arg3: string);
    }
    export class $CustomInstructionKeyframeData extends $KeyFrameData {
        getInstructions(): string;
        constructor(arg0: number, arg1: string);
    }
    export class $SoundKeyframeData extends $KeyFrameData {
        getSound(): string;
        constructor(arg0: number, arg1: string);
    }
}
