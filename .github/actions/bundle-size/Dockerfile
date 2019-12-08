FROM node:10.16.3

LABEL "com.github.actions.name"="Bundle Size"
LABEL "com.github.actions.description"="Check production bundle size"
LABEL "com.github.actions.icon"="archive"
LABEL "com.github.actions.color"="orange"

LABEL "repository"="https://github.com/stump26/blog_frontend/.github/actions/bundle-size"
LABEL "homepage"="https://github.com/stump26/blog_frontend"
LABEL "maintainer"="stump26 <moidpg@gmail.com>"

RUN apt-get update &&\
  apt-get install -y jq

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]