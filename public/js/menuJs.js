var colFamOpt = document.getElementById("col-fam-opt");
var colRandOpt = document.getElementById("col-rand-opt");
var famLs = document.getElementById("fam-ls");

colFamOpt.addEventListener('click', function() {
    famLs.classList.remove('invisible');
})
colRandOpt.addEventListener('click', function() {
    famLs.classList.add('invisible');
})