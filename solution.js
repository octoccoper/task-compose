function compose(fns) {
  return function(...args) {
    return fns.reduceRight(function(value, func) {
      return func(value);
    }, ...args);
  };
}
