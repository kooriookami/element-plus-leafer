<template>
  <div ref="container" />
</template>

<script setup lang="ts">
  import { Leafer } from 'leafer-ui';
  import { Flow } from '@leafer-in/flow';
  import { ElButton } from 'element-plus-leafer';
  import { onMounted, ref } from 'vue';

  const container = ref();

  onMounted(() => {
    const leafer = new Leafer({
      view: container.value,
      type: 'draw',
      height: 32,
    });

    const button1 = new ElButton({ text: 'Default', color: '#626aef' });
    const button2 = new ElButton({ text: 'Plain', color: '#626aef', plain: true });
    const button3 = new ElButton({ text: 'Disabled', color: '#626aef', disabled: true });
    const button4 = new ElButton({ text: 'Disabled Plain', color: '#626aef', plain: true, disabled: true });

    const flow = new Flow({
      gap: 10,
      children: [button1, button2, button3, button4],
    });

    leafer.add(flow);
  });
</script>
