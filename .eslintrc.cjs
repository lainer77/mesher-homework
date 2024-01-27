module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:perfectionist/recommended-natural',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react', 'react-refresh', 'prettier', 'perfectionist'],
    rules: {
        // 컴포넌트가 명시적으로 export 경고
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        // prettier 포맷 룰에 어긋나면 에러 표시
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        // 컴포넌트 속성은 정렬대상에서 제외, 정렬될시 오히려 가독성을 나빠짐
        'perfectionist/sort-jsx-props': 'off',
    },
    // 리액트 버전 자동 추적
    settings: {
        react: {
            version: 'detect',
        },
    },
};
