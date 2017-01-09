var soma_res;

function soma(a, b){
    soma_res = a + b;
}
soma(prompt("Primeiro argumento da soma: "), prompt("Segundo argumento da soma: "));

if (confirm("Quer saber o resultado?"))
    alert(soma_res);
else
{
    alert("OK.");
}

while(true){
    alert("Now you are locked for all of eternity.");
}
