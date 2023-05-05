package icesdk

import android.animation.ObjectAnimator
import android.os.Bundle
import android.view.View
import androidx.fragment.app.Fragment
import icesdk.databinding.IcesdkPartFooterInviteCopyBinding

internal class FooterInviteFragment : Fragment(R.layout.icesdk_part_footer_invite_copy) {
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        val binding = IcesdkPartFooterInviteCopyBinding.bind(view)
        val onCopy: (v: View) -> Unit = {
            requireContext().copyToClipboard()
            binding.icesdkCopyText.setText(R.string.icesdk_copied)
            val animator = ObjectAnimator.ofFloat(binding.icesdkCopyText, View.TRANSLATION_Y, 0f, 15f, -15f, 0f).setDuration(200)
            animator.start();
        }
        binding.icesdkCopyButton.setOnClickListener(onCopy)
        binding.icesdkCopyText.setOnClickListener(onCopy)
        binding.icesdkPlaystore.setOnClickListener {
            requireContext().openMarket()
            requireContext().analytics(GooglePlay)
        }
    }
}

