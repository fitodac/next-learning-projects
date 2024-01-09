export const env = {
  SHOPIFY_TOKEN: process.env.SHOPIFY_TOKEN || "",
  SHOPIFY_HOSTNAME: process.env.SHOPIFY_HOSTNAME || "",
  CACHE_TOKEN: process.env.CACHE_TOKEN,
	WEBHOOK_VERSION: process.env.WEBHOOK_VERSION as string,
	HOME_PAGE_COLLECTION: process.env.HOME_PAGE_COLLECTION,
  SHOPIFY_STOREFRONT_TOKEN: process.env.SHOPIFY_STOREFRONT_TOKEN as string,
}