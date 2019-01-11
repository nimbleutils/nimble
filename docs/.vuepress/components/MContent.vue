<template>
  <div>
  </div>
</template>

<script>
import markdownIt from "markdown-it";
import emoji from "markdown-it-emoji";

export default {
  props: {
    content: {
      default: "",
      type: String
    },
    inline: {
      default: false,
      type: Boolean
    }
  },

  mounted() {
    const md = new markdownIt().use(emoji);
    this.$el.innerHTML = this.inline ? md.renderInline(this.content) : md.render(this.content)
  }
};
</script>

<style>

</style>