/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
/* tslint:disable:no-unused-locals */
import { ApplePayInfo } from '../../typings/management/models';
import { PaymentMethod } from '../../typings/management/models';
import { PaymentMethodResponse } from '../../typings/management/models';
import { PaymentMethodSetupInfo } from '../../typings/management/models';
import { UpdatePaymentMethodInfo } from '../../typings/management/models';
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";
import { ObjectSerializer } from "../../typings/management/models";


export default class PaymentMethodsMerchantLevelApi extends Service {
    /**
     * @summary Get all payment methods
     * @param merchantId The unique identifier of the merchant account.
     * @param storeId The unique identifier of the store for which to return the payment methods.
     * @param businessLineId The unique identifier of the Business Line for which to return the payment methods.
     * @param pageSize The number of items to have on a page, maximum 100. The default is 10 items on a page.
     * @param pageNumber The number of the page to fetch.
     */
    public async getAllPaymentMethods(merchantId: string, requestOptions?: IRequest.Options): Promise<PaymentMethodResponse> {
        const localVarPath = "/merchants/{merchantId}/paymentMethodSettings"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, PaymentMethodResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PaymentMethodResponse");
    }
    /**
     * @summary Get payment method details
     * @param merchantId The unique identifier of the merchant account.
     * @param paymentMethodId The unique identifier of the payment method.
     */
    public async getPaymentMethodDetails(merchantId: string, paymentMethodId: string, requestOptions?: IRequest.Options): Promise<PaymentMethod> {
        const localVarPath = "/merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'paymentMethodId' + '}', encodeURIComponent(String(paymentMethodId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, PaymentMethod>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PaymentMethod");
    }
    /**
     * @summary Get Apple Pay domains
     * @param merchantId The unique identifier of the merchant account.
     * @param paymentMethodId The unique identifier of the payment method.
     */
    public async getApplePayDomains(merchantId: string, paymentMethodId: string, requestOptions?: IRequest.Options): Promise<ApplePayInfo> {
        const localVarPath = "/merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}/getApplePayDomains"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'paymentMethodId' + '}', encodeURIComponent(String(paymentMethodId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, ApplePayInfo>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ApplePayInfo");
    }
    /**
     * @summary Update a payment method
     * @param merchantId The unique identifier of the merchant account.
     * @param paymentMethodId The unique identifier of the payment method.
     * @param updatePaymentMethodInfo 
     */
    public async updatePaymentMethod(merchantId: string, paymentMethodId: string, updatePaymentMethodInfo: UpdatePaymentMethodInfo, requestOptions?: IRequest.Options): Promise<PaymentMethod> {
        const localVarPath = "/merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'paymentMethodId' + '}', encodeURIComponent(String(paymentMethodId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: UpdatePaymentMethodInfo = ObjectSerializer.serialize(updatePaymentMethodInfo, "UpdatePaymentMethodInfo");
        const response = await getJsonResponse<UpdatePaymentMethodInfo, PaymentMethod>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "PaymentMethod");
    }
    /**
     * @summary Request a payment method
     * @param merchantId The unique identifier of the merchant account.
     * @param paymentMethodSetupInfo 
     */
    public async requestPaymentMethod(merchantId: string, paymentMethodSetupInfo: PaymentMethodSetupInfo, requestOptions?: IRequest.Options): Promise<PaymentMethod> {
        const localVarPath = "/merchants/{merchantId}/paymentMethodSettings"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: PaymentMethodSetupInfo = ObjectSerializer.serialize(paymentMethodSetupInfo, "PaymentMethodSetupInfo");
        const response = await getJsonResponse<PaymentMethodSetupInfo, PaymentMethod>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentMethod");
    }
    /**
     * @summary Add an Apple Pay domain
     * @param merchantId The unique identifier of the merchant account.
     * @param paymentMethodId The unique identifier of the payment method.
     * @param applePayInfo 
     */
    public async addApplePayDomain(merchantId: string, paymentMethodId: string, applePayInfo: ApplePayInfo, requestOptions?: IRequest.Options): Promise<void> {
        const localVarPath = "/merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}/addApplePayDomains"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'paymentMethodId' + '}', encodeURIComponent(String(paymentMethodId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: ApplePayInfo = ObjectSerializer.serialize(applePayInfo, "ApplePayInfo");
        await getJsonResponse<ApplePayInfo, void>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
    }
}