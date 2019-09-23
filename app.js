const express = require('express')
const { postgraphile } = require('postgraphile')

const app = express();

app.use(
  postgraphile(process.env.DATABASE_URL,
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
    }
    )
  );

  app.get('/', function(req, res) {
    res.send('Live bby!')
  });

  app.listen(process.env.PORT);