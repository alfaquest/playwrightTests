pipeline {
  agent any

  stages {
    stage('Pull down App repo from git') {
      steps {
        sh '''
          git clone https://github.com/GlobalWebIndex/set-challenge.git
        '''
      }
    }

    stage('Install Node.js with NVM') {
      steps {
        sh '''
          export NVM_DIR="$HOME/.nvm"
          [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

          nvm install 16.0.0
          nvm use 16.0.0
          node -v
          npm -v
        '''
      }
    }

    stage('Install App Dependencies') {
      steps {
        sh '''
          cd set-challenge
          npm install
        '''
      }
    }

    stage('Run App') {
      steps {
        sh '''
          cd set-challenge
          npm run start
        '''
      }
    }

    stage('Pull down test repo from git') {
      steps {
        sh '''
          git clone --branch rev1 --single-branch https://github.com/alfaquest/playwrightTests.git
        '''
      }
    }

    stage('Install Test Dependencies') {
      steps {
        sh '''
          cd playwrightTests
          npm init -y 
          npm install @playwright/test@1.30.0 --save-dev
        '''
      }
    }

    stage('Run Tests') {
      steps {
        sh '''
          cd playwrightTests
          npx playwright test
        '''
      }
    }

    stage('View Test report') {
      steps {
        sh '''
          cd playwrightTests
          npx playwright show-report
        '''
      }
    }
  }
}
