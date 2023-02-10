/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AccountInfo } from './accountInfo';
import { Address } from './address';
import { Amount } from './amount';
import { ApplicationInfo } from './applicationInfo';
import { AuthenticationData } from './authenticationData';
import { CheckoutSessionInstallmentOption } from './checkoutSessionInstallmentOption';
import { Company } from './company';
import { FundOrigin } from './fundOrigin';
import { FundRecipient } from './fundRecipient';
import { LineItem } from './lineItem';
import { Mandate } from './mandate';
import { Name } from './name';
import { RiskData } from './riskData';
import { Split } from './split';
import { ThreeDSecureData } from './threeDSecureData';

export class CreateCheckoutSessionRequest {
    'accountInfo'?: AccountInfo;
    'additionalAmount'?: Amount;
    /**
    * This field contains additional data, which may be required for a particular payment request.  The `additionalData` object consists of entries, each of which includes the key and value.
    */
    'additionalData'?: { [key: string]: string; };
    /**
    * List of payment methods to be presented to the shopper. To refer to payment methods, use their `paymentMethod.type`from [Payment methods overview](https://docs.adyen.com/payment-methods).  Example: `\"allowedPaymentMethods\":[\"ideal\",\"giropay\"]`
    */
    'allowedPaymentMethods'?: Array<string>;
    'amount': Amount;
    'applicationInfo'?: ApplicationInfo;
    'authenticationData'?: AuthenticationData;
    'billingAddress'?: Address;
    /**
    * List of payment methods to be hidden from the shopper. To refer to payment methods, use their `paymentMethod.type`from [Payment methods overview](https://docs.adyen.com/payment-methods).  Example: `\"blockedPaymentMethods\":[\"ideal\",\"giropay\"]`
    */
    'blockedPaymentMethods'?: Array<string>;
    /**
    * The delay between the authorisation and scheduled auto-capture, specified in hours.
    */
    'captureDelayHours'?: number;
    /**
    * The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.  Possible values: * **iOS** * **Android** * **Web**
    */
    'channel'?: CreateCheckoutSessionRequest.ChannelEnum;
    'company'?: Company;
    /**
    * The shopper\'s two-letter country code.
    */
    'countryCode'?: string;
    /**
    * The shopper\'s date of birth.  Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD
    */
    'dateOfBirth'?: string;
    /**
    * The date and time when the purchased goods should be delivered.  [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.
    */
    'deliverAt'?: Date;
    'deliveryAddress'?: Address;
    /**
    * When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future one-click payments.
    */
    'enableOneClick'?: boolean;
    /**
    * When true and `shopperReference` is provided, the payment details will be tokenized for payouts.
    */
    'enablePayOut'?: boolean;
    /**
    * When true and `shopperReference` is provided, the payment details will be tokenized for recurring payments.
    */
    'enableRecurring'?: boolean;
    /**
    * The date the session expires in [ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. When not specified, the expiry date is set to 1 hour after session creation. You cannot set the session expiry to more than 24 hours after session creation.
    */
    'expiresAt'?: Date;
    'fundOrigin'?: FundOrigin;
    'fundRecipient'?: FundRecipient;
    /**
    * A set of key-value pairs that specifies the installment options available per payment method. The key must be a payment method name in lowercase. For example, **card** to specify installment options for all cards, or **visa** or **mc**. The value must be an object containing the installment options.
    */
    'installmentOptions'?: { [key: string]: CheckoutSessionInstallmentOption; };
    /**
    * Price and product information about the purchased items, to be included on the invoice sent to the shopper. > This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, and Zip.
    */
    'lineItems'?: Array<LineItem>;
    'mandate'?: Mandate;
    /**
    * The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.
    */
    'mcc'?: string;
    /**
    * The merchant account identifier, with which you want to process the transaction.
    */
    'merchantAccount': string;
    /**
    * This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle. The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations. > We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.
    */
    'merchantOrderReference'?: string;
    /**
    * Metadata consists of entries, each of which includes a key and a value. Limits: * Maximum 20 key-value pairs per request. * Maximum 20 characters per key. * Maximum 80 characters per value. 
    */
    'metadata'?: { [key: string]: string; };
    'mpiData'?: ThreeDSecureData;
    /**
    * Date after which no further authorisations shall be performed. Only for 3D Secure 2.
    */
    'recurringExpiry'?: string;
    /**
    * Minimum number of days between authorisations. Only for 3D Secure 2.
    */
    'recurringFrequency'?: string;
    /**
    * Defines a recurring payment type. Required when creating a token to store payment details. Allowed values: * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule. * `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction. * `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder\'s balance drops below a certain amount. 
    */
    'recurringProcessingModel'?: CreateCheckoutSessionRequest.RecurringProcessingModelEnum;
    /**
    * Specifies the redirect method (GET or POST) when redirecting back from the issuer.
    */
    'redirectFromIssuerMethod'?: string;
    /**
    * Specifies the redirect method (GET or POST) when redirecting to the issuer.
    */
    'redirectToIssuerMethod'?: string;
    /**
    * The reference to uniquely identify a payment.
    */
    'reference': string;
    /**
    * The URL to return to when a redirect payment is completed.
    */
    'returnUrl': string;
    'riskData'?: RiskData;
    /**
    * The shopper\'s email address.
    */
    'shopperEmail'?: string;
    /**
    * The shopper\'s IP address. In general, we recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks). > For 3D Secure 2 transactions, schemes require `shopperIP` for all browser-based implementations. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).
    */
    'shopperIP'?: string;
    /**
    * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer. For the web service API, Adyen assumes Ecommerce shopper interaction by default.  This field has the following possible values: * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request. * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment). * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone. * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
    */
    'shopperInteraction'?: CreateCheckoutSessionRequest.ShopperInteractionEnum;
    /**
    * The combination of a language code and a country code to specify the language to be used in the payment.
    */
    'shopperLocale'?: string;
    'shopperName'?: Name;
    /**
    * Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters. > Your reference must not include personally identifiable information (PII), for example name or email address.
    */
    'shopperReference'?: string;
    /**
    * The text to be shown on the shopper\'s bank statement.  We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.  Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , \' _ - ? + * /_**.
    */
    'shopperStatement'?: string;
    /**
    * The shopper\'s social security number.
    */
    'socialSecurityNumber'?: string;
    /**
    * Boolean value indicating whether the card payment method should be split into separate debit and credit options.
    */
    'splitCardFundingSources'?: boolean;
    /**
    * An array of objects specifying how the payment should be split when using [Adyen for Platforms](https://docs.adyen.com/platforms/processing-payments#providing-split-information) or [Issuing](https://docs.adyen.com/issuing/manage-funds#split).
    */
    'splits'?: Array<Split>;
    /**
    * The ecommerce or point-of-sale store that is processing the payment.
    */
    'store'?: string;
    /**
    * When this is set to **true** and the `shopperReference` is provided, the payment details will be stored.
    */
    'storePaymentMethod'?: boolean;
    /**
    * Indicates if the details of the payment method will be stored for the shopper. Possible values: * **disabled** – No details will be stored (default). * **askForConsent** – If the `shopperReference` is provided, the UI lets the shopper choose if they want their payment details to be stored. * **enabled** – If the `shopperReference` is provided, the details will be stored without asking the shopper for consent.
    */
    'storePaymentMethodMode'?: CreateCheckoutSessionRequest.StorePaymentMethodModeEnum;
    /**
    * The shopper\'s telephone number.
    */
    'telephoneNumber'?: string;
    /**
    * If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.
    */
    'threeDSAuthenticationOnly'?: boolean;
    /**
    * Set to true if the payment should be routed to a trusted MID.
    */
    'trustedShopper'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountInfo",
            "baseName": "accountInfo",
            "type": "AccountInfo"
        },
        {
            "name": "additionalAmount",
            "baseName": "additionalAmount",
            "type": "Amount"
        },
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "allowedPaymentMethods",
            "baseName": "allowedPaymentMethods",
            "type": "Array<string>"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "applicationInfo",
            "baseName": "applicationInfo",
            "type": "ApplicationInfo"
        },
        {
            "name": "authenticationData",
            "baseName": "authenticationData",
            "type": "AuthenticationData"
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "Address"
        },
        {
            "name": "blockedPaymentMethods",
            "baseName": "blockedPaymentMethods",
            "type": "Array<string>"
        },
        {
            "name": "captureDelayHours",
            "baseName": "captureDelayHours",
            "type": "number"
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "CreateCheckoutSessionRequest.ChannelEnum"
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "Company"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "dateOfBirth",
            "baseName": "dateOfBirth",
            "type": "string"
        },
        {
            "name": "deliverAt",
            "baseName": "deliverAt",
            "type": "Date"
        },
        {
            "name": "deliveryAddress",
            "baseName": "deliveryAddress",
            "type": "Address"
        },
        {
            "name": "enableOneClick",
            "baseName": "enableOneClick",
            "type": "boolean"
        },
        {
            "name": "enablePayOut",
            "baseName": "enablePayOut",
            "type": "boolean"
        },
        {
            "name": "enableRecurring",
            "baseName": "enableRecurring",
            "type": "boolean"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "Date"
        },
        {
            "name": "fundOrigin",
            "baseName": "fundOrigin",
            "type": "FundOrigin"
        },
        {
            "name": "fundRecipient",
            "baseName": "fundRecipient",
            "type": "FundRecipient"
        },
        {
            "name": "installmentOptions",
            "baseName": "installmentOptions",
            "type": "{ [key: string]: CheckoutSessionInstallmentOption; }"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "mandate",
            "baseName": "mandate",
            "type": "Mandate"
        },
        {
            "name": "mcc",
            "baseName": "mcc",
            "type": "string"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "merchantOrderReference",
            "baseName": "merchantOrderReference",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "mpiData",
            "baseName": "mpiData",
            "type": "ThreeDSecureData"
        },
        {
            "name": "recurringExpiry",
            "baseName": "recurringExpiry",
            "type": "string"
        },
        {
            "name": "recurringFrequency",
            "baseName": "recurringFrequency",
            "type": "string"
        },
        {
            "name": "recurringProcessingModel",
            "baseName": "recurringProcessingModel",
            "type": "CreateCheckoutSessionRequest.RecurringProcessingModelEnum"
        },
        {
            "name": "redirectFromIssuerMethod",
            "baseName": "redirectFromIssuerMethod",
            "type": "string"
        },
        {
            "name": "redirectToIssuerMethod",
            "baseName": "redirectToIssuerMethod",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "returnUrl",
            "baseName": "returnUrl",
            "type": "string"
        },
        {
            "name": "riskData",
            "baseName": "riskData",
            "type": "RiskData"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "shopperIP",
            "baseName": "shopperIP",
            "type": "string"
        },
        {
            "name": "shopperInteraction",
            "baseName": "shopperInteraction",
            "type": "CreateCheckoutSessionRequest.ShopperInteractionEnum"
        },
        {
            "name": "shopperLocale",
            "baseName": "shopperLocale",
            "type": "string"
        },
        {
            "name": "shopperName",
            "baseName": "shopperName",
            "type": "Name"
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string"
        },
        {
            "name": "shopperStatement",
            "baseName": "shopperStatement",
            "type": "string"
        },
        {
            "name": "socialSecurityNumber",
            "baseName": "socialSecurityNumber",
            "type": "string"
        },
        {
            "name": "splitCardFundingSources",
            "baseName": "splitCardFundingSources",
            "type": "boolean"
        },
        {
            "name": "splits",
            "baseName": "splits",
            "type": "Array<Split>"
        },
        {
            "name": "store",
            "baseName": "store",
            "type": "string"
        },
        {
            "name": "storePaymentMethod",
            "baseName": "storePaymentMethod",
            "type": "boolean"
        },
        {
            "name": "storePaymentMethodMode",
            "baseName": "storePaymentMethodMode",
            "type": "CreateCheckoutSessionRequest.StorePaymentMethodModeEnum"
        },
        {
            "name": "telephoneNumber",
            "baseName": "telephoneNumber",
            "type": "string"
        },
        {
            "name": "threeDSAuthenticationOnly",
            "baseName": "threeDSAuthenticationOnly",
            "type": "boolean"
        },
        {
            "name": "trustedShopper",
            "baseName": "trustedShopper",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CreateCheckoutSessionRequest.attributeTypeMap;
    }
}

export namespace CreateCheckoutSessionRequest {
    export enum ChannelEnum {
        IOs = <any> 'iOS',
        Android = <any> 'Android',
        Web = <any> 'Web'
    }
    export enum RecurringProcessingModelEnum {
        CardOnFile = <any> 'CardOnFile',
        Subscription = <any> 'Subscription',
        UnscheduledCardOnFile = <any> 'UnscheduledCardOnFile'
    }
    export enum ShopperInteractionEnum {
        Ecommerce = <any> 'Ecommerce',
        ContAuth = <any> 'ContAuth',
        Moto = <any> 'Moto',
        Pos = <any> 'POS'
    }
    export enum StorePaymentMethodModeEnum {
        AskForConsent = <any> 'askForConsent',
        Disabled = <any> 'disabled',
        Enabled = <any> 'enabled'
    }
}
