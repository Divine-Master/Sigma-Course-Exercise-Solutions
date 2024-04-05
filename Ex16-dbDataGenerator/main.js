import express from 'express'
import generate from './routes/generate.js'
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use('/generate', generate)

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});