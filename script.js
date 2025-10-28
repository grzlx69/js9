function greetings() {
    let name = prompt("Как вас зовут?");
    console.log("Привет, " + name);
};
greetings();

function computer_information(cpu,gpu,memory){
    console.log(`У тебя стоит процессор ${cpu} Видеокарта ${gpu} Оперативная память ${memory}`)
};

computer_information("intel i5 12400F", "RTX 3060", "32gb");

let normal_temperature = 0;
let bad_temperature = 0;

let timer_id = setInterval(() => {
    let random_temperature = Math.random() * (100 - 35) + 35;
    if (random_temperature <80 ){
        normal_temperature++
    }else{
        bad_temperature++
    }
}, 1000);


function undervoltGPU(gpu_model = "RTX 3060") {
    console.log(`Давайте андервольтнем вашу видеокарту ${gpu_model}`)
    let voltage = 1;
    let frequency = 1900; 
    let gpuTemperature = 70;
    let variant = 1;
    while (variant > 0){
        variant = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
        voltage -= 0.025;
        gpuTemperature -= 2;
    }
    console.log(`Вот чего мы добились при андервольтинге:`)
    console.log(`Вольтаж: ${voltage} Температура: ${gpuTemperature} Частота: ${frequency}Mhz`)
}

function cleanComputer(){
    console.log("Мы почистили ваш компьютьер и поменяли термопасту, вы полностью готовы покорять новые игры!");
}

setTimeout(() => {
    clearInterval(timer_id);
    console.log("Результат проверки процессора:");
    console.log(`Нормальная температура: ${normal_temperature} раз`);
    console.log(`Высокая температура: ${bad_temperature} раз`);
    let result = normal_temperature > bad_temperature ? "С процессором всё хорошо!" : "С процессором что то не так.";
    alert(result);

    undervoltGPU()
    let user_confirm = confirm("Хотите почистим ваш компьютер?");

    if (user_confirm){
        console.log("Очистка началась...");
        setTimeout(() => {
            cleanComputer();
        }, 5000);
    }else{
        console.log("Всего хорошего")
    }
}, 20000);





