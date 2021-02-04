// First example
let exampleHomework0 = [
    ["Apple" , 10],
    ["Bananas" , 20],
    ["Grapes" , 30],
    ["Lemon" , 10],
]
    for (let index = 0; index < exampleHomework0.length; index++) {
        const element = exampleHomework0[index];
        document.write("<div>" + "<table>" +"<th>" + element[0] + "</th>" +  "<td>" + element[1] + "</td>" + "</table>" + "</div>" )
    }