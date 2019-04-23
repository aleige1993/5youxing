<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  height: 100vh;
  font-size: 14px;
  .container {
    height: 100%;
    // background-color: #fff;
    .row {
      margin: 10px 0;
    }
    .bottom-border {
      border-bottom: 1px solid #ddd;
    }
    input {
      height: 30px;
    }
    .common-btn {
      margin: 30px 0;
    }
  }
  .flex-column {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    padding: 20px;
  }
  .flex-space{
    display: flex;
    justify-content:space-between;
  }
  .gray {
    color: #ccc
  }
}
</style>
