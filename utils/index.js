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
      error: `
        <body style='margin: 0'>
          <div style='margin:0;background-color:#99D0C7;color:#1A1B1B;height:100vh;width:100%;'>
            <div style='background-color:#FCF5EC;flex-direction:column;justify-content:center;align-items:center;margin:auto;height:350px;width:800px;position:fixed;top:0;bottom:0;left:0;right:0;border-radius:8px;text-align:center;padding:2rem;box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);color:#5B6274'>
              <h1 style='color:#F1863B'>Oops!</h1>
              <h3>Name must be a minimum of 2 characters and maximum of 13.</h3>
            </div>
          </div>
        </body>`,
    };
  }
  if (!name.match("^[a-zA-Z0-9]*$")) {
    return {
      error: `<body style='margin: 0'>
          <div style='margin:0;background-color:#99D0C7;color:#1A1B1B;height:100vh;width:100%;'>
            <div style='background-color:#FCF5EC;flex-direction:column;justify-content:center;align-items:center;margin:auto;height:350px;width:800px;position:fixed;top:0;bottom:0;left:0;right:0;border-radius:8px;text-align:center;padding:2rem;box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);color:#5B6274'>
              <h1 style='color:#F1863B'>Oops!</h1>
              <h3>Name must not contain a symbol.</h3>
            </div>
          </div>
        </body>`,
    };
  }
  return name;
};

exports.validateGender = (gender) => {
  if (gender !== "male" && gender !== "female") {
    return {
      error: `<body style='margin: 0'>
          <div style='margin:0;background-color:#99D0C7;color:#1A1B1B;height:100vh;width:100%;'>
            <div style='background-color:#FCF5EC;flex-direction:column;justify-content:center;align-items:center;margin:auto;height:350px;width:800px;position:fixed;top:0;bottom:0;left:0;right:0;border-radius:8px;text-align:center;padding:2rem;box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);color:#5B6274'>
              <h1 style='color:#F1863B'>Oops!</h1>
              <h3>Invalid gender.</h3>
            </div>
          </div>
        </body>`,
    };
  }
  return gender;
};

exports.validateAge = (age) => {
  if (age < 0 || age > 120) {
    return {
      error: `<body style='margin: 0'>
          <div style='margin:0;background-color:#99D0C7;color:#1A1B1B;height:100vh;width:100%;'>
            <div style='background-color:#FCF5EC;flex-direction:column;justify-content:center;align-items:center;margin:auto;height:350px;width:800px;position:fixed;top:0;bottom:0;left:0;right:0;border-radius:8px;text-align:center;padding:2rem;box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);color:#5B6274'>
              <h1 style='color:#F1863B'>Oops!</h1>
              <h3>Age must be more than 0 and less than 120 years old.</h3>
            </div>
          </div>
        </body>`,
    };
  }
  return age;
};
