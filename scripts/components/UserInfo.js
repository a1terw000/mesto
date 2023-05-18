export default class UserInfo {
  constructor(object) {
    this._profileName = document.querySelector(object.profileName);
    this._profileInfo = document.querySelector(object.profileInfo);
  }

  getUserInfo() {
    return { name: this._profileName.textContent, info: this._profileInfo.textContent}
  }

  setUserInfo(newInfoAboutUser) {
    this._profileName.textContent = newInfoAboutUser.name;
    this._profileInfo.textContent = newInfoAboutUser.info;
  }
}