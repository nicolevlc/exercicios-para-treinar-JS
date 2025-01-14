ADICIONANDO ELEMENTOS 
---

**push**: Adiciona um elemento no final do array e devolve o novo tamanho do array <br>
<code>
    let tamanho = arr.push("Boromir")<br>
    console.log(arr)<br>
    console.log(tamanho)
</code>

**unshift**: Adiciona um elemento no começo do array e devolve o novo tamanho do array <br>
<code>
    tamanho = arr.unshift("Boromir")<br>
    console.log(arr)<br>
    console.log(tamanho)
</code>

REMOVENDO ELEMENTOS
---

**pop**: Remove um elemento no final do array e devolve o elemento removido <br>
<code>
    let elementoRemovido = arr.pop("Boromir") <br>
    console.log(arr)<br>
    console.log(elementoRemovido)
</code>

**shift**: Remove um elemento no começo do array e devolve o elemento removido <br>
<code>
    elementoRemovido = arr.shift("Boromir") <br>
    console.log(arr) <br>
    console.log(elementoRemovido)
</code>

PESQUISANDO POR UM ELEMENTO 
---

**includes**: Verifica se um certo elemento está presente no array<br> 
<code>
    const inclui = arr.includes("Gandalf")<br>
    console.log(inclui)
</code>

**indexOf**: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array <br>
<code>
    const indice = arr.indexOf("Gandalf")<br>
    console.log(indice)
</code>

CORTANDO E CONCATENANDO
---

**slice**: Copia uma parte do array e devolve a parte copiada sem alterar o array original<br>
<code>
    const hobbits = arr.slice(0, 4) <br>
</code>

**Também pode ser usado com números negativos referenciar o final do array**
<code>
    const outros = arr.slice(-4)<br>
    console.log(arr)<br>
    console.log(hobbits)<br>
    console.log(outros)
</code>

**concat**: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)<br>
<code>
    const sociedade = hobbits.concat(outros, "Boromir")<br>
    console.log(sociedade)<br>
    console.log(hobbits)<br>
    console.log(outros)
</code>

SUBSTITUINDO ELEMENTOS
---

**splice**: Permite remover elementos em qualquer posição do array e substituir por novos<br>
<code>
    const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")<br>
    console.log(elementosRemovidos)<br>
    console.log(sociedade)
</code>

ITERANDO OS ELEMENTOS
---

**Usando o for para percorrer cada elemento do array**<br>
<code>
    for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
    }
</code>