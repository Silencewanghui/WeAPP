//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgSrc: '../../../images/logo48*48.png'
  },
  handleButtonTap: function(){
    // 跳转至搜索页面
    wx.redirectTo({
      url: '../search/search'
    });
  }
})
