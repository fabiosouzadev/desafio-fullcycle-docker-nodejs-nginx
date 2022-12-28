<h1 align="center">
  Desafio FullCycle Docker nginx + nodejs
</h1>

#### Desafio
* Criar um docker-compose com um servico nginx como proxy reverso de um serviço escrito em nodejs que imprime 
`<h1>Full Cycle Rocks!</h1>`
* Aplicação em nodejs adiciona um registro no banco de dados tabela `People`
* Aplicação lista nomes cadastrados no banco de dados
* Aplicação disponivel na porta `8080`

## 🚀 Criando os serviços 

```bash
# Clone esse repo
$ git clone https://github.com/fabiosouzadev/desafio-fullcycle-dockerfile-go

# Entre na pasta do repo
$ cd desafio-fullcycle-dockerfile-go

# Rode os serviços
$ docker-compose up -d
```

## ☕ Acessando os serviços

```bash
http://localhost:8080
```

## Obs:
> Não usei dockerize, preferi usar o healthcheck, o link pra documentação esta na seção `Links`
```yaml
    db:
    ...
        healthcheck:
            test: ["CMD", "mysqladmin" ,"ping", "-h", "localhost", "-uroot", "-proot"]
            interval: 5s
            timeout: 5s
            retries: 20
            start_period: 25s

    nodejs:
     ...
        depends_on:
            db:
            condition: service_healthy
  ...
```

## 📖 Links
- [Awesome Docker Compose samples](https://github.com/docker/awesome-compose)
- [Docker Composer Docs](https://docs.docker.com/compose/)
- [Docker Composer Healthcheck Docs](https://docs.docker.com/engine/reference/builder/#healthcheck)
