const { HttpError } = require('../exceptions');
module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      const body = await next();
      if (body) {
        ctx.body = body;
      }
    } catch (err: any) {
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      ctx.app.emit('error', err, ctx);
      if (err instanceof HttpError) {
        const { message, code } = err;
        ctx.status = 400;
        ctx.body = { message, code };
      } else {
        const { columnNumber, fileName, lineNumber, message, name, stack } = err;
        ctx.body = { columnNumber, fileName, lineNumber, message, name, stack };
      }
    }
  };
};
