/** Продукт */
interface Product {
  brand?: StrapiRelation<Brand>
  /** Бюджет продукта */
  budget?: StrapiRelation<Budget>
  /** Категория продукта */
  category?: StrapiRelation<Category>
  /** Дата создания */
  createdAt: Date
  /** Скорость доставки продукта */
  delivery: StrapiRelation<Delivery>
  /** Описание продукта */
  description: string
  /** Изображение продукта */
  image?: StrapiRelation<StrapiImage>
  /** Цена продукта */
  price: number
  /** Назначение продукта */
  purpose: StrapiRelation<Purpose>
  /** Наличие/отсутствие подсветки у продукта */
  rgb: StrapiRelation<RGB>
  /** Название продукта */
  title: string
  /** Дата изменения */
  updatedAt: Date
}

/** Информация о товаре */
interface ProductAbout {
  /** Описание */
  description?: string
  /** Иконка из Iconify */
  icon: string
  /** Заголовок */
  title: string
}
