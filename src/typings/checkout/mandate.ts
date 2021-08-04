/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
 
/**
 * Adyen Checkout API
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including 3D Secure), mobile wallets, and local payment methods (for example, iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/online-payments).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v67/payments ```
 *
 * The version of the OpenAPI document: 67
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class Mandate {
    /**
    * The billing amount of the recurring transactions.
    */
    'amount': string;
    /**
    * The limitation rule of the billing amount.  Possible values:  * **max**: The transaction amount can not exceed the `amount`.   * **exact**: The transaction amount should be the same as the `amount`.  
    */
    'amountRule'?: Mandate.AmountRuleEnum;
    /**
    * The rule to specify the period, within which the recurring debit can happen, relative to the mandate recurring date.  Possible values:   * **on**: On a specific date.   * **before**:  Before and on a specific date.   * **after**: On and after a specific date.  
    */
    'billingAttemptsRule'?: Mandate.BillingAttemptsRuleEnum;
    /**
    * The number of the day, on which the recurring debit can happen. Should be within the same calendar month as the mandate recurring date.  Possible values: 1-31 based on the `frequency`.
    */
    'billingDay'?: string;
    /**
    * End date of the billing plan, in YYYY-MM-DD format.
    */
    'endsAt': string;
    /**
    * The frequency with which a shopper should be charged.  Possible values: **daily**, **weekly**, **biWeekly**, **monthly**, **quarterly**, **halfYearly**, **yearly**.
    */
    'frequency': Mandate.FrequencyEnum;
    /**
    * The message shown by UPI to the shopper on the approval screen.
    */
    'remarks'?: string;
    /**
    * Start date of the billing plan, in YYYY-MM-DD format. By default, the transaction date.
    */
    'startsAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        },
        {
            "name": "amountRule",
            "baseName": "amountRule",
            "type": "Mandate.AmountRuleEnum"
        },
        {
            "name": "billingAttemptsRule",
            "baseName": "billingAttemptsRule",
            "type": "Mandate.BillingAttemptsRuleEnum"
        },
        {
            "name": "billingDay",
            "baseName": "billingDay",
            "type": "string"
        },
        {
            "name": "endsAt",
            "baseName": "endsAt",
            "type": "string"
        },
        {
            "name": "frequency",
            "baseName": "frequency",
            "type": "Mandate.FrequencyEnum"
        },
        {
            "name": "remarks",
            "baseName": "remarks",
            "type": "string"
        },
        {
            "name": "startsAt",
            "baseName": "startsAt",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Mandate.attributeTypeMap;
    }
}

export namespace Mandate {
    export enum AmountRuleEnum {
        Max = <any> 'max',
        Exact = <any> 'exact'
    }
    export enum BillingAttemptsRuleEnum {
        On = <any> 'on',
        Before = <any> 'before',
        After = <any> 'after'
    }
    export enum FrequencyEnum {
        Adhoc = <any> 'adhoc',
        Daily = <any> 'daily',
        Weekly = <any> 'weekly',
        BiWeekly = <any> 'biWeekly',
        Monthly = <any> 'monthly',
        Quarterly = <any> 'quarterly',
        HalfYearly = <any> 'halfYearly',
        Yearly = <any> 'yearly'
    }
}
