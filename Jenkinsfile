pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo "Building project..."
            }
        }

        stage('Test') {
            steps {
                echo "Running tests..."
            }
        }
    }

    post {

        success {
            echo "Build completed successfully "
        }

        failure {
            echo "Build failed "
        }

        always {
            echo "Post-build actions executed."
        }
    }
}
