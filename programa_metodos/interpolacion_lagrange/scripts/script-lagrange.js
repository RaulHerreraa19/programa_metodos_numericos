document.addEventListener("DOMContentLoaded", () => {
        let parrafo = document.getElementById('parrafovalor');
        let x = document.getElementById("x");
        let y = document.getElementById("y");
        let x0 = document.getElementById("x0");
        let y0 = document.getElementById("y0");
        let x1 = document.getElementById("x1");
        let y1 = document.getElementById("y1");
        let btnLimpiar = document.getElementById("btnLimpiar")
        let encontrarx = document.getElementById("x2");
        let encontrary = document.getElementById("y2");
    let selector = document.getElementById("selectVariable");

    selector.addEventListener("change", () => {  
        console.log(selector.value);        
        if (selector.value == "2") {
        encontrarx.disabled = false;
        encontrary.disabled = true;
        x.disabled = false;
        y.disabled = true;
        parrafo.textContent = "Inserta el Valor de x"
        
        } else if (selector.value == "1") {
        encontrarx.disabled = true;
        encontrary.disabled = false;
        x.disabled = true;
        y.disabled = false;
        parrafo.textContent = "Inserta el Valor de y"
        }
        else {
        encontrarx.disabled = true;
        encontrary.disabled = true;
        x.disabled = true;
        y.disabled = true;
        }
    });
    function calcularY(){
        let result = ((x-x1)*(x0-encontrarx)/(x0-x1)*(x0-encontrarx)*(y0)+(x));
        //encontrarY = result
    }

    function limpiar(e){        
        selector.value = "0";
        x0 = "";
        y0 = "";
        x1 = "";
        y1 = "";
    }

    btnLimpiar.addEventListener("click", function(e){ 
        e.preventDefault();
        console.log("clin")
        limpiar();
    });
});