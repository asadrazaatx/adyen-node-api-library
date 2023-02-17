/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ResponseAdditionalDataInstallments {
    /**
    * Type of installment. The value of `installmentType` should be **IssuerFinanced**.
    */
    'installmentPaymentDataInstallmentType'?: string;
    /**
    * Annual interest rate.
    */
    'installmentPaymentDataOptionItemNrAnnualPercentageRate'?: string;
    /**
    * First Installment Amount in minor units.
    */
    'installmentPaymentDataOptionItemNrFirstInstallmentAmount'?: string;
    /**
    * Installment fee amount in minor units.
    */
    'installmentPaymentDataOptionItemNrInstallmentFee'?: string;
    /**
    * Interest rate for the installment period.
    */
    'installmentPaymentDataOptionItemNrInterestRate'?: string;
    /**
    * Maximum number of installments possible for this payment.
    */
    'installmentPaymentDataOptionItemNrMaximumNumberOfInstallments'?: string;
    /**
    * Minimum number of installments possible for this payment.
    */
    'installmentPaymentDataOptionItemNrMinimumNumberOfInstallments'?: string;
    /**
    * Total number of installments possible for this payment.
    */
    'installmentPaymentDataOptionItemNrNumberOfInstallments'?: string;
    /**
    * Subsequent Installment Amount in minor units.
    */
    'installmentPaymentDataOptionItemNrSubsequentInstallmentAmount'?: string;
    /**
    * Total amount in minor units.
    */
    'installmentPaymentDataOptionItemNrTotalAmountDue'?: string;
    /**
    * Possible values: * PayInInstallmentsOnly * PayInFullOnly * PayInFullOrInstallments
    */
    'installmentPaymentDataPaymentOptions'?: string;
    /**
    * The number of installments that the payment amount should be charged with.  Example: 5 > Only relevant for card payments in countries that support installments.
    */
    'installmentsValue'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "installmentPaymentDataInstallmentType",
            "baseName": "installmentPaymentData.installmentType",
            "type": "string"
        },
        {
            "name": "installmentPaymentDataOptionItemNrAnnualPercentageRate",
            "baseName": "installmentPaymentData.option[itemNr].annualPercentageRate",
            "type": "string"
        },
        {
            "name": "installmentPaymentDataOptionItemNrFirstInstallmentAmount",
            "baseName": "installmentPaymentData.option[itemNr].firstInstallmentAmount",
            "type": "string"
        },
        {
            "name": "installmentPaymentDataOptionItemNrInstallmentFee",
            "baseName": "installmentPaymentData.option[itemNr].installmentFee",
            "type": "string"
        },
        {
            "name": "installmentPaymentDataOptionItemNrInterestRate",
            "baseName": "installmentPaymentData.option[itemNr].interestRate",
            "type": "string"
        },
        {
            "name": "installmentPaymentDataOptionItemNrMaximumNumberOfInstallments",
            "baseName": "installmentPaymentData.option[itemNr].maximumNumberOfInstallments",
            "type": "string"
        },
        {
            "name": "installmentPaymentDataOptionItemNrMinimumNumberOfInstallments",
            "baseName": "installmentPaymentData.option[itemNr].minimumNumberOfInstallments",
            "type": "string"
        },
        {
            "name": "installmentPaymentDataOptionItemNrNumberOfInstallments",
            "baseName": "installmentPaymentData.option[itemNr].numberOfInstallments",
            "type": "string"
        },
        {
            "name": "installmentPaymentDataOptionItemNrSubsequentInstallmentAmount",
            "baseName": "installmentPaymentData.option[itemNr].subsequentInstallmentAmount",
            "type": "string"
        },
        {
            "name": "installmentPaymentDataOptionItemNrTotalAmountDue",
            "baseName": "installmentPaymentData.option[itemNr].totalAmountDue",
            "type": "string"
        },
        {
            "name": "installmentPaymentDataPaymentOptions",
            "baseName": "installmentPaymentData.paymentOptions",
            "type": "string"
        },
        {
            "name": "installmentsValue",
            "baseName": "installments.value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ResponseAdditionalDataInstallments.attributeTypeMap;
    }
}

