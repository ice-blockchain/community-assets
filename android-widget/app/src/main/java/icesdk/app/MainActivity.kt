package icesdk.app

import android.app.Activity
import android.os.Bundle
import android.preference.PreferenceManager
import android.view.View
import android.widget.AdapterView
import android.widget.ArrayAdapter
import android.widget.Button
import android.widget.LinearLayout
import android.widget.Spinner
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.edit
import icesdk.IceSdk
import java.util.Locale

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val linearLayout = findViewById<LinearLayout>(R.id.root)!!

        val spinner = findViewById<Spinner>(R.id.spinner)

        val adapter = ArrayAdapter(this, android.R.layout.simple_spinner_item, getLanguages().map { it.language })
        spinner.adapter = adapter
        spinner.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
            override fun onItemSelected(parent: AdapterView<*>?, view: View?, position: Int, id: Long) {
                PreferenceManager.getDefaultSharedPreferences(this@MainActivity).edit(true) {
                    putString("debug_lang", adapter.getItem(spinner.selectedItemPosition))
                }
                setLocale(this@MainActivity)
                Toast.makeText(this@MainActivity, "Lang changed", Toast.LENGTH_SHORT).show()
            }

            override fun onNothingSelected(parent: AdapterView<*>?) {
            }
        }


        for (i in 1..8) {
            val button = Button(this)
            button.text = "$i"
            button.setOnClickListener {
                IceSdk.tryShow(this, i.toLong())

            }
            linearLayout.addView(button)
        }
    }

    fun getLanguages(): List<Locale> {
        val locales = BuildConfig.TRANSLATION_ARRAY
        val result = Locale.getAvailableLocales().filter { locale ->
            locales.any { appLocale -> appLocale.equals(locale.displayLanguage, ignoreCase = true) }
        }

        return locales.map { Locale.forLanguageTag(it) }
    }

    fun setLocale(a: Activity) {
        if (!PreferenceManager.getDefaultSharedPreferences(a).contains("debug_lang")) return
        val lang = PreferenceManager.getDefaultSharedPreferences(a).getString("debug_lang", "en")

        val res = a.resources
        val dm = res.displayMetrics
        val conf = res.configuration
        if (conf.locale.language == lang) return
        conf.setLocale(Locale(lang))
        res.updateConfiguration(conf, dm)
    }
}
