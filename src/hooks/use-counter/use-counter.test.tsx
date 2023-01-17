import { render, screen, renderHook } from '@testing-library/react';
import { useCounter } from './useCounter';
import { act } from 'react-dom/test-utils';

describe('use coutner hook', () => {
    test('initial count to 0', () => {
        const { result } = renderHook(useCounter);
        expect(result.current.count).toBe(0);
    });
    test('should expect and render initial count', () => {
        const { result } = renderHook(useCounter, {
            initialProps: {
                initialCount: 10,
            },
        });
        expect(result.current.count).toBe(10);
    });
    test('should increment count by one', () => {
        const { result } = renderHook(useCounter, {
            initialProps: {
                initialCount: 10,
            },
        });
        act(() => result.current.increment());
        expect(result.current.count).toBe(11);
    });
    test('should decremnt count by one', () => {
        const { result } = renderHook(useCounter, {
            initialProps: {
                initialCount: 10,
            },
        });
        act(() => result.current.decrement());
        expect(result.current.count).toBe(9);
    });
});
