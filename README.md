# TakeShape Starter Landing Page Shape Array

The following is a guide to launching a Landing Page Shape Array Example project that injects Shape Array data into a NextJS template.

To learn more about the template, read the [template's TEMPLATE-README file](./TEMPLATE-README.md).

## Instructions

1. Create a TakeShape project with the pattern in this repo. The button below will deploy the project:

* <a href="https://app.takeshape.io/add-to-takeshape?repo=https://github.com/takeshape/takeshape-starter-shape-array/tree/main/.takeshape/pattern"><img alt="Deploy To TakeShape" src="https://camo.githubusercontent.com/1b580e3ce353d235bde0f376ca35b0fb26d685f3750a3013ae4b225dd3aaf344/68747470733a2f2f696d616765732e74616b6573686170652e696f2f32636363633832352d373062652d343331632d396261302d3130616233386563643361372f6465762f38653266376264612d306530382d346564652d613534362d3664663539626536613862622f4465706c6f79253230746f25323054616b65536861706525343032782e706e673f6175746f3d666f726d6174253243636f6d7072657373" width="205" height="38" data-canonical-src="https://images.takeshape.io/2cccc825-70be-431c-9ba0-10ab38ecd3a7/dev/8e2f7bda-0e08-4ede-a546-6df59be6a8bb/Deploy%20to%20TakeShape%402x.png?auto=format%2Ccompress" style="max-width:100%;"></a>

2. Follow our documentation to [create a read-only API Key](https://app.takeshape.io/docs/api/api-keys).

3. Find your API Endpoint by navigating to your project in the TakeShape web client and clicking on the Home tab. Scroll down, and you'll see your API Endpoint in the `Useful Snippets` section on the bottom right. Refer to the image below:

![Useful Snippets](./images/useful-snippets.png)

4. In the terminal on your local machine, clone this repo with `git clone https://github.com/takeshape/takeshape-starter-shape-array`

5. Cd into the newly-created project directory, and run `npm install

6. Open the project directory in your favorite IDE, then edit `.env.local-example` to replace the text that says `YOUR-ENDPOINT-HERE` with your API Endpoint. Replace the text that says `YOUR-API-KEY-HERE` with your API Key. When you're done, rename the file to `.env`.

6. Run `npm run dev` in your console.

6. Open `localhost:3000` in your browser.

6. Viola! Your template should be working!

![The template page](./images/final-page.png)

## Learn More

Check out [our docs on this project](https://app.takeshape.io/docs/data/recipes/landing-page) to learn how this example works.