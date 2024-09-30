pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'docker exec -it app npm install' // Instalar dependências no container do Node.js
            }
        }
        stage('Run Tests') {
            steps {
                sh 'docker exec -it app npm test' // Rodar os testes no container do Node.js
            }
        }
    }
}


