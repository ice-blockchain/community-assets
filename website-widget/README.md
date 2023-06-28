# Website widget
Our website widget is easy to integrate into any website and allows users to effortlessly expand their team by inviting their web community to join their ice team.

With this new addition to the ice network, we are excited to empower our users to take their earning potential to the next level and build strong connections with their web audience. So try it out today and see the benefits of building a solid, active micro-community on ice.

![ice website widget](https://i.imgur.com/IzBa6rk.jpeg)


## Basic implementation
This implementation is straightforward and requires minimal programming knowledge.

The widget automatically translates into multiple languages depending on the browser language. The content is automatically translated, and it might contain minor errors.
**Contribute by submitting changes if you notice any translation errors!**

#### 1. Include JS
Add the bellow code into the website `<head>` section.

```
<script src="https://ice-production.b-cdn.net/website-widget/external.js"></script>
```

#### 2. Create widget container
Add the bellow code into the website `<body>` section.

```
    <div id="container"></div>
```
#### 3. Initialize widget
Add the bellow code into the website `<body>` section.

Replace **newBrand** with your website brand name,
Replace the logo image URL with yours.

```
<script
    //initWidget(containerId, logoURL, couponValue)
    initWidget('container', https://yourWebsite.com/logo.png, 'newBrand')
</script>
```

#### 4. Example HTML
This is a simple example of the implementation.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0">
    <title>ice: Decentralized Future</title>
    <script src="https://ice-production.b-cdn.net/website-widget/external.js"></script>
</head>
<body class="body">
<div id="container"></div>
<script>
    initWidget('container', 'https://yourWebsite.com/logo.png', 'newBrand', 'en')
</script>
</body>
</html>

```

# Advanced implementation
Please host the same structure as in **server** directory.

#### 1. Localization
Edit `server/data/localization.json` file if you wish to customize the text or translations.
You can customize the `server/images/en.png` for each translated language by creating a new image for each language.
Edit **en.png** on Figma [here](https://www.google.com)

#### 2. Add host
Please set the **host** const in `external.js` to your domain.

```
const host = 'https://example.com'
```

#### 3. Update script link
You need to update your script URL to where you host it.

```
<script src="https://YOUR_WEBSITE_URL/external.js"></script>
```

