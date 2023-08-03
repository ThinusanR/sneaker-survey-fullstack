# 👟 Welcome to the Sneaker Survey 
## 📖 Prerequisites
In order to run this project, the following software binaries need to be installed on your development machines:
- `java>=18.0.2`
- `docker>=20.10.24`
- `npm>=9.5.0`

## 🖥️ Local development
## 🗄️ Setting Up A MongoDB Cloud Atlas 
This project utilizes MongoDB Cloud Atlas as the database. To setup the database instance, follow these steps:
1. Register for a MongoDB Cloud Account and setup a MongoDb Cluster by following this [Tutorial](https://www.mongodb.com/basics/mongodb-atlas-tutorial).

2. Create a `/resources` folder inside `/server/src/main/`, the according folder structure should be: `/server/src/main/resources/`.

3. Create a `application.properties` file inside the newly created `/resources`, this file will contain the credentials to connect to your MongoDb Atlas cluster.    
Inside the `aplication.properties` file add the following properties along with your MongoDB Atlas cluster credentials:
    ```
    spring.data.mongodb.uri=your_mongodb_connection_string
    spring.data.mongodb.database=your_mongodb_database_name
    spring.data.mongodb.port=27017
    spring.data.mongodb.authentication-database = admin
    ```

## 🛠️ Installation
### 💪Manual
To setup and run this project manually without Docker, follow these steps:
#### Frontend
1. Within the `./client` folder, install the front-end dependencies by running the terminal command: 
    ``` 
    npm install 
    ``` 

2. After dependencies have been installed, start the front-end with the following terminal command: 
    ```
    npm run start
    ```
3. Open [http://localhost:3000](http://localhost:3000) to view the front-end in your browser.

#### Backend
1. Within the `./server` folder, compile and launch the server with the following terminal command: 
    ```
    ./mvnw spring-boot:run
    ```

### 📦 Docker builds
#### Docker Compose
1. At the root directory run: 
    ```
    docker compose up
    ```
2. Open [http://localhost:3000](http://localhost:3000) to view the project in your browser.

#### Docker
##### Frontend
1. Within the `./client` folder, build the Docker image: 
    ```
    docker build -t sneaker_survey_front . 
    ```
2. Run Docker container:
    ```
    docker run -p 3000:3000 sneaker_survey_front 
    ```
##### Backend
1. Within the `./server` folder, build the Docker image: 
    ```
    docker build -t sneaker_survey_back . 
    ```
2. Run Docker container:
    ```
    docker run -p 8080:8080 sneaker_survey_back
    ```

## 🧪 Test
Run tests with:
```
npm run test
```

Clear test cache with:
```
npm run clear_jest
```
