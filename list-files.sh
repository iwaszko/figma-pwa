#!/usr/bin/env bash
set -e

find data images js resources -type f -print0 | xargs -0 printf '"%s",\n'