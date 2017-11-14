<p align="center">
  <a href="https://rnfirebase.io">
    <img src="https://i.imgur.com/eNsnSl7.png"><br/>
  </a>
</p>

<p align="center">
  <a href="#backers"><img src="https://opencollective.com/react-native-firebase/backers/badge.svg" alt="Backers on Open Collective"></a>
  <a href="#sponsors"><img src="https://opencollective.com/react-native-firebase/sponsors/badge.svg" alt="Sponsors on Open Collective"></a>
  <a href="https://discord.gg/t6bdqMs"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg?style=flat-square" alt="Chat"></a>
  <a href="https://twitter.com/mikediarmid"><img src="https://img.shields.io/twitter/follow/mikediarmid.svg?style=social&label=Follow" alt="Follow on Twitter"></a>
</p>

A [Sails v1.x.x](https://sailsjs.com) JSON / MsgPack API starter project with Firebase auth via tokens baked in.

## Getting Started

Clone this repo, run `npm install`. Download your firebase admin service account json file, update `config/custom.js` to the correct firebase url + path to your json file.

### Responses

All of the default sails responses have been overridden to respond in a well structured JSON or MsgPack format.

#### Sample Response:
```javascript
{
    // short descriptive response code string, e.g. 'E_BAD_REQUEST' or 'OK'
    code: String,

    // http code of the response - for ease of determining the code on the receiving end
    http_code: Number,

    // descriptive messaage about the repsonse, e.g. 'The requested resource could not be found but may be available again in the future.'
    message: String,

    // your data you provided by calling `res.ok(YourResponseData);` in your controllers.
    payload: null | YourResponseData
}
```

### Policies

  - **`firebase`**: Attaches the firebase admin sdk onto `req.firebase`
  - **`firebase-auth`**: Verifies a `token` header with the Firebase Admin SDK.
    - Attaches the resulting Firebase user onto `req.user` (`user.toJSON()`).
    - If no `token` header is present `next()` is called - it does not prevent continuation, use the `authenticated` policy for that.
    - If there's an error validating the token or the user no longer exists / was not found then an additional `auth_error` property is attached to the final response, e.g:

      ```json
      {
          "auth_error": {
              "code": "auth/argument-error",
              "message": "Decoding Firebase ID token failed. Make sure you passed the entire string JWT which represents an ID token. See https://firebase.google.com/docs/auth/admin/verify-id-tokens for details on how to retrieve an ID token."
          }
      }
      ```

  - **`authenticated`**: Returns 401 unauthorised when used in conjunction with `firebase-auth` policy and the user was unable to be authenticated. Continues request flow if authentication successful.

### Debugging Requests

This project has a built in option to enable additional debug info onto the request responses. Passing `debug` with a truthy value as either a header, param or a body property will enable it for that request.

#### Sample Debug Response

```javascript
{
    "code": "E_NOT_FOUND",
    "http_code": 404,
    "message": "The requested resource could not be found but may be available again in the future.",
    "payload": null,
    "debug": {
        // every request internally has a unqiue id generated for it, this is avaliable at `req.id`
        "id": "cj9zreglg000pl8x5pk3xggep",

        // api url route requested
        "route": "/status2?debug=true",

        // name of the server that responded to the request
        "src": "MacBook.local",

        // original headers sent with the request
        "headers": {
            "host": "localhost:1337",
            "connection": "keep-alive",
            "cache-control": "no-cache",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36",
            "token": "foobarbaz",
            "accept": "*/*",
            "dnt": "1",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en;q=0.9,nl-BE;q=0.8,nl;q=0.7,en-US;q=0.6"
        },

        // original params sent with the request
        "params": {
            "debug": "true"
        }
    }
}
```











