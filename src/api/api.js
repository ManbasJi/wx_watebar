import {
  wxRequest
} from '@/utils/wxRequest';
import util from '@/utils/util';
import wepy from 'wepy';
let env = "-test" //-dev 或者 -test
var app = wepy.$instance.globalData;
// const apiTHost= 'https://debug.leadnexus.net/wechat';
const apiTHost = app.hostUrl;


//获取版本号
const getVersion = (params) =>wxRequest(params,apiTHost+'/vision/get/')

//版本号插入
const inVersion = (params) => wxRequest(params,apiTHost + '/vision/in/')

//管理员登录接口
const adminLogin = (params) => wxRequest(params,apiTHost+'/auth/login/');

//获取上传图片uptoken
const getUptoken = (params) => wxRequest(params,apiTHost+'/auth/uptoken/');

//删除七牛图片
const delImage = (params) => wxRequest(params,apiTHost+'/auth/delete/');

//微信的code换取sessionKey和openId
const sendWxCode = (params) => wxRequest(params,apiTHost+'/auth/wxlogin/');

//检验微信登录token
const checkToken = (params) => wxRequest(params,apiTHost+'/auth/token/');

//获取商家信息
const getShopInfo = (params) => wxRequest(params,apiTHost + '/auth/info/');

//查询用户所有收货地址
const getAddressAll = (params) => wxRequest(params,apiTHost + '/address/list/');

//添加用户收货地址
const addAddress = (params) => wxRequest(params,apiTHost+'/address/add/');

//修改用户收货地址
const updateAddress = (params) => wxRequest(params,apiTHost+'/address/revise/');

//提交预约表单信息
const submitRecord = (params) => wxRequest(params,apiTHost+'/record/submit/');

//获取预约记录
const getRecord = (params) => wxRequest(params,apiTHost+'/record/get/');

//取消预约记录
const cancelRecord = (params) =>wxRequest(params,apiTHost+'/record/cancel/');

//更新预约状态
const updateStatusRecord = (params) =>wxRequest(params,apiTHost+'/record/revise/');

//删除用户收货地址
const deleteAddress = (params) => wxRequest(params,apiTHost+'/address/del/');

//获取分类信息
const getCategory = (params) => wxRequest(params,apiTHost +'/category/list/');

//获取分类下面的商品信息
const getFoodMsgList = (params) => wxRequest(params,apiTHost + '/goods/list/');

//获取商品属性
const getAttrMsgList = (params) => wxRequest(params,apiTHost + '/attribute/list/');

//获取商户排队人数
const getListPeopleNum = (params) => wxRequest(params,apiTHost+'/queue/amount/');
//开始排队
const startList = (params) => wxRequest(params,apiTHost+'/queue/begin/');
//取消排队
const cancelList = (params) => wxRequest(params,apiTHost+'/queue/cancel/');

//提交订单
const submitOrder = (params) => wxRequest(params,apiTHost+'/order/submit/');

//订单列表
const getOrderList = (params) => wxRequest(params,apiTHost+'/order/list/');

//订单详情
const getOrderDetail = (params) => wxRequest(params,apiTHost+'/order/detail/');

//订单状态修改
const updateOrderStatus = (params) => wxRequest(params,apiTHost+'/order/status/');

//添加商品
const addGoods = (params) => wxRequest(params,apiTHost+'/goods/add/');

//添加属性
const addGoodsAttribute = (params) =>wxRequest(params,apiTHost+'/attribute/add/');

//商品信息修改
const updateGoods = (params) =>wxRequest(params,apiTHost+'/goods/revise/');

//商品删除
const delGoods = (params) =>wxRequest(params,apiTHost+'/goods/del/');

//商品状态修改
const updateGoodsStatus = (params) =>wxRequest(params,apiTHost+'/goods/status/');

//商品属性修改
const updateGoodsAttribute = (params) =>wxRequest(params,apiTHost+'/attribute/revise/');

//商品属性删除
const delGoodsAttribute = (params) =>wxRequest(params,apiTHost+'/attribute/del/');

//获取后台商品信息
const getShopGoods = (params) => wxRequest(params,apiTHost+'/goods/wx/');

//打印订单
const printOrderMsg = (params) => wxRequest(params,apiTHost+ '/print/detail/')

//发送模板消息
const sendModelMsg = (params) => wxRequest(params,apiTHost + '/notify/wxuser/')

//获取OpenId
const getFormId = (params) => wxRequest(params,apiTHost + '/formid/detail/')

//添加formId
const addFormId = (params) => wxRequest(params,apiTHost + '/formid/add/')

// 商户优惠券列表
const getShopCouponList = (params) => wxRequest(params,apiTHost + '/coupon/list/')

// 用户优惠券列表
const getCustCouponList = (params) => wxRequest(params,apiTHost + '/coupon/detail/')

// 优惠券领取
const receiveCoupon = (params) => wxRequest(params,apiTHost + '/coupon/receive/')

// 优惠券使用
const useCoupon = (params) => wxRequest(params,apiTHost + '/coupon/use/')

// 获取会员信息
const memberDetail = (params) => wxRequest(params,apiTHost +　'/member/detail/')

//插入积分
const insertIntegral = (params) => wxRequest(params,apiTHost + '/member/insert_integral/')

//更新会员信息
const updateMember = (params) => wxRequest(params,apiTHost + '/member/update/')

//获取会员规则
const getMemberRules = (params) => wxRequest(params,apiTHost + '/member/rules/')

//获取预约订单列表
const getRecordOrderList = (params) => wxRequest(params,apiTHost + '/record/list/')

//修改预约订单状态
const updateRecordOrderStatus = (params) => wxRequest(params,apiTHost + '/record/up_state/')

//余额查询接口
const getDeposApi = (params) => wxRequest(params,apiTHost + '/deposit/getdepos/')

//充值规则显示
const getDeposRules = (params) => wxRequest(params,apiTHost + '/deposit/getrules/')

//余额充值接口
const inputDepos = (params) => wxRequest(params,apiTHost + '/deposit/indepos/')

//获取充值帐号
const getDeposPhone = (params) =>wxRequest(params,apiTHost + '/phone_get/')

//修改充值帐号
const upDeposPhone = (params) => wxRequest(params,apiTHost + '/phone_up/')

//消费余额抵扣
const reduceDepos = (params) => wxRequest(params,apiTHost + '/deposit/out/')

//验证是否满足抵扣金额
const valiDepos = (params) =>wxRequest(params,apiTHost + '/deposit/vali')

//支付未支付订单
const afterPay = (params) =>wxRequest(params,apiTHost + '/pay/before/')

// 保存formId
const saveFormId = (params) => wxRequest(params,apiTHost + '/form/inup/')


export default {
  inVersion,
  getVersion,
  reduceDepos,
  valiDepos,
  memberDetail,
  insertIntegral,
  updateMember,
  getMemberRules,
  getUptoken,
  sendWxCode,
  checkToken,
  getShopInfo,
  getAddressAll,
  addAddress,
  updateAddress,
  deleteAddress,
  getCategory,
  getFoodMsgList,
  getAttrMsgList,
  getListPeopleNum,
  startList,
  cancelList,
  submitRecord,
  getRecord,
  submitOrder,
  getOrderList,
  getOrderDetail,
  updateOrderStatus,
  addGoods,
  addGoodsAttribute,
  updateGoods,
  delGoods,
  updateGoodsStatus,
  updateGoodsAttribute,
  delGoodsAttribute,
  getShopGoods,
  delImage,
  adminLogin,
  cancelRecord,
  updateStatusRecord,
  printOrderMsg,
  sendModelMsg,
  getFormId,
  addFormId,
  getShopCouponList,
  getCustCouponList,
  useCoupon,
  receiveCoupon,
  getRecordOrderList,
  updateRecordOrderStatus,
  getDeposRules,
  getDeposApi,
  inputDepos,
  getDeposPhone,
  upDeposPhone,
  afterPay,
  saveFormId
}
