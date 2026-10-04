import { $WorldGenerationInfo_ } from "@package/com/mojang/realmsclient/util";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Enum } from "@package/java/lang";
import { $List, $UUID_, $List_ } from "@package/java/util";
import { $RealmsNews, $ServerActivityList, $RealmsServerAddress, $Ops, $RealmsServerList, $BackupList, $UploadInfo, $WorldTemplatePaginatedList, $RealmsServer, $RealmsServerPlayerLists, $PingResult, $PendingInvitesList, $Subscription, $RealmsWorldOptions, $WorldDownload, $RealmsServer$WorldType_, $RealmsNotification } from "@package/com/mojang/realmsclient/dto";

declare module "@package/com/mojang/realmsclient/client" {
    export class $RealmsClient {
        invite(worldId: number, arg1: string): $RealmsServer;
        deop(worldId: number, arg1: $UUID_): $Ops;
        createSnapshotRealm(parentId: number): $RealmsServer;
        getOwnRealm(id: number): $RealmsServer;
        initializeRealm(worldId: number, arg1: string, name: string): void;
        hasParentalConsent(): boolean;
        clientCompatible(): $RealmsClient$CompatibleVersionResponse;
        uninvite(worldId: number, arg1: $UUID_): void;
        uninviteMyselfFrom(worldId: number): void;
        backupsFor(worldId: number): $BackupList;
        updateSlot(worldId: number, arg1: number, slotId: $RealmsWorldOptions): void;
        switchSlot(worldId: number, arg1: number): boolean;
        restoreWorld(worldId: number, arg1: string): void;
        fetchWorldTemplates(page: number, pageSize: number, worldType: $RealmsServer$WorldType_): $WorldTemplatePaginatedList;
        putIntoMinigameMode(worldId: number, arg1: string): boolean;
        resetWorldWithSeed(worldId: number, arg1: $WorldGenerationInfo_): boolean;
        resetWorldWithTemplate(worldId: number, arg1: string): boolean;
        subscriptionFor(worldId: number): $Subscription;
        pendingInvites(): $PendingInvitesList;
        acceptInvitation(inviteId: string): void;
        requestDownloadInfo(worldId: number, arg1: number): $WorldDownload;
        requestUploadInfo(worldId: number, arg1: string | null): $UploadInfo;
        rejectInvitation(inviteId: string): void;
        agreeToTos(): void;
        deleteRealm(worldId: number): void;
        notificationsDismiss(uuidList: $List_<$UUID_>): void;
        sendPingResults(pingResult: $PingResult): void;
        notificationsSeen(uuidList: $List_<$UUID_>): void;
        pendingInvitesCount(): number;
        trialAvailable(): boolean;
        getNews(): $RealmsNews;
        getLiveStats(): $RealmsServerPlayerLists;
        listRealms(): $RealmsServerList;
        listSnapshotEligibleRealms(): $List<$RealmsServer>;
        getNotifications(): $List<$RealmsNotification>;
        update(worldId: number, arg1: string, name: string): void;
        join(serverId: number): $RealmsServerAddress;
        op(worldId: number, arg1: $UUID_): $Ops;
        close(worldId: number): boolean;
        open(worldId: number): boolean;
        static create(minecraft: $Minecraft): $RealmsClient;
        static create(): $RealmsClient;
        getActivity(worldId: number): $ServerActivityList;
        static ENVIRONMENT: $RealmsClient$Environment;
        constructor(sessionId: string, username: string, minecraft: $Minecraft);
        get news(): $RealmsNews;
        get liveStats(): $RealmsServerPlayerLists;
        get notifications(): $List<$RealmsNotification>;
    }
    export class $RealmsClient$Environment extends $Enum<$RealmsClient$Environment> {
        static values(): $RealmsClient$Environment[];
        static valueOf(arg0: string): $RealmsClient$Environment;
        static byName(name: string): ($RealmsClient$Environment) | undefined;
        baseUrl: string;
        protocol: string;
        static STAGE: $RealmsClient$Environment;
        static LOCAL: $RealmsClient$Environment;
        static PRODUCTION: $RealmsClient$Environment;
    }
    /**
     * Values that may be interpreted as {@link $RealmsClient$Environment}.
     */
    export type $RealmsClient$Environment_ = "production" | "stage" | "local";
    export class $RealmsClient$CompatibleVersionResponse extends $Enum<$RealmsClient$CompatibleVersionResponse> {
        static values(): $RealmsClient$CompatibleVersionResponse[];
        static valueOf(arg0: string): $RealmsClient$CompatibleVersionResponse;
        static OTHER: $RealmsClient$CompatibleVersionResponse;
        static COMPATIBLE: $RealmsClient$CompatibleVersionResponse;
        static OUTDATED: $RealmsClient$CompatibleVersionResponse;
    }
    /**
     * Values that may be interpreted as {@link $RealmsClient$CompatibleVersionResponse}.
     */
    export type $RealmsClient$CompatibleVersionResponse_ = "compatible" | "outdated" | "other";
}
