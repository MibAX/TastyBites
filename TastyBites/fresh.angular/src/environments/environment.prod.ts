import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'TastyBites',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44346/',
    redirectUri: baseUrl,
    clientId: 'TastyBites_App',
    responseType: 'code',
    scope: 'offline_access TastyBites',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44346',
      rootNamespace: 'TastyBites',
    },
  },
} as Environment;
