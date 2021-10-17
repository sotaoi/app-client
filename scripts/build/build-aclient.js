#!/bin/env node

const { buildAclientRoutine } = require('@app/client/scripts/routines/build-aclient-routine');

const main = async () => {
  //

  await buildAclientRoutine(false);

  //
};

main();
