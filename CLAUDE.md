# CLAUDE.md

Repo independiente (`github.com/ldmo07/ci-cd-node`), clonado dentro de `CI-CD/` pero ignorado por el repo raíz. Se commitea y pushea desde esta carpeta.

- App: Express en `server.js` (puerto 3000, rutas `/` y `/users`). Tests mínimos incluidos; además la verificación es `docker build` + `curl`.
- `Jenkinsfile`: copia de `templates/Jenkinsfile.template` del repo raíz. Solo editar `APP_NAME` (`node-example`), `HOST_PORT` (`8081`), `CONTAINER_PORT` (`3000`).
- Push a `main` => Jenkins despliega en ~1–2 min. Un build roto conserva el contenedor anterior.
- `.gitattributes` fuerza LF; CRLF en el `Jenkinsfile` rompe el pipeline.
- GitHub Actions solo como puerta de calidad en PRs (`.github/workflows/test.yml`, corre `npm test`); nunca build/deploy ahí. Solo Jenkins hace CI/CD.
