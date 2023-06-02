export default class UserInfo {
  constructor(object) {
    this._profileName = document.querySelector(object.profileName);
    this._profileInfo = document.querySelector(object.profileInfo);
    this._profileAvatar = document.querySelector(object.profileAvatar);
  }

  getUserInfo() {
    return { name: this._profileName.textContent, info: this._profileInfo.textContent }
  }

setUserInfo({name, info, avatar}) {
    this._profileName.textContent = name;
    this._profileInfo.textContent = info;
    this._profileAvatar.src = avatar;
  }
}