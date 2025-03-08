import { ProductPricingAndConfigurationService } from '@/services/product-pricing-and-configuration.js';
import { ProductService } from '@/services/product.js';
import { MediaService } from '@/services/media.js';
import { configDotenv } from 'dotenv';

configDotenv();

const ppcs = new ProductPricingAndConfigurationService();
const mediaContentService = new MediaService();
const productService = new ProductService();

const sellableProducts = await productService.getProductSellable({
  company: 'HIT',
  apiVersion: '2.0.0',
  userId: process.env.HIT_ID!,
  password: process.env.HIT_PASSWORD!,
});

console.log(sellableProducts);