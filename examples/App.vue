<template>
  <div id="app">
    <hi-form :model="value" class="form">
      <hi-form-item label="用户名">
        <hi-input placeholder="请输入用户名"></hi-input>
      </hi-form-item>
      <hi-form-item label="密码">
        <hi-input placeholder="请输入密码"></hi-input>
      </hi-form-item>
      <hi-form-item label="开关">
        <hi-switch
        activeColor="red"
        inactiveColor="blue"
        :value="value.model"
        @input="check"
        ></hi-switch>
      </hi-form-item>
        <hi-button class="button right-left">取消</hi-button>
        <hi-button class="button" type="primary">确认</hi-button>
    </hi-form>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      value: {
        model: false
      }
    }
  },
  methods: {
    check(value) {
      this.value.model = value
    }
  }
}
</script>

<style lang="scss" scoped>
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    .form {
      width: 50%;
      position: relative;
      .button {
        position:absolute;
        right: 0;
      }
      .right-left {
        right: 100px;
      }
    }
  }
</style>
