import { $Instant } from "@package/java/time";
import { $Record } from "@package/java/lang";
import { $UUID_, $UUID, $List, $List_ } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/com/mojang/authlib/minecraft/report" {
    export class $AbuseReport extends $Record {
        static chat(arg0: string, arg1: string, arg2: $ReportEvidence_, arg3: $ReportedEntity_, arg4: $Instant): $AbuseReport;
        opinionComments(): string;
        evidence(): $ReportEvidence;
        skinUrl(): string;
        reportedEntity(): $ReportedEntity;
        createdTime(): $Instant;
        static skin(arg0: string, arg1: string, arg2: string | null, arg3: $ReportedEntity_, arg4: $Instant): $AbuseReport;
        static name(arg0: string, arg1: $ReportedEntity_, arg2: $Instant): $AbuseReport;
        reason(): string;
        constructor(opinionComments: string, reason: string | null, evidence: $ReportEvidence_ | null, skinUrl: string | null, reportedEntity: $ReportedEntity_, createdTime: $Instant);
    }
    /**
     * Values that may be interpreted as {@link $AbuseReport}.
     */
    export type $AbuseReport_ = { evidence?: $ReportEvidence_, reason?: string, skinUrl?: string, opinionComments?: string, createdTime?: $Instant, reportedEntity?: $ReportedEntity_,  } | [evidence?: $ReportEvidence_, reason?: string, skinUrl?: string, opinionComments?: string, createdTime?: $Instant, reportedEntity?: $ReportedEntity_, ];
    export class $ReportChatMessage extends $Record {
        messageReported(): boolean;
        salt(): number;
        lastSeen(): $List<$ByteBuffer>;
        profileId(): $UUID;
        sessionId(): $UUID;
        signature(): $ByteBuffer;
        index(): number;
        message(): string;
        timestamp(): $Instant;
        constructor(index: number, profileId: $UUID_, sessionId: $UUID_, timestamp: $Instant, salt: number, lastSeen: $List_<$ByteBuffer>, message: string, signature: $ByteBuffer, messageReported: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ReportChatMessage}.
     */
    export type $ReportChatMessage_ = { salt?: number, messageReported?: boolean, sessionId?: $UUID_, signature?: $ByteBuffer, timestamp?: $Instant, profileId?: $UUID_, lastSeen?: $List_<$ByteBuffer>, index?: number, message?: string,  } | [salt?: number, messageReported?: boolean, sessionId?: $UUID_, signature?: $ByteBuffer, timestamp?: $Instant, profileId?: $UUID_, lastSeen?: $List_<$ByteBuffer>, index?: number, message?: string, ];
    export class $ReportedEntity extends $Record {
        profileId(): $UUID;
        constructor(profileId: $UUID_);
    }
    /**
     * Values that may be interpreted as {@link $ReportedEntity}.
     */
    export type $ReportedEntity_ = { profileId?: $UUID_,  } | [profileId?: $UUID_, ];
    export class $ReportEvidence extends $Record {
        messages(): $List<$ReportChatMessage>;
        constructor(messages: $List_<$ReportChatMessage_>);
    }
    /**
     * Values that may be interpreted as {@link $ReportEvidence}.
     */
    export type $ReportEvidence_ = { messages?: $List_<$ReportChatMessage_>,  } | [messages?: $List_<$ReportChatMessage_>, ];
    export class $AbuseReportLimits extends $Record {
        maxEvidenceMessageCount(): number;
        trailingContextMessageCount(): number;
        leadingContextMessageCount(): number;
        maxOpinionCommentsLength(): number;
        maxReportedMessageCount(): number;
        static DEFAULTS: $AbuseReportLimits;
        constructor(maxOpinionCommentsLength: number, maxReportedMessageCount: number, maxEvidenceMessageCount: number, leadingContextMessageCount: number, trailingContextMessageCount: number);
    }
    /**
     * Values that may be interpreted as {@link $AbuseReportLimits}.
     */
    export type $AbuseReportLimits_ = { maxReportedMessageCount?: number, maxOpinionCommentsLength?: number, trailingContextMessageCount?: number, leadingContextMessageCount?: number, maxEvidenceMessageCount?: number,  } | [maxReportedMessageCount?: number, maxOpinionCommentsLength?: number, trailingContextMessageCount?: number, leadingContextMessageCount?: number, maxEvidenceMessageCount?: number, ];
}
