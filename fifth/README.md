# 다섯 번째 - 개발 환경 완료 버전


## 구성
- react + babel 을 이용한 페이지 코딩
- 부트스트랩 을 이용한 디자인
- webpack을 이용한 bundling
- http-server(https://www.npmjs.com/package/http-server) 를 이용한 http server 구동
-- 결과 확인


## 설명

- `./src/` 의 `index.html` 파일을 `./dist/` 로 복사
- `./src/` 의 소스(js)들을 `./dist/` 의 `app.js` 으로 합침. 
- `./src/css` 의 소스(css) 들을 `./dist/style.css` 으로 합침.
- 부트스트랩 사용

## 순서


### http-server 설치

`$ npm install http-server -g`
> http-server 실행을 위해 http-server을 global로 설치.

### WEBPACK 설치

`$ npm install webpack -g`
> webpack command 실행을 위해 webpack을 global로 설치.

### 로컬 실행

- ` npm install ` 으로 node 모듈들 설치
- `webpack` 실행으로 소스 빌드
-- `DEV=1 webpack` 으로 개발 환경(js, css 압축 하지 않음)
-- `webpack --watch` 로 소스 수정시 지속적 빌드 수행
- `./dist/` 디렉토리에서 `http-server` 실행
-- `localhost:8080` 서버 실행 확인.
