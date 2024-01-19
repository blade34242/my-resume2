
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/blade34242/my-resume2">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">my-resume2</h3>

  <p align="center">
    Do you want to have a resume online you can use that project just mount your data with your pictures.
    <br />
    <a href="https://github.com/blade34242/my-resume2"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://homer.gellert-innovation.com">View Demo 1</a>
    <a href="https://jonathan.gellert-innovation.com">View Demo 2</a>
    ·
    <a href="https://github.com/blade34242/my-resume2/issues">Report Bug</a>
    ·
    <a href="https://github.com/blade34242/my-resume2/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#usage-with-docker">Usage with docker</a></li>
        <li><a href="#usage-without-docker">Usage without docker</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a NodeJS application which exposes a resume. I was searching was inspired from the design of my-resume see acknowledgement section. 
So I created a new one which 

[![Product Name Screen Shot][product-homer3]](https://homer.gellert-innovation.com)
[![Product Name Screen Shot2][product-jonathan1]](https://jonathan.gellert-innovation.com)
[![Product Name Screen Shot3][product-jonathan2]](https://jonathan.gellert-innovation.com)
[![Product Name Screen Shot4][product-jonathan3]](https://jonathan.gellert-innovation.com)
[![Product Name Screen Shot5][product-jonathanMobile]](https://jonathan.gellert-innovation.com)
[![Product Name Screen Shot6][product-homerMobile]](https://homer.gellert-innovation.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fblade34242%2Fmy-resume2%2Fmain%2Fpackage.json&query=%24.dependencies.bootstrap&label=Bootstrap)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fblade34242%2Fmy-resume2%2Fmain%2Fpackage.json&query=%24.dependencies.ejs&label=EJS)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fblade34242%2Fmy-resume2%2Fmain%2Fpackage.json&query=%24.dependencies.express&label=Express)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fblade34242%2Fmy-resume2%2Fmain%2Fpackage.json&query=%24.dependencies.log4js&label=log4js)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fblade34242%2Fmy-resume2%2Fmain%2Fpackage.json&query=%24.dependencies.path&label=path)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started


### Usage with docker

Application is dockerized 

[![Docker pull](https://img.shields.io/docker/pulls/blade34242/my-resume2)](https://hub.docker.com/r/blade34242/my-resume2)
[![Docker stars](https://img.shields.io/docker/stars/blade34242/my-resume2)](https://hub.docker.com/r/blade34242/my-resume2)
[![Docker size](https://img.shields.io/docker/image-size/blade34242/my-resume2/latest)](https://hub.docker.com/r/blade34242/my-resume2) 

Pull with

```sh
    docker pull blade34242/my-resume2:latest 
```

With that snippets you can run some examples, same from demo

```sh
   docker run --name HomerResume -p 8001:5555 -e example=1 -d blade34242/my-resume2:latest   
   docker run --name DevResume -p 8003:5555 -e example=2 -d blade34242/my-resume2:latest
```


If you like to start with your own resume

1. Create a folder, copy one of the examples me.json in <public/examples/cvExample2> and add your picture with me.jpg and background to thi

2. Run and add your mount path

With specific Port
```sh
    docker run --name MyResume -p 8022:5555 -v <MY_MOUNT_PATH_LOCAL>:/home/node/app/public/ress/mountedRess -d blade34242/my-resume2:latest
```

```sh
    docker run --name MyResume -v <MY_MOUNT_PATH_LOCAL>:/home/node/app/public/ress/mountedRess -d blade34242/my-resume2:latest
```

Add your own icons put the icon in the mounted folder and add some like this into me.json file
```json
        "links": [
        {

            "imagePath": "/ress/mountedRess/<YOUR_PICTURE>",
            "link": "<YOUR_LINK>"
        }
        ]
```



<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Usage without docker


1. Clone the repo
   ```sh
   git clone https://github.com/blade34242/my-resume2.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Customize the default examples me.json in <public/ress/mountedRess> with adding your picture with me.jpg and add background backgound.jpg.



<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] PDF Export Feature
- [ ] Logger mount file/folder

See the [open issues](https://github.com/blade34242/my-resume2/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->blade34242/my-resume2
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget toroject_description give the project a star! Thanks again!
github_username/repo_name
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Blade34242 - blade34242@gellert-professionals.com

Project Link: [https://github.com/blade34242/my-resume2](https://github.com/blade34242/my-resume2)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Got my inspiration of ](https://github.com/nouchka/docker-hackmyresume)
* [Best README Tempalte](https://github.com/othneildrew/Best-README-Template)
* [Font-Awesome Icons](https://fontawesome.com/icons)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->  
[product-homer1]: images/homer1.png
[product-homer2]: images/homer2.png
[product-homer3]: images/homer3.png
[product-jonathan1]: images/jonathan1.png
[product-jonathan2]: images/jonathan2.png
[product-jonathan3]: images/jonathan3.png
[product-jonathanMobile]: images/jonathan4.png
