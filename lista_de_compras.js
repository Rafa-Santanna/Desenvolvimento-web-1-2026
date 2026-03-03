let item1a = "leite", item2a = "carne", item3a = "arroz", item4a = "ovos", item5a = "batata"
let item1b = 10, item2b = 39.99, item3b = 19.99, item4b = 25, item5b = 9.99
let somatotal = 0, desconto = 5, valorcomdesconto = 0, dinheiro = 200

console.log("===ESCOLHA UMA OPÇÃO===\n1-Listar\n2-Somar\n3-Desconto\n ")
let opcao= 3


switch(opcao){
    case 1:
        console.log("=== LISTA DE COMPRAS ===")
        console.log(`Lista de compras: \n${item1a} - ${item1b}\n${item2a} -${item2b}\n${item3a} - ${item3b}\n${item4a} - ${item4b}\n${item5a} - ${item5b}  `)
        break


    case 2:
    somatotal = item1b + item2b + item3b + item4b + item5b
    console.log("=== SOMA TOTAL ===")
        console.log(`Total: ${somatotal}`)
        break


    case 3:
    somatotal = item1b + item2b + item3b + item4b + item5b
    if (somatotal > dinheiro) {
    console.log("Orçamento insuficiente\nCalculndo desconto...\n")

    valorcomdesconto = somatotal - (somatotal * 0.05)
    console.log(`valor final: ${valorcomdesconto.toFixed(2)}\n`)

    if (valorcomdesconto > dinheiro) {
        console.log("Não é possivel efetuar o pagamento")
    } else {
        console.log("É possível efetuar o pagamento em dinheiro")
    }
} else {
    console.log("É possível efetuar o pagamento em qualquer tipo de transação")

}
break
    
  default:
        console.log("Opção inválida")


        
}





