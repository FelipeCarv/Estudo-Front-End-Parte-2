const transformarObjEmArray = (objeto) => {
    var a = Object.entries(objeto);
    return a;

    };
    var exemplo = { a: 1, b: 2, c: true};
    console.log(transformarObjEmArray(exemplo)); // { a: 1, c: true }