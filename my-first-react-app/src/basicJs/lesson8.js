const marks = {
    physics: 75,
    chemistry: 80,
    maths: 82
};

const physics = marks.physics;
const chemistry = marks.chemistry;
const maths = marks.maths;
console.log(physics,chemistry,maths);

const {physics:phy, chemistry:chem, maths: mat} = marks;
console.log(phy,chem,mat);