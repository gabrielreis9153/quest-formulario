document.getElementById('formulario').addEventListener('submit', function(e) { e.preventDefault();

    const campos = document.querySelectorAll('.campo');

    campos.forEach((divCampo) => {
        const input = divCampo.querySelector("input");
        const erro = divCampo.querySelector("small");

        if(input.value.trim() === "") {
            input.classList.remove("verde");
            input.classList.add("vermelho");
            erro.textContent = "Campo obrigatório";
            erro.style.display = "block";
        } else {
            input.classList.remove("vermelho");
            input.classList.add("verde");
            erro.textContent = "";
            erro.style.display = "none";
                }   
            });
        });