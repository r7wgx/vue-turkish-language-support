# Hızlı Başlangıç

## Vue Online'ı deneyin

- Vue'nun tadına hızlıca bakmak için doğrudan oyun alanımızda [deneyebilirsiniz](https://sfc.vuejs.org/#eNo9j01qAzEMha+iapMWOjbdDm6gu96gG2/cjJJM8B+2nBaGuXvlpBMwtj4/JL234EfO6toIRzT1UObMexvpN6fCMNHRNc+w2AgwOXbPL/caoBC3EjcCCPU0wu6TvE/wlYqfnnZ3ae2PXHKMfiwQYArZOyYhAHN+2y9LnwLrarTQ7XeOuTFch5Am8u8WRbcoktGPbnzFOXS3Q3BZXWqKkuRmy/4L1eK4GbUoUTtbPDPnOmpdj4ee/1JVKictlSot8hxIUQ3Dd0k/lYoMtrglwfUPkXdoJg==).
- Herhangi bir derleme adımı olmadan düz bir HTML kurulumunu tercih ediyorsanız, başlangıç noktası olarak bu JSFiddle'ı kullanabilirsiniz.
- Node.js ve derleme araçları kavramına zaten aşinaysanız, StackBlitz'de doğrudan tarayıcınızda eksiksiz bir derleme kurulumunu da deneyebilirsiniz.

## Vue Uygulaması Oluşturma

:::info Ön Koşullar

- Komut satırına aşinalık
- Node.js sürüm 16.0 veya üstünü yükleyin
  :::

Bu bölümde, yerel makinenizde bir Vue Tek Sayfa Uygulamasını nasıl iskeleleyeceğinizi tanıtacağız. Oluşturulan proje, Vite tabanlı bir derleme kurulumu kullanacak ve Vue Single-File Components (SFCs) kullanmamıza izin verecektir.

Node.js'nin güncel bir sürümünün yüklü olduğundan emin olun, ardından komut satırınızda aşağıdaki komutu çalıştırın (> işareti olmadan):

```shell
> npm init vue@latest
```

Bu komut, resmi Vue proje iskelesi aracı olan create-vue'yu yükleyecek ve çalıştıracaktır. TypeScript ve test desteği gibi çeşitli isteğe bağlı özellikler için istemler sunulacaktır:

```
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add Cypress for both Unit and End-to-End testing? … No / Yes
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

Bir seçenek hakkında emin değilseniz, şimdilik enter tuşuna basarak Hayır'ı seçmeniz yeterlidir. Proje oluşturulduktan sonra, bağımlılıkları yüklemek ve geliştirme sunucusunu başlatmak için talimatları izleyin:

```shell
> cd <your-project-name>
> npm install
> npm run dev
```

Artık ilk Vue projenizi çalıştırmış olmalısınız! Oluşturulan projedeki örnek bileşenlerin Options API yerine Composition API ve `<script setup>` kullanılarak yazıldığını unutmayın. İşte bazı ek ipuçları:

- Önerilen IDE kurulumu Visual Studio Code + Volar uzantısıdır. Başka düzenleyiciler kullanıyorsanız, IDE desteği bölümüne göz atın.
- Arka uç çerçeveleriyle entegrasyon da dahil olmak üzere daha fazla araç ayrıntısı Araç Kılavuzu'nda tartışılmaktadır.
- Temel derleme aracı Vite hakkında daha fazla bilgi edinmek için Vite belgelerine göz atın.
- TypeScript kullanmayı tercih ederseniz TypeScript Kullanım Kılavuzu'na göz atın.

Uygulamanızı üretime göndermeye hazır olduğunuzda aşağıdakileri çalıştırın:

```shell
> npm run build
```

Bu, projenin `./dist` dizininde uygulamanızın üretime hazır bir derlemesini oluşturacaktır. Uygulamanızı üretime gönderme hakkında daha fazla bilgi edinmek için Üretim Dağıtım Kılavuzu'na göz atın.

## CDN'den Vue kullanma

Vue'yu bir kod etiketi aracılığıyla doğrudan bir CDN'den kullanabilirsiniz:

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

Burada unpkg kullanıyoruz, ancak jsdelivr veya cdnjs gibi npm paketlerini sunan herhangi bir CDN de kullanabilirsiniz. Elbette bu dosyayı indirip kendiniz de sunabilirsiniz.

Bir CDN'den Vue kullanırken, "derleme adımı" söz konusu değildir. Bu, kurulumu çok daha basit hale getirir ve statik HTML'yi geliştirmek veya bir arka uç çerçevesiyle entegre etmek için uygundur. Ancak, Tek Dosya Bileşeni (SFC) sözdizimini kullanamazsınız.

### Global Derlemeyi Kullanma

Yukarıdaki bağlantı, tüm üst düzey API'lerin global Vue nesnesi üzerinde özellikler olarak gösterildiği global Vue yapısını yükler. İşte global yapıyı kullanan tam bir örnek:

```javascript
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">{{ message }}</div>

<script>
  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>

```

### ES Modül Yapısını Kullanma

Belgelerin geri kalanı boyunca, öncelikle ES modülleri sözdizimini kullanacağız. Çoğu modern tarayıcı artık ES modüllerini yerel olarak desteklemektedir, bu nedenle Vue'yu bir CDN'den bunun gibi yerel ES modülleri aracılığıyla kullanabiliriz:

```javascript
<div id="app">{{ message }}</div>

<script type="module">
  import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>

```

`<script type="module">` kullandığımıza ve içe aktarılan CDN URL'sinin bunun yerine Vue'nun ES modülleri yapısına işaret ettiğine dikkat edin.

### Eşlemeleri içe aktarmayı etkinleştirme

Yukarıdaki örnekte, tam CDN URL'sinden içe aktarıyoruz, ancak belgelerin geri kalanında bunun gibi kodlar göreceksiniz:

```javascript
import { createApp } from 'vue'
```

İçe Aktarma Haritalarını kullanarak tarayıcıya vue içe aktarımının yerini öğretebiliriz:

```javascript
<script type="importmap">
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
  }
</script>

<div id="app">{{ message }}</div>

<script type="module">
  import { createApp } from 'vue'

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>

```

İçe aktarma haritasına diğer bağımlılıklar için de girişler ekleyebilirsiniz - ancak bunların kullanmayı düşündüğünüz kütüphanenin ES modülleri sürümünü gösterdiğinden emin olun.

:::info Haritaları İçe Aktar Tarayıcı Desteği

Haritaları içe aktarma özelliği Chromium tabanlı tarayıcılarda varsayılan olarak desteklenmektedir, bu nedenle öğrenme sürecinde Chrome veya Edge kullanmanızı öneririz.

Firefox kullanıyorsanız, yalnızca 102+ sürümünde desteklenmektedir ve şu anda about:config'teki dom.importMaps.enabled seçeneği aracılığıyla etkinleştirilmesi gerekmektedir.

Tercih ettiğiniz tarayıcı henüz içe aktarma haritalarını desteklemiyorsa, es-module-shims ile çoklu doldurma yapabilirsiniz.
:::

::: warning Üretim Kullanımına İlişkin Notlar

Şimdiye kadarki örnekler Vue'nun geliştirme derlemesini kullanmaktadır - Vue'yu üretimde bir CDN'den kullanmayı düşünüyorsanız, Üretim Dağıtım Kılavuzu'na göz attığınızdan emin olun.
:::

### Modülleri Bölme

Kılavuzun derinliklerine indikçe, kodumuzu ayrı JavaScript dosyalarına bölmemiz gerekebilir, böylece daha kolay yönetilebilirler. Örneğin:

```html
<script type="module">
  import { createApp } from 'vue'
  import MyComponent from './my-component.js'

  createApp(MyComponent).mount('#app')
</script>
```

```javascript
// my-component.js
export default {
  data() {
    return { count: 0 }
  },
  template: `<div>count is {{ count }}</div>`
}
```

Yukarıdaki index.html dosyasını doğrudan tarayıcınızda açarsanız, ES modülleri file:// protokolü üzerinden çalışamadığı için bir hata verdiğini göreceksiniz. Bunun çalışabilmesi için index.html dosyanızı http:// protokolü üzerinden yerel bir HTTP sunucusu ile sunmanız gerekir.

Yerel bir HTTP sunucusu başlatmak için önce Node.js'yi yükleyin ve ardından HTML dosyanızın bulunduğu dizinde komut satırından npx serve'i çalıştırın. Doğru MIME türleriyle statik dosyalar sunabilen başka bir HTTP sunucusu da kullanabilirsiniz.

İçe aktarılan bileşenin şablonunun bir JavaScript dizesi olarak özetlendiğini fark etmiş olabilirsiniz. VSCode kullanıyorsanız, es6-string-html uzantısını yükleyebilir ve dizgilerin önüne /_html_/ yorumunu ekleyerek sözdizimi vurgulaması elde edebilirsiniz.

### Composition API'yi Derleme Adımı Olmadan Kullanma

Composition API için örneklerin çoğu `<script setup>` sözdizimini kullanacaktır. Composition API'yi derleme adımı olmadan kullanmayı düşünüyorsanız, setup() seçeneğinin kullanımına bakın.
