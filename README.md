# Color Chart

**Color Chart** is an ES6 class to Tint or Shade a color.

> Heavily inspired by [values.js](https://github.com/noeldelgado/values.js)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Color Chart.

```bash
npm install color-chart
```

## Usage

### Tint

```javascript
import { Tint } from 'color-chart';

const tint = new Tint('#1a26ff');

tint.generates(50).render();
```

### Shade

```javascript
import { Shade } from 'color-chart';

const tint = new Shade('#1a26ff');

shade.generates(50).render();
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
