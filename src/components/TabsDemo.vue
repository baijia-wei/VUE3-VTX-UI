<template>
  <div>tabsdemo组件</div>
  <div>
    <div class="tab">
      <div
        :class="indexT===index? 'tab_lian aon':'tab_lian'"
        v-for=" (item,index) in tablan"
        :key="item.id"
        @click="shijian(index)"
      >{{item.shux}}</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  components() {},
  setup() {
    let indexT = ref(0)

    // 添加函数
    const tablan = [
      {
        id: 1,
        shux: '托儿',
      },
      {
        id: 2,
        shux: '小林',
      },
      {
        id: 3,
        shux: '康娜',
      },
    ]
    const shijian = (index) => {
      indexT.value = index
    }

    return { tablan, indexT, shijian }
  },
}
</script>

<style scoped lang="scss" >
.tab {
  border: 1px solid #f80707;
  border-radius: 5px;
  max-width: 375px;
  background-color: rgb(84, 151, 151);

  height: 45px;
  display: flex;
  padding: 0 30px;

  .tab_lian {
    display: flex;
    flex: 33%;
    font-size: 16px;
    justify-content: space-around;
    align-items: center;
    color: #ffaaff;
    margin: 20px 0;
    padding: 0 20px;
  }

  .aon {
    position: relative;
    font-weight: bold;

    &::before {
      content: '';
      width: 90%;
      margin: 0 auto;
      height: 4px;
      position: absolute;
      background-color: #ff0000;
      color: #ff0000;

      bottom: -20px;
    }
  }
}
</style>
