# React Store Server (Node.js) + Express
#### for the Client: React Store App (react: 16.13.1) + Hooks

E-commerce project DEMO:
- [Client](https://react-store-09.vercel.app)
- [Server](https://react-store-express-server.herokuapp.com)

---------------

``` 
    npm run start
```

Go to [localhost:5000](http://localhost:5000)

---------------

## Stripe ***(TEST MODE)***

#### [Stripe Dashboard](https://dashboard.stripe.com/test/dashboard)

Get your test API keys:
- Publishable key
```pk_test_51HUdpkACECHr7zdXSvwikJSLZvvzenT76gVosm1ut8CR8r5n2c6VZA8V58p4MoWcMpxtztuOeo2poQ9xWESfUvuH00ETkLW0Xj```
- Secret key (!make Repo Private!)
```sk_test_51HUdpkACECHr7zdXaw881X55N3DwWbcG11ceVass1L0haLX2gRRhVyMW5qTPRPorwvzIl6MLOPdbpsuIubj1lpLn00TZQeT9dp```

#### [Heroku Dashboard](https://dashboard.heroku.com/apps/react-store-express-server/settings)

Go 2 => Settings => Config Vars => Reveal Config Vars => Config Vars => Paste *STRIPE_SECRET_KEY* => Add


--------------

![img](./payment.png)


-------------

### [Heroku Dashboard](https://dashboard.heroku.com/apps/react-store-express-server/logs)

``` 
    2020-11-07T21:32:17.746438+00:00 heroku[web.1]: Starting process with command `npm start`
    2020-11-07T21:32:20.068046+00:00 app[web.1]: 
    2020-11-07T21:32:20.068065+00:00 app[web.1]: > react-store-server@0.2.0 start
    2020-11-07T21:32:20.068065+00:00 app[web.1]: > node ./bin/stripe
    2020-11-07T21:32:20.068065+00:00 app[web.1]: 
    2020-11-07T21:32:20.244334+00:00 app[web.1]: Server running on port 5987

    ...

    2020-11-07T21:46:05.043149+00:00 heroku[router]: at=info method=OPTIONS path="/payment" host=react-store-express-server.herokuapp.com request_id=79f75004-9a1b-4a78-bc7e-01a3c12736a1 fwd="70.00.000.000" dyno=web.1 connect=1ms service=3ms status=204 bytes=301 protocol=https
    2020-11-07T21:46:05.871405+00:00 heroku[router]: at=info method=POST path="/payment" host=react-store-express-server.herokuapp.com request_id=43c7a6f5-0149-46fd-9a64-4ccf09f02fad fwd="70.00.000.000" dyno=web.1 connect=1ms service=767ms status=200 bytes=2557 protocol=https
```
