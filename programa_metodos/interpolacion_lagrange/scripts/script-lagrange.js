document.addEventListener("DOMContentLoaded", () => {
        let parrafo = document.getElementById('parrafovalor');
        let x = document.getElementById("x");
        let y = document.getElementById("y");
        let x0 = document.getElementById("x0");
        let y0 = document.getElementById("y0");
        let x1 = document.getElementById("x1");
        let y1 = document.getElementById("y1");
        let x2 = document.getElementById("x2");
        let y2 = document.getElementById("y2");
        let btnLimpiar = document.getElementById("btnLimpiar");
        let btnCalcular = document.getElementById("btnCalcular");
    let selector = document.getElementById("selectVariable");

    selector.addEventListener("change", () => {  
        console.log(selector.value);        
        if (selector.value == "1") {
        x.disabled = true;
        y.disabled = false;
        parrafo.style.display = "block"
        parrafo.textContent = "Inserta el Valor de x"
        y2.textContent = "";
        
        } else if (selector.value == "2") {
        x.disabled = false;
        y.disabled = true;
        parrafo.style.display = "block"
        parrafo.textContent = "Inserta el Valor de y"
        x2.textContent = "";
        }
        else {
        x.disabled = true; 
        y.disabled = true;
        parrafo.style.display = "none";
        }
    });
    function calcularY(){
        x.value = parseFloat(x.value);
        x0.value = parseFloat(x0.value);
        x1.value = parseFloat(x1.value);
        x2.value = parseFloat(x2.value);
        y0.value = parseFloat(y0.value);
        y1.value = parseFloat(y1.value);
        y2.value = parseFloat(y2.value);
        result = ((x-x1)*(x-x2)/(x0-x1)*(x0-x2)*y0)+((x-x0)*(x-x2)/(x1-x0)*(x1-x2)*y1)+((x-x0)*(x-x1)/(x2-x0)*(x2-x1)*y2);

        console.log(result);
}
//encontrarY = result

    function limpiar(){        
        selector.value = "0";
        x0.value = "";
        y0.value = "";
        x1.value = "";
        y1.value = "";
        x2.value = "";
        y2.value = "";
    }

    btnLimpiar.addEventListener("click", function(e){ 
        e.preventDefault();
        console.log("click")
        limpiar();
    });

    btnCalcular.addEventListener("click", function(e){
        e.preventDefault();
        calcularY();
    })
});