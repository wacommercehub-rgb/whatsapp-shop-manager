# WhatsApp Shop Manager - MCP Server

This MCP server allows AI agents (like Claude Desktop or Cursor) to automatically sync e-commerce product catalogs from Google Merchant Center, Shopify, or WooCommerce directly into your WhatsApp Shop Manager account.

## Tools

### `sync_ecommerce_to_whatsapp`
Syncs an array of products to your WhatsApp shop catalogue.

**Arguments:**
* `apiKey` (string, required): Your WhatsApp Shop Manager API key.
* `products` (array, required): List of products to insert.
