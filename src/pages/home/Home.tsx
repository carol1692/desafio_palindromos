import { useState, type FormEvent} from "react"

function Home() {

	const [texto, setTexto] = useState("")
	const [resultado, setResultado] = useState("")

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const valor = e.target.value.toLocaleLowerCase();
		setTexto(valor.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")  // remove acentos
		.replace(/-/g, "")                // remove traços
		.replace(/[^a-zA-Z0-9\s]/g, ""));
	}

  	function minhaFuncao(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
			setResultado("")
				console.log('primeira')
				console.log(texto.replace(/\s+/g, ""))
				console.log('ultima')
				const invertido = texto.split("").reverse().join("");
				console.log(invertido.replace(/\s+/g, ""))
		if( texto.replace(/\s+/g, "") === invertido.replace(/\s+/g, "")){
			setResultado("É UM PALINDROMO YAY")
		}	
		else{
			setResultado("FUEN FUEN FUEN NÃO É UM PALINDROMO")
		}	
  	}
   
  return (
    <>
		{/* FORM */}
		<form onSubmit={minhaFuncao} className="w-full">
   		<div className="grid grid-cols-3 gap-4 p-4 pb-0">

        				{/* COLUNA 1 — ocupa 2/3 */}
						<div className="col-span-2 flex flex-col gap-2 justify-center h-full">
						
							<label htmlFor="palavra" className="text-white">
								Escreva uma palavra ou texto
							</label>

							<input
								type="text"
								placeholder="Insira palavra ou frase"
								name="palavra"
								className="border-2 rounded p-2"
								onChange={handleChange}
							/>

							<div className="mx-auto hubballi-regular text-2xl">
								{resultado}
							</div>
							
							<button
								className="rounded border hover:bg-gray-300 
											w-1/2 py-2 mx-auto flex justify-center hubballi-regular text-2xl"
								type="submit"
							>
								Enviar
							</button>
						</div>


						{/* COLUNA 2 — ocupa 1/3 */}
						<div className="col-span-1 flex flex-col gap-2 justify-end">
							{/* Aqui você coloca o que quiser */}
							<img src="./public/mendoin.svg" alt="" className="w-full h-auto object-contain" />
						</div>
					</div>

					
				</form>
		

	</>
    
 
    

  )
}

export default Home