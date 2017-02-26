<template>
  <p>{{ greeting(name) }}</p>
</template>

<script>
module.exports = {
  data: function () {
    return {
      greeting: function (name) {
        return 'Hello, ' + name + '!';
      }
    }
  },
  props: ['name']
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
