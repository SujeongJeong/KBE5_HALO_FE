#!/bin/sh
set -e

# 1. 프론트엔드 폴더로 이동
cd ./KBE5_HALO_FE

# 2. 의존성 설치 및 빌드
npm ci
npm run build

# 3. output 디렉토리 준비
rm -rf output        # 이전 output 제거 (선택)
mkdir output

# 4. 빌드 결과물을 output으로 복사 (build 폴더만!)
cp -R ./build/* ./output
