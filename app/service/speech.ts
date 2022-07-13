import { Service } from 'egg';
/**
 * Test Service
 */
export default class speech extends Service {
  public async recognition(name='') {
    return `hi, ${name}`;
  }
}
