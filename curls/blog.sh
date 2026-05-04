## Listar posts

curl -H "Authorization: Bearer {SUA_CHAVE}" \
  "https://stage.cuidaty.com/api/v1/blog?page=1"

## Busca por Slug

curl -H "Authorization: Bearer {SUA_CHAVE}" \
  "https://stage.cuidaty.com/api/v1/blog/saude-mental-no-trabalho"

## Listar tags

curl -H "Authorization: Bearer {SUA_CHAVE}" \
  "https://stage.cuidaty.com/api/v1/blog/tags"
