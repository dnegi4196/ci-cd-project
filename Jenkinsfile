pipeline {
    agent any

    stages {

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
