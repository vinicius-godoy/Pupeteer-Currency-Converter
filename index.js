const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log('Bot Conversor de Moedas');

async function bot(){
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const baseCurrency = readlineSync.question('Informe uma moeda base: ') || 'dolar';
  const finalCurrency = readlineSync.question('Informe uma moeda desejada: ') || 'real';
  const converterUrl = `https://www.google.com/search?q=${baseCurrency}+para+${finalCurrency}&rlz=1C1CHZL_pt-BRBR806BR806&oq=${baseCurrency}+para+${finalCurrency}&aqs=chrome..69i57j35i39j0i131i433l2j0i433j0i131i433j0j0i433l3.2799j0j7&sourceid=chrome&ie=UTF-8`;
  await page.goto(converterUrl);

  const result = await page.evaluate(() => {
    return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
  })

  console.log(`O valor de 1 ${baseCurrency} em ${finalCurrency} é ${result}`)
  await browser.close();
}

bot();