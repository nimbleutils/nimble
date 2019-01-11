<template>

  <main class="index">

    <section class="index__hero">
    
      <div class="index__hero-text o-container">
        <h1>React Native Nimble</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <p>Fusce dapibus ligula sit amet metus rutrum iaculis. Donec eu sapien ac ante convallis tincidunt vestibulum at eros. Ut id luctus mi, imperdiet aliquet risus. Nam eget commodo metus. Ut lacus dolor, malesuada.</p>
      </div>
      
      <img 
        class="index__hero-background"
        role="presentation"
        src="/hero-curve.svg">
        
    </section>

    <section class="index__section index__section-one">
      <div class="index__section-one-inner o-container u-text-center">

        <h3 class="u-mb-1">Why Nimble Utils?</h3>
        <p><b>Prop styling</b> is in hac habitasse platea dictumst. Sed accumsan, neque quis ultrices fermentum, purus est cursus ex, eget convallis ipsum ipsum et dui. <b>Directives</b> is mollis augue vel fermentum ultricies. Mauris tincidunt eu nunc id bibendum. Pellentesque sit amet cursus odio. Nam malesuada suscipit arcu nec auctor. <b>Theming</b> is fusce finibus est orci, nec posuere ante iaculis sit amet. Sed ac condimentum elit. Aliquam et egestas justo. Cras leo dolor, feugiat in dolor in, rhoncus.</p>

      </div>
    </section>

    <a href="#">dwadwa</a>
    
  </main>

  <!-- <div class="home">
    <div class="wrapper">

      <div class="logo">
        <img :src="$withBase(data.logo)" alt="logo">
      </div>

      <div class="header">
        <h1>
          Nimble Utils
          
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing 
        </p>
        <a href="/guide/">
          <button class="button">
            Get started
          </button>
        </a>
        <a href="/guide/">
          <button class="button">
            Documentation
          </button>
        </a>
        <div class="header-background"></div>
      </div>

      <div class="footer" v-if="data.footer">
        {{ data.footer }}
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
};
</script>

<style lang="scss">
// @import './styles/config.styl'
@import './styles/main.scss';

.index {

  &__hero {
    position: relative;

    width: 100%;
    padding-top: 70px;
    padding-bottom: 200px;

    background: linear-gradient(115.91deg, #9974E3 0.73%, #D56079 92.84%);

    &-text {
      
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
    width: 100%;
    padding: 30px 0 200px;

    background-image: url('/section-one-background.svg');
    background-color: #F7F7FC;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;

    &-inner {
      width: 100%;
      max-width: 780px;
    }
  }

}
</style>