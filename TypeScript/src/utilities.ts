// Utility types and functions for TypeScript

type Product = {
    id: number;
    name: string;
    price: number;
    description?: string;
    stock: number;
    color?: string;
};

// type ProductSummary = {
//     id: number;
//     name: string;
//     price: number;
// }

type ProductSummary = Pick<Product, 'id' | 'name' | 'price'>;

type ProductWithOutStock = Omit<Product, 'stock'>;

type ProductWithColor = Required<Product>;

const product: ProductWithColor = {
    id: 1,
    name: "Laptop",
    price: 1000,
    description: "A high-performance laptop",
    stock: 50,
    color: "Silver"
};

type ProductPartial = Partial<Product>;

type ReadonlyProduct = Readonly<Product>;

const emptyObj: Record<string, unknown> = {};

const product1 = {
    id: 223,
    name: "Smartphone",
    price: "500",
    stock: 100
}