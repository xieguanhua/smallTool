import { Controller } from 'egg';

const { HttpError, ErrorDataType } = require('../exceptions');
export default class HomeController extends Controller {
  async index(a) {
    if (a === 1) {
      return {
        message: '登录成功',
        data: {},
      };
    }
    throw new HttpError(ErrorDataType.pswError);
  }
}
