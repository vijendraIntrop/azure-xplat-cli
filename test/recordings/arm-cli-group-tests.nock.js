// This file has been autogenerated.

var profile = require('../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '00977cdb-163f-435f-9c32-39ec8ae61f4d',
    name: 'node',
    username: 'user@domain.example',
    registeredProviders: ['sqlserver', 'visualstudio.account', 'website'],
    registeredResourceNamespaces: ['microsoft.insights', 'successbricks.cleardb'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://login.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/common/oauth2/token', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1403654794\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtyaU1QZG1Cdng2OHNrVDgtbVBBQjNCc2VlQSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDAzNjUwODk0LCJuYmYiOjE0MDM2NTA4OTQsImV4cCI6MTQwMzY1NDc5NCwidmVyIjoiMS4wIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwiYW1yIjpbInB3ZCJdLCJvaWQiOiJhMzBkYjA2Ny1jZGUxLTQ5YmUtOTViYi05NjE5YThjYzg2MTciLCJ1cG4iOiJ5dWdhbmd3QG1pY3Jvc29mdC5jb20iLCJ1bmlxdWVfbmFtZSI6Inl1Z2FuZ3dAbWljcm9zb2Z0LmNvbSIsInN1YiI6ImJLYmZLT3QwUVV5Z3RCRnpFZVMycU5VVWZfbFFSOWpjeGVzRHFwbVZkTXciLCJwdWlkIjoiMTAwMzAwMDA4MDFDNDREMyIsImZhbWlseV9uYW1lIjoiV2FuZyIsImdpdmVuX25hbWUiOiJZdWdhbmciLCJhcHBpZCI6IjA0YjA3Nzk1LThkZGItNDYxYS1iYmVlLTAyZjllMWJmN2I0NiIsImFwcGlkYWNyIjoiMCIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsImFjciI6IjEifQ.Z3gO2_AhpJt2DvCR5PbIAE5r8kBaoUQxPk4PuGJyao4n0bqgYgwNiuFG2NyD4cm0En-8ByeRQmcoqmDYJZIQ7tpxir1dApWAhW0EefwfIk7LT59jmTfC-RSc2LOBDxWQp_ILzqwfxMaiWLe_4_AXyB6DQ59Hf8z6DvHpnGI95aurAEtMl_9-TZky8Snzm2qYoVxKFDCS3wr_PgqI6wGpfsW-4fMciROiyCkh1mjWe9mBBOqcMz3_TJ3G1Wn9wYuRg54W2kq3LI_J9-oiY-tumBQSTYcye3FgUjE65_1jK1LTTQcm8a8EjFR9UtV-JCTDfTVb1NOhGagdkQ0lEiEC7w\",\"refresh_token\":\"AwABAAAAvPM1KaPlrEqdFSBzjqfTGBCN23ccok2NAELOlB5w46IxFS3FpnWE81vhmp5B1VwEPjd2I4PGbNQqXa0ODoQX6quhq5o3hTxXc4awdGZokxwCTR2TenTvESWEg-7gaX00j6iHIwENuBabdpOnlkHmgDs7ajuYUKBKp0s9UT4D2cKc_E2g8WYzBLPvlHPj8EZZHPfxlh5Gxg4tlPGP-R9fFynaoD8sU9ZelPMKzJpms_w07cqApa6WjfwPwKfupnGXnWHrxLk0YCc3ZXw5RqEQQM2k1StetUDrMUQOknY40uA9nPKGCtDW6z2KlO35RYdpc9tJj_zbimpxsIimacvu8BAioltp3JQFe06W8EE-e0DXCp6EpE80c96z-2r2Lss0IAA\",\"scope\":\"user_impersonation\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.0',
  'x-ms-request-id': '6e27f75c-4eb3-437b-ae39-1f7bb9565318',
  'client-request-id': '5e19d3c4-f94a-4231-b9e1-f54b2d58f7b3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': 
   [ 'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 24 Jun 2014 23:06:33 GMT',
  'content-length': '1770' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/ygtag/\",\"tagName\":\"ygtag\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[]}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31998',
  'x-ms-request-id': '013b9307-e208-4beb-9e96-97a5dce9ece0',
  'x-ms-correlation-request-id': '013b9307-e208-4beb-9e96-97a5dce9ece0',
  'x-ms-routing-request-id': 'WESTUS:20140624T230635Z:013b9307-e208-4beb-9e96-97a5dce9ece0',
  date: 'Tue, 24 Jun 2014 23:06:34 GMT',
  'content-length': '153' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/xplatTestTagCreate1?api-version=2014-04-01-preview')
  .reply(201, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/xplatTestTagCreate1/\",\"tagName\":\"xplatTestTagCreate1\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'fb018fe2-cf8f-4c52-aa09-cd3f7a0e9fb0',
  'x-ms-correlation-request-id': 'fb018fe2-cf8f-4c52-aa09-cd3f7a0e9fb0',
  'x-ms-routing-request-id': 'WESTUS:20140624T230635Z:fb018fe2-cf8f-4c52-aa09-cd3f7a0e9fb0',
  date: 'Tue, 24 Jun 2014 23:06:35 GMT',
  'content-length': '169' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .put('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/xplatTestTagCreate1/tagValues/foobar?api-version=2014-04-01-preview')
  .reply(201, "{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/xplatTestTagCreate1/tagValues/foobar\",\"tagValue\":\"foobar\",\"count\":{\"type\":\"Total\",\"value\":0}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '07bc1235-2639-43f3-82ed-42ecd5b6113d',
  'x-ms-correlation-request-id': '07bc1235-2639-43f3-82ed-42ecd5b6113d',
  'x-ms-routing-request-id': 'WESTUS:20140624T230636Z:07bc1235-2639-43f3-82ed-42ecd5b6113d',
  date: 'Tue, 24 Jun 2014 23:06:36 GMT',
  'content-length': '161' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/xplatTestTagCreate1/\",\"tagName\":\"xplatTestTagCreate1\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/xplatTestTagCreate1/tagValues/foobar\",\"tagValue\":\"foobar\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/ygtag/\",\"tagName\":\"ygtag\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[]}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31995',
  'x-ms-request-id': 'e9fa2924-229a-41e9-b6ad-b04a009e5ee8',
  'x-ms-correlation-request-id': 'e9fa2924-229a-41e9-b6ad-b04a009e5ee8',
  'x-ms-routing-request-id': 'WESTUS:20140624T230636Z:e9fa2924-229a-41e9-b6ad-b04a009e5ee8',
  date: 'Tue, 24 Jun 2014 23:06:36 GMT',
  'content-length': '484' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/xplatTestTagCreate1/tagValues/foobar?api-version=2014-04-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': 'd6b1b09f-2e82-476c-91cb-2856bc95a3c2',
  'x-ms-correlation-request-id': 'd6b1b09f-2e82-476c-91cb-2856bc95a3c2',
  'x-ms-routing-request-id': 'WESTUS:20140624T230637Z:d6b1b09f-2e82-476c-91cb-2856bc95a3c2',
  date: 'Tue, 24 Jun 2014 23:06:36 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/00977cdb-163f-435f-9c32-39ec8ae61f4d/tagNames/xplatTestTagCreate1/tagValues/foobar?api-version=2014-04-01-preview')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '32559831-562e-4053-86a5-caf3c3f096fd',
  'x-ms-correlation-request-id': '32559831-562e-4053-86a5-caf3c3f096fd',
  'x-ms-routing-request-id': 'WESTUS:20140624T230637Z:32559831-562e-4053-86a5-caf3c3f096fd',
  date: 'Tue, 24 Jun 2014 23:06:37 GMT' });
 return result; }],
[]];