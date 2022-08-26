import nock from "nock";
import {createClient} from "../__mocks__/base";
import Client from "../client";
import ClassicIntegration from "../services/classicIntegration";
import { PaymentRequest } from "../typings/payments/paymentRequest";
import { PaymentResult } from "../typings/payments/paymentResult";
import { PaymentRequest3d } from "../typings/payments/paymentRequest3d";
import { PaymentRequest3ds2 } from "../typings/payments/paymentRequest3ds2";
import { AuthenticationResultRequest } from "../typings/payments/authenticationResultRequest";
import { AuthenticationResultResponse } from "../typings/payments/authenticationResultResponse";
import { ThreeDS2ResultRequest } from "../typings/payments/threeDS2ResultRequest";
import { ThreeDS2ResultResponse } from "../typings/payments/threeDS2ResultResponse";
import { ModificationResult } from "../typings/payments/modificationResult";
import { CaptureRequest } from "../typings/payments/captureRequest";
import { CancelRequest } from "../typings/payments/cancelRequest";
import { RefundRequest } from "../typings/payments/refundRequest";
import { CancelOrRefundRequest } from "../typings/payments/cancelOrRefundRequest";
import { TechnicalCancelRequest } from "../typings/payments/technicalCancelRequest";
import { AdjustAuthorisationRequest } from "../typings/payments/adjustAuthorisationRequest";
import { DonationRequest } from "../typings/payments/donationRequest";
import { VoidPendingRefundRequest } from "../typings/payments/voidPendingRefundRequest";

let client: Client;
let classicIntegration: ClassicIntegration;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock(`${client.config.paymentEndpoint}/${Client.PAYMENT_API_VERSION}`);
    classicIntegration = new ClassicIntegration(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Classic Integration", (): void => {
    test("Should authorise payment", async (): Promise<void> => {
        scope.post("/authorise")
            .reply(200, {
                "additionalData": {
                "scaExemptionRequested": "transactionRiskAnalysis",
                "checkout.cardAddedBrand": "visa"
                },
                "pspReference": "JVBXGSDM53RZNN82",
                "resultCode": "Authorised",
                "authCode": "011381"
            }
        );
        const paymentRequest: PaymentRequest = {
            "card": {
                "number": "4111111111111111",
                "expiryMonth": "03",
                "expiryYear": "2030",
                "cvc": "737",
                "holderName": "John Smith"
              },
              "amount": {
                "value": 1500,
                "currency": "EUR"
              },
              "reference": "YOUR_REFERENCE",
              "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
        };

        const paymentResult: PaymentResult = await classicIntegration.authorise(paymentRequest);
        expect(paymentResult.pspReference).toEqual("JVBXGSDM53RZNN82");
    });

    test("Should complete 3DS authorisation", async (): Promise<void> => {
        scope.post("/authorise3d")
            .reply(200, {
                "additionalData": {
                "scaExemptionRequested": "transactionRiskAnalysis",
                "checkout.cardAddedBrand": "visa"
                },
                "pspReference": "JVBXGSDM53RZNN82",
                "resultCode": "Authorised",
                "authCode": "011381"
            }
        );
        const paymentRequest: PaymentRequest3d = {
            "md": "31h..........vOXek7w",
            "paResponse": "eNqtmF........wGVA4Ch",
            "shopperIP": "61.294.12.12",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          };

        const paymentResult: PaymentResult = await classicIntegration.authorise3d(paymentRequest);
        expect(paymentResult.pspReference).toEqual("JVBXGSDM53RZNN82");
    });

    test("Should complete 3DS2 authorisation", async (): Promise<void> => {
        scope.post("/authorise3ds2")
            .reply(200, {
                "additionalData": {
                "scaExemptionRequested": "transactionRiskAnalysis",
                "checkout.cardAddedBrand": "visa"
                },
                "pspReference": "JVBXGSDM53RZNN82",
                "resultCode": "Authorised",
                "authCode": "011381"
            }
        );
        const paymentRequest: PaymentRequest3ds2 = {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "amount": {
                "value": 1500,
                "currency": "EUR"
              },
            "reference": "YOUR_REFERENCE",
            "threeDS2RequestData": {
              "threeDSCompInd": "Y",
              "deviceChannel": "testDeviceChannel"
            },
            "threeDS2Token": "— - BINARY DATA - -"
          };

        const paymentResult: PaymentResult = await classicIntegration.authorise3ds2(paymentRequest);
        expect(paymentResult.pspReference).toEqual("JVBXGSDM53RZNN82");
    });

    test("Should get auth result after 3DS authentication", async (): Promise<void> => {
        scope.post("/getAuthenticationResult").reply(200, {
            "threeDS2Result": { "authenticationValue": "THREEDS2RESULT"}
        });

        const getAuthenticationResultrequest: AuthenticationResultRequest = {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "pspReference": "9935272408535455"
        };

        const getAuthenticationResultResponse: AuthenticationResultResponse = await classicIntegration.getAuthenticationResult(getAuthenticationResultrequest);
        expect(getAuthenticationResultResponse?.threeDS2Result?.authenticationValue).toEqual("THREEDS2RESULT");
    });

    test("Should retrieve 3DS2 result", async (): Promise<void> => {
        scope.post("/retrieve3ds2Result").reply(200, {
            "threeDS2Result": { "authenticationValue": "THREEDS2RESULT"}
        });
        const retrieve3ds2ResultRequest: ThreeDS2ResultRequest = {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "pspReference": "9935272408535455"
          };

        const retrieve3ds2ResultResponse: ThreeDS2ResultResponse = await classicIntegration.retrieve3ds2Result(retrieve3ds2ResultRequest);
        expect(retrieve3ds2ResultResponse?.threeDS2Result?.authenticationValue).toEqual("THREEDS2RESULT");
    });

    test("Should succesfully send Capture request", async (): Promise<void> => {
        scope.post("/capture")
            .reply(200, {
                "pspReference": "YOUR_REFERENCE",
                "response": "[capture-received]"
            });

        const modificationRequest: CaptureRequest = {
            "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
            "modificationAmount": {
              "value": 500,
              "currency": "EUR"
            },
            "reference": "YourModificationReference",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          };

          const modificationResult: ModificationResult = await classicIntegration.capture(modificationRequest);
          expect(modificationResult.response).toEqual(ModificationResult.ResponseEnum.CaptureReceived);
    });

    test("Should succesfully send Cancel request", async (): Promise<void> => {
        scope.post("/cancel")
            .reply(200, {
                "pspReference": "YOUR_REFERENCE",
                "response": "[cancel-received]"
            });

        const modificationRequest: CancelRequest = {
            "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
            "reference": "YourModificationReference",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          };

          const modificationResult: ModificationResult = await classicIntegration.cancel(modificationRequest);
          expect(modificationResult.response).toEqual(ModificationResult.ResponseEnum.CancelReceived);
    });

    test("Should succesfully send Refund request", async (): Promise<void> => {
        scope.post("/refund")
            .reply(200, {
                "pspReference": "YOUR_REFERENCE",
                "response": "[refund-received]"
            });

        const modificationRequest: RefundRequest = {
            "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
            "modificationAmount": {
              "value": 500,
              "currency": "EUR"
            },
            "reference": "YourModificationReference",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          };

          const modificationResult: ModificationResult = await classicIntegration.refund(modificationRequest);
          expect(modificationResult.response).toEqual(ModificationResult.ResponseEnum.RefundReceived);
    });

    test("Should succesfully send CancelOrRefund request", async (): Promise<void> => {
        scope.post("/cancelOrRefund")
            .reply(200, {
                "pspReference": "YOUR_REFERENCE",
                "response": "[cancelOrRefund-received]"
            });

        const modificationRequest: CancelOrRefundRequest = {
            "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
            "reference": "YourModificationReference",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          };

          const modificationResult: ModificationResult = await classicIntegration.cancelOrRefund(modificationRequest);
          expect(modificationResult.response).toEqual(ModificationResult.ResponseEnum.CancelOrRefundReceived);
    });
    
    test("Should succesfully send TechnicalCancel request", async (): Promise<void> => {
        scope.post("/technicalCancel")
            .reply(200, {
                "pspReference": "YOUR_REFERENCE",
                "response": "[technical-cancel-received]"
            });

        const modificationRequest: TechnicalCancelRequest = {
            "originalMerchantReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
            "modificationAmount": {
              "value": 500,
              "currency": "EUR"
            },
            "reference": "YourModificationReference",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          };

          const modificationResult: ModificationResult = await classicIntegration.technicalCancel(modificationRequest);
          expect(modificationResult.response).toEqual(ModificationResult.ResponseEnum.TechnicalCancelReceived);
    });

    test("Should succesfully send AdjustAuthorisation request", async (): Promise<void> => {
        scope.post("/adjustAuthorisation")
            .reply(200, {
                "pspReference": "YOUR_REFERENCE",
                "response": "[adjustAuthorisation-received]"
            });

        const modificationRequest: AdjustAuthorisationRequest = {
            "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
            "modificationAmount": {
              "value": 500,
              "currency": "EUR"
            },
            "reference": "YourModificationReference",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          };

          const modificationResult: ModificationResult = await classicIntegration.adjustAuthorisation(modificationRequest);
          expect(modificationResult.response).toEqual(ModificationResult.ResponseEnum.AdjustAuthorisationReceived);
    });

    test("Should succesfully send Donate request", async (): Promise<void> => {
        scope.post("/donate")
            .reply(200, {
                "pspReference": "YOUR_REFERENCE",
                "response": "[donation-received]"
            });

        const modificationRequest: DonationRequest = {
            "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
            "modificationAmount": {
              "value": 500,
              "currency": "EUR"
            },
            "reference": "YOUR_DONATION_REFERENCE",
            "donationAccount": "AdyenGivingDemo",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          };

          const modificationResult: ModificationResult = await classicIntegration.donate(modificationRequest);
          expect(modificationResult.response).toEqual(ModificationResult.ResponseEnum.DonationReceived);
    });

    test("Should succesfully send VoidPendingRefund request", async (): Promise<void> => {
        scope.post("/voidPendingRefund")
            .reply(200, {
                "pspReference": "YOUR_REFERENCE",
                "response": "[voidPendingRefund-received]"
            });

        const modificationRequest: VoidPendingRefundRequest = {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "tenderReference": "5Iw8001176969533005",
            "uniqueTerminalId": "VX820-123456789"
          };

          const modificationResult: ModificationResult = await classicIntegration.voidPendingRefund(modificationRequest);
          expect(modificationResult.response).toEqual(ModificationResult.ResponseEnum.VoidPendingRefundReceived);
    });
});