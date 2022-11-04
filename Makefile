build:
	export DEFAULT_DENO=INSTALL=${HOME}/.deno
	export DENO_INSTALL=${DENO_INSTAL:-$DEFAULT_DENO_INSTALL}
	export DENO_DEPLOYMENT_ID=${AWS_COMMIT_ID:-1}
	deno cache app/main.ts --import-map=app/import_map.json
	mkdir -p .next/standalone
	cp server.js ${DENO_INSTALL}/bin/deno .next/standalone
	cp -r ${HOME}/.cache/deno .next/standalone/cache
	cp -r app .next/standalone/

