# Mesher Homework

## 프로젝트 소개

Mesher Homework는 React, TypeScript 및 Vite를 사용하여 구축된 프론트엔드 프로젝트입니다.
디자인 시스템 구축, 레이아웃 마크업, API 연동 등의 과정을 포함하여, 사용자에게 최적의 웹 경험을 제공하고자 합니다.

## 기능 요약

- 반응형 디자인 시스템 구축
- RESTful API 연동
- 유닛 및 통합 테스트를 통한 기능 검증
- 사용자 경험 중심의 인터페이스 설계

## 기술 스택

- **React / React-DOM**: 인터페이스 구성
- **TypeScript**: 정적 타입을 통한 안정적인 코드 개발
- **Vite**: 빠른 빌드 도구 및 개발 서버
- **Styled-Components**: 스타일링
- **Zustand / React Query**: 상태 관리
- **Axios**: HTTP 통신
- **Cypress**: 종단 간 테스팅

## 프로젝트 구조

- `src`: 소스 코드 폴더
- `src/App.tsx`: 앱 루트 컴포넌트
- `vite.config.ts`: Vite 빌드 및 개발 환경 설정
- `tsconfig.json`: TypeScript 컴파일러 설정
- `index.html`: HTML 엔트리 포인트

## 시작 방법

### 개발 환경 설정

Mesher Homework 프로젝트는 nvm과 direnv를 통한 환경 설정을 권장합니다. 프로젝트마다 적합한 Node.js 버전을 사용하도록 brew를 사용하여 nvm을 설치하고, 디렉토리별 환경 변수 관리를 위해 direnv를 설치합니다.

```bash
# nvm 설치 (Homebrew 이용)
brew install nvm

# nvm을 통한 Node.js 버전 관리 (.nvmrc 파일 참조)
nvm use

# direnv 설치 (Homebrew 이용)
brew install direnv

# 환경 변수 자동 설정 (.envrc 파일 참조)
direnv allow
```

### 설치 및 실행

```bash
# 프로젝트 클론 후 의존성 설치
yarn install

# 로컬 개발 서버 실행
yarn dev

# 프로젝트 빌드 (프로덕션)
yarn build

# 코드 포맷팅 및 린팅
yarn format

# 애플리케이션 테스팅 (Cypress 사용)
yarn cypress:open
yarn cypress:run
```

## CLI 지원

이 프로젝트는 [react-gpt-cli](https://www.npmjs.com/package/react-gpt-cli)를 활용합니다. rgc를 통하여 프로젝트 분석 및 최적화를 진행할 수 있으며, GPT와의 상호작용을 통한 효율적인 개발 환경을 제공합니다.

```bash
# react-gpt-cli 설치
npm install -g react-gpt-cli
```

## 스크립트 명령어

- `dev`: Vite 개발 서버를 실행합니다.
- `build`: Vite와 TypeScript를 통해 프로젝트를 빌드합니다.
- `format`: Prettier 및 ESLint를 사용하여 코드를 포맷팅하고 문제 사항을 자동으로 수정합니다.
- `cypress:open`: Cypress를 실행하여 테스트를 GUI로 진행합니다.
- `cypress:run`: Cypress를 실행하여 테스트를 CLI로 진행합니다.

## 추가 안내

`PLANNING.md` 문서와 프로젝트 루트 내의 설정 파일들(`vite.config.ts`, `tsconfig.json`, `package.json`)에 나와 있는 정보를 참조하면 더욱 상세한 개발 계획과 실행 방법을 알 수 있습니다.
