(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function n(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var o=function(){function t(e,r,o,i,u){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,"_likeEffect",(function(){a._likeFunc(a._likeElement,a._cardId)})),n(this,"_deleteCard",(function(){a._deletePopupFunc({item:a,cardId:a._cardId})})),n(this,"_openImagePopupFunction",(function(){a._openImagePopup(a._cardData)})),this._cardData=e,this._templateSelector=r,this._openImagePopup=o,this._deletePopupFunc=i,this._likeFunc=u,this._cloneELement=document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0),this._imageElement=this._cloneELement.querySelector(".card__image"),this._aliesElement=this._cloneELement.querySelector(".card__alies"),this._likeElement=this._cloneELement.querySelector(".card__like-button"),this._trashElement=this._cloneELement.querySelector(".card__trash"),this._likeCounter=this._cloneELement.querySelector(".card__like-counter"),this._cardId=this._cardData._id,this._myId=this._cardData.myId,this._ownerId=this._cardData.owner._id,this._likes=this._cardData.likes,this._likesLength=this._cardData.likes.length}var r,o;return r=t,(o=[{key:"removeCard",value:function(){this._cloneELement.remove(),this._cloneELement=null}},{key:"_setEventListener",value:function(){this._likeElement.addEventListener("click",this._likeEffect),this._trashElement.addEventListener("click",this._deleteCard),this._imageElement.addEventListener("click",this._openImagePopupFunction)}},{key:"_seeTrashButton",value:function(){this._myId===this._ownerId?this._trashElement:this._trashElement.remove()}},{key:"_checkLike",value:function(){var t=this;this._likes.forEach((function(e){e._id!==t._myId||t._likeElement.classList.add("card__like-button_active")})),this._likeCounter.textContent=this._likesLength}},{key:"toggleLike",value:function(t){this._likeElement.classList.toggle("card__like-button_active"),this._likeCounter.textContent=t.length}},{key:"createCard",value:function(){return this._imageElement.src=this._cardData.link,this._imageElement.alt=this._cardData.name,this._aliesElement.textContent=this._cardData.name,this._checkLike(),this._seeTrashButton(),this._setEventListener(),this._cloneELement}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=n,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._spanErrorClass=e.spanErrorClass,this._errorClass=e.errorClass,this._disabledButtonClass=e.disabledButtonClass,this._inputErrorClass=e.inputErrorClass,this._inputList=this._form.querySelectorAll(this._inputSelector),this._button=this._form.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t,e){t.classList.remove(this._inputErrorClass),e.textContent="",e.classList.remove(this._errorClass)}},{key:"_checkValidation",value:function(t){var e=document.querySelector("".concat(this._spanErrorClass).concat(t.id));t.validity.valid?this._hideInputError(t,e):this._showInputError(t,e)}},{key:"_enableButtonSubmit",value:function(){this._button.classList.remove(this._disabledButtonClass),this._button.removeAttribute("disabled","true")}},{key:"_disabledButtonSubmit",value:function(){this._button.classList.add(this._disabledButtonClass),this._button.setAttribute("disabled","false")}},{key:"_hasInvalidInput",value:function(){return Array.from(this._inputList).some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disabledButtonSubmit():this._enableButtonSubmit()}},{key:"_setEventListener",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkValidation(e),t._toggleButtonState()}))}))}},{key:"deleteTextSpanWhenOpenForm",value:function(){var t=this;this._inputList.forEach((function(e){var n=t._form.querySelector("".concat(t._spanErrorClass).concat(e.id));e.validity.valid||t._hideInputError(e,n)})),this._disabledButtonSubmit()}},{key:"enableValidation",value:function(){this._setEventListener()}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,f(r.key),r)}}function s(t,e,n){return(e=f(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}var p=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"_handleClosePopup",(function(){n.close()})),s(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),s(this,"_closePopupClickOverlay",(function(t){t.currentTarget===t.target&&n.close()})),this._popup=document.querySelector(e),this._popupCloseButtonElement=this._popup.querySelector(".popup__close-button")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListener",value:function(){this._popupCloseButtonElement.addEventListener("click",this._handleClosePopup),this._popup.addEventListener("click",this._closePopupClickOverlay)}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},m.apply(this,arguments)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}function _(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===y(e)?e:String(e)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(n);if(r){var o=b(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}(this,t)});function i(t){var e,n,r,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=d(n=o.call(this,t)),a=function(t){n._figureImage.src=t.link,n._figureImage.alt=t.name,n._figureCaption.textContent=t.name,m((e=d(n),b(i.prototype)),"open",e).call(e)},(u=_(u="open"))in r?Object.defineProperty(r,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[u]=a,n._figureImage=n._popup.querySelector(".figure__image"),n._figureCaption=n._popup.querySelector(".figure__caption"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(p);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}var k=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._list=document.querySelector(n),this._renderer=e}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItemPrepend",value:function(t){this._list.prepend(t)}},{key:"addItemAppend",value:function(t){this._list.append(t)}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var O=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(e.profileName),this._profileInfo=document.querySelector(e.profileInfo),this._profileAvatar=document.querySelector(e.profileAvatar)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,info:this._profileInfo.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.info,r=t.avatar;this._profileName.textContent=e,this._profileInfo.textContent=n,this._profileAvatar.src=r}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(r);if(o){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".form"),n._submitCallbackFunc=e,n._inputList=n._form.querySelectorAll(".form__input"),n._submitButton=n._form.querySelector(".popup__submit-button"),n._defaultButtonText=n._submitButton.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._values={},this._inputList.forEach((function(e){t._values[e.name]=e.value})),this._values}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"close",value:function(){C(I(u.prototype),"close",this).call(this),this._form.reset()}},{key:"open",value:function(){C(I(u.prototype),"open",this).call(this)}},{key:"setupDefaultText",value:function(){this._submitButton.textContent=this._defaultButtonText}},{key:"setEventListener",value:function(){var t=this;C(I(u.prototype),"setEventListener",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitButton.textContent="Сохранение...",t._submitCallbackFunc(t._getInputValues())}))}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,F(r.key),r)}}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},D.apply(this,arguments)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}function F(t){var e=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===R(e)?e:String(e)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(r);if(o){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return q(t)}(this,t)});function u(t,e){var n,r,o,a,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),o=q(r=i.call(this,t)),c=function(t){var e=t.item,o=t.cardId;D((n=q(r),A(u.prototype)),"open",n).call(n),r._item=e,r._cardId=o},(a=F(a="open"))in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,r._form=r._popup.querySelector(".form"),r._submitCallbackFunc=e,r}return e=u,(n=[{key:"setEventListener",value:function(){var t=this;D(A(u.prototype),"setEventListener",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallbackFunc({item:t._item,cardId:t._cardId})}))}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===z(o)?o:String(o)),r)}var o}var V=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.info})}).then(this._checkResponse)}},{key:"setAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then(this._checkResponse)}},{key:"addCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.title,link:t.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"setLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),W=document.querySelector(".profile").querySelector(".profile__edit-button"),J=document.querySelector(".profile").querySelector(".profile__add-button"),H={inputSelector:".form__input",submitButtonSelector:".popup__submit-button",spanErrorClass:".form__error_type_",errorClass:"form__error_visible",disabledButtonClass:"popup__submit-button_disabled",inputErrorClass:"form__input_type_error"};function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var $=new V({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"393bdb26-0a49-44b5-92b2-a59ca9dd3b0e","Content-Type":"application/json"}}),G=new O({profileName:".profile__alias",profileInfo:".profile__caption",profileAvatar:".profile__photo"}),K=new v("#popup_image");function Q(t){var e=new o(t,"#template",K.open,et.open,(function(t,n){t.classList.contains("card__like-button_active")?$.deleteLike(n).then((function(t){e.toggleLike(t.likes)})).catch((function(t){return console.error("Ошибка лайка: ".concat(t))})):$.setLike(n).then((function(t){e.toggleLike(t.likes)})).catch((function(t){return console.error("Ошибка лайка: ".concat(t))}))}));return e.createCard()}var X=new k((function(t){X.addItemAppend(Q(t))}),".cards"),Y=new T(".popup_edit-profile",(function(t){$.setUserInfo(t).then((function(t){G.setUserInfo({name:t.name,info:t.about,avatar:t.avatar}),Y.close()})).catch((function(t){return console.error("Ошибка обновления данных профиля: ".concat(t))})).finally((function(){return popupEditProfile.setupDefaultText()}))})),Z=new T(".popup_cards",(function(t){$.addCard(t).then((function(t){console.log(t),t.myId=t.owner._id,X.addItemPrepend(Q(t)),Z.close()})).catch((function(t){return console.error("Ошибка создания новой карточки: ".concat(t))})).finally((function(){return Z.setupDefaultText()}))})),tt=new T(".popup_avatar",(function(t){$.setAvatar(t).then((function(t){G.setUserInfo({name:t.name,info:t.about,avatar:t.avatar}),tt.close()})).catch((function(t){return console.error("Ошибка при обновлении аватарки: ".concat(t))})).finally((function(){return tt.setupDefaultText()}))})),et=new U(".popup_delete-card",(function(t){var e=t.item,n=t.cardId;$.deleteCard(n).then((function(){e.removeCard(),et.close()})).catch((function(t){return console.error("Ошибка при удалении карточки: ".concat(t))})).finally()})),nt={};Array.from(document.forms).forEach((function(t){var e=new a(H,t),n=t.getAttribute("name");nt[n]=e,e.enableValidation()})),W.addEventListener("click",(function(){Y.open(),nt.editForm.deleteTextSpanWhenOpenForm(),Y.setInputValues(G.getUserInfo())})),J.addEventListener("click",(function(){nt.addCardForm.deleteTextSpanWhenOpenForm(),nt.addCardForm._toggleButtonState(),Z.open()})),document.querySelector(".profile__button-avatar").addEventListener("click",(function(){nt.avatarForm.deleteTextSpanWhenOpenForm(),tt.open()})),et.setEventListener(),tt.setEventListener(),Y.setEventListener(),Z.setEventListener(),K.setEventListener(),Promise.all([$.getUserInfo(),$.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return M(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];i.forEach((function(t){return t.myId=o._id})),i.myId=o._id,G.setUserInfo({name:o.name,info:o.about,avatar:o.avatar}),X.renderItems(i)})).catch((function(t){return console.error("Ошибка загрузки начальных данных: ".concat(t))})).finally()})();