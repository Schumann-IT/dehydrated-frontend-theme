import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';

export default [
    {
        input: 'index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: 'dist/index.esm.js',
                format: 'esm',
                sourcemap: true,
            },
        ],
        external: ['@mui/material', '@mui/material'],
        plugins: [
            resolve(),
            commonjs(),
            typescript({tsconfig: './tsconfig.json'}),
            image(),
            url({
                include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
                limit: 8192, // inline files < 8kb as base64
            }),
        ],
    },
    {
        input: 'dist/types/index.d.ts',
        output: [{file: 'dist/index.d.ts', format: 'esm'}],
        plugins: [dts()],
    },
]; 