<br/>
<p align="center">
  <a href="https://github.com/zaebbb/scoring_widget">
    <img src="https://github.com/zaebbb/scoring_widget/blob/main/public/logo192.png?raw=true" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Виджет "Подбора очков"</h3>

  <p align="center">
    Данный виджет разработан для участия в олимпиаде "Волга-IT 22"
    <br/>
    <br/>
    <a href="https://github.com/zaebbb/scoring_widget"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/zaebbb/scoring_widget/issues">Report Bug</a>
    .
    <a href="https://github.com/zaebbb/scoring_widget/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/zaebbb/scoring_widget/total) ![Contributors](https://img.shields.io/github/contributors/zaebbb/scoring_widget?color=dark-green) ![Forks](https://img.shields.io/github/forks/zaebbb/scoring_widget?style=social) ![Stargazers](https://img.shields.io/github/stars/zaebbb/scoring_widget?style=social) ![Issues](https://img.shields.io/github/issues/zaebbb/scoring_widget) ![License](https://img.shields.io/github/license/zaebbb/scoring_widget) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Лицензия](#license)
* [Автор](#authors)

## О проекте

![Screen Shot](https://sun9-22.userapi.com/s/v1/if2/HmuTjyWe3ec8S2pLq2BeI3zj2GrtwKMZsloVWzaSYPilF_aM3q1W348dbvHJBizckEulMgfKdCZEqESn9CmfC386.jpg?size=1280x647&quality=96&type=album)

Проект разработан для участия в олимпиаде "Волга IT 2022"
Данный README.ME файл содержит инструкцию с помощью которой вы сможете интегрировать данный виджет на свой сайт.
Также содержит инструкцию для добавления development версии данного виджета для дальнейшей доработки если вам необходимо!

## Рабочее пространство

При разработке были использованы следующие технологии:
- React
- HTML
- CSS
- JavaScript
- GIT
- VSCode
- WebStorm
- Figma
- GitHub
- Swiper


## Предустановки

В данной секции располагается инструкция для полной интеграции виджета на ваш сайт или для развертывания на вашем локальном компьютере для разработки или улучшения кода и программы в целом

### Интеграция в сайт, веб-приложение

Для работы на сайте вам необходимо расположить сайт на хостинге или на локальном сервере (например openserver) который загружает ваши сайты с помощью Apache или Nginx. 
Для скачивания вам необходимо загрузить последнюю версию в [releases](https://github.com/zaebbb/scoring_widget/releases/tag/widget), файл с наименованием widget.zip
В нем содержится папка dist проекта
Извлекать файлы из корневой папки необязательно, подлежит извлечению только папки. 
Для наименьшего изменения содержимого файлов рекомендуется извлекать папки с файлами в корневую директорию вашего сайта
<p align="center">
<img src="https://sun3-8.userapi.com/s/v1/if2/RfWng8swuuwurkAiDN2DgN2TSX_MelwhOMERfsVchPDBf5QUAVfLZfNWxojgpxGB54z9N5ke7RtjAHbGq2GCO3dE.jpg?size=576x281&quality=96&type=album" width="400" />
</p>
Далее заходим в папке dist в файле [index.html](https://github.com/zaebbb/scoring_widget/blob/main/dist/index.html) копируем 4 строчки перед закрывающимся тегом "&#60;/head&#62;" и вставляем в HTML файл в котором будет располагаться виджет. Для отображения необходимо добавить следующих код в место расположения на сайте виджета:
&#60;div id="glasses-quiz-widget" data-source="https://example.com/" class="widget"&#62;&#60;/div&#62;
Если вы все сделали правильно должно отобразиться одна из двух примеров виджета:
<p align="center">
<img src="https://sun3-16.userapi.com/s/v1/if2/ARZTdxJFd6ROzM_PuVZhtLKVPKX3F_Pz0u0iJLE7qdxaHY0zY1zo4YK69wUblO9nVJN5lvi5IZsPJrJyG1lyMuYe.jpg?size=780x684&quality=96&type=album" width="400" />
</p>
В первом случае вы успешно завершили настройку виджета расположили его в корне файла, если вы расположили где то еще то следуйте инструкции далее: <br>
1. Вам необходимо изменить в файле HTML где вы подключали файлы путь до локальных файлов изменив путь с /static/media... на путь от корня вашего сайта до вашего сайта например /site/assets/widget/static/media и т.п. с учетом ваших названий директорий<br>
2. Также вам необходимо в файлах JS в папке static изменить все такие же названия /static/media... на наименования которые вы внесли в файл HTML.Сделать это можно с помощью редактора кода VSCode путем замены всех найденных значений с помощью CTRL + SHIFT + R. <br>
После данных действий виджет должен открыться без проблем со всеми загруженными картинками!

### Development установка

Для установки development версии вам необходимо наличии NodeJS на вашем локальном компьютере. 
Далее вам необходимо скачать весь проект, включая папки src, public а также все имеющиеся файлы, сделать это можно с помощью кнопки "Code" в GitHub. Далее после установки удаляем папку dist. <br>
Далее в командной строке переходим в директорию куда вы скопировали проект.
Вводим в командной строке: npm i <br>
После данных действий программа установит все необходимые компоненты. <br>
Development версия виджета установлена, вы можете ее запустить и разрабатывать или дорабатывать с помощью команды: npm start

## Допонительно

Данный виджет вы сможете встроить в любой ваш сайт

## Карта 

See the [open issues](https://github.com/zaebbb/scoring_widget/issues) for a list of proposed features (and known issues).

## Участие

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/zaebbb/scoring_widget/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/zaebbb/scoring_widget/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.




## Лицензия

Distributed under the MIT License. See [LICENSE](https://github.com/zaebbb/scoring_widget/blob/main/LICENSE.md) for more information.

## Автор

* **Владимир Михайлов** - *Студент техникума ГАПОУ СО "Каменск-Уральский техникум торговли и сервиса"* - [Владимир Михайлов](https://github.com/zaebbb) - *Верстка и программирование виджета*


