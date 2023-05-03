package icesdk

import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.isVisible
import icesdk.IceSdk.DEFAULT
import icesdk.databinding.IcesdkMainLayoutBinding

internal class IcesdkActivity : AppCompatActivity() {

    val screen by lazy { intent?.getLongExtra("screen", DEFAULT) ?: DEFAULT }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val binding = IcesdkMainLayoutBinding.inflate(layoutInflater)
        setContentView(binding.root)

        setResult(RESULT_OK)

        val onDownload: (v: View) -> Unit = {
            openMarket()
            analytics(Download)
        }
        binding.icesdkDownloadBar.icesdkDownloadButton.setOnClickListener(onDownload)
        binding.icesdkDownloadBar.root.setOnClickListener(onDownload)

        val scrollView = binding.icesdkScroll
        binding.icesdkStub.layoutResource = when (screen.toInt()) {
            1    -> R.layout.icesdk_scene1
            2    -> R.layout.icesdk_scene2
            3    -> R.layout.icesdk_scene3
            4    -> R.layout.icesdk_scene4
            5    -> R.layout.icesdk_scene5
            6    -> R.layout.icesdk_scene6
            7    -> R.layout.icesdk_scene7
            8    -> R.layout.icesdk_scene8
            else -> R.layout.icesdk_scene4
        }
        binding.icesdkStub.inflate()

        scrollView.viewTreeObserver.addOnScrollChangedListener {
            val view = scrollView.getChildAt(scrollView.childCount - 1)
            val top = scrollView.scrollY
            if (top > 50) findViewById<View>(R.id.icesdk_close_btn)?.isVisible = true
        }

        findViewById<View>(R.id.icesdk_close_btn)?.setOnClickListener { finish() }
    }
}
