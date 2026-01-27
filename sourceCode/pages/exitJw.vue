<template>
  <div class="outer">
    <div class="param">
      <span
        >我離開絕不是因為不良交往、不道德、貪財這些原因，我想在這裡講一下我離開的原因。</span
      >
    </div>
    <!-- point one 中央長老團-->
    <div class="param">
      <span class="subtitle">第一點</span
      >，中央長老團真的是受神聖力量啟示嗎？這裡引用一些組織出版物的資料。在<a
        :href="getLink(11)"
        target="_blank"
        >《耶和華見證人——在普世團結一致地遵行上帝的旨意》</a
      >這個冊子中的《團結一致地牧養上帝的羊群》指出「他們並非受上帝所感示，因此不是永不犯錯的，但是他們將上帝那萬無謬誤的話語視為世上最高的權威，全心信賴聖經的指引，並且在順服上帝的旨意方面積聚了一生的豐富經驗。」
      <figure class="screenshot">
        <img :src="getScreenshot(11)" />
        <figcaption>{{ getCaption(11) }}</figcaption>
      </figure>
      然後，在2017年2月的守望台研讀版《今天誰正領導上帝的子民？》這篇文章，在<a
        :href="getLink(9)"
        target="_blank"
        >中文版</a
      >指出「今天的中央長老團成員都不完美，所以還是會在解釋聖經或提出組織的訓示上出錯。」這看起來並沒有什麼問題，因為大家都知道人是不完美的，所以出錯是一件很正常的事。不過在<a
        :href="getLink(10)"
        target="_blank"
        >英文版</a
      >卻指出「The Governing Body is neither inspired nor infallible. Therefore,
      it can err in doctrinal matters or in organizational direction.」Google
      翻譯後的結果就是「中央長老團既非受聖靈啟示，也非絕對正確。因此，它在教義問題或組織方向上都可能犯錯。」這並不是說中央長老團不完美有錯。可以回想耶和華以前也任用了不完美的人去寫下不少預言，甚至是聖經。但這些人所寫下的東西是完全正確，但文章卻說在解釋聖經或提出組織的訓示會出錯，這不是有問題嗎？
      <figure class="screenshot">
        <img :src="getScreenshot(9)" />
        <figcaption>{{ getCaption(9) }}</figcaption>
      </figure>
      我們每個人都知道中央長老團是忠信睿智的奴隸，是耶和華所任用的，受上帝神聖力量任命的基督徒。在<a
        :href="getLink(13)"
        target="_blank"
        >《永遠享受美好的生命——互動式聖經課程中》</a
      >就提到「同樣，今天也有一小群長老，正在為上帝的子民提供滋養信心的食物，督導傳道工作。他們是耶和華見證人的中央長老團。這群長老就是受耶穌委派的「忠信睿智的奴隸」。中央長老團的所有成員都是受上帝神聖力量任命的基督徒。」所以如果中央長老團是受神聖力量任命，但又不是受神聖力量啟示，這不是很矛盾嗎？
      <figure class="screenshot">
        <img :src="getScreenshot(13)" />
        <figcaption>{{ getCaption(13) }}</figcaption>
      </figure>
    </div>
    <!-- point one 中央長老團-->

    <!-- point two 真理越來越明亮 -->
    <div class="param">
      <span class="subtitle">第二點</span
      >，真理真的越來越明亮嗎？先在這裡定義一下何謂真理，真理就是真實、客觀且恆常不變的道理或規律。而我以前學到的就是真理是不可能改變，而且是可以被證明的。這裡想舉出三個例子。
    </div>
    <!-- 大學教育 -->
    <div class="param">
      首先是額外教育。在1972年的警醒中<a :href="getLink(2)" target="_blank"
        >《對大學教育的新評估》</a
      >這篇文章都是對大學教育提出批評。
      <figure class="screenshot">
        <img :src="getScreenshot(2)" />
        <figcaption>{{ getCaption(2) }}</figcaption>
      </figure>
      然後在1989年12月8日警醒中，在
      <a :href="getLink(1)" target="_blank">《大學教育——真的有利嗎？》</a
      >這個部份，文章表達大學教育會令人對信仰和道德造成影響。
      <figure class="screenshot">
        <img :src="getScreenshot(1)" />
        <figcaption>{{ getCaption(1) }}</figcaption>
      </figure>
      但是在1992年11月1日的守望台的其中一篇文章<a
        :href="getLink(3)"
        target="_blank"
        >《懷着目的而受教育》</a
      >卻說要對教育懷有平衡的看法。文章提到「完成最低程度的教育或甚至完成中學教育均不足以使他們有適當的收入去維持自己作先驅，他們也許可以考慮接受額外的教育或職業訓練」。因此接受額外的教育可以幫助人們從事全時服務。
      <figure class="screenshot">
        <img :src="getScreenshot(3)" />
        <figcaption>{{ getCaption(3) }}</figcaption>
      </figure>
      在1999年9月1日守望台的其中一篇文章<a :href="getLink(4)" target="_blank"
        >《青年人，要鍛鍊你的了解力！》</a
      >提到「年輕人作出這樣的計劃，好使自己在成年後有能力負起責任，特别是要實現做先驅的長期目標，這跟首先尋求上帝王國並沒有抵觸。年輕人接受額外教育，並不一定表示他們放棄了做先驅的目標。」所以接受額外教育並不是一個問題。
      <figure class="screenshot">
        <img :src="getScreenshot(4)" />
        <figcaption>{{ getCaption(4) }}</figcaption>
      </figure>
      但是，在2005年10月1日守望台中的文章<a :href="getLink(5)" target="_blank"
        >《你希望兒女有怎樣的前途？》</a
      >裡面又提出大學教育會使人有錯誤的目標，大學的環境會使人敗壞，會使人離棄信仰，甚至提醒父母「與其揀選一些有助於升讀大學的科目，父母和兒女倒不如考慮一下，哪些課程對追求屬靈的事業有更大幫助。」
      <figure class="screenshot">
        <img :src="getScreenshot(5)" />
        <figcaption>{{ getCaption(5) }}</figcaption>
      </figure>
      最後，就是在<a :href="getLink(6)" target="_blank"
        >《2025來自中央長老團的報導 (五)》</a
      >中表示要不要接受額外的教育是每個基督徒自己的決定，甚至任何人包括長老在內都不該評斷另一個基督徒所做的決定。
      <figure class="screenshot">
        <img :src="getScreenshot(6)" />
        <figcaption>{{ getCaption(6) }}</figcaption>
      </figure>
      所以整個時間線是1972年和1989年是不同意的，然後到1992年和1999年是同意，之後是2005年又變成不同意，最後就是2025年轉變成同意。
    </div>
    <!-- 大學教育 -->
    <!-- 器官移植 -->
    <div class="param">
      其次，是器官移植。在1968年6月1日的<a :href="getLink(7)" target="_blank"
        >守望台讀者來函</a
      >指出器官移植等於吃人肉，而耶和華只允許人吃動物的肉，因此組織認為器官移植是不對的。
      <figure class="screenshot">
        <img :src="getScreenshot(7)" />
        <figcaption>{{ getCaption(7) }}</figcaption>
      </figure>
      但在1980年9月15日的<a :href="getLink(8)" target="_blank">守望台讀者來函</a
      >指出「雖然聖經明令禁止人吃血，卻沒有任何聖經命令明確地禁止人吸收別人的體素。由於這緣故，每個面對這項決定的人均應當仔細和虔誠地考慮這件事。然後按照良心決定他在上帝面前可以或不可以怎樣行。」
      <figure class="screenshot">
        <img :src="getScreenshot(8)" />
        <figcaption>{{ getCaption(8) }}</figcaption>
      </figure>
    </div>
    <!-- 器官移植 -->

    <div class="param">
      組織經常引用箴言4：18「但義人的路好像明亮的晨光，越來越亮，直到正午。」但縱觀整篇箴言第4章，其實這並不是在講述教義會愈來愈清晰，而是人行為的標準，就像19節的提到「惡人的路黑暗無光」。所以18段的經文並不是解釋為什麼教義會調整。
    </div>

    <div class="param">
      那麼，我們假設箴言4：18真的代表真理會越來越明亮，那不應該是指組織會找到更多證據去證明自己的教義是正確的，令自己的教義更加完善，更能增加說服力嗎？例如，一個全黑的房間，盡頭放著一朵花，隨著有更多的燈，我們能看出花的不同部份，倒如花瓣、花柄，從而拼湊出房間裡面的是一朵花，而不是今次指出它是一粿草，下次指出它是一個多肉植物。真理越來越亮不也是同樣的意思嗎？不是應該每次都能看出更多證據去支持自己的教義，而不會跟之前所提出的不一樣，甚至是矛盾嗎？
    </div>

    <div class="param">
      這看起來是一件好事，因為現在允許額外教育和器官移植。但重點是為什麼這些觀點會不斷改變，甚至回到之前的立場。如果這是真理、是耶和華所指引的，這些教義會不斷改變嗎？耶和華給的指引會不斷改變嗎？在瑪拉基書3：6指出，耶和華從沒有改變，因此我相信耶和華所提供的指引也是非常清晰，不會過了一段時間就需要作出改變。
    </div>

    <div class="param">
      最後，可以看看「和平安全」。我們的認知都是列國宣佈和平安全了，大患難就會開始，錯誤的宗教會被攻擊和鏟除，然後上帝的子民也會受到攻擊，這會引發哈米吉多頓大戰，最後千年統治就會開始。但是在2026年2月的<a
        :href="getLink(12)"
        target="_blank"
        >守望台讀者來函</a
      >卻指出『我們不能肯定「和平安全了」的宣告會在什麼時候發出』，整篇文章都是用「可能」來「指出列國會在錯誤宗教被徹底摧毀之後發出宣告」。如果一個教義是真理的話，絕不會出現兩個可能性，只會找出更多證據去支持自己所提出的觀點。
    </div>

    <div class="param">
      或許有不少人會覺得我提出的觀點是荒謬、充滿錯誤，但對我來說，這就是我研讀完所得到的結果，這裡只講述其中幾點。我也想到我當初出傳道的理由是因為我要跟社區上的人傳講真正的訊息，不想別人受到錯誤的訊息影響。現在我無法再把耶和華見證人所提出的教義向其他人分享，因為我不知道教義在什麼時候又出現改變。萬一我上星期跟住戶提出某個教義是不對的，但下星期續訪時又向住戶提出這個教義現在沒有問題了，對方會怎樣想？所以，我並不認為耶和華帶領著耶和華見證人這個組織。耶和華見證人也不是耶和華的代表。我離開耶和華見證人這個組織並不代表我離開耶和華。我寫這篇文章的目的只是盡我自己的能力去告訴每一個人我離開的原因並不是因為這個世界有多精彩、受到朋友影響(我的朋友一直都很尊重我的信仰，甚至還鼓勵我堅持我認為對的事)、工作(我只追求不加班、準時收工)。另外，我也很感謝各位多年來的照顧，最後希望大家能像腓立比書3：13，14所說的要忘記背後，奮力向前，朝著目標努力奔跑。
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: '離開耶和華見證人的原因',
      meta: [
        {
          hid: 'og:personal-exitJw',
          name: 'og:exitJw',
          content: 'og:這個頁面是用來解釋我為什麼會離開耶和華見證人。',
        },
      ],
    }
  },
  data() {
    return {
      link: [
        {
          index: 1,
          href: 'https://wol.jw.org/yue-Hant/wol/d/r214/lp-chc/101989324#:~:text=%E4%BD%BF%E4%BA%BA%E9%97%9C%E6%B3%A8%E7%9A%84%E5%8F%A6%E4%B8%80%E9%BB%9E%E6%98%AF%EF%BC%8C%E8%AD%89%E6%93%9A%E5%85%85%E5%88%86%E8%A1%A8%E6%98%8E%EF%BC%8C%E6%8E%A5%E5%8F%97%E9%AB%98%E7%AD%89%E6%95%99%E8%82%B2%E8%88%87%E6%B8%9B%E5%B0%91%E5%B0%8D%E2%80%98%E6%A0%B8%E5%BF%83%E5%AE%97%E6%95%99%E5%8E%9F%E5%89%87%E7%9A%84%E4%BE%9D%E9%99%84%E2%80%99%E6%9C%89%E7%9B%B4%E6%8E%A5%E9%97%9C%E4%BF%82%E3%80%82%EF%BC%88%E3%80%8A%E4%B8%96%E4%BF%97%E6%99%82%E4%BB%A3%E7%9A%84%E8%81%96%E7%89%A9%E3%80%8B%EF%BC%89%E6%9C%89%E4%BA%9B%E5%9F%BA%E7%9D%A3%E5%BE%92%E9%9D%92%E5%B9%B4%E7%82%BA%E4%BA%86%E7%88%AD%E5%8F%96%E5%84%AA%E7%95%B0%E6%88%90%E7%B8%BE%E8%80%8C%E5%BF%BD%E7%95%A5%E4%BA%86%E5%B1%AC%E9%9D%88%E7%9A%84%E6%B4%BB%E5%8B%95%EF%BC%8C%E7%B5%90%E6%9E%9C%E4%BB%96%E5%80%91%E5%9C%A8%E5%A4%A7%E5%AD%B8%E6%89%80%E9%BC%93%E5%90%B9%E7%9A%84%E4%B8%96%E4%BF%97%E7%B2%BE%E7%A5%9E%E7%8C%9B%E7%83%88%E9%80%B2%E6%94%BB%E4%B8%8B%E6%8B%9B%E6%9E%B6%E7%84%A1%E5%8A%9B%EF%BC%8C%E4%B8%8D%E5%A0%AA%E4%B8%80%E6%93%8A%E3%80%82%E6%9C%89%E4%BA%9B%E4%BA%BA%E5%9B%A0%E6%AD%A4%E6%AF%81%E5%8E%BB%E4%BA%86%E8%87%AA%E5%B7%B1%E7%9A%84%E4%BF%A1%E4%BB%B0%E3%80%82',
        },
        {
          index: 2,
          href: 'https://wol.jw.org/cmn-Hant/wol/d/r24/lp-ch/101971400',
        },
        {
          index: 3,
          href: 'https://wol.jw.org/yue-Hant/wol/d/r214/lp-chc/1992804#:~:text=%E5%AE%8C%E6%88%90%E6%9C%80%E4%BD%8E%E7%A8%8B%E5%BA%A6%E7%9A%84%E6%95%99%E8%82%B2%E6%88%96%E7%94%9A%E8%87%B3%E5%AE%8C%E6%88%90%E4%B8%AD%E5%AD%B8%E6%95%99%E8%82%B2%E5%9D%87%E4%B8%8D%E8%B6%B3%E4%BB%A5%E4%BD%BF%E4%BB%96%E5%80%91%E6%9C%89%E9%81%A9%E7%95%B6%E7%9A%84%E6%94%B6%E5%85%A5%E5%8E%BB%E7%B6%AD%E6%8C%81%E8%87%AA%E5%B7%B1%E4%BD%9C%E5%85%88%E9%A9%85%EF%BC%8C%E4%BB%96%E5%80%91%E4%B9%9F%E8%A8%B1%E5%8F%AF%E4%BB%A5%E8%80%83%E6%85%AE%E6%8E%A5%E5%8F%97%E9%A1%8D%E5%A4%96%E7%9A%84%E6%95%99%E8%82%B2%E6%88%96%E8%81%B7%E6%A5%AD%E8%A8%93%E7%B7%B4',
        },
        {
          index: 4,
          href: 'https://wol.jw.org/yue-Hant/wol/d/r214/lp-chc/1999643#:~:text=%E5%B9%B4%E8%BC%95%E4%BA%BA%E4%BD%9C%E5%87%BA%E9%80%99%E6%A8%A3%E7%9A%84%E8%A8%88%E5%8A%83%EF%BC%8C%E5%A5%BD%E4%BD%BF%E8%87%AA%E5%B7%B1%E5%9C%A8%E6%88%90%E5%B9%B4%E5%BE%8C%E6%9C%89%E8%83%BD%E5%8A%9B%E8%B2%A0%E8%B5%B7%E8%B2%AC%E4%BB%BB%EF%BC%8C%E7%89%B9%E5%88%AB%E6%98%AF%E8%A6%81%E5%AF%A6%E7%8F%BE%E5%81%9A%E5%85%88%E9%A9%85%E7%9A%84%E9%95%B7%E6%9C%9F%E7%9B%AE%E6%A8%99%EF%BC%8C%E9%80%99%E8%B7%9F%E9%A6%96%E5%85%88%E5%B0%8B%E6%B1%82%E4%B8%8A%E5%B8%9D%E7%8E%8B%E5%9C%8B%E4%B8%A6%E6%B2%92%E6%9C%89%E6%8A%B5%E8%A7%B8%E3%80%82%EF%BC%88%E9%A6%AC%E5%A4%AA%E7%A6%8F%E9%9F%B36%3A33%EF%BC%89%E5%B9%B4%E8%BC%95%E4%BA%BA%E6%8E%A5%E5%8F%97%E9%A1%8D%E5%A4%96%E6%95%99%E8%82%B2%EF%BC%8C%E4%B8%A6%E4%B8%8D%E4%B8%80%E5%AE%9A%E8%A1%A8%E7%A4%BA%E4%BB%96%E5%80%91%E6%94%BE%E6%A3%84%E4%BA%86%E5%81%9A%E5%85%88%E9%A9%85%E7%9A%84%E7%9B%AE%E6%A8%99%E3%80%82',
        },
        {
          index: 5,
          href: 'https://wol.jw.org/yue-Hant/wol/d/r214/lp-chc/2005726',
        },
        {
          index: 6,
          href: 'https://www.jw.org/cmn-hant/%E6%96%B0%E8%81%9E/%E6%8C%89%E5%9C%B0%E5%8D%80%E6%9F%A5/%E5%85%A8%E7%90%83/2025%E4%BE%86%E8%87%AA%E4%B8%AD%E5%A4%AE%E9%95%B7%E8%80%81%E5%9C%98%E7%9A%84%E5%A0%B1%E5%B0%8E%E4%BA%94/',
        },
        {
          index: 7,
          href: 'https://wol.jw.org/cmn-Hant/wol/d/r24/lp-ch/1967845',
        },
        {
          index: 8,
          href: 'https://wol.jw.org/cmn-Hant/wol/d/r24/lp-ch/1980212#:~:text=%E9%9B%96%E7%84%B6%E8%81%96%E7%B6%93%E6%98%8E%E4%BB%A4%E7%A6%81%E6%AD%A2%E4%BA%BA%E5%90%83%E8%A1%80%EF%BC%8C%E5%8D%BB%E6%B2%92%E6%9C%89%E4%BB%BB%E4%BD%95%E8%81%96%E7%B6%93%E5%91%BD%E4%BB%A4%E6%98%8E%E7%A2%BA%E5%9C%B0%E7%A6%81%E6%AD%A2%E4%BA%BA%E5%90%B8%E6%94%B6%E5%88%A5%E4%BA%BA%E7%9A%84%E9%AB%94%E7%B4%A0%E3%80%82%E7%94%B1%E6%96%BC%E9%80%99%E7%B7%A3%E6%95%85%EF%BC%8C%E6%AF%8F%E5%80%8B%E9%9D%A2%E5%B0%8D%E9%80%99%E9%A0%85%E6%B1%BA%E5%AE%9A%E7%9A%84%E4%BA%BA%E5%9D%87%E6%87%89%E7%95%B6%E4%BB%94%E7%B4%B0%E5%92%8C%E8%99%94%E8%AA%A0%E5%9C%B0%E8%80%83%E6%85%AE%E9%80%99%E4%BB%B6%E4%BA%8B%E3%80%82%E7%84%B6%E5%BE%8C%E6%8C%89%E7%85%A7%E8%89%AF%E5%BF%83%E6%B1%BA%E5%AE%9A%E4%BB%96%E5%9C%A8%E4%B8%8A%E5%B8%9D%E9%9D%A2%E5%89%8D%E5%8F%AF%E4%BB%A5%E6%88%96%E4%B8%8D%E5%8F%AF%E4%BB%A5%E6%80%8E%E6%A8%A3%E8%A1%8C%E3%80%82',
        },
        {
          index: 9,
          href: 'https://wol.jw.org/cmn-Hant/wol/d/r24/lp-ch/2017283#:~:text=%E4%BB%8A%E5%A4%A9%E7%9A%84%E4%B8%AD%E5%A4%AE%E9%95%B7%E8%80%81%E5%9C%98%E6%88%90%E5%93%A1%E9%83%BD%E4%B8%8D%E5%AE%8C%E7%BE%8E%EF%BC%8C%E6%89%80%E4%BB%A5%E9%82%84%E6%98%AF%E6%9C%83%E5%9C%A8%E8%A7%A3%E9%87%8B%E8%81%96%E7%B6%93%E6%88%96%E6%8F%90%E5%87%BA%E7%B5%84%E7%B9%94%E7%9A%84%E8%A8%93%E7%A4%BA%E4%B8%8A%E5%87%BA%E9%8C%AF%E3%80%82',
        },
        {
          index: 10,
          href: 'https://wol.jw.org/en/wol/d/r1/lp-e/2017283#:~:text=The%20Governing%20Body%20is%20neither%20inspired%20nor%20infallible.%20Therefore%2C%20it%20can%20err%20in%20doctrinal%20matters%20or%20in%20organizational%20direction.',
        },
        {
          index: 11,
          href: 'https://wol.jw.org/yue-Hant/wol/d/r214/lp-chc/1101986011#:~:text=%E4%BB%96%E5%80%91%E4%B8%A6%E9%9D%9E%E5%8F%97%E4%B8%8A%E5%B8%9D%E6%89%80%E6%84%9F%E7%A4%BA%EF%BC%8C%E5%9B%A0%E6%AD%A4%E4%B8%8D%E6%98%AF%E6%B0%B8%E4%B8%8D%E7%8A%AF%E9%8C%AF%E7%9A%84%EF%BC%8C%E4%BD%86%E6%98%AF%E4%BB%96%E5%80%91%E5%B0%87%E4%B8%8A%E5%B8%9D%E9%82%A3%E8%90%AC%E7%84%A1%E8%AC%AC%E8%AA%A4%E7%9A%84%E8%A9%B1%E8%AA%9E%E8%A6%96%E7%82%BA%E4%B8%96%E4%B8%8A%E6%9C%80%E9%AB%98%E7%9A%84%E6%AC%8A%E5%A8%81%EF%BC%8C%E5%85%A8%E5%BF%83%E4%BF%A1%E8%B3%B4%E8%81%96%E7%B6%93%E7%9A%84%E6%8C%87%E5%BC%95%EF%BC%8C%E4%B8%A6%E4%B8%94%E5%9C%A8%E9%A0%86%E6%9C%8D%E4%B8%8A%E5%B8%9D%E7%9A%84%E6%97%A8%E6%84%8F%E6%96%B9%E9%9D%A2%E7%A9%8D%E8%81%9A%E4%BA%86%E4%B8%80%E7%94%9F%E7%9A%84%E8%B1%90%E5%AF%8C%E7%B6%93%E9%A9%97%E3%80%82',
        },
        {
          index: 12,
          href: 'https://www.jw.org/yue-hant/%E5%A4%9A%E5%AA%92%E9%AB%94%E5%9C%96%E6%9B%B8%E9%A4%A8/%E9%9B%9C%E8%AA%8C/%E5%AE%88%E6%9C%9B%E5%8F%B0%E7%A0%94%E8%AE%80%E7%89%882026%E5%B9%B42%E6%9C%88/%E8%AE%80%E8%80%85%E4%BE%86%E5%87%BD/',
        },
        {
          index: 13,
          href: 'https://wol.jw.org/yue-Hant/wol/d/r214/lp-chc/1102021254#:~:text=%E5%90%8C%E6%A8%A3%EF%BC%8C%E4%BB%8A%E5%A4%A9%E4%B9%9F%E6%9C%89%E4%B8%80%E5%B0%8F%E7%BE%A4%E9%95%B7%E8%80%81%EF%BC%8C%E6%AD%A3%E5%9C%A8%E7%82%BA%E4%B8%8A%E5%B8%9D%E7%9A%84%E5%AD%90%E6%B0%91%E6%8F%90%E4%BE%9B%E6%BB%8B%E9%A4%8A%E4%BF%A1%E5%BF%83%E7%9A%84%E9%A3%9F%E7%89%A9%EF%BC%8C%E7%9D%A3%E5%B0%8E%E5%82%B3%E9%81%93%E5%B7%A5%E4%BD%9C%E3%80%82%E4%BB%96%E5%80%91%E6%98%AF%E8%80%B6%E5%92%8C%E8%8F%AF%E8%A6%8B%E8%AD%89%E4%BA%BA%E7%9A%84%E4%B8%AD%E5%A4%AE%E9%95%B7%E8%80%81%E5%9C%98%E3%80%82%E9%80%99%E7%BE%A4%E9%95%B7%E8%80%81%E5%B0%B1%E6%98%AF%E5%8F%97%E8%80%B6%E7%A9%8C%E5%A7%94%E6%B4%BE%E7%9A%84%E3%80%8C%E5%BF%A0%E4%BF%A1%E7%9D%BF%E6%99%BA%E7%9A%84%E5%A5%B4%E9%9A%B8%E3%80%8D%E3%80%82%EF%BC%88%E9%A6%AC%E5%A4%AA%E7%A6%8F%E9%9F%B324%3A45%E4%B8%8A%E5%8D%8A%E9%83%A8%E5%88%86%EF%BC%89%E4%B8%AD%E5%A4%AE%E9%95%B7%E8%80%81%E5%9C%98%E7%9A%84%E6%89%80%E6%9C%89%E6%88%90%E5%93%A1%E9%83%BD%E6%98%AF%E5%8F%97%E4%B8%8A%E5%B8%9D%E7%A5%9E%E8%81%96%E5%8A%9B%E9%87%8F%E4%BB%BB%E5%91%BD%E7%9A%84%E5%9F%BA%E7%9D%A3%E5%BE%92',
        },
      ],
      caption: [
        {
          index: 11,
          text: '來自《耶和華見證人——在普世團結一致地遵行上帝的旨意》的截圖',
        },
        {
          index: 9,
          text: '來自《今天誰正領導上帝的子民？》的中英文版截圖',
        },
        {
          index: 13,
          text: '來自《永遠享受美好的生命——互動式聖經課程中》的截圖',
        },
        {
          index: 2,
          text: '來自《對大學教育的新評估》的截圖，每個分標題都是對大學教育的批評',
        },
        {
          index: 1,
          text: '來自1989年12月8日警醒的部份截圖',
        },
        {
          index: 3,
          text: '來自《懷着目的而受教育》的截圖',
        },
        {
          index: 4,
          text: '來自《青年人，要鍛鍊你的了解力！》的截圖',
        },
        {
          index: 5,
          text: '來自《你希望兒女有怎樣的前途？》的其中一個分標題的截圖',
        },
        {
          index: 6,
          text: '來自《2025來自中央長老團的報導 (五)》第5分23秒的字幕截圖',
        },
        {
          index: 7,
          text: '來自1968年6月1日守望台讀者來函的「聖經有反對人捐出自己的身體供醫學研究之用或接受器官的移植嗎？」的其中一部份截圖',
        },
        {
          index: 8,
          text: '來自1980年9月15日守望台讀者來函的「一個受了浸的基督徒若接受器官移植，例如眼球角膜或腎臟的移植，小組應該採取處分的行動嗎？」的其中一部份截圖',
        },
      ],
    }
  },
  methods: {
    getLink(index: number) {
      return this.link.find((f: { index: number }) => f.index === index)?.href
    },
    getScreenshot(index: number) {
      return `Screenshot_${index}.png`
    },
    getCaption(index: number) {
      return this.caption.find((f: { index: number }) => f.index === index)
        ?.text
    },
  },
  mounted() {
    console.log('歡迎找到彩蛋🎉')
    console.log(
      '另外，還有祝酒碰杯的問題，其實在2007年2月15日的讀者來函就討論過「聖經沒有提過祝酒的問題，為什麼耶和華見證人卻不參加？」'
    )
    console.log(
      '但是在近來的更新卻是因為現在人們已經不會把碰杯跟錯誤的宗教有聯繫，所以便允許了這件事。'
    )
    console.log(
      '不過在使徒行傳5：29提出，我們必須服從上帝的統治，而不是服從人。但是組織現在卻因為人的看法而改變了組織的觀點？上帝的看法反而變得沒那麼重要？'
    )
    console.log(
      '我們經常得到教導不要因為別人的目光而做耶和華看為惡的事？那麼，這就不適用於碰杯這件事嗎？'
    )
    console.log('可以看看這篇文章👇')
    console.log('https://wol.jw.org/cmn-Hant/wol/d/r24/lp-ch/2007128')
  },
})
</script>

<style>
.outer {
  margin: 1%;
}
.param {
  margin-bottom: 2rem;
  letter-spacing: 2px;
  line-height: 1.6;
}
.screenshot {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-style: dashed;
}
.screenshot > img {
  width: 100%;
}
figcaption {
  font-size: small;
}
.subtitle {
  color: darkgreen;
}
</style>
