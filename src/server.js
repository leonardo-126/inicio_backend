import app from './app.js'

const PORT = process.env.PORT || 3000

//fazer a conexao

app.listen(PORT, () => {
      console.log(`Example app listening on port http://localhost:${PORT}`)
})