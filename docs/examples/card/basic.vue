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
      header: 'Card name',
      footer: {
        tag: 'Text',
        text: 'Footer content',
      },
      children: [
        {
          tag: 'Flow',
          flow: 'y',
          gap: 16,
          children: new Array(4).fill().map((value, index) => ({
            tag: 'Text',
            text: `List item ${index + 1}`,
          })),
        },
      ],
    }, { x: 12, y: 12, width: 400 });

    leafer.add(card);
    leafer.height = leafer.renderBounds.height;
  });
</script>
