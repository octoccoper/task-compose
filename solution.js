function compose(fns) {
  return function(...args) {
    return fns.reduceRight(function(values, func) {
      return [func(...values)];
    }, args)[0];
  };
}
