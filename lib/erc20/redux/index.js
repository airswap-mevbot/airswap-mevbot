"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "reducers", {
  enumerable: true,
  get: function get() {
    return _reducers.default;
  }
});
Object.defineProperty(exports, "selectors", {
  enumerable: true,
  get: function get() {
    return _reducers.selectors;
  }
});
exports.middleware = void 0;

var _middleware = _interopRequireDefault(require("./middleware"));

var _contractFunctionMiddleware = _interopRequireDefault(require("./contractFunctionMiddleware"));

var _reducers = _interopRequireWildcard(require("./reducers"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = [_middleware.default, _contractFunctionMiddleware.default];
exports.middleware = middleware;