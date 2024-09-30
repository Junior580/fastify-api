pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    docker.image('node:22-alpine').inside {
                        sh 'npm install' // Executa o npm install dentro do container Node.js
                    }
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    docker.image('node:22-alpine').inside {
                        sh 'npm test' // Executa os testes dentro do container Node.js
                    }
                }
            }
        }
    }
}



