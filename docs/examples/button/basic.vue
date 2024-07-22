<template>
  <div ref="container" />
</template>

<script setup lang="ts">
  import { Leafer } from 'leafer-ui';
  import { Flow } from '@leafer-in/flow';
  import { ElButton } from 'element-plus-leafer';
  import { onMounted, ref } from 'vue';
  import Search from '@element-plus/icons-svg/search.svg?raw';
  import Edit from '@element-plus/icons-svg/edit.svg?raw';
  import Check from '@element-plus/icons-svg/check.svg?raw';
  import Message from '@element-plus/icons-svg/message.svg?raw';
  import Star from '@element-plus/icons-svg/star.svg?raw';
  import Delete from '@element-plus/icons-svg/delete.svg?raw';

  const container = ref();

  onMounted(() => {
    const leafer = new Leafer({
      view: container.value,
      height: 158,
      wheel: {
        disabled: true,
        preventDefault: false,
      },
    });

    const button11 = new ElButton({ text: 'Default' });
    const button12 = new ElButton({ text: 'Primary', type: 'primary' });
    const button13 = new ElButton({ text: 'Success', type: 'success' });
    const button14 = new ElButton({ text: 'Info', type: 'info' });
    const button15 = new ElButton({ text: 'Warning', type: 'warning' });
    const button16 = new ElButton({ text: 'Danger', type: 'danger' });

    const button21 = new ElButton({ text: 'Plain', plain: true });
    const button22 = new ElButton({ text: 'Primary', type: 'primary', plain: true });
    const button23 = new ElButton({ text: 'Success', type: 'success', plain: true });
    const button24 = new ElButton({ text: 'Info', type: 'info', plain: true });
    const button25 = new ElButton({ text: 'Warning', type: 'warning', plain: true });
    const button26 = new ElButton({ text: 'Danger', type: 'danger', plain: true });

    const button31 = new ElButton({ text: 'Round', round: true });
    const button32 = new ElButton({ text: 'Primary', type: 'primary', round: true });
    const button33 = new ElButton({ text: 'Success', type: 'success', round: true });
    const button34 = new ElButton({ text: 'Info', type: 'info', round: true });
    const button35 = new ElButton({ text: 'Warning', type: 'warning', round: true });
    const button36 = new ElButton({ text: 'Danger', type: 'danger', round: true });

    const button41 = new ElButton({ icon: Search, circle: true });
    const button42 = new ElButton({ icon: Edit, type: 'primary', circle: true });
    const button43 = new ElButton({ icon: Check, type: 'success', circle: true });
    const button44 = new ElButton({ icon: Message, type: 'info', circle: true });
    const button45 = new ElButton({ icon: Star, type: 'warning', circle: true });
    const button46 = new ElButton({ icon: Delete, type: 'danger', circle: true });

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
        {
          tag: 'Flow',
          gap: 10,
          children: [button31, button32, button33, button34, button35, button36],
        },
        {
          tag: 'Flow',
          gap: 10,
          children: [button41, button42, button43, button44, button45, button46],
        },
      ],
    });

    leafer.add(flow);
  });
</script>
