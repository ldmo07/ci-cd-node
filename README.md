# ci-cd-node

API Express de ejemplo desplegada automáticamente por Jenkins (ver repo `ci-cd-template`).

| Endpoint | Respuesta |
|---|---|
| `GET /` | `node-example v2` |
| `GET /users` | JSON con 3 usuarios |

Puertos: host **8081** → contenedor **3000**.

## Ejecutar local

```bash
docker build -t node-example:test .
docker run -d --rm --name node-example-test -p 8081:3000 node-example:test
curl http://localhost:8081/users
docker stop node-example-test
```

## Despliegue

Un push a `main` dispara el job de Jenkins (`pollSCM`, ~1–2 min): build → deploy → smoke check. El `Jenkinsfile` solo cambia `APP_NAME`, `HOST_PORT` y `CONTAINER_PORT` respecto a la plantilla.
