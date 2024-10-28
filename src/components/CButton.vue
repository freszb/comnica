<template>
    <button>{{ msg }}</button>
</template>

<script>
export default {
  name: 'CButton',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
  button {
    padding: 1rem;
    border-radius: 3rem;
    border-width: 0;
    background-color: #186553;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    &:hover {
      background-color: #20876f;
      cursor: pointer;
    }
    &:active {
      background-color: #29a98b;
    }
  }
</style>
