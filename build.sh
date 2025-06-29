#!/bin/sh
rm -rf output
mkdir output

# 2. copy current repo frontend (KBE5_HALO_FE) to output
# 현재 위치가 루트라고 가정하고 ./KBE5_HALO_FE 안에 frontend 코드 있다고 가정
cp -R ./KBE5_HALO_FE/* ./output

