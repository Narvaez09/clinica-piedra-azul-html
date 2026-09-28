// Esperamos a que cargue completamente la página
document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formRegistro");

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const documento = document.getElementById("documento");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const fechaNacimiento = document.getElementById("fechaNacimiento");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const terminos = document.getElementById("terminos");


    // ==========================================
    // FUNCIONES DE VALIDACIÓN
    // ==========================================

    function validarNombre() {

        if (nombre.value.trim() === "") {

            document.getElementById("errorNombre").textContent =
                "El nombre es obligatorio.";

            nombre.classList.add("is-invalid");

            return false;

        } else {

            document.getElementById("errorNombre").textContent = "";

            nombre.classList.remove("is-invalid");
            nombre.classList.add("is-valid");

            return true;
        }
    }


    function validarApellido() {

        if (apellido.value.trim() === "") {

            document.getElementById("errorApellido").textContent =
                "Los apellidos son obligatorios.";

            apellido.classList.add("is-invalid");

            return false;

        } else {

            document.getElementById("errorApellido").textContent = "";

            apellido.classList.remove("is-invalid");
            apellido.classList.add("is-valid");

            return true;
        }
    }


    function validarDocumento() {

        if (documento.value.trim() === "") {

            document.getElementById("errorDocumento").textContent =
                "El documento es obligatorio.";

            documento.classList.add("is-invalid");

            return false;
        }

        if (!/^[0-9]+$/.test(documento.value.trim())) {

            document.getElementById("errorDocumento").textContent =
                "El documento debe contener solamente números.";

            documento.classList.add("is-invalid");

            return false;
        }

        document.getElementById("errorDocumento").textContent = "";

        documento.classList.remove("is-invalid");
        documento.classList.add("is-valid");

        return true;
    }


    function validarEmail() {

        const patronEmail =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value.trim() === "") {

            document.getElementById("errorEmail").textContent =
                "El correo electrónico es obligatorio.";

            email.classList.add("is-invalid");

            return false;
        }

        if (!patronEmail.test(email.value.trim())) {

            document.getElementById("errorEmail").textContent =
                "Ingrese un correo electrónico válido.";

            email.classList.add("is-invalid");

            return false;
        }

        document.getElementById("errorEmail").textContent = "";

        email.classList.remove("is-invalid");
        email.classList.add("is-valid");

        return true;
    }


    function validarTelefono() {

        if (telefono.value.trim() === "") {

            document.getElementById("errorTelefono").textContent =
                "El teléfono es obligatorio.";

            telefono.classList.add("is-invalid");

            return false;
        }

        if (!/^[0-9]+$/.test(telefono.value.trim())) {

            document.getElementById("errorTelefono").textContent =
                "El teléfono debe contener solamente números.";

            telefono.classList.add("is-invalid");

            return false;
        }

        document.getElementById("errorTelefono").textContent = "";

        telefono.classList.remove("is-invalid");
        telefono.classList.add("is-valid");

        return true;
    }


    function validarFecha() {

        if (fechaNacimiento.value === "") {

            document.getElementById("errorFecha").textContent =
                "La fecha de nacimiento es obligatoria.";

            fechaNacimiento.classList.add("is-invalid");

            return false;
        }

        document.getElementById("errorFecha").textContent = "";

        fechaNacimiento.classList.remove("is-invalid");
        fechaNacimiento.classList.add("is-valid");

        return true;
    }


    function validarPassword() {

        if (password.value === "") {

            document.getElementById("errorPassword").textContent =
                "La contraseña es obligatoria.";

            password.classList.add("is-invalid");

            return false;
        }

        if (password.value.length < 6) {

            document.getElementById("errorPassword").textContent =
                "La contraseña debe tener mínimo 6 caracteres.";

            password.classList.add("is-invalid");

            return false;
        }

        document.getElementById("errorPassword").textContent = "";

        password.classList.remove("is-invalid");
        password.classList.add("is-valid");

        return true;
    }


    function validarConfirmPassword() {

        if (confirmPassword.value === "") {

            document.getElementById("errorConfirmPassword").textContent =
                "Debe confirmar la contraseña.";

            confirmPassword.classList.add("is-invalid");

            return false;
        }

        if (confirmPassword.value !== password.value) {

            document.getElementById("errorConfirmPassword").textContent =
                "Las contraseñas no coinciden.";

            confirmPassword.classList.add("is-invalid");

            return false;
        }

        document.getElementById("errorConfirmPassword").textContent = "";

        confirmPassword.classList.remove("is-invalid");
        confirmPassword.classList.add("is-valid");

        return true;
    }


    function validarTerminos() {

        if (!terminos.checked) {

            terminos.classList.add("is-invalid");

            return false;
        }

        terminos.classList.remove("is-invalid");

        return true;
    }


    // ==========================================
    // VALIDAR AL CAMBIAR EL FOCO
    // ==========================================

    nombre.addEventListener("blur", validarNombre);

    apellido.addEventListener("blur", validarApellido);

    documento.addEventListener("blur", validarDocumento);

    email.addEventListener("blur", validarEmail);

    telefono.addEventListener("blur", validarTelefono);

    fechaNacimiento.addEventListener("blur", validarFecha);

    password.addEventListener("blur", validarPassword);

    confirmPassword.addEventListener("blur", validarConfirmPassword);


    // Si cambia la contraseña, volvemos a comprobar
    // que las contraseñas coincidan

    password.addEventListener("input", function () {

        if (confirmPassword.value !== "") {
            validarConfirmPassword();
        }

    });


    // ==========================================
    // VALIDAR AL PRESIONAR REGISTRAR
    // ==========================================

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const nombreValido = validarNombre();
        const apellidoValido = validarApellido();
        const documentoValido = validarDocumento();
        const emailValido = validarEmail();
        const telefonoValido = validarTelefono();
        const fechaValida = validarFecha();
        const passwordValida = validarPassword();
        const confirmPasswordValida = validarConfirmPassword();
        const terminosValidos = validarTerminos();


        if (
            nombreValido &&
            apellidoValido &&
            documentoValido &&
            emailValido &&
            telefonoValido &&
            fechaValida &&
            passwordValida &&
            confirmPasswordValida &&
            terminosValidos
        ) {

            alert("¡Registro realizado correctamente!");

            formulario.reset();

            // Quitamos los estilos de validación
            const campos = formulario.querySelectorAll(".is-valid");

            campos.forEach(function (campo) {
                campo.classList.remove("is-valid");
            });

        } else {

            alert("Por favor, complete correctamente todos los campos.");

        }

    });

});