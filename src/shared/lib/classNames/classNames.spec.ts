import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {

    test('With only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('With additional params', () => {
        const expected = 'someClass cls1 cls2';
        expect(classNames('someClass', {}, [ 'cls1', 'cls2' ])).toBe(expected);
    });

    test('With mods true ', () => {
        const expected = 'someClass cls1 cls2 hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true }, [ 'cls1', 'cls2' ])).toBe(expected);
    });

    test('With mods false ', () => {
        const expected = 'someClass cls1 cls2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: false }, [ 'cls1', 'cls2' ])).toBe(expected);
    });

    test('With mods undefined ', () => {
        const expected = 'someClass cls1 cls2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: undefined }, [ 'cls1', 'cls2' ])).toBe(expected);
    });
});