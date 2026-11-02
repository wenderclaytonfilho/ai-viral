# Vídeos Virais com IA — página de vendas atualizada

Landing page responsiva de vendas do kit **Codex + ElevenLabs** por **R$ 15**. Não exige backend, banco de dados nem build.

## Novidades desta versão

- Tutorial enviado pelo criador incorporado em destaque na página, com reprodução completa, som, controles e pôster.
- Botões de compra direcionam para a **Cakto**: https://pay.cakto.com.br/9tc9359_1272586.
- Também continuam disponíveis quatro trechos de vídeos como demonstração.
- A navegação possui atalho para o tutorial e funciona em celular.

## Testar localmente

Extraia o ZIP e abra a pasta `site_virais_ia`. Rode no terminal:

```bash
python -m http.server 8080
```

Depois, abra http://localhost:8080. O site possui links de checkout que funcionam mesmo com JavaScript desativado.

## Hospedar gratuitamente

**Cloudflare Pages:** acesse https://dash.cloudflare.com/ e, em Workers & Pages, crie um projeto Pages para arquivos estáticos. Faça upload do conteúdo da pasta (ou conecte seu repositório no GitHub). Não precisa configurar comando de build.

**Netlify:** também é possível arrastar a pasta do site para https://app.netlify.com/drop.

Obs.: confirme os limites e condições atuais de uso comercial de cada serviço.

## Checkout, entrega e segurança

- Os links do checkout já estão no HTML e em `config.js`.
- **Antes de divulgar**, confirme que o checkout Cakto está ativo, com valor correto e o produto configurado para entrega dos dois PDFs após pagamento. Faça uma compra de teste.
- Não coloque os e-books pagos na pasta pública do site: os PDFs precisam ficar protegidos pela solução de entrega da Cakto.
- Alterações futuras no checkout: procure pela URL no `index.html` e no `config.js` e substitua em ambos para manter a página funcionando mesmo sem JS.

## Arquivos

- `index.html`: página principal e botões de compra
- `styles.css`: visual e responsividade
- `script.js`: menu mobile, vídeos de demonstração, sincronização do checkout
- `config.js`: URL do checkout
- `media/tutorial-como-criar-videos-com-ia.mp4`: tutorial completo fornecido (≈84 s)
- `media/`: os quatro trechos de demonstração
- `assets/poster-tutorial.jpg`: capa do vídeo tutorial
- `assets/`: capa do e-book e imagens dos exemplos

O site não armazena dados de pagamento e não garante visualizações ou resultados financeiros. A transação e a entrega de produto digital são de responsabilidade da plataforma de checkout e da configuração da oferta.
