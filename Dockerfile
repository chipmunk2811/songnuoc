FROM nginx

WORKDIR /usr/share/nginx/html

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git

COPY . .

# docker build . -t img-webmovie
# docker run -d -p 3000:80  --name Web-Movie img-webmovie