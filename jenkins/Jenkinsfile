pipeline {
    agent any

    tools {
        allure 'Allure'
    }

    stages {

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