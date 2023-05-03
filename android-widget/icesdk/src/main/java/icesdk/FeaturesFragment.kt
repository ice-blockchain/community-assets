package icesdk

import android.os.Bundle
import android.view.View
import androidx.fragment.app.Fragment
import icesdk.databinding.IcesdkPartFeaturesBinding

internal class FeaturesFragment : Fragment(R.layout.icesdk_part_features) {
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        val binding = IcesdkPartFeaturesBinding.bind(view)
        binding.icesdkFeaturesPager.pageMargin = resources.getDimensionPixelSize(R.dimen.icesdk_pages_margin)
        binding.icesdkDotsIndicator.attachTo(binding.icesdkFeaturesPager)
    }
}
