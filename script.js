let keg =document.getElementById("kg");
let lbb =document.getElementById("lb");
let ozx =document.getElementById("oz");

let convertFromKg = () => {
    let kg = keg.value;
    lbb.value = (kg * 2.205).toFixed(2);
    ozx.value = (kg * 35.274).toFixed(2);
};

let convertFromlb = () => {
    let lb = lbb.value;
    keg.value = (lb / 2.205).toFixed(2);
    ozx.value = (lb * 16).toFixed(2);
};

let convertFromOz = () => {
    let oz = ozx.value;
    keg.value = (oz / 35.274).toFixed(2);
    lbb.value = (oz / 16).toFixed(2);
};

keg.addEventListener("input", convertFromKg);
lbb.addEventListener("input", convertFromlb);
ozx.addEventListener("input", convertFromOz);
window.addEventListener("load", convertFromKg);x