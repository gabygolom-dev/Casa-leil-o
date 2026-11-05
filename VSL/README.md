# VSL — Casa & Leilão

Landing page estática e responsiva, sem dependências ou etapa de build.

## Desenvolvimento

Dentro de `VSL`, execute `python3 -m http.server 8000` e acesse o servidor local no navegador.
Para hospedagem estática, publique o conteúdo desta pasta, com `index.html` na raiz.

## Vídeo

Player TrackPlay incorporado diretamente na página, com wrapper responsivo 16:9 e imagem de capa. As classes, URLs e script assíncrono correspondem ao código fornecido pelo usuário. Preconnect, DNS prefetch e preload ficam no `head`.

O TrackPlay gerencia a reprodução, controles e comportamento móvel. Não há mais iframe do Google Drive nem vídeo nativo/aviso de pausa paralelo; qualquer aviso de pausa deve ser configurado no TrackPlay ou integrado por uma API documentada do provedor.

## WhatsApp

O botão abre diretamente `5511947947742`, com uma mensagem preenchida. Não há formulário ou redirecionamento com contagem regressiva, conforme o briefing final.

## Identidade

Paleta off-white e dourado inspirada na imagem enviada. O símbolo foi recriado em SVG inline a partir da referência enviada, com telhado, martelo inclinado e base. Aparece acima do nome da marca, sem depender de arquivo de imagem externo.

## Validação realizada

JavaScript e diff verificados. Layout verificado em Chromium nas larguras 1440 e 390 px, sem rolagem horizontal. Incorporação TrackPlay e link do WhatsApp verificados. A validação de reprodução real depende do acesso aos serviços externos do TrackPlay.

## GitHub Pages

O workflow `.github/workflows/pages.yml` publica o conteúdo de `VSL` na raiz do site, sem build.
No GitHub, acesse **Settings → Pages → Build and deployment → Source → GitHub Actions**.
Após enviar os arquivos à branch `main`, acompanhe **Actions → Publicar VSL no GitHub Pages**. Se a configuração do Pages for feita depois do envio, use **Run workflow**.
O link efetivo aparece no resultado do deploy e em Settings → Pages. Não considere o site publicado antes de o workflow concluir.
