import { expect } from 'chai';

import { writeVariable, writeMap } from './utils';

describe('utils', () => {
    describe('writeVariable', () => {
        it('should be able to print-out simple variable', () => {
            const text = writeVariable(
                'This is a comment',
                'variable-name', '#fff',
            );

            expect(text).to.eql(
                // eslint-disable-next-line indent
                    '\n'
                + '/**\n'
                + ' * This is a comment\n'
                + ' */\n'
                + '@variable-name: #fff;\n',
            );
        });

        it('should be able to print-out simple variable with an empty comment', () => {
            const text = writeVariable('', 'variable-name', '#fff');
            expect(text).to.eql('\n\n@variable-name: #fff;\n');
        });

        it('should be able to print-out a comment in multiline', () => {
            const text = writeVariable(
                'This is a comment\nin two lines',
                'variable-name', '#fff',
            );

            expect(text).to.eql(
                // eslint-disable-next-line indent
                    '\n'
                + '/**\n'
                + ' * This is a comment\n'
                + ' * in two lines\n'
                + ' */\n'
                + '@variable-name: #fff;\n',
            );
        });
    });

    describe('writeMap', () => {
        it('should be able to print-out a complex variable', () => {
            const text = writeMap(
                'This is a comment\nin two lines',
                'variable-name', '{\ncolor-1: #fff;\ncolor-2: #000;\n}',
            );

            expect(text).to.eql(
                // eslint-disable-next-line indent
                    '\n'
                + '/**\n'
                + ' * This is a comment\n'
                + ' * in two lines\n'
                + ' */\n'
                + '#variable-name() {\n'
                + 'color-1: #fff;\n'
                + 'color-2: #000;\n'
                + '};\n',
            );
        });
    });
});
