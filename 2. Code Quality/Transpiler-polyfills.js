// before running the transpiler
height = height ?? 100;

// after running the transpiler
height = height !== null && height !== undefined ? height : 100;


Math.trunc = Math.trunc || function (x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
}