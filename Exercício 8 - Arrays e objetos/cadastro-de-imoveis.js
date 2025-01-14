const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem-vindo ao Cadastro de Imóveis.\nTotal de imóveis: " + imoveis.length +
    "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const imovel = {};

      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:");
      imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"));
      imovel.banheiros = parseFloat(prompt("Quantos banheiros possui o imóvel?"));
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)");

      const confirma = confirm(
        "Salvar este imóvel?\n" +
        "\nProprietário: " + imovel.proprietario +
        "\nQuartos: " + imovel.quartos +
        "\nBanheiros: " + imovel.banheiros +
        "\nPossui Garagem? " + imovel.garagem
      );

      if (confirma) {
        imoveis.push(imovel);
      }
      break;

    case "2":
      if (imoveis.length === 0) {
        alert("Nenhum imóvel cadastrado.");
      } else {
        imoveis.forEach((imovel, index) => {
          alert(
            "Imóvel " + (index + 1) +
            "\nProprietário: " + imovel.proprietario +
            "\nQuartos: " + imovel.quartos +
            "\nBanheiros: " + imovel.banheiros +
            "\nPossui Garagem? " + imovel.garagem
          );
        });
      }
      break;

    case "3":
      alert("Saindo...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao !== "3");
