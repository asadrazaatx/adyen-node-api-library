/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class SwishInfo {
    /**
    * Swish number. Format: 10 digits without spaces. For example, **1231111111**.
    */
    'swishNumber': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "swishNumber",
            "baseName": "swishNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SwishInfo.attributeTypeMap;
    }
}

