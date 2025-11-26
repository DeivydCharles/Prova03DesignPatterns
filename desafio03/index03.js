// Exemplo de GRASP Controller

class Order {
    constructor(customerName) {
      this.customerName = customerName;
      this.items = [];
    }
  
    addItem(name, price) {
      this.items.push(new OrderItem(name, price));
    }
  
    getTotal() {
      return this.items.reduce((acc, item) => acc + item.price, 0);
    }
  }
  
  class OrderItem {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class OrderController {
    createOrder(requestData) {
      const { customerName, items } = requestData;

      const order = new Order(customerName);

      items.forEach(item => {
        order.addItem(item.name, item.price);
      });

      return {
        message: "Pedido criado com sucesso!",
        total: order.getTotal(),
        items: order.items
      };
    }
  }

  const controller = new OrderController();
  
  const response = controller.createOrder({
    customerName: "João Silva",
    items: [
      { name: "Pizza", price: 45 },
      { name: "Refrigerante", price: 8 }
    ]
  });
  
  console.log(response);
  