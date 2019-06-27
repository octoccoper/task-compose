function compose(fns) {
  return function(...args) {
    return fns.reduceRight(function(args, func) {
      return [func(...args)];
    }, args)[0];
  };
}
