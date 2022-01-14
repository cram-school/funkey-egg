import 'egg';
import { Application } from 'egg';
/**
 * egg-mysql报错无法使用的解决方案
 * https://blog.csdn.net/weixin_47348518/article/details/120699804
 */
declare module 'egg' {
    interface Application{
        mysql:any
    }
}