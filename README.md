# Rest Dash

Dashboard React de estudo para uma operaÃ§Ã£o de restaurante: indicadores, calendÃ¡rio,
tabela e quadro de tarefas. Usa dados de demonstraÃ§Ã£o e estado em memÃ³ria; nÃ£o hÃ¡
API, autenticaÃ§Ã£o, persistÃªncia nem integraÃ§Ã£o de comandas implementada.

## Desenvolvimento

Node.js 22.12+ e npm. O lockfile npm Ã© a referÃªncia Ãºnica de dependÃªncias.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## OrganizaÃ§Ã£o

`pages` compÃµe telas; `components` contÃ©m apresentaÃ§Ã£o reutilizÃ¡vel; `store` mantÃ©m
estado Zustand; `data` fornece fixtures. React Router liga as telas. FullCalendar,
MUI e ECharts sustentam calendÃ¡rio, tabela e visualizaÃ§Ãµes.

## ModernizaÃ§Ã£o 0.1.0

Vite 8 e plugin React 6; remoÃ§Ã£o de artefato temporÃ¡rio; lockfile reproduzÃ­vel; idioma
pt-BR; fallback de rotas; textarea correto; validaÃ§Ã£o de campos vazios; hook do cabeÃ§alho
Kanban isolado em componente; identificadores de cartÃ£o com UUID. Busca visual
desativada explicitamente atÃ© existir implementaÃ§Ã£o.

## VerificaÃ§Ã£o e limites

CI compila o bundle. Antes do merge, verificar navegaÃ§Ã£o, criaÃ§Ã£o/remoÃ§Ã£o e arraste
de cartÃµes, calendÃ¡rio e tabela em navegador. AtualizaÃ§Ãµes de grandes bibliotecas
visuais devem ser feitas separadamente, com testes de interaÃ§Ã£o. O pacote Kanban
legado tem dependÃªncias antigas e Ã© candidato a substituiÃ§Ã£o futura.

NÃ£o inserir dados reais na demonstraÃ§Ã£o. Para evoluir a produto: API autenticada,
persistÃªncia, autorizaÃ§Ã£o, testes de fluxo e revisÃ£o de acessibilidade e tamanho do bundle.
