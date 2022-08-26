/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class TimeOfDay {
    /**
    * The end time in a time-only ISO-8601 extended offset format. For example: **08:00:00+02:00**, **22:30:00-03:00**.  
    */
    'endTime'?: string;
    /**
    * The start time in a time-only ISO-8601 extended offset format. For example: **08:00:00+02:00**, **22:30:00-03:00**.  
    */
    'startTime'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "endTime",
            "baseName": "endTime",
            "type": "string"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TimeOfDay.attributeTypeMap;
    }
}

