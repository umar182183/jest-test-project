
const CourseService = {
    camelToSnakeCase(val) {
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
    },
    snakeToCamelCase(snakeCased) {
        var camelCased = snakeCased.split("_");
        for (let index = 1; index < camelCased.length; index++) {
            var str = camelCased[index].split("");
            str[0] = str[0].toUpperCase();
            camelCased[index] = str.join("");
        }
        return camelCased.join("");
    },

    getUniqueWords(duplicateString) {
        // var duplicateString = "Hello umar Umar how how are you you";
        var splitDuplcate = duplicateString.toLowerCase().split(" ");
        // const unique = [...new Set(splitDuplcate)];
        // console.log("unique: ", unique)
        const unique = splitDuplcate.filter((v, i, a) => a.indexOf(v) === i);
        unique.sort(function (a, b) {
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
}


module.exports = CourseService;