function microondas(comida, tempo) {
    if (comida =="pipoca") {
        if (tempo > 2 * 10 && 3 * 10) {
            return "Baka a comida queimou"
        }
        else if (tempo < 10) {
            return "Tempo insuficiente"
        }
        else if (tempo > 3 * 10) {
            return "Kabuuum!!"
        }
        else {
            return "Pipoca pronta, Bom apetite"
        }
        
    }
    if (comida == "macarrao") {
        if (tempo > 2 * 8 && 3 * 8) {
            return "Baka a comida queimou"
        }
        else if (tempo < 8) {
            return "Tempo insuficiente"
        }
        else if (tempo > 3 * 8) {
            return "Kabuuum!!"
        }
        else {
            return "Macarrão perfeito, Bom apetite"
        }
    }
    if (comida == "carne") {
        if (tempo > 2 * 15 && 3 * 15) {
            return "Baka a comida queimou"
        }
        else if (tempo < 15) {
            return "Tempo insuficiente"
        }
        else if (tempo > 3 * 15) {
            return "Kabuuum!!"
        }
        else {
            return "Carne ao ponto, Bom apetite"
        }
    }  
    if (comida == "feijao") {
        if (tempo > 2 * 12 && 3 * 12) {
            return "bakayou a comida queimou"
        }
        else if (tempo < 12) {
            return "Tempo insuficiente"
        }
        else if (tempo > 3 * 12) {
            return "Kabuuum!!"
        }
        else {
            return " feijão no tempero, Bom apetite"
        }
    }
    if (comida == "brigadeiro") {
        if (tempo > 2 * 8 && 3 * 8) {
            return "bakayou a comida queimou"
        }
        else if (tempo < 8) {
            return "Tempo insuficiente"
        }
        else if (tempo > 3 * 8) {
            return "Kabuuum!!"
        }
        else {
            return "Brigadeiro no capricho, Bom apetite"
        }
    } 
}
console.log(microondas("carne",8));