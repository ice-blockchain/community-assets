package icesdk

import android.os.Bundle
import android.view.View
import androidx.fragment.app.Fragment
import icesdk.databinding.IcesdkPartFooterToTopBinding

internal class FooterToTopFragment : Fragment(R.layout.icesdk_part_footer_to_top) {
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        val binding = IcesdkPartFooterToTopBinding.bind(view)
        binding.icesdkToTop.setOnClickListener { requireActivity().toTop() }
    }
}

