FROM golang:1.27-alpine

# This assumes that you're using something like docker-compose to:
#     - configure AudioMasher with environment variables
#     - mount the database for persistence
#     - expose the configured port

WORKDIR /var/masher
COPY . .

RUN go build

CMD ./AudioMasher
