.PHONY: pack-install

pack-install:
	npm run build
	npm pack 
	cp aismarttalk-aismarttalk-types-*.tgz ../aismarttalk 
	cp aismarttalk-aismarttalk-types-*.tgz ../aismarttalk-sdk
	cd ../aismarttalk && npm install aismarttalk-aismarttalk-types-*.tgz
	cd ../aismarttalk-sdk && npm install aismarttalk-aismarttalk-types-*.tgz
	rm aismarttalk-aismarttalk-types-*.tgz
