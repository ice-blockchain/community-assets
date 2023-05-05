package icesdk

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.content.Intent.FLAG_ACTIVITY_NEW_TASK
import androidx.annotation.IntRange
import com.google.firebase.remoteconfig.FirebaseRemoteConfig
import com.google.firebase.remoteconfig.ktx.get

object IceSdk {

    const val REQUEST_CODE = 78412
    internal const val DEFAULT = 4L

    fun tryShow(context: Activity, urls: List<String>): Boolean {
        val starter: (Intent, Int) -> Unit = context::startActivityForResult
        return tryShow(context, urls, starter)
    }

    fun tryShow(context: Context, urls: List<String>): Boolean {
        val starter: (Intent, Int) -> Unit = { i, _ -> context.startActivity(i) }
        return tryShow(context, urls, starter, true)
    }

    private fun tryShow(context: Context, urls: List<String>, starter: (Intent, Int) -> Unit, newTask: Boolean = false): Boolean {
        val prefs = Prefs(context)
        prefs.urls(urls)

        val remoteConfig = FirebaseRemoteConfig.getInstance()
        remoteConfig.fetchAndActivate()

        val showScreen = remoteConfig["show_ice"].asBoolean()
        if (showScreen && prefs.enoughTimePassed()) {
            val screenNo = remoteConfig["ice_screen_number"].asLong()
            starter(
                Intent(context, IcesdkActivity::class.java).putExtra("screen", screenNo)
                    .apply {
                        if (newTask)
                            addFlags(FLAG_ACTIVITY_NEW_TASK)
                    },
                REQUEST_CODE
            )
            prefs.updateLastShown()
            return true
        }
        return false
    }

    fun tryShow(context: Context, @IntRange(from = 1, to = 8) screenNo: Long) {
        context.startActivity(Intent(context, IcesdkActivity::class.java).putExtra("screen", screenNo))
    }
}
