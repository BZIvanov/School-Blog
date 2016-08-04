(function () {

    let baseUrl = "https://baas.kinvey.com";
    let appKey = "kid_r1gL-S6w";
    let appSecret = "e6cd156373224472aa6bc3aa88a80d71";
    let _guestCredentials = "3adae296-7ddf-4c15-b2b5-4b6ee5df9ae5.qDRapBD5RUV1DP7pgv8kU/aWQeIyDEaq80T2zttptuA=";

    let authService = new AuthorizationService(baseUrl,appKey,appSecret,_guestCredentials);
    let requester = new Requester(authService);

    
}
