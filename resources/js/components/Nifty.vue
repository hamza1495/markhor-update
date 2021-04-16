<template>
  <div>

    <div class="container">
      <a href="#animals" class="item"><img src="https://placeimg.com/640/480/animals" alt="Animals"></a>
      <a href="#architecture" class="item"><img src="https://placeimg.com/640/480/architecture" alt="Architecture"></a>
      <a href="#nature" class="item"><img src="https://placeimg.com/640/480/nature" alt="Nature"></a>
      <a href="#people" class="item"><img src="https://placeimg.com/640/480/people" alt="People"></a>
      <a href="#tech" class="item"><img src="https://placeimg.com/640/480/tech" alt="Tech"></a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Nifty'
};
</script>

<style scoped>
.container {
  display: flex;
  margin-top: 50px;
}

.item {
  position: relative;
  display: block;
  flex: 1 1 0;
  transition: transform 500ms;
}

.container:focus-within .item,
.container:hover .item {
  transform: translateX(-25%);
}

.item:focus ~ .item,
.item:hover ~ .item {
  transform: translateX(25%);
}

.container .item:focus,
.container .item:hover {
  transform: scale(1.5);
  z-index: 1;
}

body {
  overflow: hidden;
}

.item img {
  display: block;
  max-width: 100%;
}
</style>
