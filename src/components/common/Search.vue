<template>
  
<div class="searchBox">
    <div class="search">
        <button><van-icon name="search" style="margin-right:10px;position: relative;top:2px" />好宝贝 等你搜</button>
        <div class="msg">
            <van-icon name="chat-o" />
            <p>消息</p>
        </div>
    </div>
    <div class="three">
        <div class="threeCon">
           <div class="steps">三步省钱  <span>①进入淘宝</span><span>②复制商品标题</span><span>③打开本app</span></div>  
            <van-button color="linear-gradient(to right, #ff9933, #ff6633)" size="mini" style=" height: 16px;width: 36px;border-radius: 8px;margin: 3px 0 0 8px;">攻略</van-button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:"Search"
}
</script>

<style lang="scss" scoped>
.search{
    padding: 0 10px;
    background: #de58b7;
    height: 40px;
    display: flex;
    button{
        width: 320px;
        height: 30px;
        border-radius: 15px;
        background: #fff;
        list-style: none;
        font-size: 14PX;
        text-align: left;
        line-height: 30px;
        padding: 0 15px;
        margin-top: 5px;
        color: #666;
        
    }
    .msg{
        margin-left: 7px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        p{
            font-size: 12PX;
        }
    }
}
.three{
    padding: 0 10px;
    background: #de58b7;
    height: 22px;
    line-height: 22px;
    font-size: 10PX;
    color: #fff;
    padding-bottom: 5px;
    .threeCon{
        background: rgba(0,0,0,0.6);
        display: flex;
        border-radius: 11px;
        padding: 0 0 0 10px;
        .steps{
            span{
                display: inline-block;
                margin-left: 6px;
            }
        }
    }
}
</style>