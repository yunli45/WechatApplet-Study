// pages/DetailPage/DetailPage.js
var comm = require("../../Comm/comm.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        info: "",
        id: "",
        background: [],
        list: comm.list
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
        this.data.id = options.id;

        for (let index = 0; index < this.data.list.length; index++) {
            if (this.data.list[index].id == this.data.id) {
                this.setData({
                    info: this.data.list[index],
                    background : this.data.list[index].img
                })
            }

        };
        wx.setNavigationBarTitle({
            title: this.data.info.title
        })
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
     
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})