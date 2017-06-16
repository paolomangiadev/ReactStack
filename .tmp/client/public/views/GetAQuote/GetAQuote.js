'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Utils = require('../../utils/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _GetAQuote = require('./GetAQuote.css');

var _GetAQuote2 = _interopRequireDefault(_GetAQuote);

var _dropzoneMin = require('../../external-libraries/dropzonejs/dropzone.min.js');

var _dropzoneMin2 = _interopRequireDefault(_dropzoneMin);

var _basicMin = require('../../external-libraries/dropzonejs/basic.min.css');

var _basicMin2 = _interopRequireDefault(_basicMin);

var _dropzoneMin3 = require('../../external-libraries/dropzonejs/dropzone.min.css');

var _dropzoneMin4 = _interopRequireDefault(_dropzoneMin3);

var _immutabilityHelper = require('immutability-helper');

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html = document.getElementsByTagName('html')[0];
var that = void 0;
var myDropzone = void 0;

var Services = function (_Component) {
  (0, _inherits3.default)(Services, _Component);

  function Services(props) {
    (0, _classCallCheck3.default)(this, Services);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Services.__proto__ || (0, _getPrototypeOf2.default)(Services)).call(this, props));

    _this.state = {
      formInputs: {
        NameSurname: '',
        Email: '',
        AppType: 'Web App',
        Budget: '€ 1000 - 1500',
        Description: '',
        Company: '',
        Phone: '',
        buttonEnabled: false
      }
    };
    _this.defaultState = _this.state.formInputs;
    return _this;
  }

  (0, _createClass3.default)(Services, [{
    key: 'formIsValid',
    value: function formIsValid() {
      if (this.state.formInputs.NameSurname != '' && this.state.formInputs.Email != '' && this.state.formInputs.Description != '') {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'changeInputValue',
    value: function changeInputValue(field, name, e) {
      var _this2 = this;

      new _promise2.default(function (resolve, reject) {
        resolve(_this2.setState((0, _immutabilityHelper2.default)(_this2.state, { formInputs: (0, _defineProperty3.default)({}, name, { $set: e.target.value })
        })));
      }).then(function (resolve) {
        if (_this2.formIsValid()) {
          // this.state.formInputs.buttonEnabled = true
          _this2.setState((0, _immutabilityHelper2.default)(_this2.state, { formInputs: {
              buttonEnabled: { $set: true }
            }
          }));
        };
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      //init of Plugins
      _Utils2.default.registerPlugins();
      that = this;
      _dropzoneMin2.default.autoDiscover = false;

      var myDropzone = new _dropzoneMin2.default("div#dropzone", {
        url: "/api/quotes",
        autoProcessQueue: false,
        addRemoveLinks: true,
        uploadMultiple: true,
        paramName: "file",
        parallelUploads: 5,
        init: function init() {
          var customDropzone = this;
          document.getElementById('sendQuote').addEventListener("click", function (e) {
            // Make sure that the form isn't actually being sent.
            e.preventDefault();
            e.stopPropagation();
            console.log(myDropzone.getQueuedFiles());
            if (myDropzone.getQueuedFiles().length > 0) {
              customDropzone.processQueue();
            } else {
              console.log(that.state.formInputs);
              // customDropzone.uploadFiles([{formInputs: that.state.formInputs}]); //send empty
              _axios2.default.post('/api/quotes', that.state.formInputs).then(function (response) {
                console.log(response);
              }).catch(function (error) {
                console.log(error);
              });
            }
          });
        }
      });

      myDropzone.on("sendingmultiple", function (file, xhr, formData) {
        // Will send the filesize along with the file as POST data.
        _.forEach(that.state.formInputs, function (value, key) {
          console.log(value, key);
          formData.append(key, value);
        });
      });

      myDropzone.on("completemultiple", function (success, error) {
        if (error) {
          alert('couldnt upload: ' + error);
        } else {
          setTimeout(function () {
            myDropzone.removeAllFiles();
          }, 3500);
          console.log('successful upload: ' + success);
          that.setState({ formInputs: that.defaultState });
          console.log('state: ' + (0, _stringify2.default)(that.state.formInputs));
        }
      });

      myDropzone.on("error", function (error, errorMessage) {
        console.log(error, errorMessage);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'section',
          { className: 'hero is-medium is-primary GetAQuoteHeading' },
          _react2.default.createElement(
            'div',
            { className: 'hero-body' },
            _react2.default.createElement(
              'div',
              { className: 'container has-text-centered' },
              _react2.default.createElement(
                'h1',
                { className: 'title' },
                'GET A QUOTE'
              ),
              _react2.default.createElement(
                'h2',
                { className: 'subtitle' },
                'Fill the form explaining your project'
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'hero trasparent is-medium is-fullheight GetAQuote', id: 'particles-js' },
          _react2.default.createElement(
            'div',
            { className: 'hero-body' },
            _react2.default.createElement(
              'div',
              { className: 'container main_container' },
              _react2.default.createElement(
                'form',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'columns' },
                  _react2.default.createElement(
                    'div',
                    { className: 'column is-one-third' },
                    _react2.default.createElement(
                      'div',
                      { className: 'columns' },
                      _react2.default.createElement(
                        'div',
                        { className: 'column' },
                        _react2.default.createElement(
                          'div',
                          { className: 'field' },
                          _react2.default.createElement(
                            'label',
                            { className: 'label' },
                            'Name & Lastname: '
                          ),
                          _react2.default.createElement(
                            'p',
                            { className: 'control' },
                            _react2.default.createElement('input', { value: this.state.formInputs.NameSurname, onChange: function onChange(e) {
                                return _this3.changeInputValue(_this3, 'NameSurname', e);
                              }, className: 'input is-hovered', type: 'text' })
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'columns' },
                      _react2.default.createElement(
                        'div',
                        { className: 'column' },
                        _react2.default.createElement(
                          'div',
                          { className: 'field' },
                          _react2.default.createElement(
                            'label',
                            { className: 'label' },
                            'E-Mail: '
                          ),
                          _react2.default.createElement(
                            'p',
                            { className: 'control' },
                            _react2.default.createElement('input', (0, _defineProperty3.default)({ type: 'email', value: this.state.formInputs.Email, onChange: function onChange(e) {
                                return _this3.changeInputValue(_this3, 'Email', e);
                              }, className: 'input' }, 'type', 'text'))
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'columns' },
                      _react2.default.createElement(
                        'div',
                        { className: 'column' },
                        _react2.default.createElement(
                          'div',
                          { className: 'field' },
                          _react2.default.createElement(
                            'label',
                            { className: 'label' },
                            'Application type: '
                          ),
                          _react2.default.createElement(
                            'p',
                            { className: 'control' },
                            _react2.default.createElement(
                              'span',
                              { className: 'select' },
                              _react2.default.createElement(
                                'select',
                                { onChange: function onChange(e) {
                                    return _this3.changeInputValue(_this3, 'AppType', e);
                                  } },
                                _react2.default.createElement(
                                  'option',
                                  { defaultValue: 'Web App' },
                                  'Web App'
                                ),
                                _react2.default.createElement(
                                  'option',
                                  { value: 'Mobile App' },
                                  'Mobile App'
                                )
                              )
                            )
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'column' },
                        _react2.default.createElement(
                          'div',
                          { className: 'field' },
                          _react2.default.createElement(
                            'label',
                            { className: 'label' },
                            'Budget: '
                          ),
                          _react2.default.createElement(
                            'p',
                            { className: 'control' },
                            _react2.default.createElement(
                              'span',
                              { className: 'select' },
                              _react2.default.createElement(
                                'select',
                                { onChange: function onChange(e) {
                                    return _this3.changeInputValue(_this3, 'Budget', e);
                                  } },
                                _react2.default.createElement(
                                  'option',
                                  { defaultValue: '\u20AC 1000 - 1500' },
                                  '\u20AC 1000 - 1500'
                                ),
                                _react2.default.createElement(
                                  'option',
                                  { value: '\u20AC 1500 - 2000' },
                                  '\u20AC 1500 - 2000'
                                ),
                                _react2.default.createElement(
                                  'option',
                                  { value: '\u20AC 2000 - 2500' },
                                  '\u20AC 2000 - 2500'
                                ),
                                _react2.default.createElement(
                                  'option',
                                  { value: '\u20AC 3000 - 5000' },
                                  '\u20AC 3000 - 5000'
                                ),
                                _react2.default.createElement(
                                  'option',
                                  { value: '\u20AC 5000+ ' },
                                  '\u20AC 5000+ '
                                ),
                                _react2.default.createElement(
                                  'option',
                                  { value: '\u20AC 10000+ ' },
                                  '\u20AC 10000+ '
                                )
                              )
                            )
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'columns' },
                      _react2.default.createElement(
                        'div',
                        { className: 'column' },
                        _react2.default.createElement(
                          'div',
                          { className: 'field' },
                          _react2.default.createElement(
                            'label',
                            { className: 'label' },
                            'Describe your project: '
                          ),
                          _react2.default.createElement(
                            'p',
                            { className: 'control' },
                            _react2.default.createElement('textarea', { value: this.state.formInputs.Description, onChange: function onChange(e) {
                                return _this3.changeInputValue(_this3, 'Description', e);
                              }, className: 'textarea' })
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'column' },
                    _react2.default.createElement(
                      'div',
                      { className: 'columns' },
                      _react2.default.createElement(
                        'div',
                        { className: 'column' },
                        _react2.default.createElement(
                          'div',
                          { className: 'field' },
                          _react2.default.createElement(
                            'label',
                            { className: 'label' },
                            'Company: '
                          ),
                          _react2.default.createElement(
                            'p',
                            { className: 'control' },
                            _react2.default.createElement('input', (0, _defineProperty3.default)({ type: 'text', value: this.state.formInputs.Company, onChange: function onChange(e) {
                                return _this3.changeInputValue(_this3, 'Company', e);
                              }, className: 'input' }, 'type', 'text'))
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'column' },
                        _react2.default.createElement(
                          'div',
                          { className: 'field' },
                          _react2.default.createElement(
                            'label',
                            { className: 'label' },
                            'Phone: '
                          ),
                          _react2.default.createElement(
                            'p',
                            { className: 'control' },
                            _react2.default.createElement('input', (0, _defineProperty3.default)({ type: 'tel', value: this.state.formInputs.Phone, onChange: function onChange(e) {
                                return _this3.changeInputValue(_this3, 'Phone', e);
                              }, className: 'input' }, 'type', 'text'))
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'columns' },
                      _react2.default.createElement(
                        'div',
                        { className: 'column' },
                        _react2.default.createElement(
                          'label',
                          { className: 'label' },
                          'Any project file ?'
                        ),
                        _react2.default.createElement('div', { className: 'dropzone', id: 'dropzone' })
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'columns' },
                _react2.default.createElement(
                  'div',
                  { className: 'column' },
                  _react2.default.createElement(
                    'div',
                    { className: 'field is-horizontal' },
                    _react2.default.createElement(
                      'div',
                      { className: 'field-body' },
                      _react2.default.createElement(
                        'div',
                        { className: 'field' },
                        _react2.default.createElement(
                          'div',
                          { className: 'control' },
                          _react2.default.createElement(
                            'button',
                            { disabled: this.state.formInputs.buttonEnabled === false, className: 'item button is-danger is-inverted is-outlined is-medium', id: 'sendQuote' },
                            'Get a Quote'
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Services;
}(_react.Component);

var _default = Services;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(html, 'html', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/GetAQuote/GetAQuote.js');

  __REACT_HOT_LOADER__.register(that, 'that', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/GetAQuote/GetAQuote.js');

  __REACT_HOT_LOADER__.register(myDropzone, 'myDropzone', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/GetAQuote/GetAQuote.js');

  __REACT_HOT_LOADER__.register(Services, 'Services', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/GetAQuote/GetAQuote.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/GetAQuote/GetAQuote.js');
}();

;
//# sourceMappingURL=GetAQuote.js.map
