import { useState, type FormEvent, type ChangeEvent } from "react";

export default function Home() {
  const [texto, setTexto] = useState("");
  const [resultado, setResultado] = useState("");

  // Função que limpa e normaliza o texto
  function limparTexto(valor: string) {
    return valor
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")   // remove acentos
      .replace(/[^a-z0-9\s]/gi, "");     // remove símbolos e traços
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const valorLimpo = limparTexto(e.target.value);
    setTexto(valorLimpo);
  }

  // Verifica se é palíndromo
  function verificaPalindromo(str: string) {
    const semEspacos = str.replace(/\s+/g, "");
    const invertido = semEspacos.split("").reverse().join("");
    return semEspacos === invertido;
  }

  function minhaFuncao(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (texto.trim() === "") {
      setResultado("Digite alguma coisa! 😅");
      return;
    }

    const ehPalindromo = verificaPalindromo(texto);

    setResultado(
      ehPalindromo
        ? "É UM PALÍNDROMO! 🎉"
        : "Não é um palíndromo 😔"
    );
  }

  return (
    <>
      <form onSubmit={minhaFuncao} className="w-full">
        <div className="grid grid-cols-3 gap-4 p-4 pb-0">

          {/* COLUNA 1 */}
          <div className="col-span-2 flex flex-col gap-3 justify-center h-full">

            <label htmlFor="palavra">
              Escreva uma palavra ou texto
            </label>

            <input
              type="text"
              placeholder="Insira palavra ou frase"
              name="palavra"
              className="border-2 rounded p-2"
              onChange={handleChange}
            />

            {resultado && (
              <div className="mx-auto hubballi-regular text-2xl">
                {resultado}
              </div>
            )}

            <button
              className="rounded border hover:bg-gray-300 w-1/2 py-2 mx-auto flex justify-center hubballi-regular text-2xl"
              type="submit"
            >
              Enviar
            </button>
          </div>

          {/* COLUNA 2 */}
          <div className="col-span-1 flex items-end">
            <img
              src="./public/mendoin.svg"
              alt="Mascote"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </form>
    </>
  );
}
