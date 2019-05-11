describe("Функция compose", () => {
  it("возвращает функцию", () => {
    expect(typeof compose([() => {}])).toEqual("function");
  });

  it("возвращает результат работы цепочки функций", () => {
    expect(
      compose([
        function multiply2(a) {
          return a * 2;
        },
        function sum(a, b) {
          return a - b;
        }
      ])(6, 4)
    ).toEqual(4);
  });
});
