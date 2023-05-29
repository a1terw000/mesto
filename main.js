(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function r(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}var n=function(){function t(e,n,o){var i,u,l,a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,l=function(){a._openImagePopup(a._cardData)},(u=r(u="_openImagePopupFunction"))in i?Object.defineProperty(i,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[u]=l,this._cardData=e,this._templateElement=n,this._openImagePopup=o}var n,o;return n=t,(o=[{key:"_templateClone",value:function(){return document.querySelector(this._templateElement).content.querySelector(".card").cloneNode(!0)}},{key:"_likeEffect",value:function(t){t.target.classList.toggle("card__like-button_active")}},{key:"_deleteCard",value:function(t){t.target.closest(".card").remove()}},{key:"_setEventListener",value:function(){this._likeElement.addEventListener("click",this._likeEffect),this._trashElement.addEventListener("click",this._deleteCard),this._imageElement.addEventListener("click",this._openImagePopupFunction)}},{key:"createCard",value:function(){return this._templateCloneElement=this._templateClone(),this._imageElement=this._templateCloneElement.querySelector(".card__image"),this._aliesElement=this._templateCloneElement.querySelector(".card__alies"),this._likeElement=this._templateCloneElement.querySelector(".card__like-button"),this._trashElement=this._templateCloneElement.querySelector(".card__trash"),this._imageElement.src=this._cardData.link,this._imageElement.alt=this._cardData.title,this._aliesElement.textContent=this._cardData.title,this._setEventListener(),this._templateCloneElement}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}var u=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=r,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._spanErrorClass=e.spanErrorClass,this._errorClass=e.errorClass,this._disabledButtonClass=e.disabledButtonClass,this._inputErrorClass=e.inputErrorClass,this._inputList=this._form.querySelectorAll(this._inputSelector),this._button=this._form.querySelector(this._submitButtonSelector)}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t,e){t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t,e){t.classList.remove(this._inputErrorClass),e.textContent="",e.classList.remove(this._errorClass)}},{key:"_checkValidation",value:function(t){var e=document.querySelector("".concat(this._spanErrorClass).concat(t.id));t.validity.valid?this._hideInputError(t,e):this._showInputError(t,e)}},{key:"_enableButtonSubmit",value:function(){this._button.classList.remove(this._disabledButtonClass),this._button.removeAttribute("disabled","true")}},{key:"_disabledButtonSubmit",value:function(){this._button.classList.add(this._disabledButtonClass),this._button.setAttribute("disabled","false")}},{key:"_hasInvalidInput",value:function(){return Array.from(this._inputList).some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disabledButtonSubmit():this._enableButtonSubmit()}},{key:"_setEventListener",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkValidation(e),t._toggleButtonState()}))}))}},{key:"deleteTextSpanWhenOpenForm",value:function(){var t=this;this._inputList.forEach((function(e){var r=t._form.querySelector("".concat(t._spanErrorClass).concat(e.id));e.validity.valid||t._hideInputError(e,r)})),this._disabledButtonSubmit()}},{key:"enableValidation",value:function(){this._setEventListener()}}])&&i(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,s(n.key),n)}}function c(t,e,r){return(e=s(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var f=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,"_handleClosePopup",(function(){r.close()})),c(this,"_handleEscClose",(function(t){"Escape"===t.key&&r.close()})),c(this,"_closePopupClickOverlay",(function(t){t.currentTarget===t.target&&r.close()})),this._popup=document.querySelector(e),this._popupCloseButtonElement=this._popup.querySelector(".popup__close-button")}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListener",value:function(){this._popupCloseButtonElement.addEventListener("click",this._handleClosePopup),this._popup.addEventListener("click",this._closePopupClickOverlay)}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},b.apply(this,arguments)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function v(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(i,t);var e,r,n,o=(r=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(r);if(n){var o=d(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return m(t)}(this,t)});function i(t){var e,r,n,u,l;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),n=m(r=o.call(this,t)),l=function(t){r._figureImage.src=t.link,r._figureImage.alt=t.title,r._figureCaption.textContent=t.title,b((e=m(r),d(i.prototype)),"open",e).call(e)},(u=v(u="open"))in n?Object.defineProperty(n,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[u]=l,r._figureImage=r._popup.querySelector(".figure__image"),r._figureCaption=r._popup.querySelector(".figure__caption"),r}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(f);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}var S=function(){function t(e,r){var n=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._list=document.querySelector(r),this._items=n,this._renderer=o}var e,r;return e=t,(r=[{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){t.addItem(e)}))}},{key:"addItem",value:function(t){this._list.prepend(this._renderer(t))}}])&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}var k=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(e.profileName),this._profileInfo=document.querySelector(e.profileInfo)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,info:this._profileInfo.textContent}}},{key:"setUserInfo",value:function(t){this._profileName.textContent=t.name,this._profileInfo.textContent=t.info}}])&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===C(o)?o:String(o)),n)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},P.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(n);if(o){var r=L(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._submitCallbackFunc=e,r._form=r._popup.querySelector(".form"),r._inputList=r._form.querySelectorAll(".form__input"),r}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._values={},this._inputList.forEach((function(e){t._values[e.name]=e.value})),this._values}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"close",value:function(){P(L(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListener",value:function(){var t=this;P(L(u.prototype),"setEventListener",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallbackFunc(t._getInputValues()),t.close()}))}}])&&j(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(f),q=document.querySelector(".profile").querySelector(".profile__edit-button"),T=document.querySelector(".popup_edit-profile").querySelector(".form"),B=document.querySelector(".profile").querySelector(".profile__add-button"),x=document.querySelector(".popup_cards").querySelector(".form"),R={inputSelector:".form__input",submitButtonSelector:".popup__submit-button",spanErrorClass:".form__error_type_",errorClass:"form__error_visible",disabledButtonClass:"popup__submit-button_disabled",inputErrorClass:"form__input_type_error"},D=new k({profileName:".profile__alias",profileInfo:".profile__caption"}),A=new _("#popup_image"),V=new S({items:[{title:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},{title:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{title:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{title:"まかなた",link:"https://sun9-66.userapi.com/impg/j-d0AObPfUNKMTaH-A27TZ2qvCZPTXaCjY5w0A/JLEI9CTPDWQ.jpg?size=1280x720&quality=96&sign=3c648d007beac74984c70678e1d8124b&type=album"},{title:"マハたらたはた",link:"https://i.pinimg.com/originals/29/b3/b5/29b3b5a4faba282f53d3e6f0f459796f.jpg"},{title:"山佐",link:"https://sun9-78.userapi.com/impg/CuQALtrawoWL6cnNlPTMdBY_AUTic3_slQ7X-Q/oehjnsqmSp4.jpg?size=736x552&quality=96&sign=c6842832f55406977d85372077598c0e&type=album"}],renderer:function(t){return new n(t,"#template",A.open).createCard()}},".cards");V.renderItems();var N=new I(".popup_edit-profile",(function(t){D.setUserInfo(t)})),F=new I(".popup_cards",(function(t){V.addItem(t)}));q.addEventListener("click",(function(){N.open(),U.deleteTextSpanWhenOpenForm(),N.setInputValues(D.getUserInfo())})),B.addEventListener("click",(function(){W.deleteTextSpanWhenOpenForm(),W._toggleButtonState(),F.open()}));var U=new u(R,T);U.enableValidation();var W=new u(R,x);W.enableValidation(),N.setEventListener(),F.setEventListener(),A.setEventListener()})();