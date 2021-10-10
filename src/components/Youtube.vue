<template>
  <div :style="styles.widthLimitter">
    <div :style="styles.renderingAreaProvider">
      <iframe :src="src" :style="styles.iframe" frameborder="0" allowfullscreen="true"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Youtube",
  props: ["maxWidth", "videoId"],
  computed: {
    src() {
      return `https://www.youtube.com/embed/${this.videoId}`;
    }
  },
  data() {
    return {
      styles: {
        widthLimitter: {
          maxWidth: this.maxWidth ? this.maxWidth : null
        },
        renderingAreaProvider: {
          background: "#f0f0f0",
          height: 0,
          margin: "1rem 0",
          paddingBottom: "calc(56.25%)",
          position: "relative",
          width: "100%"
        },
        iframe: {
          height: "100%",
          left: 0,
          position: "absolute",
          top: 0,
          width: "100%"
        }
      }
    };
  }
};
</script>