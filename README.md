## Iris Teste

# Iniciar

Para iniciar o projeto é só roda "npm i" para baixar as dependências
e rodas "npm start"

# Front-End

O front-end foi feito em angular e angular materials, projeto bem estruturado separando a pasta APP apenas para o front, com os componentes os arquivos de css e as pages, coloquei apenas uma rota que é a home pois os forms abrem em modais.

# Back-End

O back-end foi desenvolvido com knex e express, na para API está todos os arquivos de back, com controllers, router, database.

# Problemas de desenvolvimento

Vale resaltar alguns problemas na aplicação, o servidor gerado pelo angular na porta 4000 não estava aceitando as rotas do back-end, tentei criar um servidor express na porta 3333, mas quando rodo npm run dev ele aparece o seguinte erro.

`Must use import to load ES Module:`

Já que a aplicação não tinha como consumir o banco, eu criei um skeleton/data.ts para poder consumir esses dados no front.

O outro maior problema na aplicação é o array.filter() que está devolvendo um array vazio no app/services/users-search.service.ts.

`
    const filteredUsers = this.users.filter((user) => {
      user.name.toLowerCase().includes(inputValue.toLowerCase()) || user.email.toLowerCase().includes(inputValue.toLowerCase())
    })
`