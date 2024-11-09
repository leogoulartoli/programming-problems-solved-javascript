const { fibIterative, fibRecursive } = require('../index.js');

describe('Fibonacci Functions', () => {
    describe('fibIterative', () => {
        test('should return 0 for n = 0', () => {
            expect(fibIterative(0)).toBe(0);
        });

        test('should return 1 for n = 1', () => {
            expect(fibIterative(1)).toBe(1);
        });

        test('should return 1 for n = 2', () => {
            expect(fibIterative(2)).toBe(1);
        });

        test('should return correct values for small numbers', () => {
            expect(fibIterative(3)).toBe(2);
            expect(fibIterative(4)).toBe(3);
            expect(fibIterative(5)).toBe(5);
            expect(fibIterative(6)).toBe(8);
        });

        test('should handle larger numbers efficiently', () => {
            expect(fibIterative(10)).toBe(55);
            expect(fibIterative(20)).toBe(6765);
            expect(fibIterative(30)).toBe(832040);
        });

    });

    describe('fibRecursive (recursive with memoization)', () => {
        test('should return 0 for n = 0', () => {
            expect(fibRecursive(0)).toBe(0);
        });

        test('should return 1 for n = 1', () => {
            expect(fibRecursive(1)).toBe(1);
        });

        test('should return 1 for n = 2', () => {
            expect(fibRecursive(2)).toBe(1);
        });

        test('should return correct values for small numbers', () => {
            expect(fibRecursive(3)).toBe(2);
            expect(fibRecursive(4)).toBe(3);
            expect(fibRecursive(5)).toBe(5);
            expect(fibRecursive(6)).toBe(8);
        });

        test('should handle larger numbers with memoization', () => {
            expect(fibRecursive(10)).toBe(55);
            expect(fibRecursive(20)).toBe(6765);
            expect(fibRecursive(30)).toBe(832040);
        });

        // Performance test
        test('should compute large fib numbers efficiently', () => {
            const start = Date.now();
            const result = fibRecursive(40);
            const end = Date.now();
            expect(result).toBe(102334155);
            expect(end - start).toBeLessThan(1000); // Should complete in less than 1 second
        });
    });
}); 