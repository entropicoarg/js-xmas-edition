function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );
  
    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
  
    console.assert(
        validarNombre("1231234") === "el nombre solo acepta letras", 
        "validar nombre no valido que el nombre sea solo con letras"
    );
  }
  
  probarValidarNombre();
  
  
  function probarValidadCiudad(){
  
      console.assert(validarCiudad("Buenos Aires") === "",
       "Este campo debe tener al menos 1 caracter"
      );
      console.assert(validarCiudad("") ==="Este campo debe tener al menos 1 caracter",
      'Validar nombre no validó que el nombre no sea vacío'
      );
  }
  probarValidadCiudad();
  
  function probarValidarDescripcionRegalo(){
      console.assert(validarDescripcionRegalo("") === "este campo debe tener al menos 1 caracter",
      "no se valido que la descripcion no sea vacia"    
      );
      console.assert(validarDescripcionRegalo("descripcionfdgdfjghnjdfgfdñgnñflgjlfdjgklfdjgfdjgñldfñlgdfslkgdsfñlgñdsfkgsñdljsdfjñgsdlfghdfghfdghjfdhgjjhgdsfjhgñfdslkgñldsjgdlkjgñlsdkfjsdj") ==="este campo debe tener menos de 100 caracteres", "no se valido que el campo sea muy largo")
  
      console.assert(validarDescripcionRegalo("regalo") === "", "la funcion probar funciona mal")
  
      console.assert(validarDescripcionRegalo(".,,..,") === "la descripcion del regalo solo acepta letras o numeros",
      "la funcion validardescripcionregalos no valido bien"
      );
  } 
  
  probarValidarDescripcionRegalo();


