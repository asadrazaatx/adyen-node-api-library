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
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

export * from './account';
export * from './accountEvent';
export * from './accountHolderDetails';
export * from './accountHolderStatus';
export * from './accountPayoutState';
export * from './accountProcessingState';
export * from './amount';
export * from './bankAccountDetail';
export * from './businessDetails';
export * from './closeAccountHolderRequest';
export * from './closeAccountHolderResponse';
export * from './closeAccountRequest';
export * from './closeAccountResponse';
export * from './createAccountHolderRequest';
export * from './createAccountHolderResponse';
export * from './createAccountRequest';
export * from './createAccountResponse';
export * from './deleteBankAccountRequest';
export * from './deletePayoutMethodRequest';
export * from './deleteShareholderRequest';
export * from './deleteSignatoriesRequest';
export * from './documentDetail';
export * from './errorFieldType';
export * from './fieldType';
export * from './genericResponse';
export * from './getAccountHolderRequest';
export * from './getAccountHolderResponse';
export * from './getAccountHolderStatusResponse';
export * from './getTaxFormRequest';
export * from './getTaxFormResponse';
export * from './getUploadedDocumentsRequest';
export * from './getUploadedDocumentsResponse';
export * from './individualDetails';
export * from './kYCCheckResult2';
export * from './kYCCheckStatusData';
export * from './kYCCheckSummary';
export * from './kYCLegalArrangementCheckResult';
export * from './kYCLegalArrangementEntityCheckResult';
export * from './kYCPayoutMethodCheckResult';
export * from './kYCShareholderCheckResult';
export * from './kYCSignatoryCheckResult';
export * from './kYCVerificationResult2';
export * from './legalArrangementDetail';
export * from './legalArrangementEntityDetail';
export * from './payoutMethod';
export * from './payoutScheduleResponse';
export * from './performVerificationRequest';
export * from './personalDocumentData';
export * from './serviceError';
export * from './shareholderContact';
export * from './signatoryContact';
export * from './storeDetail';
export * from './suspendAccountHolderRequest';
export * from './suspendAccountHolderResponse';
export * from './unSuspendAccountHolderRequest';
export * from './unSuspendAccountHolderResponse';
export * from './updateAccountHolderRequest';
export * from './updateAccountHolderResponse';
export * from './updateAccountHolderStateRequest';
export * from './updateAccountRequest';
export * from './updateAccountResponse';
export * from './updatePayoutScheduleRequest';
export * from './uploadDocumentRequest';
export * from './viasAddress';
export * from './viasName';
export * from './viasPersonalData';
export * from './viasPhoneNumber';

import * as fs from 'fs';
import {Account} from './account';
import {AccountEvent} from './accountEvent';
import {AccountHolderDetails} from './accountHolderDetails';
import {AccountHolderStatus} from './accountHolderStatus';
import {AccountPayoutState} from './accountPayoutState';
import {AccountProcessingState} from './accountProcessingState';
import {Amount} from './amount';
import {BankAccountDetail} from './bankAccountDetail';
import {BusinessDetails} from './businessDetails';
import {CloseAccountHolderRequest} from './closeAccountHolderRequest';
import {CloseAccountHolderResponse} from './closeAccountHolderResponse';
import {CloseAccountRequest} from './closeAccountRequest';
import {CloseAccountResponse} from './closeAccountResponse';
import {CreateAccountHolderRequest} from './createAccountHolderRequest';
import {CreateAccountHolderResponse} from './createAccountHolderResponse';
import {CreateAccountRequest} from './createAccountRequest';
import {CreateAccountResponse} from './createAccountResponse';
import {DeleteBankAccountRequest} from './deleteBankAccountRequest';
import {DeletePayoutMethodRequest} from './deletePayoutMethodRequest';
import {DeleteShareholderRequest} from './deleteShareholderRequest';
import {DeleteSignatoriesRequest} from './deleteSignatoriesRequest';
import {DocumentDetail} from './documentDetail';
import {ErrorFieldType} from './errorFieldType';
import {FieldType} from './fieldType';
import {GenericResponse} from './genericResponse';
import {GetAccountHolderRequest} from './getAccountHolderRequest';
import {GetAccountHolderResponse} from './getAccountHolderResponse';
import {GetAccountHolderStatusResponse} from './getAccountHolderStatusResponse';
import {GetTaxFormRequest} from './getTaxFormRequest';
import {GetTaxFormResponse} from './getTaxFormResponse';
import {GetUploadedDocumentsRequest} from './getUploadedDocumentsRequest';
import {GetUploadedDocumentsResponse} from './getUploadedDocumentsResponse';
import {IndividualDetails} from './individualDetails';
import {KYCCheckResult2} from './kYCCheckResult2';
import {KYCCheckStatusData} from './kYCCheckStatusData';
import {KYCCheckSummary} from './kYCCheckSummary';
import {KYCLegalArrangementCheckResult} from './kYCLegalArrangementCheckResult';
import {KYCLegalArrangementEntityCheckResult} from './kYCLegalArrangementEntityCheckResult';
import {KYCPayoutMethodCheckResult} from './kYCPayoutMethodCheckResult';
import {KYCShareholderCheckResult} from './kYCShareholderCheckResult';
import {KYCSignatoryCheckResult} from './kYCSignatoryCheckResult';
import {KYCVerificationResult2} from './kYCVerificationResult2';
import {LegalArrangementDetail} from './legalArrangementDetail';
import {LegalArrangementEntityDetail} from './legalArrangementEntityDetail';
import {PayoutMethod} from './payoutMethod';
import {PayoutScheduleResponse} from './payoutScheduleResponse';
import {PerformVerificationRequest} from './performVerificationRequest';
import {PersonalDocumentData} from './personalDocumentData';
import {ServiceError} from './serviceError';
import {ShareholderContact} from './shareholderContact';
import {SignatoryContact} from './signatoryContact';
import {StoreDetail} from './storeDetail';
import {SuspendAccountHolderRequest} from './suspendAccountHolderRequest';
import {SuspendAccountHolderResponse} from './suspendAccountHolderResponse';
import {UnSuspendAccountHolderRequest} from './unSuspendAccountHolderRequest';
import {UnSuspendAccountHolderResponse} from './unSuspendAccountHolderResponse';
import {UpdateAccountHolderRequest} from './updateAccountHolderRequest';
import {UpdateAccountHolderResponse} from './updateAccountHolderResponse';
import {UpdateAccountHolderStateRequest} from './updateAccountHolderStateRequest';
import {UpdateAccountRequest} from './updateAccountRequest';
import {UpdateAccountResponse} from './updateAccountResponse';
import {UpdatePayoutScheduleRequest} from './updatePayoutScheduleRequest';
import {UploadDocumentRequest} from './uploadDocumentRequest';
import {ViasAddress} from './viasAddress';
import {ViasName} from './viasName';
import {ViasPersonalData} from './viasPersonalData';
import {ViasPhoneNumber} from './viasPhoneNumber';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "Account.PayoutSpeedEnum": Account.PayoutSpeedEnum,
        "AccountEvent.EventEnum": AccountEvent.EventEnum,
        "AccountHolderStatus.StatusEnum": AccountHolderStatus.StatusEnum,
        "CloseAccountResponse.StatusEnum": CloseAccountResponse.StatusEnum,
        "CreateAccountHolderRequest.LegalEntityEnum": CreateAccountHolderRequest.LegalEntityEnum,
        "CreateAccountHolderResponse.LegalEntityEnum": CreateAccountHolderResponse.LegalEntityEnum,
        "CreateAccountRequest.PayoutScheduleEnum": CreateAccountRequest.PayoutScheduleEnum,
        "CreateAccountRequest.PayoutSpeedEnum": CreateAccountRequest.PayoutSpeedEnum,
        "CreateAccountResponse.PayoutSpeedEnum": CreateAccountResponse.PayoutSpeedEnum,
        "CreateAccountResponse.StatusEnum": CreateAccountResponse.StatusEnum,
        "DocumentDetail.DocumentTypeEnum": DocumentDetail.DocumentTypeEnum,
        "FieldType.FieldNameEnum": FieldType.FieldNameEnum,
        "GetAccountHolderResponse.LegalEntityEnum": GetAccountHolderResponse.LegalEntityEnum,
        "KYCCheckStatusData.StatusEnum": KYCCheckStatusData.StatusEnum,
        "KYCCheckStatusData.TypeEnum": KYCCheckStatusData.TypeEnum,
        "LegalArrangementDetail.LegalFormEnum": LegalArrangementDetail.LegalFormEnum,
        "LegalArrangementDetail.TypeEnum": LegalArrangementDetail.TypeEnum,
        "LegalArrangementEntityDetail.LegalArrangementMemberEnum": LegalArrangementEntityDetail.LegalArrangementMemberEnum,
        "LegalArrangementEntityDetail.LegalEntityTypeEnum": LegalArrangementEntityDetail.LegalEntityTypeEnum,
        "PayoutMethod.PayoutMethodTypeEnum": PayoutMethod.PayoutMethodTypeEnum,
        "PayoutScheduleResponse.ScheduleEnum": PayoutScheduleResponse.ScheduleEnum,
        "PerformVerificationRequest.AccountStateTypeEnum": PerformVerificationRequest.AccountStateTypeEnum,
        "PersonalDocumentData.TypeEnum": PersonalDocumentData.TypeEnum,
        "ShareholderContact.ShareholderTypeEnum": ShareholderContact.ShareholderTypeEnum,
        "StoreDetail.ShopperInteractionEnum": StoreDetail.ShopperInteractionEnum,
        "StoreDetail.StatusEnum": StoreDetail.StatusEnum,
        "UpdateAccountHolderRequest.LegalEntityEnum": UpdateAccountHolderRequest.LegalEntityEnum,
        "UpdateAccountHolderResponse.LegalEntityEnum": UpdateAccountHolderResponse.LegalEntityEnum,
        "UpdateAccountHolderStateRequest.StateTypeEnum": UpdateAccountHolderStateRequest.StateTypeEnum,
        "UpdateAccountRequest.PayoutSpeedEnum": UpdateAccountRequest.PayoutSpeedEnum,
        "UpdateAccountResponse.PayoutSpeedEnum": UpdateAccountResponse.PayoutSpeedEnum,
        "UpdatePayoutScheduleRequest.ActionEnum": UpdatePayoutScheduleRequest.ActionEnum,
        "UpdatePayoutScheduleRequest.ScheduleEnum": UpdatePayoutScheduleRequest.ScheduleEnum,
        "ViasName.GenderEnum": ViasName.GenderEnum,
        "ViasPhoneNumber.PhoneTypeEnum": ViasPhoneNumber.PhoneTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AccountEvent": AccountEvent,
    "AccountHolderDetails": AccountHolderDetails,
    "AccountHolderStatus": AccountHolderStatus,
    "AccountPayoutState": AccountPayoutState,
    "AccountProcessingState": AccountProcessingState,
    "Amount": Amount,
    "BankAccountDetail": BankAccountDetail,
    "BusinessDetails": BusinessDetails,
    "CloseAccountHolderRequest": CloseAccountHolderRequest,
    "CloseAccountHolderResponse": CloseAccountHolderResponse,
    "CloseAccountRequest": CloseAccountRequest,
    "CloseAccountResponse": CloseAccountResponse,
    "CreateAccountHolderRequest": CreateAccountHolderRequest,
    "CreateAccountHolderResponse": CreateAccountHolderResponse,
    "CreateAccountRequest": CreateAccountRequest,
    "CreateAccountResponse": CreateAccountResponse,
    "DeleteBankAccountRequest": DeleteBankAccountRequest,
    "DeletePayoutMethodRequest": DeletePayoutMethodRequest,
    "DeleteShareholderRequest": DeleteShareholderRequest,
    "DeleteSignatoriesRequest": DeleteSignatoriesRequest,
    "DocumentDetail": DocumentDetail,
    "ErrorFieldType": ErrorFieldType,
    "FieldType": FieldType,
    "GenericResponse": GenericResponse,
    "GetAccountHolderRequest": GetAccountHolderRequest,
    "GetAccountHolderResponse": GetAccountHolderResponse,
    "GetAccountHolderStatusResponse": GetAccountHolderStatusResponse,
    "GetTaxFormRequest": GetTaxFormRequest,
    "GetTaxFormResponse": GetTaxFormResponse,
    "GetUploadedDocumentsRequest": GetUploadedDocumentsRequest,
    "GetUploadedDocumentsResponse": GetUploadedDocumentsResponse,
    "IndividualDetails": IndividualDetails,
    "KYCCheckResult2": KYCCheckResult2,
    "KYCCheckStatusData": KYCCheckStatusData,
    "KYCCheckSummary": KYCCheckSummary,
    "KYCLegalArrangementCheckResult": KYCLegalArrangementCheckResult,
    "KYCLegalArrangementEntityCheckResult": KYCLegalArrangementEntityCheckResult,
    "KYCPayoutMethodCheckResult": KYCPayoutMethodCheckResult,
    "KYCShareholderCheckResult": KYCShareholderCheckResult,
    "KYCSignatoryCheckResult": KYCSignatoryCheckResult,
    "KYCVerificationResult2": KYCVerificationResult2,
    "LegalArrangementDetail": LegalArrangementDetail,
    "LegalArrangementEntityDetail": LegalArrangementEntityDetail,
    "PayoutMethod": PayoutMethod,
    "PayoutScheduleResponse": PayoutScheduleResponse,
    "PerformVerificationRequest": PerformVerificationRequest,
    "PersonalDocumentData": PersonalDocumentData,
    "ServiceError": ServiceError,
    "ShareholderContact": ShareholderContact,
    "SignatoryContact": SignatoryContact,
    "StoreDetail": StoreDetail,
    "SuspendAccountHolderRequest": SuspendAccountHolderRequest,
    "SuspendAccountHolderResponse": SuspendAccountHolderResponse,
    "UnSuspendAccountHolderRequest": UnSuspendAccountHolderRequest,
    "UnSuspendAccountHolderResponse": UnSuspendAccountHolderResponse,
    "UpdateAccountHolderRequest": UpdateAccountHolderRequest,
    "UpdateAccountHolderResponse": UpdateAccountHolderResponse,
    "UpdateAccountHolderStateRequest": UpdateAccountHolderStateRequest,
    "UpdateAccountRequest": UpdateAccountRequest,
    "UpdateAccountResponse": UpdateAccountResponse,
    "UpdatePayoutScheduleRequest": UpdatePayoutScheduleRequest,
    "UploadDocumentRequest": UploadDocumentRequest,
    "ViasAddress": ViasAddress,
    "ViasName": ViasName,
    "ViasPersonalData": ViasPersonalData,
    "ViasPhoneNumber": ViasPhoneNumber,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}