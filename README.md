# myname-atv-01

Welcome to my simple web application using Dockerized, and with CI/CD configured.

### Prerequisites
- [Docker](https://docs.docker.com/get-docker/)

### Build the Docker image:

```bash
    docker build -t my-web-application .
```

### Run the container:

```bash
    docker run -p 3000:3000 my-web-application
```

### CI/CD

This project uses GitHub Actions for CI/CD automation.