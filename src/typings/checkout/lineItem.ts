/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class LineItem {
    /**
    * Item amount excluding the tax, in minor units.
    */
    'amountExcludingTax'?: number;
    /**
    * Item amount including the tax, in minor units.
    */
    'amountIncludingTax'?: number;
    /**
    * Description of the line item.
    */
    'description'?: string;
    /**
    * ID of the line item.
    */
    'id'?: string;
    /**
    * Link to the picture of the purchased item.
    */
    'imageUrl'?: string;
    /**
    * Item category, used by the RatePay payment method.
    */
    'itemCategory'?: string;
    /**
    * Link to the purchased item.
    */
    'productUrl'?: string;
    /**
    * Number of items.
    */
    'quantity'?: number;
    /**
    * Tax amount, in minor units.
    */
    'taxAmount'?: number;
    /**
    * Tax percentage, in minor units.
    */
    'taxPercentage'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amountExcludingTax",
            "baseName": "amountExcludingTax",
            "type": "number"
        },
        {
            "name": "amountIncludingTax",
            "baseName": "amountIncludingTax",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "imageUrl",
            "baseName": "imageUrl",
            "type": "string"
        },
        {
            "name": "itemCategory",
            "baseName": "itemCategory",
            "type": "string"
        },
        {
            "name": "productUrl",
            "baseName": "productUrl",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "taxAmount",
            "baseName": "taxAmount",
            "type": "number"
        },
        {
            "name": "taxPercentage",
            "baseName": "taxPercentage",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return LineItem.attributeTypeMap;
    }
}

