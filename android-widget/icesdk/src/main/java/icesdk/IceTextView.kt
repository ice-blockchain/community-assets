package icesdk

import android.content.Context
import android.graphics.Typeface
import android.text.style.ImageSpan
import android.text.style.StyleSpan
import android.text.style.TypefaceSpan
import android.util.AttributeSet
import androidx.appcompat.widget.AppCompatTextView
import androidx.core.content.ContextCompat
import androidx.core.text.set
import androidx.core.text.toSpannable

internal class IceTextView @JvmOverloads constructor(context: Context, attrs: AttributeSet? = null, defStyleAttr: Int = 0) :
    AppCompatTextView(context, attrs, defStyleAttr) {
    override fun setText(text: CharSequence?, type: BufferType?) {

        val mark = "[[ice]]"
        val indexOf = text?.indexOf(mark) ?: -1
        if (indexOf >= 0) {
            val spannable = text!!.toSpannable()
            val drawable = ContextCompat.getDrawable(context, R.drawable.icesdk_ice)!!

            val size = (1.2 * paint.textSize).toInt()
            drawable.setBounds(0, 0, size, size)
            spannable[indexOf..(indexOf + mark.length)] = ImageSpan(drawable, ImageSpan.ALIGN_BASELINE)

            val dd = text.indexOf("10")
            if (dd > -1) {
                spannable[dd..(dd + 2)] = TypefaceSpan("lato_bold")
                spannable[dd..(dd + 2)] = StyleSpan(Typeface.BOLD)
            }
            super.setText(spannable, type)
            return
        }
        super.setText(text, type)
    }
}
