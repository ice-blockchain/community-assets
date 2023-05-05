package icesdk

import android.os.Bundle
import android.view.View
import android.view.ViewTreeObserver
import androidx.fragment.app.Fragment
import androidx.viewpager.widget.ViewPager
import icesdk.databinding.IcesdkPartAppScreensBinding

internal class AppScreensFragment : Fragment(R.layout.icesdk_part_app_screens) {
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val binding = IcesdkPartAppScreensBinding.bind(view)
        binding.icesdkFeaturesPager.pageMargin = resources.getDimensionPixelSize(R.dimen.icesdk_pages_margin)
        binding.icesdkDotsIndicator.attachTo(binding.icesdkFeaturesPager)
        binding.icesdkFeaturesPager.currentItem = 1
        binding.icesdkFeaturesPager.addOnPageChangeListener(object : ViewPager.SimpleOnPageChangeListener() {
            override fun onPageScrolled(position: Int, positionOffset: Float, positionOffsetPixels: Int) {
            }
        })
        binding.icesdkFeaturesPager.setPageTransformer(true, ZoomOutPageTransformer())
        val function: ViewTreeObserver.OnGlobalLayoutListener = object : ViewTreeObserver.OnGlobalLayoutListener {
            override fun onGlobalLayout() {
                binding.root.viewTreeObserver.removeOnGlobalLayoutListener(this)

                binding.icesdkScreen1.pivotY = binding.icesdkScreen1.measuredHeight.toFloat()
                binding.icesdkScreen2.pivotY = binding.icesdkScreen2.measuredHeight.toFloat()
                binding.icesdkScreen3.pivotY = binding.icesdkScreen3.measuredHeight.toFloat()

                binding.icesdkScreen1.pivotX = binding.icesdkScreen1.measuredWidth.toFloat()
                binding.icesdkScreen2.pivotX = binding.icesdkScreen2.measuredWidth.toFloat() / 2
                binding.icesdkScreen3.pivotX = 0f //binding.icesdkScreen3.measuredWidth.toFloat()

                binding.icesdkScreen1.scaleX = MIN_SCALE
                binding.icesdkScreen3.scaleX = MIN_SCALE
                binding.icesdkScreen1.scaleY = MIN_SCALE
                binding.icesdkScreen3.scaleY = MIN_SCALE
            }
        }
        binding.root.viewTreeObserver.addOnGlobalLayoutListener(function)
    }
}

private const val MIN_SCALE = 0.9f

private class ZoomOutPageTransformer : ViewPager.PageTransformer {

    override fun transformPage(view: View, position: Float) {
        view.apply {
            val pageWidth = width
            val pageHeight = height
            when {
                position < -1 -> { // [-Infinity,-1)
                    // This page is way off-screen to the left.
                    //alpha = 0f
                }

                position <= 1 -> { // [-1,1]
                    // Modify the default slide transition to shrink the page as well
                    val scaleFactor = Math.max(MIN_SCALE, 1 - Math.abs(position))
                    val vertMargin = pageHeight * (1 - scaleFactor) / 2
                    val horzMargin = pageWidth * (1 - scaleFactor) / 2
//                    translationX = if (position < 0) {
//                        horzMargin - vertMargin / 2
//                    } else {
//                        horzMargin + vertMargin / 2
//                    }

                    // Scale the page down (between MIN_SCALE and 1)
                    scaleX = scaleFactor
                    scaleY = scaleFactor
                    // Fade the page relative to its size.
//                    alpha = (MIN_ALPHA +
//                            (((scaleFactor - MIN_SCALE) / (1 - MIN_SCALE)) * (1 - MIN_ALPHA)))
                }

                else          -> { // (1,+Infinity]
                    // This page is way off-screen to the right.
//                    alpha = 0f
                }
            }
        }
    }
}
