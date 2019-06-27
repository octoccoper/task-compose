function compose(fns) {
  return function(...args) {
    return fns.reduceRight(function(args, func) {
      return Array.isArray(args) ? func(...args) : func(args);
    }, args);
  };
}
