<template>
  <section class="example">
    <div class="u-text-center">
      <h4 class="example__title">{{ title }}</h4>
      <p class="example__body">{{ body }}</p>
    </div>

    <div class="u-mt-3">
      <div class="example__buttons">
        <button
          @click="showNative = false"
          class="example__button"
          :class="{ 'example__button--active': !showNative }"
        >Nimble</button>
        <button
          @click="showNative = true"
          class="example__button"
          :class="{ 'example__button--active': showNative }"
        >Native</button>
      </div>
      <div v-if="!showNative">
        <pre class="code code--example" v-highlightjs="nimble"><code class="html"></code></pre>
      </div>
      <div v-if="showNative">
        <pre class="code code--example" v-highlightjs="native"><code class="html"></code></pre>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: false,
    },
    nimble: {
      type: String,
      required: true,
    },
    native: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      showNative: false,
    }
  },
}
</script>

<style lang="scss">
@import 'styles/settings/core';

.example {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  &__title {
  }

  &__body {
    margin-top: 5px;
  }

  &__buttons {
  }

  &__button {
    padding: 8px 36px;

    background: none;
    background-color: #f2f2f2;
    border: none;
    border-radius: 5px 5px 0 0;
    cursor: pointer;

    color: #666666;
    font-size: 12px;
    font-weight: 600;
    font-family: 'Raleway';

    &:nth-of-type(1n + 2) {
      margin-left: 2px;
    }

    &--active {
      background-color: map-get($iota-global-colors, code-background);
      color: #fff;
    }
  }
}
</style>