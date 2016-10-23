// request.js
var api = require('api.js');
var util = require('../utils/util.js');

// 搜索图书
function searchBook(isTag, query, successCb, failCb){
    if(isTag === 'true'){
        wx.request({
            url: api.API_BOOK_SEARCH,
            data: {
                tag: query
            },
            success: function(res){
                util.isFunction(successCb) && successCb(res.data);
            },
            fail: function(){
                util.isFunction(failCb) && failCb();
            }
        });
    }else{
        wx.request({
            url: api.API_BOOK_SEARCH,
            data: {
                q: query
            },
            success: function(res){
                util.isFunction(successCb) && successCb(res.data);
            },
            fail: function(){
                util.isFunction(failCb) && failCb();
            }
        });
    }
}

// 获取图书详情
function searchBookDetail(bookId, successCb, failCb){
    wx.request({
        url: api.API_BOOK_DETAIL.replace(':id', bookId),
        data: {},
        success: function(res){
            util.isFunction(successCb) && successCb(res.data);
        },
        fail: function(){
            util.isFunction(failCb) && failCb();
        }
    });
}

module.exports = {
    searchBook: searchBook,
    searchBookDetail: searchBookDetail
}