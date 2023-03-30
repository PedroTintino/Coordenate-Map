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


var camadaMapa = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
});

var marcadoresDeBairro = [
L.marker([-23.960401, -46.396842])
.bindPopup('')
.openPopup(),

L.marker([-23.983613, -46.388037])
.bindPopup('')
.openPopup(),

L.marker([-23.959624, -46.403648])
    .bindPopup('Número total de eleitores: 3.')
    .openPopup(),



L.marker([-23.965069, -46.375210])
.bindPopup('')
.openPopup(),

    //São Vicente
L.marker([-23.965519, -46.386695])
.bindPopup('<h3>São Vicente: </h3><p>Total de eleitores: </p>')
.openPopup(),

    //Vila Margarida
L.marker([-23.964516, -46.403999])
.bindPopup('<h2>Vila Margarida</h2>')
.openPopup(),


    //Rio Branco
L.marker([-23.979166, -46.479497])
.bindPopup('<h2>Rio Branco</h2><button>Adicionar</button>')
.openPopup(),
    
    //Parque das bandeiras
L.marker([-23.983594, -46.498116])
.bindPopup('<h2>Parque das Bandeiras</h2>')
.openPopup(),

    //Itararé
    L.marker([-23.966474, -46.363181])
    .bindPopup('<h2>Itararé</h2>')
    .openPopup(),

    //Catipoã
    L.marker([-23.956808, -46.387601])
    .bindPopup('<h2>Catipoã</h2>')
    .openPopup(),

    //Cidade Naútica
    L.marker([-23.941938, -46.389483])
    .bindPopup('<h2>Cidade Naútica</h2>')
    .openPopup(),

    //Jockey clube
    L.marker([-23.943988, -46.395548])
    .bindPopup('<h2>Jockey Clube</h2>')
    .openPopup(),

    //Centro
    L.marker([-23.966096, -46.386634])
    .bindPopup('<h2>Centro</h2>')
    .openPopup(),

    //Gonzaguinha
    L.marker([-23.970453, -46.384726])
    .bindPopup('<h2>Gonzaguinha</h2>')
    .openPopup(),

    //Humaitá
    L.marker([-23.944540, -46.454882])
    .bindPopup('<h2>Humaitá</h2>')
    .openPopup(),

    //Samaritá
    L.marker([-23.993088, -46.472956])
    .bindPopup('<h2>Samaritá</h2>')
    .openPopup(),

    //Vila ema
    L.marker([-23.996231, -46.488980])
    .bindPopup('<h2>Vila Ema</h2>')
    .openPopup(),

    //Vila Nova São Vicente
    L.marker([-23.988339, -46.489504])
    .bindPopup('<h2>Parque das Bandeiras</h2>')
    .openPopup(),

    //Vila Nova São Vicente
    L.marker([-23.968791, -46.396815])
    .bindPopup('')
    .openPopup(),
    
    //Vila Nova São Vicente
    L.marker([-23.959667, -46.404376])
    .bindPopup('')
    .openPopup(),

    //Jardim Guaçu
    L.marker([-23.951114, -46.379366])
    .bindPopup('')
    .openPopup(),

    //Jardim Guaçu
    L.marker([-23.969409, -46.408372])
    .bindPopup('<h2>Jardim Guaçu</h2>')
    .openPopup(),

    //Jardim independência
    L.marker([-23.969409, -46.408372])
    .bindPopup('<h2>Jardim independência</h2>')
    .openPopup(),

    //Jardim irmã dolores
    L.marker([-23.971633, -46.446140])
    .bindPopup('<h2>Jardim Irmã Dolores</h2>')
    .openPopup(),

    //Parque Continental
    L.marker([-23.955022, -46.457445])
    .bindPopup('<h2>Parque Continental</h2>')
    .openPopup(),

    //Vila Nossa Sra. de Fatima
    L.marker([-23.950920, -46.405044])
    .bindPopup('<h2>Vila Nossa Sra. de Fatima</h2>')
    .openPopup(),

    //Vila Nossa Sra. de Fatima
    L.marker([-23.956978, -46.379668])
    .bindPopup('<h2>Vila Cascatinha</h2>')
    .openPopup(),

    //Vila Nova Mariana
    L.marker([-23.953869, -46.449436])
    .bindPopup('<h2>Vila Nova Mariana</h2>')
    .openPopup(),

    //Vila Votoruá
    L.marker([-23.958328, -46.368117])
    .bindPopup('')
    .openPopup(),

    //Vila Sao Jorge
    L.marker([-23.955151, -46.371733])
    .bindPopup('')
    .openPopup()
];

var layerGroup = L.layerGroup(marcadoresDeBairro);
var allLayers = L.layerGroup([camadaMapa, layerGroup]);
allLayers.addTo(map);

//Function Exibir/Ocultar
const marcadorBairros = document.querySelector('.dropdown-item-one');
marcadorBairros.addEventListener('change', function(){
    if(this.checked){
        // Mostre os marcadores que devem ser mostrados
        layerGroup.eachLayer(function(marker) {
          if(marker){
            marker.addTo(map);
          }
        });
    } if(!this.checked) {
        // Esconda os marcadores que devem ser escondidos
        layerGroup.eachLayer(function(marker) {
          if(marker){
            map.removeLayer(marker);
          }
        });
    }
});

//Zonas eleitorais

var marcadoresDeZona = [
L.marker([-23.96894056396401, -46.386882575037404])
.bindPopup('<h3>Zona 1(117)</h3>')
.openPopup(),

L.marker([-23.964486350412447, -46.382906916377635])
.bindPopup('<h3>Zona 2(340)</h3>')
.openPopup()
];
var layerGroupTwo = L.layerGroup(marcadoresDeZona);
var allLayersTwo = L.layerGroup([camadaMapa, layerGroupTwo]);
allLayersTwo.addTo(map);



//Function Exibir/Ocultar
const marcadorZonas = document.querySelector('.dropdown-item-two');
marcadorZonas.addEventListener('change', function(){
    if(this.checked){
        // Mostre os marcadores que devem ser mostrados
        layerGroupTwo.eachLayer(function(marker) {
          if(marker){
            marker.addTo(map);
          }
        });
    } if(!this.checked) {
        // Esconda os marcadores que devem ser escondidos
        layerGroupTwo.eachLayer(function(marker) {
          if(marker){
            map.removeLayer(marker);
          }
        });
    }
});


//Colégios

var marcadoresDeEscolas = [
    L.marker([-23.966594352758225, -46.37687635740972])
    .bindPopup('<h3> Colégio Ateneu São Vicente 1</h3>')
    .openPopup(),
    
    L.marker([-23.964676452759452, -46.37970623172126])
    .bindPopup('<h3> COLÉGIO ÊXITO</h3>')
    .openPopup(),
    
    L.marker([-23.9684120550308, -46.38826546055712])
    .bindPopup('<h3>COLÉGIO ITA - UNIDADE I </h3>')
    .openPopup(),
    
    L.marker([-23.965994965149047, -46.379903902885275])
    .bindPopup('<h3>COLÉGIO ITA UNIDADE II</h3>')
    .openPopup(),
    
    L.marker([-23.954661384482478, -46.373505674049674])
    .bindPopup('<h3>COLÉGIO NASCIMENTO</h3>')
    .openPopup(),
    
    L.marker([-23.968321643679356, -46.35676972634301])
    .bindPopup('<h3>COLÉGIO NOTRE DAME - UNIDADE I</h3>')
    .openPopup(),
   
    L.marker([-23.96958739428028, -46.369652185552155])
    .bindPopup('<h3>COLÉGIO NOTRE DAME - UNIDADE II</h3>')
    .openPopup(),
   
    L.marker([-23.96296325361791, -46.39435665487066])
    .bindPopup('<h3>COLÉGIO SANTA ROSA</h3>')
    .openPopup(),
   
    L.marker([-23.97289110531335, -46.39869726281325])
    .bindPopup('<h3>COLÉGIO NOTRE DAME - UNIDADE II</h3>')
    .openPopup(),
   
    L.marker([-23.96958739428028, -46.369652185552155])
    .bindPopup('<h3>EE.PASTOR JOAQUIM LOPES LEÃO</h3>')
    .openPopup(),
    
    L.marker([-23.96543434254604, -46.39400120089615])
    .bindPopup('<h3>EE.PROF.LEOPOLDO JOSÉ DE SANT ANNA</h3>')
    .openPopup(),
    
    L.marker([-23.96579198160695, -46.40122590089597])
    .bindPopup('<h3>EE. MARGARIDA PINHO RODRIGUES</h3>')
    .openPopup(),
    
    L.marker([-23.96958739428028, -46.369652185552155])
    .bindPopup('<h3>EE. ANTONIO LUIZ BARREIROS</h3>')
    .openPopup(),
    
    L.marker([-23.968904935415424, -46.38350728555252])
    .bindPopup('<h3>EE MARTIM AFONSO</h3>')
    .openPopup(),
    
    L.marker([-23.96798791842808, -46.40925803952632])
    .bindPopup('<h3>EE PROF LUCIO MARTINS RODRIGUES</h3>')
    .openPopup(),
    
    L.marker([-23.955100590012613, -46.369656985558265])
    .bindPopup('<h3>EE.PROFA.ZULMIRA DE ALMEIDA LAMBERT</h3>')
    .openPopup(),
    
    L.marker([-23.963958882755264, -46.370317731855025])
    .bindPopup('<h3>EMEF LIONS CLUBE</h3>')
    .openPopup(),
    
    L.marker([-23.96942359409514, -46.40477317021017])
    .bindPopup('<h3>EMEF. ERCÍLIA NOGUEIRA COBRA</h3>')
    .openPopup(),
    
    L.marker([-23.962479918706517, -46.36940055487092])
    .bindPopup('<h3>EMEF. PREFEITO ANTONIO FERNANDO DOS REIS</h3>')
    .openPopup(),
    
    L.marker([-23.96698471573899, -46.40180667016806])
    .bindPopup('<h3>EMEF. PREFEITO LUIZ BENEDITINO FERREIRA</h3>')
    .openPopup(),
    
    L.marker([-23.961177249401793, -46.37806178555569])
    .bindPopup('<h3>EMEF PROF CONSTANTE LUCIANO CLEMENTE HOULMONT</h3>')
    .openPopup(),
    
    L.marker([-23.961468867683422, -46.4072692548713])
    .bindPopup('<h3>EMEF. PROFA. LAURA FILGUEIRAS</h3>')
    .openPopup(),
    
    L.marker([-23.971402501906077, -46.39135390201291])
    .bindPopup('<h3>EMEF RAQUEL DE CASTRO FERREIRA</h3>')
    .openPopup(),
    
    L.marker([-23.971411900373226, -46.39278112418262])
    .bindPopup('<h3>EMEF. REPÚBLICA DE PORTUGAL</h3>')
    .openPopup(),
    
    L.marker([-23.98766253383847, -46.392845770202484])
    .bindPopup('<h3>EMEI. MARIA MATHILDE DE SANTANA</h3>')
    .openPopup(),
    
    L.marker([-23.961421967612488, -46.36942867021354])
    .bindPopup('<h3>EMEI. PROF. EDMUNDO CAPELLARI</h3>')
    .openPopup(),
    
    L.marker([-23.961515413961056, -46.40628513059977])
    .bindPopup('<h3>EMEI PROFA. EULINA TRINDADE</h3>')
    .openPopup(),
    
    L.marker([-23.967511184482785, -46.40881030360994])
    .bindPopup('<h3>EMEI. PROVÍNCIA DE OKINAWA</h3>')
    .openPopup(),
    
    L.marker([-23.969425670061806, -46.39189007477478])
    .bindPopup('<h3>Escola Henrique Oswald</h3>')
    .openPopup(),
    
    L.marker([-23.965147072691458, -46.3835947036099])
    .bindPopup('<h3>ETEC Dra. Ruth Cardoso</h3>')
    .openPopup(),
    
    L.marker([-23.967624358296337, -46.37848953244499])
    .bindPopup('<h3>ESCOLA TÉCNICA FORTEC</h3>')
    .openPopup(),
    
    L.marker([-23.96966555579966, -46.369747918949905])
    .bindPopup('<h3>Escola Verde</h3>')
    .openPopup(),
    
    L.marker([-23.964206164476167, -46.39129796127999])
    .bindPopup('<h3>FACULDADE UNIBR	</h3>')
    .openPopup(),
    
    L.marker([-23.969744480899845, -46.37301317477472])
    .bindPopup('<h3>OBJETIVO - ASSOCIAÇÃO DE PESQUISA E ENSINO DO LITORAL</h3>')
    .openPopup(),
    
    L.marker([-23.965355167329186, -46.38182975870591])
    .bindPopup('<h3>Colégio Batista da Primeira</h3>')
    .openPopup()
    ];
    var layerGroupThree = L.layerGroup(marcadoresDeEscolas);
    var allLayersThree = L.layerGroup([camadaMapa, layerGroupThree]);
    allLayersThree.addTo(map);


//Function Exibir/Ocultar
const marcadorEscolas = document.querySelector('.dropdown-item-three');
marcadorEscolas.addEventListener('change', function(){
    if(this.checked){
        // Mostre os marcadores que devem ser mostrados
        layerGroupThree.eachLayer(function(marker) {
          if(marker){
            marker.addTo(map);
          }
        });
    } if(!this.checked) {
        // Esconda os marcadores que devem ser escondidos
        layerGroupThree.eachLayer(function(marker) {
          if(marker){
            map.removeLayer(marker);
          }
        });
    }
});

//Alerta de uso
function avisoAdicionarinformacao(){
    alert('Para adiconar informações, clique sobre o marcador que deseja utilizar.')
};







 










    