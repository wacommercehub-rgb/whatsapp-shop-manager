import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import fetch from "node-fetch";

const server = new Server({
  name: "whatsapp-shop-manager",
  version: "1.0.0",
}, {
  capabilities: { tools: {} },
});

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "sync_ecommerce_to_whatsapp",
      description: "Importe ou synchronise des produits depuis Google Merchant Center, Shopify ou WooCommerce directement vers le catalogue WhatsApp Shop Manager du commerçant.",
      inputSchema: {
        type: "object",
        properties: {
          apiKey: { type: "string", description: "La clé API WhatsApp Shop Manager du marchand." },
          products: { type: "array", items: { type: "object" }, description: "Liste des produits extraits par l'IA à insérer." }
        },
        required: ["apiKey", "products"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "sync_ecommerce_to_whatsapp") {
    const { apiKey, products } = request.params.arguments;
    
    // CORRECTION : Le lien pointe maintenant bien vers ton sous-domaine exact
    const response = await fetch("import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import fetch from "node-fetch";

const server = new Server({
  name: "whatsapp-shop-manager",
  version: "1.0.0",
}, {
  capabilities: { tools: {} },
});

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "sync_ecommerce_to_whatsapp",
      description: "Importe ou synchronise des produits depuis Google Merchant Center, Shopify ou WooCommerce directement vers le catalogue WhatsApp Shop Manager du commerçant.",
      inputSchema: {
        type: "object",
        properties: {
          apiKey: { type: "string", description: "La clé API WhatsApp Shop Manager du marchand." },
          products: { type: "array", items: { type: "object" }, description: "Liste des produits extraits par l'IA à insérer." }
        },
        required: ["apiKey", "products"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "sync_ecommerce_to_whatsapp") {
    const { apiKey, products } = request.params.arguments;
    
    // CORRECTION : Le lien pointe maintenant bien vers ton sous-domaine exact
    const response = await fetch("https://whatsappshopmanager.zite.so", {
      method: "POST",
      headers: { 
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({ products })
    });
    
    if (!response.ok) {
      return { content: [{ type: "text", text: "Erreur lors de la synchronisation avec l'API WhatsApp Shop Manager." }] };
    }
    
    return { content: [{ type: "text", text: "Succès ! Les produits ont été injectés dans la boutique WhatsApp." }] };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
", {
      method: "POST",
      headers: { 
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({ products })
    });
    
    if (!response.ok) {
      return { content: [{ type: "text", text: "Erreur lors de la synchronisation avec l'API WhatsApp Shop Manager." }] };
    }
    
    return { content: [{ type: "text", text: "Succès ! Les produits ont été injectés dans la boutique WhatsApp." }] };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
