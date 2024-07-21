<script setup lang="ts">
  import { Leafer } from 'leafer-ui';
  import { ElButton } from 'element-plus-leafer';

  const leafer = new Leafer({
    view: window,
    wheel: {
      disabled: true,
      preventDefault: false,
    },
  });

  const button = new ElButton(
    { text: 'Hello World!', type: 'primary' },
    { x: 20, y: 20 },
  );

  leafer.add(button);
</script>
