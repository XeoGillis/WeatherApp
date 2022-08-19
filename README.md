# Weather app

This project is an opensource weather app, developed by Xeo Gillis and Jonas Bostoen. The goal of this project was to create a simple react app using a third party api and prepare ourselves better for upcoming heatwaves and other extreme weather. 

## How to use
If you want to host this app yourself. You firstly will have to get an api key from the weather api service we used https://www.weatherapi.com/. Once you got an api key, you will have to download all files in this repository and have node.js installed. The next step is to go into the src folder of the project and find the config.json file. Here you will want to paste your api key.


```json
{
  "api_base_url": "https://api.weatherapi.com/v1",
  "api_key": "paste_your_api_key",
  "min_loading": "250"
}
```

The last step is to build the app using the command `yarn build`  in the terminal.


Now you are the proud owner of the static files of the app, these can be put on a web server to be viewed from. 

This project is 100% open source, but we are not responsible for any illegal usage of this software or failures and bugs this software may cause. 
