<template>
  <div class="hm-input" :class="{'hm-input--suffix': showSuffix}"
  >  
      <input
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      class="hm-input__inner"
      :class="{
          'is-disabled':disabled
      }"
      :name="name"
      :disabled="disabled"
      :value="value"
      :placeholder="placeholder"
      @input="handleInput"
      >
      <span class="hm-input__suffix" v-if="showSuffix">
          <i class="hm-input__icon hm-icon-circle-close"
            v-if="clearICon && value"
            @click="clearWord"
          ></i>
          <i class="hm-input__icon hm-icon-view"
            :class="{'hm-icon-view-active' : passwordVisible}"
            v-if="showPassword"
            @click="handlePassword"
            ></i>
      </span>
  </div>
</template>

<script>
export default {
    name: 'hiInput',
    data() {
        return {
            passwordVisible: false
        }
    },
    props: {
        name: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: '请输入内容'
        },
        type:{
            type:String,
            default: 'text'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        },
        clearICon: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        }
    },
    computed: {
        showSuffix() {
            return this.clearICon || this.showPassword
        }
    },
    methods: {
        clearWord() {
            this.$emit('clear', '')
        },
        handlePassword() {
            this.passwordVisible = !this.passwordVisible
        },
        handleInput(e) {
            this.$emit('input', e.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
.hm-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .hm-input__inner {
       -webkit-appearance: none;
       background-color: #fff;
       background-image: none;
       border-radius: 4px;
       border: 1px solid #dcdfe6;
       box-sizing: border-box;
       color: #606266;
       display: inline-block;
       font-size: inherit;
       height: 40px;
       line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        width: 100%;

        &:focus {
            outline: none;
            border-color: #409eff;
        }
        &.is-disabled {
            border-color: #e4e7ed;
            background-color: #f5f7fa;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
}
.hm-input--suffix {
    .hm-input__inner {
        padding-right: 30px
    }
    .hm-input__suffix {
        position: absolute;
        height: 100%;
        right: 10px;
        top: 0;
        line-height: 40px;
        text-align: center;
        color: #c0c4cc;
        transition: all .3s;
        z-index: 900;
        i {
            color: #c0c4cc;
            font-size: 14px;
            cursor: pointer;
            transition: color .2s cubic-bezier(.645, .045, .355, 1);
        }
        .hm-icon-view-active {
            color: skyblue;
        }
    }
}
</style>