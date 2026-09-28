
declare module "@package/gg/essential/mixins/ext/client/multiplayer" {
    export class $ServerDataExt {
    }
    export interface $ServerDataExt {
        getEssential$isTrusted(): boolean;
        setEssential$isTrusted(arg0: boolean): void;
        getEssential$pingRegion(): string;
        setEssential$pingRegion(arg0: string): void;
        getEssential$pingOverride(): number;
        setEssential$pingOverride(arg0: number): void;
        getEssential$skipModCompatCheck(): boolean;
        setEssential$skipModCompatCheck(arg0: boolean): void;
        getEssential$shareWithFriends(): boolean;
        setEssential$shareWithFriends(arg0: boolean): void;
        getEssential$showDownloadIcon(): boolean;
        setEssential$showDownloadIcon(arg0: boolean): void;
        getEssential$recommendedVersion(): string;
        setEssential$recommendedVersion(arg0: string): void;
    }
}
