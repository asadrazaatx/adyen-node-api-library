/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PayPalDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The unique ID associated with the order.
    */
    'orderID'?: string;
    /**
    * The unique ID associated with the payer.
    */
    'payerID'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * The type of flow to initiate.
    */
    'subtype'?: PayPalDetails.SubtypeEnum;
    /**
    * **paypal**
    */
    'type': PayPalDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "orderID",
            "baseName": "orderID",
            "type": "string"
        },
        {
            "name": "payerID",
            "baseName": "payerID",
            "type": "string"
        },
        {
            "name": "recurringDetailReference",
            "baseName": "recurringDetailReference",
            "type": "string"
        },
        {
            "name": "storedPaymentMethodId",
            "baseName": "storedPaymentMethodId",
            "type": "string"
        },
        {
            "name": "subtype",
            "baseName": "subtype",
            "type": "PayPalDetails.SubtypeEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PayPalDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PayPalDetails.attributeTypeMap;
    }
}

export namespace PayPalDetails {
    export enum SubtypeEnum {
        Redirect = <any> 'redirect',
        Sdk = <any> 'sdk'
    }
    export enum TypeEnum {
        Paypal = <any> 'paypal'
    }
}
