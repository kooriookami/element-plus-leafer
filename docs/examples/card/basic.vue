<template>
  <div ref="container" />
</template>

<script setup lang="ts">
  import { Leafer } from 'leafer-ui';
  import { ElButton, ElCard } from 'element-plus-leafer';
  import { onMounted, ref } from 'vue';

  const container = ref();

  onMounted(() => {
    const leafer = new Leafer({
      view: container.value,
      type: 'block',
    });

    const card = new ElCard({
      header: {
        tag: 'Flow',
        width: 360,
        flowAlign: 'center',
        gap: 'auto',
        children: [
          {
            tag: 'Text',
            text: 'Card name',
          },
          new ElButton({ text: 'Operate', type: 'primary', link: true }),
        ],
      },
      footer: 'Footer content',
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
