const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

// Bodyparser 
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.set('view engine', 'pug');

// Página inicial
app.get('/', (req, res) => {
  res.render('index', { title: 'Calculadora de Taxa Basal', message: 'Entre com seus dados' });
});

// Página resultado do cálculo
app.post('/calcular', (req, res) => {

  // Pega as variáveis do formulario
  var peso = req.body.peso;
  var altura = req.body.altura;
  var idade = req.body.idade;
  var sexo = req.body.sexo;
  var atv = req.body.atv;

  // se for do sexo masculino
  if (sexo == "m") {

    b1 = 13.7 * (peso);
    b2 = 5.0 * (altura);
    b3 = 6.8 * (idade);

    teste = 66 + b1 + b2 - b3;

    if (atv == "1") {
      teste2 = (teste) * 1.2;
      final = (teste2) * 0.85;
      final2 = (teste2) * 1.15;
    }

    else if(atv =="2"){
      teste2 = (teste) * 1.375;
      final = (teste2) * 0.85; 
      final2 = (teste2) * 1.15;
    } 

     else if(atv =="3"){
       teste2 = (teste) * 1.55; 
       final = (teste2) * 0.85; 
       final2 = (teste2) * 1.15;
     }
     
      else if(atv =="4"){
        teste2 = (teste) * 1.725; 
        final = (teste2) * 0.85; 
        final2 = (teste2) * 1.15;
      } 
      
      else if(atv == "5"){ 
        teste2 = (teste) * 1.9; 
        final = (teste2) * 0.85; 
        final2 = (teste2) * 1.15;
      } 
  }

  // Se for do sexo feminino
  else if (sexo == 'f') {

    b1 = 9.6 * (peso);
    b2 = 1.8 * (altura);
    b3 = 4.7 * (idade);
    
    teste = 665 + b1 + b2 - b3;

    // Repete tudo. TODO: Fazer de maneira melhor.
    if (atv == "1") {
      teste2 = (teste) * 1.2;
      final = (teste2) * 0.85;
      final2 = (teste2) * 1.15;
    }

    else if(atv =="2"){
      teste2 = (teste) * 1.375;
      final = (teste2) * 0.85; 
      final2 = (teste2) * 1.15;
    } 

     else if(atv =="3"){
       teste2 = (teste) * 1.55; 
       final = (teste2) * 0.85; 
       final2 = (teste2) * 1.15;
     }
     
      else if(atv =="4"){
        teste2 = (teste) * 1.725; 
        final = (teste2) * 0.85; 
        final2 = (teste2) * 1.15;
      } 
      
      else if(atv == "5"){ 
        teste2 = (teste) * 1.9; 
        final = (teste2) * 0.85; 
        final2 = (teste2) * 1.15;
      } 
  }
  
  // Melhora a saída das variaveis. Coloca só 2 digitos
  teste = Number((teste).toFixed(2));
  teste2 = Number((teste2).toFixed(2));
  final2 = Number((final2).toFixed(2));

  console.log(teste);
  console.log(teste2);
  console.log(final);
  console.log(final2);
  
  res.render('calcular', { title: 'Resultado do cálculo Basal', teste, teste2, final, final2  }); // Envia variáveis no final
});


app.listen(PORT, () => {
  console.log('server started');
});