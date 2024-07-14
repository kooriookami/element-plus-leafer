<template>
  <div ref="container" />
</template>

<script setup lang="ts">
  import { Leafer } from 'leafer-ui';
  import { ElButton, ElButtonGroup } from '@element-plus-leafer/components';
  import { onMounted, ref } from 'vue';

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

    const groupButton1 = new ElButton({ text: 'Previous Page', type: 'primary' });
    const groupButton2 = new ElButton({ text: 'Next Page', type: 'primary' });

    const buttonGroup = new ElButtonGroup({
      children: [groupButton1, groupButton2],
    });

    leafer.add(buttonGroup);
  });
</script>
