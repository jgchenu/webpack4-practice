var _message = _interopRequireDefault(require('./message.js'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
console.log(_message['default']);

Object.defineProperty(exports, '__esModule', { value: true });
exports['default'] = void 0;
var _word = require('./word.js');
var message = 'say '.concat(_word.word);
var _default = message;
exports['default'] = _default;

Object.defineProperty(exports, '__esModule', { value: true });
exports.word = void 0;
var word = 'hello';
exports.word = word;
