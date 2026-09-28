
declare module "@package/xaero/pac/common/player/config/api" {
    export class $IPlayerConfigPermissionAPI {
    }
    export interface $IPlayerConfigPermissionAPI {
        canEdit(): boolean;
        canView(): boolean;
        canIncludeGroupsInGroups(): boolean;
        canIncludePlayersInGroups(): boolean;
        canCreateGroups(): boolean;
        canClaimAs(): boolean;
    }
}
