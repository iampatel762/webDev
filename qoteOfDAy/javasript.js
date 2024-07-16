const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiUrl= "https://zenquotes.io/api/random";

async function getapi(url)
{
  const response = await fetch(url ,{mode:'no-cors'});
  var data = await response.txt();
  console.log(data);
}

getapi(apiUrl);

// async function getApi(url) {
//     try {
//         const response = await fetch(url, { mode: 'no-cors' });
//         const data = await response.text(); // Reading the response as text due to 'no-cors'
//         console.log(data);
//         // Handle the received data as needed
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
// getApi(apiUrl);