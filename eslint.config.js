import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
    {
        name: 'app/files-to-lint',
        files: ['**/*.{js,mjs,jsx,vue}'],
    },

    {
        name: 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
    },

    js.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    skipFormatting,

    // 添加规则
    {
        rules: {
            // 示例：强制属性按特定顺序排列
            'vue/attributes-order': [
                'error',
                {
                    order: [
                        'DEFINITION', // 定义相关属性 (is, v-is)
                        'LIST_RENDERING', // 列表渲染 (v-for)
                        'CONDITIONALS', // 条件判断 (v-if, v-else-if, v-else, v-show, v-cloak)
                        'RENDER_MODIFIERS', // 渲染修饰符 (v-once, v-pre)
                        'GLOBAL', // 全局属性 (id)
                        'UNIQUE', // 唯一属性 (ref, key, slot)
                        'TWO_WAY_BINDING', // 双向绑定 (v-model)
                        'OTHER_DIRECTIVES', // 其他指令 (v-custom-directive)
                        'EVENTS', // 事件 (v-on)
                        'CONTENT', // 内容相关属性 (v-text, v-html)
                        'OTHER_ATTR', // 其他属性
                    ],
                    alphabetical: true, // 按字母顺序排列
                },
            ],
        },
    },
]
