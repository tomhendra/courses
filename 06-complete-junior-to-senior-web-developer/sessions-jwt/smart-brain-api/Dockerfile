# Node parent image from DockerHub
FROM node:11.14.0-stretch

# Working directory
WORKDIR /usr/src/smart-brain-api

# Copy to container - root to root
COPY ./ ./

# What should we run
RUN npm install

# What to run in the container. Dockerfile can have only one CMD which usually comes at the end
CMD ["/bin/bash"]