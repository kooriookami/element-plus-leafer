<template>
  <div ref="container" />
</template>

<script setup lang="ts">
  import { Leafer } from 'leafer-ui';
  import { Flow } from '@leafer-in/flow';
  import { ElButton } from 'element-plus-leafer';
  import { onMounted, ref } from 'vue';
  import Search from '@element-plus/icons-svg/search.svg?raw';

  const container = ref();

  onMounted(() => {
    const leafer = new Leafer({
      view: container.value,
      type: 'block',
      height: 140,
    });

    const button11 = new ElButton({ text: 'Large', size: 'large' });
    const button12 = new ElButton({ text: 'Default' });
    const button13 = new ElButton({ text: 'Small', size: 'small' });

    const button21 = new ElButton({ text: 'Large', round: true, size: 'large' });
    const button22 = new ElButton({ text: 'Default', round: true });
    const button23 = new ElButton({ text: 'Small', round: true, size: 'small' });

    const button31 = new ElButton({ icon: Search, circle: true, size: 'large' });
    const button32 = new ElButton({ icon: Search, circle: true });
    const button33 = new ElButton({ icon: Search, circle: true, size: 'small' });

    const flow = new Flow({
      flow: 'y',
      gap: 10,
      children: [
        {
          tag: 'Flow',
          flowAlign: 'center',
          gap: 10,
          children: [button11, button12, button13],
        },
        {
          tag: 'Flow',
          flowAlign: 'center',
          gap: 10,
          children: [button21, button22, button23],
        },
        {
          tag: 'Flow',
          flowAlign: 'center',
          gap: 10,
          children: [button31, button32, button33],
        },
      ],
    });

    leafer.add(flow);
  });
</script>
