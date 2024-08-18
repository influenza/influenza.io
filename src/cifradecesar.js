
export function cifracesar(palavra){


    const cifra = {"A": "k","B": "l","C": "M","D": "N","E": "O","F": "P","G": "Q","H": "R","I": "S","J": "T","K": "U","L": "V","M": "W","N": "X","O": "Y","P": "Z","Q": "A","R": "B","S": "C","T": "D","U": "E","V": "F","W": "G","X": "H","Y": "I","Z": "J",   "1": "a","2": "b","3": "c","4": "d","5": "e","6": "f","7": "g","8": "h","9": "i","0": "j","@":"k",".":"l"}
      let letras = palavra.toUpperCase().split("")
      let cesar =[]
      for(let x of letras){
        cesar.push(cifra[x])
      }
      return cesar.join("")

}
