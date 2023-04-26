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
    .bindPopup('Japuí')
    .openPopup(),

  L.marker([-23.965069, -46.375210])
    .bindPopup('')
    .openPopup(),

  //São Vicente
  L.marker([-23.965519, -46.386695])
    .bindPopup('<h4>São Vicente: </h4>')
    .openPopup(),

  //Vila Margarida
  L.marker([-23.964516, -46.403999])
    .bindPopup('<h4>Vila Margarida</h4>')
    .openPopup(),


  //Rio Branco
  L.marker([-23.979166, -46.479497])
    .bindPopup('<h4>Rio Branco</h4>')
    .openPopup(),


  //Itararé
  L.marker([-23.966474, -46.363181])
    .bindPopup('<h4>Itararé</h4>')
    .openPopup(),

  //Catipoã
  L.marker([-23.956808, -46.387601])
    .bindPopup('<h4>Catipoã</h4>')
    .openPopup(),

  //Cidade Naútica
  L.marker([-23.941938, -46.389483])
    .bindPopup('<h4>Cidade Naútica</h4>')
    .openPopup(),

  //Jockey clube
  L.marker([-23.943988, -46.395548])
    .bindPopup('<h4>Jockey Clube</h4>')
    .openPopup(),

  //Centro
  L.marker([-23.966096, -46.386634])
    .bindPopup('<h4>Centro</h4>')
    .openPopup(),

  //Gonzaguinha
  L.marker([-23.970453, -46.384726])
    .bindPopup('<h4>Gonzaguinha</h4>')
    .openPopup(),

  //Humaitá
  L.marker([-23.944540, -46.454882])
    .bindPopup('<h4>Humaitá</h4>')
    .openPopup(),

  //Samaritá
  L.marker([-23.993088, -46.472956])
    .bindPopup('<h4>Samaritá</h4>')
    .openPopup(),

  //Vila ema
  L.marker([-23.996231, -46.488980])
    .bindPopup('<h4>Vila Ema</h4>')
    .openPopup(),

  //Vila Nova São Vicente
  L.marker([-23.988339, -46.489504])
    .bindPopup('<h4>Parque das Bandeiras</h4>')
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
    .bindPopup('<h4>Jardim Guaçu</h4>')
    .openPopup(),

  //Jardim independência
  L.marker([-23.969409, -46.408372])
    .bindPopup('<h4>Jardim independência</h4>')
    .openPopup(),

  //Jardim irmã dolores
  L.marker([-23.971633, -46.446140])
    .bindPopup('<h4>Jardim Irmã Dolores</h4>')
    .openPopup(),

  //Parque Continental
  L.marker([-23.955022, -46.457445])
    .bindPopup('<h4>Parque Continental</h4>')
    .openPopup(),

  //Vila Nossa Sra. de Fatima
  L.marker([-23.950920, -46.405044])
    .bindPopup('<h4>Vila Nossa Sra. de Fatima</h4>')
    .openPopup(),

  //Vila Nossa Sra. de Fatima
  L.marker([-23.956978, -46.379668])
    .bindPopup('<h4>Vila Cascatinha</h4>')
    .openPopup(),

  //Vila Nova Mariana
  L.marker([-23.953869, -46.449436])
    .bindPopup('<h4>Vila Nova Mariana</h4>')
    .openPopup(),

  //Vila Votoruá
  L.marker([-23.958328, -46.368117])
    .bindPopup('<h4>Vila Votoruá</h4>')
    .openPopup(),

  //Vila Sao Jorge
  L.marker([-23.955151, -46.371733])
    .bindPopup('<h4>Vila São Jorge</h4>')
    .openPopup()
];

var layerGroup = L.layerGroup(marcadoresDeBairro);
var allLayers = L.layerGroup([camadaMapa, layerGroup]);
allLayers.addTo(map);

//Function Exibir/Ocultar
const marcadorBairros = document.querySelector('.dropdown-item-one');
marcadorBairros.addEventListener('change', function () {
  if (this.checked) {
    // Mostre os marcadores que devem ser mostrados
    layerGroup.eachLayer(function (marker) {
      if (marker) {
        marker.addTo(map);
      }
    });
  } if (!this.checked) {
    // Esconda os marcadores que devem ser escondidos
    layerGroup.eachLayer(function (marker) {
      if (marker) {
        map.removeLayer(marker);
      }
    });
  }
});

//Zonas eleitorais

var marcadoresDeZona = [
  L.marker([-23.96894056396401, -46.386882575037404])
    .bindPopup('<h4>Zona 1(117)</h4>')
    .openPopup(),

  L.marker([-23.964486350412447, -46.382906916377635])
    .bindPopup('<h4>Zona 2(340)</h4>')
    .openPopup()
];
var layerGroupTwo = L.layerGroup(marcadoresDeZona);
var allLayersTwo = L.layerGroup([camadaMapa, layerGroupTwo]);
allLayersTwo.addTo(map);



//Function Exibir/Ocultar
const marcadorZonas = document.querySelector('.dropdown-item-two');
marcadorZonas.addEventListener('change', function () {
  if (this.checked) {
    // Mostre os marcadores que devem ser mostrados
    layerGroupTwo.eachLayer(function (marker) {
      if (marker) {
        marker.addTo(map);
      }
    });
  } if (!this.checked) {
    // Esconda os marcadores que devem ser escondidos
    layerGroupTwo.eachLayer(function (marker) {
      if (marker) {
        map.removeLayer(marker);
      }
    });
  }
});


//Colégios

//Zona 117

var marcadoresDeEscolas = [
  L.marker([-23.966594352758225, -46.37687635740972])
    .bindPopup('<h4> Colégio Ateneu São Vicente 1</h4>')
    .openPopup(),

  L.marker([-23.964676452759452, -46.37970623172126])
    .bindPopup('<h4> COLÉGIO ÊXITO</h4>')
    .openPopup(),

  L.marker([-23.9684120550308, -46.38826546055712])
    .bindPopup('<h4>COLÉGIO ITA - UNIDADE I </h4>')
    .openPopup(),

  L.marker([-23.965994965149047, -46.379903902885275])
    .bindPopup('<h4>COLÉGIO ITA UNIDADE II</h4>')
    .openPopup(),

  L.marker([-23.954661384482478, -46.373505674049674])
    .bindPopup('<h4>COLÉGIO NASCIMENTO</h4>')
    .openPopup(),

  L.marker([-23.968321643679356, -46.35676972634301])
    .bindPopup('<h4>COLÉGIO NOTRE DAME - UNIDADE I</h4>  ')
    .openPopup(),

  L.marker([-23.96958739428028, -46.369652185552155])
    .bindPopup('<h4>COLÉGIO NOTRE DAME - UNIDADE II</h4>')
    .openPopup(),

  L.marker([-23.96296325361791, -46.39435665487066])
    .bindPopup('<h4>COLÉGIO SANTA ROSA</h4>')
    .openPopup(),

  L.marker([-23.97289110531335, -46.39869726281325])
    .bindPopup('<h4>COLÉGIO NOTRE DAME - UNIDADE II</h4>')
    .openPopup(),

  L.marker([-23.96958739428028, -46.369652185552155])
    .bindPopup('<h4>EE.PASTOR JOAQUIM LOPES LEÃO</h4>')
    .openPopup(),

  L.marker([-23.96543434254604, -46.39400120089615])
    .bindPopup('<h4>EE.PROF.LEOPOLDO JOSÉ DE SANT ANNA</h4>')
    .openPopup(),

  L.marker([-23.96579198160695, -46.40122590089597])
    .bindPopup('<h4>EE. MARGARIDA PINHO RODRIGUES</h4>')
    .openPopup(),

  L.marker([-23.96958739428028, -46.369652185552155])
    .bindPopup('<h4>EE. ANTONIO LUIZ BARREIROS</h4>')
    .openPopup(),

  L.marker([-23.968904935415424, -46.38350728555252])
    .bindPopup('<h4>EE MARTIM AFONSO</h4>')
    .openPopup(),

  L.marker([-23.96798791842808, -46.40925803952632])
    .bindPopup('<h4>EE PROF LUCIO MARTINS RODRIGUES</h4>')
    .openPopup(),

  L.marker([-23.955100590012613, -46.369656985558265])
    .bindPopup('<h4>EE.PROFA.ZULMIRA DE ALMEIDA LAMBERT</h4>')
    .openPopup(),

  L.marker([-23.963958882755264, -46.370317731855025])
    .bindPopup('<h4>EMEF LIONS CLUBE</h4>')
    .openPopup(),

  L.marker([-23.96942359409514, -46.40477317021017])
    .bindPopup('<h4>EMEF. ERCÍLIA NOGUEIRA COBRA</h4>')
    .openPopup(),

  L.marker([-23.962479918706517, -46.36940055487092])
    .bindPopup('<h4>EMEF. PREFEITO ANTONIO FERNANDO DOS REIS</h4>')
    .openPopup(),

  L.marker([-23.96698471573899, -46.40180667016806])
    .bindPopup('<h4>EMEF. PREFEITO LUIZ BENEDITINO FERREIRA</h4>')
    .openPopup(),

  L.marker([-23.961177249401793, -46.37806178555569])
    .bindPopup('<h4>EMEF PROF CONSTANTE LUCIANO CLEMENTE HOULMONT</h4>')
    .openPopup(),

  L.marker([-23.961468867683422, -46.4072692548713])
    .bindPopup('<h4>EMEF. PROFA. LAURA FILGUEIRAS</h4>')
    .openPopup(),

  L.marker([-23.971402501906077, -46.39135390201291])
    .bindPopup('<h4>EMEF RAQUEL DE CASTRO FERREIRA</h4>')
    .openPopup(),

  L.marker([-23.971411900373226, -46.39278112418262])
    .bindPopup('<h4>EMEF. REPÚBLICA DE PORTUGAL</h4>')
    .openPopup(),

  L.marker([-23.98766253383847, -46.392845770202484])
    .bindPopup('<h4>EMEI. MARIA MATHILDE DE SANTANA</h4>')
    .openPopup(),

  L.marker([-23.961421967612488, -46.36942867021354])
    .bindPopup('<h4>EMEI. PROF. EDMUNDO CAPELLARI</h4>')
    .openPopup(),

  L.marker([-23.961515413961056, -46.40628513059977])
    .bindPopup('<h4>EMEI PROFA. EULINA TRINDADE</h4>')
    .openPopup(),

  L.marker([-23.967511184482785, -46.40881030360994])
    .bindPopup('<h4>EMEI. PROVÍNCIA DE OKINAWA</h4>')
    .openPopup(),

  L.marker([-23.969425670061806, -46.39189007477478])
    .bindPopup('<h4>Escola Henrique Oswald</h4>')
    .openPopup(),

  L.marker([-23.965147072691458, -46.3835947036099])
    .bindPopup('<h4>ETEC Dra. Ruth Cardoso</h4>')
    .openPopup(),

  L.marker([-23.967624358296337, -46.37848953244499])
    .bindPopup('<h4>ESCOLA TÉCNICA FORTEC</h4>')
    .openPopup(),

  L.marker([-23.96966555579966, -46.369747918949905])
    .bindPopup('<h4>Escola Verde</h4>')
    .openPopup(),

  L.marker([-23.964206164476167, -46.39129796127999])
    .bindPopup('<h4>FACULDADE UNIBR	</h4>')
    .openPopup(),

  L.marker([-23.969744480899845, -46.37301317477472])
    .bindPopup('<h4>OBJETIVO - ASSOCIAÇÃO DE PESQUISA E ENSINO DO LITORAL</h4>')
    .openPopup(),

  L.marker([-23.965355167329186, -46.38182975870591])
    .bindPopup('<h4>Colégio Batista da Primeira</h4>')
    .openPopup(),

  //Zona 340

  L.marker([-23.949834243738007, -46.39804290496741])
    .bindPopup('<h4>Escola Estadual Armando Victório Bei</h4>')
    .openPopup(),

  L.marker([-23.94933105369089, -46.403900360787446])
    .bindPopup('<h4>E. E. Dep. Antônio Moreira Coelho</h4>')
    .openPopup(),

  L.marker([-23.963667656184416, -46.471368087770855])
    .bindPopup('<h4>Cdp Luís César lacerda</h4>')
    .openPopup(),

  L.marker([-23.976847560160348, -46.477741647294714])
    .bindPopup('<h4>E.E. ESMERALDO SOARES TARQUÍNIO DE CAMPOS FILHO</h4>')
    .openPopup(),

  L.marker([-23.982044165962364, -46.49470611845839])
    .bindPopup('<h4>E.E. Governador Mário Covas Júnior</h4>')
    .openPopup(),

  L.marker([-23.94051650771244, -46.41788437613171])
    .bindPopup('<h4>Ee Pastor Alberto Augusto</h4>')
    .openPopup(),

  L.marker([-23.957355739273353, -46.393011431951024])
    .bindPopup('<h4>Ee Prof Jose Nigro</h4>')
    .openPopup(),

  L.marker([-23.95096766976344, -46.45460561845936])
    .bindPopup('<h4>Escola Estadual Albino Luiz Caldas</h4>')
    .openPopup(),

  L.marker([-23.956876479920293, -46.380264758935084])
    .bindPopup('<h4>Ee Professor Dr Osvaldo Santos Soares</h4>')
    .openPopup(),

  L.marker([-23.939991737758678, -46.4078215031156])
    .bindPopup('<h4>E. E. Profº Enio Vilas Boas</h4>')
    .openPopup(),

  L.marker([-23.985139359124954, -46.490485457672044])
    .bindPopup('<h4>Escola Estadual José de Almeida Pinheiro Junior</h4>')
    .openPopup(),

  L.marker([-23.953365131421194, -46.40117264729543])
    .bindPopup('<h4>Ee Professora Maria Dulce Mendes</h4>')
    .openPopup(),

  L.marker([-23.955460618493753, -46.41145635449468])
    .bindPopup('<h4>E.E. PROFª YOLANDA CONTE</h4>')
    .openPopup(),


  L.marker([-23.95559788378029, -46.411391981478545])
    .bindPopup('<h4>Emef Antonio Pacifico</h4>')
    .openPopup(),

  L.marker([-23.991110249373257, -46.47704858777014])
    .bindPopup('<h4>Emef Armindo Ramos</h4>')
    .openPopup(),

  L.marker([-23.95559788378029, -46.411391981478545])
    .bindPopup('<h4>Emef Antonio Pacifico</h4>')
    .openPopup(),

  L.marker([-23.99114945719214, -46.47709150311422])
    .bindPopup('<h4>Emef Augusto de Sainthillaire</h4>')
    .openPopup(),

  L.marker([-23.949935923475397, -46.45828608777121])
    .bindPopup('<h4>Emef Caic Ayrton Senna da Silva</h4>')
    .openPopup(),

  L.marker([-23.95953962788336, -46.38392868962318])
    .bindPopup('<h4>E.M.E.F. Carolina Dantas</h4>')
    .openPopup(),

  L.marker([-23.977034712514083, -46.478597253967756])
    .bindPopup('<h4>Escola Municipal Francisco Martins dos Santos</h4>')
    .openPopup(),

  L.marker([-23.943701139389887, -46.399410542327956])
    .bindPopup('<h4>E.M.E.F Manoel Nascimento Júnior</h4>')
    .openPopup(),

  L.marker([-23.95197008595406, -46.40017656078732])
    .bindPopup('<h4>Escola Municipal de Ensino Fundamental Maria de Lourdes Batista</h4>')
    .openPopup(),

  L.marker([-23.989584739053537, -46.48187797427821])
    .bindPopup('<h4>E.M.E.F Dr. Mário Covas Júnior</h4>')
    .openPopup(),

  L.marker([-23.95461875226267, -46.41070202639479])
    .bindPopup('<h4>E.M.E.F. Pastor Joaquim Rodrigues da Silva</h4>')
    .openPopup(),

  L.marker([-23.984551342831317, -46.46475900311434])
    .bindPopup('<h4>Jorge Bierrenbach Senra Prefeito Emef</h4>')
    .openPopup(),

  L.marker([-23.95559788378029, -46.411391981478545])
    .bindPopup('<h4>Emef Prefeito Jose Meirelles</h4>')
    .openPopup(),

  L.marker([-23.96100763002998, -46.38587441719623])
    .bindPopup('<h4>Escola Municipal Octavio de Cesare</h4>')
    .openPopup(),

  L.marker([-23.977348030524436, -46.456556660786546])
    .bindPopup('<h4>Emef Professor Gilson Kool Monteiro</h4>')
    .openPopup(),

  L.marker([-23.988675133968957, -46.49194191534408])
    .bindPopup('<h4>EMEIEF GILSON KOOL MONTEIRO</h4>')
    .openPopup(),

  L.marker([-23.946634504477508, -46.40655510311539])
    .bindPopup('<h4>Emef Professor Jacob Andrade Camara</h4>')
    .openPopup(),

  L.marker([-23.948617454998644, -46.461108730099205])
    .bindPopup('<h4>Escola Municipal Luiz Pinho de Carvalho Filho</h4>')
    .openPopup(),

  L.marker([-23.952467211125008, -46.3835956454432])
    .bindPopup('<h4>Emef Professor Renan Alves Leite</h4>')
    .openPopup(),

  L.marker([-23.990078945939416, -46.47639674544208])
    .bindPopup('<h4>Emef Professora Leonor Guimaraes Amado Stoffell</h4>')
    .openPopup(),

  L.marker([-23.98199883162178, -46.45340984544233])
    .bindPopup('<h4>Emef Raul Rocha do Amaral</h4>')
    .openPopup(),

  L.marker([-23.956478143190612, -46.45815240311511])
    .bindPopup('<h4>EMEIEF SAULO TARSO MARQUES DE MELO</h4>')
    .openPopup(),

  L.marker([-23.955339437741184, -46.398542080362475])
    .bindPopup('<h4>EMEF União Cívica Feminina</h4>')
    .openPopup(),

  L.marker([-23.946541441737313, -46.41699008962337])
    .bindPopup('<h4>Emef Vera Lucia Machado Massis</h4>')
    .openPopup(),

  L.marker([-23.95796769953426, -46.38309201845918])
    .bindPopup('<h4>Emei Cidade Naha</h4>')
    .openPopup(),

  L.marker([-23.942528999799347, -46.39651248777131])
    .bindPopup('<h4>Escola Municipal de Educação Infantil José Borges Fernandes</h4>')
    .openPopup(),

  L.marker([-23.951705125088324, -46.38758405893514])
    .bindPopup('<h4>E.M.E.I. Monteiro Lobato</h4>')
    .openPopup(),

  L.marker([-23.95560856364365, -46.41342678777113])
    .bindPopup('<h4>Escola Municipal Anuar Frayha</h4>')
    .openPopup(),

  L.marker([-23.977348030524436, -46.456556660786546])
    .bindPopup('<h4>Emef Antonio Pacifico</h4>')
    .openPopup(),

  L.marker([-23.950546424031852, -46.4555622607874])
    .bindPopup('<h4>EMEI Kelma Maria Toffetti Gonçalves</h4>')
    .openPopup(),

  L.marker([-23.952059905745244, -46.38161541660706])
    .bindPopup('<h4>Escola Municipal de Educação Infantil Maria G Martins Machado Profa</h4>')
    .openPopup(),

  L.marker([-23.951650205247095, -46.37802048962329])
    .bindPopup('<h4>Escola Municipal Duque de Caxias</h4>')
    .openPopup(),

  L.marker([-23.94020801460841, -46.4048811031156])
    .bindPopup('<h4>EMEIEF Mauro Aparecido de Godoy</h4>')
    .openPopup(),

  L.marker([-23.940001661120938, -46.41825900311565])
    .bindPopup('<h4>EMEIEF Pref. Sebastião Ribeiro da Silva</h4>')
    .openPopup(),

  L.marker([-23.955357314195467, -46.404579015871])
    .bindPopup('<h4>Creche Municipal Nossa Senhora de Fátima</h4>')
    .openPopup(),

  L.marker([-23.96138571999249, -46.474661626983874])
    .bindPopup('<h4>Fundação CASA Vila de São Vicente</h4>')
    .openPopup(),

  L.marker([-23.958710857964917, -46.37876117427904])
    .bindPopup('<h4>Largo Prof. Clemente Ferreira - Vila Melo</h4>')
    .openPopup(),

  L.marker([-23.977348030524436, -46.456556660786546])
    .bindPopup('<h4>Emef Antonio Pacifico</h4>')
    .openPopup(),

  L.marker([-23.987847293290162, -46.48982708406583])
    .bindPopup('<h4>Ee Prof Luiz d Aurea</h4>')
    .openPopup()

];
var layerGroupThree = L.layerGroup(marcadoresDeEscolas);
var allLayersThree = L.layerGroup([camadaMapa, layerGroupThree]);
allLayersThree.addTo(map);




//Function Exibir/Ocultar
const marcadorEscolas = document.querySelector('.dropdown-item-three');
marcadorEscolas.addEventListener('change', function () {
  if (this.checked) {
    // Mostre os marcadores que devem ser mostrados
    layerGroupThree.eachLayer(function (marker) {
      if (marker) {
        marker.addTo(map);
      }
    });
  } if (!this.checked) {
    // Esconda os marcadores que devem ser escondidos
    layerGroupThree.eachLayer(function (marker) {
      if (marker) {
        map.removeLayer(marker);
      }
    });
  }
});

//Alerta de uso
function avisoAdicionarinformacao() {
  alert('Para adiconar informações, clique sobre o marcador que deseja utilizar.')
};




//Padrão de objeto para entrada de dados

const padraoEntradaDeDados = {
  candidato: '',
  partido: '',
  votos: ''
};

//Formulário de previsão

const mostraFormularioBtn = document.getElementById('mostrar-form');
const formulario = document.querySelector('.new-data-form');


mostraFormularioBtn.addEventListener('click', function () {
  formulario.style.display = 'block';
});

const cancelBtn = document.getElementById('cancel-btn');
cancelBtn.addEventListener('click', function () {
  formulario.style.display = 'none';
});

const saveBtn = document.getElementById('send-btn');
saveBtn.addEventListener('click', function (e) {
  e.preventDefault();

})

//Captação dos values dos inputs

const inputCandidatos = document.getElementById('input-candidato');


const inputPartidos = document.getElementById('input-partido');

const inputVotos = document.getElementById('input-votos');

let markerSelecionado = null; // variável para armazenar o marker selecionado

// Seletor de markers
marcadoresDeZona.forEach(function (marker) {
  marker.on('click', function () {
    markerSelecionado = marker;
    console.log('Marker selecionado:', marker);
  });
});

marcadoresDeBairro.forEach(function (marker) {
  marker.on('click', function () {
    markerSelecionado = marker;
    console.log('Marker selecionado:', marker);
  });
});

marcadoresDeEscolas.forEach(function (marker) {
  marker.on('click', function () {
    markerSelecionado = marker;
    console.log('Marker selecionado:', marker);
  });
});
// Var para adicionar descrição 
let textoPopup = '';

function atualizarDescricao() {

  let inputRef = document.getElementById('input-ref');
  let ref = inputRef.value;
  let inputPartidos = document.getElementById('input-partido');
  let partido = inputPartidos.value;
  let inputVotos = document.getElementById('input-votos');
  let votos = inputVotos.value;
  let inputCandidatos = document.getElementById('input-candidato');
  let candidato = inputCandidatos.value;

  textoPopup += `<h4>${ref}</h4>`
  textoPopup += '<br>' + 'Candidato: ' + '<br>' + candidato + '<br>';
  // textoPopup += '<br>' + 'Partido: ' + '<br>' + partido + '<br>';
  textoPopup += '<br>' + 'Votos: ' + '<br>' + votos;


  // atualizar o conteúdo do popup
  markerSelecionado.setPopupContent(textoPopup);
  return textoPopup = '';

}


function carregaDados2020() {
  var marcadores2020 = [
    //São Vicente
    L.marker([-23.965519, -46.386695])
      .bindPopup('<h4>São Vicente: </h4><p>Total de votos: 361940 </p>')
      .openPopup(),

    //Vila Margarida
    L.marker([-23.964516, -46.403999])
      .bindPopup('<h4>Vila Margarida</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:7766<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 3674 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 2861</p>')
      .openPopup(),


    //Rio Branco
    L.marker([-23.979166, -46.479497])
      .bindPopup('<h4>Rio Branco</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:4734<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 3394 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 1956</p>')
      .openPopup(),

    //Parque das bandeiras
    L.marker([-23.983594, -46.498116])
      .bindPopup('<h4>Parque das Bandeiras</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:1960<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 1602 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 822</p>')
      .openPopup(),

    //Itararé
    L.marker([-23.966474, -46.363181])
      .bindPopup('<h4>Itararé</h4><p>KAYO FELYPE NACHTAJLER AMADO<br> Votos:1270<br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 806 <br> SOLANGE CRISTINA DE FREITAS<br> Votos: 804</p>')
      .openPopup(),

    //Catipoã
    L.marker([-23.956808, -46.387601])
      .bindPopup('<h4>Catipoã</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:3488<br>KAYO FELYPE NACHTAJLER AMADO  <br> Votos: 2657 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 1557</p>')
      .openPopup(),

    //Cidade Naútica
    L.marker([-23.941938, -46.389483])
      .bindPopup('<h4>Cidade Naútica</h4><p> KAYO FELYPE NACHTAJLER AMADO<br> Votos:2873<br> SOLANGE CRISTINA DE FREITAS  <br> Votos: 2818 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 1145</p>')
      .openPopup(),

    //Jockey clube
    L.marker([-23.943988, -46.395548])
      .bindPopup('<h4>Jockey Clube</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:5827<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 4359 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 1998</p>')
      .openPopup(),

    //Centro
    L.marker([-23.966096, -46.386634])
      .bindPopup('<h4>Centro</h4><p>KAYO FELYPE NACHTAJLER AMADO <br> Votos:4175 <br>SOLANGE CRISTINA DE FREITAS <br> Votos: 3219 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 2538</p>')
      .openPopup(),

    //Gonzaguinha
    L.marker([-23.970453, -46.384726])
      .bindPopup('<h4>Gonzaguinha</h4><p>  KAYO FELYPE NACHTAJLER AMADO<br> Votos:352 <br>SOLANGE CRISTINA DE FREITAS <br> Votos: 226 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 190</p>')
      .openPopup(),

    //Humaitá
    L.marker([-23.944540, -46.454882])
      .bindPopup('<h4>Humaitá</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:4283<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 2489 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 2043</p>')
      .openPopup(),

    //Samaritá
    L.marker([-23.993088, -46.472956])
      .bindPopup('<h4>Samaritá</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:1144<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 717 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 116</p>')
      .openPopup(),

    // //Vila ema
    // L.marker([-23.996231, -46.488980])
    //   .bindPopup('<h4>Vila Ema</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:7766<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 3674 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 2861</p>')
    //   .openPopup(),

    //Vila Nova São Vicente
    L.marker([-23.988339, -46.489504])
      .bindPopup('<h4>Vila Nova São Vicente</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:862<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 776 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 326</p>')
      .openPopup(),

    //Vila Ponte Nova
    L.marker([-23.983501, -46.457662])
      .bindPopup('<h4>Vila Ponte Nova</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:3246<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 1285 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 1258</p>')
      .openPopup(),

    //Boa Vista
    L.marker([-23.969477402553863, -46.37284753503019])
      .bindPopup('<h4>Boa Vista</h4><p>KAYO FELYPE NACHTAJLER AMADO<br> Votos:2342<br> SOLANGE CRISTINA DE FREITAS<br> Votos: 1433 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 1196</p>')
      .openPopup(),

    // //Jardim Guaçu
    // L.marker([-23.951114, -46.379366])
    //   .bindPopup('')
    //   .openPopup(),

    //Jardim Guaçu
    L.marker([-23.969409, -46.408372])
      .bindPopup('<h4>Jardim Guaçu</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:1122<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 1035 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 489</p>')
      .openPopup(),

    //Jardim independência
    L.marker([-23.969409, -46.408372])
      .bindPopup('<h4>Jardim independência</h4><p>KAYO FELYPE NACHTAJLER AMADO<br> Votos: 1742<br> SOLANGE CRISTINA DE FREITAS <br> Votos: 1208 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 747</p>')
      .openPopup(),

    //Parque das Bandeiras
    L.marker([-23.982142897400713, -46.49845911033251])
      .bindPopup('<h4>Parque das bandeiras</h4><p> SOLANGE CRISTINA DE FREITAS<br> Votos: 1960<br> KAYO FELYPE NACHTAJLER AMADO  <br> Votos: 1602 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 747</p>')
      .openPopup(),

    // //Jardim irmã dolores
    // L.marker([-23.971633, -46.446140])
    //   .bindPopup('<h4>Jardim Irmã Dolores</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:7766<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 3674 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 2861</p>')
    //   .openPopup(),

    //Parque São Vicente
    L.marker([-23.971633, -46.446140])
      .bindPopup('<h4>Parque São Vicente</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:3750<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 3373 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 822</p>')
      .openPopup(),

    //Parque Bitaru
    L.marker([-23.96749782071182, -46.39612846406507])
      .bindPopup('<h4>Parque Bitaru</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:3581<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 3056 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 1904</p>')
      .openPopup(),

    //Vila Mateo Bei
    L.marker([-23.965041083182378, -46.40973234582089])
      .bindPopup('<h4>Vila Mateo Bei</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:1665<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 1421 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 709</p>')
      .openPopup(),

    //Parque Continental
    L.marker([-23.955022, -46.457445])
      .bindPopup('<h4>Parque Continental</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:1603<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 1060 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 777</p>')
      .openPopup(),

    //Vila Nossa Sra. de Fatima
    L.marker([-23.940555955003468, -46.41766604706549])
      .bindPopup('<h4>Vila Nossa Sra. de Fatima</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:2015<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 1602 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 802</p>')
      .openPopup(),

    //Conjunto Tancredo Neves
    L.marker([-23.950920, -46.405044])
      .bindPopup('<h4>Conjunto Tancredo Neves</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:1629<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 1384 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 561</p>')
      .openPopup(),

    //Vila Cascatinha
    L.marker([-23.956978, -46.379668])
      .bindPopup('<h4>Vila Cascatinha</h4><p>KAYO FELYPE NACHTAJLER AMADO<br> Votos:1165<br> SOLANGE CRISTINA DE FREITAS <br> Votos: 1076 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 527</p>')
      .openPopup(),

    //Jardim Independencia
    L.marker([-23.96288712164235, -46.37155729877702])
      .bindPopup('<h4>Jardim Independencia</h4><p>KAYO FELYPE NACHTAJLER AMADO<br> Votos:1742<br> SOLANGE CRISTINA DE FREITAS <br> Votos: 1208 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 747</p>')
      .openPopup(),

    // //Vila Nova Mariana
    // L.marker([-23.953869, -46.449436])
    //   .bindPopup('<h4>Vila Nova Mariana</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:7766<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 3674 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 2861</p>')
    //   .openPopup(),

    //Vila Votoruá
    L.marker([-23.958328, -46.368117])
      .bindPopup('<h4>Vila Votoruá</h4><p> KAYO FELYPE NACHTAJLER AMADO<br> Votos:306<br> SOLANGE CRISTINA DE FREITAS <br> Votos: 226 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 160</p>')
      .openPopup(),

    //Vila Sao Jorge
    L.marker([-23.955151, -46.371733])
      .bindPopup('<h4>Vila São Jorge</h4><p>KAYO FELYPE NACHTAJLER AMADO <br> Votos:1222<br> SOLANGE CRISTINA DE FREITAS  <br> Votos: 975 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 595</p>')
      .openPopup()
  ];
  var layerGroup = L.layerGroup(marcadores2020);
  var allLayers = L.layerGroup([camadaMapa, layerGroup]);
  allLayers.addTo(map);
};

// function carregaDados2016() {
//   var marcadores2016 = [
//     //São Vicente
//     L.marker([-23.965519, -46.386695])
//       .bindPopup('<h4>São Vicente: </h4><p>Total de votos: 361940 </p>')
//       .openPopup(),

//     //Vila Margarida
//     L.marker([-23.964516, -46.403999])
//       .bindPopup('<h4>Vila Margarida</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:7766<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 3674 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 2861</p>')
//       .openPopup(),


//     //Rio Branco
//     L.marker([-23.979166, -46.479497])
//       .bindPopup('<h4>Rio Branco</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:4734<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 3394 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 1956</p>')
//       .openPopup(),

//     //Parque das bandeiras
//     L.marker([-23.983594, -46.498116])
//       .bindPopup('<h4>Parque das Bandeiras</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:1960<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 1602 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 822</p>')
//       .openPopup(),

//     //Itararé
//     L.marker([-23.966474, -46.363181])
//       .bindPopup('<h4>Itararé</h4><p>KAYO FELYPE NACHTAJLER AMADO<br> Votos:1270<br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 806 <br> SOLANGE CRISTINA DE FREITAS<br> Votos: 804</p>')
//       .openPopup(),

//     //Catipoã
//     L.marker([-23.956808, -46.387601])
//       .bindPopup('<h4>Catipoã</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:3488<br>KAYO FELYPE NACHTAJLER AMADO  <br> Votos: 2657 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 1557</p>')
//       .openPopup(),

//     //Cidade Naútica
//     L.marker([-23.941938, -46.389483])
//       .bindPopup('<h4>Cidade Naútica</h4><p> KAYO FELYPE NACHTAJLER AMADO<br> Votos:2873<br> SOLANGE CRISTINA DE FREITAS  <br> Votos: 2818 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 1145</p>')
//       .openPopup(),

//     //Jockey clube
//     L.marker([-23.943988, -46.395548])
//       .bindPopup('<h4>Jockey Clube</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:5827<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 4359 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 1998</p>')
//       .openPopup(),

//     //Centro
//     L.marker([-23.966096, -46.386634])
//       .bindPopup('<h4>Centro</h4><p>KAYO FELYPE NACHTAJLER AMADO <br> Votos:4175 <br>SOLANGE CRISTINA DE FREITAS <br> Votos: 3219 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 2538</p>')
//       .openPopup(),

//     //Gonzaguinha
//     L.marker([-23.970453, -46.384726])
//       .bindPopup('<h4>Gonzaguinha</h4><p>  KAYO FELYPE NACHTAJLER AMADO<br> Votos:352 <br>SOLANGE CRISTINA DE FREITAS <br> Votos: 226 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 190</p>')
//       .openPopup(),

//     //Humaitá
//     L.marker([-23.944540, -46.454882])
//       .bindPopup('<h4>Humaitá</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:4283<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 2489 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 2043</p>')
//       .openPopup(),

//     //Samaritá
//     L.marker([-23.993088, -46.472956])
//       .bindPopup('<h4>Samaritá</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:1144<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 717 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 116</p>')
//       .openPopup(),

//     // //Vila ema
//     // L.marker([-23.996231, -46.488980])
//     //   .bindPopup('<h4>Vila Ema</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:7766<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 3674 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 2861</p>')
//     //   .openPopup(),

//     //Vila Nova São Vicente
//     L.marker([-23.988339, -46.489504])
//       .bindPopup('<h4>Vila Nova São Vicente</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:862<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 776 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 326</p>')
//       .openPopup(),

//     //Vila Ponte Nova
//     L.marker([-23.983501, -46.457662])
//       .bindPopup('<h4>Vila Ponte Nova</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:3246<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 1285 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 1258</p>')
//       .openPopup(),

//     //Boa Vista
//     L.marker([-23.969477402553863, -46.37284753503019])
//       .bindPopup('<h4>Boa Vista</h4><p>KAYO FELYPE NACHTAJLER AMADO<br> Votos:2342<br> SOLANGE CRISTINA DE FREITAS<br> Votos: 1433 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 1196</p>')
//       .openPopup(),

//     // //Jardim Guaçu
//     // L.marker([-23.951114, -46.379366])
//     //   .bindPopup('')
//     //   .openPopup(),

//     //Jardim Guaçu
//     L.marker([-23.969409, -46.408372])
//       .bindPopup('<h4>Jardim Guaçu</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:1122<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 1035 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 489</p>')
//       .openPopup(),

//     //Jardim independência
//     L.marker([-23.969409, -46.408372])
//       .bindPopup('<h4>Jardim independência</h4><p>KAYO FELYPE NACHTAJLER AMADO<br> Votos: 1742<br> SOLANGE CRISTINA DE FREITAS <br> Votos: 1208 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 747</p>')
//       .openPopup(),

//     //Parque das Bandeiras
//     L.marker([-23.982142897400713, -46.49845911033251])
//       .bindPopup('<h4>Parque das bandeiras</h4><p> SOLANGE CRISTINA DE FREITAS<br> Votos: 1960<br> KAYO FELYPE NACHTAJLER AMADO  <br> Votos: 1602 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 747</p>')
//       .openPopup(),

//     // //Jardim irmã dolores
//     // L.marker([-23.971633, -46.446140])
//     //   .bindPopup('<h4>Jardim Irmã Dolores</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:7766<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 3674 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 2861</p>')
//     //   .openPopup(),

//     //Parque São Vicente
//     L.marker([-23.971633, -46.446140])
//       .bindPopup('<h4>Parque São Vicente</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:3750<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 3373 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 822</p>')
//       .openPopup(),

//     //Parque Bitaru
//     L.marker([-23.96749782071182, -46.39612846406507])
//       .bindPopup('<h4>Parque Bitaru</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:3581<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 3056 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 1904</p>')
//       .openPopup(),

//     //Vila Mateo Bei
//     L.marker([-23.965041083182378, -46.40973234582089])
//       .bindPopup('<h4>Vila Mateo Bei</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:1665<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 1421 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 709</p>')
//       .openPopup(),

//     //Parque Continental
//     L.marker([-23.955022, -46.457445])
//       .bindPopup('<h4>Parque Continental</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:1603<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 1060 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 777</p>')
//       .openPopup(),

//     //Vila Nossa Sra. de Fatima
//     L.marker([-23.940555955003468, -46.41766604706549])
//       .bindPopup('<h4>Vila Nossa Sra. de Fatima</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:2015<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 1602 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 802</p>')
//       .openPopup(),

//     //Conjunto Tancredo Neves
//     L.marker([-23.950920, -46.405044])
//       .bindPopup('<h4>Conjunto Tancredo Neves</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:1629<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 1384 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 561</p>')
//       .openPopup(),

//     //Vila Cascatinha
//     L.marker([-23.956978, -46.379668])
//       .bindPopup('<h4>Vila Cascatinha</h4><p>KAYO FELYPE NACHTAJLER AMADO<br> Votos:1165<br> SOLANGE CRISTINA DE FREITAS <br> Votos: 1076 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 527</p>')
//       .openPopup(),

//     //Jardim Independencia
//     L.marker([-23.96288712164235, -46.37155729877702])
//       .bindPopup('<h4>Jardim Independencia</h4><p>KAYO FELYPE NACHTAJLER AMADO<br> Votos:1742<br> SOLANGE CRISTINA DE FREITAS <br> Votos: 1208 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 747</p>')
//       .openPopup(),

//     // //Vila Nova Mariana
//     // L.marker([-23.953869, -46.449436])
//     //   .bindPopup('<h4>Vila Nova Mariana</h4><p>SOLANGE CRISTINA DE FREITAS<br> Votos:7766<br> KAYO FELYPE NACHTAJLER AMADO <br> Votos: 3674 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 2861</p>')
//     //   .openPopup(),

//     //Vila Votoruá
//     L.marker([-23.958328, -46.368117])
//       .bindPopup('<h4>Vila Votoruá</h4><p> KAYO FELYPE NACHTAJLER AMADO<br> Votos:306<br> SOLANGE CRISTINA DE FREITAS <br> Votos: 226 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 160</p>')
//       .openPopup(),

//     //Vila Sao Jorge
//     L.marker([-23.955151, -46.371733])
//       .bindPopup('<h4>Vila São Jorge</h4><p>KAYO FELYPE NACHTAJLER AMADO <br> Votos:1222<br> SOLANGE CRISTINA DE FREITAS  <br> Votos: 975 <br> PEDRO LUÍS DE FREITAS GOUVÊA JUNIOR<br> Votos: 595</p>')
//       .openPopup()
//   ];
//   var layerGroup = L.layerGroup(marcadores2016);
//   var allLayers = L.layerGroup([camadaMapa, layerGroup]);
//   allLayers.addTo(map);
// };




























