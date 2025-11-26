// --- Exemplo do SOLID letra (O) Open/Closed Principle ---

class PaymentProcessorViolation {
    process(method, amount) {
        if (method === "credit_card") {
            console.log(`Processando R$${amount} com cartão de crédito.`);
        } else if (method === "paypal") {
            console.log(`Processando R$${amount} com PayPal.`);
        }
    }
}

class PaymentMethod {
    pay(amount) {

        throw new Error("O método 'pay' deve ser implementado pela subclasse!");
    }
}

class PaymentProcessor {
    process(paymentMethod, amount) {
        paymentMethod.pay(amount);
    }
}

class CreditCardPayment extends PaymentMethod {
    pay(amount) {
        console.log(`Processando R$${amount} com cartão de crédito.`);
    }
}

class PaypalPayment extends PaymentMethod {
    pay(amount) {
        console.log(`Processando R$${amount} com PayPal.`);
    }
}

class PixPayment extends PaymentMethod {
    pay(amount) {
        console.log(`Processando R$${amount} com PIX.`);
    }
}

const processor = new PaymentProcessor();
const amount = 100.0;

processor.process(new CreditCardPayment(), amount);
processor.process(new PaypalPayment(), amount);

processor.process(new PixPayment(), amount);