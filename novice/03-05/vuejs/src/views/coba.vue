<template>
  <div>
    <navbar />
    <br />
    <div>
      <status />
    </div>
    <br />
    <collapse />
    <menu />
  </div>
</template>
<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import menu from "@/components/menu.vue";
export default {
  components: {
    navbar,
    menu
  }
};
</script>