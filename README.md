
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

lex-audio-client
===

> **Hey:** This project isn't quite ready yet.

Enables you to easily capture voice / audio input for use with [Amazon Lex](https://aws.amazon.com/lex). Browser-friendly.


Usage
---

### Initializing

Create an instance of the client by passing in a valid `AWS.LexRuntime` client.

```javascript
import AWS from 'aws-sdk'
import LexAudioClient from 'lex-audio-client'

// ...

// :: create a Lex runtime client
const lexClient = new AWS.LexRuntime({
  region: 'us-west-2',  // <-- or your any other region where Lex is available
  credentials: new AWS.Credentials(accessKey, secretKey, null)
})

// :: create a Lex audio client
const lexAudioClient = new LexAudioClient(lexClient)
```

If you're using [AWS Amplify for authentication](https://aws-amplify.github.io/docs/js/authentication), you can grab your credentials from the Amplify `Auth` module.

```javascript
import AWS from 'aws-sdk'
import { Auth } from 'aws-amplify'
import LexAudioClient from 'lex-audio-client'

// ...

const credentials = await Auth.currentCredentials()
const lexClient = new AWS.LexRuntime({
  credentials: Auth.essentialCredentials(credentials),
  // ...
})
```

### Recording audio

To start recording, call `.start()` on the audio client. 
This will return a `Promise` that resolves / rejects with the (eventual) query against Lex once recording is completed.

```javascript
const conversation = lexAudioClient.start()

// ...

conversation
  .then((message) => { ... })
  .catch((error) => { ... })
```

To end recording, just call `.stop()` on the audio client.
This will return the same `Promise` that `.start()` returned, and will initiate a query against Lex. The `Promise`s will resolve / reject with the query response.

```javascript
lexAudioClient.stop()
  .then((message) => { ... })
  .catch((error) => { ... })
```
