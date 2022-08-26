/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';

export class CheckoutBankTransferAction {
    /**
    * The name of the account holder.
    */
    'beneficiary'?: string;
    /**
    * The BIC of the IBAN.
    */
    'bic'?: string;
    /**
    * The url to download payment details with.
    */
    'downloadUrl'?: string;
    /**
    * The IBAN of the bank transfer.
    */
    'iban'?: string;
    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;
    /**
    * The transfer reference.
    */
    'reference'?: string;
    /**
    * The e-mail of the shopper, included if an e-mail was sent to the shopper.
    */
    'shopperEmail'?: string;
    'totalAmount'?: Amount;
    /**
    * The type of the action.
    */
    'type': CheckoutBankTransferAction.TypeEnum;
    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "beneficiary",
            "baseName": "beneficiary",
            "type": "string"
        },
        {
            "name": "bic",
            "baseName": "bic",
            "type": "string"
        },
        {
            "name": "downloadUrl",
            "baseName": "downloadUrl",
            "type": "string"
        },
        {
            "name": "iban",
            "baseName": "iban",
            "type": "string"
        },
        {
            "name": "paymentMethodType",
            "baseName": "paymentMethodType",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "totalAmount",
            "baseName": "totalAmount",
            "type": "Amount"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CheckoutBankTransferAction.TypeEnum"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutBankTransferAction.attributeTypeMap;
    }
}

export namespace CheckoutBankTransferAction {
    export enum TypeEnum {
        BankTransfer = <any> 'bankTransfer'
    }
}
