import { openBlock, createElementBlock } from 'vue';

var script$1 = {
  name: 'Button',
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", null, "hello"))
}

script$1.render = render$1;
script$1.__file = "src/Button.vue";

var script = {
  name: 'Input',
};

const _hoisted_1 = { type: "text" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", _hoisted_1))
}

script.render = render;
script.__file = "src/Input.vue";

var components = { Button: script$1, Input: script };

const plugin = {
  install(Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  },
};

export { plugin as default };
