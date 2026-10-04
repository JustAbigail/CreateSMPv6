import { $ShaderPack } from "@package/net/irisshaders/iris/shaderpack";
import { $Function_ } from "@package/java/util/function";
import { $AbsolutePackPath } from "@package/net/irisshaders/iris/shaderpack/include";
import { $IndirectPointer, $ProgramDirectives, $PackDirectives, $ShaderProperties } from "@package/net/irisshaders/iris/shaderpack/properties";
import { $ProgramArrayId_, $ProgramId_ } from "@package/net/irisshaders/iris/shaderpack/loading";
import { $BlendModeOverride } from "@package/net/irisshaders/iris/gl/blending";
import { $Vector2f, $Vector3i } from "@package/org/joml";

declare module "@package/net/irisshaders/iris/shaderpack/programs" {
    export class $ProgramSource {
        getDirectives(): $ProgramDirectives;
        getGeometrySource(): (string) | undefined;
        getVertexSource(): (string) | undefined;
        getTessControlSource(): (string) | undefined;
        getTessEvalSource(): (string) | undefined;
        getFragmentSource(): (string) | undefined;
        requireValid(): ($ProgramSource) | undefined;
        withDirectiveOverride(arg0: $ProgramDirectives): $ProgramSource;
        isValid(): boolean;
        getName(): string;
        getParent(): $ProgramSet;
        constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: $ProgramSet, arg7: $ShaderProperties, arg8: $BlendModeOverride);
        get directives(): $ProgramDirectives;
        get geometrySource(): (string) | undefined;
        get vertexSource(): (string) | undefined;
        get tessControlSource(): (string) | undefined;
        get tessEvalSource(): (string) | undefined;
        get fragmentSource(): (string) | undefined;
        get valid(): boolean;
        get name(): string;
        get parent(): $ProgramSet;
    }
    export class $ComputeSource {
        getWorkGroupRelative(): $Vector2f;
        getWorkGroups(): $Vector3i;
        getIndirectPointer(): $IndirectPointer;
        setWorkGroupRelative(arg0: $Vector2f): void;
        setWorkGroups(arg0: $Vector3i): void;
        requireValid(): ($ComputeSource) | undefined;
        getSource(): (string) | undefined;
        isValid(): boolean;
        getName(): string;
        getParent(): $ProgramSet;
        constructor(arg0: string, arg1: string, arg2: $ProgramSet, arg3: $ShaderProperties);
        get indirectPointer(): $IndirectPointer;
        get source(): (string) | undefined;
        get valid(): boolean;
        get name(): string;
        get parent(): $ProgramSet;
    }
    export class $ProgramSetInterface {
    }
    export interface $ProgramSetInterface {
    }
    export class $ProgramFallbackResolver {
        resolveNullable(arg0: $ProgramId_): $ProgramSource;
        has(arg0: $ProgramId_): boolean;
        resolve(arg0: $ProgramId_): ($ProgramSource) | undefined;
        constructor(arg0: $ProgramSet);
    }
    export class $ProgramSet implements $ProgramSetInterface {
        getPack(): $ShaderPack;
        getPackDirectives(): $PackDirectives;
        getComposite(arg0: $ProgramArrayId_): $ProgramSource[];
        getShadowCompute(): $ComputeSource[];
        getCompute(arg0: $ProgramArrayId_): $ComputeSource[][];
        getSetup(): $ComputeSource[];
        getFinalCompute(): $ComputeSource[];
        get(arg0: $ProgramId_): ($ProgramSource) | undefined;
        constructor(arg0: $AbsolutePackPath, arg1: $Function_<$AbsolutePackPath, string>, arg2: $ShaderProperties, arg3: $ShaderPack);
        get pack(): $ShaderPack;
        get packDirectives(): $PackDirectives;
        get shadowCompute(): $ComputeSource[];
        get setup(): $ComputeSource[];
        get finalCompute(): $ComputeSource[];
    }
}
