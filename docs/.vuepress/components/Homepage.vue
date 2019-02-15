<template>
  <main class="index">
    <section class="index__hero">
      <div class="o-container u-flex@lg">
        <div class="index__hero-text u-mr-2@lg">
          <h1>Nimble-utils</h1>
          <h2
            class="h4 index__hero-text-byline"
          >A styling utility for rapid React Native development.</h2>
          <p class="u-mt-2">
            When our projects got bigger and bigger the styling got more and more out of hand. Let us present to you our solution:
            <b>nimble-utils</b>
          </p>

          <div class="index__hero-text-button-group u-mt-3">
            <router-link
              to="/documentation/getting-started.html"
              class="button button--primary"
            >Getting started</router-link>
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
          <b>Prop styling</b> offers you a cleaner & more maintainable way to write styling in React Native. Instead of constantly creating stylesheets you pass props directly to your elements.
          In conjunction with prop styling,
          <b>theming</b> provides you an easy way to declare global styles in a separate theming file. Example of theme settings are:
          <i>colors</i>,
          <i>font sizes</i> &
          <i>default margins</i>.
          To clean up your code even more, nimble-utils offers
          <b>directives</b>, such as
          <i>nClick</i> &
          <i>nIf</i>.
        </p>

        <router-link to="/documentation/" class="button button--primary u-mt-3">Read more</router-link>
      </div>

      <img class="index__section-one-background" role="presentation" src="/section-one-curve.svg">
    </section>

    <section class="index__section index__section-two u-mt-5">
      <div class="o-container">
        <h3 class="u-mb-8 u-text-center">Examples</h3>

        <Example
          title="View"
          body="An extended View component which allows you to use prop styling & directives. This component replaces the View component of React Native."
          :nimble="examples.box.nimble"
          :native="examples.box.native"
        />

        <Example
          class="u-mt-5"
          title="Text"
          body="An extended Text component which allows you to use prop styling & directives. This component replaces the Text component of React Native."
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
        code: `<View f={1} dir=”row” center bg=”primary”>
  <Text size=”large” bold uppercase>nimble is awesome!</Text>
</View>`,
      },

      examples: {
        box: {
          nimble: `<View nPress={() => {}} f={1} mt={10} p={10} center bg="primary">
  ...
</View>`,
          native: `const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a1a1a1'
  }
})

<TouchableOpacity onPress={() => {}} style={styles.wrapper}>
  ...
</TouchableOpacity>`,
        },

        text: {
          nimble: `<Text color="primary-text" center deco="underline" bold uppercase>
  Nimble is awesome!
</Text>`,
          native: `const styles = StyleSheet.create({
  text: {
    color: '#ececec',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  }
})

<Text>{'Nimble is awesome!'.toUpperCase()}</Text>`,
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