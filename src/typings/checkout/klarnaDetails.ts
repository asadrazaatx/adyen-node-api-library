/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class KlarnaDetails {
    /**
    * The address where to send the invoice.
    */
    'billingAddress'?: string;
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The address where the goods should be delivered.
    */
    'deliveryAddress'?: string;
    /**
    * Shopper name, date of birth, phone number, and email address.
    */
    'personalDetails'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **klarna**
    */
    'type': KlarnaDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "string"
        },
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "deliveryAddress",
            "baseName": "deliveryAddress",
            "type": "string"
        },
        {
            "name": "personalDetails",
            "baseName": "personalDetails",
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
            "name": "type",
            "baseName": "type",
            "type": "KlarnaDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return KlarnaDetails.attributeTypeMap;
    }
}

export namespace KlarnaDetails {
    export enum TypeEnum {
        Klarna = <any> 'klarna',
        Klarnapayments = <any> 'klarnapayments',
        KlarnapaymentsAccount = <any> 'klarnapayments_account',
        KlarnapaymentsB2b = <any> 'klarnapayments_b2b',
        KlarnaPaynow = <any> 'klarna_paynow',
        KlarnaAccount = <any> 'klarna_account',
        KlarnaB2b = <any> 'klarna_b2b'
    }
}
