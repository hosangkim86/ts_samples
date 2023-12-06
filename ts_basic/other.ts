// union型
var unionData: string | number;
unionData = "Tokyo";
unionData = 100;
// unionData = true;

console.log(unionData, typeof unionData);

// any型 = JavaScript（動的型付けで決定）
var data: any;
data = 10;
data = "Hello";
data = true;

console.log(data, typeof data);
