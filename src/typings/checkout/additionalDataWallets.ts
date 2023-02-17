/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AdditionalDataWallets {
    /**
    * The Android Pay token retrieved from the SDK.
    */
    'androidpayToken'?: string;
    /**
    * The Mastercard Masterpass Transaction ID retrieved from the SDK.
    */
    'masterpassTransactionId'?: string;
    /**
    * The Apple Pay token retrieved from the SDK.
    */
    'paymentToken'?: string;
    /**
    * The Google Pay token retrieved from the SDK.
    */
    'paywithgoogleToken'?: string;
    /**
    * The Samsung Pay token retrieved from the SDK.
    */
    'samsungpayToken'?: string;
    /**
    * The Visa Checkout Call ID retrieved from the SDK.
    */
    'visacheckoutCallId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "androidpayToken",
            "baseName": "androidpay.token",
            "type": "string"
        },
        {
            "name": "masterpassTransactionId",
            "baseName": "masterpass.transactionId",
            "type": "string"
        },
        {
            "name": "paymentToken",
            "baseName": "payment.token",
            "type": "string"
        },
        {
            "name": "paywithgoogleToken",
            "baseName": "paywithgoogle.token",
            "type": "string"
        },
        {
            "name": "samsungpayToken",
            "baseName": "samsungpay.token",
            "type": "string"
        },
        {
            "name": "visacheckoutCallId",
            "baseName": "visacheckout.callId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalDataWallets.attributeTypeMap;
    }
}

