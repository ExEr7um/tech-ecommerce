/**
 * Функция, возвращающая форматированную цену.
 *
 * @param price - цена
 * @returns форматированная цена
 * @example
 * ```ts
 * // Вернет '1 000 ₽'
 * usePriceFormatter(1000)
 * ```
 */
export default function (price: number): string {
  /** Форматированная цена */
  const formattedPrice = price.toLocaleString("ru-RU", {
    currency: "RUB",
    minimumFractionDigits: 0,
    style: "currency",
  })

  return formattedPrice
}
