/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';

export class PayoutAccountHolderRequest {
    /**
    * The code of the account from which the payout is to be made.
    */
    'accountCode': string;
    /**
    * The code of the Account Holder who owns the account from which the payout is to be made. The Account Holder is the party to which the payout will be made.
    */
    'accountHolderCode': string;
    'amount'?: Amount;
    /**
    * The unique ID of the Bank Account held by the Account Holder to which the payout is to be made. If left blank, a bank account is automatically selected.
    */
    'bankAccountUUID'?: string;
    /**
    * A description of the payout. Maximum 35 characters. Allowed: **abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/?:().,\'+ \";**
    */
    'description'?: string;
    /**
    * A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.
    */
    'merchantReference'?: string;
    /**
    * The unique ID of the payout method held by the Account Holder to which the payout is to be made. If left blank, a payout instrument is automatically selected.
    */
    'payoutMethodCode'?: string;
    /**
    * Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
    */
    'payoutSpeed'?: PayoutAccountHolderRequest.PayoutSpeedEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountCode",
            "baseName": "accountCode",
            "type": "string"
        },
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
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
            "name": "merchantReference",
            "baseName": "merchantReference",
            "type": "string"
        },
        {
            "name": "payoutMethodCode",
            "baseName": "payoutMethodCode",
            "type": "string"
        },
        {
            "name": "payoutSpeed",
            "baseName": "payoutSpeed",
            "type": "PayoutAccountHolderRequest.PayoutSpeedEnum"
        }    ];

    static getAttributeTypeMap() {
        return PayoutAccountHolderRequest.attributeTypeMap;
    }
}

export namespace PayoutAccountHolderRequest {
    export enum PayoutSpeedEnum {
        Instant = <any> 'INSTANT',
        SameDay = <any> 'SAME_DAY',
        Standard = <any> 'STANDARD'
    }
}
