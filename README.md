# words-to-time-converter
> ⏲️ Simple words to time converter with options to choose output format: minutes, seconds or hours

 [![NPM](https://img.shields.io/npm/v/words-to-time-converter.svg)](https://www.npmjs.com/package/words-to-time-converter)
[![NPM Downloads](https://img.shields.io/npm/dt/words-to-time-converter.svg)](https://www.npmjs.com/package/words-to-time-converter)
[![Buy me a coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/svetloslav)
<br/>
## Install

```bash
npm install words-to-time-converter
```

## Usage
1. There are 3 functions to choose from by now. The speed parameter is optional. It can be 'slow', 'average' or 'fast'. If you don't write it,the default will be 'average'
2. wordsToMinutes(text, speed)
3. wordsToSeconds(text, speed)
4. wordsToHours(text, speed)

```js
const {wordsToMinutes, wordsToHours, wordsToSeconds} = require('words-to-time-converter');

//0.9 minutes
console.log(wordsToMinutes('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'slow'));

//0.01 hours
console.log(wordsToHours('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'average'));

//42 seconds
console.log(wordsToSeconds('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'));

//0.7 minutes
console.log(wordsToMinutes('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'));
```
## Props
Simple use, no need to do it on your own. Ideal feature to use in your blog or website.

## Contribute 
Contributions are always welcome!
Please read the [contribution guidelines](contributing.md) first.

### ⭐ If you liked the library, please consider giving me a star. Thank you!
## License

Copyright © [Svetloslav Novoselski](https://github.com/Svetloslav15)
