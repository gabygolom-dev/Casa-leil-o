# VSL — Casa & Leilão

Landing page estática e responsiva, sem dependências ou etapa de build.

## Desenvolvimento

Dentro de `VSL`, execute `python3 -m http.server 8000` e acesse o servidor local no navegador.
Para hospedagem estática, publique o conteúdo desta pasta, com `index.html` na raiz.

## Vídeo

Google Drive incorporado pela URL `/preview`, com suporte a tela cheia.
Arquivo: `1KXicJG07nr_MBdr6cXBKvsUWVIbuuNJe`.
O arquivo deve permitir visualização por qualquer pessoa com o link para que visitantes sem login possam assistir.

O iframe do Drive não expõe uma API pública de eventos de pausa/reprodução. Por isso, o aviso de pausa personalizado não está ativo nessa integração. O código para vídeo nativo continua disponível: `VIDEO_URL` em `app.js` aceita URL direta MP4/WebM e substitui o iframe. Não use um link `/view` ou `/preview` como URL de vídeo nativo.

## WhatsApp

O botão abre diretamente `5511947947742`, com uma mensagem preenchida. Não há formulário ou redirecionamento com contagem regressiva, conforme o briefing final.

## Identidade

Paleta off-white e dourado inspirada na imagem enviada. O símbolo foi recriado em SVG inline a partir da referência enviada, com telhado, martelo inclinado e base. Aparece acima do nome da marca, sem depender de arquivo de imagem externo.

## Validação realizada

JavaScript e diff verificados. Layout verificado em Chromium nas larguras 1440 e 390 px, sem rolagem horizontal. Número do WhatsApp e exibição/fechamento do aviso conferidos com eventos simulados; reprodução real pendente do vídeo.

## GitHub Pages

O workflow `.github/workflows/pages.yml` publica o conteúdo de `VSL` na raiz do site, sem build.
No GitHub, acesse **Settings → Pages → Build and deployment → Source → GitHub Actions**.
Após enviar os arquivos à branch `main`, acompanhe **Actions → Publicar VSL no GitHub Pages**. Se a configuração do Pages for feita depois do envio, use **Run workflow**.
O link efetivo aparece no resultado do deploy e em Settings → Pages. Não considere o site publicado antes de o workflow concluir.
