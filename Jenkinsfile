@Library('lib')_

def package_name = 'geotoolkit'
def rpm_package_prefix = '/var/vhosts/geotoolkit'
def rpm_source_dir = 'geotoolkit'
def date = utils.getDate('yyyyMMddHmmss')
def dev_hosts = 'webportals-dev.services.rscloud.vito.be'
def int_hosts = 'webportals-int.services.rscloud.vito.be'
def prod_hosts = 'webportals-prod.services.rscloud.vito.be'
def after_install_command = ':'
def rpm_repo = 'vito-yum-angular'

node ('jenkinsslave1.services.rscloud.vito.be || jenkinsslave1.vgt.vito.be || jenkinsslave2.services.rscloud.vito.be  || jenkinsslave3.vgt.vito.be || jenkinsslave4.vgt.vito.be || jenkinsslave5.vgt.vito.be || jenkinsslave6.services.rscloud.vito.be || jenkinsslave7.services.rscloud.vito.be || jenkinsslave8.services.rscloud.vito.be'){
  try {
    nodejs(nodeJSInstallationName: 'NodeJS 8.10.0', configId: 'vito_npmrc') {
      stage ('Checkout scm') {
        checkout scm
        sh ('npm install')
      }
      stage( 'Build and Test' ){
        sh ('npm run build && npm run package')
      }
      if(['master'].contains(env.BRANCH_NAME)) {
        // deploy stable version to Artifactory
        stage( 'Deploy stable version to Artifactory'){
          //use Artifactory plugin to take care of publishing
          def server = Artifactory.server('vitoartifactory')
          def uploadSpec = """{
            "files": [
              {
                "pattern": "geotoolkit*.tar.gz",
                "target": "libs-snapshot-local/be/vito/eodata/jsLibs/geotoolkit/"
              }
            ]
          }"""
          server.upload(uploadSpec)
        }
      }
      stage( 'Deploy stable version' ){
        withCredentials([sshUserPrivateKey(credentialsId: '56b58ff6-cbcd-4d83-92fa-390a4da7f00c', keyFileVariable: 'privatekey')]) {
          sh "cp -f $privatekey /home/jenkins/.ssh/webportals_rsa"

          if(['develop'].contains(env.BRANCH_NAME)){
            buildAndUploadRpm(package_name, date, rpm_source_dir, rpm_package_prefix, rpm_repo)
            lock ('Deploying to dev'){
              rpm.deploy("${package_name}-${date}-${BUILD_NUMBER}", dev_hosts, after_install_command)
            }
          } else if(['master'].contains(env.BRANCH_NAME)){
            buildAndUploadRpm(package_name, date, rpm_source_dir, rpm_package_prefix, rpm_repo)
            lock ('Deploying to prod'){
              rpm.deploy("${package_name}-${date}-${BUILD_NUMBER}", prod_hosts, after_install_command)
            }
          } else if(isReleaseBranch()) {
            buildAndUploadRpm(package_name, date, rpm_source_dir, rpm_package_prefix, rpm_repo)
            lock ('Deploying to int'){
              rpm.deploy("${package_name}-${date}-${BUILD_NUMBER}", int_hosts, after_install_command)
            }
          }
        }
      }
    }
  } catch (any) {
    echo "${any}"
    currentBuild.result = 'FAILURE'
  }
}

def buildAndUploadRpm(package_name, date, rpm_source_dir, rpm_package_prefix, rpm_repo) {
  withEnv([
    "PACKAGE_NAME=${package_name}",
    "RPM_SOURCE_DIR=${rpm_source_dir}",
    "RPM_PACKAGE_PREFIX=${rpm_package_prefix}",
    "DATE=${date}",
  ]) {
    sh 'rm -f *.rpm'
    rpm.build('angular/package.sh')
    artifactory.uploadRpm(package_name, rpm_repo)
  }
}

boolean isReleaseBranch() {
  return env.BRANCH_NAME.contains("release") && env.BRANCH_NAME.substring(0,7) == "release"
}

String getReleaseBranch() {
  return env.BRANCH_NAME.substring(8)
}
