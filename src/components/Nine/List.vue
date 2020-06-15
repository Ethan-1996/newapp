<template>
  <div class="goodsList">
     

      <!-- 列表部分开始 -->
      <div class="listItem">
          <div class="item" v-for="(item,index) in 4" :key="index">
              <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg" alt="">
              <div class="title">
                  <img src="@/assets/images/tmall.png" alt=""><span>【而特兰蒂斯】打包抽纸本色什么40包</span>
              </div>
              <div class="money">
                  <span class="after">券后</span>
                  <span class="moneyNum"><span class="yuan">￥</span>39.9</span>
              </div>
              <div class="description">
                  <van-tag color="#da4a69" plain class="tag">旗舰店</van-tag>
                  <van-tag color="#f39b5d" plain class="tag">爆款</van-tag>
                  <van-tag color="#ea5c59" plain class="tag">券 30元</van-tag>
              </div>
              <div class="bottom">
                  <p>已抢 432</p>
                  <p class="vertical">|</p>
                  <p>评价 95</p>
              </div>
              <div class="shopName">
                  德佑旗舰店
              </div>
          </div>
          <div class="blank"></div>
      </div>
  </div>
</template>

<script>
import {ninelist} from '@/api/api.js'
export default {
    name:"NineList",
    data(){
        return {
            active:true,
        }
    },
    created(){
        let query ={
            pageId:1,
            nineCid:-1,
            ...this.datainfo
        }
        ninelist(query).then(res => {
            console.log(res)
        })
    }
}
</script>

<style lang="scss" scoped>
.goodsList{
    margin-top: 10px;
    // list item样式开始
    .listItem{
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        
        .item{
            width: 175px;
            border-radius: 4px;
            overflow: hidden;
            font-size: 12px;
            background: #fff;
            margin-bottom: 10px;
            img{
                width: 100%;
                height: 174px;

            }
            .title{
                padding: 0 10px;
                margin-top: 10px;
                line-height: 16px;
                img{
                    height: 12px;
                    width: 22px;
                }
            }
            .money{
                margin-top: 10px;
                padding: 0 10px;
                .after{
                    font-size: 10px;
                    color: #666;
                }
                .moneyNum{
                    font-size: 14px;
                    color: #e72d28;
                    .yuan{
                        font-size: 10px;
                        margin-right: 2px;
                    }
                }
            }
            .description{
                padding: 0 10px;
                margin: 8px 0;
                .tag{
                    margin-right: 5px;
                }
            }
            .bottom{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                color: #bbb;
                font-size: 10px;
                padding: 0 10px;
                margin-bottom: 10px;
                .vertical{
                    margin: 0 5px;
                }
            }
            .shopName{
                color: #bbb;
                font-size: 10px;
                padding: 0 10px;
                margin-bottom: 10px;
            }
        }
        .blank{
            width: 100%;
            height: 60px;
        }
    }
}
</style>