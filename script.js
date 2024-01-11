document.getElementById('calculateButton').addEventListener('click', function() {
    var usdAmount = document.getElementById('usdAmount').value;
    fetchCryptoPrices(usdAmount, displayCryptoResults);
});

document.getElementById('calculateUsdButton').addEventListener('click', function() {
    fetchCryptoPrices(null, displayUsdResults);
});

function fetchCryptoPrices(usdAmount, callback) {
    console.log("fetchCryptoPrices called with USD amount:", usdAmount);

    var api_url = 'https://api.coingecko.com/api/v3/simple/price';
    var ids = 'bitcoin,ethereum,avalanche-2,litecoin';
    var vs_currencies = 'usd';
    var url = `${api_url}?ids=${ids}&vs_currencies=${vs_currencies}`;

    console.log("Fetching from URL:", url);

    fetch(url)
    .then(response => {
        console.log("API Response:", response);
        return response.json();
    })
    .then(data => {
        console.log("Data received:", data);
        callback(usdAmount, data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function displayCryptoResults(usdAmount, data) {
    var btcPrice = data.bitcoin.usd;
    var ethPrice = data.ethereum.usd;
    var avaxPrice = data['avalanche-2'].usd;
    var ltcPrice = data.litecoin.usd;

    document.getElementById('btcAmount').textContent = (usdAmount / btcPrice).toFixed(6);
    document.getElementById('ethAmount').textContent = (usdAmount / ethPrice).toFixed(6);
    document.getElementById('avaxAmount').textContent = (usdAmount / avaxPrice).toFixed(6);
    document.getElementById('ltcAmount').textContent = (usdAmount / ltcPrice).toFixed(6);
}

function displayUsdResults(_, data) {
    var btcAmount = document.getElementById('btcAmountInput').value || 0;
    var ethAmount = document.getElementById('ethAmountInput').value || 0;
    var avaxAmount = document.getElementById('avaxAmountInput').value || 0;
    var ltcAmount = document.getElementById('ltcAmountInput').value || 0;

    var usdEquivalent = btcAmount * data.bitcoin.usd + 
                        ethAmount * data.ethereum.usd + 
                        avaxAmount * data['avalanche-2'].usd + 
                        ltcAmount * data.litecoin.usd;

    document.getElementById('usdEquivalent').textContent = usdEquivalent.toFixed(2);
}
