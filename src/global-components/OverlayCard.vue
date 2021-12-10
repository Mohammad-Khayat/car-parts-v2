<template>
  <div class="overlay-component">
    <b-card
      v-bind="$attrs"
      class="border-0 shadow-sm p-0 rounded-20"
      body-class="p-0 position-relative rouded-20"
    >
      <template #header v-if="header">
        <slot name="header" :v-bind="{ image }"> </slot>
      </template>

      <template #footer v-if="footer">
        <slot name="footer" :v-bind="{ image }"> </slot>
      </template>

      <div class="overlay fit position-absolute" :class="overlayClass">
        <slot> </slot>
      </div>
      <b-img
        :src="image"
        class="w-100 rounded-20"
        style="height: 400px; object-fit: cover"
      >
      </b-img>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    footer: Boolean,
    header: Boolean,
    overlayClass: String,
  },
};
</script>

<style lang='scss'>
.overlay-component {
  .card {
    * {
      transition: 0.5s;
    }
    overflow: hidden;
    .overlay {
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(2px);
      z-index: 2;
      opacity: 0;
      visibility: hidden;
    }
    &:hover {
      img {
        transform: scale(1.2);
      }
      .overlay {
        opacity: 1;
        visibility: visible;
      }
    }
  }
}
</style>