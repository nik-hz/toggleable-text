"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * toggle between a text and an input to edit text
 * @param  {Boolean} toggle Boolean (default=false) --> true = input mode on
 * @param  {String} value[optionalID]  from parent state, run the controlled text input - pass in ID if needed
 * @param  {String} onChange  parents onChange handler
 * @param  {String} type  pass in input type - standard React choice, default = text
 * @param  {String} id  pass in some form of custom id to each custom input field --> only needed if using object as localState
 * @param  {String} inputStyle  style object for the input field
 * @param  {String} textStyle  style object for the text field
 * @return {String}      This Component will change the state of the text input in the parent state
 */
var Toggle = function Toggle(_ref) {
  var toggle = _ref.toggle,
      value = _ref.value,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      onChange = _ref.onChange,
      id = _ref.id,
      inputStyle = _ref.inputStyle,
      textStyle = _ref.textStyle;

  // Custom change handler --> calls parent change handler to modify the parent state
  var handleChange = function handleChange(event) {
    var text = event.target.value;
    onChange(id, text);
  }; // Renders the text


  var renderText = function renderText() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: textStyle
    }, value);
  }; // Renders the input field


  var renderInput = function renderInput() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
      type: type,
      value: value,
      onChange: handleChange,
      style: inputStyle
    }));
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, toggle ? renderText() : renderInput());
};

var _default = Toggle;
exports["default"] = _default;
