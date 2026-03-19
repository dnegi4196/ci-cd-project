pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/dnegi4196/ci-cd-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build --no-cache -t ci-cd-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop ci-cd-app || true
                docker rm ci-cd-app || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d --name ci-cd-app -p 3000:3000 ci-cd-app'
            }
        }
    }
}
