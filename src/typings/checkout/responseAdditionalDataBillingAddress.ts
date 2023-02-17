/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ResponseAdditionalDataBillingAddress {
    /**
    * The billing address city passed in the payment request.
    */
    'billingAddressCity'?: string;
    /**
    * The billing address country passed in the payment request.  Example: NL
    */
    'billingAddressCountry'?: string;
    /**
    * The billing address house number or name passed in the payment request.
    */
    'billingAddressHouseNumberOrName'?: string;
    /**
    * The billing address postal code passed in the payment request.  Example: 1011 DJ
    */
    'billingAddressPostalCode'?: string;
    /**
    * The billing address state or province passed in the payment request.  Example: NH
    */
    'billingAddressStateOrProvince'?: string;
    /**
    * The billing address street passed in the payment request.
    */
    'billingAddressStreet'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billingAddressCity",
            "baseName": "billingAddress.city",
            "type": "string"
        },
        {
            "name": "billingAddressCountry",
            "baseName": "billingAddress.country",
            "type": "string"
        },
        {
            "name": "billingAddressHouseNumberOrName",
            "baseName": "billingAddress.houseNumberOrName",
            "type": "string"
        },
        {
            "name": "billingAddressPostalCode",
            "baseName": "billingAddress.postalCode",
            "type": "string"
        },
        {
            "name": "billingAddressStateOrProvince",
            "baseName": "billingAddress.stateOrProvince",
            "type": "string"
        },
        {
            "name": "billingAddressStreet",
            "baseName": "billingAddress.street",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ResponseAdditionalDataBillingAddress.attributeTypeMap;
    }
}

