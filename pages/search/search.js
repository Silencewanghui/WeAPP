// search.js
Page({
  data:{
    modalHidden: true,
    modalValue: '',
    inputValue: '',
    isTag: false
  },
  // 检查网络状况
  onLoad: function(options){
    wx.getNetworkType({
      fail: function(){
        this.setData({
          modalHidden: false,
          modalValue: '请求网络失败！'
        });
      }
    });
  },
  // 处理用户输入  
  handleInput: function(event){ 
    this.setData({
      inputValue: event.detail.value.trim(),
      isTag: false
    });
    return event.detail.value;
  },
  // 选择某个标签
  selectTag: function(event){
    this.setData({
      inputValue: event.currentTarget.dataset.tag,
      isTag: true
    });
  },
  // 搜索图书
  searchBook: function(){
    var that = this;
    var value = this.data.inputValue.trim();
    if(!value){
      // 内容为空时激活提示框
      this.setData({
        modalHidden: false,
        modalValue: '搜索内容不能为空！'  
      });
    }else{
      wx.navigateTo({
        url: '../list/list?isTag=' + that.data.isTag + 
              '&query=' + that.data.inputValue
      });
    }
  },
  // 模态框确定事件处理
  modalChange: function(e){
    this.setData({
      modalHidden: true,
      modalValue: ''
    });
  }
})