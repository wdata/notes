import { observable, action, set, remove } from "mobx";
class Mobx {
  @observable name = ''; // 名称
  @observable password = ''; // 密码
  @observable arr = [1, 2, 3, 4]; // 数组
  @observable obj = {}; // 对象

  get pDetails() {
    return `计算属性：用户名：${this.name}  密码：${this.password}`;
  }

  @action
  landing(data) {
    const { name, password } = data;
    this.name = name;
    this.password = password;
  }

  @action
  landingSingle(value, name) {
    this[name] = value;
  }
};

const twitterUrls = observable.object({
  'arr1': 1
});

set(twitterUrls, { 'arr2': [2, 3] });
console.log(twitterUrls, '1');
remove(twitterUrls, 1);
console.log(twitterUrls, '2');

export default Mobx;
