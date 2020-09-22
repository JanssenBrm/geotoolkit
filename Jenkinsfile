#!/usr/bin/env groovy

/*
    This Jenkinsfile uses the Jenkins shared library. (ssh://git@git.vito.local:7999/biggeo/jenkinslib.git)
*/

@Library('lib')_

angularPipeline{
  package_name = 'geotoolkit'
  dev_hosts = 'webportals-dev.services.rscloud.vito.be'
  int_hosts = 'webportals-int.services.rscloud.vito.be'
  prod_hosts = ['webportals-prod.services.rscloud.vito.be', 'webportals-prod-02.services.rscloud.vito.be']
  run_tests = false
  cypress_image = 'cypress/included:5.2.0'
  nodejs_image  = 'vito-docker-private.artifactory.vgt.vito.be/nodejs:20200917-11'
}
