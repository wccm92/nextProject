import "server-only";

export function dividir(a: number, b: number) {
    if (b === 0) {
        return "not possible"
    } else {
        return a / b;
    }
}