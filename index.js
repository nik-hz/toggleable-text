"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Toggle = function Toggle(_ref) {
  var toggleState = _ref.toggleState,
      toggleText = _ref.toggleText,
      inputStyleFromParent = _ref.inputStyleFromParent,
      textStyleFromParent = _ref.textStyleFromParent;

  var renderText = function renderText() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: inputStyleFromParent
    }, toggleText);
  };

  var renderInput = function renderInput() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
      type: "text",
      value: toggleText
    }));
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, toggleState ? renderText() : renderInput());
};

var _default = Toggle;
exports["default"] = _default;
