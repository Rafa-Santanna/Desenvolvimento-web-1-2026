let item1a = "Caderno", item2a ="Lápis", item3a = "Borracha", item4a = "kit canetas", item5a = "Corretivo", item6a="Pen-drive", item7a="Bloco de notas", item8a="Grampeador", item9a="Régua", item10a="Calculadora científica", item11a="Apontador", item12a="Tesoura"
let item1b = 35.00, item2b = 2.00, item3b = 4.00, item4b = 17.00, item5b = 8.00, item6b = 30.00, item7b = 10.00, item8b = 13.00, item9b = 3.00, item10b = 70.00 ,item11b = 4.00, item12b = 6.00
let somatotal = 0, desconto = 5, valorcomdesconto = 0, dinheiro = 191.90
//191.90

console.log("===ESCOLHA UMA OPÇÃO===\n1-Listar\n2-Somar\n3-Desconto\n ")
let opcao= 3

switch(opcao){
    case 1:
        console.log("=== LISTA DE MATERIAL ESCOLAR ===")
        console.log(`Lista dos materiais recomendados:
${item1a} - ${item1b}
${item2a} - ${item2b}
${item3a} - ${item3b}
${item4a} - ${item4b}
${item5a} - ${item5b}
${item6a} - ${item6b}
${item7a} - ${item7b}
${item8a} - ${item8b}
${item9a} - ${item9b}
${item10a} - ${item10b}
${item11a} - ${item11b}
${item12a} - ${item12b}`)
        break

    case 2:
        somatotal = item1b + item2b + item3b + item4b + item5b + item6b + item7b + item8b + item9b + item10b + item11b + item12b
        console.log("=== SOMA TOTAL ===")
        console.log(`Total: ${somatotal}`)
        break

    case 3:
        case 3:
            somatotal = item1b + item2b + item3b + item4b + item5b + item6b + item7b + item8b + item9b + item10b + item11b + item12b
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
