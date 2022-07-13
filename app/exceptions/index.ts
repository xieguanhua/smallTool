export interface ErrorType {
  key: string
  code: number
}

export interface ErrorDataType {
  [key: string]: ErrorType
}

export type Comment = {
  pre: string,
  suf: string
} | string;
// 前三位是员工工号，接着三位是项目编号，后面四位依次递增
const ErrorDataType: ErrorDataType = {
  null: {
    code: 1000000000,
    key: '不能为空',
  },
  phoneExist: {
    code: 1000000001,
    key: '手机号已存在',
  },
  usernameExist: {
    code: 1000000002,
    key: '用户名已存在',
  },
  registerFail: {
    code: 1000000002,
    key: '注册失败',
  },
  noUser: {
    code: 1000000003,
    key: '用户不存在',
  },
  pswError: {
    code: 1000000004,
    key: '密码错误',
  },
  phoneFormat: {
    code: 1000000005,
    key: '手机号格式不正确',
  },
};

/**
 * HttpError 错误类型，继承Error，添加状态码
 */
class HttpError extends Error {
  readonly _code: number;
  get code(): number {
    return this._code;
  }

  constructor(type: ErrorType, comment: Comment = '') {
    const { key = '服务器异常', code = 500 } = type;
    super();
    if (typeof comment === 'string') {
      this.message = comment + key;
    } else {
      const { pre = '', suf = comment } = comment;
      this.message = pre + key + suf;
    }
    this._code = code;
  }
}

module.exports = {
  HttpError, ErrorDataType,
};
