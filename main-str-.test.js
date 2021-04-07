test("show convert camel case to snake case", () => {
    var snaked = camelToSnakeCase("bananaOrangeAppleMango");
    expect(snaked).toBe("banana_orange_apple_mango");
  });

  test("show convert snake case to camel case", () => {
    var camled = snakeToCamelCase("banana_orange_apple_mango");
    expect(camled).toBe("bananaOrangeAppleMango");
  });

  test("show uniquewords with sorting", () => {
    var unique = getUniqueWords("Hello umar Umar how how are you you");
    expect(unique).toBe("are hello how umar you");
  });

  
  function camelToSnakeCase(val) {
    // var fruits = "bananaOrangeAppleMango";
    var snakeCased = val
      .split("")
      .map(c => {
        if (c == c.toUpperCase()) {
          return "_" + c.toLowerCase();
        } else {
          return c;
        }
      })
      .join("");
    return snakeCased;
  }
  
  function snakeToCamelCase(snakeCased) {
    var camelCased = snakeCased.split("_");
    for (let index = 1; index < camelCased.length; index++) {
      var str = camelCased[index].split("");
      str[0] = str[0].toUpperCase();
      camelCased[index] = str.join("");
    }
    return camelCased.join("");
  }
  
  function getUniqueWords(duplicateString) {
    // var duplicateString = "Hello umar Umar how how are you you";
    var splitDuplcate = duplicateString.toLowerCase().split(" ");
    // const unique = [...new Set(splitDuplcate)];
    // console.log("unique: ", unique)
    const unique = splitDuplcate.filter((v, i, a) => a.indexOf(v) === i);
    unique.sort(function(a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    console.log("unique: ", unique.join(" "));
    return unique.join(" ");
  }
  