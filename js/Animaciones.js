
let fondo = document.querySelector(".container")
let polvo = document.querySelector(".polvo")
let llanta1 = document.querySelector(".llanta1")
let llanta2 = document.querySelector(".llanta2")
let luz = document.querySelector(".luz")
let animando = false;

fondo.addEventListener("click", movimientos)

function movimientos() {
    let control = true
    while (control) {
        if (!animando) {
            fondo.classList.add("fondo-move")
            llanta1.classList.add("llanta-move")
            llanta2.classList.add("llanta-move")
            polvo.classList.remove("oculto")
            polvo.classList.add("polvo-move")
            luz.classList.add("luz-move")
            luz.classList.remove("ocultoluz")
        }
        else {
            //desactivar las animaciones
            fondo.classList.remove("fondo-move")
            llanta1.classList.remove("llanta-move")
            llanta2.classList.remove("llanta-move")
            polvo.classList.add("oculto")
            polvo.classList.remove("polvo-move")
            luz.classList.remove("luz-move")
            luz.classList.add("ocultoluz")
        }
        animando = !animando;
        control = false;
    }
}
