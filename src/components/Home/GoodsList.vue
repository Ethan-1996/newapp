<template>
  <div class="goodsList">
      <div class="listTop" v-if="whiteFlag">
          <div class="topLeft" @click="active = !active">
              <P>发 现</P>
              <P :class="active?'second active':'second'">推荐好货</P>
          </div>
          <div class="topRight" @click="active = !active">
              <P>精 选</P>
              <P :class="!active?'second active':'second'">猜你喜欢</P>
          </div>
      </div>
      <van-sticky>
        <div class="listTop listTopWhite" v-if="!whiteFlag">
            <div :class="active?'topLeft active2':'topLeft'" @click="active = !active">
                <P>发 现</P>
            </div>
            <div :class="!active?'topRight active2':'topRight'" @click="active = !active">
                <P>精 选</P>
            </div>
        </div>
      </van-sticky>

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
          </div>
          <div class="blank"></div>
      </div>
  </div>
</template>

<script>
import {catalogue,topiclist,activitylist,activitycatalogue} from '@/api/api.js'
export default {
    name:"GoodsList",
    data(){
        return {
            active:true,
            whiteFlag:true
        }
    },
    created(){
        let query ={
            activityId:27,
            ...this.datainfo
        }
        activitylist(query).then(res => {
            console.log(res)
        })
    }
}
</script>

<style lang="scss" scoped>
.goodsList{
    
    .listTop{
        padding: 5px 0px 10px 0px;
        display: flex;
        justify-content: space-around;
        font-size: 16px;
        font-weight: 800;
        color: #fff;
        text-align: center;
        .topRight,.topLeft{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .topLeft{
            border-right: 1px solid #fff;
        }
        .second{
            font-size: 12px;
            border-radius: 8px;
            font-weight: normal;
            margin-top: 5px;
        }
        .active{
            background: #fff;
            color: #e74f41;
            width: 56px;
            padding: 2px;
        }
    }
    .listTopWhite{
        background: #fff;
        color: #e74f41;
        line-height: 36px;
        padding: 5px 0px 0px 0px;
        .topRight,.topLeft{
            flex: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-bottom: 2px solid #fff;
        }
        .active2{
            border-bottom: 2px solid #e74f41;
        }
    }
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
                color: #ccc;
                font-size: 10px;
                padding: 0 10px;
                margin-bottom: 10px;
                .vertical{
                    margin: 0 5px;
                }
            }
        }
        .blank{
            width: 100%;
            height: 60px;
        }
    }
}
</style>