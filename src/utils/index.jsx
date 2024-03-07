import axios from 'axios'

const productionUrl = 'https://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format((price / 100).toFixed(2))
  return dollarsAmount
};

export const OptionsList = ( {number}) => {
  const options = [];
  for (let i = 1; i <= number; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return options;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    )
  })
}



