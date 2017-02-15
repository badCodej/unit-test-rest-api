var Mather = {
    add: (num1, num2) => {

        if(typeof num1 !== "number" || typeof num2!== "number"){
            throw new Error("inputs are not valid number");
        }

        return num1 + num2;
    }
}

module.exports = Mather;