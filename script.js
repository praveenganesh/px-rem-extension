var baseValue = 16;
let remValue = 0;
var reg = /^\d*\.?\d+$/;
async function init() {
    
    document.getElementById('baseValue').value = baseValue

}
function onBaseValueChange(value){
    baseValue = value
    onPXValueChange(document.getElementById("pxValue").value)
}


function onPXValueChange(value){
    if(value && reg.test(value)){
        document.getElementById("remValue").value = value/baseValue
    }
}


document.getElementById('baseValue').addEventListener('input', function(event) {
    onBaseValueChange(event.target.value);
  });
document.getElementById('pxValue').addEventListener('input', function(event) {
    onPXValueChange(event.target.value);
});
init();