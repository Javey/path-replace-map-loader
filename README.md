# path-replace-map-loader

Path replace loader for webpack use map. Great for gulp building.

## Installation

`npm install path-replace-map-loader --save-dev`

## Usage

Before running webpack, you must define a global variable named `__PATH_REPLACE_MAP` like below:

```json
{
    "a.styl": "xxx.css",
    "b.styl": "xxxx.css"
}
```

```js
loaders: [
    {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!path-replace-map-loader'
    }
]
```
