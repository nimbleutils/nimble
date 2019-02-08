<template>
  <main class="index">
    <section class="index__hero">
      <div class="o-container u-flex@lg">
        <div class="index__hero-text u-mr-2@lg">
          <h1>React Native Nimble</h1>
          <h2
            class="h4 index__hero-text-byline"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p
            class="u-mt-2"
          >Fusce dapibus ligula sit amet metus rutrum iaculis. Donec eu sapien ac ante convallis tincidunt vestibulum at eros. Ut id luctus mi, imperdiet aliquet risus. Nam eget commodo metus. Ut lacus dolor, malesuada.</p>

          <div class="index__hero-text-button-group u-mt-3">
            <router-link
              to="/documentation/getting-started.html"
              class="button button--primary"
            >Getting Started</router-link>
            <router-link to="/documentation/" class="button button--secondary u-ml-1">Documentation</router-link>
          </div>
        </div>

        <div class="index__hero-code u-mt-4 u-mt-none@lg">
          <pre class="code" v-highlightjs="hero.yarn"><code class="plaintext"></code></pre>
          <pre class="code u-mt-1" v-highlightjs="hero.code"><code class="html"></code></pre>
        </div>
      </div>

      <img class="index__hero-background" role="presentation" src="/hero-curve.svg">
    </section>

    <section class="index__section index__section-one">
      <div class="index__section-one-inner o-container u-text-center">
        <h3 class="u-mb-1">Why Nimble Utils?</h3>
        <p>
          <b>Prop styling</b> is in hac habitasse platea dictumst. Sed accumsan, neque quis ultrices fermentum, purus est cursus ex, eget convallis ipsum ipsum et dui.
          <b>Directives</b> is mollis augue vel fermentum ultricies. Mauris tincidunt eu nunc id bibendum. Pellentesque sit amet cursus odio. Nam malesuada suscipit arcu nec auctor.
          <b>Theming</b> is fusce finibus est orci, nec posuere ante iaculis sit amet. Sed ac condimentum elit. Aliquam et egestas justo. Cras leo dolor, feugiat in dolor in, rhoncus.
        </p>
      </div>

      <img class="index__section-one-background" role="presentation" src="/section-one-curve.svg">
    </section>

    <section class="index__section index__section-two u-mt-5">
      <div class="o-container">
        <h3 class="u-mb-8 u-text-center">Examples</h3>

        <Example
          title="Box"
          body="Quisque in eleifend leo, non maximus eros. Sed eu gravida mauris, ac fermentum libero. Aliquam feugiat aliquam orci."
          :nimble="examples.box.nimble"
          :native="examples.box.native"
        />

        <Example
          class="u-mt-5"
          title="Text"
          body="Quisque in eleifend leo, non maximus eros. Sed eu gravida mauris, ac fermentum libero. Aliquam feugiat aliquam orci."
          :nimble="examples.text.nimble"
          :native="examples.text.native"
        />
      </div>
    </section>

    <footer class="footer u-mt-8 u-pv-2">
      <div class="o-container u-flex u-jc-center">
        <a href="https://github.com/goa-codebet/nimble" class="footer__github">
          <img src="/github-mark.png">
        </a>
      </div>
    </footer>
  </main>
</template>

<script>
import Example from './Example'

export default {
  components: {
    Example,
  },

  data() {
    return {
      hero: {
        yarn: `> yarn add nimble-utils`,
        code: `<Box f={1} dir=”row” justify=”center” align=”center” bg=”primary”>
  <Text size=”large” bold uppercase>nimble is awesome!</Text>
</Box>`,
      },

      examples: {
        box: {
          nimble: `<Box f={1} dir=”row” justify=”center” align=”center” bg=”primary”>
  <Text size=”large” bold uppercase>nimble is awesome!</Text>
</Box>`,
          native: `<Box f={1} dir=”row” justify=”center” align=”center” bg=”primary”>
  <Text size=”large” bold uppercase>this is the example!</Text>
</Box>`,
        },

        text: {
          nimble: `<Box f={1} dir=”row” justify=”center” align=”center” bg=”primary”>
  <Text size=”large” bold uppercase>nimble is awesome!</Text>
</Box>`,
          native: `<Box f={1} dir=”row” justify=”center” align=”center” bg=”primary”>
  <Text size=”large” bold uppercase>this is the example!</Text>
</Box>`,
        },
      },
    }
  },
  computed: {
    data() {
      return {
        page: this.$page.frontmatter,
      }
    },
  },
}
</script>

<style lang="scss">
@import './styles/main.scss';

.index {
  &__hero {
    position: relative;

    width: 100%;
    padding-top: 70px;
    padding-bottom: 125px;

    background: linear-gradient(115.91deg, #9974e3 0.73%, #d56079 92.84%);

    @include iota-breakpoint(sm) {
      padding-bottom: 175px;
    }

    @include iota-breakpoint(xl) {
      padding-bottom: 200px;
    }

    @include iota-breakpoint(xxl) {
      padding-bottom: 300px;
    }

    &-text,
    &-code {
      @include iota-breakpoint(lg) {
        flex: 1;
      }
    }

    &-text {
      position: relative;
      z-index: 1;

      color: #fff;

      &-byline {
        font-weight: 600;
      }
    }

    &-code {
    }

    &-background {
      position: absolute;
      right: 0;
      bottom: -2px;
      left: 0;

      width: 100%;

      // transform: translateY(100%);
    }
  }

  &__section-one {
    position: relative;
    width: 100%;
    padding: 30px 0 150px;

    background-color: #f7f7fc;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;

    @include iota-breakpoint(lg) {
      padding-bottom: 200px;
    }

    @include iota-breakpoint(xl) {
      padding-bottom: 250px;
    }

    @include iota-breakpoint(xxl) {
      padding-bottom: 300px;
    }

    &-inner {
      width: 100%;
      max-width: 780px;
    }

    &-background {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;

      width: 100%;
    }
  }
}

.footer {
  background-color: #222222;

  &__github {
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }

    img {
      $size: 30px;
      width: $size;
      height: $size;
    }
  }
}
</style>