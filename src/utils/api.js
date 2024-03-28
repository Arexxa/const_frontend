// const baseUrl = () => {
//   switch (window.location.hostname) {
//     case "localhost":
//       return "https://secure.horuzmarkets.com";

//     // WARNING: DO NOT TOUCH THE CODE BELOW THIS LINE!!!

//     case "secure.horuzmarkets.com":
//     case "horuz-cabinet-frontend.vercel.app":
//       return "https://secure.horuzmarkets.com";
//     default:
//       return null;
//     // WARNING: DO NOT TOUCH THE CODE ABOVE THIS LINE!!!
//   }
// };

// export default baseUrl();

import axios from 'axios';

const baseUrl = axios.create({
  baseURL: 'http://localhost:3000', // Update with your API base URL
});

export default baseUrl;