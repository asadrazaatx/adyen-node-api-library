/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PhoneNumber {
    /**
    * The two-character ISO-3166-1 alpha-2 country code of the phone number. For example, **US** or **NL**.
    */
    'phoneCountryCode': string;
    /**
    * The phone number. The inclusion of the phone number country code is not necessary.
    */
    'phoneNumber': string;
    /**
    * The type of the phone number. Possible values: **Landline**, **Mobile**, **SIP**, **Fax**.
    */
    'phoneType'?: PhoneNumber.PhoneTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "phoneCountryCode",
            "baseName": "phoneCountryCode",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "phoneType",
            "baseName": "phoneType",
            "type": "PhoneNumber.PhoneTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PhoneNumber.attributeTypeMap;
    }
}

export namespace PhoneNumber {
    export enum PhoneTypeEnum {
        Fax = <any> 'Fax',
        Landline = <any> 'Landline',
        Mobile = <any> 'Mobile',
        Sip = <any> 'SIP'
    }
}
