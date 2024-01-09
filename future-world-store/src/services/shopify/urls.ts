import { env } from "app/config/env"

export const shopifyUrls = {
  products: {
    'all': `${env.SHOPIFY_HOSTNAME}/admin/api/${env.WEBHOOK_VERSION}/products.json`,
    mainProducts: `${env.SHOPIFY_HOSTNAME}/admin/api/${env.WEBHOOK_VERSION}/collections/${env.HOME_PAGE_COLLECTION}/products.json`,
  },
  collections: {
    'all': `${env.SHOPIFY_HOSTNAME}/admin/api/${env.WEBHOOK_VERSION}/smart_collections.json`,
    'products': (id: string) => `${env.SHOPIFY_HOSTNAME}/admin/api/${env.WEBHOOK_VERSION}/collections/${id}/products.json`
  }
}