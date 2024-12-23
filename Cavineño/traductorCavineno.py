# Diccionario de Traducción
diccionario = {
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",

}

import string

def limpiar_frase(frase):
    return frase.translate(str.maketrans('', '', string.punctuation))

def traducir(frase):
    frase = limpiar_frase(frase.lower())  # Limpia puntuación y pasa a minúsculas
    if frase in diccionario:
        return diccionario[frase]

    palabras = frase.split()
    traduccion = [diccionario.get(palabra, palabra) for palabra in palabras]
    return " ".join(traduccion)
def traducir(frase):
    frase = limpiar_frase(frase.lower())
    palabras = frase.split()
    traduccion = []
    for palabra in palabras:
        traduccion.append(diccionario.get(palabra, f"[{palabra}]"))  # Marca palabras no traducidas
    return " ".join(traduccion)


# Función para traducir frases
def traducir(frase):
    frase = frase.lower()
    # Verificar primero si la frase completa está en el diccionario
    if frase in diccionario:
        return diccionario[frase]
    
    palabras = frase.split()  # Divide en palabras
    traduccion = []
    for palabra in palabras:
        traduccion.append(diccionario.get(palabra, palabra))  # Traduce palabra o deja igual
    return " ".join(traduccion)


# Interacción con el usuario
if __name__ == "__main__":
    print("Bienvenido al traductor JIF de español a idioma originario Cavineño.")
    print("Escribe 'salir' para terminar.\n")
    while True:
        entrada = input("Escribe una frase en español: ")
        if entrada.lower() == "salir":
            print("¡Gracias por usar el traductor JIF! Hasta luego.")
            break
        print("Traducción:", traducir(entrada))
