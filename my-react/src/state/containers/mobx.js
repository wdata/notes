import { observable, action } from "mobx";
class Mobx {
  @observable name = ''; // 名称
  @observable password = ''; // 密码

  @action landing(name, password) {
    this.name = name;
    this.password = password;
  }
};

export default Mobx;
