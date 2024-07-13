<script setup lang="ts">
  import { Leafer } from 'leafer-ui';
  import { ElButton } from '@element-plus-leafer/components';

  const leafer = new Leafer({
    view: window,
    wheel: {
      disabled: true,
      preventDefault: false,
    },
  });

  const button = new ElButton({ text: 'Hello World!', type: 'primary' });
  button.x = 20;
  button.y = 20;

  leafer.add(button);
</script>
