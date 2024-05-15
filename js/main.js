// инициализация свайпера
const swipeModal = new Swiper('.swiper-modal', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-modal .swiper-button-next',
    prevEl: '.swiper-modal .swiper-button-prev',
  }
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function (e) {
      const cur = document.getElementById('slide' + e.activeIndex)
      cur.classList.add('active')
    },
  }
});

swiper.on('activeIndexChange', function (e) {
  const prev = document.getElementById('slide' + e.previousIndex)
  const active = document.getElementById('slide' + e.activeIndex)

  const page = location.pathname.split('/').pop().replace('.html', '')
  if (String(page) === 'blog') {
    const blogHead = document.querySelector('.blog__head h2')
    let sliders = document.querySelectorAll('.swiper-slide')
    sliders = Array.from(sliders)
    const curSlide = sliders[e.activeIndex]
    const textTitle = curSlide.querySelector('.blog-slide-title').textContent
    blogHead.textContent = textTitle

    let asideTexts = curSlide.querySelectorAll('.post-aside__text')
    asideTexts.forEach((el, i) => {
      console.log(e.activeIndex === i)
      el.classList.toggle('post-aside__text_w', e.activeIndex === i)
    })
  }

  if (e.isEnd) {
    active.classList.add('opacity')
  }
  prev.classList.remove('active', 'opacity')
  active.classList.add('active')
});

// modal
const modal = document.querySelector('.modal')
const boxModal = document.querySelector('.modal__box')
const closeModal = document.querySelector('.modal__close')
const btnsActive = document.querySelectorAll('.tour__img')

btnsActive?.forEach(el => el.addEventListener('click', (e) => {
  const target = e.target
  modal.classList.add('active');

  const imgs = target.closest('.tour__left').querySelectorAll('.tour__img')
  const wrap = modal.querySelector('.swiper-modal .swiper-wrapper')
  wrap.innerHTML = ''

  imgs.forEach(img => {
    const slide = document.createElement('div')
    slide.classList.add('swiper-slide')
    slide.innerHTML = `<img src="${img.src}" alt="${img.alt}">`
    wrap.append(slide)
  })
}))

modal?.addEventListener('click', (e) => {
  const clickInBox = boxModal.contains(e.target)
  if (!clickInBox) {
    modal.classList.remove('active')
  }
})


