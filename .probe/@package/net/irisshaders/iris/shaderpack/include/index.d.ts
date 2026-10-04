import { $Function_ } from "@package/java/util/function";
import { $LineTransform, $LineTransform_ } from "@package/net/irisshaders/iris/shaderpack/transform/line";
import { $RusticError } from "@package/net/irisshaders/iris/shaderpack/error";
import { $Path_, $Path } from "@package/java/nio/file";
import { $ImmutableList, $ImmutableMap } from "@package/com/google/common/collect";
import { $List } from "@package/java/util";

declare module "@package/net/irisshaders/iris/shaderpack/include" {
    export class $AbsolutePackPath {
        getPathString(): string;
        static fromAbsolutePath(arg0: string): $AbsolutePackPath;
        parent(): ($AbsolutePackPath) | undefined;
        resolve(arg0: string): $AbsolutePackPath;
        resolved(arg0: $Path_): $Path;
        get pathString(): string;
    }
    export class $IncludeGraph {
        getNodes(): $ImmutableMap<$AbsolutePackPath, $FileNode>;
        getFailures(): $ImmutableMap<$AbsolutePackPath, $RusticError>;
        computeWeaklyConnectedComponents(): $List<$IncludeGraph>;
        map(arg0: $Function_<$AbsolutePackPath, $LineTransform>): $IncludeGraph;
        constructor(arg0: $Path_, arg1: $ImmutableList<$AbsolutePackPath>, arg2: boolean);
        get nodes(): $ImmutableMap<$AbsolutePackPath, $FileNode>;
        get failures(): $ImmutableMap<$AbsolutePackPath, $RusticError>;
    }
    export class $FileNode {
        getIncludes(): $ImmutableMap<number, $AbsolutePackPath>;
        map(arg0: $LineTransform_): $FileNode;
        getPath(): $AbsolutePackPath;
        getLines(): $ImmutableList<string>;
        constructor(arg0: $AbsolutePackPath, arg1: $ImmutableList<string>);
        get includes(): $ImmutableMap<number, $AbsolutePackPath>;
        get path(): $AbsolutePackPath;
        get lines(): $ImmutableList<string>;
    }
}
