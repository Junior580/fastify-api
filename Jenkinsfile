pipeline {
    agent any

    environment {
        DOCKER_COMPOSE = 'docker-compose -f docker-compose.yml'
    }

    stages {
        stage('Setup') {
            steps {
                script {
                    // Ensure services are up and running
                    sh "${DOCKER_COMPOSE} up -d"
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    docker.image('node:22-alpine').inside {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    docker.image('node:22-alpine').inside {
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Teardown') {
            steps {
                script {
                    // Bring down the services
                    sh "${DOCKER_COMPOSE} down"
                }
            }
        }
    }
}

