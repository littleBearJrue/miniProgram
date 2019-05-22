//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '请点击获取二维码',
    userInfo: {},
    isDisplayQR: false,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function () {
    this.setData({
      isDisplayQR: true
    })
  },

  getUserInfo: function(e) {
    this.setData({
      isDisplayQR: false
    })
  },

  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, urls: [current]
    })
  },
})
