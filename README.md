# code

Very simple website for code.

## Getting started

    bundle install
    cp config/s3.yml-tmpl config/s3.yml
    rackup

## Deploying

To deploy (if you dare) configure the required s3 crendentials in `config/s3.yml`, then use capistrano.

    cap [dev|www] deploy

[dev](http://dev.code.monhs.com.s3-website-us-east-1.amazonaws.com)
[www](http://www.code.monhs.com.s3-website-us-east-1.amazonaws.com)
