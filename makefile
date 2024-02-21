init:
	rm -r ./i18n/sources && mkdir ./i18n/sources && rm -rf ./i18n/messages.ts ./i18n/locales.ts && curl -o /Users/touki/touki24/web/touki-hub/i18n/sources/touki-hub.zip http://localhost:8085/v2/projects/export?ak=tgpak_gfpw63tfnjwg6olcobqtcytbmjrxmmlmnrwwg3ruonvwe && unzip ./i18n/sources/touki-hub.zip -d ./i18n/sources && rm -rf ./i18n/sources/touki-hub.zip

build-dev:
	make init && pnpm dev

build:
	make init && pnpm build && pnpm start