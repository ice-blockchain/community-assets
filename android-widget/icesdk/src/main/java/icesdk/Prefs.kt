package icesdk

import android.content.Context

internal class Prefs(private val context: Context) {
    private val prefs = context.getSharedPreferences("icesdk.prefs", Context.MODE_PRIVATE)

    fun enoughTimePassed(): Boolean {
        val time = prefs.getLong("lastShown", 0)
        val now = System.currentTimeMillis()
        val elapsed = if (BuildConfig.DEBUG)
            15 * 1000L
        else
            24 * 60 * 60 * 1000L
        return now - elapsed > time
    }

    fun updateLastShown() {
        prefs.edit().putLong("lastShown", System.currentTimeMillis()).apply()
    }

    fun urls(urls: List<String>) {
        prefs.edit().putString("urls", urls.joinToString("|")).apply()
    }

    fun urls(): List<String> = prefs.getString("urls", "")?.split("|").orEmpty()
}
