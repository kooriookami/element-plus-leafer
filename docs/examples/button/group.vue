<template>
  <div ref="container" />
</template>

<script setup lang="ts">
  import { Leafer } from 'leafer-ui';
  import { Flow } from '@leafer-in/flow';
  import { ElButton, ElButtonGroup, ElIcon } from 'element-plus-leafer';
  import { onMounted, ref } from 'vue';
  import ArrowLeft from '@element-plus/icons-svg/arrow-left.svg?raw';
  import ArrowRight from '@element-plus/icons-svg/arrow-right.svg?raw';
  import Edit from '@element-plus/icons-svg/edit.svg?raw';
  import Share from '@element-plus/icons-svg/share.svg?raw';
  import Delete from '@element-plus/icons-svg/delete.svg?raw';

  const container = ref();

  onMounted(() => {
    const leafer = new Leafer({
      view: container.value,
      type: 'block',
      height: 32,
    });

    const groupButton1 = new ElButton({ text: 'Previous Page', type: 'primary', icon: ArrowLeft });
    const groupButton2 = new ElButton({
      text: 'Next Page',
      type: 'primary',
      children: [
        new ElIcon({
          icon: ArrowRight,
          size: 14,
          color: 'white',
        }),
      ],
    });

    const buttonGroup1 = new ElButtonGroup({
      children: [groupButton1, groupButton2],
    });

    const groupButton3 = new ElButton({ type: 'primary', icon: Edit });
    const groupButton4 = new ElButton({ type: 'primary', icon: Share });
    const groupButton5 = new ElButton({ type: 'primary', icon: Delete });

    const buttonGroup2 = new ElButtonGroup({
      children: [groupButton3, groupButton4, groupButton5],
    });

    const flow = new Flow({
      gap: 10,
      children: [buttonGroup1, buttonGroup2],
    });

    leafer.add(flow);
  });
</script>
