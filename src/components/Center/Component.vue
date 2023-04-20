<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>