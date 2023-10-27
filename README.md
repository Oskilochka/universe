# Spring Boot app



### docker
1) to create an image via jib -> ./mvnw clean install jib:dockerBuild -Djib.to.image=fullstack:v1
2) To run container
- docker run --name fullstack -p 4040:8080 fullstack:v1
3) To delete container with name fullstack
- docker rm -f fullstack
4) To view local images run
- docker image ls or docker images
5) To view running containers
- docker ps 
