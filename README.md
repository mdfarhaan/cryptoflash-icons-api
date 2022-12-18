# Crypto Icons API

Public API to get crypto currency icons

## API

```
GET https://crypto-icons.mdfarhaan.ml/:coin
```

> By default the API returns the icon in svg format

##### Examples

```
GET https://crypto-icons.mdfarhaan.ml/doge
```

### SVG Varients

```
GET https://crypto-icons.mdfarhaan.ml/svg/:varient/:coin
```

##### Examples

```
GET https://crypto-icons.mdfarhaan.ml/svg/icon/doge
```

```
GET https://crypto-icons.mdfarhaan.ml/svg/black/doge
```

### Size

```
GET https://crypto-icons.mdfarhaan.ml/:size/:coin
```

##### Examples

```
GET https://crypto-icons.mdfarhaan.ml/128/doge
```

```
GET https://crypto-icons.mdfarhaan.ml/32/doge
```

> Sizes are returned in png format

### Size Varients

```
GET https://crypto-icons.mdfarhaan.ml/:size/:varient/:coin
```

##### Examples

```
GET https://crypto-icons.mdfarhaan.ml/128/color/doge
```

```
GET https://crypto-icons.mdfarhaan.ml/32/icon/doge
```

```
GET https://crypto-icons.mdfarhaan.ml/32/black/doge
```

### Varients

- `black`
- `white`
- `color`
- `icon`

Icons created and maintained by the [Cryptocurrency](http://cryptoicons.co/) Icons project.
