// list.js
var request = require('../../request/request');
Page({
  data:{
    resultCondition: false,
    loadingHidden: false,
    modalHidden: true,
    modalValue: '',
    items: []
  },
  onLoad:function(options){
    var isTag = options.isTag;
    var query = options.query;
    request.searchBook(isTag, query, this.searchSuccess, this.searchFail);
  },
  // 搜索图书成功
  searchSuccess: function(data){
    this.setData({
      loadingHidden: true
    });
    if(data.total === 0){
      this.setData({
        resultCondition: true
      });
    }else{
      this.setData({
        items: data.books
      });
    }
  },
  // 搜索图书失败
  searchFail: function(){
    this.setData({
      loadingHidden: true,
      modalHidden: false,
      modalValue: '搜索图书失败'
    })
  },
  // 跳转至图书详情页
  getBookDetail: function(e){
    var bookId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?bookId=' + bookId
    });
  },
  // 模态框确定事件处理
  modalChange: function(e){
    this.setData({
      modalHidden: true,
      modalValue: ''
    });
  }
})