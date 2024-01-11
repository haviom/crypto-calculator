document.getElementById('calculateButton').addEventListener('click', function() {
    var usdAmount = document.getElementById('usdAmount').value;
    fetchCryptoPrices(usdAmount);
});

function fetchCryptoPrices(usdAmount) {
    console.log("fetchCryptoPrices called with USD amount:", usdAmount); // Debugging line

    var api_key = '2ba4492f-4a8c-4131-9b13-9945c7f925e0';
    var api_url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest';
    var symbols = 'BTC,ETH,AVAX,LTC';
    var url = api_url + '?symbol=' + symbols + '&convert=USD';

    console.log("Fetching from URL:", url); // Debugging line

    fetch(url, {
        method: 'GET',
        headers: {
            'X-CMC_PRO_API_KEY': api_key
        }
    })
    .then(response => {
        console.log("API Response:", response); // Debugging line
        return response.json();
    })
    .then(data => {
        console.log("Data received:", data); // Debugging line
        displayResults(usdAmount, data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function displayResults(usdAmount, data) {
    var btcPrice = data.data.BTC.quote.USD.price;
    var ethPrice = data.data.ETH.quote.USD.price;
    var avaxPrice = data.data.AVAX.quote.USD.price;
    var ltcPrice = data.data.LTC.quote.USD.price;

    document.getElementById('btcAmount').textContent = (usdAmount / btcPrice).toFixed(6);
    document.getElementById('ethAmount').textContent = (usdAmount / ethPrice).toFixed(6);
    document.getElementById('avaxAmount').textContent = (usdAmount / avaxPrice).toFixed(6);
    document.getElementById('ltcAmount').textContent = (usdAmount / ltcPrice).toFixed(6);
}
