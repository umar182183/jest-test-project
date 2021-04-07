const mainClass = require('./main')



test("show convert camel case to snake case", () => {
    var snaked = mainClass.camelToSnakeCase("bananaOrangeAppleMango");
    expect(snaked).toBe("banana_orange_apple_mango");
  });

  test("show convert snake case to camel case", () => {
    var camled = mainClass.snakeToCamelCase("banana_orange_apple_mango");
    expect(camled).toBe("bananaOrangeAppleMango");
  });

  test("show uniquewords with sorting", () => {
    var unique = mainClass.getUniqueWords("Hello umar Umar how how are you you");
    expect(unique).toBe("are hello how umar you");
  });

  
 