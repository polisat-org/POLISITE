# PoliSat

Site estático do PoliSat, pronto para publicação no GitHub Pages. O site apresenta o grupo como projeto de extensão da Escola Politécnica da USP.

## Publicação

1. Crie um repositório público no GitHub e envie os arquivos deste site para a branch `main`.
2. Em **Settings → Pages → Build and deployment**, selecione **GitHub Actions** como fonte.
3. O workflow em `.github/workflows/pages.yml` publica o site a cada atualização da branch `main`. Também é possível iniciá-lo em **Actions → Deploy to GitHub Pages → Run workflow**.

O endereço será `https://<usuario>.github.io/<repositorio>/`. Se o repositório se chamar `<usuario>.github.io`, o endereço será `https://<usuario>.github.io/`.

O artefato de publicação usa uma lista explícita: a rota padrão encaminha ao processo seletivo, `inicio/index.html`, `processo-seletivo/index.html`, `projeto/index.html`, `sistemas/index.html`, `missoes/index.html`, `script.js` e os recursos públicos de `assets/`. Materiais locais, PDFs, variações de logos, documentação e arquivos de contexto não são enviados ao Pages.

## Proteção do repositório

- Ative autenticação de dois fatores na conta GitHub e guarde os códigos de recuperação.
- Em **Settings → Rules → Rulesets**, proteja a branch `main`: bloqueie exclusão e force-push e exija pull request para alterações. Uma regra de aprovação pode exigir outra pessoa para revisar o deploy.
- Em **Settings → Environments → github-pages**, restrinja as implantações à branch `main`.
- Mantenha o token do workflow com permissões mínimas; este deploy usa `contents: read` para montar o site e permissões de Pages apenas na etapa de publicação.

## Limites

Este é um site estático: não recebe nem armazena dados de visitantes e não tem servidor de aplicação, login ou formulário. A política CSP da página restringe scripts à própria origem; os estilos inline existentes exigem a exceção `unsafe-inline` em `style-src`.

GitHub Pages não permite configurar cabeçalhos HTTP arbitrários a partir do repositório, e um arquivo de site não consegue impedir indisponibilidade da plataforma, tráfego abusivo ou comprometimento da conta. As medidas acima reduzem a superfície de ataque e dificultam alterações não autorizadas, mas não são uma proteção contra DDoS. Para controle de cabeçalhos e proteção adicional de tráfego, será necessário um domínio próprio e um proxy/CDN configurado para ele.