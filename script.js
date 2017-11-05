var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var canvas1 = document.getElementById('canvas1');
var ctx1 = canvas1.getContext('2d');

var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');

var canvas3 = document.getElementById('canvas3');
var ctx3 = canvas3.getContext('2d');

function resizeCanvas() {
  canvas.width = parseFloat((window.getComputedStyle(canvas).width));
  canvas.height = parseFloat((window.getComputedStyle(canvas).height));

  canvas1.width = parseFloat((window.getComputedStyle(canvas1).width));
  canvas1.height = parseFloat((window.getComputedStyle(canvas1).height));

  canvas2.width = parseFloat((window.getComputedStyle(canvas2).width));
  canvas2.height = parseFloat((window.getComputedStyle(canvas2).height));

  canvas3.width = parseFloat((window.getComputedStyle(canvas3).width));
  canvas3.height = parseFloat((window.getComputedStyle(canvas3).height));
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);

  poligonalControle = document.getElementById("poligonalControle").checked;
  pontosControle = document.getElementById("pontosControle").checked;
  curvaBezier = document.getElementById("curvaBezier").checked;
  textos = document.getElementById("textos").checked;

  Eixo();
  if(textos){
  	Textos();
  }
  if(pontosControle){
    PontosControle();
  }
  if(poligonalControle){
    PoligonalControle();
  }
  if(curvaBezier){
    CurvaBezier();
  }
}

function Textos(){

  if(points.length === 0){
  	ctx.font= "30px Georgia";
    ctx.fillText("Derivadas das Curvas de Bezier", canvas.width/2, canvas.height/2 - 50);
  	ctx.font= "15px Georgia";
    ctx.fillText("Insira seus pontos aqui", canvas.width/2, canvas.height/2 + 50);
    ctx.fillStyle = "gray";
    ctx.textAlign = "center";
  }

  ctx1.font= "15px Georgia";
  ctx1.fillText(" Derivada 1", 0, canvas.height-10);
  ctx1.fillText("1:" + tam1, canvas.width-30, canvas.height-10);

  ctx2.font= "15px Georgia";
  ctx2.fillText(" Derivada 2", 0, canvas.height-10);
  ctx2.fillText("1:" + tam2, canvas.width-30, canvas.height-10);

  ctx3.font= "15px Georgia";
  ctx3.fillText(" Derivada 3", 0, canvas.height-10);
  ctx3.fillText("1:" + tam3, canvas.width-30, canvas.height-10);
}

function Eixo(){
  ctx1.beginPath();
  ctx1.strokeStyle = 'black';
  ctx1.lineWidth = 1;
  ctx1.moveTo(canvas1.width/2,0);
  ctx1.lineTo(canvas1.width/2,canvas1.height);
  ctx1.moveTo(0, canvas1.height/2);
  ctx1.lineTo(canvas1.width,canvas1.height/2);
  ctx1.stroke();

  ctx2.beginPath();
  ctx2.strokeStyle = 'black';
  ctx2.lineWidth = 1;
  ctx2.moveTo(canvas2.width/2,0);
  ctx2.lineTo(canvas2.width/2,canvas2.height);
  ctx2.moveTo(0, canvas2.height/2);
  ctx2.lineTo(canvas2.width,canvas2.height/2);
  ctx2.stroke();

  ctx3.beginPath();
  ctx3.strokeStyle = 'black';
  ctx3.lineWidth = 1;
  ctx3.moveTo(canvas3.width/2,0);
  ctx3.lineTo(canvas3.width/2,canvas3.height);
  ctx3.moveTo(0, canvas3.height/2);
  ctx3.lineTo(canvas3.width,canvas3.height/2);
  ctx3.stroke();
}

function PontosControle() {
  
  for (var i in points) {
    ctx.beginPath();
    ctx.arc(points[i].x, points[i].y, 3, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
  }

  var tam1Aux = false;
  for(var i in points1) {
    if ((Math.abs(points1[i].x) > canvas.width/2 || Math.abs(points1[i].y) > canvas.height/2) && tam1 === 1) {
      tam1 = 2;
      draw();
    }
    if (tam1 === 2 && (Math.abs(points1[i].x) > canvas.width/2 || Math.abs(points1[i].y) > canvas.height/2)){
      tam1Aux = true;
    } 
    ctx1.beginPath();
    ctx1.arc((points1[i].x/tam1) + (canvas1.width/2), (points1[i].y/tam1) + (canvas1.height/2), 3, 0, 2 * Math.PI);
    ctx1.fillStyle = 'black';
    ctx1.fill();
  }
  if (tam1Aux === false && tam1 === 2) {
      tam1 = 1;
      draw();
  }
 

  var tam2Aux = false;
  for(var i in points2) {
  	if((Math.abs(points2[i].x) > canvas.width || Math.abs(points2[i].y) > canvas.height) && tam2 === 2){
  	  tam2 = 4;
  	  draw();
  	}else if ((Math.abs(points2[i].x) > canvas.width/2 || Math.abs(points2[i].y) > canvas.height/2) && tam2 === 1) {
      tam2 = 2;
      draw();
    }
    if(tam2 === 4 && (Math.abs(points2[i].x) > canvas.width || Math.abs(points2[i].y) > canvas.height)){
      tam2Aux = true;
    } else if (tam2 === 2 && (Math.abs(points2[i].x) > canvas.width/2 || Math.abs(points2[i].y) > canvas.height/2)){
      tam2Aux = true;
    } 
    ctx2.beginPath();
    ctx2.arc((points2[i].x/tam2) + (canvas2.width/2), (points2[i].y/tam2) + (canvas2.height/2), 3, 0, 2 * Math.PI);
    ctx2.fillStyle = 'black';
    ctx2.fill();
  }
  if(tam2Aux === false && tam2 === 4){
  	  tam2 = 2;
  	  draw();
  } else if (tam2Aux === false && tam2 === 2) {
      tam2 = 1;
      draw();
  }
 
  var tam3Aux = false;
  for(var i in points3) {
  	if((Math.abs(points3[i].x) > canvas.width*2 || Math.abs(points3[i].y) > canvas.height*2) && tam3 === 4){
  	  tam3 = 8;
  	  draw();
  	} else if ((Math.abs(points3[i].x) > canvas.width || Math.abs(points3[i].y) > canvas.height) && tam3 === 2){
  	  tam3 = 4;
  	  draw();
  	} else  if ((Math.abs(points3[i].x) > canvas.width/2 || Math.abs(points3[i].y) > canvas.height/2) && tam3 === 1) {
      tam3 = 2;
      draw();
    }
    if (tam3 === 8 && (Math.abs(points3[i].x) > canvas.width*2 || Math.abs(points3[i].y) > canvas.height*2)){
      tam3Aux = true;
    } else if(tam3 === 4 && (Math.abs(points3[i].x) > canvas.width || Math.abs(points3[i].y) > canvas.height)){
      tam3Aux = true;
    } else if (tam3 === 2 && (Math.abs(points3[i].x) > canvas.width/2 || Math.abs(points3[i].y) > canvas.height/2)){
      tam3Aux = true;
    } 
    ctx3.beginPath();
    ctx3.arc((points3[i].x/tam3) + (canvas3.width/2), (points3[i].y/tam3) + (canvas3.height/2), 3, 0, 2 * Math.PI);
    ctx3.fillStyle = 'black';
    ctx3.fill();
  }
  if(tam3Aux === false && tam3 === 8){
  	  tam3 = 4;
  	  draw();
  } else if (tam3Aux === false && tam3 === 4){
  	  tam3 = 2;
  	  draw();
  } else if (tam3Aux === false && tam3 === 2) {
      tam3 = 1;
      draw();
  }
  
}

function PoligonalControle() {
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  ctx.moveTo(points[0].x, points[0].y);
  for(var i in points) {
    if (i === 0) {
      ctx.moveTo(points[i].x, points[i].y);
    } else {
      ctx.lineTo(points[i].x, points[i].y);
      ctx.moveTo(points[i].x, points[i].y);
    }
  }
  ctx.stroke();

  ctx1.beginPath();
  ctx1.strokeStyle = 'black';
  ctx1.lineWidth = 1;
  for(var i in points1) {
    if (i === 0) {
      ctx1.moveTo(points1[i].x/tam1 + canvas1.width/2, points1[i].y/tam1 + canvas1.height/2);
    } else {
      ctx1.lineTo(points1[i].x/tam1 + canvas1.width/2, points1[i].y/tam1 + canvas1.height/2);
      ctx1.moveTo(points1[i].x/tam1 + canvas1.width/2, points1[i].y/tam1 + canvas1.height/2);
    }
  }
  ctx1.stroke();

  ctx2.beginPath();
  ctx2.strokeStyle = 'black';
  ctx2.lineWidth = 1;
  for(var i in points2) {
    if (i === 0) {
      ctx2.moveTo(points2[i].x/tam2 + canvas2.width/2, points2[i].y/tam2 + canvas2.height/2);
    } else {
      ctx2.lineTo(points2[i].x/tam2 + canvas2.width/2, points2[i].y/tam2 + canvas2.height/2);
      ctx2.moveTo(points2[i].x/tam2 + canvas2.width/2, points2[i].y/tam2 + canvas2.height/2);
    }
  }
  ctx2.stroke();

  ctx3.beginPath();
  ctx3.strokeStyle = 'black';
  ctx3.lineWidth = 1;
  for(var i in points3) {
    if (i === 0) {
      ctx3.moveTo(points3[i].x/tam3 + canvas3.width/2, points3[i].y/tam3 + canvas3.height/2);
    } else {
      ctx3.lineTo(points3[i].x/tam3 + canvas3.width/2, points3[i].y/tam3 + canvas3.height/2);
      ctx3.moveTo(points3[i].x/tam3 + canvas3.width/2, points3[i].y/tam3 + canvas3.height/2);
    }
  }
  ctx3.stroke();
}

function CurvaBezier() {
  ctx.beginPath();
  ctx.strokeStyle = '#005c99';
  ctx.lineWidth = 1;
  for(var i in Curva) {
    if (i === 0) {
      ctx.moveTo(Curva[i].x, Curva[i].y);
    } else {
      ctx.lineTo(Curva[i].x, Curva[i].y);
      ctx.moveTo(Curva[i].x, Curva[i].y);
    }
  }
  ctx.stroke();

  ctx1.beginPath();
  ctx1.strokeStyle = '#005c99';
  ctx1.lineWidth = 1;
  for(var i in Curva1) {
    if (i === 0) {
      ctx1.moveTo(Curva1[i].x/tam1 + canvas1.width/2, Curva1[i].y/tam1 + canvas1.height/2);
    } else {
      ctx1.lineTo(Curva1[i].x/tam1 + canvas1.width/2, Curva1[i].y/tam1 + canvas1.height/2);
      ctx1.moveTo(Curva1[i].x/tam1 + canvas1.width/2, Curva1[i].y/tam1 + canvas1.height/2);
    }
  }
  ctx1.stroke();

  ctx2.beginPath();
  ctx2.strokeStyle = '#005c99';
  ctx2.lineWidth = 1;
  for(var i in Curva2) {
    if (i === 0) {
      ctx2.moveTo(Curva2[i].x/tam2 + canvas2.width/2, Curva2[i].y/tam2 + canvas2.height/2);
    } else {
      ctx2.lineTo(Curva2[i].x/tam2 + canvas2.width/2, Curva2[i].y/tam2 + canvas2.height/2);
      ctx2.moveTo(Curva2[i].x/tam2 + canvas2.width/2, Curva2[i].y/tam2 + canvas2.height/2);
    }
  }
  ctx2.stroke();

  ctx3.beginPath();
  ctx3.strokeStyle = '#005c99';
  ctx3.lineWidth = 1;
  for(var i in Curva3) {
    if (i === 0) {
      ctx3.moveTo(Curva3[i].x/tam3 + canvas3.width/2, Curva3[i].y/tam3 + canvas3.height/2);
    } else {
      ctx3.lineTo(Curva3[i].x/tam3 + canvas3.width/2, Curva3[i].y/tam3 + canvas3.height/2);
      ctx3.moveTo(Curva3[i].x/tam3 + canvas3.width/2, Curva3[i].y/tam3 + canvas3.height/2);
    }
  }
  ctx3.stroke();
}

function getIndex(click) {
  for (var i in points) {
    if (dist(points[i], click) <= 5) {
      return i;
    }
  }
  return -1;
}

function dist(p1, p2) {
  var v = {x: p1.x - p2.x, y: p1.y - p2.y};
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

function Delta3(b3, b2, b1, b0){
  var auxX = (b3.x - (3*b2.x) + (3*b1.x) - b0.x);
  var auxY = (b3.y - (3*b2.y) + (3*b1.y) - b0.y);
  var Total = {x: auxX, y: auxY};
  return Total;
}

function Delta2(b2, b1, b0){
  var auxX = ((b2.x - (2*b1.x)) + b0.x);
  var auxY = ((b2.y - (2*b1.y)) + b0.y);
  var Total = {x: auxX, y: auxY};
  return Total;
}

function Delta1(b1, b0){
  var auxX = (b1.x - b0.x);
  var auxY = (b1.y - b0.y);
  var Total = {x: auxX, y: auxY};
  return Total;
}

function Derivadas (){
  var max = points.length;
  points1.length = 0;
  points2.length = 0;
  points3.length = 0;
  for(var i in points){ 
    if(i > 0 && i < max){
      points1[i-1] = Delta1(points[i], points[i-1]);
    }
    if(i > 1 && i < max){
      points2[i-2] = Delta2(points[i], points[i-1], points[i-2]);
    }
    if(i > 2 && i < max){
      points3[i-3] = Delta3(points[i], points[i-1], points[i-2], points[i-3]);
    }
  }
}

function Pontos(a, b, t){
  var auxX = (((1-t)*(a.x)) + (t*(b.x)));
  var auxY = (((1-t)*(a.y)) + (t*(b.y)));
  var Total = {x: auxX, y: auxY};
  return Total;
}

function Casteljau (t, n){
  var aux;
  var aux2;
  if(n === 2){
    aux = Pontos(pontosCurva[0], pontosCurva[1], t);
  } else {
    n = n-1;
    for(var i = 0; i < n; i++){
      aux2 = Pontos(pontosCurva[i], pontosCurva[i+1], t);
      pontosCurva[i] = {x: aux2.x, y: aux2.y}
    }
    aux = Casteljau(t, n, pontosCurva);
  }
  return aux;
}

function Casteljau1 (t, n){
  var aux;
  var aux2;
  if(n === 2){
    aux = Pontos(pontosCurva1[0], pontosCurva1[1], t);
  } else {
    n = n-1;
    for(var i = 0; i < n; i++){
      aux2 = Pontos(pontosCurva1[i], pontosCurva1[i+1], t);
      pontosCurva1[i] = {x: aux2.x, y: aux2.y}
    }
    aux = Casteljau1(t, n);
  }
  return aux;
}

function Casteljau2 (t, n){
  var aux;
  var aux2;
  if(n === 2){
    aux = Pontos(pontosCurva2[0], pontosCurva2[1], t);
  } else {
    n = n-1;
    for(var i = 0; i < n; i++){
      aux2 = Pontos(pontosCurva2[i], pontosCurva2[i+1], t);
      pontosCurva2[i] = {x: aux2.x, y: aux2.y}
    }
    aux = Casteljau2(t, n);
  }
  return aux;
}

function Casteljau3 (t, n){
  var aux;
  var aux2;
  if(n === 2){
    aux = Pontos(pontosCurva3[0], pontosCurva3[1], t);
  } else {
    n = n-1;
    for(var i = 0; i < n; i++){
      aux2 = Pontos(pontosCurva3[i], pontosCurva3[i+1], t);
      pontosCurva3[i] = {x: aux2.x, y: aux2.y}
    }
    aux = Casteljau3(t, n);
  }
  return aux;
}

function Bezier() {
  var delta;
  avaliacoes = document.getElementById("avaliacoes").value;
  Curva.length = 0;
  Curva1.length = 0;
  Curva2.length = 0;
  Curva3.length = 0;
  for (var taux = 0; taux <= avaliacoes; taux++) {
    pontosCurva = points.slice();
    Curva[taux] = (Casteljau(taux/avaliacoes, points.length));
    if(points1.length > 1){
      pontosCurva1 = points1.slice();
      Curva1[taux] = (Casteljau1(taux/avaliacoes, points1.length));
    }
    if(points2.length > 1){
      pontosCurva2 = points2.slice();
      Curva2[taux] = (Casteljau2(taux/avaliacoes, points2.length));
    }
    if(points3.length > 1){
      pontosCurva3 = points3.slice();
      Curva3[taux] = (Casteljau3(taux/avaliacoes, points3.length));
    }
  }
}

var points = [];
var points1 = [];
var points2 = [];
var points3 = [];
var move = false;
var tam1 = 1;
var tam2 = 1;
var tam3 = 1;
var index = -1;
var pontosCurva = [];
var pontosCurva1 = [];
var pontosCurva2 = [];
var pontosCurva3 = [];
var Curva = [];
var Curva1 = [];
var Curva2 = [];
var Curva3 = [];
var avaliacoes;
var pontosControle;
var poligonalControle;
var curvaBezier;
var textos;
resizeCanvas();
Eixo();

canvas.addEventListener('mousedown', e => {
  var click = {x: e.offsetX, y: e.offsetY};
  index = getIndex(click);
  if (index === -1) {
    points.push(click);
    if (points.length > 1) {
      Derivadas();
      Bezier();
    }
    draw();
  } else {
    move = true;
  }
});

canvas.addEventListener('mousemove', e => {
  if (move) {
    points[index] = {x: e.offsetX, y: e.offsetY};
    if (points.length > 1) {
      //array com os coisihas de pontos na origem
      Derivadas();
      Bezier();
    }
    draw();
  }
});

canvas.addEventListener('mouseup', e => {
  move = false;
});

canvas.addEventListener('dblclick', e => {
  if (index !== -1) {
    points.splice(index, 1);
    Curva.length = 0;
    Curva1.length = 0;
    Curva2.length = 0;
    Curva3.length = 0;
    points1.length = 0;
    points2.length = 0;
    points3.length = 0;
    if (points.length > 1) {
      Derivadas();
      Bezier();
    }
    draw();
  }
});

setInterval(() => {
  if(avaliacoes != document.getElementById("avaliacoes").value) {
    Bezier();
  }
  draw();
}, 1/300);

