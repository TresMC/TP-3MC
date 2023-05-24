  // Validacion formulario
  const nombre = document.getElementById("name")
  const email = document.getElementById("email")
  const tel = document.getElementById("Telefono")
  const form = document.getElementById("form")
  const parrafo = document.getElementById("warnings")
  
  form.addEventListener("submit", e=>{
	  e.preventDefault()
	  let warnings = ""
	  let entrar = false
	  // para la validacion completa del email
	  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
	  parrafo.innerHTML = ""
	  if(nombre.value.length <6){
		  warnings += `Nombre no válido <br>`
		  entrar = true
	  }
	  if(!regexEmail.test(email.value)){
		  warnings += `E-mail no válido <br>`
		  entrar = true
	  }
	  if(tel.value.length < 10){
		  warnings += `Cotacto no válido <br>`
		  entrar = true
	  }
  
	  if(entrar){
		  parrafo.innerHTML = warnings
	  }else{
		  parrafo.innerHTML = "Enviado"
	  }
  })

