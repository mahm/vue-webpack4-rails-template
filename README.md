# vue-webpack4-rails-template

## 含まれているもの

* webpackerを利用した上でのwebpack4への対応
* Vue.jsを利用する上でのデフォルト設定
* Storybookを利用する上でのデフォルト設定

RailsでVue.jsを利用する上でのテンプレートしてご利用ください。

## ポイント

webpackerはwebpackの設定をラップしたインターフェースを提供していますが、ある程度大きなプロジェクトになってくると、このラップされたインターフェースによって問題が発生することが多いため、このテンプレートではwebpackerとwebpackの設定を分離しています。

## セットアップ

```
yarn install
bundle install -j4
bin/rake db:create
```

## 起動方法

```
foreman start -f Profile.local
```
