/**
 * Adyen for Platforms: Account API
 * The Account API provides endpoints for managing account-related entities on your platform. These related entities include account holders, accounts, bank accounts, shareholders, and KYC-related documents. The management operations include actions such as creation, retrieval, updating, and deletion of them.  For more information, refer to our [documentation](https://docs.adyen.com/platforms). ## Authentication To connect to the Account API, you must use basic authentication credentials of your web service user. If you don\'t have one, contact the [Adyen Support Team](https://support.adyen.com/hc/en-us/requests/new). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@MarketPlace.YourMarketPlace\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning The Account API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://cal-test.adyen.com/cal/services/Account/v6/createAccountHolder ```
 *
 * The version of the OpenAPI document: 6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {ErrorFieldType} from './errorFieldType';
import {PayoutScheduleResponse} from './payoutScheduleResponse';

export class UpdateAccountResponse {
    /**
    * The code of the account.
    */
    'accountCode': string;
    /**
    * The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.
    */
    'bankAccountUUID'?: string;
    /**
    * The description of the account.
    */
    'description'?: string;
    /**
    * A list of fields that caused the `/updateAccount` request to fail.
    */
    'invalidFields'?: Array<ErrorFieldType>;
    /**
    * A set of key and value pairs containing metadata.
    */
    'metadata'?: { [key: string]: string; };
    /**
    * The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.
    */
    'payoutMethodCode'?: string;
    'payoutSchedule'?: PayoutScheduleResponse;
    /**
    * Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
    */
    'payoutSpeed'?: UpdateAccountResponse.PayoutSpeedEnum;
    /**
    * The reference of a request. Can be used to uniquely identify the request.
    */
    'pspReference'?: string;
    /**
    * The result code.
    */
    'resultCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountCode",
            "baseName": "accountCode",
            "type": "string"
        },
        {
            "name": "bankAccountUUID",
            "baseName": "bankAccountUUID",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "invalidFields",
            "baseName": "invalidFields",
            "type": "Array<ErrorFieldType>"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "payoutMethodCode",
            "baseName": "payoutMethodCode",
            "type": "string"
        },
        {
            "name": "payoutSchedule",
            "baseName": "payoutSchedule",
            "type": "PayoutScheduleResponse"
        },
        {
            "name": "payoutSpeed",
            "baseName": "payoutSpeed",
            "type": "UpdateAccountResponse.PayoutSpeedEnum"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateAccountResponse.attributeTypeMap;
    }
}

export namespace UpdateAccountResponse {
    export enum PayoutSpeedEnum {
        Instant = <any> 'INSTANT',
        SameDay = <any> 'SAME_DAY',
        Standard = <any> 'STANDARD'
    }
}
