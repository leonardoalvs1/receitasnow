# 🍲 Receitas NOW! 🚀

Um aplicativo mobile simples construído com React Native e Expo que busca e exibe receitas aleatórias da API [TheMealDB](https://www.themealdb.com/api.php). Perfeito para quem precisa de inspiração rápida na cozinha!

## ✨ Funcionalidades

* **Gerar Receitas Aleatórias:** Descubra novas receitas com um simples toque de botão.
* **Detalhes da Receita:** Visualize o nome, imagem, lista de ingredientes e instruções detalhadas de cada prato.
* **Design Responsivo:** Layout adaptado para diferentes tamanhos de tela.
* **Indicador de Carregamento:** Saiba quando o aplicativo está buscando novas receitas.

## 🛠️ Tecnologias Utilizadas

* **[React Native](https://reactnative.dev/)**: Framework para construção de aplicativos móveis nativos usando React.
* **[Expo](https://expo.dev/)**: Ferramenta e plataforma que agiliza o desenvolvimento, teste e build de aplicativos React Native.
* **[TheMealDB API](https://www.themealdb.com/api.php)**: API gratuita e aberta para dados de refeições e receitas.
* **JavaScript**: Linguagem de programação principal.

## 🚀 Como Rodar o Projeto

Siga estas instruções para configurar e executar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/download/) e o [npm](https://www.npmjs.com/get-npm) (ou [Yarn](https://yarnpkg.com/)) instalados em sua máquina.
É recomendado ter o [Expo Go](https://expo.dev/client) instalado em seu smartphone (Android ou iOS) para testes rápidos, ou um emulador/simulador configurado.

### Instalação

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/leonardoalvs1/receitasnow.git](https://github.com/leonardoalvs1/receitasnow.git)
    cd receitasnow # Navegue para a pasta do projeto
    ```

2.  **Instale as dependências do projeto:**
    ```bash
    npm install
    # ou se preferir usar yarn
    # yarn install
    ```

3.  **Limpe o cache do Expo e inicie o projeto:**
    Para garantir que não há problemas de cache (comuns em React Native/Expo), use o comando de inicialização com a opção `--clear`:

    ```bash
    npx expo start --clear
    # ou se preferir yarn
    # yarn start --clear
    ```

    * Este comando iniciará o servidor de desenvolvimento do Expo.
    * Um QR code será exibido no terminal.

### Executando o Aplicativo

* **No seu Smartphone (com Expo Go):**
    * Abra o aplicativo **Expo Go** no seu smartphone.
    * Escaneie o QR code exibido no seu terminal.
    * O aplicativo deverá carregar em seu dispositivo.

* **Em um Emulador/Simulador:**
    * No terminal onde o `npx expo start --clear` está rodando, pressione `a` para abrir no emulador Android ou `i` para abrir no simulador iOS (macOS apenas).

## 📂 Estrutura do Projeto

receitasnow/
├── .expo/                   # Cache do Expo
├── node_modules/            # Dependências do projeto
├── src/
│   ├── components/
│   │   ├── Form/            # Ex: para futuros inputs de busca
│   │   ├── ResultRECEITASNEW/ # Componente que exibe os detalhes da receita
│   │   │   ├── index.js
│   │   │   └── style.js
│   │   └── Title/           # Componente para o título da aplicação
│   │       ├── index.js
│   │       └── style.js
├── App.js                   # Componente principal da aplicação
├── app.json                 # Configurações do Expo
├── index.js                 # Ponto de entrada do React Native
├── package-lock.json        # Registro de dependências (gerado pelo npm)
├── package.json             # Metadados do projeto e scripts
└── README.md                # Este arquivo!


## 🤝 Contribuição

Sinta-se à vontade para abrir issues, sugerir melhorias ou enviar pull requests. Toda contribuição é bem-vinda!

## 📝 Licença

Este projeto está licenciado sob a Licença MIT.

---