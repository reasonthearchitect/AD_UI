node {
    stage 'Checkout'
    git url: 'https://github.com/reasonthearchitect/AD_UI.git'

    stage 'Build'
    sh "npm install"
    sh "bower install"
    
    stage 'Minify'
    sh 'grunt build --force'

    stage 'BuildRunDocker'
    sh 'docker kill adui'
    sh 'docker rm adui'
    sh 'docker build -t reasonthearchitect/adui .'

    stage 'Deploy'
    sh 'docker run -d --name adui -p 8923:80 reasonthearchitect/adui'
}