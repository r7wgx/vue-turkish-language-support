# Vue nedir?

Vue (/vjuː/ olarak telaffuz edilir, view gibi) kullanıcı arayüzleri oluşturmaya yönelik bir JavaScript framework. Standart HTML, CSS ve JavaScript'in üzerine inşa edilir ve ister basit ister karmaşık olsun, kullanıcı arayüzlerini verimli bir şekilde geliştirmenize yardımcı olan bildirimsel ve bileşen tabanlı bir programlama modeli sağlar.

İşte minimal bir örnek:

```js
import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')

```

```html
<div id="app">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>
```

sonuç: [codepen](https://codepen.io/RFCH/pen/PoBEQGP)

Yukarıdaki örnek Vue'nun iki temel özelliğini göstermektedir:

- **Bildirimsel Render:** Vue, JavaScript durumuna dayalı olarak HTML çıktısını bildirimsel olarak tanımlamamıza olanak tanıyan bir şablon sözdizimiyle standart HTML'yi genişletir.
- **Tepkisellik:** Vue, JavaScript durum değişikliklerini otomatik olarak izler ve değişiklikler gerçekleştiğinde DOM'u verimli bir şekilde günceller.

Şimdiden sorularınız olabilir - endişelenmeyin. Belgelerin geri kalanında her küçük ayrıntıyı ele alacağız. Şimdilik, lütfen Vue'nun neler sunduğunu üst düzeyde anlayabilmek için okumaya devam edin.

::: info Ön Koşullar
Belgelerin geri kalanında HTML, CSS ve JavaScript ile ilgili temel bilgiler varsayılmaktadır. Ön uç geliştirme konusunda tamamen yeniyseniz, ilk adım olarak doğrudan bir framework'e atlamak en iyi fikir olmayabilir - temelleri kavrayın ve sonra geri gelin! Bu JavaScript genel bakışı ile bilgi seviyenizi kontrol edebilirsiniz. Diğer framework'lerle önceden deneyim sahibi olmak yardımcı olur, ancak gerekli değildir.
:::

## The Progressive Framework

Vue, ön uç geliştirmede ihtiyaç duyulan ortak özelliklerin çoğunu kapsayan bir framework ve ekosistemdir. Ancak web son derece çeşitlidir - web üzerinde oluşturduğumuz şeyler biçim ve ölçek açısından büyük ölçüde farklılık gösterebilir. Bunu akılda tutarak, Vue esnek ve aşamalı olarak benimsenebilir olacak şekilde tasarlanmıştır. Kullanım durumunuza bağlı olarak Vue farklı şekillerde kullanılabilir:

- Derleme adımı olmadan statik HTML geliştirme
- Herhangi bir sayfaya Web Bileşeni olarak gömme
- Fullstack / Sunucu Tarafı Oluşturma (SSR)
- Jamstack / Statik Site Üretimi (SSG)
- Masaüstü, mobil, WebGL ve hatta terminali hedefleme

Bu kavramlar gözünüzü korkutuyorsa endişelenmeyin! Eğitim ve kılavuz yalnızca temel HTML ve JavaScript bilgisi gerektirir ve bunlardan herhangi birinde uzman olmadan da takip edebilmeniz gerekir.

Vue'yu yığınınıza en iyi şekilde nasıl entegre edeceğinizle ilgilenen deneyimli bir geliştiriciyseniz veya bu terimlerin ne anlama geldiğini merak ediyorsanız, bunları Vue Kullanma Yolları'nda daha ayrıntılı olarak tartışıyoruz.

Esnekliğe rağmen, Vue'nun nasıl çalıştığına ilişkin temel bilgiler tüm bu kullanım durumlarında paylaşılır. Şu anda sadece bir acemi olsanız bile, yol boyunca edindiğiniz bilgiler, gelecekte daha iddialı hedeflerin üstesinden gelmek için büyüdükçe yararlı olmaya devam edecektir. Deneyimli biriyseniz, aynı üretkenliği koruyarak çözmeye çalıştığınız sorunlara göre Vue'dan yararlanmanın en uygun yolunu seçebilirsiniz. Bu nedenle Vue'yu "Aşamalı Çerçeve" olarak adlandırıyoruz: sizinle birlikte büyüyebilen ve ihtiyaçlarınıza uyum sağlayabilen bir çerçeve.

## Tek Dosya Bileşenleri

Derleme aracının etkin olduğu çoğu Vue projesinde, Vue bileşenlerini Tek Dosya Bileşeni (\*.vue dosyaları olarak da bilinir, SFC olarak kısaltılır) adı verilen HTML benzeri bir dosya biçimi kullanarak yazarız. Bir Vue SFC, adından da anlaşılacağı gibi, bileşenin mantığını (JavaScript), şablonunu (HTML) ve stillerini (CSS) tek bir dosyada kapsüller. İşte SFC formatında yazılmış önceki örnek:

```html
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

SFC, Vue'nun tanımlayıcı bir özelliğidir ve kullanım durumunuz bir derleme kurulumunu gerektiriyorsa Vue bileşenlerini yazmanın önerilen yoludur. SFC'nin nasıl ve neden kullanıldığına dair daha fazla bilgiyi kendi özel bölümünde bulabilirsiniz - ancak şimdilik Vue'nun sizin için tüm derleme araçları kurulumunu gerçekleştireceğini bilmeniz yeterli.

## API Stilleri

Vue bileşenleri iki farklı API stilinde yazılabilir: **Options API** ve **Composition API**.

### Options API

Options API ile bir bileşenin mantığını veri, metot ve montaj gibi seçeneklerden oluşan bir nesne kullanarak tanımlarız. Seçenekler tarafından tanımlanan özellikler, bileşen örneğine işaret eden bu iç fonksiyonlarda açığa çıkar:

```html
<script>
export default {
  // data() işlevinden döndürülen özellikler reaktif durum haline gelir
  // ve `this` üzerinde açığa çıkacaktır.
  data() {
    return {
      count: 0
    }
  },

  // Methods, durumu değiştiren ve güncellemeleri tetikleyen işlevlerdir.
  // Şablonlarda olay dinleyicileri olarak bağlanabilirler.
  methods: {
    increment() {
      this.count++
    }
  },

  // Yaşam döngüsü kancaları farklı aşamalarda çağrılır
  // bir component yaşam döngüsü.
  // Bu fonksiyon bileşen monte edildiğinde çağrılacaktır.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

[Oyun Alanında Deneyin](https://sfc.vuejs.org/#eNptkUFugzAQRa8ysrpIlAS6RjRq1St06UUcM4ATsJE9Tlsh7t4xJGRTCQl/2/P+fM8oPoYhu0UUhSiD9mago7T4MzhPUGGtYkcwSguQ5+BRaTI3hECKMG1WitRmu1wAPqfo7UMBaBctFfC66Cn9pr20d1odLdOcDUCtIuhjgi5oULYC8qZp0EMc2AVDquqRWleF4mFhrPbYo6VnD8A0E7LZerf737kzNepf3SG0zl0XcrqP1ZOjuTHXYda5ZnP6apG9DBnVLaHABHgZn05TdtrOJtLyV+brS7Ig7IeOE7ACKM+RyFl4153R1zcp1ghSHD/vaM433n2mqcyXEi4v85Ul9sL0aUiHXg3ZJTjLA5xbZ+R8EKRY30kKnnDSUrREQyjyPNQ6jf0SMuebnFeZZz/TY4ahP5y9+w7oGSzFI5eY/gD25b2f)

### Composition API

Composition API ile, içe aktarılan API işlevlerini kullanarak bir bileşenin mantığını tanımlarız. SFC'lerde, Composition API tipik olarak `<script setup> `ile kullanılır. Setup niteliği, Vue'nun Composition API'yi daha az boilerplate ile kullanmamızı sağlayan derleme zamanı dönüşümlerini gerçekleştirmesini sağlayan bir ipucudur. Örneğin, `<script setup> `içinde bildirilen içe aktarmalar ve üst düzey değişkenler / işlevler doğrudan şablonda kullanılabilir.

İşte aynı şablonla aynı bileşen, ancak bunun yerine Composition API ve `<script setup>` kullanılıyor:

```vue
<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

```

[Oyun alanında deneyın](https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiwgb25Nb3VudGVkIH0gZnJvbSAndnVlJ1xuXG4vLyByZWFjdGl2ZSBzdGF0ZVxuY29uc3QgY291bnQgPSByZWYoMClcblxuLy8gZnVuY3Rpb25zIHRoYXQgbXV0YXRlIHN0YXRlIGFuZCB0cmlnZ2VyIHVwZGF0ZXNcbmZ1bmN0aW9uIGluY3JlbWVudCgpIHtcbiAgY291bnQudmFsdWUrK1xufVxuXG4vLyBsaWZlY3ljbGUgaG9va3Ncbm9uTW91bnRlZCgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBUaGUgaW5pdGlhbCBjb3VudCBpcyAke2NvdW50LnZhbHVlfS5gKVxufSlcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxidXR0b24gQGNsaWNrPVwiaW5jcmVtZW50XCI+Q291bnQgaXM6IHt7IGNvdW50IH19PC9idXR0b24+XG48L3RlbXBsYXRlPiJ9)

### Hangisini Seçmeli?

Her iki API stili de ortak kullanım durumlarını tamamen karşılayabilir. Bunlar aynı temel sistem tarafından desteklenen farklı arayüzlerdir. Aslında, Options API, Composition API'nin üzerine uygulanmıştır! Vue hakkındaki temel kavramlar ve bilgiler iki stil arasında paylaşılmaktadır.

Options API, OOP dili geçmişinden gelen kullanıcılar için tipik olarak sınıf tabanlı bir zihinsel modelle daha iyi uyum sağlayan bir "bileşen örneği" (örnekte görüldüğü gibi) kavramı etrafında merkezlenmiştir. Ayrıca, tepkisellik ayrıntılarını soyutlayarak ve seçenek grupları aracılığıyla kod organizasyonunu zorlayarak daha acemi dostudur.

Composition API, reaktif durum değişkenlerini doğrudan bir işlev kapsamında bildirmeye ve karmaşıklığı ele almak için birden fazla işlevden durumu bir araya getirmeye odaklanır. Daha serbest biçimlidir ve etkili bir şekilde kullanılabilmesi için Vue'da tepkiselliğin nasıl çalıştığının anlaşılmasını gerektirir. Buna karşılık esnekliği, mantığı düzenlemek ve yeniden kullanmak için daha güçlü modeller sağlar.

İki stil arasındaki karşılaştırma ve Composition API'nin potansiyel faydaları hakkında daha fazla bilgiyi [Composition API SSS](https://vuejs.org/guide/extras/composition-api-faq.html) bölümünde bulabilirsiniz.

Vue'da yeniyseniz, genel önerimiz şu şekildedir:

- Öğrenme amacıyla, size anlaşılması daha kolay görünen stili tercih edin. Yine, temel kavramların çoğu iki stil arasında paylaşılmaktadır. Diğer stili her zaman daha sonra seçebilirsiniz.

- Üretim kullanımı için:
  - Derleme araçları kullanmıyorsanız veya Vue'yu öncelikle aşamalı geliştirme gibi düşük karmaşıklığa sahip senaryolarda kullanmayı planlıyorsanız Options API'yi tercih edin.
  - Vue ile tam uygulamalar oluşturmayı planlıyorsanız Composition API + Single-File Components seçeneğini tercih edin.

Öğrenme aşamasında yalnızca bir stile bağlı kalmak zorunda değilsiniz. Belgelerin geri kalanında, uygun olan yerlerde her iki stilde de kod örnekleri sunulacaktır ve sol kenar çubuğunun üst kısmındaki API Tercih anahtarlarını kullanarak istediğiniz zaman bunlar arasında geçiş yapabilirsiniz.
