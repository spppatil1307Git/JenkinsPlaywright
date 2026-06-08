pipeline {
    agent any

    environment {
    JAVA_HOME = 'C:\\Program Files\\Java\\jdk-17'
    PATH = "${JAVA_HOME}\\bin;${env.PATH}"
    }

    tools {
        allure 'Allure'
    }

    stages {

        stage('Check Java') {
            steps {
                bat 'echo JAVA_HOME=%JAVA_HOME%'
                bat 'java -version'
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/spppatil1307Git/JenkinsPlaywright.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {

        always {
            allure(
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            )
        }

        success {
            mail(
                to: 'spppatil1307@gmail.com',
                subject: "SUCCESS: ${JOB_NAME} #${BUILD_NUMBER}",
                body: "Build Passed\n${BUILD_URL}"
            )
        }

        failure {
            mail(
                to: 'spppatil1307@gmail.com',
                subject: "FAILED: ${JOB_NAME} #${BUILD_NUMBER}",
                body: "Build Failed\n${BUILD_URL}"
            )
        }
    }
}