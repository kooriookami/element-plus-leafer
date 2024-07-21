<template>
  <div ref="container" />
</template>

<script setup lang="ts">
  import { Leafer } from 'leafer-ui';
  import { Flow } from '@leafer-in/flow';
  import { ElButton } from 'element-plus-leafer';
  import { onMounted, ref } from 'vue';
  import Eleme from '@element-plus/icons-svg/eleme.svg?raw';

  const container = ref(null);

  onMounted(() => {
    const leafer = new Leafer({
      view: container.value,
      height: 32,
      wheel: {
        disabled: true,
        preventDefault: false,
      },
    });

    const button1 = new ElButton({ text: 'Loading', type: 'primary', loading: true });
    const button2 = new ElButton({ text: 'Loading', type: 'primary', loading: true, loadingIcon: Eleme });

    const flow = new Flow({
      gap: 10,
      children: [button1, button2],
    });

    leafer.add(flow);
  });
</script>
