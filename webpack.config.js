const path = require("path");

module.exports = {
  // production 모드의 경우 tree shaking, 암호화 등이 이루어진다.
  mode: "development",

  // 번들링 진입과 결과물 경로
  // app => [name].js key값으로 결과 파일 이름 지정가능
  entry: {
    app: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },

  // 웹팩은 기본적으로 JavaScript와 JSON 파일만 번들링한다.
  // 다른 형식의 파일들을 번들링하기 위해서 loader를 사용한다.
  // loader를 통해 필요한 기능을 추가로 더해서 번들링을 실행시킬 수 있다.
  module: {
    rules: [],
  },

  // 웹팩의 기본적인 동작에 추가적인 기능을 제공하기 위한 플러그인 설정
  // ex) Htmlwebpackplugin
  // 번들된 파일을 로드하는 html을 자동으로 생성
  plugins: [],

  resolve: {
    extentions: [".ts", ".js"],
  },

  // webpack-dev-server
  devserver: {
    port: 9876,
    // gzip 압축방식을 이용하여 서버와 클라이언트 간 웹 자원의 사이즈를 줄여 웹 성능 최적화
    compress: false,
    open: true,
    hot: true,
  },
};
