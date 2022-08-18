/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class TestNotificationConfigurationRequest {
    /**
    * The event types to test.  If left blank, then all of the configured event types will be tested. >Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_STORE_STATUS_CHANGE` `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`.
    */
    'eventTypes'?: Array<TestNotificationConfigurationRequest.EventTypesEnum>;
    /**
    * The ID of the notification subscription configuration to be tested.
    */
    'notificationId': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "eventTypes",
            "baseName": "eventTypes",
            "type": "Array<TestNotificationConfigurationRequest.EventTypesEnum>"
        },
        {
            "name": "notificationId",
            "baseName": "notificationId",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TestNotificationConfigurationRequest.attributeTypeMap;
    }
}

export namespace TestNotificationConfigurationRequest {
    export enum EventTypesEnum {
        AccountClosed = <any> 'ACCOUNT_CLOSED',
        AccountCreated = <any> 'ACCOUNT_CREATED',
        AccountFundsBelowThreshold = <any> 'ACCOUNT_FUNDS_BELOW_THRESHOLD',
        AccountHolderCreated = <any> 'ACCOUNT_HOLDER_CREATED',
        AccountHolderLimitReached = <any> 'ACCOUNT_HOLDER_LIMIT_REACHED',
        AccountHolderPayout = <any> 'ACCOUNT_HOLDER_PAYOUT',
        AccountHolderStatusChange = <any> 'ACCOUNT_HOLDER_STATUS_CHANGE',
        AccountHolderStoreStatusChange = <any> 'ACCOUNT_HOLDER_STORE_STATUS_CHANGE',
        AccountHolderUpcomingDeadline = <any> 'ACCOUNT_HOLDER_UPCOMING_DEADLINE',
        AccountHolderUpdated = <any> 'ACCOUNT_HOLDER_UPDATED',
        AccountHolderVerification = <any> 'ACCOUNT_HOLDER_VERIFICATION',
        AccountUpdated = <any> 'ACCOUNT_UPDATED',
        BeneficiarySetup = <any> 'BENEFICIARY_SETUP',
        CompensateNegativeBalance = <any> 'COMPENSATE_NEGATIVE_BALANCE',
        DirectDebitInitiated = <any> 'DIRECT_DEBIT_INITIATED',
        PaymentFailure = <any> 'PAYMENT_FAILURE',
        PendingCredit = <any> 'PENDING_CREDIT',
        RefundFundsTransfer = <any> 'REFUND_FUNDS_TRANSFER',
        ReportAvailable = <any> 'REPORT_AVAILABLE',
        ScheduledRefunds = <any> 'SCHEDULED_REFUNDS',
        ScoreSignalTriggered = <any> 'SCORE_SIGNAL_TRIGGERED',
        TransferFunds = <any> 'TRANSFER_FUNDS',
        TransferNotPaidoutTransfers = <any> 'TRANSFER_NOT_PAIDOUT_TRANSFERS'
    }
}