module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es2021: true,
    },
    extends: ['plugin:prettier/recommended'], // 覆盖eslint格式配置,写在最后
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        //空行最多不能超过2行
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
        // 使用 === 替代 ==
        eqeqeq: ['error', 'allow-null'],
        // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
        // always-multiline：多行模式必须带逗号，单行模式不能带逗号
        'comma-dangle': [2, 'never'],
    },
}
