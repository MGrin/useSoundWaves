# use-sound-waves

> React hook to play sound waves with given frequencies

[![NPM](https://img.shields.io/npm/v/use-sound-waves.svg)](https://www.npmjs.com/package/use-sound-waves) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-sound-waves
```

## Usage

```tsx
import React, { Component } from 'react'

import useSoundWaves from 'use-sound-waves'

function Example() {
  const { isPlaying, currentSound, play, stop } = useSoundWaves();
  ...
}
```

## License

MIT © [MGrin](https://github.com/MGrin)
