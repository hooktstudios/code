# code.HS

Very simple website for open source contributions by Hookt Studios members.

## Getting started

    bundle install
    rackup

## Deploying

To deploy (if you dare) configure the required s3 crendentials in `config/s3.yml`, then use capistrano.

    cp config/s3.yml-tmpl config/s3.yml
    cap [dev|www] deploy

## Credits

![hooktstudios](http://hooktstudios.com/logo.png)

Made for fun by [hooktstudios](http://github.com/hooktstudios).

Copy & have fun too!