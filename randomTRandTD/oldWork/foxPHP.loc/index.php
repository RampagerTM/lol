<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document che za ment111</title>
</head>
<style>
    body{
    width: 100%;
    height: 100%;
}
table{
    border: 3px solid black;
    width: 400px;
    height: 400px;
}
form{
    position: absolute;
    top: 50px;
    left: 50px;
}
tr{
    border: 3px solid black;
    height: 50px;
    width: 400px;
}
td{
    border: 3px solid black;
    height: 50px;
    width: 50px;
}
</style>
<body>
    <h1 id="timer">0</h1>
    <form action="">       
        <input type="number" id="minNum" placeholder="min"><br><br>
        <input type="number" id="maxNum" placeholder="max">
        <input type="button" value="OK" id="kokkk">
    </form>
</body>
<script>
    function randomizer(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function endGame(){
        timmer = clearInterval(timeScore); //console.log(timer.innerHTML);
        
    }
    function tablesCrafter(num){
        let table = document.createElement('table');
            for (let i = 0; i < num; i++) {
                let tr = document.createElement('tr');
                for (let j = 0; j < num; j++) {
                    let td = document.createElement('td');
                    td.addEventListener('click', ()=> {
                        if(td.value.lenght == 0){
                            td.textContent = score;
                            score++;
                            if(score == ranNum*ranNum){
                                endGame();
                            }
                        }
                    });
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
            document.body.appendChild(table);
    }
    let min = document.getElementById('minNum');
    let max = document.getElementById('maxNum');
    let okay = document.getElementById('kokkk');
    let form = document.querySelector('form');
    let timer = document.getElementById('timer');
    let ranNum = 12;
    let score = 0;
    let timeScore = null; 
    let timmer = null;
    okay.addEventListener('click', () =>{
        if(min.value <= max.value){
            form.style.display = 'none';
            timeScore = setInterval(()=>{
                timer.innerHTML = Number(timer.innerHTML)+1;
            }, 1000);
            ranNum = randomizer(Number(min.value), Number(max.value));
            tablesCrafter(ranNum);
        }
        else if(min.value > max.value){
            alert('введи нормально олух');
        }
    });


</script>
</html>