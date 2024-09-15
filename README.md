
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/blade34242/my-resume2">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">my-resume2</h3>

  <p align="center">
    Do you want to have a resume online? You can use this project to easily mount your data with your pictures.
    <br />
    <a href="https://github.com/blade34242/my-resume2"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://homer.gellert-innovation.com">View Demo 1</a>
    ·
    <a href="https://jonathan.gellert-innovation.com">View Demo 2</a>
    ·
    <a href="https://github.com/blade34242/my-resume2/issues">Report Bug</a>
    ·
    <a href="https://github.com/blade34242/my-resume2/issues">Request Feature</a>
  </p>
</div>

---

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
        <li><a href="#usage-with-docker">Usage with Docker</a></li>
        <li><a href="#usage-without-docker">Usage without Docker</a></li>
      </ul>
    </li>
    <li><a href="#changelog">Changelog</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

---

<!-- ABOUT THE PROJECT -->
## About The Project

This is a NodeJS application that exposes a resume. I was inspired by the design of other resume projects (see Acknowledgments) and created my own version.

### Demo Screenshots

[![Product Screenshot][product-homer3]](https://homer.gellert-innovation.com)
[![Product Screenshot][product-jonathan1]](https://jonathan.gellert-innovation.com)
[![Product Screenshot][product-jonathan2]](https://jonathan.gellert-innovation.com)
[![Product Screenshot][product-jonathan3]](https://jonathan.gellert-innovation.com)
[![Product Screenshot][product-jonathanMobile]](https://jonathan.gellert-innovation.com)
[![Product Screenshot][product-homerMobile]](https://homer.gellert-innovation.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fblade34242%2Fmy-resume2%2Fmain%2Fpackage.json&query=%24.dependencies.bootstrap&label=Bootstrap)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fblade34242%2Fmy-resume2%2Fmain%2Fpackage.json&query=%24.dependencies.ejs&label=EJS)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fblade34242%2Fmy-resume2%2Fmain%2Fpackage.json&query=%24.dependencies.express&label=Express)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fblade34242%2Fmy-resume2%2Fmain%2Fpackage.json&query=%24.dependencies.log4js&label=log4js)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fblade34242%2Fmy-resume2%2Fmain%2Fpackage.json&query=%24.dependencies.path&label=path)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


---

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these steps.

### Usage with Docker

The application is dockerized.

[![Docker pull](https://img.shields.io/docker/pulls/blade34242/my-resume2)](https://hub.docker.com/r/blade34242/my-resume2)
[![Docker stars](https://img.shields.io/docker/stars/blade34242/my-resume2)](https://hub.docker.com/r/blade34242/my-resume2)
[![Docker size](https://img.shields.io/docker/image-size/blade34242/my-resume2/latest)](https://hub.docker.com/r/blade34242/my-resume2) 

Pull with:

```sh
docker pull blade34242/my-resume2:latest 
```

You can run examples from the demos using:

```sh
docker run --name HomerResume -p 8001:5555 -e example=1 -d blade34242/my-resume2:latest   
docker run --name DevResume -p 8003:5555 -e example=2 -d blade34242/my-resume2:latest
```

To start with your own resume, follow these steps:

1. Create a folder, copy one of the example files like `me.json` from `<public/examples/cvExample2>`, and add your image as `me.jpg` and background image.

2. Run the following command and add your mount path:

```sh
docker run --name MyResume -p 8022:5555 -v <MY_MOUNT_PATH_LOCAL>:/home/node/app/public/ress/mountedRess -d blade34242/my-resume2:latest
```

3. Customize your icons and images as described in the instructions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Usage without Docker

1. Clone the repo:

   ```sh
   git clone https://github.com/blade34242/my-resume2.git
   ```

2. Install NPM packages:

   ```sh
   npm install
   ```

3. Customize the `me.json` in `<public/ress/mountedRess>`, add your image as `me.jpg` and background as `background.jpg`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- CHANGELOG -->
## Changelog

### v3.4 - New Features
- Added new config enableTestimonials and showTestimonialsInMain
- Option to display testimonials in main content or under interests
- Enhanced logging with log4js

### v3.3 - New Features
- Enhanced logging with log4js

### v3.2 - BugFix

### v3.1 - Enhancements and Bug Fixes
- Fixed custom icon loading in mounted resume folder
- Optimized Docker image size and build process
- Improved layout for mobile responsiveness
- Updated documentation

### v3.0 - Initial Release
- Project setup and initial configuration
- Added Docker support with sample resume examples
- Basic resume structure with customizable `me.json`
- Integrated Express, EJS, and Bootstrap for layout and styling
- Provided example resumes (Homer and Jonathan)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Config Explaination

### enableTestimonials:

    Type: Boolean (true / false)
    Description: This configuration controls whether the testimonials section is displayed. If set to true, the testimonials will be shown on the page. If set to false, the testimonials section will be hidden.

### showTestimonialsInMain:

    Type: Boolean (true / false)
    Description: This setting controls the location of the testimonials section. When true, the testimonials will appear in the main content area (below work experience). If false, the testimonials will be displayed under the "Interests" section.

<!-- ROADMAP -->
## Roadmap

- [ ] PDF Export Feature
- [ ] Logger mount file/folder

See the [open issues](https://github.com/blade34242/my-resume2/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this project better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- CONTACT -->
## Contact

Blade34242 - blade34242@gellert-professionals.com

Project Link: [https://github.com/blade34242/my-resume2](https://github.com/blade34242/my-resume2)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Got my inspiration from Docker HackMyResume](https://github.com/nouchka/docker-hackmyresume)
* [Best README Template](https://github.com/othneildrew/Best-README-Template)
* [Font-Awesome Icons](https://fontawesome.com/icons)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- MARKDOWN LINKS & IMAGES -->
[product-homer1]: images/homer1.png
[product-homer2]: images/homer2.png
[product-homer3]: images/homer3.png
[product-jonathan1]: images/jonathan1.png
[product-jonathan2]: images/jonathan2.png
[product-jonathan3]: images/jonathan3.png
[product-jonathanMobile]: images/jonathan4.png
[product-homerMobile]: images/homer4.png