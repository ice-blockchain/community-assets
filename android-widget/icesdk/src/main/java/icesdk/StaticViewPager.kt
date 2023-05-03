package icesdk

import android.content.Context
import android.util.AttributeSet
import android.view.View
import android.view.ViewGroup
import androidx.viewpager.widget.PagerAdapter
import androidx.viewpager.widget.ViewPager

/**
 * View pager used for a finite, low number of pages, where there is no need for
 * optimization.
 */
internal class StaticViewPager : ViewPager {
    /**
     * Initialize the view.
     *
     * @param context
     * The application context.
     */
    constructor(context: Context?) : super(context!!)

    /**
     * Initialize the view.
     *
     * @param context
     * The application context.
     * @param attrs
     * The requested attributes.
     */
    constructor(context: Context?, attrs: AttributeSet?) : super(context!!, attrs)

    override fun onFinishInflate() {
        super.onFinishInflate()

        // Make sure all are loaded at once
        val childrenCount = childCount
        offscreenPageLimit = childrenCount - 1

        // Attach the adapter
        adapter = object : PagerAdapter() {
            override fun instantiateItem(container: ViewGroup, position: Int): Any {
                return container.getChildAt(position)
            }

            override fun isViewFromObject(arg0: View, arg1: Any): Boolean {
                return arg0 === arg1
            }

            override fun getCount(): Int {
                return childrenCount
            }

            override fun destroyItem(container: View, position: Int, `object`: Any) {}
        }
    }

    override fun onMeasure(widthMeasureSpec: Int, heightMeasureSpec: Int) {
        var heightMeasureSpec = heightMeasureSpec
        super.onMeasure(widthMeasureSpec, heightMeasureSpec)
        var height = 0
        val childWidthSpec = MeasureSpec.makeMeasureSpec(
            Math.max(
                0, MeasureSpec.getSize(widthMeasureSpec) - paddingLeft - paddingRight
            ), MeasureSpec.getMode(widthMeasureSpec)
        )
        for (i in 0 until childCount) {
            val child = getChildAt(i)
            child.measure(childWidthSpec, MeasureSpec.UNSPECIFIED)
            val h = child.measuredHeight
            if (h > height) height = h
        }
        if (height != 0) {
            heightMeasureSpec = MeasureSpec.makeMeasureSpec(height, MeasureSpec.EXACTLY)
        }
        super.onMeasure(widthMeasureSpec, heightMeasureSpec)
    }
}
