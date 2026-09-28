function mostrarEspecialidad(especialidad) {

    const descripcion = document.getElementById("descripcionEspecialidad");

    const especialidades = {

        "Terapia Neural":
            "La Terapia Neural utiliza estímulos en puntos específicos del cuerpo con el objetivo de favorecer el equilibrio del sistema nervioso.",

        "Quiropraxia":
            "La Quiropraxia se enfoca en el sistema musculoesquelético, especialmente en la columna vertebral, buscando mejorar la movilidad y el bienestar.",

        "Fisioterapia":
            "La Fisioterapia ayuda a prevenir, tratar y recuperar alteraciones del movimiento mediante diferentes técnicas terapéuticas.",

        "Nutrición y Dietética Terapéutica":
            "La Nutrición y Dietética Terapéutica busca mejorar la alimentación y apoyar el tratamiento y prevención de diferentes condiciones mediante hábitos saludables.",

        "Acupuntura":
            "La Acupuntura utiliza técnicas de estimulación de puntos específicos del cuerpo como parte de un enfoque terapéutico integral.",

        "Medicina Integrativa":
            "La Medicina Integrativa combina diferentes enfoques de atención para promover el bienestar general del paciente.",

        "Rehabilitación Física":
            "La Rehabilitación Física busca ayudar a las personas a recuperar movilidad, funcionalidad y calidad de vida."
    };

    if (especialidades[especialidad]) {

        descripcion.textContent = especialidades[especialidad];

    }

}