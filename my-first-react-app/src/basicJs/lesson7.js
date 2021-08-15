const colour = ["Blue","Orange","Green"];
const items = colour.map(colorName => {
    return '<li>'+colorName+'</li>';
});
console.log(items)

const items1 = colour.map(colorName => `<li>${colorName}</li>`);
console.log(items1)