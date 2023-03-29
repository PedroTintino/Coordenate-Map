//Own Functions

//     alert('Welcome to your system, Dev.')
//    const ano = document.getElementById("first-year");
//    const segundoAno = document.getElementById("second-year");
//    const terceiroAno = document.getElementById("third-year");

//    ano.addEventListener("click", function (e){
//        e.preventDefault();
//    });
   
//    segundoAno.addEventListener("click", function (e){
//        e.preventDefault();
//    });
   
//    terceiroAno.addEventListener("click", function (e){
//        e.preventDefault();
//    });
   
// function gerarValor() {
//    console.log('estou aqui')
//     var valor = Math.floor(Math.random() * 100) + 1;
//     document.getElementById("resultado").innerHTML = "Valor gerado: " + valor;
//     document.getElementById("resultado-two").innerHTML = "Valor gerado: " + valor;
//   }
  

// //Axios
// axios('distritos.json').then( resposta => console.log(resposta.data));

const map = L.map('map').setView([-23.961158, -46.396557], 12);

function marcarBairros(){
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-23.960401, -46.396842]).addTo(map)
.bindPopup('<h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
.openPopup();

L.marker([-23.983613, -46.388037]).addTo(map)
.bindPopup('<h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
.openPopup();

L.marker([-23.959624, -46.403648]).addTo(map)
    .bindPopup('Número total de eleitores: 3.')
    .openPopup();



L.marker([-23.965069, -46.375210]).addTo(map)
.bindPopup('<h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
.openPopup();

    //São Vicente
L.marker([-23.965519, -46.386695]).addTo(map)
.bindPopup('<h3>São Vicente: </h3><p>Total de eleitores: </p>')
.openPopup();

    //Vila Margarida
L.marker([-23.964516, -46.403999]).addTo(map)
.bindPopup('<h2>Vila Margarida</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
.openPopup();


    //Rio Branco
L.marker([-23.979166, -46.479497]).addTo(map)
.bindPopup('<h2>Rio Branco</h2><button>Adicionar</button>')
.openPopup();
    
    //Parque das bandeiras
L.marker([-23.983594, -46.498116]).addTo(map)
.bindPopup('<h2>Parque das Bandeiras</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
.openPopup();

    //Itararé
    L.marker([-23.966474, -46.363181]).addTo(map)
    .bindPopup('<h2>Itararé</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Catipoã
    L.marker([-23.956808, -46.387601]).addTo(map)
    .bindPopup('<h2>Catipoã</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Cidade Naútica
    L.marker([-23.941938, -46.389483]).addTo(map)
    .bindPopup('<h2>Cidade Naútica</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Jockey clube
    L.marker([-23.943988, -46.395548]).addTo(map)
    .bindPopup('<h2>Jockey Clube</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Centro
    L.marker([-23.966096, -46.386634]).addTo(map)
    .bindPopup('<h2>Centro</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Gonzaguinha
    L.marker([-23.970453, -46.384726]).addTo(map)
    .bindPopup('<h2>Gonzaguinha</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Humaitá
    L.marker([-23.944540, -46.454882]).addTo(map)
    .bindPopup('<h2>Humaitá</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Samaritá
    L.marker([-23.993088, -46.472956]).addTo(map)
    .bindPopup('<h2>Samaritá</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Vila ema
    L.marker([-23.996231, -46.488980]).addTo(map)
    .bindPopup('<h2>Vila Ema</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Vila Nova São Vicente
    L.marker([-23.988339, -46.489504]).addTo(map)
    .bindPopup('<h2>Parque das Bandeiras</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Vila Nova São Vicente
    L.marker([-23.968791, -46.396815]).addTo(map)
    .bindPopup('<h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();
    
    //Vila Nova São Vicente
    L.marker([-23.959667, -46.404376]).addTo(map)
    .bindPopup('<h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Jardim Guaçu
    L.marker([-23.951114, -46.379366]).addTo(map)
    .bindPopup('<h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Jardim Guaçu
    L.marker([-23.969409, -46.408372]).addTo(map)
    .bindPopup('<h2>Jardim Guaçu</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Jardim independência
    L.marker([-23.969409, -46.408372]).addTo(map)
    .bindPopup('<h2>Jardim independência</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Jardim irmã dolores
    L.marker([-23.971633, -46.446140]).addTo(map)
    .bindPopup('<h2>Jardim Irmã Dolores</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Parque Continental
    L.marker([-23.955022, -46.457445]).addTo(map)
    .bindPopup('<h2>Parque Continental</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Vila Nossa Sra. de Fatima
    L.marker([-23.950920, -46.405044]).addTo(map)
    .bindPopup('<h2>Vila Nossa Sra. de Fatima</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();
    
    //Vila Nossa Sra. de Fatima
    L.marker([-23.956978, -46.379668]).addTo(map)
    .bindPopup('<h2>Vila Cascatinha</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Vila Nova Mariana
    L.marker([-23.953869, -46.449436]).addTo(map)
    .bindPopup('<h2>Vila Nova Mariana</h2><h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Vila Votoruá
    L.marker([-23.958328, -46.368117]).addTo(map)
    .bindPopup('<h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();

    //Vila Sao Jorge
    L.marker([-23.955151, -46.371733]).addTo(map)
    .bindPopup('<h3>Partido 1:</h3><p>Número total de eleitores = <span id="resultado"></span>.</p> <h3>Partido 2:</h3><p>Número total de eleitores = <span id=resultado-two></span>.</p>')
    .openPopup();
};

const marcadorBairros = document.querySelector('.dropdown-item-one');

marcadorBairros.addEventListener('change', function(){
    if(this.checked){
        marcarBairros();
    } else{
        
    }
});

function avisoAdicionarinformacao(){
    alert('Para adiconar informações, clique sobre o marcador que deseja utilizar.')
};
 










    