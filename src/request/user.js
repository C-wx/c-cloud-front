/*
 * @Desc:
 * @Author: cbuc
 * @Date: 2021-08-08 20:50:37
 */
// 用户信息相关接口
import { get, post } from './http'

// 用户登录
export const login = (p) => get('/user/login', p)
// 获取登录状态及用户信息
export const checkUserLoginInfo = (p) => get('/user/checkuserlogininfo', p)
// 用户注册
export const addUser = (p) => post('/user/register', p)
