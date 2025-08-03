export const orders = [
  {
    id: 1,
    orderNumber: "ORD-1001",
    date: "2024-03-15",
    total: 8999000,
    status: "completed",
    paymentMethod: "bank_transfer",
    shippingAddress: "Jl. Merdeka No. 123, Jakarta Pusat",
    items: [
      {
        productId: 1,
        quantity: 1,
        price: 8999000
      }
    ],
    customer: {
      name: "John Doe",
      email: "john@example.com"
    }
  },
  {
    id: 2,
    orderNumber: "ORD-1002",
    date: "2024-03-12",
    total: 459000,
    status: "completed",
    paymentMethod: "qris",
    shippingAddress: "Jl. Sudirman No. 456, Jakarta Selatan",
    items: [
      {
        productId: 8,
        quantity: 1,
        price: 459000
      }
    ],
    customer: {
      name: "Jane Smith",
      email: "jane@example.com"
    }
  },
  {
    id: 3,
    orderNumber: "ORD-1003",
    date: "2024-03-10",
    total: 189000,
    status: "processing",
    paymentMethod: "whatsapp",
    shippingAddress: "Jl. Thamrin No. 789, Jakarta Barat",
    items: [
      {
        productId: 4,
        quantity: 1,
        price: 189000
      }
    ],
    customer: {
      name: "Bob Johnson",
      email: "bob@example.com"
    }
  }
];