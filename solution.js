function compose(fns) {
  return function (data) {
    return fns.reduceRight(function (value, func) {
      return func(value);
    }, data);
  };
};