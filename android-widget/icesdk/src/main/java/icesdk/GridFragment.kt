package icesdk

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.util.Log
import android.view.View
import androidx.fragment.app.Fragment
import icesdk.databinding.IcesdkPartGridBinding

internal class GridFragment : Fragment(R.layout.icesdk_part_grid) {
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        val binding = IcesdkPartGridBinding.bind(view)
        binding.icesdkToTop.setOnClickListener { requireActivity().toTop() }

        fun openLink(url: String) {
            try {
                startActivity(Intent(Intent.ACTION_VIEW, Uri.parse(url)))
            } catch (e: Exception) {
                Log.e("Ice", "Error", e)
            }
        }
        binding.icesdkTwitter.setOnClickListener { openLink("https://twitter.com/ice_blockchain") }
        binding.icesdkTelegram.setOnClickListener { openLink("https://t.me/iceblockchain") }
        binding.icesdkGithub.setOnClickListener { openLink("https://github.com/ice-blockchain") }
        binding.icesdkTube.setOnClickListener { openLink("http://youtube.com/@ice.blockchain") }
        binding.icesdkInst.setOnClickListener { openLink("https://www.instagram.com/ice.blockchain/") }
        binding.icesdkFb.setOnClickListener { openLink("https://facebook.com/ice.blockchain") }
        binding.icesdkIn.setOnClickListener { openLink("https://linkedin.com/company/ice-blockchain") }
    }
}

