<script setup lang="ts">
  import { Leafer, Flow,Text } from 'leafer';
  import { ElButton, ElInput } from 'element-plus-leafer';

  const leafer = new Leafer({
    view: window,
  });

  const button = new ElButton({ text: 'Hello World!', type: 'primary' });

  const input = new ElInput({});

  const flow = new Flow({
    x: 20,
    y: 20,
    gap: 10,
    children: [input, button],
  });

  const text = new Text({
    text: 'This is a Leafer Text component',
    x: 20,
    y: 100,
    fontSize: 20,
    fill: '#333',
    editable: true,
  });

  leafer.add(flow);
  leafer.add(text);
</script>
