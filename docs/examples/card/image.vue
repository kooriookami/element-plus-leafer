<template>
  <div ref="container" />
</template>

<script setup lang="ts">
  import { Leafer } from 'leafer-ui';
  import { ElCard } from 'element-plus-leafer';
  import { onMounted, ref } from 'vue';

  const container = ref();

  onMounted(() => {
    const leafer = new Leafer({
      view: container.value,
      type: 'block',
    });

    const card = new ElCard({
      header: 'Yummy hamburger',
      children: [
        {
          tag: 'Image',
          url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          height: 360,
        },
      ],
    }, { x: 12, y: 12, width: 400 });

    leafer.add(card);
    leafer.height = leafer.renderBounds.height;
  });
</script>
