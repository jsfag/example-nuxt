<template>
  <section class="element-field-input">
    <label v-bind:for="for_name">{{ label }}</label>
    <input v-bind="$attrs">
  </section>
</template>

<script>
export default {
  props: ['label', 'for_name', 'placeholder'],
}
</script>

<style scoped>
section.element-field-input {
  display: flex;
  flex: 1;
  flex-direction: column;
}

label {
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.01em;

  color: #59575E;
}
input {
  background: #F4F6FB;
  border: none;
  border-radius: 4px;
  min-height: 39px;
  min-width: 100%;
  padding: 0 10px;
}
</style>
