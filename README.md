# Guia de Instalação e Execução do Projeto

## Passo 1: Instalar as Dependências
No diretório do projeto, execute o comando abaixo para instalar todas as dependências necessárias:
```bash
npm install
```

## Passo 2: Configurar o IP no Arquivo `.env`
1. Localize o arquivo `.env` na raiz do projeto.
2. Altere o valor da variável `IP` para o IP da sua máquina. Você pode descobrir o IP local executando o comando `ipconfig` (Windows) ou `ifconfig` (Linux/Mac) no terminal.

## Passo 3: Executar o Projeto com Expo
1. Inicie o servidor de desenvolvimento com o comando:
  ```bash
  npm run start
  ```
2. Abra o aplicativo **Expo Go** no seu celular (disponível na App Store ou Google Play).
3. Escaneie o QR Code exibido no terminal ou na interface web do Expo.

Agora o projeto estará rodando no seu dispositivo móvel!
