FROM node AS build
WORKDIR /json-schema-policies
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm config set maxsockets 1
RUN npm install
RUN npm audit --audit-level=moderate
COPY index.ts .
COPY tsconfig.json .
RUN npm run build
ENTRYPOINT ["/bin/bash"]
