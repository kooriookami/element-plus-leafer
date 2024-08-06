<template>
  <div ref="container" />
</template>

<script setup lang="ts">
  import { Leafer, PointerEvent } from 'leafer-ui';
  import { Flow } from '@leafer-in/flow';
  import { ElButton } from 'element-plus-leafer';
  import { ElMessage } from 'element-plus';
  import { onMounted, ref } from 'vue';

  const container = ref();

  onMounted(() => {
    const leafer = new Leafer({
      view: container.value,
      type: 'block',
      height: 32,
    });

    const button1 = new ElButton({
      text: 'Click',
      onClick: () => {
        ElMessage('click');
      },
    });
    const button2 = new ElButton({ text: 'Double Click' });
    button2.on(PointerEvent.DOUBLE_CLICK, () => {
      ElMessage('double click');
    });
    const button3 = new ElButton({ text: 'Menu' });
    button3.on(PointerEvent.MENU, () => {
      ElMessage('menu');
    });

    const flow = new Flow({
      gap: 10,
      children: [button1, button2, button3],
    });

    leafer.add(flow);
  });
</script>
