import { Controller } from 'egg';
import { Get, Prefix } from '../utils/decorators';

@Prefix('/test')
export default class TestController extends Controller {
  @Get('/getUserInfo') 
  public async getUserInfo() {
    this.ctx.body = await this.ctx.service.test.getUserInfo()
  }

  @Get('/sayHi')
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('funkey');
  }
}
