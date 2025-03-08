# Promo Standards API

This codebase provides a simple way to pull data through the Promo Standards API. It includes several services to interact with different endpoints of the API.

## Getting Started

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/promostandards-api.git
    cd promostandards-api
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your Promo Standards API credentials:
    ```env
    HIT_ID=your_user_id
    HIT_PASSWORD=your_password
    ```

### Usage

The entry point of the project is `src/index.ts`. This file contains examples of how to use the services provided by the project.

To run the example:
```sh
npm start
```

### Writing Your Code

To add your data processing logic, you can modify `src/index.ts` or create new files and import the services as needed.

#### Example

Here is a simple example of how to use the `ProductService` to fetch sellable products:

```typescript
import { ProductService } from '@/services/product.js';
import { configDotenv } from 'dotenv';

configDotenv();

const productService = new ProductService();

async function fetchSellableProducts() {
  const sellableProducts = await productService.getProductSellable({
    company: 'HIT',
    apiVersion: '2.0.0',
    userId: process.env.HIT_ID!,
    password: process.env.HIT_PASSWORD!,
  });

  console.log(sellableProducts);
}

fetchSellableProducts();
```

You can add similar functions or modify the existing ones to suit your needs.

### Available Services

- `ProductService`: Interact with product-related endpoints.
- `MediaService`: Interact with media-related endpoints.
- `ProductPricingAndConfigurationService`: Interact with pricing and configuration endpoints.