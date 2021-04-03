  //function for displaying values
   function dis(val) {
    document.getElementById("CcHUB").value += val
   }
   //function for evaluation
   function solve() {
    let x = document.getElementById("CcHUB").value
    let y = eval(x)
    document.getElementById("CcHUB").value = y
   }
   //function for clearing the display
   function clr() {
    document.getElementById("CcHUB").value = ""
   }