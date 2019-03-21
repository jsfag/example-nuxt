<template>
  <section class="element-button-submit">
    <button>
      <slot></slot>
    </button>
  </section>
</template>

<script>
export default {
  // 
}
</script>

<style scoped>
.element-button-submit {
  display: flex;
  flex: 1;
}

button {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  background-color: #1351E4;
  cursor: pointer;
}
button:hover {
  background-color: rgba(19, 81, 228, 0.9);
}
</style>
