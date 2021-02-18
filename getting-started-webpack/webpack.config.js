// output.path に指定するパスがOSによって異なることを防ぐ為に path モジュールを読み込んでおく
const path = require('path')

module.exports = {
    // モードの設定(モードを指定しないと webpack 実行時に警告がでる)
    mode: 'development',
    // エントリーポイントの設定
    entry: './src/js/app.js',
    // 出力の設定
    output: {
        // 出力するファイル名
        filename: 'bundle.js',
        // 出力先のパス(絶対パスを指定しないとエラーが出るので注意)
        path: path.resolve(__dirname, 'public/js')
    }
}
