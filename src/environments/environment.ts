// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8081/api/users',
  listUsersApiUrl: 'http://localhost:8081/api/users/all',
  loginApiUrl: 'http://localhost:8081/auth/login',
  title: 'user-management',
  nodesApiUrl: 'http://localhost:8081/api/nodes',
  errorsApiUrl: 'http://localhost:8081/api/errors',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
