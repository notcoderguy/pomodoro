FROM oven/bun AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN bun install

FROM oven/bun AS production-dependencies-env
COPY ./package.json bun.lock /app/
WORKDIR /app
RUN bun install --production

FROM oven/bun AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN bun run build

FROM oven/bun
COPY ./package.json bun.lock /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/
WORKDIR /app
EXPOSE 3000
ENTRYPOINT ["bun", "run", "start"]
