const TelegramApi = require('node-telegram-bot-api');
const token = '5869805416:AAEeqaiPPunq-rt4of8-T57SY7rHDsh_8WM';
const bot = new TelegramApi(token, {polling: true}); 
const axios = require('axios');
CHAT_ID = "-785368621";
const uri_api = `https://api.telegram.org/bot${ token }/sendMessage`;

const sayHi = async (chatId) => {
    await bot.sendMessage(chatId, 'Вітаю, коли світло зникне я вас повідомлю');
};

const chat = [];
let marker = false;

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Начать'},
        {command: '/contacts', description: 'Контакты нашего консультанта'},
        {command: '/record', description: 'Запись на консультацию'},
        {command: '/again', description: 'Начать заново'}
    ])

//save Name answer
let FIO;     
    
//bot react when writing
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
//Itaration ONE
        if(text === '/start') {
            marker = false;
            await bot.sendMessage(chatId, 'Добро пожаловать');
            return bot.sendMessage(chatId, 'Введите пожалуйста свое имя фамилию и отчество');
        }
})
};

start();


const sendAlert = async (powerStatus) => {
    if (powerStatus) {
        // await bot.sendMessage(chatId, `Світло з'явилося пора додому`);
        console.log("Світло з'явилося пора додому")
    } else if (powerStatus === false) {
        console.log('Світло зникло')
    }
};
sendAlert(powerStatus);