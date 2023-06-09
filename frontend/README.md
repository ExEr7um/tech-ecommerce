# Шаблон Nuxt 3

Шаблон Nuxt 3 приложения с настроенными зависимостями, линтерами и т.д.

## Оглавление

- [Оглавление](#оглавление)
- [Локальная разработка](#локальная-разработка)
- [VS Code](#vs-code)
  - [Volar](#volar)
- [Продакшн](#продакшн)
- [Тестирование](#тестирование)
- [Линт](#линт)
- [Локальные переменные](#локальные-переменные)

## Локальная разработка

1. Создать `.env` файл по примеру из `.env.example`
1. Установить зависимости

   ```sh
   pnpm install
   ```

1. Запустить `dev`-сервер

   ```sh
   pnpm dev
   ```

## VS Code

Настройки и рекомендуемые расширения хранятся в файлах `.vscode/settings.json` и `.vscode/extensions.json`.

### Volar

Это расширение для работы с Vue файлами, оно будет установлено автоматически. Для повышения производительности Volar предоставляет функцию под названием «Takeover Mode», которая обеспечивает поддержку файлов Vue и TS с помощью одного экземпляра языковой службы TS.

Чтобы включить режим Takeover Mode, необходимо отключить встроенную в VSCode языковую службу TS в рабочем пространстве проекта, выполнив следующие действия:

1. Откройте меню расширений.
1. Введите `@builtin typescript`.
1. Нажмите на иконку настроек у «TypeScript and JavaScript Language Features», и выберите «Disable (Workspace)».
1. Перезапустите VS Code.

## Продакшн

Сборка в продакшн

```sh
pnpm build
```

Превью продакшн билда

```sh
pnpm preview
```

## Тестирование

Проверка типов

```sh
pnpm typecheck
```

## Линт

Запуск ESLint

```sh
pnpm lint
```

Запуск Prettier

```sh
pnpm prettier
```

## Локальные переменные

| Название переменной | Описание          | Пример          |
| ------------------- | ----------------- | --------------- |
| `EXAMPLE`           | Пример переменной | `example value` |
