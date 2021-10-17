#!/bin/env node

const { build } = require('@app/client/scripts/routines/build');

const main = async () => {
  //

  await build(false);

  //
};

main();
