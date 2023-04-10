import Edit from '../src/core/Edit';

describe('index', () => {
    describe('myPackage', () => {
        it('should return a string containing the message', () => {
            const message = 'Hello';

            const edit = new Edit(message);

            expect(edit.getMessage()).toMatch(message);
        });
    });
});
