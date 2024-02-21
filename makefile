include .env
init:
	rm -r ./i18n/sources && mkdir ./i18n/sources && rm -rf ./i18n/messages.ts ./i18n/locales.ts && curl -o "./i18n/sources/translation.zip" "$(TRANSLATION_SOURCE)" && unzip "./i18n/sources/translation.zip" -d ./i18n/sources && rm -rf "./i18n/sources/translation.zip"

build-dev:
	make init && pnpm dev

build:
	make init && pnpm build && pnpm start