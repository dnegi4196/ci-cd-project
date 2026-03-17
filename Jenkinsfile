pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/USERNAME/ci-cd-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run App Test') {
            steps {
                sh 'node app.js & sleep 5'
            }
        }
    }
}
