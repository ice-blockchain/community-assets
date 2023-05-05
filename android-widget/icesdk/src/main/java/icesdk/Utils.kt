package icesdk

import android.app.Activity
import android.content.ActivityNotFoundException
import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.widget.Toast
import androidx.core.content.ContextCompat
import androidx.core.os.bundleOf
import com.google.firebase.analytics.FirebaseAnalytics
import com.google.firebase.remoteconfig.FirebaseRemoteConfig
import com.google.firebase.remoteconfig.ktx.get

internal fun Context.openMarket() {
    val APPLICATION_ID = "io.ice.app"

    val screenNo = screenNumber() - 1
    val prefs = Prefs(this)

    val uri: Uri = Uri.parse(prefs.urls()[screenNo])
    val goToMarket = Intent(Intent.ACTION_VIEW, uri)
    goToMarket.addFlags(
        Intent.FLAG_ACTIVITY_NO_HISTORY or Intent.FLAG_ACTIVITY_NEW_DOCUMENT or Intent.FLAG_ACTIVITY_MULTIPLE_TASK
    )
    try {
        startActivity(goToMarket)
    } catch (e: ActivityNotFoundException) {
        Toast.makeText(this, "Can't open browser!", Toast.LENGTH_SHORT).show()
    }
}

private fun screenNumber(): Int = FirebaseRemoteConfig.getInstance()["ice_screen_number"].asLong().toInt().takeIf { it >= 1 } ?: 1

internal fun Context.copyToClipboard() {
    val clipboard = ContextCompat.getSystemService(this, ClipboardManager::class.java)
    val clip = ClipData.newPlainText("promo", getString(R.string.icesdk_promo_code_value))
    clipboard?.setPrimaryClip(clip)
}

internal fun Activity.toTop() {
    finish()
}

internal sealed class Event(val value: String) {

}

internal object GooglePlay : Event("google_play")
internal object Download : Event("download")

internal fun Context.analytics(event: Event) {
    val screenNo = screenNumber()
    FirebaseAnalytics.getInstance(this).logEvent(event.value, bundleOf("ice_screen_number" to " ice #$screenNo"))
}
