pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install' // Instalar dependências
                sh 'npm run build' // Rodar o build do projeto
            }
        }
        stage('Test') {
            steps {
                sh 'npm test' // Rodar os testes
            }
        }
    }
}



