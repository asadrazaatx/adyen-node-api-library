/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { SweepConfigurationV2 } from './sweepConfigurationV2';

export class BalanceSweepConfigurationsResponse {
    /**
    * Indicates whether there are more items on the next page.
    */
    'hasNext': boolean;
    /**
    * Indicates whether there are more items on the previous page.
    */
    'hasPrevious': boolean;
    /**
    * List of sweeps associated with the balance account.
    */
    'sweeps': Array<SweepConfigurationV2>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hasNext",
            "baseName": "hasNext",
            "type": "boolean"
        },
        {
            "name": "hasPrevious",
            "baseName": "hasPrevious",
            "type": "boolean"
        },
        {
            "name": "sweeps",
            "baseName": "sweeps",
            "type": "Array<SweepConfigurationV2>"
        }    ];

    static getAttributeTypeMap() {
        return BalanceSweepConfigurationsResponse.attributeTypeMap;
    }
}

