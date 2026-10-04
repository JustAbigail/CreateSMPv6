import { $Instant } from "@package/java/time";
import { $Unit } from "@package/com/mojang/datafixers/util";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component } from "@package/net/minecraft/network/chat";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $AbuseReportLimits, $AbuseReport_ } from "@package/com/mojang/authlib/minecraft/report";
import { $Minecraft } from "@package/net/minecraft/client";
import { $AbuseReportRequest$ThirdPartyServerInfo, $AbuseReportRequest$RealmInfo, $AbuseReportRequest$ClientInfo } from "@package/com/mojang/authlib/yggdrasil/request";
import { $Runnable_, $Enum, $Record } from "@package/java/lang";
import { $UUID, $UUID_ } from "@package/java/util";
import { $ChatLog } from "@package/net/minecraft/client/multiplayer/chat";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";
import { $RealmsServer } from "@package/com/mojang/realmsclient/dto";

declare module "@package/net/minecraft/client/multiplayer/chat/report" {
    export class $ReportEnvironment$Server {
    }
    export interface $ReportEnvironment$Server {
    }
    export class $ReportReason extends $Enum<$ReportReason> {
        backendName(): string;
        static values(): $ReportReason[];
        static valueOf(arg0: string): $ReportReason;
        description(): $Component;
        title(): $Component;
        static HATE_SPEECH: $ReportReason;
        static ALCOHOL_TOBACCO_DRUGS: $ReportReason;
        static GENERIC: $ReportReason;
        static DEFAMATION_IMPERSONATION_FALSE_INFORMATION: $ReportReason;
        static NON_CONSENSUAL_INTIMATE_IMAGERY: $ReportReason;
        static SELF_HARM_OR_SUICIDE: $ReportReason;
        static HARASSMENT_OR_BULLYING: $ReportReason;
        static CHILD_SEXUAL_EXPLOITATION_OR_ABUSE: $ReportReason;
        static IMMINENT_HARM: $ReportReason;
        static TERRORISM_OR_VIOLENT_EXTREMISM: $ReportReason;
    }
    /**
     * Values that may be interpreted as {@link $ReportReason}.
     */
    export type $ReportReason_ = "generic" | "hate_speech" | "harassment_or_bullying" | "self_harm_or_suicide" | "imminent_harm" | "defamation_impersonation_false_information" | "alcohol_tobacco_drugs" | "child_sexual_exploitation_or_abuse" | "terrorism_or_violent_extremism" | "non_consensual_intimate_imagery";
    export class $ReportType extends $Enum<$ReportType> {
        backendName(): string;
        static values(): $ReportType[];
        static valueOf(arg0: string): $ReportType;
        static CHAT: $ReportType;
        static USERNAME: $ReportType;
        static SKIN: $ReportType;
    }
    /**
     * Values that may be interpreted as {@link $ReportType}.
     */
    export type $ReportType_ = "chat" | "skin" | "username";
    export class $AbuseReportSender {
        static create(environment: $ReportEnvironment_, userApiService: $UserApiService): $AbuseReportSender;
    }
    export interface $AbuseReportSender {
        reportLimits(): $AbuseReportLimits;
        isEnabled(): boolean;
        send(id: $UUID_, reportType: $ReportType_, report: $AbuseReport_): $CompletableFuture<$Unit>;
        get enabled(): boolean;
    }
    export class $ReportingContext {
        hasDraftReport(): boolean;
        draftReportHandled(minecraft: $Minecraft, screen: $Screen, quitter: $Runnable_, quitToTitle: boolean): void;
        setReportDraft(draftReport: $Report | null): void;
        hasDraftReportFor(uuid: $UUID_): boolean;
        chatLog(): $ChatLog;
        sender(): $AbuseReportSender;
        matches(environment: $ReportEnvironment_): boolean;
        static create(environment: $ReportEnvironment_, userApiService: $UserApiService): $ReportingContext;
        constructor(sender: $AbuseReportSender, enviroment: $ReportEnvironment_, chatLog: $ChatLog);
        set reportDraft(value: $Report | null);
    }
    export class $ReportEnvironment extends $Record {
        static thirdParty(ip: string): $ReportEnvironment;
        clientInfo(): $AbuseReportRequest$ClientInfo;
        thirdPartyServerInfo(): $AbuseReportRequest$ThirdPartyServerInfo;
        realmInfo(): $AbuseReportRequest$RealmInfo;
        clientVersion(): string;
        static realm(realmsServer: $RealmsServer): $ReportEnvironment;
        static create(server: $ReportEnvironment$Server | null): $ReportEnvironment;
        static local(): $ReportEnvironment;
        server(): $ReportEnvironment$Server;
        constructor(arg0: string, arg1: $ReportEnvironment$Server | null);
    }
    /**
     * Values that may be interpreted as {@link $ReportEnvironment}.
     */
    export type $ReportEnvironment_ = { server?: $ReportEnvironment$Server, clientVersion?: string,  } | [server?: $ReportEnvironment$Server, clientVersion?: string, ];
    export class $Report {
        createScreen(lastScreen: $Screen, reportingContext: $ReportingContext): $Screen;
        isReportedPlayer(playerId: $UUID_): boolean;
        copy(): $Report;
        reportedProfileId: $UUID;
        createdAt: $Instant;
        reason: $ReportReason;
        comments: string;
        reportId: $UUID;
        attested: boolean;
        constructor(reportId: $UUID_, createdAt: $Instant, reportedProfileId: $UUID_);
    }
}
