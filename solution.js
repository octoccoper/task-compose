function compose(fns) {
  return function composition(...args) {
    return fns.reduceRight(function(values, func) {
      if (values.length === 2) {
        return func(values[0], values[1]);
      }
      return func(values);
    }, args);
  };
}
