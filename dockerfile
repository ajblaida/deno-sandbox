FROM hayd/alpine-deno:1.0.0

EXPOSE 8080

WORKDIR /app

ADD . . 
RUN deno cache entry.ts

CMD ["run", "--allow-net", "--allow-env", "entry.ts"]