package icesdk

import android.animation.ObjectAnimator
import android.os.Bundle
import android.view.View
import androidx.core.animation.doOnEnd
import androidx.fragment.app.Fragment
import icesdk.databinding.IcesdkPartSubHeaderBinding

internal class SubHeaderFragment : Fragment(R.layout.icesdk_part_sub_header) {
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        val binding = IcesdkPartSubHeaderBinding.bind(view)
        val onCopy: (v: View) -> Unit = {
            requireContext().copyToClipboard()
            binding.icesdkCopyText.setText(R.string.icesdk_copied)
            val animator = ObjectAnimator.ofFloat(binding.icesdkCopyText, View.TRANSLATION_Y, 0f, 15f, -15f, 0f).setDuration(200)
            animator.start();
        }
        binding.icesdkCopyButton.setOnClickListener(onCopy)
        binding.icesdkCopyText.setOnClickListener(onCopy)
        binding.icesdkPlaystore.setOnClickListener {
            requireContext().analytics(GooglePlay)
            requireContext().openMarket()
        }

        val animator = ObjectAnimator.ofFloat(binding.icesdkThumb, View.TRANSLATION_Y, 0f, 15f, -15f, 0f).setDuration(300)
        animator.doOnEnd {
            animator.startDelay = 1000
            animator.start()
        }
        animator.start();
    }
}

