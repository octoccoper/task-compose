const compose = fns => data =>
  fns.reduceRight((value, func) => func(value), data);
