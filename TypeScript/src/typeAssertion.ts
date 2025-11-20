let anything: any;

anything = 'Hello, TypeScript!';

(anything as string).toUpperCase();

console.log((anything as string).length);

const kgToGMConverter = (input: string | number) => {
    if (typeof input === 'string') {
        const value = parseFloat(input) * 1000;
        console.log(`Converted value in GM: ${value}`);
    } else if (typeof input === 'number') {
        const value = input * 1000;
        console.log(`Converted value in GM: ${value}`);
    } else {
        console.log('Invalid input type');
    }
};

kgToGMConverter('5.5');
kgToGMConverter(3.2);