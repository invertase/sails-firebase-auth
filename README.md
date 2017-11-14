## Sails API Starter - with Firebase auth

A [Sails v1.x.x](https://sailsjs.com) JSON / MsgPack API starter project with Firebase auth via tokens baked in.

### Policies

  - **`firebase`**: Attaches the firebase admin sdk onto `req.firebase`
  - **`firebase-auth`**: Verifies a `token` header with the Firebase Admin SDK.
    - Attaches the resulting Firebase user onto `req.user` (`user.toJSON()`).
    - If no `token` header is present `next()` is called - it does not prevent continuation, use the `authenticated` policy for that.
    - If there's an error validating the token or the user no longer exists / was not found then an additional `auth_error` property is attached to the final response, e.g:

      ```json
      {
          "code": "OK",
          "http_code": 200,
          "src": "MooBar.local",
          "message": "Operation has successfully executed.",
          "payload": {
              "version": "0.0.0"
          },
          "auth_error": {
              "code": "auth/argument-error",
              "message": "Decoding Firebase ID token failed. Make sure you passed the entire string JWT which represents an ID token. See https://firebase.google.com/docs/auth/admin/verify-id-tokens for details on how to retrieve an ID token."
          }
      }
      ```

  - **`authenticated`**: Returns 401 unauthorised when used in conjunction with `firebase-auth` policy and the









