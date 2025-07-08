<template>
  <button
    :class="[
      'custom-button',
      sizeClass,
      typeClass,
      { 'opacity-65 cursor-not-allowed': disabled || loading },
      { 'position-relative': loading },
      { 'rounded-full': circle },
      { 'px-0 w-[32px] h-[32px]': circle && !sizeClass.includes('large') && !sizeClass.includes('small') },
      { 'px-0 w-[40px] h-[40px]': circle && sizeClass.includes('large') },
      { 'px-0 w-[28px] h-[28px]': circle && sizeClass.includes('small') }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="mr-2">
      <i class="loading-icon"></i>
    </span>
    <span v-else-if="icon" class="mr-2">
      <i :class="icon"></i>
    </span>
    <span v-if="!onlyIcon || (onlyIcon && loading)">{{ label }}</span>
    <span v-else>
      <i :class="icon"></i>
    </span>
  </button>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits, toRefs } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator: (value) => ['primary', 'success', 'warning', 'danger', 'info', 'default'].includes(value)
  },
  size: {
    type: String,
    default: '',
    validator: (value) => ['large', 'default', 'small'].includes(value)
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  autofocus: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['click'])

const { type, size, plain, loading, disabled, icon, label } = toRefs(props)

const sizeClass = computed(() => {
  switch (size.value) {
    case 'large': return 'size-large'
    case 'small': return 'size-small'
    default: return 'size-default'
  }
})

const typeClass = computed(() => {
  if (disabled.value) return 'disabled'
  
  if (plain.value) {
    switch (type.value) {
      case 'primary': return 'type-primary-plain'
      case 'success': return 'type-success-plain'
      case 'warning': return 'type-warning-plain'
      case 'danger': return 'type-danger-plain'
      case 'info': return 'type-info-plain'
      default: return 'type-default-plain'
    }
  } else {
    switch (type.value) {
      case 'primary': return 'type-primary'
      case 'success': return 'type-success'
      case 'warning': return 'type-warning'
      case 'danger': return 'type-danger'
      case 'info': return 'type-info'
      default: return 'type-default'
    }
  }
})

const onlyIcon = computed(() => {
  return !!(icon.value && !label.value && !loading.value)
})

const handleClick = (event) => {
  if (!disabled.value && !loading.value) {
    emits('click', event)
  }
}
</script>

<style scoped>
/* 基础样式 */
.custom-button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: all 0.2s;
  border: none;
  outline: none;
  cursor: pointer;
}

.custom-button[disabled] {
  cursor: not-allowed;
}

/* 尺寸样式 */
.size-large {
  padding: 6px 16px;
  font-size: 14px;
  border-radius: 4px;
}

.size-default {
  padding: 5px 12px;
  font-size: 14px;
  border-radius: 4px;
}

.size-small {
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 3px;
}

/* 类型样式 - 普通按钮 */
.type-primary {
  background-color: #165DFF;
  color: white;
}

.type-primary:hover:not([disabled]) {
  background-color: #0E42D2;
}

.type-success {
  background-color: #00B42A;
  color: white;
}

.type-success:hover:not([disabled]) {
  background-color: #008720;
}

.type-warning {
  background-color: #FF7D00;
  color: white;
}

.type-warning:hover:not([disabled]) {
  background-color: #CC6400;
}

.type-danger {
  background-color: #F53F3F;
  color: white;
}

.type-danger:hover:not([disabled]) {
  background-color: #C43131;
}

.type-info {
  background-color: #86909C;
  color: white;
}

.type-info:hover:not([disabled]) {
  background-color: #6B727D;
}

.type-default {
  background-color: white;
  color: #4E5969;
  border: 1px solid #C9CDD4;
}

.type-default:hover:not([disabled]) {
  background-color: #F7F8FA;
}

/* 类型样式 - 朴素按钮 */
.type-primary-plain {
  background-color: #E8F3FF;
  color: #165DFF;
  border: 1px solid #B2D4FF;
}

.type-primary-plain:hover:not([disabled]) {
  background-color: #D6E8FF;
}

.type-success-plain {
  background-color: #F0FFF4;
  color: #00B42A;
  border: 1px solid #B7EB8F;
}

.type-success-plain:hover:not([disabled]) {
  background-color: #E6FFED;
}

.type-warning-plain {
  background-color: #FFF7E8;
  color: #FF7D00;
  border: 1px solid #FFD699;
}

.type-warning-plain:hover:not([disabled]) {
  background-color: #FFF2D8;
}

.type-danger-plain {
  background-color: #FFF2F0;
  color: #F53F3F;
  border: 1px solid #FFBB99;
}

.type-danger-plain:hover:not([disabled]) {
  background-color: #FFE9E6;
}

.type-info-plain {
  background-color: #F2F3F5;
  color: #86909C;
  border: 1px solid #C9CDD4;
}

.type-info-plain:hover:not([disabled]) {
  background-color: #E5E6EB;
}

.type-default-plain {
  background-color: white;
  color: #4E5969;
  border: 1px solid #C9CDD4;
}

.type-default-plain:hover:not([disabled]) {
  background-color: #F7F8FA;
}

/* 禁用状态 */
.disabled {
  background-color: #F2F3F5;
  color: #C9CDD4;
  border: 1px solid #E5E6EB;
}

/* 圆形按钮 */
.rounded-full {
  border-radius: 50%;
}

/* 加载图标 */
.loading-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-radius: 50%;
  border-right-color: transparent;
  animation: rotate 0.8s linear infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
    