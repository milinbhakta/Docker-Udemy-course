# Udemy Docker Course

---

## Section 1: Docker Basics
- Hosting a basic node.js app


## Section 2: Docker builds
- Building a Docker image from a Dockerfile
- hosting basic node js app with docker build

## Section 3: Docker with python
- Hosting a basic python app with docker

## Section 4: Docker Volumes and bind mounts
- Docker volumes and binding mounts for data persistence
- docker volume create --name my-data-volume
- docker run -d -v my-data-volume:/data ubuntu:latest
- docker run -d -v my-data-volume:/data ubuntu:latest bash -c "echo 'Hello World' > /data/hello.txt"

## Section 5: Docker Networking
- Docker networking
- docker network create my-network
