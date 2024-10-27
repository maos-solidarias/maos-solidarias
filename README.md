# Projeto Mãos Solidárias - ReCode

## Descrição

O **Projeto Mãos Solidárias** é uma aplicação web criada como parte de um hackathon promovido pelo programa ReCode, com o objetivo de desenvolver soluções inovadoras para enfrentar os desafios causados pelas enchentes no Rio Grande do Sul. Esta plataforma busca conectar a comunidade a ONGs e outras organizações, promovendo o engajamento em ações de solidariedade e assistência direta para quem mais precisa.

---

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

- `assets/`: Diretório para armazenar arquivos estáticos, como imagens, ícones, entre outros recursos visuais.
- `formulario.html`: Página HTML dedicada ao formulário de contato.
- `index.html`: Página principal da aplicação.
- `README.md`: Arquivo de documentação do projeto.
- `src/`: Diretório contendo arquivos de estilo e scripts JavaScript.
  - `form.css`: Arquivo CSS para estilização da página de formulário.
  - `formulario.js`: JavaScript para manipulação e validação do formulário de contato.
  - `main.js`: JavaScript principal para funcionalidades gerais da aplicação.
  - `styles.css`: Arquivo CSS para estilização geral da aplicação.

---

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

---

## Como Executar o Projeto

1. Clone o repositório para seu ambiente local:
   ```bash
   git clone https://github.com/maos-solidarias/maos-solidarias
   ```
2. Navegue até o diretório do projeto:

- `cd maos-solidarias`

3. Abra o arquivo `index.html` no seu navegador para visualizar o projeto.

## Fluxo do Usuário

### Página Inicial (`index.html`)

- A página principal contém um menu de navegação que pode ser aberto e fechado através de um botão.
- Os elementos da página utilizam a biblioteca **ScrollReveal** para revelar conteúdos conforme o usuário rola pela página.
- A biblioteca **Swiper** é utilizada para criar um carrossel de imagens com as principais ONGs e iniciativas.
- O usuário pode clicar em cartões de blog para acessar mais informações sobre cada ONG.

### Interação com Cartões de ONGS

- Na página inicial, ao clicar em um cartão de ong, o usuário é redirecionado para a página `formulario.html`.
- O nome da ONG selecionada é passado como parâmetro na URL, permitindo que a página de formulário exiba informações específicas daquela ONG.

### Página de Formulário (`formulario.html`)

- A página exibe um formulário para o usuário inserir nome, e-mail e telefone.
- Uma lista de prioridades da ONG selecionada é exibida, e o usuário pode marcar uma ou mais opções conforme sua preferência.
- Caso o usuário não selecione nenhuma prioridade, um alerta será exibido, pedindo que selecione pelo menos uma.
- Após o envio bem-sucedido do formulário, o usuário recebe uma mensagem de agradecimento.
- O nome da ONG selecionada é passado como parâmetro na URL e exibido no topo do formulário.
- O formulário é estilizado utilizando o arquivo form.css.
- A página utiliza a biblioteca Remix Icon para ícones e a biblioteca Swiper para carrosséis.
- O script formulario.js é responsável por manipular a lógica do formulário, incluindo a validação e o envio dos dados.

---

## Contato

Para mais informações sobre o projeto, você pode entrar em contato com a equipe de desenvolvimento:

- **[DavidBen48](https://github.com/DavidBen48)**
- **[fabiosoares-silva](https://github.com/fabiosoares-silva)**
- **[Cysne](https://github.com/Cysne)**
