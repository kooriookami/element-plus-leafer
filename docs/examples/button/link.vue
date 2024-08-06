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
      type: 'block',
      height: 40,
    });

    const button11 = new ElButton({ text: 'Plain', link: true });
    const button12 = new ElButton({ text: 'Primary', type: 'primary', link: true });
    const button13 = new ElButton({ text: 'Success', type: 'success', link: true });
    const button14 = new ElButton({ text: 'Info', type: 'info', link: true });
    const button15 = new ElButton({ text: 'Warning', type: 'warning', link: true });
    const button16 = new ElButton({ text: 'Danger', type: 'danger', link: true });

    const button21 = new ElButton({ text: 'Plain', link: true, disabled: true });
    const button22 = new ElButton({ text: 'Primary', type: 'primary', link: true, disabled: true });
    const button23 = new ElButton({ text: 'Success', type: 'success', link: true, disabled: true });
    const button24 = new ElButton({ text: 'Info', type: 'info', link: true, disabled: true });
    const button25 = new ElButton({ text: 'Warning', type: 'warning', link: true, disabled: true });
    const button26 = new ElButton({ text: 'Danger', type: 'danger', link: true, disabled: true });

    const flow = new Flow({
      flow: 'y',
      gap: 10,
      children: [
        {
          tag: 'Flow',
          gap: 10,
          children: [button11, button12, button13, button14, button15, button16],
        },
        {
          tag: 'Flow',
          gap: 10,
          children: [button21, button22, button23, button24, button25, button26],
        },
      ],
    });

    leafer.add(flow);
  });
</script>
