<template>
  <div ref="container" />
</template>

<script setup lang="ts">
  import { Leafer } from 'leafer-ui';
  import { Flow } from '@leafer-in/flow';
  import { ElIcon } from 'element-plus-leafer';
  import { onMounted, ref } from 'vue';
  import Edit from '@element-plus/icons-svg/edit.svg?raw';
  import Share from '@element-plus/icons-svg/share.svg?raw';
  import Delete from '@element-plus/icons-svg/delete.svg?raw';
  import Loading from '@element-plus/icons-svg/loading.svg?raw';
  import Search from '@element-plus/icons-svg/search.svg?raw';

  const container = ref();

  onMounted(() => {
    const leafer = new Leafer({
      view: container.value,
      type: 'draw',
      height: 20,
    });

    const icon1 = new ElIcon({ icon: Edit, size: 20 });
    const icon2 = new ElIcon({ icon: Share, color: '#409efc', size: 20 });
    const icon3 = new ElIcon({ icon: Delete, size: 20 });
    const icon4 = new ElIcon({ icon: Loading, size: 20, loading: true });
    const icon5 = new ElIcon({ icon: Search, size: 20 });

    const flow = new Flow({
      gap: 10,
      children: [icon1, icon2, icon3, icon4, icon5],
    });

    leafer.add(flow);
  });
</script>
