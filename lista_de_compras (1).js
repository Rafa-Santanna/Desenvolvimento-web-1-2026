let item1a = "leite", item2a = "carne", item3a = "arroz", item4a = "ovos", item5a = "batata"
let item1b = 10, item2b = 39.99, item3b = 19.99, item4b = 25, item5b = 9.99
let somatotal = 0, desconto = 5, valorcomdesconto = 0, dinheiro = 200

somatotal = item1b + item2b + item3b + item4b + item5b
console.log(`lista de compras: \n${item1a} - ${item1b}\n${item2a} - ${item2b}\n${item3a} - ${item3b}\n${item4a} - ${item4b}\n${item5a} - ${item5b}\n\nsoma total: ${somatotal}\norçamento: ${dinheiro}\ndesconto com pagamento em dinheiro: ${desconto}%\n`)
if (somatotal > dinheiro) {
    console.log("orçamento insuficiente\nCalculndo desconto...\n")
    valorcomdesconto = somatotal - (somatotal * 0.05)
    console.log(`valor final: ${valorcomdesconto.toFixed(2)}\n`)
    if (valorcomdesconto > dinheiro) {
        console.log("não é possivel efetuar o pagamento")
    } else {
        console.log("é possível efetuar o pagamento em dinheiro")
    }
} else {
    console.log("é possível efetuar o pagamento em qualquer tipo de transação")
}


