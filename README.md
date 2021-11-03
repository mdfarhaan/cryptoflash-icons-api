# Crypto Icons API

Public API to get crypto currency icons

## API

```
GET https://cryptoflash-icons-api.herokuapp.com/:coin
```

> By default the API returns the icon in svg format

##### Examples

```
GET https://cryptoflash-icons-api.herokuapp.com/doge
```

### SVG Varients

```
GET https://cryptoflash-icons-api.herokuapp.com/svg/:varient/:coin
```

##### Examples

```
GET https://cryptoflash-icons-api.herokuapp.com/svg/icon/doge
```

```
GET https://cryptoflash-icons-api.herokuapp.com/svg/black/doge
```

### Size

```
GET https://cryptoflash-icons-api.herokuapp.com/:size/:coin
```

##### Examples

```
GET https://cryptoflash-icons-api.herokuapp.com/128/doge
```

```
GET https://cryptoflash-icons-api.herokuapp.com/32/doge
```

> Sizes are returned in png format

### Size Varients

```
GET https://cryptoflash-icons-api.herokuapp.com/:size/:varient/:coin
```

##### Examples

```
GET https://cryptoflash-icons-api.herokuapp.com/128/color/doge
```

```
GET https://cryptoflash-icons-api.herokuapp.com/32/icon/doge
```

```
GET https://cryptoflash-icons-api.herokuapp.com/32/black/doge
```

### Varients

- `black`
- `white`
- `color`
- `icon`



## Deploy to Heroku
Deploy your own version to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Icons created and maintained by the [Cryptocurrency](http://cryptoicons.co/) Icons project.
