<template>
  <div ref="container" />
</template>

<script setup lang="ts">
  import { Leafer } from 'leafer-ui';
  import { ElCard } from 'element-plus-leafer';
  import { onMounted, ref } from 'vue';
  import { Flow } from '@leafer-in/flow';

  const container = ref();

  onMounted(() => {
    const leafer = new Leafer({
      view: container.value,
      type: 'block',
    });

    const card1 = new ElCard({
      shadow: 'always',
      children: [
        {
          tag: 'Text',
          text: 'Always',
        },
      ],
    }, { width: 400 });

    const card2 = new ElCard({
      shadow: 'hover',
      children: [
        {
          tag: 'Text',
          text: 'Hover',
        },
      ],
    }, { width: 400 });

    const card3 = new ElCard({
      shadow: 'never',
      children: [
        {
          tag: 'Text',
          text: 'Never',
        },
      ],
    }, { width: 400 });

    const flow = new Flow({
      x: 12,
      y: 12,
      flow: 'y',
      gap: 20,
      children: [card1, card2, card3],
    });

    leafer.add(flow);
    leafer.height = leafer.renderBounds.height;
  });
</script>
