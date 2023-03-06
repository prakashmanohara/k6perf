#!/bin/bash
set -ex

sudo apt-get update
sudo apt-get install dirmngr --install-recommends
sudo apt-get update
sudo apt-get install k6
