# Android SDK widget
Our Android SDK widget is easy to integrate into any Android app and allows users to effortlessly expand their team by inviting their app users to join their ice micro-community.


![Ice Android Widget](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjZmZGMwYjNmMDZhYWJlNWZmOWJjY2FkMmM5NjM0NjhmZjVjNjEwNiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/zN0rgUMX7QQFeImsmJ/giphy.gif)

## Installation

To install **sdk** add `icesdk` directory to your project then add a style with an icon of your app.

```xml
<style name="Icesdk.Logo" parent="">
    <item name="android:src">@drawable/my_special_icon</item>
</style>
```

Add your promocode string to `app/src/main/res/values/strings.xml` which is your **ice invitation code**.

```xml
<string name="icesdk_promo_code_value">invitation_code</string>
```

You need to update the "Lorem ipsum" and "App_name" text from `strings.xml`.
```xml
    <string name="icesdk_we_are_excited_to_announce">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</string>
    <string name="icesdk_team">App_name Team</string>
```

## Usage

You can start **isesdk** any time you think it is suitable according to your app's flow. We suggest you start it when app starts or resumes from recents. For this you can can add the following code to you application class:

```kotlin
ProcessLifecycleOwner.get().lifecycle.addObserver(object : DefaultLifecycleObserver {
    override fun onStart(owner: LifecycleOwner) {
        IceSdk.tryShow(this@App, links)
    }
})
```

The `links` parameter is a list of 8 strings which contain a list of urls to the play store market using analytics. Usually it is deeplinks referring to one screen like `https://myspecial.deeplink/screen-one`.

## Firebase integration

The sdk will use your default firebase instance. So to manage sdk behavior you have to add two parameters

* `show_ice` - bool flag to start or stop showing ice every 24h
* `ice_screen_number` - integer value of the screen number 1..8

The sdk produces analytics events

* `download` - when a user clicks download button
* `google_play` - when a user clicks one of the google play icons

You can also define an experiment changing `ice_screen_number` with your desired target goal.

## Example

Follow example `app` as a reference and see all eight widget styles.