function funcao(){

  var idade = parseInt(document.getElementById("idade").value);
  var nome = document.getElementById("nome").value;

  let img = document.createElement('img')
  img.src = "https://d2r9epyceweg5n.cloudfront.net/apps/955-pt_BR-small-Logo%20560x560.png";
  img.style = " width: 100vw";

  let img2 = document.createElement('img')
  img2.src = "https://images.emojiterra.com/google/android-pie/512px/1f51e.png";
  img2.style = "width: 100vw";

  if(idade > 18){
    document.write("<h1 style='display: flex;justify-content: center; margin-top: 5vh;'>"+nome+", você é maior de idade!</h1><br>");
    document.body.appendChild(img);

  }else{
    document.write("<h1 style='display: flex;justify-content: center; margin-top: 5vh;'>"+nome+", você é menor de idade!</h1><br>");
    document.body.appendChild(img2);
  }
}
