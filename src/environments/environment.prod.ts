export const environment = {
  production: false,
  auth0: {
    domain: 'dev-isoft.us.auth0.com',
    clientId: 'lERzBtf7cxB37irvf5ON8ZPjyXXnYYyR',
    authorizationParams: {
      redirect_uri: 'http://localhost:4040/callback',
    },
    errorPath: '/callback',
  },
  api: {
    serverUrl: 'http://localhost:6060',
  },
};