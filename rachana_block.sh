#!/bin/bash

# Navigate to the Rachana Block directory
cd plugins/rachana-block/

# Install the packages and build the plugin
npm install && npm run build

# Return to the previous directory
cd -
