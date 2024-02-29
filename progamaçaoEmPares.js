class Fornecedor {
    constructor(){
        this.nomes = []
        this.valorTotal = 0
    }

    adicionar(fornecedor,preco) {
        this.nomes.push(fornecedor);
        this.valorTotal += preco;
    }
    
    getTotal(){
        return this.valorTotal;
    }
}
var car = new Fornecedor();
car.adicionar("buffet", 1500)
car.adicionar("som", 500)
console.log(car.getTotal());


