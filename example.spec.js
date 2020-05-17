const example = require('./example');
const fetchData = example.fetchData;
 
describe('fetchData', () => {
    it('test 1', () => {
        expect.assertions(1);
        return fetchData().then(data => {
            expect(data).toBeFalsy();
        });
    });

    it('test 2', () => {
        expect.assertions(1);
        // точно также можно написать тест для rejects, если мы ожидаем что промис уйдёт в ошибку
        return expect(fetchData()).resolves.toBeFalsy();
    });

    it('test 3', async () => {
        expect.assertions(1);
        const data = await fetchData();
        expect(data).toBeFalsy();
    })
})