<script setup lang="ts">
  import { Leafer } from 'leafer-ui';
  import { Flow } from '@leafer-in/flow';
  import { ElButton, ElButtonGroup } from '@element-plus-leafer/components';

  const leafer = new Leafer({
    view: window,
  });

  const button11 = ElButton({ text: 'Default' });
  const button12 = ElButton({ text: 'Primary', type: 'primary' });
  const button13 = ElButton({ text: 'Success', type: 'success' });
  const button14 = ElButton({ text: 'Info', type: 'info' });
  const button15 = ElButton({ text: 'Warning', type: 'warning' });
  const button16 = ElButton({ text: 'Danger', type: 'danger' });

  const button21 = ElButton({ text: 'Plain', plain: true });
  const button22 = ElButton({ text: 'Primary', type: 'primary', plain: true });
  const button23 = ElButton({ text: 'Success', type: 'success', plain: true });
  const button24 = ElButton({ text: 'Info', type: 'info', plain: true });
  const button25 = ElButton({ text: 'Warning', type: 'warning', plain: true });
  const button26 = ElButton({ text: 'Danger', type: 'danger', plain: true });

  const button31 = ElButton({ text: 'Round', round: true });
  const button32 = ElButton({ text: 'Primary', type: 'primary', round: true });
  const button33 = ElButton({ text: 'Success', type: 'success', round: true });
  const button34 = ElButton({ text: 'Info', type: 'info', round: true });
  const button35 = ElButton({ text: 'Warning', type: 'warning', round: true });
  const button36 = ElButton({ text: 'Danger', type: 'danger', round: true });

  const button41 = ElButton({ text: 'Default', disabled: true });
  const button42 = ElButton({ text: 'Primary', type: 'primary', disabled: true });
  const button43 = ElButton({ text: 'Success', type: 'success', disabled: true });
  const button44 = ElButton({ text: 'Info', type: 'info', disabled: true });
  const button45 = ElButton({ text: 'Warning', type: 'warning', disabled: true });
  const button46 = ElButton({ text: 'Danger', type: 'danger', disabled: true });

  const button51 = ElButton({ text: 'Plain', plain: true, disabled: true });
  const button52 = ElButton({ text: 'Primary', type: 'primary', plain: true, disabled: true });
  const button53 = ElButton({ text: 'Success', type: 'success', plain: true, disabled: true });
  const button54 = ElButton({ text: 'Info', type: 'info', plain: true, disabled: true });
  const button55 = ElButton({ text: 'Warning', type: 'warning', plain: true, disabled: true });
  const button56 = ElButton({ text: 'Danger', type: 'danger', plain: true, disabled: true });

  const button61 = ElButton({ text: 'A', circle: true });
  const button62 = ElButton({ text: 'B', type: 'primary', circle: true });
  const button63 = ElButton({ text: 'C', type: 'success', circle: true });
  const button64 = ElButton({ text: 'D', type: 'info', circle: true });
  const button65 = ElButton({ text: 'E', type: 'warning', circle: true });
  const button66 = ElButton({ text: 'F', type: 'danger', circle: true });

  const groupButton1 = ElButton({ text: 'Previous Page', type: 'primary' });
  const groupButton2 = ElButton({ text: 'Current Page', type: 'primary' });
  const groupButton3 = ElButton({ text: 'Next Page', type: 'primary' });

  const buttonGroup = ElButtonGroup({
    children: [groupButton1, groupButton2, groupButton3],
  });

  const flow1 = new Flow({
    gap: 10,
    children: [button11, button12, button13, button14, button15, button16],
  });

  const flow2 = new Flow({
    gap: 10,
    children: [button21, button22, button23, button24, button25, button26],
  });

  const flow3 = new Flow({
    gap: 10,
    children: [button31, button32, button33, button34, button35, button36],
  });

  const flow4 = new Flow({
    gap: 10,
    children: [button41, button42, button43, button44, button45, button46],
  });

  const flow5 = new Flow({
    gap: 10,
    children: [button51, button52, button53, button54, button55, button56],
  });

  const flow6 = new Flow({
    gap: 10,
    children: [button61, button62, button63, button64, button65, button66],
  });

  const flow = new Flow({
    x: 20,
    y: 20,
    flow: 'y',
    gap: 10,
    children: [flow1, flow2, flow3, flow4, flow5, flow6, buttonGroup],
  });

  leafer.add(flow);
</script>
