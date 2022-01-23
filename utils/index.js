exports.letters = {
  a: 0,
  b: 1,
  c: 3,
  d: 0,
  e: 1,
  f: 3,
  g: 0,
  h: 1,
  i: 3,
  j: 0,
  k: 1,
  l: 3,
  m: 0,
  n: 1,
  o: 3,
  p: 0,
  q: 1,
  r: 3,
  s: 0,
  t: 1,
  u: 3,
  v: 0,
  w: 1,
  x: 3,
  y: 0,
  z: 1,
};

exports.validateName = (name) => {
  if (name.length < 2 || name.length > 13) {
    return {
      error: "Name must be a minimum of 2 characters and maximum of 13",
    };
  }
  if (!name.match("^[a-zA-Z0-9]*$")) {
    return {
      error: "Name must not contain a symbol",
    };
  }
  return name;
};

exports.validateGender = (gender) => {
  if (gender !== "male" && gender !== "female") {
    return {
      error: "Invalid gender.",
    };
  }
  return gender;
};
