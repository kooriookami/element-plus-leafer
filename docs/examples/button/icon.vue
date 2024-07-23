<template>
  <div ref="container" />
</template>

<script setup lang="ts">
  import { Leafer } from 'leafer-ui';
  import { Flow } from '@leafer-in/flow';
  import { ElButton } from 'element-plus-leafer';
  import { onMounted, ref } from 'vue';
  import Edit from '@element-plus/icons-svg/edit.svg?raw';
  import Share from '@element-plus/icons-svg/share.svg?raw';
  import Delete from '@element-plus/icons-svg/delete.svg?raw';
  import Search from '@element-plus/icons-svg/search.svg?raw';
  import Upload from '@element-plus/icons-svg/upload.svg?raw';

  const container = ref();

  onMounted(() => {
    const leafer = new Leafer({
      view: container.value,
      type: 'draw',
      height: 32,
    });

    const button1 = new ElButton({ type: 'primary', icon: Edit });
    const button2 = new ElButton({ type: 'primary', icon: Share });
    const button3 = new ElButton({ type: 'primary', icon: Delete });
    const button4 = new ElButton({ text: 'Search', type: 'primary', icon: Search });
    const button5 = new ElButton({ text: 'Upload', type: 'primary', iconRight: Upload });

    const flow = new Flow({
      gap: 10,
      children: [button1, button2, button3, button4, button5],
    });

    leafer.add(flow);
  });
</script>
