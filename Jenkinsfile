node {
     stage('checkout'){
       checkout scm
  }
  docker.image('node:10.15.0-alpine').inside('-u root') {
        stage('check Node') {
            sh "node -v"
        }
        stage('Check Npm') {
            sh "npm -v"
        }
        stage('Npm Install') {
            sh 'npm install'
        }

        // TODO : test
        stage('Webpack Build') {
            sh 'npm run webpack:build:main'
        }

        stage('Directory Permission') {
            sh "chmod 777 -R node_modules build"
        } 
              
    }

    maintainer_name = "visionstatistique"
    container_name = "frontend"
    registry_url = "https://index.docker.io/v1/"
    docker_creds_id = "docker-login"
    build_tag = "latest"

    def dockerImage
    stage('Docker build') {
      dockerImage = docker.build("${maintainer_name}/${container_name}")
    }
    stage('Docker publish') {
        docker.withRegistry("${registry_url}", "${docker_creds_id}") {
            dockerImage.push "${build_tag}"
        }
    }
}
