pipeline {
    agent any

    stages {
      stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
   }
}

