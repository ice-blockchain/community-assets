"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBackHandler = useBackHandler;
var _react = require("react");
var _reactNative = require("react-native");
function useBackHandler(handler) {
  (0, _react.useEffect)(() => {
    _reactNative.BackHandler.addEventListener('hardwareBackPress', handler);
    return () => _reactNative.BackHandler.removeEventListener('hardwareBackPress', handler);
  }, [handler]);
}
//# sourceMappingURL=useBackHandler.js.map