/**
 * Adyen for Platforms: Account API
 * The Account API provides endpoints for managing account-related entities on your platform. These related entities include account holders, accounts, bank accounts, shareholders, and KYC-related documents. The management operations include actions such as creation, retrieval, updating, and deletion of them.  For more information, refer to our [documentation](https://docs.adyen.com/platforms). ## Authentication To connect to the Account API, you must use basic authentication credentials of your web service user. If you don\'t have one, contact the [Adyen Support Team](https://support.adyen.com/hc/en-us/requests/new). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@MarketPlace.YourMarketPlace\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning The Account API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://cal-test.adyen.com/cal/services/Account/v6/createAccountHolder ```
 *
 * The version of the OpenAPI document: 6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class UpdateAccountHolderStateRequest {
    /**
    * The code of the Account Holder on which to update the state.
    */
    'accountHolderCode': string;
    /**
    * If true, disable the requested state.  If false, enable the requested state.
    */
    'disable': boolean;
    /**
    * The reason that the state is being updated. >Required if the state is being disabled.
    */
    'reason'?: string;
    /**
    * The state to be updated. >Permitted values are: `Processing`, `Payout`
    */
    'stateType': UpdateAccountHolderStateRequest.StateTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "disable",
            "baseName": "disable",
            "type": "boolean"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "stateType",
            "baseName": "stateType",
            "type": "UpdateAccountHolderStateRequest.StateTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return UpdateAccountHolderStateRequest.attributeTypeMap;
    }
}

export namespace UpdateAccountHolderStateRequest {
    export enum StateTypeEnum {
        LimitedPayout = <any> 'LimitedPayout',
        LimitedProcessing = <any> 'LimitedProcessing',
        LimitlessPayout = <any> 'LimitlessPayout',
        LimitlessProcessing = <any> 'LimitlessProcessing',
        Payout = <any> 'Payout',
        Processing = <any> 'Processing'
    }
}
