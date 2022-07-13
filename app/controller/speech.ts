import { Controller } from 'egg';
// const { HttpError, ErrorDataType } = require('../exceptions');
export default class SpeechController extends Controller {
  public async recognition() {
    const ctx = this.ctx;
    return await ctx.service.speech.recognition();
  }
}
