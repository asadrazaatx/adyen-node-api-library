/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class FieldType {
    /**
    * The full name of the property.
    */
    'field'?: string;
    /**
    * The type of the field.
    */
    'fieldName'?: FieldType.FieldNameEnum;
    /**
    * The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.
    */
    'shareholderCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "string"
        },
        {
            "name": "fieldName",
            "baseName": "fieldName",
            "type": "FieldType.FieldNameEnum"
        },
        {
            "name": "shareholderCode",
            "baseName": "shareholderCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FieldType.attributeTypeMap;
    }
}

export namespace FieldType {
    export enum FieldNameEnum {
        AccountCode = 'accountCode',
        AccountHolderCode = 'accountHolderCode',
        AccountHolderDetails = 'accountHolderDetails',
        AccountNumber = 'accountNumber',
        AccountStateType = 'accountStateType',
        AccountStatus = 'accountStatus',
        AccountType = 'accountType',
        Address = 'address',
        BalanceAccount = 'balanceAccount',
        BalanceAccountActive = 'balanceAccountActive',
        BalanceAccountCode = 'balanceAccountCode',
        BalanceAccountId = 'balanceAccountId',
        BankAccount = 'bankAccount',
        BankAccountCode = 'bankAccountCode',
        BankAccountName = 'bankAccountName',
        BankAccountUuid = 'bankAccountUUID',
        BankBicSwift = 'bankBicSwift',
        BankCity = 'bankCity',
        BankCode = 'bankCode',
        BankName = 'bankName',
        BankStatement = 'bankStatement',
        BranchCode = 'branchCode',
        BusinessContact = 'businessContact',
        CardToken = 'cardToken',
        CheckCode = 'checkCode',
        City = 'city',
        CompanyRegistration = 'companyRegistration',
        ConstitutionalDocument = 'constitutionalDocument',
        Country = 'country',
        CountryCode = 'countryCode',
        Currency = 'currency',
        CurrencyCode = 'currencyCode',
        DateOfBirth = 'dateOfBirth',
        Description = 'description',
        DestinationAccountCode = 'destinationAccountCode',
        Document = 'document',
        DocumentContent = 'documentContent',
        DocumentExpirationDate = 'documentExpirationDate',
        DocumentIssuerCountry = 'documentIssuerCountry',
        DocumentIssuerState = 'documentIssuerState',
        DocumentName = 'documentName',
        DocumentNumber = 'documentNumber',
        DocumentType = 'documentType',
        DoingBusinessAs = 'doingBusinessAs',
        DrivingLicence = 'drivingLicence',
        DrivingLicenceBack = 'drivingLicenceBack',
        DrivingLicenceFront = 'drivingLicenceFront',
        DrivingLicense = 'drivingLicense',
        Email = 'email',
        FirstName = 'firstName',
        FormType = 'formType',
        FullPhoneNumber = 'fullPhoneNumber',
        Gender = 'gender',
        HopWebserviceUser = 'hopWebserviceUser',
        HouseNumberOrName = 'houseNumberOrName',
        Iban = 'iban',
        IdCard = 'idCard',
        IdCardBack = 'idCardBack',
        IdCardFront = 'idCardFront',
        IdNumber = 'idNumber',
        IdentityDocument = 'identityDocument',
        IndividualDetails = 'individualDetails',
        Infix = 'infix',
        JobTitle = 'jobTitle',
        LastName = 'lastName',
        LastReviewDate = 'lastReviewDate',
        LegalArrangement = 'legalArrangement',
        LegalArrangementCode = 'legalArrangementCode',
        LegalArrangementEntity = 'legalArrangementEntity',
        LegalArrangementEntityCode = 'legalArrangementEntityCode',
        LegalArrangementLegalForm = 'legalArrangementLegalForm',
        LegalArrangementMember = 'legalArrangementMember',
        LegalArrangementMembers = 'legalArrangementMembers',
        LegalArrangementName = 'legalArrangementName',
        LegalArrangementReference = 'legalArrangementReference',
        LegalArrangementRegistrationNumber = 'legalArrangementRegistrationNumber',
        LegalArrangementTaxNumber = 'legalArrangementTaxNumber',
        LegalArrangementType = 'legalArrangementType',
        LegalBusinessName = 'legalBusinessName',
        LegalEntity = 'legalEntity',
        LegalEntityType = 'legalEntityType',
        Logo = 'logo',
        MerchantAccount = 'merchantAccount',
        MerchantCategoryCode = 'merchantCategoryCode',
        MerchantHouseNumber = 'merchantHouseNumber',
        MerchantReference = 'merchantReference',
        MicroDeposit = 'microDeposit',
        Name = 'name',
        Nationality = 'nationality',
        OriginalReference = 'originalReference',
        OwnerCity = 'ownerCity',
        OwnerCountryCode = 'ownerCountryCode',
        OwnerDateOfBirth = 'ownerDateOfBirth',
        OwnerHouseNumberOrName = 'ownerHouseNumberOrName',
        OwnerName = 'ownerName',
        OwnerPostalCode = 'ownerPostalCode',
        OwnerState = 'ownerState',
        OwnerStreet = 'ownerStreet',
        Passport = 'passport',
        PassportNumber = 'passportNumber',
        PayoutMethodCode = 'payoutMethodCode',
        PayoutSchedule = 'payoutSchedule',
        PciSelfAssessment = 'pciSelfAssessment',
        PersonalData = 'personalData',
        PhoneCountryCode = 'phoneCountryCode',
        PhoneNumber = 'phoneNumber',
        PostalCode = 'postalCode',
        PrimaryCurrency = 'primaryCurrency',
        Reason = 'reason',
        RegistrationNumber = 'registrationNumber',
        ReturnUrl = 'returnUrl',
        Schedule = 'schedule',
        Shareholder = 'shareholder',
        ShareholderCode = 'shareholderCode',
        ShareholderCodeAndSignatoryCode = 'shareholderCodeAndSignatoryCode',
        ShareholderCodeOrSignatoryCode = 'shareholderCodeOrSignatoryCode',
        ShareholderType = 'shareholderType',
        ShopperInteraction = 'shopperInteraction',
        Signatory = 'signatory',
        SignatoryCode = 'signatoryCode',
        SocialSecurityNumber = 'socialSecurityNumber',
        SourceAccountCode = 'sourceAccountCode',
        SplitAccount = 'splitAccount',
        SplitConfigurationUuid = 'splitConfigurationUUID',
        SplitCurrency = 'splitCurrency',
        SplitValue = 'splitValue',
        Splits = 'splits',
        StateOrProvince = 'stateOrProvince',
        Status = 'status',
        StockExchange = 'stockExchange',
        StockNumber = 'stockNumber',
        StockTicker = 'stockTicker',
        Store = 'store',
        StoreDetail = 'storeDetail',
        StoreName = 'storeName',
        StoreReference = 'storeReference',
        Street = 'street',
        TaxId = 'taxId',
        Tier = 'tier',
        TierNumber = 'tierNumber',
        TransferCode = 'transferCode',
        UltimateParentCompany = 'ultimateParentCompany',
        UltimateParentCompanyAddressDetails = 'ultimateParentCompanyAddressDetails',
        UltimateParentCompanyAddressDetailsCountry = 'ultimateParentCompanyAddressDetailsCountry',
        UltimateParentCompanyBusinessDetails = 'ultimateParentCompanyBusinessDetails',
        UltimateParentCompanyBusinessDetailsLegalBusinessName = 'ultimateParentCompanyBusinessDetailsLegalBusinessName',
        UltimateParentCompanyBusinessDetailsRegistrationNumber = 'ultimateParentCompanyBusinessDetailsRegistrationNumber',
        UltimateParentCompanyCode = 'ultimateParentCompanyCode',
        UltimateParentCompanyStockExchange = 'ultimateParentCompanyStockExchange',
        UltimateParentCompanyStockNumber = 'ultimateParentCompanyStockNumber',
        UltimateParentCompanyStockNumberOrStockTicker = 'ultimateParentCompanyStockNumberOrStockTicker',
        UltimateParentCompanyStockTicker = 'ultimateParentCompanyStockTicker',
        Unknown = 'unknown',
        Value = 'value',
        VerificationType = 'verificationType',
        VirtualAccount = 'virtualAccount',
        VisaNumber = 'visaNumber',
        WebAddress = 'webAddress',
        Year = 'year'
    }
}
