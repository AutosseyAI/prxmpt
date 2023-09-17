#!/bin/bash

if [ -z "$1" ]; then
  find test -name '*.test.tsx' | xargs node --no-warnings --loader ts-node/esm --test;
else
  node --no-warnings --loader ts-node/esm --test $1;
fi
