/** Продукт */
interface Product {
  brand?: {
    data: {
      attributes: Brand
      id: number
    }
  }
  /** Бюджет продукта */
  budget: string
  category?: {
    data: {
      attributes: Category
      id: number
    }
  }
  /** Дата создания */
  createdAt: Date
  /** Скорость доставки продукта */
  delivery: string
  /** Описание продукта */
  description: string
  image?: {
    data: {
      attributes: StrapiImage
      id: number
    }
  }
  /** Цена продукта */
  price: number
  /** Назначение продукта */
  purpose: string
  /** Наличие/отсутствие подсветки у продукта */
  rgb: string
  /** Название продукта */
  title: string
  /** Дата изменения */
  updatedAt: Date
}

/** Информация о товаре */
interface ProductAbout {
  /** Описание */
  description: string
  /** Иконка из Iconify */
  icon: string
  /** Заголовок */
  title: string
}
