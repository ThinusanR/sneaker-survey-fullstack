FROM eclipse-temurin:latest
 
WORKDIR /app
 
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN chmod +x ./mvnw 
 
COPY src ./src
 
CMD ["./mvnw", "spring-boot:run"]