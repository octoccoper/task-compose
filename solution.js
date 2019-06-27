function compose(fns) {
  return function(...args) {
    console.log(
      "anon funct: type of args is:",
      typeof args,
      " args is: ",
      args
    );
    return fns.reduceRight(function(args, func) {
      console.log(
        "inside reduceRight: type of args is:",
        typeof args,
        " args is: ",
        args
      );
      return Array.isArray(args) ? func(...args) : func(args);
    }, args);
  };
}
