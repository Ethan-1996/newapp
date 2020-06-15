<template>
  <div class="list">
    <div class="listCon">
      <van-tree-select height="93vh" :items="items" :main-active-index.sync="active">
        <template #content>
          <!-- <van-image
            v-if="active === 0"
            src="https://img.yzcdn.cn/vant/apple-1.jpg"
          />
          <van-image
            v-if="active === 1"
            src="https://img.yzcdn.cn/vant/apple-2.jpg"
          /> -->
          <div v-if="active === 0">
            000
          </div>
          <div v-if="active === 1">
            111
          </div>
        </template>
      </van-tree-select>
    </div>
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
export default {
  name: 'List',
  components: {
    Tabbar
  },
  data() {
    return {
      active: 0,
      items: [
        { text: '分组 1' }, 
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        ],
    };
  },
}
</script>
