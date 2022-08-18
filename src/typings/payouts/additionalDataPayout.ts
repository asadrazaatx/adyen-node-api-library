/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AdditionalDataPayout {
    'fundingNetwork'?: string;
    'fundingSource'?: AdditionalDataPayout.FundingSourceEnum;
    'fundingTransactionId'?: string;
    'payoutAccountCode'?: string;
    'payoutAccountHolderCode'?: string;
    'payoutMarketPayUser'?: string;
    'processOver'?: AdditionalDataPayout.ProcessOverEnum;
    'verifyOver'?: string;
    'walletIdentifier'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fundingNetwork",
            "baseName": "fundingNetwork",
            "type": "string"
        },
        {
            "name": "fundingSource",
            "baseName": "fundingSource",
            "type": "AdditionalDataPayout.FundingSourceEnum"
        },
        {
            "name": "fundingTransactionId",
            "baseName": "fundingTransactionId",
            "type": "string"
        },
        {
            "name": "payoutAccountCode",
            "baseName": "payoutAccountCode",
            "type": "string"
        },
        {
            "name": "payoutAccountHolderCode",
            "baseName": "payoutAccountHolderCode",
            "type": "string"
        },
        {
            "name": "payoutMarketPayUser",
            "baseName": "payoutMarketPayUser",
            "type": "string"
        },
        {
            "name": "processOver",
            "baseName": "processOver",
            "type": "AdditionalDataPayout.ProcessOverEnum"
        },
        {
            "name": "verifyOver",
            "baseName": "verifyOver",
            "type": "string"
        },
        {
            "name": "walletIdentifier",
            "baseName": "walletIdentifier",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalDataPayout.attributeTypeMap;
    }
}

export namespace AdditionalDataPayout {
    export enum FundingSourceEnum {
        Credit = <any> 'CREDIT',
        Debit = <any> 'DEBIT',
        Prepaid = <any> 'PREPAID',
        DepositAccount = <any> 'DEPOSIT_ACCOUNT'
    }
    export enum ProcessOverEnum {
        McP2P = <any> 'MC_P2P',
        VisaOct = <any> 'Visa_OCT',
        UnlinkedRefund = <any> 'UnlinkedRefund'
    }
}